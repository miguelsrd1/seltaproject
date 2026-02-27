/**
 * Post-build prerender script.
 * Spins up a local static server, loads the page in headless Chromium via
 * Puppeteer, waits for React to finish rendering, then writes the resulting
 * HTML back to dist/index.html so crawlers (and Googlebot) see real content.
 */

import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const PORT = 7788;

// Minimal MIME map — enough for a Vite build
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.woff2':'font/woff2',
  '.woff': 'font/woff',
  '.ttf':  'font/ttf',
  '.webp': 'image/webp',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

// ---------------------------------------------------------------------------
// Static file server
// ---------------------------------------------------------------------------
const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0]; // strip query string
  let filePath = path.join(distDir, urlPath === '/' ? 'index.html' : urlPath);

  // SPA fallback: any path that doesn't map to a real file → index.html
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve));
console.log(`[prerender] Static server → http://127.0.0.1:${PORT}`);

// ---------------------------------------------------------------------------
// Puppeteer render
// ---------------------------------------------------------------------------
let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Intercept requests: block media & external fonts to keep it fast
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    const url  = req.url();
    // Allow local resources; block heavy external resources
    if (type === 'media' || (type === 'font' && !url.includes('127.0.0.1'))) {
      req.abort();
    } else {
      req.continue();
    }
  });

  console.log('[prerender] Loading page…');
  await page.goto(`http://127.0.0.1:${PORT}/`, {
    waitUntil: 'networkidle2', // tolerates up to 2 open connections (e.g. Supabase WS)
    timeout: 30_000,
  });

  // Give framer-motion time to complete its initial animations
  await new Promise((r) => setTimeout(r, 2000));

  const html = await page.content();

  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
  console.log('[prerender] ✅  dist/index.html updated with pre-rendered content');

} finally {
  await browser?.close();
  server.close();
}

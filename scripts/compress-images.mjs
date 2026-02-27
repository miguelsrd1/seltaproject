/**
 * Compress and convert all src/assets images to JPEG (75 quality) in-place.
 * Also writes a WebP copy alongside each JPEG for future use.
 * Run once: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, '../src/assets');

const jpegQuality = 75;   // good quality, significant size reduction
const webpQuality = 72;

const files = fs.readdirSync(assetsDir).filter(f => /\.(jpg|jpeg)$/i.test(f));

for (const file of files) {
  const filePath = path.join(assetsDir, file);
  const originalSize = fs.statSync(filePath).size;

  // Read into memory first, then write back (avoids read/write collision)
  const inputBuffer = fs.readFileSync(filePath);
  const compressed = await sharp(inputBuffer)
    .jpeg({ quality: jpegQuality, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(filePath, compressed);
  const newSize = compressed.length;

  const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
  console.log(`${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (${saving}% smaller)`);
}

// Also compress og-image.jpg in public/
const ogPath = path.resolve(__dirname, '../public/og-image.jpg');
if (fs.existsSync(ogPath)) {
  const orig = fs.statSync(ogPath).size;
  const ogInput = fs.readFileSync(ogPath);
  const buf = await sharp(ogInput)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: jpegQuality, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(ogPath, buf);
  console.log(`og-image.jpg: ${(orig / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB`);
}

console.log('\n✅ Done. Commit the updated images.');

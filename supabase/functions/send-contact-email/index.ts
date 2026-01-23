import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Allowed origins for CORS - restrict to production domains
const allowedOrigins = [
  "https://seltaproject.lovable.app",
  "https://id-preview--f618a703-39df-424f-8de4-a9e728db8d18.lovable.app",
];

// Get CORS headers based on origin
function getCorsHeaders(origin: string | null): Record<string, string> {
  const isAllowed = origin && allowedOrigins.some(allowed => origin.startsWith(allowed.replace(/\/$/, '')));
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

// Validate origin
function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return allowedOrigins.some(allowed => origin.startsWith(allowed.replace(/\/$/, '')));
}

// Escape HTML to prevent injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validate phone format (optional, allows common formats)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d+\s()\-\.]{0,25}$/;
  return phoneRegex.test(phone);
}

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  location?: string;
  land?: string;
  budget?: string;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  // Validate origin
  if (!isOriginAllowed(origin)) {
    console.error("Request from unauthorized origin:", origin);
    return new Response(
      JSON.stringify({ error: "Forbidden" }),
      { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const body = await req.json();
    
    // Extract and validate fields with length limits
    const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
    const email = typeof body.email === "string" ? body.email.trim().slice(0, 255) : "";
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 25) : "";
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";
    const location = typeof body.location === "string" ? body.location.trim().slice(0, 100) : "";
    const land = typeof body.land === "string" ? body.land.trim().slice(0, 100) : "";
    const budget = typeof body.budget === "string" ? body.budget.trim().slice(0, 100) : "";

    // Validate required fields
    if (!name || name.length < 2) {
      return new Response(
        JSON.stringify({ error: "Nome é obrigatório (mínimo 2 caracteres)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (phone && !isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ error: "Formato de telefone inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Escape all user inputs for HTML embedding
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);
    const safeLocation = escapeHtml(location);
    const safeLand = escapeHtml(land);
    const safeBudget = escapeHtml(budget);

    // Send notification email to Selta Projects
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Selta Projects <onboarding@resend.dev>",
        // TODO: Change to info@seltaprojects.com after domain verification in Resend
        to: ["miguelrd.topo@gmail.com"],
        subject: `Novo Pedido de Consulta - ${safeName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 20px; margin-bottom: 30px; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px; }
              .section { margin-bottom: 25px; }
              .section-title { font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #666; margin-bottom: 8px; }
              .section-content { font-size: 16px; }
              .info-grid { display: table; width: 100%; }
              .info-row { display: table-row; }
              .info-label { display: table-cell; padding: 8px 0; font-weight: 500; width: 140px; color: #666; }
              .info-value { display: table-cell; padding: 8px 0; }
              .message-box { background: #f5f5f5; padding: 20px; margin-top: 10px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>SELTA PROJECTS</h1>
              </div>
              
              <p style="font-size: 18px; margin-bottom: 30px;">Novo pedido de consulta recebido:</p>
              
              <div class="section">
                <div class="section-title">Informações do Questionário</div>
                <div class="info-grid">
                  <div class="info-row">
                    <div class="info-label">Localização:</div>
                    <div class="info-value">${safeLocation || 'Não especificado'}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Terreno:</div>
                    <div class="info-value">${safeLand || 'Não especificado'}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Orçamento:</div>
                    <div class="info-value">${safeBudget || 'Não especificado'}</div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Dados de Contacto</div>
                <div class="info-grid">
                  <div class="info-row">
                    <div class="info-label">Nome:</div>
                    <div class="info-value">${safeName}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                  </div>
                  ${safePhone ? `
                  <div class="info-row">
                    <div class="info-label">Telefone:</div>
                    <div class="info-value"><a href="tel:${safePhone}">${safePhone}</a></div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              ${safeMessage ? `
              <div class="section">
                <div class="section-title">Mensagem</div>
                <div class="message-box">${safeMessage}</div>
              </div>
              ` : ''}
              
              <div class="footer">
                Este email foi enviado automaticamente pelo formulário de contacto do website Selta Projects.
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      console.error("Failed to send notification email:", error);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar o pedido. Por favor tente novamente." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to client
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Selta Projects <onboarding@resend.dev>",
        to: [email],
        subject: "Recebemos o seu pedido - Selta Projects",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.8; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { text-align: center; margin-bottom: 40px; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 3px; }
              .content { margin-bottom: 40px; }
              .content p { margin-bottom: 20px; }
              .footer { text-align: center; padding-top: 30px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>SELTA PROJECTS</h1>
              </div>
              
              <div class="content">
                <p>Olá ${safeName},</p>
                
                <p>Obrigado pelo seu interesse na Selta Projects. Recebemos o seu pedido de consulta e a nossa equipa entrará em contacto consigo brevemente.</p>
                
                <p>Estamos entusiasmados por poder ajudá-lo a transformar a sua visão numa realidade. Cada projeto que desenvolvemos é único e personalizado às necessidades de cada cliente.</p>
                
                <p>Se tiver alguma questão urgente, não hesite em contactar-nos diretamente.</p>
                
                <p>Com os melhores cumprimentos,<br>
                <strong>Equipa Selta Projects</strong></p>
              </div>
              
              <div class="footer">
                <p>Selta Projects | Construção de Casas de Luxo em Portugal</p>
                <p>info@seltaprojects.com</p>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const error = await confirmationRes.text();
      console.error("Failed to send confirmation email:", error);
      // Don't throw here - notification was sent successfully
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Ocorreu um erro ao processar o seu pedido. Por favor tente novamente." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

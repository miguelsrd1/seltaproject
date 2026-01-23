import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, location, land, budget }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to Selta Projects
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Selta Projects <onboarding@resend.dev>",
        to: ["info@seltaprojects.com"],
        subject: `Novo Pedido de Consulta - ${name}`,
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
                    <div class="info-value">${location || 'Não especificado'}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Terreno:</div>
                    <div class="info-value">${land || 'Não especificado'}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Orçamento:</div>
                    <div class="info-value">${budget || 'Não especificado'}</div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">Dados de Contacto</div>
                <div class="info-grid">
                  <div class="info-row">
                    <div class="info-label">Nome:</div>
                    <div class="info-value">${name}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                  ${phone ? `
                  <div class="info-row">
                    <div class="info-label">Telefone:</div>
                    <div class="info-value"><a href="tel:${phone}">${phone}</a></div>
                  </div>
                  ` : ''}
                </div>
              </div>
              
              ${message ? `
              <div class="section">
                <div class="section-title">Mensagem</div>
                <div class="message-box">${message}</div>
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
      throw new Error(`Failed to send notification email: ${error}`);
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
                <p>Olá ${name},</p>
                
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
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

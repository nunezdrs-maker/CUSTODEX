import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-0b2e23d4/health", (c) => {
  return c.json({ status: "ok" });
});

// Send email endpoint using Resend
app.post("/make-server-0b2e23d4/send-email", async (c) => {
  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return c.json({ 
        success: false, 
        error: "Email service not configured. Please set RESEND_API_KEY environment variable." 
      }, 500);
    }

    const body = await c.req.json();
    const { nombre, email, telefono, servicio, mensaje } = body;

    // Validate required fields
    if (!nombre || !email || !telefono || !mensaje) {
      return c.json({ 
        success: false, 
        error: "Missing required fields: nombre, email, telefono, mensaje" 
      }, 400);
    }

    // Send email using Resend API
    // With sandbox mode (onboarding@resend.dev), we send to nunezdrs@gmail.com
    // Configure Gmail forwarding to auto-forward to Custodexasesores@gmail.com
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "CUSTODEX <onboarding@resend.dev>",
        to: ["nunezdrs@gmail.com"], // Your verified email - configure forwarding to Custodexasesores@gmail.com
        subject: "📋 [CUSTODEX] Nueva solicitud de contacto",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1d3a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              Nueva Solicitud de Contacto
            </h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Teléfono:</strong> <a href="tel:${telefono}" style="color: #3b82f6;">${telefono}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Servicio de interés:</strong> ${servicio || 'No especificado'}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
              <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
              <p>Este mensaje fue enviado desde el formulario de contacto de <strong>asesoriaydefensaglobal.com</strong></p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return c.json({ 
        success: false, 
        error: `Failed to send email: ${data.message || 'Unknown error'}` 
      }, 500);
    }

    console.log("Email sent successfully:", data);
    return c.json({ 
      success: true, 
      message: "Email sent successfully",
      emailId: data.id 
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error sending email:", errorMessage);
    return c.json({ 
      success: false, 
      error: `Internal server error: ${errorMessage}` 
    }, 500);
  }
});

Deno.serve(app.fetch);
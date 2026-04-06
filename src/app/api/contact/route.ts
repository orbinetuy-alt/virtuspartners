import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nombre, empresa, email, telefono, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Virtus Partners <noreply@virtuspartners.net>",
    to: "info@virtuspartners.net",
    replyTo: email,
    subject: `Nuevo contacto web — ${nombre}`,
    html: `
      <div style="font-family: sans-serif; color: #1a1a1a; max-width: 560px;">
        <div style="background: #17458F; padding: 24px 32px;">
          <h1 style="color: #C9A55A; font-size: 18px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
            Virtus Partners
          </h1>
          <p style="color: #ffffff99; font-size: 12px; margin: 4px 0 0;">Nuevo mensaje desde el formulario web</p>
        </div>
        <div style="padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;">Nombre</td><td style="padding: 8px 0; font-weight: 600;">${nombre}</td></tr>
            ${empresa ? `<tr><td style="padding: 8px 0; color: #6b7280;">Empresa</td><td style="padding: 8px 0;">${empresa}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #17458F;">${email}</a></td></tr>
            ${telefono ? `<tr><td style="padding: 8px 0; color: #6b7280;">Teléfono</td><td style="padding: 8px 0;">${telefono}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px;">Mensaje</p>
            <p style="line-height: 1.7; margin: 0;">${mensaje.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
        <div style="padding: 16px 32px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none;">
          <p style="color: #9ca3af; font-size: 11px; margin: 0;">Puedes responder directamente a este email para contactar a ${nombre}.</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

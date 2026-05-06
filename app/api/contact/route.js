import nodemailer from "nodemailer";

export async function POST(req) {
  const { titulo, nombre, correo, mensaje, time } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@b1peru.com", // tu correo Zoho
      pass: "EhMKqkh9pr60",        // contraseña de aplicación Zoho
    },
  });

  try {
    await transporter.sendMail({
      from: "admin@b1peru.com",
      to: "admin@b1peru.com",
      subject: titulo,
      html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px; border-radius:8px; border:1px solid #ddd;">
      <h2 style="color:#3b82f6; margin-top:0;">Nueva consulta desde tu página</h2>
      
      <div style="background:#fff; padding:15px; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
        <p><strong style="color:#2563eb;">Nombre:</strong> ${nombre}</p>
        <p><strong style="color:#2563eb;">Correo:</strong> ${correo}</p>
        <p><strong style="color:#2563eb;">Asunto:</strong> ${titulo}</p>
        <p><strong style="color:#2563eb;">Mensaje:</strong><br/>${mensaje}</p>
      </div>

      <p style="font-size:12px; color:#6b7280; margin-top:15px;">
        Enviado el: ${time}
      </p>
    </div>
  `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

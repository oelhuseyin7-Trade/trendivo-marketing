import nodemailer from "nodemailer";

function formatApplicationEmail(data: any) {
  return `<h2>New Application Received</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  if (!data.role || !data.email) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    return res.status(500).json({ error: "Email not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Trendivo Marketing" <${gmailUser}>`,
      to: "trendivo.marketingima@gmail.com",
      subject: `New Application`,
      html: formatApplicationEmail(data),
    });

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Email failed" });
  }
}

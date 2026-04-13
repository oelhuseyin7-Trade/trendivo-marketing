import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, brand, message } = req.body as Record<string, string>;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    logger.warn("Email credentials not configured — contact message received but email not sent");
    res.json({ success: true, warned: "email_not_configured" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"Trendivo Marketing" <${gmailUser}>`,
      to: "o.elhuseyin7@gmail.com",
      subject: `New Contact Inquiry — ${brand || name}`,
      html: `
        <h2 style="color:#7c3aed;">New Contact Inquiry — Trendivo Marketing</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 12px;font-weight:bold;background:#f9fafb;width:35%;">Name</td>
            <td style="padding:8px 12px;">${name}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 12px;font-weight:bold;background:#f9fafb;">Email</td>
            <td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${brand ? `<tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 12px;font-weight:bold;background:#f9fafb;">Brand</td>
            <td style="padding:8px 12px;">${brand}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px 12px;font-weight:bold;background:#f9fafb;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top:16px;color:#6b7280;font-size:12px;">Submitted via Trendivo Marketing contact form</p>
      `,
    });

    logger.info({ name, email }, "Contact email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please email us directly." });
  }
});

export default router;

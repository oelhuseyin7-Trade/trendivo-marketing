import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

function formatApplicationEmail(data: Record<string, unknown>): string {
  const role = data.role === "influencer" ? "Creator / Influencer" : "Brand";
  const lines: string[] = [
    `<h2 style="color:#7c3aed;">New ${role} Application — Trendivo Marketing Agency</h2>`,
    `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">`,
  ];

  const fields: [string, string][] = [
    ["Role", role],
    ["Full Name / Business", (data.fullName || data.businessName || "—") as string],
    ["Email", data.email as string],
  ];

  if (data.role === "influencer") {
    if (data.instagramHandle) fields.push(["Instagram", data.instagramHandle as string]);
    if (data.tiktokHandle) fields.push(["TikTok", data.tiktokHandle as string]);
    if (data.youtubeChannel) fields.push(["YouTube", data.youtubeChannel as string]);
    if (data.followerCount) fields.push(["Follower Count", data.followerCount as string]);
    if (data.averageViews) fields.push(["Avg. Views", String(data.averageViews)]);
    if (data.engagementRate) fields.push(["Engagement Rate", `${data.engagementRate}%`]);
    if (data.niche) fields.push(["Niche", data.niche as string]);
    if (data.pastBrandDeals) fields.push(["Past Brand Deals", data.pastBrandDeals as string]);
    if (data.pricePerPost) fields.push(["Price Per Post", `$${data.pricePerPost}`]);
    if (data.contentStyle) fields.push(["Content Style", data.contentStyle as string]);
    if (data.audienceLocation) fields.push(["Audience Location", data.audienceLocation as string]);
  } else {
    if (data.websiteUrl) fields.push(["Website", data.websiteUrl as string]);
    if (data.businessDescription) fields.push(["Business Description", data.businessDescription as string]);
    if (data.targetAudience) fields.push(["Target Audience", data.targetAudience as string]);
    if (data.monthlyBudget) fields.push(["Monthly Budget", data.monthlyBudget as string]);
    if (data.campaignGoals) fields.push(["Campaign Goals", (data.campaignGoals as string[]).join(", ")]);
    if (data.preferredCreatorSize) fields.push(["Preferred Creator Size", data.preferredCreatorSize as string]);
  }

  for (const [label, value] of fields) {
    lines.push(
      `<tr style="border-bottom:1px solid #e5e7eb;">` +
      `<td style="padding:8px 12px;font-weight:bold;color:#374151;width:40%;background:#f9fafb;">${label}</td>` +
      `<td style="padding:8px 12px;color:#111827;">${value}</td>` +
      `</tr>`
    );
  }

  lines.push(`</table>`);
  lines.push(`<p style="margin-top:16px;color:#6b7280;font-size:12px;">Submitted via Trendivo Marketing Agency website</p>`);

  return lines.join("\n");
}

router.post("/applications", async (req, res) => {
  const data = req.body as Record<string, unknown>;

  if (!data.role || !data.email) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    logger.warn("Email credentials not configured — application received but email not sent");
    res.json({ success: true, warned: "email_not_configured" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const role = data.role === "influencer" ? "Creator" : "Brand";
    const applicantName = (data.fullName || data.businessName || data.email) as string;

    await transporter.sendMail({
      from: `"Trendivo Marketing" <${gmailUser}>`,
      to: "o.elhuseyin7@gmail.com",
      subject: `New ${role} Application — ${applicantName}`,
      html: formatApplicationEmail(data),
    });

    logger.info({ role: data.role, email: data.email }, "Application email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send application email");
    res.status(500).json({ error: "Failed to send application. Please try again." });
  }
});

export default router;

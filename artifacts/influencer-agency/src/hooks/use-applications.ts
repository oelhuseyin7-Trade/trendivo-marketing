import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// ── EmailJS credentials ── fill these in after setup ──────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ──────────────────────────────────────────────────────────────────────────────

// ─── Influencer schema ────────────────────────────────────────────────────────
const influencerSchema = z.object({
  role: z.literal("influencer"),
  fullName:                 z.string().min(2, "Full name is required"),
  email:                    z.string().email("Valid email is required"),
  phone:                    z.string().min(5, "Phone / WhatsApp is required"),
  countryTimezone:          z.string().min(2, "Country & timezone is required"),
  age:                      z.string().optional(),
  platformsHandles:         z.string().min(2, "Please describe your platforms and handles"),
  totalFollowersPerPlatform:z.string().min(1, "Total followers is required"),
  averageViews:             z.string().min(1, "Average views is required"),
  engagementRate:           z.string().optional(),
  audienceLocation:         z.string().min(2, "Audience location is required"),
  niche:                    z.string().min(2, "Niche is required"),
  workedWithBrands:         z.enum(["yes", "no"], { required_error: "Please select yes or no" }),
  contentTypes:             z.array(z.string()).min(1, "Select at least one content type"),
  typicalRates:             z.string().optional(),
  openTo:                   z.array(z.string()).min(1, "Select at least one option"),
  turnaroundTime:           z.string().min(2, "Turnaround time is required"),
  whyWorkWithUs:            z.string().min(10, "Please tell us why you want to work with us"),
  howDidYouHear:            z.string().min(2, "Please tell us how you heard about us"),
  additionalNotes:          z.string().optional(),
});

// ─── Brand schema ─────────────────────────────────────────────────────────────
const brandSchema = z.object({
  role: z.literal("brand"),
  brandName:            z.string().min(2, "Brand name is required"),
  websiteUrl:           z.string().url("Must be a valid URL"),
  contactName:          z.string().min(2, "Contact name is required"),
  email:                z.string().email("Valid email is required"),
  phone:                z.string().min(5, "Phone / WhatsApp is required"),
  socialMediaLinks:     z.string().min(2, "Social media links are required"),
  brandDescription:     z.string().min(10, "Please describe your brand"),
  productsPromoting:    z.string().optional(),
  targetCountries:      z.string().min(2, "Target countries are required"),
  campaignGoals:        z.array(z.string()).min(1, "Select at least one campaign goal"),
  campaignGoalsOther:   z.string().optional(),
  platforms:            z.array(z.string()).min(1, "Select at least one platform"),
  platformsOther:       z.string().optional(),
  preferredCreatorSize: z.string().min(1, "Please select a creator size"),
  campaignTimeline:     z.string().min(2, "Campaign timeline is required"),
  campaignBudget:       z.string().optional(),
  workedWithInfluencers:z.enum(["yes", "no"], { required_error: "Please select yes or no" }),
  collaborationType:    z.array(z.string()).min(1, "Select at least one collaboration type"),
  contentGuidelines:    z.string().optional(),
  howDidYouHear:        z.string().min(2, "Please tell us how you heard about us"),
  additionalNotes:      z.string().optional(),
});

export const applicationSchema = z.discriminatedUnion("role", [influencerSchema, brandSchema]);
export type ApplicationInput = z.infer<typeof applicationSchema>;

// ─── Format data into a readable email body ───────────────────────────────────
function formatMessage(data: ApplicationInput): string {
  if (data.role === "influencer") {
    return `
CREATOR / INFLUENCER APPLICATION
==================================
Full Name:               ${data.fullName}
Email:                   ${data.email}
Phone / WhatsApp:        ${data.phone}
Country & Timezone:      ${data.countryTimezone}
Age:                     ${data.age || "—"}

Platforms & Handles:     ${data.platformsHandles}
Total Followers:         ${data.totalFollowersPerPlatform}
Average Views:           ${data.averageViews}
Engagement Rate:         ${data.engagementRate || "—"}
Audience Location:       ${data.audienceLocation}
Niche:                   ${data.niche}

Worked With Brands:      ${data.workedWithBrands}
Content Types:           ${data.contentTypes.join(", ")}
Typical Rates:           ${data.typicalRates || "—"}
Open To:                 ${data.openTo.join(", ")}
Turnaround Time:         ${data.turnaroundTime}

Why Work With Us:
${data.whyWorkWithUs}

How Did You Hear:        ${data.howDidYouHear}
Additional Notes:        ${data.additionalNotes || "—"}
    `.trim();
  }

  const goalsStr = data.campaignGoalsOther
    ? [...data.campaignGoals, `Other: ${data.campaignGoalsOther}`].join(", ")
    : data.campaignGoals.join(", ");

  const platformsStr = data.platformsOther
    ? [...data.platforms, `Other: ${data.platformsOther}`].join(", ")
    : data.platforms.join(", ");

  return `
BRAND APPLICATION
==================================
Brand Name:              ${data.brandName}
Website:                 ${data.websiteUrl}
Contact Name:            ${data.contactName}
Email:                   ${data.email}
Phone / WhatsApp:        ${data.phone}
Social Media Links:      ${data.socialMediaLinks}

Brand Description:
${data.brandDescription}

Products Promoting:      ${data.productsPromoting || "—"}
Target Countries:        ${data.targetCountries}
Campaign Goals:          ${goalsStr}
Platforms:               ${platformsStr}
Preferred Creator Size:  ${data.preferredCreatorSize}
Campaign Timeline:       ${data.campaignTimeline}
Campaign Budget:         ${data.campaignBudget || "—"}

Worked With Influencers: ${data.workedWithInfluencers}
Collaboration Type:      ${data.collaborationType.join(", ")}
Content Guidelines:      ${data.contentGuidelines || "—"}

How Did You Hear:        ${data.howDidYouHear}
Additional Notes:        ${data.additionalNotes || "—"}
  `.trim();
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      const subject = data.role === "influencer"
        ? `New Creator Application — ${data.fullName}`
        : `New Brand Application — ${data.brandName}`;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: "trendivo.marketingima@gmail.com",
          subject,
          message: formatMessage(data),
          from_name: data.role === "influencer" ? data.fullName : data.brandName,
          reply_to: data.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
    },
  });
}

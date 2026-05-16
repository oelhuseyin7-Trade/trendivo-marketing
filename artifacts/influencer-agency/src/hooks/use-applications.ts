import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID       = "service_y12eppu";
const EMAILJS_CREATOR_TEMPLATE = "template_2y1fn88";
const EMAILJS_BRAND_TEMPLATE   = "template_03b1plm";
const EMAILJS_PUBLIC_KEY       = "NpaUjlfG4AUjoLT1-";

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

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      if (data.role === "influencer") {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_CREATOR_TEMPLATE,
          {
            full_name:              data.fullName,
            reply_to:               data.email,
            phone:                  data.phone,
            country_timezone:       data.countryTimezone,
            age:                    data.age || "—",
            platforms_handles:      data.platformsHandles,
            followers_per_platform: data.totalFollowersPerPlatform,
            avg_views:              data.averageViews,
            engagement_rate:        data.engagementRate || "—",
            audience_location:      data.audienceLocation,
            niche:                  data.niche,
            worked_with_brands:     data.workedWithBrands,
            content_types:          data.contentTypes.join(", "),
            rates:                  data.typicalRates || "—",
            open_to:                data.openTo.join(", "),
            turnaround_time:        data.turnaroundTime,
            why_join:               data.whyWorkWithUs,
            how_heard:              data.howDidYouHear,
            additional_notes:       data.additionalNotes || "—",
          },
          EMAILJS_PUBLIC_KEY,
        );
      } else {
        const goalsStr = data.campaignGoalsOther
          ? [...data.campaignGoals, `Other: ${data.campaignGoalsOther}`].join(", ")
          : data.campaignGoals.join(", ");

        const platformsStr = data.platformsOther
          ? [...data.platforms, `Other: ${data.platformsOther}`].join(", ")
          : data.platforms.join(", ");

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_BRAND_TEMPLATE,
          {
            from_name:          data.brandName,
            website:            data.websiteUrl,
            contact_name:       data.contactName,
            reply_to:           data.email,
            phone:              data.phone,
            social_links:       data.socialMediaLinks,
            brand_description:  data.brandDescription,
            products:           data.productsPromoting || "—",
            target_countries:   data.targetCountries,
            campaign_goals:     goalsStr,
            platforms:          platformsStr,
            creator_size:       data.preferredCreatorSize,
            timeline:           data.campaignTimeline,
            budget:             data.campaignBudget || "—",
            worked_before:      data.workedWithInfluencers,
            collab_type:        data.collaborationType.join(", "),
            content_guidelines: data.contentGuidelines || "—",
            how_heard:          data.howDidYouHear,
            additional_notes:   data.additionalNotes || "—",
          },
          EMAILJS_PUBLIC_KEY,
        );
      }
    },
  });
}

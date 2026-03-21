import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const applicationSchema = z.object({
  role: z.enum(["influencer", "brand"]),
  
  fullName: z.string().min(2, "Name is required").optional(),
  email: z.string().email("Valid email is required"),
  
  instagramHandle: z.string().optional(),
  tiktokHandle: z.string().optional(),
  youtubeChannel: z.string().optional(),
  followerCount: z.string().optional(),
  averageViews: z.coerce.number().optional(),
  engagementRate: z.coerce.number().optional(),
  niche: z.string().optional(),
  pastBrandDeals: z.enum(["yes", "no"]).optional(),
  pricePerPost: z.coerce.number().optional(),
  contentStyle: z.string().optional(),
  audienceLocation: z.string().optional(),
  
  businessName: z.string().optional(),
  websiteUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  businessDescription: z.string().optional(),
  targetAudience: z.string().optional(),
  monthlyBudget: z.string().optional(),
  campaignGoals: z.array(z.string()).optional(),
  preferredCreatorSize: z.string().optional(),
}).refine((data) => {
  if (data.role === 'influencer' && !data.fullName) return false;
  if (data.role === 'brand' && !data.businessName) return false;
  return true;
}, {
  message: "Required fields missing based on role",
  path: ["role"],
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { error?: string }).error || "Failed to submit application");
      }
      return res.json();
    },
  });
}

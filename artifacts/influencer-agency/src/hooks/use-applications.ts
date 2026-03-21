import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Zod schema for the dynamic form
export const applicationSchema = z.object({
  role: z.enum(["influencer", "brand"]),
  
  // Common fields
  fullName: z.string().min(2, "Name is required").optional(),
  email: z.string().email("Valid email is required"),
  
  // Influencer fields
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
  
  // Brand fields
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
  path: ["role"], // This is a general error path
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      // In a real app, this would be:
      // const res = await fetch('/api/applications', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error('Failed to submit application');
      // return res.json();
      
      // Simulating API delay and success
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, id: Math.random().toString(36).substring(7) });
        }, 1500);
      });
    },
  });
}

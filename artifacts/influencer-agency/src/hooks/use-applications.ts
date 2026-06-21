import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID  = "service_y12eppu";
const EMAILJS_TEMPLATE_ID = "template_03b1plm";
const EMAILJS_PUBLIC_KEY  = "NpaUjlfG4AUjoLT1-";

export const demoSchema = z.object({
  businessName:     z.string().min(2, "Business name is required"),
  ownerName:        z.string().min(2, "Owner name is required"),
  email:            z.string().email("Valid email is required"),
  phone:            z.string().min(5, "Phone number is required"),
  website:          z.string().optional(),
  industry:         z.string().min(1, "Please select your industry"),
  callHandling:     z.string().min(1, "Please select how calls are handled"),
  callsPerWeek:     z.string().min(1, "Please select call volume"),
  missCalls:        z.string().min(1, "Please select how often you miss calls"),
  afterHoursCalls:  z.enum(["yes", "no"], { required_error: "Please answer this question" }),
  customersBook:    z.enum(["yes", "no"], { required_error: "Please answer this question" }),
  bookingSystem:    z.string().optional(),
  servicesOffered:  z.string().min(2, "Please describe your services"),
  commonQuestions:  z.string().optional(),
  businessHours:    z.string().min(2, "Business hours are required"),
  goals:            z.array(z.string()).min(1, "Select at least one goal"),
  wantsDemo:        z.enum(["yes", "no"], { required_error: "Please answer this question" }),
});

export type DemoInput = z.infer<typeof demoSchema>;

export function useSubmitDemo() {
  return useMutation({
    mutationFn: async (data: DemoInput) => {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:          data.businessName,
          website:            data.website || "—",
          contact_name:       data.ownerName,
          reply_to:           data.email,
          phone:              data.phone,
          social_links:       data.industry,
          brand_description:  `Services: ${data.servicesOffered}\nBusiness Hours: ${data.businessHours}`,
          products:           `Calls Per Week: ${data.callsPerWeek}`,
          target_countries:   `Misses Calls: ${data.missCalls}`,
          campaign_goals:     data.goals.join(", "),
          platforms:          data.bookingSystem || "N/A",
          creator_size:       data.callHandling,
          timeline:           `After-hours calls: ${data.afterHoursCalls}`,
          budget:             `Customers book: ${data.customersBook}`,
          worked_before:      `Wants demo: ${data.wantsDemo}`,
          collab_type:        data.commonQuestions || "—",
          content_guidelines: "—",
          how_heard:          "AI Demo Form",
          additional_notes:   `Industry: ${data.industry}`,
        },
        EMAILJS_PUBLIC_KEY,
      );
    },
  });
}

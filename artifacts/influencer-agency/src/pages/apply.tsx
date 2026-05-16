import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, UserCircle, Briefcase, ChevronLeft, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { applicationSchema, type ApplicationInput, useSubmitApplication } from "@/hooks/use-applications";

type Step = 1 | 2 | 3;

const inputCls = "bg-background border-white/10 h-12";
const textareaCls = "bg-background border-white/10 min-h-[100px]";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/80 pt-4 pb-1 border-b border-white/10">{children}</h3>;
}

function CheckboxGroup({
  label,
  options,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  options: string[];
  value: string[];
  onChange: (val: string[]) => void;
  error?: string;
  required?: boolean;
}) {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium leading-none">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </p>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
              value.includes(opt)
                ? "border-primary bg-primary/10"
                : "border-white/10 bg-background hover:bg-white/5"
            }`}
          >
            <Checkbox
              checked={value.includes(opt)}
              onCheckedChange={() => toggle(opt)}
              className="border-white/30"
            />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

function YesNoField({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (val: "yes" | "no") => void;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium leading-none">{label} <span className="text-red-500">*</span></p>
      <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
        {["yes", "no"].map((v) => (
          <label
            key={v}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg border cursor-pointer flex-1 justify-center transition-colors ${
              value === v ? "border-primary bg-primary/10" : "border-white/10 bg-background hover:bg-white/5"
            }`}
          >
            <RadioGroupItem value={v} />
            <span className="capitalize font-medium">{v}</span>
          </label>
        ))}
      </RadioGroup>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function Apply() {
  const [step, setStep] = useState<Step>(1);
  const [selectedRole, setSelectedRole] = useState<"influencer" | "brand" | null>(null);
  const submitMutation = useSubmitApplication();

  const form = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: "influencer",
      contentTypes: [],
      openTo: [],
      campaignGoals: [],
      platforms: [],
      collaborationType: [],
    } as ApplicationInput,
    mode: "onChange",
  });

  const handleRoleSelect = (role: "influencer" | "brand") => {
    setSelectedRole(role);
    form.reset({
      role,
      contentTypes: role === "influencer" ? [] : undefined,
      openTo: role === "influencer" ? [] : undefined,
      campaignGoals: role === "brand" ? [] : undefined,
      platforms: role === "brand" ? [] : undefined,
      collaborationType: role === "brand" ? [] : undefined,
    } as ApplicationInput);
    setTimeout(() => setStep(2), 300);
  };

  const onSubmit = async (data: ApplicationInput) => {
    try {
      await submitMutation.mutateAsync(data);
      setStep(3);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  const { formState: { errors } } = form;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-6 relative z-10">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">

            {/* STEP 1 — Role selection */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Join Trendivo</h1>
                  <p className="text-white/60 text-lg">Select how you want to partner with us.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card
                    className={`p-8 cursor-pointer border-2 transition-all duration-300 hover:border-primary/50 hover:bg-white/5 ${selectedRole === "influencer" ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "border-white/10 bg-card"}`}
                    onClick={() => handleRoleSelect("influencer")}
                  >
                    <UserCircle className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Creator</h3>
                    <p className="text-white/60">I want to get paid to create content for top brands.</p>
                  </Card>
                  <Card
                    className={`p-8 cursor-pointer border-2 transition-all duration-300 hover:border-accent/50 hover:bg-white/5 ${selectedRole === "brand" ? "border-accent bg-accent/10 shadow-[0_0_30px_rgba(220,38,38,0.15)]" : "border-white/10 bg-card"}`}
                    onClick={() => handleRoleSelect("brand")}
                  >
                    <Briefcase className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Brand</h3>
                    <p className="text-white/60">I want to hire creators to scale my business.</p>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Form */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                <button onClick={() => setStep(1)} className="flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <h2 className="text-3xl font-display font-bold mb-2">
                  {selectedRole === "influencer" ? "Creator Application" : "Brand Application"}
                </h2>
                <p className="text-white/50 mb-8">
                  {selectedRole === "influencer" ? "Tell us about your audience and content." : "Tell us about your business and goals."}
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* ── INFLUENCER FORM ── */}
                    {selectedRole === "influencer" && (
                      <div className="space-y-6">
                        <SectionTitle>Personal Info</SectionTitle>

                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem><FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="Jane Doe" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="you@example.com" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number / WhatsApp <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="+1 234 567 8900" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="countryTimezone" render={({ field }) => (
                            <FormItem><FormLabel>Country & Timezone <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="USA — EST (UTC-5)" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="age" render={({ field }) => (
                            <FormItem><FormLabel>Age <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                              <FormControl><Input placeholder="e.g. 24" className={inputCls} {...field} /></FormControl>
                            </FormItem>
                          )} />
                        </div>

                        <SectionTitle>Content & Platforms</SectionTitle>

                        <FormField control={form.control} name="platformsHandles" render={({ field }) => (
                          <FormItem><FormLabel>Main Platforms & Handles <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Textarea placeholder="e.g. Instagram: @janedoe | TikTok: @janedoe | YouTube: Jane Doe" className={textareaCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="totalFollowersPerPlatform" render={({ field }) => (
                            <FormItem><FormLabel>Total Followers Per Platform <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="e.g. IG: 50k | TT: 120k" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="averageViews" render={({ field }) => (
                            <FormItem><FormLabel>Average Views Per Video <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="e.g. 25,000" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="engagementRate" render={({ field }) => (
                            <FormItem><FormLabel>Engagement Rate <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                              <FormControl><Input placeholder="e.g. 4.5%" className={inputCls} {...field} /></FormControl>
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="audienceLocation" render={({ field }) => (
                            <FormItem><FormLabel>Audience Location <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="e.g. USA, Canada, UK" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <FormField control={form.control} name="niche" render={({ field }) => (
                          <FormItem><FormLabel>Niche / What is your content about <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="e.g. Fashion, Fitness, Tech reviews..." className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <SectionTitle>Collaboration</SectionTitle>

                        <Controller control={form.control} name="workedWithBrands" render={({ field }) => (
                          <YesNoField
                            label="Have you worked with brands before?"
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            error={(errors as Record<string, { message?: string }>).workedWithBrands?.message}
                          />
                        )} />

                        <Controller control={form.control} name="contentTypes" render={({ field }) => (
                          <CheckboxGroup
                            label="Content Types"
                            required
                            options={["UGC only", "Sponsored posts", "Affiliate content", "Product reviews", "All of the above"]}
                            value={field.value ?? []}
                            onChange={field.onChange}
                            error={(errors as Record<string, { message?: string }>).contentTypes?.message}
                          />
                        )} />

                        <FormField control={form.control} name="typicalRates" render={({ field }) => (
                          <FormItem><FormLabel>Typical Rates <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl><Input placeholder="e.g. $500 per reel, $200 per story" className={inputCls} {...field} /></FormControl>
                          </FormItem>
                        )} />

                        <Controller control={form.control} name="openTo" render={({ field }) => (
                          <CheckboxGroup
                            label="Open to"
                            required
                            options={["Commission deals", "Gifted collaborations", "Paid campaigns"]}
                            value={field.value ?? []}
                            onChange={field.onChange}
                            error={(errors as Record<string, { message?: string }>).openTo?.message}
                          />
                        )} />

                        <FormField control={form.control} name="turnaroundTime" render={({ field }) => (
                          <FormItem><FormLabel>Turnaround Time for Content Delivery <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="e.g. 5–7 business days" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <SectionTitle>About You</SectionTitle>

                        <FormField control={form.control} name="whyWorkWithUs" render={({ field }) => (
                          <FormItem><FormLabel>Why do you want to work with us? <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Textarea placeholder="Tell us what excites you about Trendivo..." className={textareaCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="howDidYouHear" render={({ field }) => (
                          <FormItem><FormLabel>How did you hear about us? <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="e.g. Instagram, friend referral, Google..." className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="additionalNotes" render={({ field }) => (
                          <FormItem><FormLabel>Additional Notes <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl><Textarea placeholder="Anything else you'd like us to know..." className={textareaCls} {...field} /></FormControl>
                          </FormItem>
                        )} />
                      </div>
                    )}

                    {/* ── BRAND FORM ── */}
                    {selectedRole === "brand" && (
                      <div className="space-y-6">
                        <SectionTitle>Brand Info</SectionTitle>

                        <FormField control={form.control} name="brandName" render={({ field }) => (
                          <FormItem><FormLabel>Brand Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="Acme Inc." className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="websiteUrl" render={({ field }) => (
                          <FormItem><FormLabel>Website URL <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="https://yourbrand.com" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="contactName" render={({ field }) => (
                            <FormItem><FormLabel>Contact Name <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="John Smith" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="you@brand.com" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem><FormLabel>Phone Number / WhatsApp <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="+1 234 567 8900" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="socialMediaLinks" render={({ field }) => (
                            <FormItem><FormLabel>Social Media Links <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="@yourbrand on IG, TikTok..." className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>

                        <FormField control={form.control} name="brandDescription" render={({ field }) => (
                          <FormItem><FormLabel>Describe your brand <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Textarea placeholder="Tell us what your brand does, your values, and who you serve..." className={textareaCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="productsPromoting" render={({ field }) => (
                          <FormItem><FormLabel>What products are you promoting? <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl><Input placeholder="e.g. skincare line, fitness app, SaaS tool..." className={inputCls} {...field} /></FormControl>
                          </FormItem>
                        )} />

                        <SectionTitle>Campaign Details</SectionTitle>

                        <FormField control={form.control} name="targetCountries" render={({ field }) => (
                          <FormItem><FormLabel>What countries are you targeting? <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="e.g. USA, UK, Australia" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <Controller control={form.control} name="campaignGoals" render={({ field }) => {
                          const hasOther = field.value?.includes("Other");
                          return (
                            <div className="space-y-3">
                              <CheckboxGroup
                                label="Campaign Goals"
                                required
                                options={["Brand awareness", "Sales", "UGC creation", "TikTok growth", "Instagram growth", "Product launches", "Other"]}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                error={(errors as Record<string, { message?: string }>).campaignGoals?.message}
                              />
                              {hasOther && (
                                <FormField control={form.control} name="campaignGoalsOther" render={({ field: f }) => (
                                  <FormItem>
                                    <FormControl><Input placeholder="Describe your other goal..." className={inputCls} {...f} /></FormControl>
                                  </FormItem>
                                )} />
                              )}
                            </div>
                          );
                        }} />

                        <Controller control={form.control} name="platforms" render={({ field }) => {
                          const hasOther = field.value?.includes("Other");
                          return (
                            <div className="space-y-3">
                              <CheckboxGroup
                                label="Which platforms do you want creators for?"
                                required
                                options={["TikTok", "Instagram", "YouTube", "Other"]}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                error={(errors as Record<string, { message?: string }>).platforms?.message}
                              />
                              {hasOther && (
                                <FormField control={form.control} name="platformsOther" render={({ field: f }) => (
                                  <FormItem>
                                    <FormControl><Input placeholder="Specify other platform..." className={inputCls} {...f} /></FormControl>
                                  </FormItem>
                                )} />
                              )}
                            </div>
                          );
                        }} />

                        <FormField control={form.control} name="preferredCreatorSize" render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Preferred Creator Size <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-2 gap-3">
                                {[
                                  { value: "Nano", label: "Nano (1k–10k)" },
                                  { value: "Micro", label: "Micro (10k–100k)" },
                                  { value: "Mid-tier", label: "Mid-tier (100k–500k)" },
                                  { value: "Large", label: "Large (500k+)" },
                                ].map((opt) => (
                                  <label key={opt.value}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${field.value === opt.value ? "border-primary bg-primary/10" : "border-white/10 bg-background hover:bg-white/5"}`}>
                                    <RadioGroupItem value={opt.value} />
                                    <span className="text-sm font-medium">{opt.label}</span>
                                  </label>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="campaignTimeline" render={({ field }) => (
                            <FormItem><FormLabel>Desired Campaign Timeline <span className="text-red-500">*</span></FormLabel>
                              <FormControl><Input placeholder="e.g. Q3 2025, starting ASAP" className={inputCls} {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="campaignBudget" render={({ field }) => (
                            <FormItem><FormLabel>Campaign Budget <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                              <FormControl><Input placeholder="e.g. $5,000 – $10,000" className={inputCls} {...field} /></FormControl>
                            </FormItem>
                          )} />
                        </div>

                        <Controller control={form.control} name="workedWithInfluencers" render={({ field }) => (
                          <YesNoField
                            label="Have you worked with influencers before?"
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            error={(errors as Record<string, { message?: string }>).workedWithInfluencers?.message}
                          />
                        )} />

                        <Controller control={form.control} name="collaborationType" render={({ field }) => (
                          <CheckboxGroup
                            label="Type of Collaboration"
                            required
                            options={["UGC content", "Sponsored posts", "Affiliate campaigns", "Long-term ambassadors"]}
                            value={field.value ?? []}
                            onChange={field.onChange}
                            error={(errors as Record<string, { message?: string }>).collaborationType?.message}
                          />
                        )} />

                        <FormField control={form.control} name="contentGuidelines" render={({ field }) => (
                          <FormItem><FormLabel>Any content guidelines or requirements? <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl><Textarea placeholder="e.g. must include product demo, avoid competitor mentions..." className={textareaCls} {...field} /></FormControl>
                          </FormItem>
                        )} />

                        <SectionTitle>Final Details</SectionTitle>

                        <FormField control={form.control} name="howDidYouHear" render={({ field }) => (
                          <FormItem><FormLabel>How did you hear about us? <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="e.g. Instagram, referral, Google..." className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="additionalNotes" render={({ field }) => (
                          <FormItem><FormLabel>Additional Notes <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl><Textarea placeholder="Anything else you'd like us to know..." className={textareaCls} {...field} /></FormControl>
                          </FormItem>
                        )} />
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg mt-8 bg-primary hover:bg-primary/90 text-white"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting...</>
                      ) : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* STEP 3 — Success */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-card border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Application Sent Successfully!</h2>
                <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                  We've received your application and will review it shortly. Our team will be in touch within 3–5 business days.
                </p>
                <Button onClick={() => window.location.href = "/"} variant="outline" className="rounded-full px-8 h-12 border-white/20 hover:bg-white/5">
                  Return Home
                </Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}

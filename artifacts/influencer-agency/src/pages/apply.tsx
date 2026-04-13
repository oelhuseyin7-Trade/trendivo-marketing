import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, UserCircle, Briefcase, ChevronLeft, Loader2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { applicationSchema, type ApplicationInput, useSubmitApplication } from "@/hooks/use-applications";

type Step = 1 | 2 | 3;

export default function Apply() {
  const [step, setStep] = useState<Step>(1);
  const [selectedRole, setSelectedRole] = useState<"influencer" | "brand" | null>(null);
  
  const submitMutation = useSubmitApplication();

  const form = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: "influencer", // updated dynamically
      email: "",
      campaignGoals: [],
    },
    mode: "onChange"
  });

  const handleRoleSelect = (role: "influencer" | "brand") => {
    setSelectedRole(role);
    form.setValue("role", role);
    setTimeout(() => setStep(2), 300);
  };

  const onSubmit = async (data: ApplicationInput) => {
    try {
      await submitMutation.mutateAsync(data);
      setStep(3); // Success step
    } catch (error) {
      console.error("Failed to submit", error);
    }
  };

  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {/* STEP 1: ROLE SELECTION */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Join Trendivo</h1>
                  <p className="text-white/60 text-lg">Select how you want to partner with us.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card 
                    className={`p-8 cursor-pointer border-2 transition-all duration-300 hover:border-primary/50 hover:bg-white/5 ${
                      selectedRole === "influencer" ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : "border-white/10 bg-card"
                    }`}
                    onClick={() => handleRoleSelect("influencer")}
                  >
                    <UserCircle className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Creator</h3>
                    <p className="text-white/60">I want to get paid to create content for top brands.</p>
                  </Card>

                  <Card 
                    className={`p-8 cursor-pointer border-2 transition-all duration-300 hover:border-accent/50 hover:bg-white/5 ${
                      selectedRole === "brand" ? "border-accent bg-accent/10 shadow-[0_0_30px_rgba(220,38,38,0.15)]" : "border-white/10 bg-card"
                    }`}
                    onClick={() => handleRoleSelect("brand")}
                  >
                    <Briefcase className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Brand</h3>
                    <p className="text-white/60">I want to hire creators to scale my business.</p>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DYNAMIC FORM */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
              >
                <button 
                  onClick={() => setStep(1)}
                  className="flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </button>

                <h2 className="text-3xl font-display font-bold mb-2">
                  {selectedRole === 'influencer' ? 'Creator Application' : 'Brand Application'}
                </h2>
                <p className="text-white/50 mb-8">
                  {selectedRole === 'influencer' 
                    ? "Tell us about your audience and content." 
                    : "Tell us about your business and goals."}
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Common Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" className="bg-background border-white/10 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* INFLUENCER SPECIFIC FIELDS */}
                    {selectedRole === 'influencer' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" className="bg-background border-white/10 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="instagramHandle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Instagram Handle</FormLabel>
                                <FormControl>
                                  <Input placeholder="@username" className="bg-background border-white/10 h-12" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="tiktokHandle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>TikTok Handle</FormLabel>
                                <FormControl>
                                  <Input placeholder="@username" className="bg-background border-white/10 h-12" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="followerCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Total Following</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background border-white/10 h-12">
                                    <SelectValue placeholder="Select audience size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-popover border-white/10 text-white">
                                  <SelectItem value="<10k">Under 10k</SelectItem>
                                  <SelectItem value="10k-100k">10k - 100k</SelectItem>
                                  <SelectItem value="100k-1M">100k - 1M</SelectItem>
                                  <SelectItem value="1M+">1M+</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="niche"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Niche</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background border-white/10 h-12">
                                    <SelectValue placeholder="Select your niche" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-popover border-white/10 text-white">
                                  {["Fashion", "Beauty", "Fitness", "Tech", "Gaming", "Lifestyle", "Travel", "Food", "Other"].map(n => (
                                    <SelectItem key={n} value={n.toLowerCase()}>{n}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    {/* BRAND SPECIFIC FIELDS */}
                    {selectedRole === 'brand' && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business / Brand Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Corp" className="bg-background border-white/10 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="websiteUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website URL</FormLabel>
                              <FormControl>
                                <Input placeholder="https://" className="bg-background border-white/10 h-12" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="businessDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What does your business sell?</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Briefly describe your products or services..." className="bg-background border-white/10 min-h-[100px]" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="monthlyBudget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Monthly Influencer Marketing Budget</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background border-white/10 h-12">
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-popover border-white/10 text-white">
                                  <SelectItem value="<1k">Less than $1k</SelectItem>
                                  <SelectItem value="1k-10k">$1k - $10k</SelectItem>
                                  <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                                  <SelectItem value="50k+">$50k+</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="preferredCreatorSize"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Preferred Creator Size</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="grid grid-cols-2 gap-4"
                                >
                                  {[
                                    { value: "nano", label: "Nano (<10k)" },
                                    { value: "micro", label: "Micro (10k-100k)" },
                                    { value: "macro", label: "Macro (100k-1M)" },
                                    { value: "mega", label: "Mega (1M+)" }
                                  ].map((opt) => (
                                    <FormItem key={opt.value}>
                                      <FormControl>
                                        <div className={`
                                          flex items-center justify-between px-4 py-3 rounded-lg border border-white/10 bg-background cursor-pointer hover:bg-white/5 transition-colors
                                          ${field.value === opt.value ? 'border-primary ring-1 ring-primary/50 bg-primary/5' : ''}
                                        `}>
                                          <label htmlFor={opt.value} className="text-sm cursor-pointer flex-1 font-medium">
                                            {opt.label}
                                          </label>
                                          <RadioGroupItem value={opt.value} id={opt.value} />
                                        </div>
                                      </FormControl>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg mt-8 bg-primary hover:bg-primary/90 text-white glow-primary"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-card border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Application Received!</h2>
                <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                  Thank you for applying to Trendivo Marketing Agency. Our team will review your application and get back to you within 3-5 business days.
                </p>
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="rounded-full px-8 h-12 border-white/20 hover:bg-white/5"
                >
                  Return Home
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}

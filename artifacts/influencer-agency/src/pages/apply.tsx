import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, Loader2, Phone, Building2, CalendarCheck, Settings, Target } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { demoSchema, type DemoInput, useSubmitDemo } from "@/hooks/use-applications";

const inputCls = "bg-background border-white/10 h-12";
const textareaCls = "bg-background border-white/10 min-h-[100px]";

const STEPS = [
  { number: 1, label: "Business Info",   icon: Building2 },
  { number: 2, label: "Call Handling",   icon: Phone },
  { number: 3, label: "Booking",         icon: CalendarCheck },
  { number: 4, label: "Services",        icon: Settings },
  { number: 5, label: "Goals",           icon: Target },
];

const STEP_FIELDS: Record<number, (keyof DemoInput)[]> = {
  1: ["businessName", "ownerName", "email", "phone", "industry"],
  2: ["callHandling", "callsPerWeek", "missCalls", "afterHoursCalls"],
  3: ["customersBook"],
  4: ["servicesOffered", "businessHours"],
  5: ["goals", "wantsDemo"],
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-widest text-primary/80 pt-2 pb-1 border-b border-white/10">
      {children}
    </h3>
  );
}

function RadioCard({ value, current, label, onSelect }: { value: string; current: string; label: string; onSelect: (v: string) => void }) {
  return (
    <label
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
        current === value ? "border-primary bg-primary/10" : "border-white/10 bg-background hover:bg-white/5"
      }`}
      onClick={() => onSelect(value)}
    >
      <RadioGroupItem value={value} />
      <span className="text-sm">{label}</span>
    </label>
  );
}

function YesNo({ label, value, onChange, error }: { label: string; value: string; onChange: (v: "yes" | "no") => void; error?: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label} <span className="text-red-500">*</span></p>
      <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
        {(["yes", "no"] as const).map((v) => (
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

function CheckboxGrid({ label, options, value, onChange, error }: {
  label: string; options: string[]; value: string[]; onChange: (v: string[]) => void; error?: string;
}) {
  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label} <span className="text-red-500">*</span></p>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
              value.includes(opt) ? "border-primary bg-primary/10" : "border-white/10 bg-background hover:bg-white/5"
            }`}
          >
            <Checkbox checked={value.includes(opt)} onCheckedChange={() => toggle(opt)} className="border-white/30" />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function Apply() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const submitMutation = useSubmitDemo();

  const form = useForm<DemoInput>({
    resolver: zodResolver(demoSchema),
    defaultValues: { goals: [] },
    mode: "onChange",
  });

  const { formState: { errors } } = form;

  const goTo = (s: number) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const advance = async () => {
    const valid = await form.trigger(STEP_FIELDS[step]);
    if (valid) goTo(step + 1);
  };

  const onSubmit = async (data: DemoInput) => {
    try {
      await submitMutation.mutateAsync(data);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  if (done) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg w-full text-center bg-card border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-display font-bold mb-4">Application Received</h1>
            <p className="text-white/60 mb-8 leading-relaxed">
              We'll review your business details and send you a personalized AI receptionist demo shortly.
            </p>
            <a href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 font-semibold">
                Return Home
              </Button>
            </a>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 flex items-start justify-center pt-32 pb-24 px-6 relative z-10">
        <div className="w-full max-w-2xl">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">Get Your Free AI Receptionist Demo</h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Tell us about your business and we'll show you how an AI receptionist can answer your calls, capture leads, and book appointments automatically.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-5 left-0 right-0 h-[1px] bg-white/10 z-0" />
            {STEPS.map((s) => {
              const Icon = s.icon;
              const active = step === s.number;
              const done = step > s.number;
              return (
                <div key={s.number} className="flex flex-col items-center gap-2 z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    done    ? "bg-primary border-primary"
                    : active ? "bg-primary/20 border-primary"
                    : "bg-background border-white/20"
                  }`}>
                    {done ? <CheckCircle2 className="w-5 h-5 text-white" /> : <Icon className={`w-5 h-5 ${active ? "text-primary" : "text-white/30"}`} />}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:block ${active ? "text-white" : "text-white/30"}`}>{s.label}</span>
                </div>
              );
            })}
          </div>

          {/* Form Card */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6"
                >

                  {/* ── STEP 1: Business Info ── */}
                  {step === 1 && (
                    <>
                      <SectionTitle>Business Information</SectionTitle>

                      <FormField control={form.control} name="businessName" render={({ field }) => (
                        <FormItem><FormLabel>Business Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl><Input placeholder="e.g. Smith Dental Clinic" className={inputCls} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="ownerName" render={({ field }) => (
                        <FormItem><FormLabel>Owner Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl><Input placeholder="e.g. John Smith" className={inputCls} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="you@business.com" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                            <FormControl><Input placeholder="+1 234 567 8900" className={inputCls} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="website" render={({ field }) => (
                        <FormItem><FormLabel>Website <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                          <FormControl><Input placeholder="https://yourbusiness.com" className={inputCls} {...field} /></FormControl>
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="industry" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid sm:grid-cols-2 gap-2">
                              {["Medical Clinic", "Dental Clinic", "Plumbing", "HVAC", "Roofing", "Cleaning", "Landscaping", "Real Estate", "Law", "Other"].map((ind) => (
                                <RadioCard key={ind} value={ind} current={field.value ?? ""} label={ind} onSelect={field.onChange} />
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </>
                  )}

                  {/* ── STEP 2: Call Handling ── */}
                  {step === 2 && (
                    <>
                      <SectionTitle>Current Call Handling</SectionTitle>

                      <FormField control={form.control} name="callHandling" render={({ field }) => (
                        <FormItem>
                          <FormLabel>How are calls currently handled? <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid sm:grid-cols-2 gap-2">
                              {["Owner", "Staff", "Voicemail", "Receptionist", "Call center", "Other"].map((opt) => (
                                <RadioCard key={opt} value={opt} current={field.value ?? ""} label={opt} onSelect={field.onChange} />
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="callsPerWeek" render={({ field }) => (
                        <FormItem>
                          <FormLabel>How many calls per week? <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {["0–25", "25–50", "50–100", "100+"].map((opt) => (
                                <RadioCard key={opt} value={opt} current={field.value ?? ""} label={opt} onSelect={field.onChange} />
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="missCalls" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Do you miss calls? <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {["Frequently", "Sometimes", "Rarely", "Never"].map((opt) => (
                                <RadioCard key={opt} value={opt} current={field.value ?? ""} label={opt} onSelect={field.onChange} />
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <Controller control={form.control} name="afterHoursCalls" render={({ field }) => (
                        <YesNo
                          label="Do you receive after-hours calls?"
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          error={(errors as Record<string, { message?: string }>).afterHoursCalls?.message}
                        />
                      )} />
                    </>
                  )}

                  {/* ── STEP 3: Booking ── */}
                  {step === 3 && (
                    <>
                      <SectionTitle>Booking System</SectionTitle>

                      <Controller control={form.control} name="customersBook" render={({ field }) => (
                        <YesNo
                          label="Do customers book appointments?"
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          error={(errors as Record<string, { message?: string }>).customersBook?.message}
                        />
                      )} />

                      {form.watch("customersBook") === "yes" && (
                        <FormField control={form.control} name="bookingSystem" render={({ field }) => (
                          <FormItem>
                            <FormLabel>What system do you use? <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                            <FormControl>
                              <RadioGroup value={field.value ?? ""} onValueChange={field.onChange} className="grid sm:grid-cols-2 gap-2">
                                {["Google Calendar", "Calendly", "Jane App", "Jobber", "Housecall Pro", "Other"].map((opt) => (
                                  <RadioCard key={opt} value={opt} current={field.value ?? ""} label={opt} onSelect={field.onChange} />
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )} />
                      )}
                    </>
                  )}

                  {/* ── STEP 4: Services ── */}
                  {step === 4 && (
                    <>
                      <SectionTitle>Your Services</SectionTitle>

                      <FormField control={form.control} name="servicesOffered" render={({ field }) => (
                        <FormItem><FormLabel>What services do you offer? <span className="text-red-500">*</span></FormLabel>
                          <FormControl><Textarea placeholder="e.g. General dentistry, teeth cleaning, whitening, implants..." className={textareaCls} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="commonQuestions" render={({ field }) => (
                        <FormItem><FormLabel>Common customer questions? <span className="text-white/40 text-xs">(optional)</span></FormLabel>
                          <FormControl><Textarea placeholder="e.g. Do you accept insurance? What are your prices? Are you taking new patients?" className={textareaCls} {...field} /></FormControl>
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="businessHours" render={({ field }) => (
                        <FormItem><FormLabel>Business hours? <span className="text-red-500">*</span></FormLabel>
                          <FormControl><Input placeholder="e.g. Mon–Fri 9am–5pm, Sat 10am–2pm" className={inputCls} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </>
                  )}

                  {/* ── STEP 5: Goals ── */}
                  {step === 5 && (
                    <>
                      <SectionTitle>Your Goals</SectionTitle>

                      <Controller control={form.control} name="goals" render={({ field }) => (
                        <CheckboxGrid
                          label="What do you want to achieve?"
                          options={[
                            "Answer all calls",
                            "Book appointments automatically",
                            "Capture missed leads",
                            "Handle after-hours calls",
                            "Reduce missed customers",
                          ]}
                          value={field.value ?? []}
                          onChange={field.onChange}
                          error={(errors as Record<string, { message?: string }>).goals?.message}
                        />
                      )} />

                      <Controller control={form.control} name="wantsDemo" render={({ field }) => (
                        <YesNo
                          label="Would you like a free personalized AI receptionist demo?"
                          value={field.value ?? ""}
                          onChange={field.onChange}
                          error={(errors as Record<string, { message?: string }>).wantsDemo?.message}
                        />
                      )} />
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => goTo(step - 1)}
                        className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div />}

                    {step < 5 ? (
                      <Button
                        type="button"
                        onClick={advance}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold"
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-semibold"
                      >
                        {submitMutation.isPending ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                        ) : (
                          "Get My Free Demo"
                        )}
                      </Button>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </form>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

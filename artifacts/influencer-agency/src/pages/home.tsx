import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { CheckCircle2, Phone, CalendarCheck, PhoneMissed, Clock, Stethoscope, Smile, Droplets, Wind, HardHat, Sparkles, Leaf, Building2, MoveRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Receptionist Setup",
    desc: "We build a custom AI voice receptionist trained on your business — your services, your FAQs, your tone.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking Automation",
    desc: "AI books appointments directly into your calendar without any staff involvement.",
  },
  {
    icon: PhoneMissed,
    title: "Missed Call Recovery",
    desc: "Never lose customers who call after hours or when you're busy. Every call gets answered.",
  },
  {
    icon: Clock,
    title: "24/7 Call Answering",
    desc: "Your business answers every call automatically — day, night, weekends, and holidays.",
  },
];

const industries = [
  { icon: Stethoscope, label: "Medical Clinics" },
  { icon: Smile,       label: "Dental Clinics" },
  { icon: Droplets,    label: "Plumbing" },
  { icon: Wind,        label: "HVAC" },
  { icon: HardHat,     label: "Roofing" },
  { icon: Sparkles,    label: "Cleaning Services" },
  { icon: Leaf,        label: "Landscaping" },
  { icon: Building2,   label: "Real Estate" },
];

const benefits = [
  "Answer every call instantly",
  "Book appointments automatically",
  "Capture missed leads",
  "Reduce lost customers",
  "Improve customer experience",
  "Works 24/7 without staff",
];

const testimonials = [
  {
    quote: "Since using the AI receptionist, we stopped missing calls completely. Our bookings went up within the first week.",
    name: "Local Business Owner",
    role: "Medical Clinic, Ontario",
  },
  {
    quote: "We were losing so many leads to voicemail after hours. Now every call is handled automatically and we wake up to new appointments.",
    name: "Service Business Owner",
    role: "Plumbing Company, BC",
  },
  {
    quote: "The AI answers just like a real receptionist. Our customers can't tell the difference — and they love that we're always available.",
    name: "Clinic Manager",
    role: "Dental Clinic, Alberta",
  },
];

const howItWorksSteps = [
  { number: "01", title: "We learn about your business",          desc: "We ask the right questions about your services, hours, FAQs, and how you currently handle calls." },
  { number: "02", title: "We build your AI receptionist",         desc: "Our team trains a custom AI voice agent on your business — your tone, your offerings, your calendar." },
  { number: "03", title: "We connect your phone & calendar",      desc: "We integrate with your existing phone number and booking system. No new hardware required." },
  { number: "04", title: "You start receiving more appointments",  desc: "Your AI receptionist goes live and starts answering calls, capturing leads, and booking appointments 24/7." },
];

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Every Call", "Every Lead", "Every Booking", "Every Opportunity", "Every Customer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <WebGLShader />
            <div className="absolute inset-0 bg-background/65" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8 backdrop-blur-md">
                <Phone className="w-4 h-4 text-primary" />
                <span>AI Receptionists for Local Businesses</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[1.1]">
                Never Miss
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[1.2em]">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute text-gradient font-extrabold"
                      initial={{ opacity: 0, y: 80 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : { y: titleNumber > index ? -80 : 80, opacity: 0 }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="block">Again</span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                We build AI receptionists that answer calls, capture leads, and book appointments automatically — 24/7.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/apply">
                  <LiquidButton size="xl" className="bg-primary/80 text-white rounded-full border border-primary/40 font-semibold glow-primary glow-primary-hover w-full sm:w-auto">
                    Get Free AI Demo
                  </LiquidButton>
                </Link>
                <a href="#how-it-works">
                  <LiquidButton size="xl" className="text-white rounded-full border border-white/20 w-full sm:w-auto">
                    See How It Works
                  </LiquidButton>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-24 relative z-10 bg-black/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 100, suffix: "%", label: "Calls Answered" },
                { value: 2,   suffix: "s",  label: "Average Answer Time" },
                { value: 40,  suffix: "%",  label: "More Appointments Booked" },
                { value: 24,  suffix: "/7",  label: "Always On, No Days Off" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="relative rounded-[1.25rem] border border-white/10 p-2">
                    <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative glass-panel rounded-xl p-8 text-center">
                      <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-white/60 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Everything your business needs to stop missing calls and start converting more customers automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2">
                    <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} />
                    <div className="relative flex flex-col rounded-xl bg-card/50 p-8 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6">
                        <svc.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3">{svc.title}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{svc.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" className="py-32 bg-black/30 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                From your first call with us to a fully running AI receptionist in days, not months.
              </p>
            </div>
            <div className="space-y-5">
              {howItWorksSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-3xl font-display font-bold text-primary/40 w-10 flex-shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
                    <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Who We Work With</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                If your business receives phone calls, an AI receptionist will help you capture more customers.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <ind.icon className="w-8 h-8 text-primary" />
                  <span className="font-semibold text-white text-sm">{ind.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-black/30 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Businesses Choose Trendivo AI</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-white">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What Business Owners Are Saying</h2>
              <p className="text-white/50 text-lg">Real results from local businesses using Trendivo AI.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
                >
                  <p className="text-white/70 leading-relaxed italic">"{t.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-white/40">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-32 bg-black/30 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Frequently Asked Questions</h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "How does the AI receptionist work?",
                    a: "Our AI answers incoming calls using a natural-sounding voice, asks the right questions, and either books the appointment directly into your calendar or captures the lead and notifies you.",
                  },
                  {
                    q: "Will it sound like a real person?",
                    a: "Yes. Our AI receptionists are trained to sound natural and professional. Most callers cannot tell the difference between the AI and a human receptionist.",
                  },
                  {
                    q: "Do I need to change my phone number?",
                    a: "No. We connect to your existing business phone number. Nothing changes for your customers.",
                  },
                  {
                    q: "What booking systems do you integrate with?",
                    a: "We integrate with Google Calendar, Calendly, Jane App, Jobber, Housecall Pro, and more. If you use something else, we'll work with you to make it happen.",
                  },
                  {
                    q: "How long does setup take?",
                    a: "Most businesses are live within 3–5 business days after their demo call. We handle everything — you just review and approve.",
                  },
                  {
                    q: "What types of businesses do you work with?",
                    a: "Any local service business that receives phone calls — medical clinics, dental offices, plumbers, HVAC companies, roofers, cleaners, landscapers, and more.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10 px-2">
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-6 text-center bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 mx-6 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Your Next Customer Shouldn't Go To{" "}
              <span className="text-primary">Voicemail</span>
            </h2>
            <p className="text-white/55 text-lg mb-10">
              Get a free personalized AI receptionist demo. We'll show you exactly how it works for your business.
            </p>
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-semibold glow-primary glow-primary-hover transition-all duration-300 group">
                Get Your Free AI Receptionist Demo
                <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

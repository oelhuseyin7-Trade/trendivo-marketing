import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "79%", label: "of buyers trust UGC over brand ads" },
  { value: "3", label: "flexible offers towards achieving your goals" },
  { value: "24–48h", label: "production start after onboarding" },
  { value: "100%", label: "usage rights included" },
];

const packages = [
  {
    tag: "STARTER",
    name: "Beauty UGC Test Pack",
    price: "$400 – $750 CAD",
    delivery: "14–18 business days",
    creators: "3–5 creators",
    videos: "5 total videos",
    bestFor: "Brands testing UGC for the first time",
    popular: false,
    includes: [
      "5 short-form UGC videos (15–60s)",
      "Hook + full script guidance",
      "Multiple hook variations to test",
      "Ad usage rights 12 months",
      "1 round of revisions",
      "Ready for TikTok Reels & paid ads",
      "Creator beauty-niche matched",
    ],
  },
  {
    tag: "MOST POPULAR",
    name: "Growth Content System",
    price: "$800 – $1,800 CAD",
    delivery: "3–5 weeks",
    creators: "5–8 creators",
    videos: "10–15 videos",
    bestFor: "Brands ready to scale with proven content",
    popular: true,
    includes: [
      "10–15 UGC videos across multiple angles",
      "Multiple hooks & script variations",
      "Structured content strategy included",
      "Ad + organic use rights 12 months",
      "2 rounds of revisions",
      "Content calendar / posting guidance",
      "Optimised for scaling winning creatives",
    ],
  },
  {
    tag: "SCALE",
    name: "Scale System",
    price: "$2,000 – $5,000+ CAD/mo",
    delivery: "Monthly pipeline",
    creators: "10–20 creators",
    videos: "20–40+ videos/mo",
    bestFor: "Brands running always-on paid social at scale",
    popular: false,
    includes: [
      "20–40+ videos per month",
      "Ongoing creator roster management",
      "Continuous ad creative testing",
      "Full usage rights perpetual",
      "Unlimited revision rounds",
      "Monthly performance debrief",
      "Priority onboarding & support",
    ],
  },
];

const alwaysIncluded = [
  {
    title: "Full Ad Usage Rights",
    desc: "Use every video in paid ads, organic posts, your website, and email with no extra licensing fees.",
  },
  {
    title: "Beauty-Niche Matched Creators",
    desc: "All creators are selected specifically for the beauty space: skincare, makeup, wellness.",
  },
  {
    title: "Hook + Script Guidance",
    desc: "We craft the hooks and scripts so creators know exactly what to say and how to say it.",
  },
  {
    title: "Revision Policy",
    desc: "Every package includes at least one revision round. If a video misses the brief we fix it.",
  },
  {
    title: "Ready-to-Post Deliverables",
    desc: "Videos are delivered edited, captioned, and formatted for TikTok & Reels with no extra editing needed.",
  },
  {
    title: "Brand Onboarding Brief",
    desc: "We start every project with a detailed brief so creators fully understand your product and audience.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brand Onboarding",
    desc: "You fill out a quick onboarding brief with your product details, target audience, tone, and goals. Takes about 10 minutes and sets up everything.",
  },
  {
    number: "02",
    title: "Creator Selection",
    desc: "We hand-pick beauty micro-creators from our network who match your niche, aesthetic, and demographic. You can approve the lineup before we start.",
  },
  {
    number: "03",
    title: "Content Creation",
    desc: "Creators receive your product brief and script guidance, film and edit the videos, and submit for your review. We manage all creator communication.",
  },
  {
    number: "04",
    title: "Review & Revisions",
    desc: "You review all deliverables. If any video needs changes we handle the revision with the creator.",
  },
  {
    number: "05",
    title: "Final Delivery",
    desc: "All final videos are delivered in a shared folder ready for paid ads or organic posting. You own full usage rights from day one.",
  },
];

const timeline = [
  {
    pack: "Test Pack",
    onboarding: "1–2 days",
    selection: "2–3 days",
    filming: "5–7 days",
    review: "3–5 days",
    total: "14–18 business days",
  },
  {
    pack: "Growth System",
    onboarding: "1–2 days",
    selection: "3–4 days",
    filming: "10–14 days",
    review: "5–7 days",
    total: "3–5 weeks",
  },
  {
    pack: "Scale System",
    onboarding: "1–2 days",
    selection: "Ongoing roster",
    filming: "Monthly pipeline",
    review: "Rolling",
    total: "Monthly delivery cycle",
  },
];

const faqs = [
  {
    q: "Who ships the product to the creators?",
    a: "You ship directly to each creator. We provide shipping details after creator selection is confirmed. Digital products can be delivered instantly.",
  },
  {
    q: "How long do I own the content?",
    a: "Test Pack and Growth System include 12-month ad usage rights. Scale System clients receive perpetual forever usage rights.",
  },
  {
    q: "Can I approve the creators before you start?",
    a: "Yes. After onboarding we send you the proposed creator lineup and you can approve or request swaps before any filming begins.",
  },
  {
    q: "What if I don't like a video?",
    a: "Every package includes at least one full revision round. Test Pack includes 1 round, Growth System includes 2, Scale System has unlimited revisions.",
  },
  {
    q: "What platforms is this content made for?",
    a: "All videos are natively formatted for TikTok and Instagram Reels vertical 9:16. We can also format for Meta feed ads upon request at no extra charge.",
  },
  {
    q: "Do I need to provide a script?",
    a: "No. Script writing and hook development is included in every package. You just share your product details, key benefits, and target audience.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-semibold text-white">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <div className="px-6 pb-5 text-white/60 leading-relaxed border-t border-white/10 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function UGC() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <Navbar />

      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 relative z-10">

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              UGC Services
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
              Beauty UGC That Actually{" "}
              <span className="text-primary">Converts</span>
            </h1>
            <p className="text-white/60 text-xl mb-12">
              Micro-creator content for TikTok, Reels & Paid Ads
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/50 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Pricing Packages
            </h2>
            <p className="text-white/50 text-center mb-14">
              Pick the package that matches where your brand is right now.
            </p>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative rounded-3xl p-7 border flex flex-col gap-5 ${
                    pkg.popular
                      ? "border-primary bg-primary/10 shadow-[0_0_60px_rgba(124,58,237,0.15)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                      MOST POPULAR
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-bold tracking-widest text-primary/80 uppercase">
                      {pkg.tag !== "MOST POPULAR" ? pkg.tag : "GROWTH"}
                    </span>
                    <h3 className="text-xl font-display font-bold mt-1 mb-1">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-white mt-3">{pkg.price}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[pkg.delivery, pkg.creators, pkg.videos].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-white/40 italic">Best for: {pkg.bestFor}</p>

                  <Link href="/apply">
                    <Button
                      className={`w-full rounded-full font-semibold ${
                        pkg.popular
                          ? "bg-primary hover:bg-primary/90 text-white"
                          : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALWAYS INCLUDED ── */}
        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              What's Always Included
            </h2>
            <p className="text-white/50 text-center mb-14">Every package ships with these non-negotiables.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {alwaysIncluded.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              How It Works
            </h2>
            <p className="text-white/50 text-center mb-14">Five simple steps from brief to final delivery.</p>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-3xl font-display font-bold text-primary/40 w-10 flex-shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERY TIMELINES ── */}
        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Delivery Timelines
            </h2>
            <p className="text-white/50 text-center mb-12">Exactly how long each stage takes per package.</p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="text-left px-5 py-4 font-semibold text-white/80">Package</th>
                    <th className="text-left px-5 py-4 font-semibold text-white/80">Onboarding</th>
                    <th className="text-left px-5 py-4 font-semibold text-white/80">Creator Selection</th>
                    <th className="text-left px-5 py-4 font-semibold text-white/80">Filming & Editing</th>
                    <th className="text-left px-5 py-4 font-semibold text-white/80">Review + Revisions</th>
                    <th className="text-left px-5 py-4 font-semibold text-primary">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {timeline.map((row, i) => (
                    <tr
                      key={row.pack}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                    >
                      <td className="px-5 py-4 font-semibold text-white">{row.pack}</td>
                      <td className="px-5 py-4 text-white/60">{row.onboarding}</td>
                      <td className="px-5 py-4 text-white/60">{row.selection}</td>
                      <td className="px-5 py-4 text-white/60">{row.filming}</td>
                      <td className="px-5 py-4 text-white/60">{row.review}</td>
                      <td className="px-5 py-4 font-semibold text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-center mb-12">Everything you need to know before getting started.</p>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Create Content That{" "}
              <span className="text-primary">Converts?</span>
            </h2>
            <p className="text-white/55 text-lg mb-10">
              We build your custom creator set and begin production within 24–48 hours of onboarding.
            </p>
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-semibold glow-primary glow-primary-hover transition-all duration-300">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "10x", label: "average return on influencer campaigns" },
  { value: "500+", label: "creators in our network" },
  { value: "48h", label: "campaign kickoff after onboarding" },
  { value: "100%", label: "managed for you end to end" },
];

const packages = [
  {
    tag: "STARTER",
    name: "Brand Awareness Package",
    price: "$500 – $1,200 CAD",
    popular: false,
    bestFor: "Beauty brands testing influencer marketing for the first time",
    includes: [
      "2–4 micro influencers (10K–100K followers)",
      "1 post + 1 story per influencer",
      "Influencer vetting & matching",
      "Campaign brief creation",
      "Content approval before posting",
      "Basic performance report after campaign",
    ],
  },
  {
    tag: "MOST POPULAR",
    name: "Growth Campaign",
    price: "$1,500 – $4,000 CAD",
    popular: true,
    bestFor: "Beauty brands ready to grow their audience and drive sales",
    includes: [
      "5–10 micro & mid-tier influencers",
      "2 posts + 2 stories per influencer",
      "Full campaign strategy & management",
      "Influencer outreach & contracts handled",
      "Content approval process",
      "Detailed performance report & analytics",
      "Hashtag & caption strategy",
    ],
  },
  {
    tag: "SCALE",
    name: "Ambassador Program",
    price: "$4,500 – $10,000+ CAD/mo",
    popular: false,
    bestFor: "Beauty brands wanting consistent long-term influencer presence",
    includes: [
      "10–20 influencers per month",
      "Ongoing ambassador relationships",
      "Monthly content calendar",
      "Full campaign management",
      "Contract & payment handling",
      "Weekly performance check-ins",
      "Monthly strategy debrief",
      "Priority influencer access",
    ],
  },
];

const alwaysIncluded = [
  {
    title: "Influencer Vetting & Background Check",
    desc: "Every creator is thoroughly vetted for engagement quality, audience authenticity and brand fit.",
  },
  {
    title: "Campaign Brief & Creative Direction",
    desc: "We build a detailed brief so every influencer knows exactly how to represent your brand.",
  },
  {
    title: "Content Review Before It Goes Live",
    desc: "You approve all content before it gets posted. Nothing goes live without your sign off.",
  },
  {
    title: "Full Communication Handled By Trendivo",
    desc: "We manage all influencer communication, follow ups and logistics so you don't have to.",
  },
  {
    title: "Post Campaign Performance Summary",
    desc: "Every campaign ends with a clear report showing reach, engagement and results.",
  },
  {
    title: "Instagram & TikTok Focused",
    desc: "We specialise in the two highest performing platforms for beauty brands.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We learn about your brand, goals, target audience and budget to build the right campaign strategy.",
  },
  {
    number: "02",
    title: "Strategy & Matching",
    desc: "We build your campaign strategy and hand pick influencers that match your brand aesthetic and audience demographics.",
  },
  {
    number: "03",
    title: "Outreach & Contracts",
    desc: "We handle all influencer outreach, negotiation and contracts so you don't have to deal with any of it.",
  },
  {
    number: "04",
    title: "Content Creation & Approval",
    desc: "Influencers create content based on your brief. You review and approve before anything goes live.",
  },
  {
    number: "05",
    title: "Campaign Launch & Reporting",
    desc: "Content goes live across Instagram and TikTok. We track performance and deliver a full report at the end.",
  },
];

const faqs = [
  {
    q: "Do I get to approve the influencers?",
    a: "Yes, we send you the full influencer lineup with their stats and you approve before we reach out to anyone.",
  },
  {
    q: "What platforms do you focus on?",
    a: "Primarily Instagram and TikTok, which are the highest performing platforms for beauty brands.",
  },
  {
    q: "How do you pick influencers?",
    a: "We vet based on engagement rate, audience demographics, niche relevance and content quality. No fake followers.",
  },
  {
    q: "Do you handle payments to influencers?",
    a: "Yes, all influencer payments are fully managed by Trendivo.",
  },
  {
    q: "How long does a campaign take?",
    a: "Starter campaigns typically take 2–3 weeks. Growth campaigns 3–5 weeks. Ambassador programs run on a monthly cycle.",
  },
  {
    q: "What if an influencer doesn't perform well?",
    a: "We monitor campaigns closely and will suggest replacements or adjustments if needed to protect your investment.",
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

export default function InfluencerMarketing() {
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
              Influencer Marketing
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight">
              Beauty Influencer Marketing That Drives{" "}
              <span className="text-primary">Real Results</span>
            </h1>
            <p className="text-white/60 text-xl mb-12">
              Connecting beauty brands with the right creators on Instagram & TikTok
            </p>

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
                    <h3 className="text-xl font-display font-bold mt-1">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-white mt-3">{pkg.price}</p>
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
            <p className="text-white/50 text-center mb-14">
              Every package ships with these non-negotiables.
            </p>
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
            <p className="text-white/50 text-center mb-14">
              Five steps from discovery to full campaign delivery.
            </p>
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

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 text-center mb-12">
              Everything you need to know before getting started.
            </p>
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
              Ready to Grow Your Brand With{" "}
              <span className="text-primary">Influencer Marketing?</span>
            </h2>
            <p className="text-white/55 text-lg mb-10">
              We handle everything from creator selection to campaign reporting so you can focus on your business.
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

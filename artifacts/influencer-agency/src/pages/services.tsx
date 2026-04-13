import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Search, MessageSquare, DollarSign, Film, Megaphone, ArrowRight, CheckCircle2, LineChart, Users, Link2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    badge: "01",
    icon: Megaphone,
    title: "Influencer Campaign Management",
    description: "We handle every detail of your influencer campaign from start to finish. You set the goals — we deliver the results.",
    features: [
      { icon: Search, text: "Creator discovery & vetting across all niches" },
      { icon: MessageSquare, text: "Full outreach, negotiation & contracting" },
      { icon: Users, text: "Campaign briefing & content coordination" },
      { icon: LineChart, text: "Performance tracking & detailed reporting" },
    ],
    color: "bg-violet-50",
    accent: "text-violet-600",
    tag: "Most Popular",
  },
  {
    badge: "02",
    icon: Film,
    title: "UGC Content Creation",
    description: "High-converting, ads-ready content made by real creators for TikTok, Reels, and paid media — no studio required.",
    features: [
      { icon: Film, text: "Scroll-stopping TikTok & Reels content" },
      { icon: MessageSquare, text: "Product-focused scripts & creative direction" },
      { icon: Megaphone, text: "Repurposable assets for paid ads" },
      { icon: CheckCircle2, text: "Fast turnaround, revision-ready deliverables" },
    ],
    color: "bg-blue-50",
    accent: "text-blue-600",
    tag: null,
  },
  {
    badge: "03",
    icon: DollarSign,
    title: "Affiliate & Performance Campaigns",
    description: "Only pay for real results. We build and manage performance-based affiliate campaigns with full tracking and creator payouts.",
    features: [
      { icon: Link2, text: "Pay-per-sale affiliate campaign structure" },
      { icon: LineChart, text: "Tracking link setup & attribution" },
      { icon: DollarSign, text: "Automated creator payouts" },
      { icon: BarChart, text: "Real-time dashboard & ROI reporting" },
    ],
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    tag: null,
  },
];

function BarChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export default function Services() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Services</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-5 leading-tight">
              Everything you need to grow with creators.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              From campaign strategy to content creation to performance tracking — we're your full-service influencer marketing team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className={`rounded-3xl p-10 md:p-14 ${service.color} relative overflow-hidden`}
            >
              {service.tag && (
                <span className="absolute top-8 right-8 text-xs font-bold text-primary bg-white px-3 py-1 rounded-full shadow-sm">
                  {service.tag}
                </span>
              )}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <motion.span variants={fadeUp} className="text-5xl font-display font-black text-gray-200 mb-4 block">
                    {service.badge}
                  </motion.span>
                  <motion.div variants={fadeUp} className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm`}>
                    <service.icon className={`w-6 h-6 ${service.accent}`} />
                  </motion.div>
                  <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </motion.p>
                </div>
                <motion.ul variants={stagger} className="space-y-4">
                  {service.features.map((f) => (
                    <motion.li key={f.text} variants={fadeUp} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                      <f.icon className={`w-5 h-5 ${service.accent} shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium">{f.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Ready to launch your campaign?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-8">
              Book a free strategy call and we'll put together a custom plan for your brand.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all glow-primary-hover"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

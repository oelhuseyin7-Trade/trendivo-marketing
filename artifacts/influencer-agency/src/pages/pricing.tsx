import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const plans = [
  {
    name: "Starter Campaign",
    tagline: "Perfect for first-time campaigns",
    highlight: false,
    features: [
      "5–10 hand-picked influencers",
      "Niche-matched creator outreach",
      "Campaign brief & coordination",
      "1 campaign / 30 days",
      "Performance report",
      "Email support",
    ],
    cta: "Contact for Pricing",
  },
  {
    name: "Growth Campaign",
    tagline: "For brands ready to scale",
    highlight: true,
    badge: "Most Popular",
    features: [
      "15–30 influencers across platforms",
      "Full campaign management",
      "UGC content creation included",
      "TikTok + Reels + Instagram",
      "Bi-weekly reporting & optimization",
      "Dedicated campaign manager",
      "Priority support",
    ],
    cta: "Contact for Pricing",
  },
  {
    name: "Scale Campaign",
    tagline: "For high-growth brands",
    highlight: false,
    badge: "Enterprise",
    features: [
      "Monthly retainer — always-on",
      "Ongoing influencer pipeline",
      "Unlimited UGC content",
      "Affiliate tracking & payouts",
      "Performance optimization",
      "Weekly strategy calls",
      "Custom reporting dashboard",
      "Dedicated team of 3+",
    ],
    cta: "Contact for Pricing",
  },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "We offer custom pricing based on your campaign goals, niche, and scale. Contact us and we'll put together a transparent quote within 24 hours.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "Starter and Growth campaigns run 30 days. Scale retainers are month-to-month with a 2-month minimum.",
  },
  {
    q: "Can I upgrade my plan mid-campaign?",
    a: "Yes. If you want to scale up, just let your campaign manager know and we'll adjust your plan.",
  },
  {
    q: "What platforms do you cover?",
    a: "Instagram, TikTok, YouTube, and Reels. We match creators to the platforms your audience uses most.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Pricing</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-5 leading-tight">
              Simple, flexible plans.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg">
              No hidden fees. No bloated retainers. Just campaigns that work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-primary text-white shadow-2xl shadow-primary/25 scale-105"
                    : "bg-white border-2 border-gray-100"
                }`}
              >
                {plan.badge && (
                  <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap ${
                    plan.highlight ? "bg-white text-primary" : "bg-primary text-white"
                  }`}>
                    {plan.badge}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-display font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.tagline}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-white/80" : "text-primary"}`} />
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90 glow-primary-hover"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 section-alt">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900">Pricing FAQ</h2>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4">
              {faqs.map((faq) => (
                <motion.div key={faq.q} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-display font-bold mb-4">
              Not sure which plan is right for you?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8">
              Book a free 30-minute call. We'll recommend the right package for your goals and budget.
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

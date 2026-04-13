import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Target, Heart, Zap, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const values = [
  {
    icon: Target,
    title: "Results-First",
    description: "We don't celebrate impressions. We celebrate sales, signups, and revenue. Every campaign is built around a measurable outcome.",
  },
  {
    icon: Heart,
    title: "Creator Relationships",
    description: "We treat creators as business partners, not ad slots. That's why the content we coordinate actually converts.",
  },
  {
    icon: Zap,
    title: "Agile & Transparent",
    description: "Weekly updates, real-time dashboards, and a direct line to your campaign manager. No black boxes.",
  },
];

const stats = [
  { icon: TrendingUp, value: "4.6x", label: "Average campaign ROI" },
  { icon: Users, value: "2,000+", label: "Creator network" },
  { icon: Globe, value: "30+", label: "Brands served" },
];

const whyItWorks = [
  {
    n: "01",
    title: "People trust people, not ads.",
    desc: "93% of consumers trust peer recommendations over branded content. Creators ARE the social proof.",
  },
  {
    n: "02",
    title: "Attention is shifting to short-form.",
    desc: "TikTok, Reels, and YouTube Shorts account for billions of daily views. Your brand should be there.",
  },
  {
    n: "03",
    title: "UGC outperforms studio ads.",
    desc: "Creator-style content consistently delivers lower CPMs and higher CTRs in paid media compared to polished ad creative.",
  },
  {
    n: "04",
    title: "Performance is measurable.",
    desc: "With the right tracking setup, influencer campaigns are fully attributable — not just a brand awareness play.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-20 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center">
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
              We built the agency we wished existed.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Trendivo Marketing is a full-service influencer marketing agency built for ecommerce brands that want real, measurable results — not vanity metrics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 section-alt">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-5 leading-tight">
                Help brands grow using the power of creators.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-5">
                We started Trendivo because we saw too many brands wasting money on influencer campaigns that weren't built for ROI. Big follower counts, zero conversions. Pretty content, no strategy.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
                So we built a different kind of agency. One that combines deep creator relationships, performance data, and a genuine understanding of what makes people buy — to run campaigns that actually move the needle.
              </motion.p>
            </div>
            <motion.div variants={stagger} className="grid grid-cols-1 gap-5">
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-extrabold text-gray-900">{s.value}</p>
                    <p className="text-sm text-gray-400">{s.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900">What we stand for</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="p-8 rounded-2xl bg-white border border-gray-100 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY INFLUENCER MARKETING WORKS */}
      <section className="py-20 section-alt">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Big Picture</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Why influencer marketing works.
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
              {whyItWorks.map((item) => (
                <motion.div key={item.n} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-5">
                  <span className="text-3xl font-display font-black text-gray-100 shrink-0 leading-none">{item.n}</span>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
              Let's build something together.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8">
              We're selective with the brands we work with — because we only take on campaigns we know we can win.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all glow-primary-hover"
              >
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowRight, TrendingUp, Video, BarChart3, Star, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: TrendingUp,
    title: "Influencer Campaigns",
    description: "End-to-end campaign management. We find, vet, and coordinate top creators in your niche to drive real results.",
  },
  {
    icon: Video,
    title: "UGC Content Creation",
    description: "Ads-ready UGC for TikTok, Reels & paid media. Authentic content that converts at scale.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Pay-per-sale affiliate campaigns with full tracking setup, creator payouts, and ROI reporting.",
  },
];

const caseStudies = [
  {
    brand: "GlowLab Skincare",
    niche: "Beauty & Skincare",
    result: "4.2M views",
    metric: "3.8x ROI",
    color: "bg-rose-50",
    tag: "Influencer Campaign",
  },
  {
    brand: "APEX Fitness",
    niche: "Health & Fitness",
    result: "6.5M impressions",
    metric: "5.1x ROAS",
    color: "bg-violet-50",
    tag: "UGC Ads",
  },
  {
    brand: "NovaWear",
    niche: "Fashion & Apparel",
    result: "$280K revenue",
    metric: "12M reach",
    color: "bg-blue-50",
    tag: "Affiliate Campaign",
  },
];

const logos = ["BRAND A", "BRAND B", "BRAND C", "BRAND D", "BRAND E"];

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-violet-100/60 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Influencer Marketing Agency
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.05]"
            >
              We help brands turn{" "}
              <span className="text-gradient">influencers</span>{" "}
              into consistent sales.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Full-service influencer marketing & UGC campaigns for growing brands. We handle everything — from creator discovery to results.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-all glow-primary-hover"
              >
                Get Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                View Case Studies <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-gray-50 border-y border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Trusted by growing ecom brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((l) => (
              <span key={l} className="text-lg font-display font-bold text-gray-200 tracking-wide">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              One agency. Every channel.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-gray-100 bg-white card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Results</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Campaigns that convert.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.brand}
                variants={fadeUp}
                className={`p-8 rounded-2xl ${cs.color} card-hover`}
              >
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.tag}</span>
                <h3 className="text-xl font-display font-bold text-gray-900 mt-4 mb-1">{cs.brand}</h3>
                <p className="text-sm text-gray-500 mb-6">{cs.niche}</p>
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-3xl font-display font-extrabold text-gray-900">{cs.result}</p>
                    <p className="text-sm text-gray-500">Generated</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-2xl font-display font-bold text-primary">{cs.metric}</p>
                    <p className="text-sm text-gray-500">Return</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              See all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">
              Start your influencer campaign today.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10">
              Book a free 30-minute strategy call. We'll audit your brand and map out a custom creator campaign.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 transition-all glow-primary-hover"
              >
                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-all"
              >
                See our services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

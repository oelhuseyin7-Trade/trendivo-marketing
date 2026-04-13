import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowRight, TrendingUp, Eye, ShoppingBag, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const caseStudies = [
  {
    brand: "GlowLab Skincare",
    logo: "GL",
    niche: "Beauty & Skincare",
    logoColor: "bg-rose-100 text-rose-600",
    tag: "Influencer Campaign",
    tagColor: "bg-rose-50 text-rose-600",
    goal: "Drive product awareness and DTC sales for a new serum launch.",
    strategy: "Partnered with 18 micro-influencers in the skincare niche. Created a 30-day campaign using before/after storytelling and a founder's story arc.",
    results: [
      { icon: Eye, label: "Total Views", value: "4.2M" },
      { icon: TrendingUp, label: "ROI", value: "3.8x" },
      { icon: ShoppingBag, label: "Revenue Generated", value: "$92K" },
      { icon: Heart, label: "Eng. Rate", value: "7.4%" },
    ],
    color: "border-rose-100",
  },
  {
    brand: "APEX Fitness",
    logo: "AF",
    niche: "Health & Fitness",
    logoColor: "bg-violet-100 text-violet-600",
    tag: "UGC Ads",
    tagColor: "bg-violet-50 text-violet-600",
    goal: "Scale paid acquisition using creator-style UGC content for Meta & TikTok ads.",
    strategy: "Briefed 12 fitness creators to produce product-demo style videos. A/B tested 24 ad variants. Top performer ran for 6 weeks.",
    results: [
      { icon: Eye, label: "Impressions", value: "6.5M" },
      { icon: TrendingUp, label: "ROAS", value: "5.1x" },
      { icon: ShoppingBag, label: "Orders", value: "1,840" },
      { icon: Heart, label: "CTR", value: "4.2%" },
    ],
    color: "border-violet-100",
  },
  {
    brand: "NovaWear",
    logo: "NW",
    niche: "Fashion & Apparel",
    logoColor: "bg-blue-100 text-blue-600",
    tag: "Affiliate Campaign",
    tagColor: "bg-blue-50 text-blue-600",
    goal: "Build a recurring affiliate revenue channel through mid-tier fashion creators.",
    strategy: "Recruited 45 fashion creators on a pay-per-sale model. Tracked all conversions via unique discount codes. Monthly commission payouts.",
    results: [
      { icon: Eye, label: "Total Reach", value: "12M" },
      { icon: TrendingUp, label: "Revenue", value: "$280K" },
      { icon: ShoppingBag, label: "Conversions", value: "3,200+" },
      { icon: Heart, label: "Return Rate", value: "38%" },
    ],
    color: "border-blue-100",
  },
  {
    brand: "Bite & Brew",
    logo: "BB",
    niche: "Food & Beverage",
    logoColor: "bg-amber-100 text-amber-600",
    tag: "Influencer Campaign",
    tagColor: "bg-amber-50 text-amber-600",
    goal: "Launch a new coffee product line to a millennial and Gen Z audience.",
    strategy: "Activated 10 lifestyle + food creators on Instagram & TikTok. Focused on 'morning routine' style content with product integration.",
    results: [
      { icon: Eye, label: "Views", value: "2.8M" },
      { icon: TrendingUp, label: "ROI", value: "4.4x" },
      { icon: ShoppingBag, label: "Units Sold", value: "6,700" },
      { icon: Heart, label: "Saves", value: "42K" },
    ],
    color: "border-amber-100",
  },
  {
    brand: "TerraHome",
    logo: "TH",
    niche: "Home & Lifestyle",
    logoColor: "bg-emerald-100 text-emerald-600",
    tag: "UGC Ads",
    tagColor: "bg-emerald-50 text-emerald-600",
    goal: "Reduce ad creative fatigue and lower CPM by refreshing ad library with UGC.",
    strategy: "Sourced 20 UGC creators to shoot 40+ home setup videos. Used content in 3 Meta campaigns. Creative refresh reduced CPM by 31%.",
    results: [
      { icon: Eye, label: "Ad Impressions", value: "9.1M" },
      { icon: TrendingUp, label: "CPM Reduction", value: "31%" },
      { icon: ShoppingBag, label: "Sales", value: "$145K" },
      { icon: Heart, label: "ROAS", value: "4.7x" },
    ],
    color: "border-emerald-100",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Case Studies</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-5 leading-tight">
              Real brands. Real results.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-xl mx-auto">
              Here's what happens when strategy meets the right creators.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className={`rounded-3xl border-2 ${cs.color} p-8 md:p-10 bg-white card-hover`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left */}
                <div className="md:w-80 shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${cs.logoColor} font-display font-black text-lg flex items-center justify-center`}>
                      {cs.logo}
                    </div>
                    <div>
                      <p className="font-display font-bold text-gray-900">{cs.brand}</p>
                      <p className="text-sm text-gray-400">{cs.niche}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cs.tagColor}`}>{cs.tag}</span>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Goal</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.goal}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Strategy</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.strategy}</p>
                  </div>
                </div>

                {/* Right — Results */}
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Results</p>
                  <div className="grid grid-cols-2 gap-4">
                    {cs.results.map((r) => (
                      <motion.div key={r.label} variants={fadeUp} className="bg-gray-50 rounded-2xl p-5">
                        <r.icon className="w-5 h-5 text-primary mb-2" />
                        <p className="text-2xl font-display font-extrabold text-gray-900">{r.value}</p>
                        <p className="text-sm text-gray-400">{r.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-4">
              Want results like these?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8">
              Book a free call and we'll build a custom strategy for your brand.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all glow-primary-hover"
              >
                Get Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

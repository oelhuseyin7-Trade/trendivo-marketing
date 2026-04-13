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
import { Sparkles, Users, TrendingUp, Instagram, Youtube } from "lucide-react";

const NICHE_COLORS: Record<string, string> = {
  Fashion: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Fitness: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Beauty: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Gaming: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Food: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Tech: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Travel: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Wellness: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Streetwear: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Dance: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
  Finance: "bg-lime-500/20 text-lime-300 border-lime-500/30",
  Music: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
};

type Creator = {
  name: string;
  handle: string;
  niche: string;
  followers: string;
  engagement: string;
  platforms: ("ig" | "yt" | "tt")[];
  avatar: string;
};

const ROW1: Creator[] = [
  { name: "Maya Chen", handle: "@mayachen", niche: "Fashion", followers: "2.1M", engagement: "4.8%", platforms: ["ig", "tt"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" },
  { name: "Jake Rivers", handle: "@jakefit", niche: "Fitness", followers: "890K", engagement: "6.2%", platforms: ["ig", "yt"], avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" },
  { name: "Sofia Martinez", handle: "@sofiambeauty", niche: "Beauty", followers: "1.4M", engagement: "5.1%", platforms: ["ig", "yt", "tt"], avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face" },
  { name: "Tyler Brooks", handle: "@tylergames", niche: "Gaming", followers: "3.2M", engagement: "7.4%", platforms: ["yt", "tt"], avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face" },
  { name: "Priya Shah", handle: "@priyaeats", niche: "Food", followers: "760K", engagement: "8.1%", platforms: ["ig", "yt"], avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face" },
  { name: "Alex Kim", handle: "@alexkimtech", niche: "Tech", followers: "620K", engagement: "5.5%", platforms: ["yt"], avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" },
];

const ROW2: Creator[] = [
  { name: "Emma Walsh", handle: "@emmawell", niche: "Wellness", followers: "1.1M", engagement: "6.7%", platforms: ["ig", "yt"], avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" },
  { name: "Carlos Reyes", handle: "@carlosstreet", niche: "Streetwear", followers: "980K", engagement: "5.9%", platforms: ["ig", "tt"], avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=120&h=120&fit=crop&crop=face" },
  { name: "Ava Thompson", handle: "@avadances", niche: "Dance", followers: "4.5M", engagement: "9.2%", platforms: ["tt", "ig"], avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=face" },
  { name: "Noah Hassan", handle: "@noahfinance", niche: "Finance", followers: "520K", engagement: "4.3%", platforms: ["yt"], avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" },
  { name: "Luna Park", handle: "@lunatravel", niche: "Travel", followers: "840K", engagement: "7.0%", platforms: ["ig", "yt"], avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=face" },
  { name: "Kai Johnson", handle: "@kaimusic", niche: "Music", followers: "2.8M", engagement: "6.3%", platforms: ["ig", "tt", "yt"], avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=120&h=120&fit=crop&crop=face" },
];

function PlatformBadge({ type }: { type: "ig" | "yt" | "tt" }) {
  if (type === "ig") return <span title="Instagram" className="flex items-center gap-1 text-[10px] bg-white/10 rounded-full px-2 py-0.5 text-white/60"><Instagram className="w-3 h-3" /></span>;
  if (type === "yt") return <span title="YouTube" className="flex items-center gap-1 text-[10px] bg-white/10 rounded-full px-2 py-0.5 text-white/60"><Youtube className="w-3 h-3" /></span>;
  return <span title="TikTok" className="flex items-center gap-1 text-[10px] bg-white/10 rounded-full px-2 py-0.5 text-white/60 font-bold">TT</span>;
}

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <div className="flex-shrink-0 w-52 glass-panel rounded-2xl p-4 border border-white/10 mx-2 select-none">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(creator.name)}&background=7c3aed&color=fff`; }}
        />
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">{creator.name}</p>
          <p className="text-white/40 text-xs truncate">{creator.handle}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-3">
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${NICHE_COLORS[creator.niche] ?? "bg-white/10 text-white/60"}`}>
          {creator.niche}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs mb-3">
        <div>
          <p className="text-white font-bold">{creator.followers}</p>
          <p className="text-white/40">Followers</p>
        </div>
        <div className="text-right">
          <p className="text-primary font-bold">{creator.engagement}</p>
          <p className="text-white/40">Engagement</p>
        </div>
      </div>
      <div className="flex gap-1.5">
        {creator.platforms.map((p) => <PlatformBadge key={p} type={p} />)}
      </div>
    </div>
  );
}

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["High-Converting", "Viral-Ready", "ROI-Driven", "Data-Backed", "Impact-Driven"],
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
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* WebGL Shader Background */}
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span>The Premier Influencer Network</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[1.1]">
                We Connect Brands With
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
                <span className="block">Creators</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join the most powerful influencer marketing network. Drive real results, 
                reach real audiences, grow real income.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/apply">
                  <LiquidButton size="xl" className="bg-primary/80 text-white rounded-full border border-primary/40 font-semibold glow-primary glow-primary-hover w-full sm:w-auto">
                    Apply Now
                  </LiquidButton>
                </Link>
                <a href="#how-it-works">
                  <LiquidButton size="xl" className="text-white rounded-full border border-white/20 w-full sm:w-auto">
                    How it works
                  </LiquidButton>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 relative z-10 bg-black/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: 5, suffix: "x", label: "Average Brand Reach Increase" },
                { value: 10000, suffix: "+", label: "Creators in Network" },
                { value: 98, suffix: "%", label: "Campaign Success Rate" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="relative rounded-[1.25rem] border border-white/10 p-2">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
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

        {/* CREATORS SHOWCASE SECTION */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Our Creator Network</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Creators Behind The Results</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Hand-picked across every niche — from mega-influencers to high-engagement micro creators driving real ROI.
              </p>
            </motion.div>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="relative flex overflow-hidden mb-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee">
              {[...ROW1, ...ROW1].map((c, i) => <CreatorCard key={i} creator={c} />)}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee-reverse">
              {[...ROW2, ...ROW2].map((c, i) => <CreatorCard key={i} creator={c} />)}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white/50 text-sm mb-4">10,000+ creators and counting</p>
            <Link href="/apply">
              <LiquidButton size="lg" className="text-white rounded-full border border-white/20">
                Join the Network
              </LiquidButton>
            </Link>
          </motion.div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Our streamlined process takes the friction out of influencer marketing, 
                letting you focus on creating great content and growing your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />

              {[
                {
                  icon: Users,
                  title: "1. Apply",
                  desc: "Fill out a quick application to join our exclusive network as a creator or brand."
                },
                {
                  icon: Sparkles,
                  title: "2. Get Matched",
                  desc: "Our team reviews your profile and matches you with the perfect partners based on data."
                },
                {
                  icon: TrendingUp,
                  title: "3. Grow",
                  desc: "Launch campaigns, track results seamlessly, and scale your brand or income."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative flex flex-col items-center text-center rounded-xl bg-card/50 p-8 h-full">
                      <div className="w-20 h-20 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
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
                    q: "How does this work?",
                    a: "We match influencers with brands based on niche, audience size, engagement, and campaign goals. Once matched, you'll collaborate on content that drives real results."
                  },
                  {
                    q: "Is this paid?",
                    a: "Yes! Creators are compensated per post, per campaign, or through revenue share depending on the deal structure."
                  },
                  {
                    q: "How do creators get paid?",
                    a: "Creators receive payment via bank transfer, PayPal, or crypto within 14 days of campaign completion."
                  },
                  {
                    q: "How long does it take to get matched?",
                    a: "Most creators and brands are matched within 3-7 business days of approval."
                  },
                  {
                    q: "What niches do you work with?",
                    a: "We work with all niches including fitness, fashion, tech, beauty, food, travel, gaming, and more."
                  }
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
      </main>

      <Footer />
    </div>
  );
}

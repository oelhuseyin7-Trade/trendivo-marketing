import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-animated opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px]" />
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
                We Connect Brands With <br className="hidden md:block" />
                <span className="text-gradient">High-Converting</span> Creators
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join the most powerful influencer marketing network. Drive real results, 
                reach real audiences, grow real income.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-semibold glow-primary glow-primary-hover w-full sm:w-auto">
                    Apply Now
                  </Button>
                </Link>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/5 w-full sm:w-auto">
                    How it works
                  </Button>
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
                  className="glass-panel p-8 rounded-3xl text-center"
                >
                  <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
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
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all duration-500">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
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

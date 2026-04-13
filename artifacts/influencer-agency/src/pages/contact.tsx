import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Mail, Instagram, CalendarDays, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      {/* HEADER */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-5 leading-tight">
              Let's talk about your brand.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg">
              Fill in the form below or book a strategy call directly. We reply within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div
              initial="hidden" animate="show" variants={stagger}
              className="md:col-span-2 space-y-8"
            >
              {/* Book a call */}
              <motion.div variants={fadeUp} className="rounded-2xl bg-primary p-8 text-white">
                <CalendarDays className="w-8 h-8 mb-4 text-white/80" />
                <h3 className="text-xl font-display font-bold mb-2">Book a Strategy Call</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Jump on a free 30-minute call with our team. We'll audit your brand and outline a custom campaign plan.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  Book Free Call <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Contact details */}
              <motion.div variants={fadeUp} className="space-y-4">
                <a
                  href="mailto:helpteam.trendivo@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-gray-800">helpteam.trendivo@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/trendivo.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Instagram</p>
                    <p className="text-sm font-semibold text-gray-800">@trendivo.marketing</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden" animate="show" variants={stagger}
              className="md:col-span-3"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Message sent!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                      />
                    </motion.div>
                    <motion.div variants={fadeUp}>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@brand.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Brand / Company Name *</label>
                    <input
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      required
                      placeholder="Your Brand Name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your campaign *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="What are your goals? Which platforms are you targeting? What's your estimated budget?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                    />
                  </motion.div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try emailing us directly.</p>
                  )}

                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-all glow-primary-hover flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? "Sending…" : (
                        <><span>Send Message</span> <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

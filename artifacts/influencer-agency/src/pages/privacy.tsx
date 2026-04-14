import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 md:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-primary font-medium uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm mb-12">Last updated: April 14, 2025</p>

          <div className="space-y-10 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Trendivo Marketing Agency ("we", "our", or "us") is committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, and safeguard information
                you provide when you visit our website or submit an application through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">When you apply through our platform, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Full name or business name</li>
                <li>Email address</li>
                <li>Social media handles (Instagram, TikTok, YouTube)</li>
                <li>Audience and engagement metrics</li>
                <li>Content niche and pricing information</li>
                <li>Business description, website URL, and campaign goals (for brands)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information collected to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Review and process your application</li>
                <li>Match creators with brand partnerships</li>
                <li>Communicate updates about your application status</li>
                <li>Improve our services and platform</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Retention</h2>
              <p>
                We retain your application data for as long as necessary to process your application
                and fulfil any active partnerships. You may request deletion of your data at any time
                by contacting us at{" "}
                <a href="mailto:helpteam.trendivo@gmail.com" className="text-primary hover:underline">
                  helpteam.trendivo@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Cookies</h2>
              <p>
                Our website may use basic cookies or local storage for functional purposes such as
                remembering your session preferences. We do not use tracking or advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Services</h2>
              <p>
                We may use third-party services to help operate our platform (such as email delivery
                providers). These services are bound by their own privacy policies and are only
                permitted to use your data as instructed by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:trendivo.marketingima@gmail.com" className="text-primary hover:underline">
                  trendivo.marketingima@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated date. Continued use of our platform after changes constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at{" "}
                <a href="mailto:trendivo.marketingima@gmail.com" className="text-primary hover:underline">
                  trendivo.marketingima@gmail.com
                </a>{" "}
                or follow us on Instagram{" "}
                <a
                  href="https://instagram.com/trendivo.marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @trendivo.marketing
                </a>.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

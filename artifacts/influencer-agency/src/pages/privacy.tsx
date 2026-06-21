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
          <p className="text-white/50 text-sm mb-12">Last updated: June 25, 2026</p>

          <div className="space-y-10 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Trendivo AI ("we", "our", or "us") is committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, and safeguard information you provide
                when you visit our website or submit a demo request through our platform. We provide
                AI receptionist services that help local businesses answer calls, capture leads, and
                book appointments automatically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">When you submit a demo request or engage with our services, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Business name and owner name</li>
                <li>Email address and phone number</li>
                <li>Business website URL</li>
                <li>Industry type and business description</li>
                <li>Information about your current call handling processes</li>
                <li>Appointment booking systems you use</li>
                <li>Business hours and services offered</li>
                <li>Call volume and operational goals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information collected to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Review and process your demo request</li>
                <li>Build and configure your custom AI receptionist</li>
                <li>Communicate with you about your onboarding and setup</li>
                <li>Train AI voice agents on your specific business details</li>
                <li>Provide ongoing support and performance reporting</li>
                <li>Improve our AI systems and service quality</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal or business information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Call Data & AI Training</h2>
              <p>
                As part of our AI receptionist service, call recordings and transcripts may be processed
                to improve the accuracy and performance of your AI agent. This data is used solely for
                the purpose of operating and refining your receptionist and is handled with strict
                confidentiality. We do not share call data between clients.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
              <p>
                We retain your business and configuration data for as long as you are an active client
                and for a reasonable period thereafter to support continuity of service. Demo request
                data is retained for up to 12 months. You may request deletion of your data at any
                time by contacting us at{" "}
                <a href="mailto:trendivo.marketingima@gmail.com" className="text-primary hover:underline">
                  trendivo.marketingima@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
              <p>
                Our website may use basic cookies or local storage for functional purposes such as
                remembering your session preferences. We do not use tracking or advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Third-Party Services</h2>
              <p>
                We use trusted third-party services to help operate our platform, including email
                delivery providers, AI voice infrastructure, and calendar integrations. These services
                are bound by their own privacy policies and are only permitted to process your data
                as instructed by us and as necessary to deliver the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Access the personal and business information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent and discontinue service at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:trendivo.marketingima@gmail.com" className="text-primary hover:underline">
                  trendivo.marketingima@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated date. Continued use of our platform after changes constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at{" "}
                <a href="mailto:trendivo.marketingima@gmail.com" className="text-primary hover:underline">
                  trendivo.marketingima@gmail.com
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

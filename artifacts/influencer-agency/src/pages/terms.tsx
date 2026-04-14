import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-white/50 text-sm mb-12">Last updated: April 14, 2025</p>

          <div className="space-y-10 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Trendivo Marketing Agency website and services, you agree to
                be bound by these Terms of Service. If you do not agree to these terms, please do not
                use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
              <p>
                Trendivo Marketing Agency connects content creators and brands for influencer marketing
                campaigns. We facilitate introductions, manage partnerships, and coordinate campaigns
                on behalf of both parties. We do not guarantee brand deals, campaign success, or
                minimum earnings for any creator.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
              <p className="mb-3">To apply and use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Be at least 18 years of age, or have parental/guardian consent</li>
                <li>Provide accurate and truthful information in your application</li>
                <li>Have the legal right to enter into agreements</li>
                <li>Not be prohibited from receiving services under applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Creator Responsibilities</h2>
              <p className="mb-3">As a creator on our platform, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Deliver content on time and as agreed with brand partners</li>
                <li>Disclose all sponsored content in accordance with FTC guidelines and applicable regulations</li>
                <li>Maintain ownership or proper rights to all content you produce</li>
                <li>Not misrepresent your audience size, engagement rate, or demographics</li>
                <li>Comply with the terms set out in individual campaign agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Brand Responsibilities</h2>
              <p className="mb-3">As a brand on our platform, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Provide accurate information about your business, products, and campaign goals</li>
                <li>Compensate creators as agreed in campaign terms</li>
                <li>Respect creators' creative direction within agreed parameters</li>
                <li>Not use creator content beyond the agreed scope without additional compensation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Payments</h2>
              <p>
                Payment terms are agreed between parties on a per-campaign basis. Trendivo Marketing
                Agency may facilitate payment processing or act as an intermediary. Specific payment
                schedules, rates, and methods will be outlined in individual campaign agreements.
                Trendivo reserves the right to charge a commission or service fee as disclosed at the
                time of campaign setup.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All content on the Trendivo Marketing Agency website — including text, graphics,
                logos, and design — is the property of Trendivo Marketing Agency and protected by
                applicable copyright laws. Creator-produced content remains the intellectual property
                of the creator unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                Trendivo Marketing Agency is not liable for any indirect, incidental, or consequential
                damages arising from the use of our platform, including but not limited to loss of
                revenue, failed campaigns, or disputes between creators and brands. Our total liability
                in any matter is limited to the amount paid to us in fees during the relevant campaign.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to our platform at any time,
                with or without cause, if we believe you have violated these Terms or are acting in a
                manner harmful to other users or to Trendivo. You may also terminate your relationship
                with us at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Changes to Terms</h2>
              <p>
                We may update these Terms of Service at any time. Updated terms will be posted on this
                page with a revised date. Continued use of our services after any changes constitutes
                your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
              <p>
                These Terms are governed by applicable law. Any disputes arising from these Terms or
                your use of our services shall be resolved through good-faith negotiation first, and
                if necessary, through binding arbitration or courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Contact</h2>
              <p>
                For questions about these Terms, please contact us at{" "}
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

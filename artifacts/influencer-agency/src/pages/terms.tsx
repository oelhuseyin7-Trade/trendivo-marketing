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
          <p className="text-white/50 text-sm mb-12">Last updated: June 25, 2026</p>

          <div className="space-y-10 text-white/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Trendivo AI website and services, you agree to be bound by
                these Terms of Service. If you do not agree to these terms, please do not use our
                platform or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
              <p>
                Trendivo AI builds and manages custom AI voice receptionists for local service
                businesses. Our services include AI receptionist setup and configuration, 24/7
                automated call answering, appointment booking automation, missed call recovery, and
                ongoing performance reporting. We connect your phone system and booking calendar to
                an AI agent trained specifically on your business. We do not guarantee specific
                call outcomes, booking volumes, or revenue increases, though we work to optimise
                performance continuously.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
              <p className="mb-3">To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Be a registered business or sole trader with the legal right to enter agreements</li>
                <li>Provide accurate and truthful information during onboarding</li>
                <li>Have authority to authorise changes to your phone system and booking tools</li>
                <li>Not be prohibited from receiving services under applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Client Responsibilities</h2>
              <p className="mb-3">As a client of Trendivo AI, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Provide accurate business information, services, hours, and FAQs during setup</li>
                <li>Review and approve AI receptionist scripts and responses before go-live</li>
                <li>Promptly notify us of any changes to your services, hours, or booking systems</li>
                <li>Ensure your use of AI call answering complies with all applicable laws, including
                  any requirements to disclose automated call handling to your customers</li>
                <li>Not use our services for unlawful, deceptive, or harmful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. AI Disclosure</h2>
              <p>
                You acknowledge that Trendivo AI provides automated voice agent technology. Depending
                on your jurisdiction, there may be legal requirements to disclose to callers that they
                are interacting with an AI system. You are responsible for ensuring your use of our
                service complies with any such requirements in your area.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Payments & Fees</h2>
              <p>
                Service fees are agreed upon during onboarding and outlined in your service agreement.
                Fees may vary based on the scope of setup, call volume, and ongoing management
                requirements. Trendivo AI reserves the right to adjust pricing with reasonable notice.
                All fees are non-refundable unless otherwise specified in your individual agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All content on the Trendivo AI website — including text, graphics, logos, and design
                — is the property of Trendivo AI and protected by applicable copyright laws. AI
                scripts and configurations built for your business remain your property for use with
                your business. Trendivo AI retains rights to the underlying technology, systems, and
                methodologies used to deliver the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Limitation of Liability</h2>
              <p>
                Trendivo AI is not liable for any indirect, incidental, or consequential damages
                arising from the use of our platform or AI receptionist services, including but not
                limited to missed bookings, call errors, integration failures, or revenue loss. Our
                total liability in any matter is limited to the fees paid to us in the 30 days
                preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Service Availability</h2>
              <p>
                While we strive to maintain 24/7 availability of all AI receptionist services, we
                cannot guarantee uninterrupted operation. Downtime may occur due to maintenance,
                third-party infrastructure issues, or events beyond our control. We will make
                reasonable efforts to notify clients of planned maintenance in advance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Termination</h2>
              <p>
                Either party may terminate the service agreement with reasonable written notice as
                specified in your individual service agreement. Trendivo AI reserves the right to
                suspend or terminate service immediately if a client violates these Terms or uses
                the service in a manner that is unlawful or harmful.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Changes to Terms</h2>
              <p>
                We may update these Terms of Service at any time. Updated terms will be posted on
                this page with a revised date. Continued use of our services after any changes
                constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
              <p>
                These Terms are governed by applicable law. Any disputes arising from these Terms
                or your use of our services shall be resolved through good-faith negotiation first,
                and if necessary, through binding arbitration or courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Contact</h2>
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

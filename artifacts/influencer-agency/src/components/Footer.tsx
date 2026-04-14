import { Link } from "wouter";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 overflow-hidden relative">
      {/* Decorative gradient blur in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to grow?
            </h2>
            <p className="text-white/60 mb-8 max-w-sm text-lg">
              Join the most exclusive network of high-converting creators and industry-leading brands.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold group">
                Apply to Network
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/apply" className="text-white/60 hover:text-white transition-colors">Apply</Link></li>
              <li><a href="/#how-it-works" className="text-white/60 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="/#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:helpteam.trendivo@gmail.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> helpteam.trendivo@gmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/trendivo.marketing" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> @trendivo.marketing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Trendivo Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

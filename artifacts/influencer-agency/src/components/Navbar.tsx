import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
          >
            INFLUX<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-white ${location === '/' ? 'text-white' : 'text-white/60'}`}
            >
              Home
            </Link>
            <a 
              href={location === '/' ? '#how-it-works' : '/#how-it-works'} 
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              How it Works
            </a>
            <a 
              href={location === '/' ? '#faq' : '/#faq'} 
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <Link href="/apply" className="block">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 glow-primary glow-primary-hover transition-all duration-300 font-semibold"
              >
                Apply Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            <Link 
              href="/" 
              className={`text-2xl font-display font-medium ${location === '/' ? 'text-white' : 'text-white/60'}`}
            >
              Home
            </Link>
            <a 
              href={location === '/' ? '#how-it-works' : '/#how-it-works'} 
              className="text-2xl font-display font-medium text-white/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href={location === '/' ? '#faq' : '/#faq'} 
              className="text-2xl font-display font-medium text-white/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/apply" className="block w-full">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl text-lg h-14 glow-primary"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, Home, Zap, HelpCircle, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const navItems = [
  { title: "Home",         icon: Home,      url: "/" },
  { title: "Services",     icon: Building2, url: "/#services" },
  { title: "How it Works", icon: Zap,       url: "/#how-it-works" },
  { title: "FAQ",          icon: HelpCircle,url: "/#faq" },
];

export function Navbar() {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleTabChange = (index: number | null) => {
    if (index === null) return;
    const item = navItems[index];
    if (!item) return;
    if (item.url.startsWith("/#")) {
      const hash = item.url.slice(1);
      if (location === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = item.url;
      }
    } else {
      navigate(item.url);
    }
  };

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
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
          >
            TRENDIVO<span className="text-primary"> AI</span>
          </Link>

          {/* Desktop Nav — ExpandableTabs */}
          <nav className="hidden nav:flex items-center">
            <ExpandableTabs
              tabs={navItems}
              activeColor="text-primary"
              onChange={handleTabChange}
            />
          </nav>

          {/* CTA Button */}
          <div className="hidden nav:block">
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 glow-primary glow-primary-hover transition-all duration-300 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="nav:hidden text-white p-2"
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
              className={`text-2xl font-display font-medium ${location === "/" ? "text-white" : "text-white/60"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="/#services"
              className="text-2xl font-display font-medium text-white/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href={location === "/" ? "#how-it-works" : "/#how-it-works"}
              className="text-2xl font-display font-medium text-white/60"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href={location === "/" ? "#faq" : "/#faq"}
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
                  Get Free Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

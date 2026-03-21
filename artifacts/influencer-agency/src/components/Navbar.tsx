import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X, Home, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "How it Works", url: "/#how-it-works", icon: Zap },
  { name: "FAQ", url: "/#faq", icon: HelpCircle },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    const matched = navItems.find((item) => item.url === location);
    if (matched) setActiveTab(matched.name);
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
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-display font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
          >
            INFLUX<span className="text-primary">.</span>
          </Link>

          {/* Desktop Tubelight Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                const isHashLink = item.url.includes("#");

                const linkContent = (
                  <span
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors select-none",
                      "text-white/60 hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </span>
                );

                return isHashLink ? (
                  <a key={item.name} href={item.url}>
                    {linkContent}
                  </a>
                ) : (
                  <Link key={item.name} href={item.url}>
                    {linkContent}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Apply Button */}
          <div className="hidden md:block">
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 glow-primary glow-primary-hover transition-all duration-300 font-semibold">
                Apply Now
              </Button>
            </Link>
          </div>

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
              className={`text-2xl font-display font-medium ${location === "/" ? "text-white" : "text-white/60"}`}
            >
              Home
            </Link>
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

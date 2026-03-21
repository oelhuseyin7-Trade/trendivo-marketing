import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h1 className="text-[150px] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-white/60 mb-10 max-w-md">
          The link you followed may be broken, or the page may have been removed.
        </p>
        <Link href="/">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 font-semibold">
            Return Home
          </Button>
        </Link>
      </main>
    </div>
  );
}

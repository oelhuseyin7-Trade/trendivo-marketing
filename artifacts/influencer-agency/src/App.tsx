import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import Apply from "@/pages/apply";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Trendivo AI — AI Automation & Voice Systems",
    description:
      "Trendivo AI builds high-quality AI receptionists and voice systems that help local businesses answer calls, capture leads, and book appointments.",
  },
  "/apply": {
    title: "Get Your Free AI Receptionist Demo — Trendivo AI",
    description:
      "Tell Trendivo AI about your business and see how a custom AI receptionist can answer calls, capture leads, and book appointments automatically.",
  },
  "/privacy": {
    title: "Privacy Policy — Trendivo AI",
    description: "Read the Trendivo AI privacy policy for our AI receptionist and voice automation services.",
  },
  "/terms": {
    title: "Terms of Service — Trendivo AI",
    description: "Read the Trendivo AI terms of service for AI receptionist and voice automation services.",
  },
};

function PageMetadata() {
  const [location] = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[location] ?? {
      title: "Trendivo AI — AI Automation & Voice Systems",
      description:
        "Trendivo AI builds AI automation and voice systems for local businesses. Founded by Omar Scales.",
    };

    document.title = metadata.title;

    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = content;
    };

    updateMeta('meta[name="description"]', metadata.description);
    updateMeta('meta[property="og:title"]', metadata.title);
    updateMeta('meta[property="og:description"]', metadata.description);
    updateMeta('meta[name="twitter:title"]', metadata.title);
    updateMeta('meta[name="twitter:description"]', metadata.description);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <PageMetadata />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/apply" component={Apply} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

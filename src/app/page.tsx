"use client";

import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { KitchenTypesSection } from "@/components/sections/KitchenTypesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <HowItWorksSection />
        <KitchenTypesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

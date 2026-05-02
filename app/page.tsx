"use client";

import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ClientsSlider } from "@/components/home/clients-slider";
import { FeaturesSection } from "@/components/home/features-section";
import { PlansPreview } from "@/components/home/plans-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientsSlider />
      <FeaturesSection />
      <PlansPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

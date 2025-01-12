import BenefitsSection from "@/components/design/BenifitsSection";
import CTASection from "@/components/design/CTAsection";
import FeatureSection from "@/components/design/FeatureSection";
import FeaturesList from "@/components/design/FeatureList";
import Footer from "@/components/design/Footer";
import HeroSection from "@/components/design/HeroSection";
import Navbar from "@/components/design/Navbar";
import PricingSection from "@/components/design/PriceSection";
import StatsSection from "@/components/design/StatsSection";
import TestimonialSection from "@/components/design/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <FeaturesList />
    <BenefitsSection />
    <CTASection />
    <TestimonialSection />
    <StatsSection />
    <PricingSection />
    <Footer />
  </main>
  );
}

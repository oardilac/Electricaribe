import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { AboutSection } from "@/components/about-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DeviceDemo } from "@/components/device-demo";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta-section";
import { constructMetadata } from "@/lib/utils";
import { BlogSection } from "@/components/blog-section";

export const metadata = constructMetadata({});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32 py-20">
          <FeatureSection />
          <AboutSection />
          <HowItWorksSection />
          <DeviceDemo />
          <BlogSection />
          <TestimonialSection />
          <CTASection />
        </div>
      </main>
      <footer className="bg-gray-800 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Electricaribe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

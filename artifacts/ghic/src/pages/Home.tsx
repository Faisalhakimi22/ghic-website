import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { LiveDemo } from '@/components/sections/LiveDemo';
import { Features } from '@/components/sections/Features';
import { AIIntelligence } from '@/components/sections/AIIntelligence';
import { DashboardShowcase } from '@/components/sections/DashboardShowcase';
import { Integrations } from '@/components/sections/Integrations';
import { Security } from '@/components/sections/Security';
import { DeveloperExperience } from '@/components/sections/DeveloperExperience';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTABanner } from '@/components/sections/CTABanner';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <LiveDemo />
        <Features />
        <AIIntelligence />
        <DashboardShowcase />
        <Integrations />
        <Security />
        <DeveloperExperience />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

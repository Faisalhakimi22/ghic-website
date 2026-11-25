import { PageShell } from '@/components/PageShell';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { CTABanner } from '@/components/sections/CTABanner';

/**
 * Standalone /pricing.
 *
 * Reuses the landing page's own Pricing and FAQ sections rather than
 * duplicating the plan table. Two copies of a price list drift, and the
 * one that drifts is always the one nobody remembered to update.
 */
export default function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title="SIMPLE, PREDICTABLE PRICING."
      intro="GHIC is free during the beta. Paid plans with higher limits are coming; join the waitlist and we will tell you when they open."
    >
      <Pricing />
      <FAQ />
      <CTABanner />
    </PageShell>
  );
}

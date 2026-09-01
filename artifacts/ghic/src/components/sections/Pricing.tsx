import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { planEnquiryMailto } from '@/lib/links';
import { DASHBOARD_URL } from '@/lib/firebase';
import { useHubConnection } from '@/lib/hub-connection';

const GRAY = '#C9C9C9';

/**
 * `action` decides where the button goes, and it has to match the price
 * above it. Starter is genuinely free and self-serve, so it installs
 * straight away. Pro and Enterprise cost money and there is no checkout on
 * this site, so they open a request instead — a paid tier whose button
 * silently performs the free install is the inconsistency this fixes.
 *
 * `note` states how the paid tiers are actually purchased, so nobody
 * presses the button expecting a card form.
 */
const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Perfect for open source maintainers and solo engineers.',
    features: ['1 repository', '500 issues/month', 'AI Classification', 'Basic Dashboard', 'Community support'],
    cta: 'Install Free',
    action: 'install' as const,
    note: 'Installs on GitHub instantly. No card required.',
    black: false,
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    desc: 'For professional engineering teams shipping fast.',
    features: ['10 repositories', '10,000 issues/month', 'All AI features', 'Priority Prediction', 'Duplicate Detection', 'Analytics Dashboard', 'Email support'],
    cta: 'Request Pro Access',
    action: 'contact' as const,
    note: 'Billing is arranged by email — we reply within one business day.',
    black: true,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For organizations with custom requirements and scale.',
    features: ['Unlimited repositories', 'Unlimited issues', 'Custom AI models', 'SSO & RBAC', 'SLA guarantee', 'Dedicated support'],
    cta: 'Contact Sales',
    action: 'contact' as const,
    note: 'Tell us your scale and requirements and we will scope it.',
    black: false,
    popular: false,
  },
];

const HalfCircle = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 12">
    <path d="M0 12 A12 12 0 0 1 24 12 Z" fill={color} />
  </svg>
);

export function Pricing() {
  // Signed in, not necessarily installed. A visitor with an account but
  // no GitHub App yet is still someone for whom "Get Started" is the
  // wrong offer -- their next step is the hub, not another signup.
  const { signedIn } = useHubConnection();

  return (
    <section id="pricing" className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            Pricing
            <span className="inline-block w-8 h-[3px] bg-black" />
          </p>
          <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
            SET YOUR{' '}
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
              <span className="relative text-white px-1">COMMAND LEVEL.</span>
            </span>
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
            Start free. Scale as you grow. Cancel any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 relative overflow-hidden ${plan.popular ? 'md:-translate-y-2' : ''}`}
              style={{
                border: '3px solid #000',
                boxShadow: plan.black ? `8px 8px 0 ${GRAY}` : '8px 8px 0 #000',
                background: plan.black ? '#000' : '#fff',
                color: plan.black ? '#fff' : '#000',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] bg-black text-white whitespace-nowrap"
                  style={{ border: '2px solid #000' }}
                >
                  Most Popular
                </div>
              )}
              {plan.black && (
                <HalfCircle className="absolute top-0 right-12 w-16 h-8 rotate-180 opacity-20" color="#fff" />
              )}

              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: plan.black ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>
                {plan.name}
              </p>
              <div className="mb-1 flex items-end gap-1">
                <span className="text-5xl" style={{ fontFamily: "'Archivo Black', sans-serif" }}>{plan.price}</span>
                {plan.period && <span className="text-lg font-semibold mb-2" style={{ color: plan.black ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>{plan.period}</span>}
              </div>
              <p className="text-sm mb-6 pb-6" style={{ color: plan.black ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', borderBottom: `2px solid ${plan.black ? 'rgba(255,255,255,0.12)' : '#000'}` }}>
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-semibold">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                      style={{ border: `2px solid ${plan.black ? '#fff' : '#000'}`, background: plan.black ? '#fff' : '#000' }}>
                      <Check className="w-3 h-3" style={{ color: plan.black ? '#000' : '#fff' }} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={
                  plan.action === 'install'
                    ? DASHBOARD_URL
                    : planEnquiryMailto(plan.name, plan.price, plan.period)
                }
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all wobble card-t block text-center no-underline"
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  border: `3px solid ${plan.black ? '#fff' : '#000'}`,
                  boxShadow: plan.black ? '5px 5px 0 rgba(255,255,255,0.2)' : '5px 5px 0 #000',
                  background: plan.black ? '#fff' : '#000',
                  color: plan.black ? '#000' : '#fff',
                }}
              >
                {plan.action === 'install' && signedIn ? 'Dashboard' : plan.cta}
              </a>

              <p
                className="mt-3 text-xs leading-relaxed text-center"
                style={{ color: plan.black ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)' }}
              >
                {plan.note}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-black/40">
          Starter is free forever · Paid plans arranged by email · No credit card to get started
        </p>
      </div>
    </section>
  );
}

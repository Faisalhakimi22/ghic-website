import { useState } from 'react';
import { Check, Minus, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PLANS = [
  {
    id: 'hobby',
    name: 'Hobby',
    tagline: 'For side projects and experiments',
    monthly: 0,
    annual: 0,
    cta: 'Start for free',
    ctaStyle: 'outline',
    features: [
      'Up to 3 projects',
      '100K edge requests / mo',
      '1 GB bandwidth',
      'Community support',
      'Preview deployments',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For teams shipping to production',
    monthly: 24,
    annual: 20,
    cta: 'Start 14-day trial',
    ctaStyle: 'solid',
    highlight: true,
    features: [
      'Unlimited projects',
      '10M edge requests / mo',
      '1 TB bandwidth',
      'Concurrent builds ×12',
      'Preview comments & analytics',
      'Email support, 24h SLA',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For organizations at scale',
    monthly: null,
    annual: null,
    cta: 'Contact sales',
    ctaStyle: 'outline',
    features: [
      'Custom edge request limits',
      'Dedicated isolated infrastructure',
      'SAML SSO & SCIM provisioning',
      '99.99% uptime SLA',
      'Audit logs & data residency',
      'Dedicated success engineer',
    ],
  },
];

const COMPARISON = [
  {
    section: 'Platform',
    rows: [
      { label: 'Projects', values: ['3', 'Unlimited', 'Unlimited'] },
      { label: 'Team members', values: ['1', 'Up to 25', 'Custom'] },
      { label: 'Edge requests', values: ['100K / mo', '10M / mo', 'Custom'] },
      { label: 'Bandwidth', values: ['1 GB', '1 TB', 'Custom'] },
      { label: 'Build concurrency', values: ['1', '12', 'Custom'] },
    ],
  },
  {
    section: 'Workflow',
    rows: [
      { label: 'Preview deployments', values: [true, true, true] },
      { label: 'Preview comments', values: [false, true, true] },
      { label: 'Web analytics', values: [false, true, true] },
      { label: 'Protected environments', values: [false, true, true] },
      { label: 'Deployment rollbacks', values: ['Instant', 'Instant', 'Instant'] },
    ],
  },
  {
    section: 'Security & support',
    rows: [
      { label: 'SAML SSO', values: [false, false, true] },
      { label: 'SCIM provisioning', values: [false, false, true] },
      { label: 'Audit logs', values: [false, '30 days', 'Unlimited'] },
      { label: 'Uptime SLA', values: [false, false, '99.99%'] },
      { label: 'Support', values: ['Community', 'Email · 24h', 'Dedicated engineer'] },
    ],
  },
];

const FAQS = [
  {
    q: 'How are edge requests counted?',
    a: 'Every request served by the Meridian edge network counts once, regardless of cache status. Static asset requests under 10 KB are free on all plans, and we never bill for bot or health-check traffic we can identify.',
  },
  {
    q: 'Can I change plans at any time?',
    a: 'Yes. Upgrades take effect immediately and we prorate the difference. Downgrades apply at the start of your next billing cycle so you never lose capacity mid-month.',
  },
  {
    q: 'What happens if I exceed my plan limits?',
    a: 'We never hard-stop production traffic. On Hobby, previews pause until the next cycle. On Pro, overages are billed at $0.40 per additional 100K requests — and we email you well before that happens.',
  },
  {
    q: 'Do you offer discounts for startups or open source?',
    a: 'Open-source projects get Pro for free, no strings attached. Startups under two years old with less than $5M raised get 50% off Pro for the first year — apply from your dashboard.',
  },
  {
    q: 'Is there a self-hosted option?',
    a: 'Enterprise customers can deploy the Meridian control plane into their own cloud (AWS, GCP, or Azure) with our managed operator. The edge network remains globally distributed either way.',
  },
];

function Cell({ value }) {
  if (value === true) return <Check size={15} strokeWidth={2.5} className="text-[#7c8aff] mx-auto" />;
  if (value === false) return <Minus size={15} className="text-zinc-700 mx-auto" />;
  return <span className="text-[13px] text-zinc-300">{value}</span>;
}

export default function App() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        ::selection { background: rgba(124,138,255,0.3); }
        body { background: #08080a; }
        .hero-glow {
          background: radial-gradient(ellipse 60% 50% at 50% -10%, rgba(124,138,255,0.13), transparent 70%);
        }
        .grid-lines {
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }
        .card-highlight {
          background: linear-gradient(180deg, rgba(124,138,255,0.07), rgba(124,138,255,0.015) 40%, transparent);
          box-shadow: inset 0 1px 0 rgba(124,138,255,0.25), 0 0 60px -20px rgba(124,138,255,0.25);
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .fade-edge { mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
      `}} />

      {/* Nav */}
      <header className="border-b border-white/[0.06] sticky top-0 z-40 bg-[#08080a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-[#aab4ff] to-[#5b6cf0] rotate-45" />
              <span className="text-[15px] font-semibold tracking-tight">Meridian</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-[13px] text-zinc-500">
              {['Product', 'Docs', 'Customers', 'Changelog'].map((n) => (
                <a key={n} href="#" className="hover:text-zinc-200 transition-colors">{n}</a>
              ))}
              <a href="#" className="text-zinc-100">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[13px] text-zinc-400 hover:text-zinc-100 transition-colors">Sign in</a>
            <a href="#" className="text-[13px] font-medium bg-white text-black px-3.5 py-1.5 rounded-md hover:bg-zinc-200 transition-colors">Get started</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute inset-0 grid-lines pointer-events-none" />

        <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 text-[12px] text-zinc-400 border border-white/[0.08] bg-white/[0.03] rounded-full px-3 py-1 mb-7">
              <Sparkles size={12} className="text-[#9aa6ff]" />
              Now with usage-based edge pricing
            </div>
            <h1 className="text-[44px] md:text-[56px] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
              Pricing that scales<br />
              <span className="text-zinc-500">when you do.</span>
            </h1>
            <p className="mt-5 text-[15px] text-zinc-400 max-w-md mx-auto leading-relaxed">
              Start deploying in seconds, free forever. Upgrade when your traffic — not your curiosity — demands it.
            </p>

            {/* Toggle */}
            <div className="mt-9 inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
              {['Monthly', 'Annual'].map((label, i) => {
                const active = annual === (i === 1);
                return (
                  <button
                    key={label}
                    onClick={() => setAnnual(i === 1)}
                    className={`relative px-4 py-1.5 text-[13px] rounded-full transition-colors ${active ? 'text-black' : 'text-zinc-400 hover:text-zinc-200'}`}
                  >
                    {active && (
                      <motion.span layoutId="toggle" className="absolute inset-0 bg-white rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                    )}
                    <span className="relative z-10 font-medium">
                      {label}{i === 1 && <span className={`ml-1.5 text-[11px] ${active ? 'text-zinc-600' : 'text-[#9aa6ff]'}`}>−17%</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Cards */}
        <section className="relative max-w-6xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden border border-white/[0.07]">
            {PLANS.map((plan, i) => {
              const price = annual ? plan.annual : plan.monthly;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className={`relative bg-[#0c0c0f] p-8 flex flex-col ${plan.highlight ? 'card-highlight' : ''}`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c8aff] to-transparent" />
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="mono text-[10px] uppercase tracking-[0.12em] text-[#9aa6ff] border border-[#7c8aff]/30 bg-[#7c8aff]/10 rounded-full px-2.5 py-0.5">Popular</span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[13px] text-zinc-500">{plan.tagline}</p>

                  <div className="mt-7 flex items-baseline gap-1.5 h-12">
                    {price === null ? (
                      <span className="text-[32px] font-semibold tracking-tight">Custom</span>
                    ) : (
                      <>
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="text-[36px] font-semibold tracking-tight"
                          >
                            ${price}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-[13px] text-zinc-500">/ user / mo{annual && price > 0 ? ', billed annually' : ''}</span>
                      </>
                    )}
                  </div>

                  <a
                    href="#"
                    className={`mt-6 group inline-flex items-center justify-center gap-1.5 h-9 rounded-lg text-[13px] font-medium transition-all ${
                      plan.ctaStyle === 'solid'
                        ? 'bg-white text-black hover:bg-zinc-200'
                        : 'border border-white/[0.12] text-zinc-200 hover:border-white/[0.3] hover:bg-white/[0.04]'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <p className="mono text-[10px] uppercase tracking-[0.14em] text-zinc-600 mb-4">
                      {i === 0 ? 'Includes' : `Everything in ${PLANS[i - 1].name}, plus`}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
                          <Check size={14} strokeWidth={2.5} className="mt-0.5 text-[#7c8aff] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trusted by */}
          <div className="mt-14 fade-edge">
            <p className="text-center text-[11px] mono uppercase tracking-[0.18em] text-zinc-600 mb-6">Trusted by teams at</p>
            <div className="flex items-center justify-center gap-x-10 gap-y-4 flex-wrap text-zinc-600 text-[15px] font-semibold tracking-tight">
              {['Ramp', 'Loom', 'Mercury', 'Retool', 'PlanetScale', 'Cal.com'].map((c) => (
                <span key={c} className="hover:text-zinc-400 transition-colors cursor-default">{c}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Comparison table */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[26px] font-semibold tracking-[-0.02em]">Compare plans</h2>
            <p className="mt-1.5 text-[14px] text-zinc-500">Everything in detail. No fine print, no surprises.</p>
          </div>
        </div>

        <div className="border border-white/[0.07] rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-white/[0.025] border-b border-white/[0.07] px-6 py-4">
            <div />
            {PLANS.map((p) => (
              <div key={p.id} className="text-center">
                <span className={`text-[13px] font-semibold ${p.highlight ? 'text-[#9aa6ff]' : 'text-zinc-200'}`}>{p.name}</span>
              </div>
            ))}
          </div>

          {COMPARISON.map((group) => (
            <div key={group.section}>
              <div className="px-6 py-3 bg-white/[0.015] border-b border-white/[0.05]">
                <span className="mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{group.section}</span>
              </div>
              {group.rows.map((row, ri) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] px-6 py-3.5 items-center hover:bg-white/[0.02] transition-colors ${ri !== group.rows.length - 1 ? 'border-b border-white/[0.04]' : 'border-b border-white/[0.05]'}`}
                >
                  <span className="text-[13px] text-zinc-400">{row.label}</span>
                  {row.values.map((v, vi) => (
                    <div key={vi} className="text-center">
                      <Cell value={v} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12">
          <div>
            <h2 className="text-[26px] font-semibold tracking-[-0.02em]">Questions,<br />answered.</h2>
            <p className="mt-3 text-[14px] text-zinc-500 leading-relaxed">
              Can't find what you're looking for? Our team responds within a few hours.
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-[#9aa6ff] hover:text-[#bcc4ff] transition-colors group">
              Talk to support <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {FAQS.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className={`text-[14px] font-medium transition-colors ${open ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>{faq.q}</span>
                    <ChevronDown size={16} className={`shrink-0 text-zinc-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[13.5px] leading-relaxed text-zinc-500 max-w-xl">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none rotate-180" />
          <h2 className="relative text-[30px] font-semibold tracking-[-0.02em]">Deploy your first project tonight.</h2>
          <p className="relative mt-3 text-[14px] text-zinc-500">Free forever for hobby projects. No credit card required.</p>
          <div className="relative mt-7 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-1.5 h-10 px-5 rounded-lg bg-white text-black text-[13px] font-medium hover:bg-zinc-200 transition-colors">
              Start deploying <ArrowRight size={14} />
            </a>
            <a href="#" className="inline-flex items-center h-10 px-5 rounded-lg border border-white/[0.12] text-[13px] text-zinc-200 hover:bg-white/[0.04] transition-colors">
              Read the docs
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-[12px] text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-[3px] bg-zinc-700 rotate-45" />
            <span>© 2025 Meridian Systems, Inc.</span>
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Status', 'Security'].map((l) => (
              <a key={l} href="#" className="hover:text-zinc-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
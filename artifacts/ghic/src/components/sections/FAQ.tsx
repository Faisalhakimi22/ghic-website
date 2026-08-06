import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const GRAY = '#C9C9C9';

const faqs = [
  { q: 'How does GHIC access my repositories?',    a: 'Via GitHub App with minimal required permissions. You control exactly which repositories GHIC can see.' },
  { q: 'Does GHIC read my code?',                  a: 'By default, no — GHIC reads issue titles, descriptions, labels, and comments only. Optional repository analysis can be switched on per installation; when it is, credential files are skipped and token-shaped values are redacted before anything is stored.' },
  { q: 'How accurate is the AI classification?',   a: 'On a held-out test set of 1,177 issues, the classifier reaches 82% precision at 54% recall. In plain terms: when it flags something as an actionable bug it is right about four times in five, and it catches roughly half of them. It is a ranking aid, not a replacement for triage — the full evaluation method and numbers are published in the model card.' },
  { q: 'How long does it take to set up?',         a: 'Under 60 seconds. Install the GitHub App, select your repositories, and GHIC starts processing newly opened issues immediately.' },
  { q: 'Can I use GHIC with private repositories?',a: 'Yes. Traffic is encrypted in transit and our hosting and database providers encrypt at rest. Private repositories are fully supported.' },
  { q: 'What happens if the AI makes a wrong prediction?', a: 'Every prediction carries a confidence score and states the evidence behind it, and GHIC never labels, closes, or assigns anything on its own — a maintainer decides. Corrections are not fed back automatically; the model is retrained deliberately, against a fixed evaluation, rather than drifting from individual overrides.' },
  { q: 'Is there an API for custom integrations?', a: 'Yes — a REST API with an OpenAPI spec covering predictions, stats, and repository analytics. There is no published SDK yet; the API is plain HTTP and token-authenticated.' },
  { q: "What's your SLA for enterprise customers?", a: 'Enterprise agreements can include an uptime commitment, dedicated support, and custom escalation paths. These are scoped and agreed with you in writing rather than fixed in advance.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            FAQ
            <span className="inline-block w-8 h-[3px] bg-black" />
          </p>
          <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
            COMMON{' '}
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
              <span className="relative text-white px-1">QUESTIONS.</span>
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  border: '3px solid #000',
                  boxShadow: isOpen ? `6px 6px 0 #000` : `6px 6px 0 ${GRAY}`,
                  background: isOpen ? '#000' : '#fff',
                  color: isOpen ? '#fff' : '#000',
                  transition: 'all 0.2s ease',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-sm uppercase tracking-wide leading-snug"
                    style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '13px' }}>
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{ border: `2px solid ${isOpen ? '#fff' : '#000'}`, background: isOpen ? '#fff' : '#000' }}
                  >
                    {isOpen
                      ? <Minus className="w-4 h-4 text-black" strokeWidth={3} />
                      : <Plus className="w-4 h-4 text-white" strokeWidth={3} />
                    }
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '12px' }}>
                      <p className="text-sm leading-relaxed text-white/70 font-medium">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

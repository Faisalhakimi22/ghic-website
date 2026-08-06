import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const GRAY = '#C9C9C9';

const faqs = [
  { q: 'How does GHIC access my repositories?',    a: 'Via GitHub App with minimal required permissions. You control exactly which repositories GHIC can see.' },
  { q: 'Does GHIC read my code?',                  a: 'No. GHIC only reads issue titles, descriptions, labels, and comments — never source code files or diffs.' },
  { q: 'How accurate is the AI classification?',   a: 'Average classification accuracy of 94.2% across our benchmark dataset of 500,000 real-world GitHub issues.' },
  { q: 'How long does it take to set up?',         a: 'Under 60 seconds. Install the GitHub App, select your repositories, and GHIC starts processing immediately.' },
  { q: 'Can I use GHIC with private repositories?',a: 'Yes. All data is encrypted in transit and at rest. Private repositories are fully supported.' },
  { q: 'What happens if the AI makes a wrong prediction?', a: 'Every prediction includes a confidence score. You can override any decision, and GHIC learns from corrections.' },
  { q: 'Is there an API for custom integrations?', a: 'Yes. Full REST API with OpenAPI spec, webhook events, and TypeScript SDK available.' },
  { q: "What's your SLA for enterprise customers?", a: 'Enterprise plans include 99.9% uptime SLA with dedicated support and custom escalation paths.' },
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

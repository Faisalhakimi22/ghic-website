import { motion } from 'framer-motion';
import { FileText, Cpu, GitBranch, Target, Zap, Database } from 'lucide-react';

const GRAY = '#C9C9C9';

const pipelineSteps = [
  { icon: FileText,  label: 'Issue Ingestion',  desc: 'Raw issue created on GitHub — title, body, labels, author, and linked PRs captured instantly.' },
  { icon: Cpu,       label: 'Understanding',     desc: 'LLM parses text, embedded code snippets, stack traces, and linked issue context.' },
  { icon: GitBranch, label: 'Reasoning',         desc: 'Checks past PRs, closed issues, and repository history for similar patterns.' },
  { icon: Target,    label: 'Prediction',        desc: 'Assigns priority, labels, component owners, and estimated engineering effort.' },
  { icon: Zap,       label: 'Automation',        desc: 'Triggers configured webhooks, updates GitHub labels, and posts inline reasoning.' },
  { icon: Database,  label: 'Knowledge',         desc: 'Stores patterns and team corrections to improve future accuracy continuously.' },
];

export function AIIntelligence() {
  return (
    <section className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            The Engine
          </p>
          <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
            THE CHAIN OF{' '}
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
              <span className="relative text-white px-1">INTELLIGENCE.</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Steps list */}
          <div className="space-y-4">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              const isBlack = i % 3 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4 items-start p-4"
                  style={{
                    border: '3px solid #000',
                    boxShadow: isBlack ? `5px 5px 0 ${GRAY}` : '5px 5px 0 #000',
                    background: isBlack ? '#000' : '#fff',
                    color: isBlack ? '#fff' : '#000',
                  }}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 text-sm flex-shrink-0"
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      border: '2px solid currentColor',
                      background: isBlack ? '#fff' : '#000',
                      color: isBlack ? '#000' : '#fff',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-bold uppercase tracking-wide text-sm mb-1"
                      style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                      {step.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: isBlack ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: accuracy callout */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 p-8 relative overflow-hidden"
              style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000', background: '#000', color: '#fff' }}>
              <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-10"
                style={{ backgroundImage: 'radial-gradient(#fff 2.4px, transparent 2.4px)', backgroundSize: '22px 22px' }} />
              {/* Real numbers from the published model card. The previous
                  version claimed 94.2% accuracy over 500,000 issues across
                  847 repositories, "audited quarterly" — none of which
                  happened. The honest figure is a stronger claim to a
                  technical buyer anyway, because it names the metric and
                  can be checked. */}
              <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 text-white/60">Measured, not claimed</p>
              <p className="text-[5rem] leading-none" style={{ fontFamily: "'Archivo Black', sans-serif" }}>82%</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/60">
                precision on a held-out test set
              </p>
              <div className="mt-8 pt-6" style={{ borderTop: '2px solid rgba(255,255,255,0.15)' }}>
                <p className="text-xs font-mono text-white/50 leading-relaxed">
                  1,177 unseen issues · 82% precision at 54% recall ·
                  walk-forward validation, single look at the test set ·
                  full method and numbers in the public model card.
                </p>
              </div>
            </div>

            <div className="p-6" style={{ border: '3px solid #000', boxShadow: `8px 8px 0 ${GRAY}`, background: GRAY }}>
              <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4">Override Friendly</p>
              <p className="text-sm font-semibold leading-relaxed text-black/70">
                Every GHIC decision includes a confidence score and full reasoning trace. 
                Your team can override any classification — and GHIC learns from every correction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

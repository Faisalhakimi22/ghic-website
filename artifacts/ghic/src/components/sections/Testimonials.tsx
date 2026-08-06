import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const GRAY = '#C9C9C9';

const Squiggle = ({ className = '', stroke = '#000', width = 6 }) => (
  <svg className={className} viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
    <path d="M0 20 Q 12.5 0, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20"
      stroke={stroke} strokeWidth={width} strokeLinecap="round" />
  </svg>
);

const testimonials = [
  {
    quote: 'We went from 6-hour average triage time to under 15 minutes. GHIC doesn\'t just save time — it makes our entire team smarter about what matters.',
    author: 'Sarah Chen',
    title: 'VP Engineering',
    company: 'Cascade Systems',
    black: true,
  },
  {
    quote: 'The duplicate detection alone saved us from merging 3 conflicting bug fixes in the same sprint. The ROI was immediate.',
    author: 'Marcus Webb',
    title: 'Lead Engineer',
    company: 'Finflow Technologies',
    black: false,
  },
  {
    quote: 'I was skeptical about AI in our engineering workflow. GHIC\'s explainable AI decisions changed my mind completely. We trust it.',
    author: 'Priya Sharma',
    title: 'CTO',
    company: 'Lattice Labs',
    black: false,
  },
  {
    quote: 'We process 2,000+ issues a month across 15 repositories. GHIC handles it without breaking a sweat.',
    author: 'James O\'Brien',
    title: 'Platform Engineering Lead',
    company: 'Orbit Commerce',
    black: true,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            What Teams Say
            <span className="inline-block w-8 h-[3px] bg-black" />
          </p>
          <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
            TRUSTED BY{' '}
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
              <span className="relative text-white px-1">ENGINEERING TEAMS.</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 md:p-8 relative overflow-hidden"
              style={{
                border: '3px solid #000',
                boxShadow: t.black ? `8px 8px 0 ${GRAY}` : '8px 8px 0 #000',
                background: t.black ? '#000' : '#fff',
                color: t.black ? '#fff' : '#000',
              }}
            >
              {t.black && (
                <div className="absolute inset-x-0 top-0 h-2"
                  style={{ background: 'repeating-linear-gradient(45deg, #fff 0 6px, transparent 6px 12px)' }} />
              )}
              <Quote
                className="w-9 h-9 mb-5"
                fill={t.black ? '#fff' : '#000'}
                strokeWidth={0}
              />
              <p className="text-lg md:text-xl leading-snug font-bold mb-5"
                style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.01em' }}>
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest">{t.author}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                    style={{ color: t.black ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}>
                    {t.title} · {t.company}
                  </p>
                </div>
                <Squiggle className="w-20 h-5 opacity-30" stroke={t.black ? '#fff' : GRAY} width={7} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

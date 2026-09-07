import { motion } from 'framer-motion';
import {
  FileSearch,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';

const GRAY = '#C9C9C9';

type ProductValue = {
  icon: LucideIcon;
  title: string;
  detail: string;
  black: boolean;
};

const values: ProductValue[] = [
  {
    icon: FileSearch,
    title: 'Repository evidence',
    detail:
      'Relevant files and functions are shown when retrieval has enough evidence. Operational failures and low confidence are disclosed.',
    black: true,
  },
  {
    icon: MessageSquareText,
    title: 'A useful recommendation',
    detail:
      'Each completed analysis brings classification, priority, reasoning, missing information, and a next step into one maintainer-facing result.',
    black: false,
  },
  {
    icon: ShieldCheck,
    title: 'Workspace boundaries',
    detail:
      'Installation, repository, issue history, state, vectors, and ledger queries are scoped to the authenticated workspace.',
    black: false,
  },
  {
    icon: UserCheck,
    title: 'Human decision',
    detail:
      'GHIC supplies evidence and a recommendation. It does not merge code or replace the maintainer who decides what happens next.',
    black: true,
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      style={{
        borderTop: '3px solid #000',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            What You Can Verify
            <span className="inline-block w-8 h-[3px] bg-black" />
          </p>
          <h2
            className="text-[2rem] md:text-[3.5rem] leading-[0.95]"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            EVIDENCE BEFORE{' '}
            <span className="relative inline-block">
              <span
                className="absolute -inset-x-1 inset-y-0.5 bg-black"
                aria-hidden
              />
              <span className="relative text-white px-1">AUTOMATION.</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 md:p-8 relative overflow-hidden"
                style={{
                  border: '3px solid #000',
                  boxShadow: value.black
                    ? `8px 8px 0 ${GRAY}`
                    : '8px 8px 0 #000',
                  background: value.black ? '#000' : '#fff',
                  color: value.black ? '#fff' : '#000',
                }}
              >
                {value.black && (
                  <div
                    className="absolute inset-x-0 top-0 h-2"
                    style={{
                      background:
                        'repeating-linear-gradient(45deg, #fff 0 6px, transparent 6px 12px)',
                    }}
                  />
                )}
                <Icon className="w-9 h-9 mb-5" strokeWidth={2.25} />
                <h3
                  className="text-lg md:text-xl leading-snug font-bold mb-3 uppercase"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: value.black
                      ? 'rgba(255,255,255,0.65)'
                      : 'rgba(0,0,0,0.6)',
                  }}
                >
                  {value.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

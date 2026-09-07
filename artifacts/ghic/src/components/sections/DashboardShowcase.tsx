import { motion } from 'framer-motion';
import { Clock, Copy, Target, Zap, Activity } from 'lucide-react';

const GRAY = '#C9C9C9';

const Triangle = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2 L23 22 H1 Z" fill={color} />
  </svg>
);

const metrics = [
  { label: 'Issue analysis',       value: 'Complete', detail: 'Classification and risk', icon: Activity },
  { label: 'Repository evidence',  value: 'Found',    detail: 'File and function', icon: Target },
  { label: 'Duplicate candidate',  value: 'Review',   detail: 'Maintainer confirmation', icon: Copy },
  { label: 'Recommended action',   value: 'Ready',    detail: 'One concrete next step', icon: Clock },
];

const recentActivity = [
  { issue: 'Example #1247 – API returns 500 on token refresh', label: 'P1 · Critical' },
  { issue: 'Example #1246 – Dark mode flicker on Safari', label: 'P3 · Low' },
  { issue: 'Example #1245 – Possible duplicate of #1201', label: 'Review' },
  { issue: 'Example #1244 – Rate limiter missing for search', label: 'P2 · Medium' },
  { issue: 'Example #1243 – Webhook retry logic broken', label: 'P1 · Critical' },
];

export function DashboardShowcase() {
  return (
    <section className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              Illustrative dashboard preview
            </p>
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
              YOUR COMMAND{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
                <span className="relative text-white px-1">CENTER.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            An example of how a completed analysis is presented. These values are illustrative, not customer activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Metric tiles */}
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const isBlack = i === 0 || i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="md:col-span-3 p-6 relative overflow-hidden card-t wobble"
                style={{
                  border: '3px solid #000',
                  boxShadow: isBlack ? `8px 8px 0 ${GRAY}` : '8px 8px 0 #000',
                  background: isBlack ? '#000' : '#fff',
                  color: isBlack ? '#fff' : '#000',
                }}
              >
                {isBlack && (
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#fff 2.4px, transparent 2.4px)', backgroundSize: '22px 22px' }} />
                )}
                <Icon className="w-6 h-6 mb-4" strokeWidth={2.5} />
                <p className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: isBlack ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                  {m.label}
                </p>
                <p className="text-2xl md:text-3xl break-words" style={{ fontFamily: "'Archivo Black', sans-serif" }}>{m.value}</p>
                <p className="text-xs font-bold mt-2">{m.detail}</p>
              </motion.div>
            );
          })}

          {/* Activity feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 p-7 relative"
            style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000', background: '#fff' }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-5">Example activity</p>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 justify-between"
                  style={{ border: '2px solid #000', background: i === 0 ? '#000' : '#fff', color: i === 0 ? '#fff' : '#000' }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Zap className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-xs font-semibold truncate">{item.issue}</span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1"
                      style={{
                        border: `2px solid ${i === 0 ? '#fff' : '#000'}`,
                        background: item.label.includes('P1') ? (i === 0 ? '#fff' : '#000') : 'transparent',
                        color: item.label.includes('P1') ? (i === 0 ? '#000' : '#fff') : 'inherit',
                      }}
                    >
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: i === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>Sample</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-5 p-7 relative overflow-hidden"
            style={{ border: '3px solid #000', boxShadow: `8px 8px 0 ${GRAY}`, background: GRAY }}
          >
            <Triangle className="absolute -bottom-4 -right-4 w-24 h-24 rotate-12 opacity-15" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-5">Example evidence</p>
            <div className="space-y-4">
              {[
                { label: 'Classification', value: 'Actionable bug' },
                { label: 'Relevant function', value: 'verify_token' },
                { label: 'Evidence status', value: 'Available' },
                { label: 'Next step', value: 'Add a concurrency test' },
              ].map((row, i) => (
                <div key={i} className="border-b border-black/20 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between gap-4 text-xs font-bold">
                    <span>{row.label}</span>
                    <span className="text-right">{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

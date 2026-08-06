import { motion } from 'framer-motion';
import { Tags, AlertTriangle, Copy, Zap, LineChart, BrainCircuit, GitCommit, BellRing, LayoutDashboard, Terminal } from 'lucide-react';

const GRAY = '#C9C9C9';

const Squiggle = ({ className = '', stroke = '#000', width = 6 }) => (
  <svg className={className} viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
    <path d="M0 20 Q 12.5 0, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20"
      stroke={stroke} strokeWidth={width} strokeLinecap="round" />
  </svg>
);

const features = [
  { icon: Tags,           title: 'AI Classification',    desc: 'Categorizes every issue by type, component, and severity the moment it arrives.' },
  { icon: AlertTriangle,  title: 'Priority Prediction',  desc: 'Predicts impact and urgency using historical velocity, user sentiment, and engineering context.' },
  { icon: Copy,           title: 'Duplicate Detection',  desc: 'Finds semantically similar issues across your entire repository history in milliseconds.' },
  { icon: Zap,            title: 'Smart Labels',         desc: 'Suggests and applies precise labels based on issue content, not just keywords.' },
  { icon: LineChart,      title: 'Engineering Analytics',desc: 'Tracks resolution velocity, triage time, and issue distribution across your org.' },
  { icon: BrainCircuit,   title: 'Explainable AI',       desc: 'Every decision includes a clear reasoning trace your team can inspect and override.' },
  { icon: GitCommit,      title: 'Repo Insights',        desc: 'Surfaces hidden patterns: recurring issues, high-churn areas, and debt accumulation.' },
  { icon: BellRing,       title: 'Real-time Webhooks',   desc: 'Instant notifications with structured payloads. Build on top of GHIC intelligence.' },
  { icon: LayoutDashboard,title: 'Developer Dashboard',  desc: 'A live command center for your repository health, velocity, and issue backlog.' },
  { icon: Terminal,       title: 'GitHub App',           desc: 'One-click install. Zero configuration. Starts working in under 60 seconds.' },
];

const cardStyles = [
  { bg: '#fff', fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: '#000', fg: '#fff', shadow: '8px 8px 0 #C9C9C9' },
  { bg: '#fff', fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: GRAY,   fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: '#fff', fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: '#000', fg: '#fff', shadow: '8px 8px 0 #C9C9C9' },
  { bg: '#fff', fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: GRAY,   fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: '#fff', fg: '#000', shadow: '8px 8px 0 #000' },
  { bg: '#000', fg: '#fff', shadow: '8px 8px 0 #C9C9C9' },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              What GHIC Does
            </p>
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
              TEN WEAPONS FOR{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
                <span className="relative text-white px-1">YOUR BACKLOG.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-semibold text-black/60 leading-relaxed md:text-right">
            Powered by models trained on millions of software engineering patterns.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const style = cardStyles[i % cardStyles.length];
            const Icon = feat.icon;
            const isInverted = style.bg === '#000';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="p-6 relative overflow-hidden card-t wobble"
                style={{
                  background: style.bg,
                  color: style.fg,
                  border: '3px solid #000',
                  boxShadow: style.shadow,
                }}
              >
                {isInverted && (
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full dots-white opacity-20" />
                )}
                {i % 3 === 2 && !isInverted && (
                  <Squiggle className="absolute top-3 right-4 w-16 h-4" stroke={isInverted ? '#fff' : GRAY} width={8} />
                )}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-5"
                  style={{ background: isInverted ? '#fff' : '#000', border: '2px solid currentColor' }}
                >
                  <Icon className="w-5 h-5" style={{ color: isInverted ? '#000' : '#fff' }} strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold mb-2 leading-tight uppercase tracking-wide" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '15px' }}>
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: isInverted ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)' }}>
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

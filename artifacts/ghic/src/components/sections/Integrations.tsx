import { motion } from 'framer-motion';
import { SiGithub, SiJira, SiLinear, SiDatadog, SiPagerduty } from 'react-icons/si';
import { Webhook, GitBranch } from 'lucide-react';

const GRAY = '#C9C9C9';

const integrations = [
  { icon: SiGithub,    name: 'GitHub',       desc: 'One-click App install. Works with every repo instantly.', black: true },
  { icon: Webhook,     name: 'Slack',        desc: 'Real-time alerts in your team channels.', black: false },
  { icon: SiJira,      name: 'Jira',         desc: 'Sync classified issues directly to your board.', black: false },
  { icon: SiLinear,    name: 'Linear',       desc: 'Auto-create Linear issues from GHIC classifications.', black: true },
  { icon: SiDatadog,   name: 'Datadog',      desc: 'Correlate error spikes with incoming issues.', black: false },
  { icon: SiPagerduty, name: 'PagerDuty',    desc: 'Trigger alerts when P1 issues are classified.', black: false },
  { icon: Webhook,     name: 'Webhooks',     desc: 'Full REST + webhook API with OpenAPI spec.', black: true },
  { icon: GitBranch,   name: 'Custom',       desc: 'TypeScript SDK. Bring GHIC to any tool in your stack.', black: false },
];

export function Integrations() {
  return (
    <section className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              Integrations
            </p>
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
              WORKS WITH YOUR{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
                <span className="relative text-white px-1">ENTIRE STACK.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            Connect GHIC to the tools your team already uses. No ripping anything out.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {integrations.map((intg, i) => {
            const Icon = intg.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 relative overflow-hidden card-t wobble"
                style={{
                  border: '3px solid #000',
                  boxShadow: intg.black ? `8px 8px 0 ${GRAY}` : '8px 8px 0 #000',
                  background: intg.black ? '#000' : '#fff',
                  color: intg.black ? '#fff' : '#000',
                }}
              >
                {intg.black && (
                  <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#fff 2.4px, transparent 2.4px)', backgroundSize: '22px 22px' }} />
                )}
                <Icon className="w-8 h-8 mb-4" />
                <p className="font-bold uppercase tracking-wide text-sm mb-1" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '13px' }}>
                  {intg.name}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: intg.black ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)' }}>
                  {intg.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

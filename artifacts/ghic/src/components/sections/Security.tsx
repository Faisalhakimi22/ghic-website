import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Server, CheckSquare } from 'lucide-react';

const GRAY = '#C9C9C9';

/**
 * Every claim here is one the implementation can back.
 *
 * Removed, because they were not true: "SOC 2 Type II — audited annually"
 * (there is no audit), "GDPR Compliant — full compliance with GDPR, CCPA
 * and standard DPAs" (a claim about organisational process, not code), and
 * a "99.9% Uptime SLA" (no SLA is offered, and /terms explicitly disclaims
 * guaranteed availability). Those are the first things an enterprise
 * security review asks you to evidence, and claiming a certification you
 * do not hold is a materially misleading statement — a worse problem than
 * having fewer badges.
 *
 * What replaced them is stronger anyway, because it is specific and
 * checkable: the permission scopes are visible on the GitHub App's own
 * install screen, and the secret-exclusion behaviour is in the source.
 */
const securityFeatures = [
  { icon: Key,         title: 'Minimal Permissions',   desc: 'Issues read/write and metadata read. Nothing else — check the install screen.', black: true },
  { icon: Lock,        title: 'Encrypted In Transit',  desc: 'All traffic over TLS; data at rest encrypted by our hosting and database providers.', black: false },
  { icon: Eye,         title: 'No Code Written',        desc: 'GHIC comments and suggests. It never merges, closes, pushes, or edits your code.', black: false },
  { icon: Shield,      title: 'Secrets Never Indexed', desc: 'Credential files are skipped and token-shaped values redacted before anything is stored.', black: true },
  { icon: Server,      title: 'Signed Webhooks',        desc: 'Every payload is HMAC-verified. Unsigned requests are rejected outright.', black: false },
  { icon: CheckSquare, title: '90-Day Retention',       desc: 'Predictions are deleted after 90 days. Your issues are never used to train models.', black: false },
];

export function Security() {
  return (
    <section className="py-16 md:py-20" style={{ borderTop: '3px solid #000', background: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              Security
            </p>
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
              BUILT FOR{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
                <span className="relative text-white px-1">ENTERPRISE.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            Security is not a feature. It's a standard. Every decision we've made reflects that.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-6 relative overflow-hidden card-t wobble"
                style={{
                  border: '3px solid #000',
                  boxShadow: feat.black ? `8px 8px 0 ${GRAY}` : '8px 8px 0 #000',
                  background: feat.black ? '#000' : '#fff',
                  color: feat.black ? '#fff' : '#000',
                }}
              >
                {feat.black && (
                  <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#fff 2.4px, transparent 2.4px)', backgroundSize: '22px 22px' }} />
                )}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-5"
                  style={{ border: '2px solid currentColor', background: feat.black ? '#fff' : '#000' }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.black ? '#000' : '#fff' }} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold uppercase text-sm mb-2" style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '13px' }}>
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: feat.black ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}>
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

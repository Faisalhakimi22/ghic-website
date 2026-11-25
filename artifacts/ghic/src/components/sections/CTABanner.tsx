import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { CONTACT_MAILTO } from '@/lib/links';
import { DASHBOARD_URL } from '@/lib/firebase';
import { useHubConnection } from '@/lib/hub-connection';
import { STARTER_DAILY_ANALYSES } from '@/components/sections/Pricing';

const GRAY = '#C9C9C9';

const Cross = ({ className = '', color = '#fff' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="9" y="0" width="6" height="24" fill={color} />
    <rect x="0" y="9" width="24" height="6" fill={color} />
  </svg>
);

const Triangle = ({ className = '', color = '#fff' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2 L23 22 H1 Z" fill={color} />
  </svg>
);

export function CTABanner() {
  const { connected, settling } = useHubConnection();

  return (
    <section className="bg-black text-white relative overflow-hidden" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Top stripe */}
      <div className="h-6"
        style={{ background: 'repeating-linear-gradient(45deg, #fff 0 8px, #000 8px 16px)', borderBottom: '3px solid rgba(255,255,255,0.15)' }} />

      {/* Decorative shapes */}
      <Cross className="absolute top-10 right-20 w-10 h-10 opacity-10" color="#fff" />
      <Triangle className="absolute bottom-10 left-16 w-12 h-12 opacity-10 rotate-12" color="#fff" />
      <Cross className="absolute bottom-16 right-1/3 w-8 h-8 opacity-10 rotate-45" color="#fff" />
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-5"
        style={{ backgroundImage: 'radial-gradient(#fff 2.4px, transparent 2.4px)', backgroundSize: '22px 22px' }} />

      <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center relative">
        <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6 text-white/50 flex items-center justify-center gap-3">
          <span className="inline-block w-8 h-[2px] bg-white/30" />
          Connect through GitHub
          <span className="inline-block w-8 h-[2px] bg-white/30" />
        </p>

        <h2 className="text-[2.5rem] md:text-[5rem] leading-[0.92] mb-6"
          style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.03em' }}>
          READY TO STOP TRIAGING{' '}
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-x-2 inset-y-1 bg-white -rotate-1" aria-hidden />
            <span className="relative text-black px-2">AND SHIP?</span>
          </span>
        </h2>

        <p className="text-base font-semibold text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Free during the beta: one repository and {STARTER_DAILY_ANALYSES} issue analyses per day. Connect through GitHub and keep the final decision with your maintainers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={DASHBOARD_URL}
            data-testid="cta-banner-install"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-5 text-base font-bold uppercase tracking-widest card-t wobble no-underline"
            style={{ fontFamily: "'Archivo Black', sans-serif", border: '3px solid #fff', boxShadow: `6px 6px 0 ${GRAY}` }}
          >
            {settling ? (
              <>CHECKING GHIC</>
            ) : connected ? (
              <><LayoutDashboard className="w-5 h-5" /> DASHBOARD</>
            ) : (
              <><SiGithub className="w-5 h-5" /> GET STARTED <ArrowRight className="w-5 h-5" strokeWidth={3} /></>
            )}
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-5 text-sm font-bold uppercase tracking-widest card-t wobble"
            style={{ fontFamily: "'Archivo Black', sans-serif", border: '3px solid rgba(255,255,255,0.3)' }}
          >
            Talk to Sales
          </a>
        </div>

        {/* Each of these is a fact that can be checked. The previous line
            claimed "GDPR compliant", which is an assertion about an
            organisation's processes -- DPAs, a records register, a
            representative -- not something a codebase can substantiate,
            and it is the kind of claim a regulator or an enterprise buyer's
            security review will ask you to evidence. */}
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
          Free to install · Uninstall any time · 90-day data retention
        </p>
      </div>

      {/* Bottom stripe */}
      <div className="h-6"
        style={{ background: 'repeating-linear-gradient(45deg, #fff 0 8px, #000 8px 16px)', borderTop: '3px solid rgba(255,255,255,0.15)' }} />
    </section>
  );
}

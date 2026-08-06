import { useState, useEffect } from 'react';
import { ArrowRight, Zap, GitPullRequest, CheckCircle2, Tag, AlertCircle, BarChart3, Shield, Clock } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { GITHUB_APP_INSTALL_URL } from '@/lib/links';

const GRAY = '#C9C9C9';

const Squiggle = ({ className = '', stroke = '#000', width = 6 }) => (
  <svg className={className} viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
    <path d="M0 20 Q 12.5 0, 25 20 T 50 20 T 75 20 T 100 20 T 125 20 T 150 20 T 175 20 T 200 20"
      stroke={stroke} strokeWidth={width} strokeLinecap="round" />
  </svg>
);
const Cross = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="9" y="0" width="6" height="24" fill={color} />
    <rect x="0" y="9" width="24" height="6" fill={color} />
  </svg>
);
const Triangle = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2 L23 22 H1 Z" fill={color} />
  </svg>
);

const steps = [
  { id: 1, label: 'Issue received', icon: GitPullRequest },
  { id: 2, label: 'AI analyzing', icon: Zap },
  { id: 3, label: 'Duplicates checked', icon: Shield },
  { id: 4, label: 'Labels assigned', icon: Tag },
  { id: 5, label: 'Priority set', icon: AlertCircle },
  { id: 6, label: 'Dashboard updated', icon: BarChart3 },
];

function IssueCard() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-full" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Issue */}
      <div className="bg-white p-5 mb-4" style={{ border: '3px solid #000', boxShadow: '6px 6px 0 #000' }}>
        <div className="flex items-center gap-2 mb-3">
          <GitPullRequest className="w-4 h-4" />
          <span className="font-bold text-sm">API returns 500 on token refresh</span>
          <span className="text-black/40 text-xs ml-auto">#1247</span>
        </div>
        <p className="text-xs text-black/60 font-mono leading-relaxed mb-3 bg-black/5 p-2 border border-black/10">
          Redis race condition on session store intermittently causing 500 during token refresh. ~30% of requests under load.
        </p>
        <div className="flex flex-wrap gap-2">
          {activeStep >= 3 && (
            <span className="text-xs font-bold px-2 py-1 bg-black text-white" style={{ border: '2px solid #000' }}>bug</span>
          )}
          {activeStep >= 3 && (
            <span className="text-xs font-bold px-2 py-1 bg-white text-black" style={{ border: '2px solid #000' }}>auth</span>
          )}
          {activeStep >= 4 && (
            <span className="text-xs font-bold px-2 py-1" style={{ border: '2px solid #000', background: GRAY }}>P1 · Critical</span>
          )}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {steps.map((step, i) => {
          const isPast = i < activeStep;
          const isActive = i === activeStep;
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="flex items-center gap-3 p-2.5 bg-white transition-all"
              style={{
                border: isActive ? '2px solid #000' : '2px solid transparent',
                boxShadow: isActive ? '4px 4px 0 #000' : 'none',
                opacity: isPast || isActive ? 1 : 0.35,
              }}
            >
              <div
                className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                style={{ background: isPast ? '#000' : isActive ? '#fff' : '#fff', border: '2px solid #000' }}
              >
                {isPast
                  ? <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  : <Icon className="w-3 h-3" />
                }
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">{step.label}</span>
              {isActive && (
                <div className="ml-auto flex gap-0.5">
                  {[0, 1, 2].map(d => (
                    <div key={d} className="w-1.5 h-1.5 bg-black rounded-full"
                      style={{ animation: `pulse 1.2s ease-in-out ${d * 0.2}s infinite` }} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeStep >= 5 && (
        <div className="mt-3 p-3 flex items-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-wider"
          style={{ border: '2px solid #000' }}>
          <Zap className="w-4 h-4" />
          Classified in 0.4s · Confidence 96%
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="bg-white overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .display { font-family: 'Archivo Black', sans-serif; letter-spacing: -0.02em; }
        .hard { border: 3px solid #000; }
        .shadow-hard { box-shadow: 8px 8px 0 #000; }
        .shadow-hard-sm { box-shadow: 5px 5px 0 #000; }
        .shadow-hard-gray { box-shadow: 8px 8px 0 ${GRAY}; }
        .dots { background-image: radial-gradient(#000 2.4px, transparent 2.4px); background-size: 22px 22px; }
        .dots-gray { background-image: radial-gradient(${GRAY} 2.6px, transparent 2.6px); background-size: 20px 20px; }
        .dots-white { background-image: radial-gradient(#fff 2.4px, transparent 2.4px); background-size: 22px 22px; }
        .stripes { background: repeating-linear-gradient(45deg, #000 0 10px, #fff 10px 20px); }
        .stripes-gray { background: repeating-linear-gradient(-45deg, ${GRAY} 0 12px, #fff 12px 24px); }
        .zigzag {
          background:
            linear-gradient(135deg, #000 25%, transparent 25%) -12px 0,
            linear-gradient(225deg, #000 25%, transparent 25%) -12px 0,
            linear-gradient(315deg, #000 25%, transparent 25%),
            linear-gradient(45deg,  #000 25%, transparent 25%);
          background-size: 24px 24px;
          background-color: #fff;
        }
        .wobble:hover { transform: rotate(-1.2deg) translateY(-3px); }
        .card-t { transition: transform .2s cubic-bezier(.34,1.56,.64,1), box-shadow .2s ease; }
        .ticker-anim { animation: ticker 28s linear infinite; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">

          {/* ── HERO HEADLINE ── */}
          <div className="md:col-span-7 hard shadow-hard relative overflow-hidden p-8 md:p-12 bg-white"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")" }}>

            <div className="absolute top-6 right-8 w-24 h-24 rounded-full hard dots-gray hidden md:block" />
            <Cross className="absolute bottom-10 right-44 w-8 h-8 rotate-12 hidden md:block" color={GRAY} />
            <Triangle className="absolute top-8 right-48 w-8 h-8 -rotate-6 hidden lg:block" color={GRAY} />
            <Squiggle className="absolute -bottom-1 left-0 w-full h-9" stroke={GRAY} width={7} />

            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              GitHub Issue Intelligence
            </p>

            <h1 className="display text-[2.6rem] leading-[0.93] md:text-[5rem] md:leading-[0.9] max-w-[14ch]">
              STOP TRIAGING.{' '}
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-x-2 inset-y-1 bg-black -rotate-1" aria-hidden />
                <span className="relative text-white px-2">START SHIPPING.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg font-medium leading-relaxed text-black/75">
              GHIC uses AI to instantly classify, deduplicate, and prioritize every GitHub issue — so your engineering team ships features, not spreadsheets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={GITHUB_APP_INSTALL_URL}
                target="_blank"
                rel="noreferrer noopener"
                data-testid="hero-install"
                className="display hard bg-black text-white px-7 py-4 text-base md:text-lg shadow-hard-gray inline-flex items-center gap-3 card-t wobble no-underline"
              >
                <SiGithub className="w-5 h-5" />
                INSTALL FREE <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </a>
              <a href="#demo"
                className="display hard bg-white text-black px-6 py-4 text-base md:text-lg shadow-hard-sm card-t wobble inline-flex items-center gap-3"
              >
                SEE LIVE DEMO
              </a>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-black/50 border-b-[3px] border-black/20 pb-2 inline-block">
              94¢ of every dollar goes to your engineering velocity
            </p>
          </div>

          {/* ── LIVE ISSUE CARD ── */}
          <div className="md:col-span-5 hard shadow-hard bg-white p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 stripes border-b-[3px] border-black" />
            <div className="pt-6">
              <p className="display text-sm uppercase tracking-[0.2em] mb-4">LIVE PROCESSING</p>
              <IssueCard />
            </div>
          </div>

          {/* ── STAT TILES ── */}
          <div className="md:col-span-3 hard bg-black text-white shadow-hard p-6 relative overflow-hidden card-t wobble">
            <div className="absolute -right-6 -top-6 w-28 h-28 dots-white opacity-30 rounded-full" />
            <BarChart3 className="w-7 h-7 mb-4" strokeWidth={2.5} />
            <p className="display text-4xl md:text-5xl">82%</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/60">
              precision on held-out issues
            </p>
          </div>

          <div className="md:col-span-3 hard bg-white shadow-hard p-6 relative overflow-hidden card-t wobble">
            <Squiggle className="absolute top-3 right-4 w-20 h-5" stroke={GRAY} width={8} />
            <Clock className="w-7 h-7 mb-4" strokeWidth={2.5} />
            <p className="display text-4xl md:text-5xl">2.3m</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black/60">
              average triage time
            </p>
          </div>

          <div className="md:col-span-3 hard shadow-hard p-6 relative overflow-hidden card-t wobble" style={{ background: GRAY }}>
            <Triangle className="absolute -bottom-3 -right-2 w-20 h-20 rotate-12 opacity-20" />
            <Shield className="w-7 h-7 mb-4" strokeWidth={2.5} />
            <p className="display text-4xl md:text-5xl">↓18%</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-black/60">
              duplicate issue rate
            </p>
          </div>

          <div className="md:col-span-3 hard shadow-hard relative overflow-hidden zigzag hidden md:flex items-center justify-center">
            <div className="hard bg-white px-4 py-3 rotate-[-3deg] shadow-hard-sm">
              <p className="display text-lg whitespace-nowrap">ZERO. MISSED. BUGS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

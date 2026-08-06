import { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, GitPullRequest, Search, Tag, AlertCircle, BarChart3, Zap } from 'lucide-react';

const GRAY = '#C9C9C9';

const steps = [
  { id: 1, label: 'Issue Received',       icon: GitPullRequest },
  { id: 2, label: 'AI Analyzing Context', icon: Loader2, spin: true },
  { id: 3, label: 'Duplicate Detection',  icon: Search },
  { id: 4, label: 'Classification',       icon: Tag },
  { id: 5, label: 'Priority Prediction',  icon: AlertCircle },
  { id: 6, label: 'Dashboard Updated',    icon: BarChart3 },
];

export function LiveDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
            <span className="inline-block w-8 h-[3px] bg-black" />
            Not a Video
          </p>
          <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
            WATCH INTELLIGENCE{' '}
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
              <span className="relative text-white px-1">IN REAL TIME.</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: GitHub Issue */}
          <div className="bg-white p-7 relative" style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000' }}>
            <div className="absolute top-0 left-0 right-0 h-7"
              style={{ background: 'repeating-linear-gradient(45deg, #000 0 8px, #fff 8px 16px)', borderBottom: '3px solid #000' }} />
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-5">
                <GitPullRequest className="w-5 h-5" />
                <span className="font-bold text-base">API returns 500 on token refresh</span>
                <span className="text-black/40 text-sm ml-auto">#1247</span>
              </div>

              <div className="text-xs font-mono text-black/60 leading-relaxed p-4 mb-5"
                style={{ border: '2px solid #000', background: '#fafafa' }}>
                <p className="mb-1 font-bold text-black">Steps to reproduce:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Login and get tokens</li>
                  <li>Wait for access token to expire</li>
                  <li>Call refresh endpoint</li>
                  <li>Observe 500 error ~30% of the time</li>
                </ol>
                <p className="mt-2">Logs show a race condition in the Redis session store.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeStep >= 3 && (
                  <span className="text-xs font-bold px-3 py-1 bg-black text-white" style={{ border: '2px solid #000' }}>bug</span>
                )}
                {activeStep >= 3 && (
                  <span className="text-xs font-bold px-3 py-1 bg-white" style={{ border: '2px solid #000' }}>authentication</span>
                )}
                {activeStep >= 3 && (
                  <span className="text-xs font-bold px-3 py-1" style={{ border: '2px solid #000', background: GRAY }}>backend</span>
                )}
                {activeStep >= 4 && (
                  <span className="text-xs font-bold px-3 py-1 bg-black text-white" style={{ border: '2px solid #000' }}>P1 · High Priority</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: AI Processing */}
          <div className="bg-white p-7 relative" style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000' }}>
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em]">Processing Pipeline</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5"
                style={{ border: '2px solid #000', background: '#000', color: '#fff' }}>
                <div className="w-2 h-2 rounded-full bg-white" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
                GHIC Active
              </div>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 p-3 transition-all"
                    style={{
                      border: isActive ? '2px solid #000' : '2px solid transparent',
                      boxShadow: isActive ? '4px 4px 0 #000' : 'none',
                      opacity: isPast || isActive ? 1 : 0.3,
                      background: isActive ? '#fafafa' : 'transparent',
                    }}
                  >
                    <div
                      className="mt-0.5 flex items-center justify-center w-7 h-7 flex-shrink-0"
                      style={{ border: '2px solid #000', background: isPast ? '#000' : '#fff' }}
                    >
                      {isPast
                        ? <CheckCircle2 className="w-4 h-4 text-white" />
                        : <Icon className={`w-3.5 h-3.5 ${isActive && step.spin ? 'animate-spin' : ''}`} />
                      }
                    </div>

                    <div className="flex-1">
                      <p className="font-bold text-sm uppercase tracking-wide">{step.label}</p>

                      {isActive && index === 1 && (
                        <div className="mt-2">
                          <div className="h-2 w-full bg-black/10 overflow-hidden" style={{ border: '1px solid #000' }}>
                            <div className="h-full bg-black" style={{ width: '94%', transition: 'width 2s ease' }} />
                          </div>
                          <p className="text-xs font-mono mt-1 text-right">Confidence: 94%</p>
                        </div>
                      )}
                      {isActive && index === 2 && (
                        <div className="mt-1">
                          <p className="text-xs font-mono text-black/60">Searching 1,247 issues...</p>
                          <p className="text-xs font-mono text-black font-bold mt-0.5">0 duplicates found ✓</p>
                        </div>
                      )}
                      {isActive && index === 4 && (
                        <p className="mt-1 text-xs font-mono text-black/60 leading-relaxed p-2"
                          style={{ border: '1px solid #000', background: GRAY }}>
                          High impact (auth failure) affecting active sessions. P1 suggested.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

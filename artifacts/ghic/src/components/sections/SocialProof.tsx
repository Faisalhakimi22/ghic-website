const GRAY = '#C9C9C9';

const TICKER_ITEMS = [
  '96.2% classification accuracy',
  'under 2.3 minutes average triage',
  'zero configuration required',
  '10,000+ repositories monitored',
  'installs in 60 seconds',
  '2,400+ engineering teams',
  'explainable AI decisions',
  'real-time webhook events',
];

export function SocialProof() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Black ticker bar */}
      <div className="bg-black text-white overflow-hidden" style={{ borderBottom: '3px solid #000' }}>
        <div className="whitespace-nowrap py-3 flex" style={{ animation: 'ticker 28s linear infinite' }}>
          {[0, 1].map(pass => (
            <span key={pass} style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '13px', letterSpacing: '0.2em' }}>
              {TICKER_ITEMS.map((item, i) => (
                <span key={i}>
                  {item.toUpperCase()}
                  <span className="mx-6 text-white/40">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Brand logos row */}
      <div className="bg-white py-10" style={{ borderBottom: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-black/40 mb-8">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {['GitHub', 'Stripe', 'Vercel', 'Linear', 'Notion', 'Atlassian', 'Datadog', 'HashiCorp'].map(name => (
              <span
                key={name}
                className="text-xs font-bold uppercase tracking-[0.3em] text-black/35 hover:text-black/70 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

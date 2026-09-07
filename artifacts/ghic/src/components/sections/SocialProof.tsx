const GRAY = '#C9C9C9';

const TICKER_ITEMS = [
  '82% precision on 1,177 held-out issues',
  'repository-grounded recommendations',
  'GitHub App authorization',
  'workspace-scoped data',
  'maintainer-controlled decisions',
  'no source-code write permission',
  'webhook-driven triage',
  '90-day product-data retention',
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

      {/* Product principles, not fabricated customer logos. */}
      <div className="bg-white py-10" style={{ borderBottom: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-black/40 mb-8">
            Built around the maintainer workflow
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {['Classify', 'Retrieve evidence', 'Explain', 'Recommend', 'Review'].map(name => (
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

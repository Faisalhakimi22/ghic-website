import { useState } from 'react';

const GRAY = '#C9C9C9';

const tabs = [
  { id: 'rest',     label: 'REST API' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'sdk',      label: 'TypeScript SDK' },
  { id: 'cli',      label: 'CLI' },
];

const codeSnippets: Record<string, string> = {
  rest: `# Classify an issue on demand
curl -X POST https://api.ghic.dev/v1/issues/classify \\
  -H "Authorization: Bearer ghic_xxxx" \\
  -H "Content-Type: application/json" \\
  -d '{"issue_id":"GH-1247","repo":"acme/backend"}'

# Response
{
  "id": "GH-1247",
  "priority": "P1",
  "labels": ["bug", "auth", "backend"],
  "confidence": 0.942,
  "reasoning": "High impact auth failure. Redis race condition."
}`,
  webhooks: `// Receive GHIC events in your app
app.post('/ghic-webhook', (req, res) => {
  const { event, issue, classification } = req.body;

  if (event === 'issue.classified') {
    console.log(\`Issue \${issue.number} → \${classification.priority}\`);
    console.log('Labels:', classification.labels);
    console.log('Confidence:', classification.confidence);
  }

  res.sendStatus(200);
});`,
  sdk: `import { GhicClient } from '@ghic/sdk';

const ghic = new GhicClient({ apiKey: 'ghic_xxxx' });

// Classify a new issue
const result = await ghic.issues.classify({
  issueId: 'GH-1247',
  repo: 'acme/backend',
});

console.log(result.priority);    // "P1"
console.log(result.labels);      // ["bug", "auth"]
console.log(result.confidence);  // 0.942`,
  cli: `# Install the GHIC CLI
npm install -g @ghic/cli

# Authenticate
ghic auth login

# Classify a GitHub issue
ghic classify --repo acme/backend --issue 1247

# ✓ Issue #1247 classified
#   Priority: P1 · Critical
#   Labels:   bug, auth, backend
#   Confidence: 94.2%
#   Time: 0.4s`,
};

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState('rest');

  return (
    <section id="docs" className="bg-white py-16 md:py-20" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              Developer Experience
            </p>
            <h2 className="text-[2rem] md:text-[3.5rem] leading-[0.95]" style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}>
              BUILT BY DEVS,{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-x-1 inset-y-0.5 bg-black" aria-hidden />
                <span className="relative text-white px-1">FOR DEVS.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            Full REST API, TypeScript SDK, webhooks, and a CLI. Every touchpoint is engineered to feel right.
          </p>
        </div>

        {/* Code block card */}
        <div style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000' }}>
          {/* Tabs */}
          <div className="flex overflow-x-auto" style={{ borderBottom: '3px solid #000' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ borderRight: '3px solid #000', background: '#000' }}>
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors"
                style={{
                  borderRight: '3px solid #000',
                  background: activeTab === tab.id ? '#000' : '#fff',
                  color: activeTab === tab.id ? '#fff' : 'rgba(0,0,0,0.5)',
                  fontFamily: "'Archivo Black', sans-serif",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code area */}
          <div className="bg-black p-6 md:p-8 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-white/80 whitespace-pre">
              {codeSnippets[activeTab]}
            </pre>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[
            { title: 'OpenAPI Spec',   desc: 'Full specification. Generate clients in any language.' },
            { title: '< 200ms',        desc: 'Average API response time. No perceptible latency.' },
            { title: 'TypeScript First', desc: 'Every SDK method is fully typed. Autocomplete included.' },
          ].map((item, i) => (
            <div key={i} className="p-5"
              style={{
                border: '3px solid #000',
                boxShadow: i === 1 ? `6px 6px 0 ${GRAY}` : '6px 6px 0 #000',
                background: i === 1 ? '#000' : '#fff',
                color: i === 1 ? '#fff' : '#000',
              }}>
              <p className="font-bold text-lg mb-1" style={{ fontFamily: "'Archivo Black', sans-serif" }}>{item.title}</p>
              <p className="text-sm" style={{ color: i === 1 ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

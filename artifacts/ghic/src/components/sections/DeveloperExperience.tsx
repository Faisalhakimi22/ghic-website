import { useState } from 'react';

const GRAY = '#C9C9C9';

const tabs = [
  { id: 'classification', label: 'Classification' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'recommendation', label: 'Recommendation' },
  { id: 'operations', label: 'Operations' },
];

const outputExamples: Record<string, string> = {
  classification: `Classification: Bug
Priority: High
Severity: High
Maintainer review: Required`,
  evidence: `Repository evidence: Found

File: ghic/label.py
Function: _read_collected_csv

Why it matters:
The CSV reader opens input as UTF-8, which is directly
related to the reported Windows-1252 decoding failure.`,
  recommendation: `Root-cause hypothesis:
The import path assumes UTF-8 input and does not expose
an encoding fallback or detection step.

Next step:
Reproduce with the attached Windows-1252 CSV fixture,
then decide the supported encoding policy.`,
  operations: `Workspace: Authorized server-side
GitHub installation: Connected
Repository access: Connected
Index status: Ready
Processing event: Persisted

No repository evidence is claimed when retrieval is
unavailable or confidence is insufficient.`,
};

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState('classification');

  return (
    <section
      id="docs"
      className="bg-white py-16 md:py-20"
      style={{
        borderTop: '3px solid #000',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              Example Analysis
            </p>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-[0.95]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              OUTPUT YOU CAN{' '}
              <span className="relative inline-block">
                <span
                  className="absolute -inset-x-1 inset-y-0.5 bg-black"
                  aria-hidden
                />
                <span className="relative text-white px-1">INSPECT.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            Classification, repository evidence, and a maintainer-oriented
            recommendation in one persisted analysis.
          </p>
        </div>

        <div style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000' }}>
          <div
            className="flex overflow-x-auto"
            style={{ borderBottom: '3px solid #000' }}
          >
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{ borderRight: '3px solid #000', background: '#000' }}
              aria-hidden
            >
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="px-6 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors"
                style={{
                  borderRight: '3px solid #000',
                  background: activeTab === tab.id ? '#000' : '#fff',
                  color:
                    activeTab === tab.id ? '#fff' : 'rgba(0,0,0,0.5)',
                  fontFamily: "'Archivo Black', sans-serif",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-black p-6 md:p-8 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-white/80 whitespace-pre-wrap min-h-52">
              {outputExamples[activeTab]}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[
            {
              title: 'Server Authorized',
              desc: 'Workspace and repository access are resolved on the server.',
            },
            {
              title: 'Evidence Explicit',
              desc: 'Found, insufficient, and unavailable evidence are distinct states.',
            },
            {
              title: 'History Persisted',
              desc: 'Real processing events power the workspace dashboard.',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="p-5"
              style={{
                border: '3px solid #000',
                boxShadow:
                  index === 1 ? `6px 6px 0 ${GRAY}` : '6px 6px 0 #000',
                background: index === 1 ? '#000' : '#fff',
                color: index === 1 ? '#fff' : '#000',
              }}
            >
              <p
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                {item.title}
              </p>
              <p
                className="text-sm"
                style={{
                  color:
                    index === 1
                      ? 'rgba(255,255,255,0.6)'
                      : 'rgba(0,0,0,0.55)',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

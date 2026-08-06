import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'rest', label: 'REST API' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'sdk', label: 'SDK' },
  { id: 'cli', label: 'CLI' },
];

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState('rest');

  return (
    <section id="docs" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Built by developers, for developers.
          </h2>
          <p className="text-xl text-muted-foreground">
            Every touchpoint is engineered to feel right.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-2xl">
          <div className="flex overflow-x-auto border-b border-border bg-card">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-[#0d1117] font-mono text-sm overflow-x-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'rest' && (
                <motion.div
                  key="rest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="text-gray-300">
                    <span className="text-gray-500"># Classify a new issue on demand</span><br/>
                    <span className="text-blue-400">curl</span> -X POST https://api.ghic.dev/v1/issues/classify \<br/>
                    {'  '}-H <span className="text-green-400">"Authorization: Bearer ghic_xxxx"</span> \<br/>
                    {'  '}-H <span className="text-green-400">"Content-Type: application/json"</span> \<br/>
                    {'  '}-d <span className="text-yellow-300">'{'{'}"issue_id"<span className="text-gray-300">:</span> "GH-1247"<span className="text-gray-300">,</span> "repo"<span className="text-gray-300">:</span> "acme/backend"{'}'}'</span><br/>
                    <br/>
                    <span className="text-gray-500"># Response</span><br/>
                    {'{'}<br/>
                    {'  '}<span className="text-purple-400">"id"</span>: <span className="text-green-400">"GH-1247"</span>,<br/>
                    {'  '}<span className="text-purple-400">"status"</span>: <span className="text-green-400">"classified"</span>,<br/>
                    {'  '}<span className="text-purple-400">"prediction"</span>: {'{'}<br/>
                    {'    '}<span className="text-purple-400">"priority"</span>: <span className="text-green-400">"P1"</span>,<br/>
                    {'    '}<span className="text-purple-400">"confidence"</span>: <span className="text-orange-400">0.96</span>,<br/>
                    {'    '}<span className="text-purple-400">"labels"</span>: [<span className="text-green-400">"bug"</span>, <span className="text-green-400">"backend"</span>, <span className="text-green-400">"auth"</span>]<br/>
                    {'  '}{'}'}<br/>
                    {'}'}
                  </pre>
                </motion.div>
              )}
              {activeTab === 'webhooks' && (
                <motion.div
                  key="webhooks"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="text-gray-300">
                    <span className="text-gray-500">// Example payload received at your webhook endpoint</span><br/>
                    {'{'}<br/>
                    {'  '}<span className="text-purple-400">"event"</span>: <span className="text-green-400">"issue.classified"</span>,<br/>
                    {'  '}<span className="text-purple-400">"timestamp"</span>: <span className="text-green-400">"2023-10-25T14:32:01Z"</span>,<br/>
                    {'  '}<span className="text-purple-400">"data"</span>: {'{'}<br/>
                    {'    '}<span className="text-purple-400">"repo"</span>: <span className="text-green-400">"acme/frontend"</span>,<br/>
                    {'    '}<span className="text-purple-400">"issue_number"</span>: <span className="text-orange-400">492</span>,<br/>
                    {'    '}<span className="text-purple-400">"classification"</span>: {'{'}<br/>
                    {'      '}<span className="text-purple-400">"is_duplicate"</span>: <span className="text-orange-400">true</span>,<br/>
                    {'      '}<span className="text-purple-400">"duplicate_of"</span>: <span className="text-orange-400">480</span>,<br/>
                    {'      '}<span className="text-purple-400">"suggested_action"</span>: <span className="text-green-400">"close_as_duplicate"</span><br/>
                    {'    '}{'}'}<br/>
                    {'  '}{'}'}<br/>
                    {'}'}
                  </pre>
                </motion.div>
              )}
              {activeTab === 'sdk' && (
                <motion.div
                  key="sdk"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="text-gray-300">
                    <span className="text-blue-400">import</span> {'{'} GHICClient {'}'} <span className="text-blue-400">from</span> <span className="text-green-400">'@ghic/node'</span>;<br/>
                    <br/>
                    <span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> GHICClient({'{'}<br/>
                    {'  '}apiKey: process.env.GHIC_API_KEY<br/>
                    {'}'});<br/>
                    <br/>
                    <span className="text-gray-500">// Fetch analytics for custom reporting</span><br/>
                    <span className="text-blue-400">const</span> stats = <span className="text-blue-400">await</span> client.analytics.getVelocity({'{'}<br/>
                    {'  '}repo: <span className="text-green-400">'acme/backend'</span>,<br/>
                    {'  '}timeframe: <span className="text-green-400">'30d'</span><br/>
                    {'}'});<br/>
                    <br/>
                    console.<span className="text-blue-400">log</span>(<span className="text-green-400">`Avg triage time: ${'{'}stats.avgTriageMinutes{'}'}m`</span>);
                  </pre>
                </motion.div>
              )}
              {activeTab === 'cli' && (
                <motion.div
                  key="cli"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="text-gray-300">
                    <span className="text-gray-500"># Install the CLI</span><br/>
                    <span className="text-blue-400">npm</span> install -g ghic-cli<br/>
                    <br/>
                    <span className="text-gray-500"># Authenticate</span><br/>
                    ghic login<br/>
                    <br/>
                    <span className="text-gray-500"># Run local intelligence against an unstaged commit</span><br/>
                    ghic predict --commit <span className="text-green-400">"HEAD"</span><br/>
                    <br/>
                    <span className="text-gray-500"># Output:</span><br/>
                    <span className="text-green-400">✓</span> Analyzed 3 files modified<br/>
                    <span className="text-green-400">✓</span> Found 1 related issue: #1247<br/>
                    <span className="text-blue-400">i</span> Suggests closing #1247 automatically.
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

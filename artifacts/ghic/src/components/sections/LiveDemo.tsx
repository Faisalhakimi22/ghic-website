import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, GitPullRequest, Search, Tag, AlertCircle, BarChart3, Clock } from 'lucide-react';

const steps = [
  { id: 1, label: "Issue Received", icon: GitPullRequest },
  { id: 2, label: "AI Analyzing Context", icon: Loader2, spin: true },
  { id: 3, label: "Duplicate Detection", icon: Search },
  { id: 4, label: "Classification", icon: Tag },
  { id: 5, label: "Priority Prediction", icon: AlertCircle },
  { id: 6, label: "Dashboard Updated", icon: BarChart3 },
];

export function LiveDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Watch Intelligence Happen in Real Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Not a video. A live simulation of GHIC processing a real GitHub issue.
          </motion.p>
        </div>

        <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* GitHub Issue Side */}
          <div className="w-full lg:w-1/2 p-8 border-b lg:border-b-0 lg:border-r border-border bg-background/50">
            <div className="flex items-center gap-2 mb-6">
              <GitPullRequest className="text-green-500 w-5 h-5" />
              <span className="font-semibold text-lg text-foreground">API returns 500 on token refresh</span>
              <span className="text-muted-foreground">#1247</span>
            </div>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-secondary overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                </div>
                <span className="font-medium text-foreground">alex-dev</span> opened this issue 2 minutes ago
              </div>
              
              <div className="p-4 rounded-lg border border-border bg-card font-mono text-xs text-muted-foreground leading-relaxed">
                <p className="mb-2">When attempting to refresh the JWT token using the /v1/auth/refresh endpoint, the server intermittently returns a 500 Internal Server Error.</p>
                <p className="mb-2">Steps to reproduce:</p>
                <ol className="list-decimal pl-4 mb-2">
                  <li>Login and get tokens</li>
                  <li>Wait for access token to expire</li>
                  <li>Call refresh endpoint</li>
                  <li>Observe 500 error ~30% of the time</li>
                </ol>
                <p>Logs show a race condition in the Redis session store.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {activeStep >= 3 && <motion.span key="label-bug" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">bug</motion.span>}
                {activeStep >= 3 && <motion.span key="label-auth" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.1 }} className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">authentication</motion.span>}
                {activeStep >= 3 && <motion.span key="label-backend" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.2 }} className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium border border-purple-500/20">backend</motion.span>}
                {activeStep >= 4 && <motion.span key="label-priority" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium border border-orange-500/20">P1 - High Priority</motion.span>}
              </AnimatePresence>
            </div>
          </div>

          {/* AI Processing Side */}
          <div className="w-full lg:w-1/2 bg-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                GHIC Engine Active
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-8">Processing Pipeline</h3>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                const Icon = step.icon;

                return (
                  <div key={step.id} className={`flex items-start gap-4 transition-opacity duration-300 ${isPast || isActive ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`mt-1 flex items-center justify-center w-6 h-6 rounded-full border ${isPast ? 'bg-primary border-primary text-primary-foreground' : isActive ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'}`}>
                      {isPast ? <CheckCircle2 className="w-4 h-4" /> : <Icon className={`w-3.5 h-3.5 ${isActive && step.spin ? 'animate-spin' : ''}`} />}
                    </div>
                    
                    <div className="flex-1">
                      <p className={`font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>{step.label}</p>
                      
                      {/* Dynamic Content based on step */}
                      <AnimatePresence mode="wait">
                        {isActive && index === 1 ? (
                          <motion.div key="confidence" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="mt-2 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                              <motion.div className="h-full bg-primary" initial={{ width: "0%" }} animate={{ width: "94%" }} transition={{ duration: 2 }} />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 text-right font-mono">Confidence: 94%</p>
                          </motion.div>
                        ) : isActive && index === 2 ? (
                          <motion.div key="duplicates" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-2">
                            <p className="text-xs text-muted-foreground font-mono">Searching 1,247 issues...</p>
                            <p className="text-xs text-green-500 font-mono mt-1">0 duplicates found</p>
                          </motion.div>
                        ) : isActive && index === 4 ? (
                          <motion.div key="reasoning" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-2 p-2 rounded bg-secondary/50 border border-border text-xs text-muted-foreground">
                            Reasoning: High impact (auth failure) affecting active sessions. Historical velocity for Redis race conditions is slow. P1 suggested.
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
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

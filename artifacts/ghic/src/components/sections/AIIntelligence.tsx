import { motion } from 'framer-motion';
import { FileText, Cpu, GitBranch, Target, Zap, Database } from 'lucide-react';

const pipelineSteps = [
  { icon: FileText, label: "Issue", desc: "Raw issue created on GitHub" },
  { icon: Cpu, label: "Understanding", desc: "LLM parses text, code snippets, and context" },
  { icon: GitBranch, label: "Reasoning", desc: "Checks past PRs and similar issues" },
  { icon: Target, label: "Prediction", desc: "Assigns priority, labels, and estimates" },
  { icon: Zap, label: "Automation", desc: "Triggers webhooks and updates GitHub" },
  { icon: Database, label: "Knowledge", desc: "Stores patterns to improve future accuracy" },
];

export function AIIntelligence() {
  return (
    <section className="py-32 relative bg-card/30 overflow-hidden border-y border-border/50">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            From Issue to Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            The six-stage reasoning engine that powers GHIC.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2" />
          
          <div className="space-y-16">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-left pl-8' : 'text-right pr-8'}`}>
                    <div className={`inline-block p-4 rounded-xl bg-card border border-border shadow-lg relative ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                      <h4 className="text-lg font-bold text-foreground mb-1">{step.label}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                      
                      {/* Connector dot */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary ${isEven ? '-left-[4.5rem]' : '-right-[4.5rem]'} hidden md:block`} />
                    </div>
                  </div>

                  {/* Mobile layout & Center icon */}
                  <div className="absolute left-[20px] md:static md:w-2/12 flex justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Mobile text content */}
                  <div className="ml-16 md:hidden w-full">
                    <div className="p-4 rounded-xl bg-card border border-border shadow-lg">
                      <h4 className="text-lg font-bold text-foreground mb-1">{step.label}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for desktop layout balance */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

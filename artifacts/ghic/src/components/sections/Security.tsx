import { motion } from 'framer-motion';
import { Shield, Lock, Key, Server, Users, EyeOff } from 'lucide-react';

const securityFeatures = [
  { icon: Shield, title: "SOC2 Type II Ready", desc: "Audited processes and enterprise-grade compliance out of the box." },
  { icon: Lock, title: "Private Repository Support", desc: "Built to securely handle proprietary codebases and internal workflows." },
  { icon: Server, title: "GitHub App Security Model", desc: "Granular repository selection. We only see what you explicitly grant." },
  { icon: Key, title: "Encrypted Secrets at Rest", desc: "AES-256 encryption for all stored configuration and webhook secrets." },
  { icon: Users, title: "Role-based Access Control", desc: "Map your GitHub organization teams to GHIC dashboard roles automatically." },
  { icon: EyeOff, title: "Privacy-first Architecture", desc: "We never read your source code files. Intelligence is derived purely from issue metadata." },
];

export function Security() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Built for Enterprise Security
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Your code never leaves your control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <feat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

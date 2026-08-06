import { motion } from 'framer-motion';
import { 
  Tags, AlertTriangle, Copy, Zap, 
  LineChart, BrainCircuit, GitCommit, 
  BellRing, LayoutDashboard, Terminal 
} from 'lucide-react';

const features = [
  {
    icon: Tags,
    title: "AI Issue Classification",
    description: "Automatically categorizes every issue by type, component, and severity the moment it arrives."
  },
  {
    icon: AlertTriangle,
    title: "Priority Prediction",
    description: "Predicts impact and urgency using historical velocity, user sentiment, and engineering context."
  },
  {
    icon: Copy,
    title: "Duplicate Detection",
    description: "Finds semantically similar issues across your entire repository history in milliseconds."
  },
  {
    icon: Zap,
    title: "Smart Labels",
    description: "Suggests and applies precise labels based on issue content, not just keywords."
  },
  {
    icon: LineChart,
    title: "Engineering Analytics",
    description: "Tracks resolution velocity, triage time, and issue distribution across your organization."
  },
  {
    icon: BrainCircuit,
    title: "Explainable AI",
    description: "Every decision includes a clear reasoning trace your team can inspect and override."
  },
  {
    icon: GitCommit,
    title: "Repository Insights",
    description: "Surfaces hidden patterns: recurring issues, high-churn areas, and debt accumulation over time."
  },
  {
    icon: BellRing,
    title: "Real-time Webhooks",
    description: "Instant notifications with structured payloads. Build on top of GHIC's intelligence."
  },
  {
    icon: LayoutDashboard,
    title: "Developer Dashboard",
    description: "A live command center for your repository's health, velocity, and issue backlog."
  },
  {
    icon: Terminal,
    title: "GitHub App",
    description: "One-click install. Zero configuration. Starts working in under 60 seconds."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything your engineering team needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Powered by models trained on millions of software engineering patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // The 10th item spans two columns on large screens to make the grid look better if needed,
            // or we just let it flow. We have 10 items, so 3 rows of 3, and 1 row of 1.
            // Let's make the last item span full width or center it.
            const isLast = index === 9;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] hover:-translate-y-1 ${isLast ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

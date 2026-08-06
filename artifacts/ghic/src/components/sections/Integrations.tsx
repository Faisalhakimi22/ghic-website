import { motion } from 'framer-motion';
import { SiGithub, SiJira, SiGitlab, SiLinear } from 'react-icons/si';

function SiSlack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}

function SiMicrosoftteams({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.625 6.686h-5.963c.006-.1.009-.202.009-.305 0-2.418-1.96-4.378-4.378-4.378S5.915 3.963 5.915 6.38c0 .103.003.205.009.305H0v11.315h20.625V6.686zm-10.332 7.314H8.707v-5.14h1.586v5.14zm2.958 0h-1.587v-5.14h1.587v5.14zm-1.587-7.875a2.792 2.792 0 1 1 0-5.583 2.792 2.792 0 0 1 0 5.583z"/>
    </svg>
  );
}

function SiAzuredevops({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 17.717V6.242L4.082 2l6.128 1.778v16.43L4.082 22zm16.65-2.012l-6.439.87V4.936l6.439 2.217V15.705zM24 18.217l-5.35 1.783V10l5.35-3.217z"/>
    </svg>
  );
}

const integrations = [
  {
    name: "GitHub (Native)",
    icon: SiGithub,
    desc: "Deep GitHub App integration. Real-time webhooks, bi-directional sync.",
  },
  {
    name: "Slack",
    icon: SiSlack,
    desc: "Instant notifications when critical issues arrive or predictions change.",
  },
  {
    name: "Microsoft Teams",
    icon: SiMicrosoftteams,
    desc: "Surface intelligence directly in your team's channels and workflows.",
  },
  {
    name: "Jira",
    icon: SiJira,
    desc: "Two-way sync. AI labels and priorities appear as Jira fields automatically.",
  },
  {
    name: "Azure DevOps",
    icon: SiAzuredevops,
    desc: "Enterprise-grade integration for Microsoft engineering organizations.",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    desc: "Full parity with GitHub support. Self-hosted and SaaS.",
    badge: "Coming Soon"
  },
  {
    name: "Linear",
    icon: SiLinear,
    desc: "Native issue sync with GHIC intelligence enrichment.",
    badge: "Coming Soon"
  }
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Connects to your stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            GHIC lives where you work. No context switching required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((int, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <int.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                {int.badge && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                    {int.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{int.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{int.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

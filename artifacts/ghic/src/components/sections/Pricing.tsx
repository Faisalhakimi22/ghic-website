import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for open source maintainers.",
    features: [
      "1 repository",
      "500 issues/month",
      "AI Classification",
      "Basic Dashboard",
      "Community support"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For professional engineering teams.",
    features: [
      "10 repositories",
      "10,000 issues/month",
      "All AI features",
      "Priority Prediction",
      "Duplicate Detection",
      "Analytics Dashboard",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations with custom needs.",
    features: [
      "Unlimited repositories",
      "Unlimited issues",
      "Custom AI models",
      "SSO & RBAC",
      "SLA guarantee",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, transparent pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Start free. Scale as you grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl bg-card border ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)] md:-translate-y-4' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                {plan.desc}
              </p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

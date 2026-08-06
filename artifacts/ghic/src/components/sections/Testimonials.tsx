import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We went from 6-hour average triage time to under 15 minutes. GHIC doesn't just save time — it makes our entire team smarter about what matters.",
    author: "Sarah Chen",
    title: "VP Engineering",
    company: "Cascade Systems"
  },
  {
    quote: "The duplicate detection alone saved us from merging 3 conflicting bug fixes in the same sprint. The ROI was immediate.",
    author: "Marcus Webb",
    title: "Lead Engineer",
    company: "Finflow Technologies"
  },
  {
    quote: "I was skeptical about AI in our engineering workflow. GHIC's explainable AI decisions changed my mind completely. We trust it.",
    author: "Priya Sharma",
    title: "CTO",
    company: "Lattice Labs"
  },
  {
    quote: "We process 2,000+ issues a month across 15 repositories. GHIC handles it without breaking a sweat.",
    author: "James O'Brien",
    title: "Platform Engineering Lead",
    company: "Orbit Commerce"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by engineering teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                "{test.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{test.author}</p>
                <p className="text-sm text-muted-foreground">{test.title}, {test.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does GHIC access my repositories?",
    a: "Via GitHub App with minimal required permissions. You control exactly which repositories GHIC can see."
  },
  {
    q: "Does GHIC read my code?",
    a: "No. GHIC only reads issue titles, descriptions, labels, and comments — never source code files or diffs."
  },
  {
    q: "How accurate is the AI classification?",
    a: "Average classification accuracy of 94.2% across our benchmark dataset of 500,000 real-world GitHub issues."
  },
  {
    q: "How long does it take to set up?",
    a: "Under 60 seconds. Install the GitHub App, select your repositories, and GHIC starts processing immediately."
  },
  {
    q: "Can I use GHIC with private repositories?",
    a: "Yes. All data is encrypted in transit and at rest. Private repositories are fully supported."
  },
  {
    q: "What happens if the AI makes a wrong prediction?",
    a: "Every prediction includes a confidence score. You can override any decision, and GHIC learns from corrections."
  },
  {
    q: "Is there an API for custom integrations?",
    a: "Yes. Full REST API with OpenAPI spec, webhook events, and TypeScript SDK available."
  },
  {
    q: "What's your SLA for enterprise customers?",
    a: "Enterprise plans include 99.9% uptime SLA with dedicated support and custom escalation paths."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Common questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';

export function CTABanner() {
  return (
    <section className="relative py-32 bg-card overflow-hidden border-y border-border/50">
      {/* Abstract background particle effect simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Ready to stop triaging and start building?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Install in 60 seconds. No configuration required. Free forever for one repository.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:-translate-y-0.5">
            <SiGithub className="w-5 h-5" />
            Install on GitHub
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent text-foreground border border-border px-8 py-4 rounded-md font-medium text-lg hover:bg-secondary transition-all">
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}

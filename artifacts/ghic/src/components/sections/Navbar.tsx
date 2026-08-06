import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hexagon, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-border/50 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Hexagon className="w-5 h-5 absolute" />
            <div className="w-1.5 h-1.5 bg-current rounded-full" />
          </div>
          <span className="font-bold text-lg tracking-tight">GHIC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          <a href="#integrations" className="hover:text-foreground transition-colors">Integrations</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </Link>
          <a 
            href="#install"
            className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5)]"
          >
            <span>Install on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

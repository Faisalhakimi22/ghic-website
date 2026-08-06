import { Hexagon } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-foreground">
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">
                <Hexagon className="w-5 h-5 absolute" />
                <div className="w-1.5 h-1.5 bg-current rounded-full" />
              </div>
              <span className="font-bold text-lg tracking-tight">GHIC</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Engineering Intelligence for Modern Software Teams. Stop triaging and start building.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><SiGithub className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><SiX className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Developers</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SDK</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CLI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 GHIC. Engineering Intelligence for Modern Software Teams.
          </p>
          <div className="px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            SOC2 Ready
          </div>
        </div>
      </div>
    </footer>
  );
}

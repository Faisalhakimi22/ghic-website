import { motion } from 'framer-motion';
import { SiGithub, SiGoogle, SiStripe, SiLinear, SiVercel, SiNotion, SiHashicorp, SiAtlassian, SiDatadog } from 'react-icons/si';

const logos = [
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiAtlassian, name: "Atlassian" },
  { Icon: SiGoogle, name: "Google" },
  { Icon: SiStripe, name: "Stripe" },
  { Icon: SiLinear, name: "Linear" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiNotion, name: "Notion" },
  { Icon: SiHashicorp, name: "HashiCorp" },
  { Icon: SiDatadog, name: "Datadog" },
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by engineering teams at
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={`marquee-${i}`} className="flex items-center justify-center w-[200px] text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100">
              <logo.Icon className="w-8 h-8" />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}

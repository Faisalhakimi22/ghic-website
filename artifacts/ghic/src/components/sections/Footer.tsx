import { Zap } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { Link } from 'wouter';
import { DASHBOARD_URL } from '@/lib/firebase';

const GRAY = '#C9C9C9';

const Cross = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="9" y="0" width="6" height="24" fill={color} />
    <rect x="0" y="9" width="24" height="6" fill={color} />
  </svg>
);
const Triangle = ({ className = '', color = '#000' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2 L23 22 H1 Z" fill={color} />
  </svg>
);

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Top stripe */}
      <div className="h-4"
        style={{ background: 'repeating-linear-gradient(45deg, #000 0 8px, #fff 8px 16px)', borderBottom: '3px solid #000' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-black"
                style={{ border: '3px solid #000', boxShadow: '4px 4px 0 #C9C9C9' }}>
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '20px', letterSpacing: '-0.02em' }}>GHIC</span>
            </div>
            <p className="text-sm font-semibold text-black/60 leading-relaxed mb-5 max-w-[220px]">
              Engineering Intelligence for Modern Software Teams. Stop triaging and start building.
            </p>
            <div className="flex gap-3 text-black">
              <a href="#" className="w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white transition-colors card-t"
                style={{ border: '2px solid #000' }}>
                <SiGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white transition-colors card-t"
                style={{ border: '2px solid #000' }}>
                <SiX className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white transition-colors card-t"
                style={{ border: '2px solid #000' }}>
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links
              Only entries with a real destination are listed. The previous
              version rendered Changelog / Roadmap / SDK / CLI / About / Blog
              as href="#", which looks like a fuller product than exists and
              wastes a click for anyone who tries one. They come back when
              the pages do. */}
          {[
            {
              heading: 'Product',
              links: [
                { label: 'Features', href: '/#features' },
                { label: 'Live demo', href: '/#demo' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Dashboard', href: DASHBOARD_URL, external: true },
              ],
            },
            {
              heading: 'Developers',
              links: [
                { label: 'Documentation', href: '/docs' },
                {
                  label: 'GitHub',
                  href: 'https://github.com/Faisalhakimi22/github-issue-classifier',
                  external: true,
                },
              ],
            },
            {
              heading: 'Company',
              links: [
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Contact', href: 'mailto:faisalh5556@gmail.com', external: true },
              ],
            },
          ].map(col => (
            <div key={col.heading}>
              <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-4"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        {...(link.href.startsWith('http')
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                        className="text-sm font-semibold text-black/55 hover:text-black transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm font-semibold text-black/55 hover:text-black transition-colors no-underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '3px solid #000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
            © 2025 GHIC · Engineering Intelligence for Modern Software Teams
          </p>
          <div className="flex items-center gap-3">
            <Cross className="w-4 h-4" />
            <Triangle className="w-4 h-4" color={GRAY} />
            <div className="w-4 h-4 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </footer>
  );
}

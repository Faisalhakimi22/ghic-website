import { useState, useEffect } from 'react';
import { ArrowRight, LayoutDashboard, Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { DASHBOARD_URL } from '@/lib/firebase';
import { useHubConnection } from '@/lib/hub-connection';

/**
 * Section links live on the landing page, so they behave differently
 * depending on where you are: a bare `#features` anchor only works if the
 * section is on the current page. From /pricing or /docs it has to be
 * `/#features`, or the link silently does nothing — which is how anchor
 * navigation usually breaks once a one-page site grows a second page.
 */
const SECTION_LINKS = [
  { label: 'Features', hash: '#features' },
  { label: 'Demo', hash: '#demo' },
];

const PAGE_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setScrolled] = useState(false);
  const [location] = useLocation();
  const hub = useHubConnection();

  const onHome = location === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close the mobile menu on navigation, or it stays open over the new page.
  useEffect(() => setMobileOpen(false), [location]);

  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: '3px solid #000', fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div
            className="w-10 h-10 flex items-center justify-center bg-black"
            style={{ border: '3px solid #000', boxShadow: '4px 4px 0 #C9C9C9' }}
          >
            <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: '20px',
              letterSpacing: '-0.02em',
              color: '#000',
            }}
          >
            GHIC
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-black/70">
          {SECTION_LINKS.map(link => (
            <a
              key={link.label}
              href={sectionHref(link.hash)}
              className="hover:text-black transition-colors uppercase tracking-widest text-xs"
            >
              {link.label}
            </a>
          ))}
          {PAGE_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-black transition-colors uppercase tracking-widest text-xs no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — nothing auth-dependent renders until the session state has
            settled. A signed-in visitor settles immediately from the local
            Firebase session; only a signed-out one waits on the Hub bridge,
            and that wait is bounded. */}
        <div className="flex items-center gap-3">
          {hub.settling ? (
            <div className="hidden md:block w-32 h-9" aria-hidden />
          ) : hub.signedIn ? (
            <>
              <a
                href={DASHBOARD_URL}
                data-testid="nav-dashboard"
                className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                style={{
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                  fontFamily: "'Archivo Black', sans-serif",
                }}
              >
                <LayoutDashboard className="w-4 h-4" strokeWidth={2.5} />
                Dashboard
              </a>
            </>
          ) : (
            <>
              {/* The hub, not GitHub. Installing first leaves an
                  installation with no account to attach it to, so the
                  visitor ends up signing in anyway and finishing through a
                  recovery screen. */}
              <a
                href={DASHBOARD_URL}
                data-testid="nav-install"
                className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors no-underline"
                style={{
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                  fontFamily: "'Archivo Black', sans-serif",
                }}
              >
                Get Started <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </>
          )}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-[3px] border-black px-5 py-6 space-y-4">
          {SECTION_LINKS.map(link => (
            <a
              key={link.label}
              href={sectionHref(link.hash)}
              className="block text-sm font-bold uppercase tracking-widest text-black/70 hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {PAGE_LINKS.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm font-bold uppercase tracking-widest text-black/70 hover:text-black no-underline"
            >
              {link.label}
            </Link>
          ))}

          {hub.signedIn ? (
            <>
              <a
                href={DASHBOARD_URL}
                className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 text-sm font-bold uppercase tracking-wider"
                style={{ border: '3px solid #000' }}
              >
                <LayoutDashboard className="w-4 h-4" strokeWidth={2.5} />
                Dashboard
              </a>
            </>
          ) : (
            <>
              <a
                href={DASHBOARD_URL}
                className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 text-sm font-bold uppercase tracking-wider no-underline"
                style={{ border: '3px solid #000' }}
              >
                Get Started <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </>
          )}
        </div>
      )}
    </header>
  );
}

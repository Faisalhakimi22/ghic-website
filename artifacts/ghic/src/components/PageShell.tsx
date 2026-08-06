import { type ReactNode } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

/**
 * Navbar + footer wrapper for every page that isn't the landing page.
 *
 * Exists so a new route is a page component and one line in App.tsx,
 * rather than a page component that also has to remember the chrome.
 */
export function PageShell({
  children,
  eyebrow,
  title,
  intro,
}: {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <main className="flex-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {(eyebrow || title) && (
          <header
            className="border-b-[3px] border-black bg-white"
            style={{ borderBottom: '3px solid #000' }}
          >
            <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
              {eyebrow && (
                <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center gap-3">
                  <span className="inline-block w-8 h-[3px] bg-black" />
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1
                  className="text-[2.25rem] md:text-[3.5rem] leading-[0.95]"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    letterSpacing: '-0.02em',
                  }}
                >
                  {title}
                </h1>
              )}
              {intro && (
                <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70 leading-relaxed">
                  {intro}
                </p>
              )}
            </div>
          </header>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}

/** Body copy container for the long-form legal and docs pages. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <div className="space-y-8 text-[15px] leading-relaxed text-black/80">{children}</div>
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2
        className="text-lg md:text-xl uppercase tracking-tight"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        {heading}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

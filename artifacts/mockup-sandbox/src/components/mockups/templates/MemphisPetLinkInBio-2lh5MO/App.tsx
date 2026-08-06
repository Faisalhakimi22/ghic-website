import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ArrowUpRight,
  Sparkles,
  PlayCircle,
  Scissors,
  Mail,
  Instagram,
  Music2,
  Youtube,
  PawPrint,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Memphis decorative SVGs                                            */
/* ------------------------------------------------------------------ */

const Squiggle = ({ className = '', stroke = '#FF4D8D', width = 160 }) => (
  <svg
    className={className}
    width={width}
    height={width * 0.25}
    viewBox="0 0 160 40"
    fill="none"
  >
    <path
      d="M2 20 Q 12 2, 22 20 T 42 20 T 62 20 T 82 20 T 102 20 T 122 20 T 142 20 T 162 20"
      stroke={stroke}
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const ZigZag = ({ className = '', stroke = '#00A9A5', width = 140 }) => (
  <svg className={className} width={width} height={width * 0.22} viewBox="0 0 140 30" fill="none">
    <path
      d="M2 26 L 16 4 L 30 26 L 44 4 L 58 26 L 72 4 L 86 26 L 100 4 L 114 26 L 128 4"
      stroke={stroke}
      strokeWidth="6"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const Dots = ({ className = '', fill = '#FFC145' }) => (
  <svg className={className} width="110" height="74" viewBox="0 0 110 74" fill="none">
    {[0, 1, 2, 3, 4].map((c) =>
      [0, 1, 2].map((r) => (
        <circle key={`${c}-${r}`} cx={10 + c * 22} cy={10 + r * 26} r="6" fill={fill} />
      ))
    )}
  </svg>
);

const HalfMoon = ({ className = '', fill = '#FF4D8D' }) => (
  <svg className={className} width="90" height="46" viewBox="0 0 90 46" fill="none">
    <path d="M0 46 A 45 45 0 0 1 90 46 Z" fill={fill} />
  </svg>
);

const Triangle = ({ className = '', fill = '#7B5CFF' }) => (
  <svg className={className} width="64" height="58" viewBox="0 0 64 58" fill="none">
    <path d="M32 2 L 62 56 L 2 56 Z" fill={fill} />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper — one section at a time                      */
/* ------------------------------------------------------------------ */

const Reveal = ({ children, delay = 0, y = 48 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.45 }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.8, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Link card data                                                     */
/* ------------------------------------------------------------------ */

const LINKS = [
  {
    label: 'Shop the Reborn Collection',
    sub: 'Velvet collars · silk-soft leashes · drop 001',
    icon: Sparkles,
    bg: '#FFC145',
    text: '#3D0C2A',
    radius: '2.5rem 0.75rem 2.5rem 0.75rem',
    rotate: '-1.2deg',
    pattern: 'dots',
  },
  {
    label: 'Read Our Love Letter',
    sub: 'Why Happy Tails became PAWMOUR — the whole story',
    icon: Mail,
    bg: '#FF4D8D',
    text: '#FFF3E6',
    radius: '0.75rem 3rem 0.75rem 3rem',
    rotate: '1deg',
    pattern: 'zigzag',
  },
  {
    label: 'Book a Grooming Ritual',
    sub: 'Rosewater rinses · slow brushing · candlelit calm',
    icon: Scissors,
    bg: '#00A9A5',
    text: '#3D0C2A',
    radius: '999px',
    rotate: '-0.8deg',
    pattern: 'squiggle',
  },
  {
    label: 'Watch the Reveal Film',
    sub: '90 seconds of fur, satin & saxophone — dir. L. Conti',
    icon: PlayCircle,
    bg: '#7B5CFF',
    text: '#FFF3E6',
    radius: '0.75rem',
    rotate: '1.4deg',
    pattern: 'half',
  },
  {
    label: 'Join Club Amour',
    sub: 'First-name treatment, secret drops, birthday biscotti',
    icon: Heart,
    bg: '#FFF3E6',
    text: '#3D0C2A',
    radius: '3rem 3rem 0.75rem 0.75rem',
    rotate: '-1deg',
    pattern: 'tri',
  },
];

const SOCIALS = [
  { icon: Instagram, label: 'IG', handle: '@pawmour.amore', bg: '#FF4D8D' },
  { icon: Music2, label: 'TT', handle: '@pawmour', bg: '#FFC145' },
  { icon: Youtube, label: 'YT', handle: 'PAWMOUR Studio', bg: '#00A9A5' },
];

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="pawmour-root">
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display:ital,wght@1,500;1,700&family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .pawmour-root { font-family: 'Space Grotesk', sans-serif; background: #2A0818; }
        .display { font-family: 'Archivo Black', sans-serif; }
        .lover-italic { font-family: 'Playfair Display', serif; font-style: italic; }

        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .spin-slow { animation: spin-slow 18s linear infinite; }

        @keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
        .marquee-track { animation: marquee 22s linear infinite; }

        @keyframes wiggle {
          0%,100% { transform: translateY(0) rotate(0deg);}
          50% { transform: translateY(-8px) rotate(3deg);}
        }
        .wiggle { animation: wiggle 5s ease-in-out infinite; }

        .left-grain {
          background-image: radial-gradient(#3d0c2a14 1.4px, transparent 1.4px);
          background-size: 22px 22px;
        }
        .right-grain {
          background-image: radial-gradient(#ffffff0d 1.4px, transparent 1.4px);
          background-size: 26px 26px;
        }

        .link-card { transition: transform .35s cubic-bezier(.2,.9,.3,1.4), box-shadow .35s ease; }
        .link-card:hover { transform: translateY(-5px) rotate(0deg) scale(1.015) !important; }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #2A0818; }
        ::-webkit-scrollbar-thumb { background: #FF4D8D; border-radius: 99px; border: 2px solid #2A0818; }
      `,
        }}
      />

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* ============================================================ */}
        {/* LEFT — cream, sticky, giant type                              */}
        {/* ============================================================ */}
        <header className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 bg-[#FFF3E6] left-grain relative overflow-hidden flex flex-col justify-between px-8 py-10 lg:px-14 lg:py-12">
          {/* scattered memphis bits */}
          <Dots className="absolute top-8 right-8 opacity-90" fill="#FFC145" />
          <Triangle className="absolute bottom-40 right-12 wiggle" fill="#00A9A5" />
          <HalfMoon className="absolute top-[38%] -left-6 rotate-90" fill="#7B5CFF" />
          <ZigZag className="absolute bottom-10 left-1/3 -rotate-6" stroke="#FF4D8D" />

          {/* top bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-[#FF4D8D] flex items-center justify-center border-[3px] border-[#3D0C2A]">
                <PawPrint size={18} color="#FFF3E6" strokeWidth={2.5} />
              </span>
              <span className="display text-[#3D0C2A] text-sm tracking-[0.2em]">PAWMOUR</span>
            </div>
            <span className="lover-italic text-[#FF4D8D] text-lg">est. with affection</span>
          </div>

          {/* GIANT TYPE */}
          <div className="relative z-10 mt-8 lg:mt-0">
            <p className="lover-italic text-[#00A9A5] text-xl lg:text-2xl mb-3 -rotate-2 inline-block">
              formerly Happy Tails Co. — now, finally, ourselves
            </p>
            <h1
              className="display text-[#3D0C2A]"
              style={{ fontSize: '15vw', lineHeight: 0.8, letterSpacing: '-0.02em' }}
            >
              PAW
              <span className="block text-[#FF4D8D]" style={{ lineHeight: 0.8 }}>
                MOUR
              </span>
            </h1>
            <div className="flex items-center gap-4 mt-5">
              <Squiggle stroke="#7B5CFF" width={150} />
              <p className="text-[#3D0C2A] font-medium text-sm lg:text-base max-w-[18rem] leading-snug">
                The love language of pet care. Sensual textures, slow rituals,
                shameless devotion — for the creatures who own your heart.
              </p>
            </div>
          </div>

          {/* bottom — rotating badge + scroll cue */}
          <div className="relative z-10 flex items-end justify-between mt-10">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 100 100" className="w-full h-full spin-slow">
                <defs>
                  <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="#FFC145" stroke="#3D0C2A" strokeWidth="3" />
                <text fill="#3D0C2A" fontSize="10.5" fontFamily="Archivo Black, sans-serif">
                  <textPath href="#circ">A REBRAND • A LOVE AFFAIR • 2025 •</textPath>
                </text>
              </svg>
              <Heart
                size={26}
                className="absolute inset-0 m-auto"
                color="#FF4D8D"
                fill="#FF4D8D"
              />
            </div>
            <p className="display text-[#3D0C2A] text-xs tracking-[0.3em] rotate-90 origin-bottom-right hidden lg:block">
              SCROLL FOR THE LINKS ↓
            </p>
            <p className="display text-[#3D0C2A] text-xs tracking-[0.25em] lg:hidden">
              SCROLL ↓
            </p>
          </div>
        </header>

        {/* ============================================================ */}
        {/* RIGHT — deep plum, scrolling links                            */}
        {/* ============================================================ */}
        <main className="lg:w-1/2 bg-[#2A0818] right-grain relative">
          <div className="px-7 py-14 lg:px-16 lg:py-24 flex flex-col gap-14">
            {/* manifesto */}
            <Reveal>
              <section className="relative">
                <Squiggle className="mb-6" stroke="#FFC145" width={120} />
                <h2
                  className="display text-[#FFF3E6]"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 0.9 }}
                >
                  WE FELL IN LOVE
                  <span className="block text-[#FF4D8D]">& CHANGED OUR NAME.</span>
                </h2>
                <p className="mt-6 text-[#E9C9D6] leading-relaxed max-w-md">
                  Nine years of wagging tails taught us something: pet care isn't a chore,
                  it's a romance. So we tore up the beige, kissed the squiggles, and rebuilt
                  everything around one feeling —{' '}
                  <span className="lover-italic text-[#FFC145] text-lg">amore</span>. Same
                  hands. Same hearts. Bolder everything.
                </p>
              </section>
            </Reveal>

            {/* link cards */}
            <section className="flex flex-col gap-6">
              {LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                  <Reveal key={link.label} delay={0.05}>
                    <a
                      href="#"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="link-card relative block px-6 py-6 lg:px-8 lg:py-7 border-[3px] border-[#1A040E] overflow-hidden group"
                      style={{
                        background: link.bg,
                        borderRadius: link.radius,
                        transform: `rotate(${link.rotate})`,
                        boxShadow:
                          hovered === i
                            ? '10px 10px 0 #FF4D8D'
                            : '6px 6px 0 #1A040E',
                      }}
                    >
                      {/* corner pattern flourish */}
                      <div className="absolute -right-3 -top-3 opacity-25 group-hover:opacity-60 transition-opacity">
                        {link.pattern === 'dots' && <Dots fill={link.text} />}
                        {link.pattern === 'zigzag' && <ZigZag stroke={link.text} />}
                        {link.pattern === 'squiggle' && <Squiggle stroke={link.text} width={130} />}
                        {link.pattern === 'half' && <HalfMoon fill={link.text} />}
                        {link.pattern === 'tri' && <Triangle fill={link.text} />}
                      </div>

                      <div className="relative flex items-center gap-5">
                        <span
                          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-[3px]"
                          style={{ borderColor: link.text, color: link.text }}
                        >
                          <Icon size={22} strokeWidth={2.4} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <p
                            className="display text-base lg:text-xl leading-tight"
                            style={{ color: link.text }}
                          >
                            {link.label}
                          </p>
                          <p
                            className="text-xs lg:text-sm mt-1 opacity-80 truncate"
                            style={{ color: link.text }}
                          >
                            {link.sub}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={26}
                          strokeWidth={2.6}
                          className="shrink-0 transition-transform duration-300 group-hover:rotate-45"
                          style={{ color: link.text }}
                        />
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </section>

            {/* socials */}
            <Reveal>
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <ZigZag stroke="#7B5CFF" width={90} />
                  <h3 className="display text-[#FFF3E6] text-sm tracking-[0.25em]">
                    FLIRT WITH US ELSEWHERE
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {SOCIALS.map((s) => {
                    const SIcon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href="#"
                        className="link-card flex flex-col items-center gap-2 py-5 border-[3px] border-[#1A040E] bg-[#FFF3E6]"
                        style={{ borderRadius: '1.25rem 1.25rem 1.25rem 0.25rem', boxShadow: '5px 5px 0 #1A040E' }}
                      >
                        <span
                          className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] border-[#1A040E]"
                          style={{ background: s.bg }}
                        >
                          <SIcon size={18} color="#1A040E" strokeWidth={2.5} />
                        </span>
                        <span className="text-[#3D0C2A] text-[11px] font-medium">{s.handle}</span>
                      </a>
                    );
                  })}
                </div>
              </section>
            </Reveal>

            {/* sign-off */}
            <Reveal>
              <section className="text-center pt-4 pb-2">
                <Heart size={28} className="mx-auto mb-4" color="#FF4D8D" fill="#FF4D8D" />
                <p className="lover-italic text-[#FFC145] text-2xl lg:text-3xl leading-snug">
                  “Love them like they love you —<br /> completely, ridiculously, every day.”
                </p>
                <p className="mt-4 text-[#E9C9D6] text-xs tracking-[0.3em] display">
                  PAWMOUR — MILANO · BROOKLYN · WHEREVER YOUR DOG SLEEPS
                </p>
              </section>
            </Reveal>
          </div>

          {/* marquee footer */}
          <div className="overflow-hidden border-t-[3px] border-[#1A040E] bg-[#FF4D8D] py-3">
            <div className="marquee-track flex whitespace-nowrap gap-10 w-max">
              {[...Array(2)].map((_, k) => (
                <span key={k} className="display text-[#2A0818] text-sm tracking-[0.2em] flex gap-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} className="flex items-center gap-10">
                      NEW NAME, SAME DEVOTION <Heart size={14} fill="#2A0818" /> PAWMOUR
                      <Sparkles size={14} />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
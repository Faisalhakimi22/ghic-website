import { useState } from 'react';
import { ArrowRight, ArrowDownRight, Plus, X, Sparkles, Eye, RefreshCcw } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    title: 'SUMMON YOUR SIZE',
    scrawl: 'the fit finds you',
    body: 'Tell us your measurements once. Our archive reads them like tarot — every listing is filtered to garments that will actually drape on your body, not a mannequin from 1987.',
    icon: Eye,
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&h=800&fit=crop',
  },
  {
    n: '02',
    title: 'CONJURE THE ARCHIVE',
    scrawl: 'every garment has a past life',
    body: 'Swipe through dead-stock denim, 70s leather, hand-mended silk. Each piece carries its provenance — who wore it, where it travelled, what it survived. You are not buying clothes. You are adopting ghosts.',
    icon: Sparkles,
    img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1200&h=800&fit=crop',
  },
  {
    n: '03',
    title: 'TRANSMUTE & TRADE',
    scrawl: 'nothing is ever finished',
    body: 'List your own relics in under sixty seconds. When a piece leaves your closet it does not die — it changes hands, changes meaning, changes shape. The cycle is the whole point.',
    icon: RefreshCcw,
    img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b1?w=1200&h=800&fit=crop',
  },
];

export default function App() {
  const [active, setActive] = useState(0);
  const [skipped, setSkipped] = useState(false);

  const step = STEPS[active];
  const Icon = step.icon;

  return (
    <div className="w-full bg-[#160300] text-[#FFEDD2] overflow-x-hidden" style={{ fontFamily: "'Archivo', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Archivo+Black&family=Permanent+Marker&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        ::selection { background: #FF5A00; color: #160300; }
        .blackface { font-family: 'Archivo Black', sans-serif; }
        .scrawl { font-family: 'Permanent Marker', cursive; }
        .img-occult { filter: grayscale(1) contrast(1.5) brightness(0.85); transition: filter .35s ease, opacity .35s ease, transform .35s ease; }
        .img-occult:hover { filter: grayscale(0.1) contrast(1.25) sepia(0.35) hue-rotate(-18deg) saturate(2); }
        .hard-btn { transition: background .18s ease, color .18s ease, transform .18s ease; }
        .hard-btn:hover { transform: scale(0.97); }
        .row-step { transition: background .2s ease, color .2s ease; }
        .ticker-cell { transition: opacity .2s ease, color .2s ease; }
        .ticker-cell:hover { opacity: 1; color: #FFB100; }
        .crumple { transition: transform .25s ease; }
        .crumple:hover { transform: rotate(-2deg) scale(1.04); }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #160300; }
        ::-webkit-scrollbar-thumb { background: #C92C00; border: 3px solid #160300; }
      `}} />

      {/* ============ TOP BAR ============ */}
      <header className="flex items-stretch justify-between border-b-4 border-[#FFEDD2]">
        <div className="px-5 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF5A00] crumple flex items-center justify-center">
            <Sparkles size={16} className="text-[#160300]" strokeWidth={3} />
          </div>
          <span className="blackface text-lg tracking-tight leading-none">TRANSMUTE</span>
        </div>
        <div className="flex items-stretch">
          <div className="px-5 flex items-center border-l-4 border-[#FFEDD2] text-xs font-bold tracking-[0.25em] text-[#FFB100]">
            ONBOARDING&nbsp;{step.n}/03
          </div>
          <button
            onClick={() => setSkipped(!skipped)}
            className="hard-btn px-5 flex items-center gap-2 border-l-4 border-[#FFEDD2] bg-[#160300] text-[#FFEDD2] hover:bg-[#FFEDD2] hover:text-[#160300] text-xs font-black tracking-widest"
          >
            {skipped ? <><Plus size={14} strokeWidth={3} /> RESUME</> : <><X size={14} strokeWidth={3} /> SKIP</>}
          </button>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative border-b-4 border-[#FFEDD2]">
        <div className="px-5 pt-10 pb-6">
          <p className="text-xs font-bold tracking-[0.4em] text-[#FF5A00] mb-4">VINTAGE • SECONDHAND • RESURRECTED</p>
          <h1 className="blackface leading-[0.86] tracking-tight text-[18vw] sm:text-[13vw] lg:text-[10vw]">
            OLD<br />
            CLOTHES.<br />
            <span className="text-[#FF5A00]">NEW</span><br />
            SPELLS.
          </h1>
          <div className="relative mt-2">
            <span className="scrawl text-[#FFB100] text-[8vw] sm:text-[5vw] lg:text-[3.5vw] leading-none inline-block -rotate-3 origin-left">
              wear what came before ↯
            </span>
          </div>
        </div>

        {/* full-bleed hero image strip */}
        <div className="relative h-[42vh] border-t-4 border-[#FFEDD2] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
            alt="Vintage rail"
            className="img-occult absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#FF5A00] text-[#160300] px-5 py-3 flex items-center gap-3">
            <ArrowDownRight size={18} strokeWidth={3} />
            <span className="blackface text-sm tracking-tight">3 RITES OF PASSAGE BELOW</span>
          </div>
          <div className="absolute top-0 right-0 bg-[#160300] border-l-4 border-b-4 border-[#FFEDD2] px-4 py-2">
            <span className="scrawl text-[#FFB100] text-lg">est. nowhere, 1971 → ∞</span>
          </div>
        </div>
      </section>

      {/* ============ STEP SELECTOR ============ */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-[#FFEDD2]">
        {/* left: rows */}
        <div className="flex flex-col">
          {STEPS.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setActive(i)}
              className={`row-step group text-left px-5 py-6 border-b-4 last:border-b-0 md:last:border-b-4 lg:last:border-b-0 border-[#FFEDD2] flex items-start gap-4 ${
                active === i ? 'bg-[#FF5A00] text-[#160300]' : 'bg-[#160300] text-[#FFEDD2] hover:bg-[#3A0B00]'
              }`}
            >
              <span className={`blackface text-3xl leading-none ${active === i ? 'text-[#160300]' : 'text-[#C92C00]'}`}>{s.n}</span>
              <div className="flex-1">
                <h2 className="blackface text-xl sm:text-2xl tracking-tight leading-none">{s.title}</h2>
                <span className={`scrawl text-base ${active === i ? 'text-[#160300]/80' : 'text-[#FFB100]'}`}>{s.scrawl}</span>
              </div>
              <ArrowRight
                size={22}
                strokeWidth={3}
                className={`mt-1 transition-transform duration-200 group-hover:translate-x-1 ${active === i ? 'opacity-100' : 'opacity-30'}`}
              />
            </button>
          ))}
        </div>

        {/* right: active panel */}
        <div className="relative border-t-4 md:border-t-0 md:border-l-4 border-[#FFEDD2] bg-[#2A0600]">
          <div className="relative h-[34vh] overflow-hidden border-b-4 border-[#FFEDD2]">
            <img key={step.img} src={step.img} alt={step.title} className="img-occult absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 bg-[#FFB100] text-[#160300] px-3 py-2 flex items-center gap-2">
              <Icon size={16} strokeWidth={3} />
              <span className="blackface text-xs tracking-tight">RITE {step.n}</span>
            </div>
          </div>
          <div className="px-5 py-7">
            <span className="scrawl text-2xl text-[#FF5A00] block mb-3 -rotate-1 origin-left">“{step.scrawl}”</span>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-[#FFEDD2]/90 max-w-prose">{step.body}</p>

            <div className="mt-6 flex items-center gap-0">
              {STEPS.map((s, i) => (
                <button
                  key={s.n}
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${s.n}`}
                  className={`hard-btn h-3 flex-1 border-2 border-[#FFEDD2] ${i === active ? 'bg-[#FF5A00]' : 'bg-transparent hover:bg-[#FFB100]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO STRIP ============ */}
      <section className="bg-[#FFB100] text-[#160300] border-b-4 border-[#FFEDD2] px-5 py-10">
        <p className="blackface leading-[0.95] tracking-tight text-[7.5vw] sm:text-[5vw] lg:text-[3.4vw]">
          NOTHING HERE IS NEW.<br />
          THAT IS THE MAGIC TRICK.<br />
          <span className="scrawl font-normal text-[#C92C00]">— the archive remembers everything you forgot to want.</span>
        </p>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-b-4 border-[#FFEDD2]">
        <button
          className="hard-btn w-full bg-[#FF5A00] text-[#160300] hover:bg-[#FFEDD2] px-5 py-8 flex items-center justify-between"
          onClick={() => setActive((active + 1) % 3)}
        >
          <span className="blackface text-3xl sm:text-5xl tracking-tight text-left leading-none">ENTER THE<br className="sm:hidden" /> ARCHIVE</span>
          <ArrowRight size={42} strokeWidth={3} />
        </button>
        <div className="grid grid-cols-2">
          <button className="hard-btn border-t-4 border-r-2 border-[#FFEDD2] px-5 py-4 text-xs font-black tracking-[0.3em] hover:bg-[#3A0B00]">
            CREATE ACCOUNT
          </button>
          <button className="hard-btn border-t-4 border-l-2 border-[#FFEDD2] px-5 py-4 text-xs font-black tracking-[0.3em] text-[#FFB100] hover:bg-[#3A0B00]">
            BROWSE AS GHOST
          </button>
        </div>
      </section>

      {/* ============ FOOTER TICKER ============ */}
      <footer className="bg-[#160300]">
        <div className="flex flex-wrap">
          {['LEVI’S 501 ’84', 'DEAD-STOCK SILK', 'OXBLOOD DOCS', 'HAND-MENDED WOOL', 'CARHARTT CHORE ’96', 'MOTH-KISSED CASHMERE', 'UNNAMED LEATHER', 'YOUR NEXT SKIN'].map((t) => (
            <span key={t} className="ticker-cell px-4 py-3 text-[11px] font-bold tracking-[0.2em] opacity-50 border-r-2 border-b-2 border-[#3A0B00] cursor-default">
              ✶ {t}
            </span>
          ))}
        </div>
        <div className="px-5 py-5 flex items-center justify-between border-t-4 border-[#FFEDD2]">
          <span className="scrawl text-xl text-[#FF5A00]">transmute</span>
          <span className="text-[10px] font-bold tracking-[0.35em] text-[#FFEDD2]/50">CASE STUDY — ONBOARDING / 2024</span>
        </div>
      </footer>
    </div>
  );
}
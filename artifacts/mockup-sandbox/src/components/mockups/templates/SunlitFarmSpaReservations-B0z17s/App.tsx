import { useState } from 'react';
import { ArrowDownRight, Asterisk, Check, Flower2, MapPin, Sprout, X } from 'lucide-react';

const TREATMENTS = [
  {
    id: 't1',
    name: 'The Mud Slut',
    sub: 'Fermented river-clay facial. We dig it Tuesday, you wear it Saturday.',
    mins: 75,
    price: 185,
    tag: 'MOST BOOKED',
  },
  {
    id: 't2',
    name: 'Filthy Rich',
    sub: 'Raw honey + goat milk body wrap. The goats are named Brenda and Sin.',
    mins: 90,
    price: 240,
    tag: 'NEW',
  },
  {
    id: 't3',
    name: 'Bare-Faced Liar',
    sub: 'Barrier-reset facial for skin ruined by 12-step routines you read about online.',
    mins: 60,
    price: 145,
    tag: null,
  },
  {
    id: 't4',
    name: 'Rolled in Hay',
    sub: 'Oat-husk full-body exfoliation. Yes, it is exactly what it sounds like.',
    mins: 75,
    price: 195,
    tag: null,
  },
  {
    id: 't5',
    name: 'Nettle Confessional',
    sub: 'Stinging-nettle scalp ritual + a 20 minute silence we will not fill for you.',
    mins: 45,
    price: 110,
    tag: 'CHEAP THRILL',
  },
];

const DAYS = [
  { id: 'd1', dow: 'TUE', date: '11', month: 'JUN', slots: 6 },
  { id: 'd2', dow: 'WED', date: '12', month: 'JUN', slots: 4 },
  { id: 'd3', dow: 'THU', date: '13', month: 'JUN', slots: 9 },
  { id: 'd4', dow: 'FRI', date: '14', month: 'JUN', slots: 2 },
  { id: 'd5', dow: 'SAT', date: '15', month: 'JUN', slots: 7 },
  { id: 'd6', dow: 'SUN', date: '16', month: 'JUN', slots: 0 },
];

const TIMES = [
  { t: '8:30', label: 'with the hens', taken: false },
  { t: '9:45', label: 'dew still on', taken: false },
  { t: '11:00', label: 'late riser', taken: true },
  { t: '12:30', label: 'lunch skipper', taken: false },
  { t: '14:15', label: 'golden-ish hour', taken: false },
  { t: '15:30', label: 'tea refusal', taken: true },
  { t: '17:00', label: 'before milking', taken: false },
  { t: '18:45', label: 'last light', taken: false },
];

const FLORAL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%233D4A2A' stroke-width='1' opacity='0.18'%3E%3Ccircle cx='30' cy='30' r='6'/%3E%3Ccircle cx='30' cy='18' r='5'/%3E%3Ccircle cx='30' cy='42' r='5'/%3E%3Ccircle cx='18' cy='30' r='5'/%3E%3Ccircle cx='42' cy='30' r='5'/%3E%3Ccircle cx='90' cy='90' r='6'/%3E%3Ccircle cx='90' cy='78' r='5'/%3E%3Ccircle cx='90' cy='102' r='5'/%3E%3Ccircle cx='78' cy='90' r='5'/%3E%3Ccircle cx='102' cy='90' r='5'/%3E%3Cpath d='M30 48 Q34 70 60 78 Q86 86 90 108' /%3E%3Cpath d='M48 60 q8 -6 14 0 q-6 8 -14 0' fill='%233D4A2A' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`;

export default function App() {
  const [treatmentId, setTreatmentId] = useState('t1');
  const [dayId, setDayId] = useState('d3');
  const [time, setTime] = useState('9:45');
  const [extras, setExtras] = useState({ eggs: true, silence: false });
  const [confirmed, setConfirmed] = useState(false);

  const treatment = TREATMENTS.find((t) => t.id === treatmentId);
  const day = DAYS.find((d) => d.id === dayId);
  const extraTotal = (extras.eggs ? 9 : 0) + (extras.silence ? 0 : 0);
  const total = (treatment ? treatment.price : 0) + extraTotal;

  return (
    <div className="fp-root min-h-screen bg-[#F4ECDB] text-[#2B2118]">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,900;1,9..144,500;1,9..144,900&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .fp-root { font-family: 'Courier Prime', monospace; }
        .fp-display { font-family: 'Fraunces', serif; font-weight: 900; letter-spacing: -0.03em; }
        .fp-disp-it { font-family: 'Fraunces', serif; font-weight: 900; font-style: italic; }
        .fp-floral { background-image: ${FLORAL}; background-size: 120px 120px; }
        .fp-sticker { box-shadow: 4px 4px 0 #2B2118; }
        .fp-card { box-shadow: 8px 8px 0 #2B2118; }
        .fp-card-green { box-shadow: 8px 8px 0 #3D4A2A; }
        .fp-strike { text-decoration: line-through; text-decoration-thickness: 2px; }
        .fp-root ::selection { background: #C1492F; color: #F4ECDB; }
        .fp-doily { border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; }
      `,
        }}
      />

      {/* ---------- TOP STRIP ---------- */}
      <div className="bg-[#2B2118] text-[#F4ECDB] text-[11px] tracking-[0.18em] uppercase whitespace-nowrap overflow-hidden py-2 px-4">
        Farm-pressed · No apologies · Soil under our fingernails since 1997 · Your dermatologist will hate this · Filth & Petal · Farm-pressed · No apologies · Soil under our fingernails since 1997 · Your dermatologist will hate this
      </div>

      {/* ---------- HEADER ---------- */}
      <header className="flex items-center justify-between px-5 md:px-10 py-5 border-b-2 border-[#2B2118] bg-[#F4ECDB] relative z-40">
        <div className="flex items-center gap-3">
          <Flower2 className="w-7 h-7 text-[#C1492F]" strokeWidth={2.5} />
          <span className="fp-display text-2xl md:text-3xl leading-none">FILTH & PETAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.15em]">
          <span className="cursor-pointer hover:text-[#C1492F]">The Dirt</span>
          <span className="cursor-pointer hover:text-[#C1492F]">The Goats</span>
          <span className="cursor-pointer hover:text-[#C1492F]">Refusals</span>
        </nav>
        <a
          href="#book"
          className="bg-[#C1492F] text-[#F4ECDB] px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] border-2 border-[#2B2118] fp-sticker hover:bg-[#2B2118] transition-colors"
        >
          Reserve a slot
        </a>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="fp-floral relative px-5 md:px-10 pt-10 md:pt-16 pb-44 md:pb-56 overflow-hidden">
        {/* photo behind type */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=1100&fit=crop"
          alt="meadow"
          className="absolute right-[4%] top-8 w-[44%] max-w-[520px] h-[420px] md:h-[540px] object-cover border-2 border-[#2B2118] z-0 hidden sm:block"
        />
        {/* small overlapping doily photo */}
        <img
          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop"
          alt="balm jar"
          className="fp-doily absolute right-[34%] top-[300px] md:top-[330px] w-44 h-44 md:w-56 md:h-56 object-cover border-2 border-[#2B2118] z-20 hidden md:block"
        />

        <p className="relative z-30 text-[12px] uppercase tracking-[0.25em] mb-4 max-w-md">
          Reservations · Hollow Lane Farm, Somerset · Treatments served raw, never filtered
        </p>

        <h1 className="fp-display relative z-10 text-[16vw] leading-[0.8] uppercase">
          Come<br />
          Get<br />
          <span className="text-[#C1492F]">Dirty.</span>
        </h1>

        {/* sticker overlapping headline */}
        <div className="absolute z-30 left-[42%] top-[24%] -rotate-6 bg-[#E9C46A] border-2 border-[#2B2118] fp-sticker px-5 py-4 max-w-[230px]">
          <p className="fp-disp-it text-xl leading-tight">100% organic.</p>
          <p className="fp-disp-it text-xl leading-tight">0% polite.</p>
          <p className="text-[10px] uppercase tracking-[0.18em] mt-2">certified by no one we respect</p>
        </div>

        {/* second sticker */}
        <div className="absolute z-30 left-[8%] bottom-[120px] rotate-3 bg-[#3D4A2A] text-[#F4ECDB] border-2 border-[#2B2118] fp-sticker px-5 py-3 hidden md:block">
          <p className="text-[12px] uppercase tracking-[0.18em] flex items-center gap-2">
            <Sprout className="w-4 h-4" /> Mud harvested 40 ft from your face
          </p>
        </div>

        <div className="relative z-30 mt-8 flex items-center gap-3 text-[13px] uppercase tracking-[0.2em]">
          <ArrowDownRight className="w-5 h-5 text-[#C1492F]" />
          Book below. Or keep buying serums named after molecules.
        </div>
      </section>

      {/* ---------- BOOKING PANEL (overlaps hero) ---------- */}
      <section id="book" className="relative z-30 px-5 md:px-10 -mt-32 md:-mt-40 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#FBF6E9] border-2 border-[#2B2118] fp-card relative">
            {/* panel header */}
            <div className="flex flex-wrap items-end justify-between gap-4 px-6 md:px-10 pt-8 pb-6 border-b-2 border-[#2B2118]">
              <div>
                <h2 className="fp-display text-4xl md:text-6xl leading-[0.85] uppercase">The Reservation Ledger</h2>
                <p className="text-[12px] uppercase tracking-[0.2em] mt-3 text-[#5a4d3c]">
                  Step 01 — pick your filth · Step 02 — pick your hour · Step 03 — show up barefaced
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] bg-[#E9C46A] border-2 border-[#2B2118] px-3 py-2">
                <MapPin className="w-4 h-4" /> Hollow Lane Farm · barn no. 3
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* -------- TREATMENTS -------- */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[#2B2118]">
                <div className="px-6 md:px-8 py-4 border-b-2 border-[#2B2118] flex items-center justify-between">
                  <span className="fp-display text-xl uppercase">01 / Treatments</span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#5a4d3c]">5 rituals</span>
                </div>
                <div>
                  {TREATMENTS.map((t) => {
                    const active = t.id === treatmentId;
                    return (
                      <button
                        key={t.id}
                        onClick={() => { setTreatmentId(t.id); setConfirmed(false); }}
                        className={`w-full text-left px-6 md:px-8 py-5 border-b border-[#2B2118]/30 last:border-b-0 transition-colors ${
                          active ? 'bg-[#3D4A2A] text-[#F4ECDB]' : 'hover:bg-[#F0E6CE]'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="fp-display text-2xl leading-none">{t.name}</span>
                          <span className="fp-display text-xl">${t.price}</span>
                        </div>
                        <p className={`text-[12px] mt-2 leading-relaxed ${active ? 'text-[#F4ECDB]/80' : 'text-[#5a4d3c]'}`}>
                          {t.sub}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-1 border ${active ? 'border-[#F4ECDB]/60' : 'border-[#2B2118]'}`}>
                            {t.mins} min
                          </span>
                          {t.tag && (
                            <span className={`text-[10px] uppercase tracking-[0.15em] px-2 py-1 ${active ? 'bg-[#E9C46A] text-[#2B2118]' : 'bg-[#C1492F] text-[#F4ECDB]'}`}>
                              {t.tag}
                            </span>
                          )}
                          {active && <Check className="w-4 h-4 ml-auto" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* -------- DATE + TIME -------- */}
              <div className="lg:col-span-7 relative">
                <div className="px-6 md:px-8 py-4 border-b-2 border-[#2B2118] flex items-center justify-between">
                  <span className="fp-display text-xl uppercase">02 / Hour of Reckoning</span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#5a4d3c]">week of jun 11</span>
                </div>

                {/* day strip */}
                <div className="grid grid-cols-6 border-b-2 border-[#2B2118]">
                  {DAYS.map((d) => {
                    const active = d.id === dayId;
                    const dead = d.slots === 0;
                    return (
                      <button
                        key={d.id}
                        disabled={dead}
                        onClick={() => { setDayId(d.id); setConfirmed(false); }}
                        className={`py-4 border-r border-[#2B2118]/30 last:border-r-0 text-center transition-colors ${
                          dead
                            ? 'bg-[#E5DAC1] text-[#2B2118]/35 cursor-not-allowed'
                            : active
                            ? 'bg-[#C1492F] text-[#F4ECDB]'
                            : 'hover:bg-[#F0E6CE]'
                        }`}
                      >
                        <div className="text-[10px] uppercase tracking-[0.2em]">{d.dow}</div>
                        <div className={`fp-display text-3xl leading-none mt-1 ${dead ? 'fp-strike' : ''}`}>{d.date}</div>
                        <div className="text-[10px] mt-1 uppercase tracking-wider">
                          {dead ? 'church' : `${d.slots} left`}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* time grid */}
                <div className="px-6 md:px-8 py-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#5a4d3c] mb-4">
                    {day ? `${day.dow} ${day.date} JUN` : ''} · times follow the rooster, not your calendar app
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIMES.map((s) => {
                      const active = s.t === time;
                      return (
                        <button
                          key={s.t}
                          disabled={s.taken}
                          onClick={() => { setTime(s.t); setConfirmed(false); }}
                          className={`border-2 px-3 py-3 text-left transition-colors ${
                            s.taken
                              ? 'border-[#2B2118]/25 text-[#2B2118]/35 cursor-not-allowed'
                              : active
                              ? 'border-[#2B2118] bg-[#E9C46A] fp-sticker'
                              : 'border-[#2B2118] hover:bg-[#F0E6CE]'
                          }`}
                        >
                          <div className="fp-display text-xl leading-none flex items-center justify-between">
                            {s.t}
                            {s.taken && <X className="w-3.5 h-3.5" />}
                          </div>
                          <div className="text-[10px] uppercase tracking-[0.12em] mt-1.5">
                            {s.taken ? 'snatched' : s.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* extras */}
                  <div className="mt-7 border-t border-[#2B2118]/30 pt-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#5a4d3c] mb-3">Add-ons we barely endorse</p>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer text-[13px]">
                        <span
                          onClick={() => setExtras((e) => ({ ...e, eggs: !e.eggs }))}
                          className={`w-5 h-5 border-2 border-[#2B2118] inline-flex items-center justify-center ${extras.eggs ? 'bg-[#C1492F]' : 'bg-transparent'}`}
                        >
                          {extras.eggs && <Check className="w-3.5 h-3.5 text-[#F4ECDB]" />}
                        </span>
                        Half-dozen eggs from Brenda's coop, handed to you wet — <b>$9</b>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-[13px]">
                        <span
                          onClick={() => setExtras((e) => ({ ...e, silence: !e.silence }))}
                          className={`w-5 h-5 border-2 border-[#2B2118] inline-flex items-center justify-center ${extras.silence ? 'bg-[#C1492F]' : 'bg-transparent'}`}
                        >
                          {extras.silence && <Check className="w-3.5 h-3.5 text-[#F4ECDB]" />}
                        </span>
                        Therapist says absolutely nothing the entire time — <b>free, our pleasure</b>
                      </label>
                    </div>
                  </div>
                </div>

                {/* -------- SUMMARY CARD, overlapping bottom-right -------- */}
                <div className="relative lg:absolute lg:-bottom-16 lg:-right-8 z-40 mx-6 mb-6 lg:m-0 lg:w-[380px] bg-[#3D4A2A] text-[#F4ECDB] border-2 border-[#2B2118] fp-card-green p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#F4ECDB]/70">03 / The Damage</span>
                    <Asterisk className="w-4 h-4 text-[#E9C46A]" />
                  </div>
                  <div className="fp-display text-3xl leading-[0.9] mt-3">{treatment?.name}</div>
                  <div className="text-[12px] uppercase tracking-[0.15em] mt-2 text-[#F4ECDB]/80">
                    {day?.dow} {day?.date} JUN · {time} · {treatment?.mins} min
                  </div>
                  <div className="mt-4 border-t border-[#F4ECDB]/30 pt-3 space-y-1.5 text-[13px]">
                    <div className="flex justify-between"><span>{treatment?.name}</span><span>${treatment?.price}</span></div>
                    {extras.eggs && <div className="flex justify-between"><span>Brenda's eggs</span><span>$9</span></div>}
                    {extras.silence && <div className="flex justify-between"><span>Blessed silence</span><span>$0</span></div>}
                    <div className="flex justify-between text-[#F4ECDB]/60"><span>Soil tax</span><span>included in the soil</span></div>
                  </div>
                  <div className="flex justify-between items-end mt-3 border-t border-[#F4ECDB]/30 pt-3">
                    <span className="text-[11px] uppercase tracking-[0.2em]">Total</span>
                    <span className="fp-display text-4xl leading-none">${total}</span>
                  </div>
                  <button
                    onClick={() => setConfirmed(true)}
                    className={`mt-5 w-full border-2 border-[#2B2118] py-3.5 text-[13px] uppercase tracking-[0.2em] fp-sticker transition-colors ${
                      confirmed ? 'bg-[#E9C46A] text-[#2B2118]' : 'bg-[#C1492F] text-[#F4ECDB] hover:bg-[#a93e27]'
                    }`}
                  >
                    {confirmed ? '✓ Held — Brenda has been told' : 'Claim this hour'}
                  </button>
                  <p className="text-[10px] mt-3 text-[#F4ECDB]/60 leading-relaxed">
                    No deposit. No-shows are read aloud at the village fete. Arrive with a clean face or we'll start the clock anyway.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO STRIP ---------- */}
      <section className="fp-floral border-t-2 border-[#2B2118] px-5 md:px-10 py-16 relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px">
          {[
            ['No retinol.', 'We have nettles, river clay, and an opinion problem.'],
            ['No "glow".', 'You will leave looking like you slept outdoors. Because you can, in the orchard, for $30.'],
            ['No refunds.', 'The mud goes back to the riverbank either way. Nature is circular; our policy is too.'],
          ].map(([h, p], i) => (
            <div key={i} className="bg-[#FBF6E9] border-2 border-[#2B2118] p-6 md:-ml-[2px] first:ml-0">
              <h3 className="fp-disp-it text-3xl leading-none">{h}</h3>
              <p className="text-[13px] mt-3 leading-relaxed text-[#5a4d3c]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-[#2B2118] text-[#F4ECDB] px-5 md:px-10 pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="fp-display text-[14vw] leading-[0.8] uppercase text-[#E9C46A]">Filth<span className="text-[#C1492F]">&</span>Petal</h2>
          <div className="flex flex-wrap justify-between gap-6 mt-8 text-[11px] uppercase tracking-[0.18em] text-[#F4ECDB]/70">
            <span>Hollow Lane Farm, Somerset · open dawn to dusk, closed for lambing</span>
            <span>est. 1997 · banned from two county fairs</span>
            <span>bookings@filthandpetal.farm</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
import './fonts.css';
import asset0 from "./assets/kosmo-art1.png";
import asset1 from "./assets/kosmo-art2.png";
import asset2 from "./assets/kosmo-art3.png";
import asset3 from "./assets/kosmo-art4.png";
import asset4 from "./assets/kosmo-art5.png";
import asset5 from "./assets/kosmo-portrait1.png";
import asset6 from "./assets/kosmo-portrait2.png";
import asset7 from "./assets/kosmo-portrait3.png";

import React from 'react';
import { Sparkles, MousePointer2 } from 'lucide-react';

export default function KosmoStudio() {
  const artCards = [
    { src: asset0, rot: '-8deg', top: '40px', w: '110px', h: '130px' },
    { src: asset1, rot: '6deg', top: '10px', w: '120px', h: '120px' },
    { src: asset2, rot: '-4deg', top: '0px', w: '150px', h: '160px' },
    { src: asset3, rot: '7deg', top: '8px', w: '130px', h: '135px' },
    { src: asset4, rot: '-9deg', top: '46px', w: '120px', h: '120px' },
  ];

  return (
    <div className="w-full h-full overflow-hidden relative bg-[#e9ebef] flex items-center justify-center font-['DM_Sans'] antialiased box-border">
      <div className="w-[1180px] h-[840px] bg-white rounded-[28px] overflow-hidden relative shadow-sm flex flex-col">

        {/* TOP WHITE SECTION */}
        <div className="relative flex-1 px-12 pt-8">

          {/* Nav row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-[#2D6BFF]/40 bg-[#2D6BFF]/5 px-4 py-1.5">
              <Sparkles size={16} className="text-[#2D6BFF]" strokeWidth={2.5} />
              <span className="text-[13px] font-bold tracking-[0.2em] text-[#2D6BFF]">NEW</span>
            </div>

            <nav className="flex items-center gap-10 text-[14px] font-medium text-[#0E0E10]">
              <a href="#" className="hover:text-[#2D6BFF] transition-colors">Work</a>
              <a href="#" className="hover:text-[#2D6BFF] transition-colors">About</a>
              <a href="#" className="hover:text-[#2D6BFF] transition-colors">Contact</a>
            </nav>

            <button className="rounded-md bg-[#0E0E10] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#2D6BFF] transition-colors">
              Start a Project
            </button>
          </div>

          {/* Centered label pill */}
          <div className="mt-10 flex justify-center">
            <span className="rounded-full bg-[#0E0E10] px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white uppercase">
              Kosmo Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-center text-[#0E0E10] font-['DM_Sans'] font-bold text-[58px] leading-[1.04] tracking-[-0.02em] max-w-[860px] mx-auto">
            We craft bold ideas and<br />visuals that truly work
          </h1>

          {/* Subparagraph */}
          <p className="mt-5 text-center text-[14px] leading-relaxed text-[#6b6f76] max-w-[480px] mx-auto">
            From the first sketch to the final pixel, we shape brands that feel
            unmistakable and built to perform across every screen and surface.
          </p>

          {/* Scattered art cards */}
          <div className="mt-10 flex items-start justify-center gap-7 relative">
            {artCards.map((c, i) => (
              <div
                key={i}
                className="rounded-md overflow-hidden shadow-md border-4 border-white bg-white"
                style={{ transform: `rotate(${c.rot})`, marginTop: c.top, width: c.w, height: c.h }}
              >
                <img src={c.src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Cursor pointer graphic */}
            <MousePointer2
              size={42}
              className="absolute right-[150px] top-[150px] text-[#0E0E10] fill-white drop-shadow-md"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* BOTTOM DARK SECTION */}
        <div className="bg-[#0E0E10] px-12 pt-9 pb-9 rounded-b-[28px]">
          <div className="flex items-start justify-between">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#8a8d94] uppercase mt-2 flex items-center gap-2">
              <span className="inline-block w-5 h-px bg-[#8a8d94]" /> Meet the team
            </span>
            <h2 className="text-white text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] max-w-[640px] text-left">
              We are the explorers, the dreamers, and the builders who guide your
              brand toward its next destination.
            </h2>
          </div>

          {/* Portraits row */}
          <div className="mt-7 grid grid-cols-3 gap-5">
            {[
              asset5,
              asset6,
              asset7,
            ].map((src, i) => (
              <div key={i} className="h-[150px] rounded-lg overflow-hidden bg-[#1a1a1d]">
                <img src={src} alt="Team member" className="w-full h-full object-cover object-top" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

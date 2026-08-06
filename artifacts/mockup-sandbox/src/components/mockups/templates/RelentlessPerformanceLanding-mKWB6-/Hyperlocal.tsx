import React from 'react';

export default function Hyperlocal() {
  return (
    <div className="w-full h-full bg-[#f4f4f0] text-[#101010] overflow-hidden flex flex-col relative font-['Space_Grotesk',sans-serif] antialiased box-border">
      {/* Top Nav */}
      <header className="flex justify-between items-center w-full px-12 py-10 z-20 relative border-b border-[#101010]/10">
        <div className="font-black text-2xl uppercase tracking-tighter">
          Hyperlocal.
        </div>
        <nav className="flex gap-12 font-bold text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-[#FF3300] transition-colors">Capabilities</a>
          <a href="#" className="hover:text-[#FF3300] transition-colors">Case Studies</a>
          <a href="#" className="hover:text-[#FF3300] transition-colors">Insights</a>
        </nav>
        <button className="bg-[#101010] text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#FF3300] transition-colors">
          Start Growth
        </button>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-12 relative z-10 w-full h-full">
        {/* Left Column - Headline & Copy */}
        <div className="col-span-8 p-12 flex flex-col justify-between border-r border-[#101010]/10">
          <div className="space-y-6">
            <h1 className="text-[120px] leading-[0.85] font-black tracking-tighter uppercase text-[#101010]">
              Relentless <br />
              Performance <br />
              <span className="text-[#FF3300]">At Scale.</span>
            </h1>
            <p className="text-[20px] font-medium leading-relaxed max-w-xl text-[#101010]/80 mt-12">
              We engineer exponential growth for category-defining brands through data-driven acquisition, conversion optimization, and aggressive testing.
            </p>
          </div>

          {/* Client Ticker */}
          <div className="mt-auto border-t border-[#101010]/10 pt-8 w-full flex items-center justify-between text-lg font-bold text-[#101010]/50 uppercase tracking-widest">
            <span>Ramp</span>
            <span>Scale</span>
            <span>Brex</span>
            <span>Vercel</span>
            <span>Linear</span>
          </div>
        </div>

        {/* Right Column - Metrics */}
        <div className="col-span-4 flex flex-col border-[#101010]/10">
          <div className="flex-1 p-12 border-b border-[#101010]/10 flex flex-col justify-center items-start bg-[#101010] text-[#f4f4f0]">
            <h2 className="text-[140px] leading-none font-black tracking-tighter text-[#FF3300] -ml-2">
              +312%
            </h2>
            <div className="font-bold text-xl uppercase tracking-wider mt-4">
              Avg. YoY Revenue Growth
            </div>
            <div className="text-sm font-medium mt-4 text-[#f4f4f0]/70 max-w-[250px]">
              Across our portfolio of Series B through IPO partners in 2029.
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2">
            <div className="p-8 border-r border-[#101010]/10 flex flex-col justify-between">
              <div className="text-[64px] font-black tracking-tighter leading-none">
                4.2x
              </div>
              <div className="font-bold text-sm uppercase tracking-widest text-[#101010]/60 mt-4">
                ROAS Lift
              </div>
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div className="text-[64px] font-black tracking-tighter leading-none">
                -41%
              </div>
              <div className="font-bold text-sm uppercase tracking-widest text-[#101010]/60 mt-4">
                CAC Reduction
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Grid Lines overlay (subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[1px] h-full bg-[#101010]/5 absolute left-[33.333%]"></div>
        <div className="w-[1px] h-full bg-[#101010]/5 absolute left-[66.666%]"></div>
        <div className="h-[1px] w-full bg-[#101010]/5 absolute top-[50%]"></div>
      </div>
    </div>
  );
}

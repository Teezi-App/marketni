import { motion } from "motion/react";
import { TrendingUp, Award, ShieldCheck, Zap, HelpCircle } from "lucide-react";
// @ts-ignore
import martinPortraitUrl from "../assets/images/Martin-walker-Marketni.png";

interface AboutAndStrategyProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function AboutAndStrategy({ onScrollToSection }: AboutAndStrategyProps) {
  return (
    <div id="about" className="bg-[#fcfcfc] text-neutral-900 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#84cc1605_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* =======================================================
            SECTION 1: I HELP BUSINESSES DISCOVER THEMSELVES
            ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Bio and heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-neutral-300 bg-neutral-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              <span className="font-mono text-[10px] text-neutral-900 uppercase font-black tracking-widest">
                I'm Martin Walker
              </span>
            </div>
 
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-none text-neutral-950 font-display">
              I HELP BUSINESSES TO DISCOVER <span className="text-neutral-950 relative inline-block border-b-4 border-brand-green">THEMSELVES.</span>
            </h2>

            <div className="space-y-4 text-neutral-700 leading-relaxed font-light text-base md:text-lg">
              <p>
                With over 20 years of experience across the UK, Middle East and Africa, I've launched startups, led marketing in multi-million dollar businesses and helped small businesses to go digital.
              </p>
              <p className="font-medium text-neutral-900">
                Marketni is how I help businesses to grow with clarity, direction and purpose.
              </p>
            </div>
          </div>

          {/* Center Block: Portrait with Green Paintbrush Stroke Overlay */}
          <div className="lg:col-span-4 flex justify-center relative py-6">
            <div className="relative w-full max-w-xs md:max-w-sm">
              
              {/* Artistic Paintstroke / Splashes programmatically rendered behind the image */}
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />
              
              {/* Realistic Paintbrush Stroke SVG Accent 1 */}
              <svg viewBox="0 0 500 500" className="absolute -left-12 top-6 w-[120%] h-[120%] -z-10 fill-brand-green/90 opacity-90 transform -rotate-12 pointer-events-none">
                <path d="M150,190 Q220,110 320,130 T450,220 Q480,290 400,380 T200,410 Q110,380 90,290 Z" className="blur-[1px]" />
                <path d="M80,240 Q150,220 220,310 T380,240 Q430,310 370,410 T180,390 Z" className="opacity-60 blur-[3px]" />
              </svg>

              {/* Black & White Portrait */}
              <div className="relative overflow-hidden bg-neutral-100 border-4 border-white shadow-2xl rounded-none transform rotate-1 group">
                <img
                  src={martinPortraitUrl}
                  alt="Martin Walker - Epsom Digital Marketing Consultant"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover filter grayscale contrast-115 brightness-95 hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Minimal Overlay Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-neutral-200">
                  <span className="font-mono text-[9px] text-neutral-850 font-black tracking-wider block">
                    MARTIN WALKER &bull; EPSOM
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Sidebar Statistics Panel */}
          <div className="lg:col-span-3 space-y-8 font-display">
            
            <div className="border-b border-neutral-200 pb-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl md:text-5xl font-black text-neutral-950 font-display">20+</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono block mt-1 font-bold">
                Years Experience
              </span>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl md:text-5xl font-black text-neutral-950 font-display">100+</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono block mt-1 font-bold">
                DIGITAL CAMPAIGNS LAUNCHED
              </span>
            </div>

            <div className="border-b border-neutral-200 pb-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl md:text-5xl font-black text-neutral-950 font-display">GLOBAL</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono block mt-1 font-bold">
                UK. Middle East. Africa.
              </span>
            </div>

            <div className="pb-4">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl md:text-3xl font-black text-neutral-950 leading-none">STARTUPS TO ENTERPRISE</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono block mt-1 font-bold">
                All Sizes. Real Impact.
              </span>
            </div>

          </div>

        </div>

        {/* =======================================================
            SECTION 2: STRATEGY FIRST. EVERYTHING ELSE FOLLOWS.
            ======================================================= */}
        <div id="approach" className="space-y-16 pt-12 border-t border-neutral-200">
          
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-3">
              <div className="font-mono text-xs text-neutral-800 uppercase font-black tracking-widest block">
                What I Do
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-950 font-display leading-none">
                STRATEGY FIRST.<br />
                EVERYTHING ELSE FOLLOWS.
              </h3>
            </div>
            
            <div className="lg:col-span-6 text-neutral-600 font-light text-base md:text-lg leading-relaxed pt-2">
              Websites, apps and marketing mean nothing without the right foundation. I start with your business, then build what actually moves it forward. No generic templated execution.
            </div>
          </div>

          {/* 4 columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 01 */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 rounded-none group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neutral-800 font-black tracking-widest">
                    01
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-brand-green shadow-sm">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-black tracking-tight text-neutral-950 font-display uppercase">
                  Business Strategy
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Uncover opportunities, solve real problems and create a roadmap for growth.
                </p>
              </div>
            </div>

            {/* Column 02 */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 rounded-none group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neutral-800 font-black tracking-widest">
                    02
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-brand-green shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-black tracking-tight text-neutral-950 font-display uppercase">
                  Brand Positioning
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Define who you are, why you're different and why customers should choose you.
                </p>
              </div>
            </div>

            {/* Column 03 */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 rounded-none group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neutral-800 font-black tracking-widest">
                    03
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-brand-green shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-black tracking-tight text-neutral-950 font-display uppercase">
                  Digital Experiences
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Websites and apps designed around people, built for performance and scalability.
                </p>
              </div>
            </div>

            {/* Column 04 */}
            <div className="bg-neutral-50/80 border border-neutral-200/60 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 rounded-none group">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-neutral-800 font-black tracking-widest">
                    04
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-950 flex items-center justify-center text-brand-green shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-black tracking-tight text-neutral-950 font-display uppercase">
                  Marketing Growth
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  Smart strategies that attract the right people, convert better and drive real results.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

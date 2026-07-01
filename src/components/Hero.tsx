import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
// @ts-ignore
import aiRobotUrl from "../assets/images/ai-robot.png";
// @ts-ignore
import marketniLogoUrl from "../assets/images/Marketni-logo.png";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#76ffeb] via-white to-[#f4e3ff] text-neutral-900 overflow-hidden flex flex-col justify-between font-sans">
      
      {/* Background Subtle Ambiance and Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* =======================================================
          SLICK NAVIGATION BAR (Matches uploaded UI)
          ======================================================= */}
      <nav className="relative z-20 border-b border-white/5 bg-[#121415] px-6 py-5 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onScrollToSection("hero")}>
          <img src={marketniLogoUrl} alt="Marketni Logo" className="h-9 md:h-11 w-auto object-contain" referrerPolicy="no-referrer" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-widest text-white leading-none">
              MARKETNI
            </span>
            <span className="font-mono text-[9px] text-brand-green tracking-wider mt-0.5 font-bold uppercase">
              By Martin Walker
            </span>
          </div>
        </div>

        {/* Center menu navigation links */}
        <div className="hidden md:flex items-center space-x-10 font-mono text-[11px] tracking-widest text-neutral-400 uppercase font-bold">
          <button 
            onClick={() => onScrollToSection("about")} 
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={() => onScrollToSection("approach")} 
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Approach
          </button>
          <button 
            onClick={() => onScrollToSection("services")} 
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => onScrollToSection("feeds")} 
            className="hover:text-brand-green transition-colors cursor-pointer"
          >
            Insights
          </button>
        </div>

        {/* Let's Talk CTA */}
        <div>
          <button
            onClick={() => onScrollToSection("contact")}
            className="font-mono text-[10px] font-bold border border-white/20 text-white hover:border-brand-green hover:text-brand-green transition-all duration-300 px-5 py-2 rounded-none tracking-widest cursor-pointer uppercase"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* =======================================================
          MAIN HERO HERO BODY CONTENT
          ======================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-grow w-full md:mt-4 md:mb-auto">
        
        {/* Left Column: Bold, brutalist typography and narrative */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-cyan-800 font-black uppercase tracking-widest block">
                Every business. Same story.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-neutral-950 leading-none font-display uppercase">
              AI CAN MAKE IT <br />
              LOOK GREAT. <br />
              NOT MAKE IT <br />
              <span className="text-[#9237fd]">DIFFERENT.</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-xl">
            <p className="text-base md:text-lg text-neutral-800 font-sans font-light leading-relaxed">
              Templates. Prompts. Platforms. Different industries. Same websites. No direction. No positioning. No growth.
            </p>
            
            <div className="pt-2">
              <span className="font-script text-[#9237fd] text-4xl font-bold inline-block transform -rotate-3 select-none pl-1">
                That's where I come in.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-4">
            <button
              onClick={() => onScrollToSection("strategy")}
              className="px-8 py-4 bg-[#6fffe9] text-black font-mono text-xs font-black tracking-widest hover:bg-neutral-950 hover:text-white transition-all duration-200 cursor-pointer text-center uppercase shadow-sm"
            >
              Get 3 Instant Campaigns &rarr;
            </button>
            <button
              onClick={() => onScrollToSection("approach")}
              className="px-8 py-4 bg-neutral-950 hover:bg-neutral-900 text-white font-mono text-xs font-bold tracking-widest transition-all duration-200 cursor-pointer text-center uppercase shadow-sm"
            >
              Discover Approach
            </button>
          </div>

        </div>

        {/* Right Column: High-Fidelity Floating AI Robot PNG */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: [0, -15, 0],
              scale: 1
            }}
            transition={{
              duration: 0.8,
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }
            }}
            className="w-full max-w-sm md:max-w-md aspect-[4/5] relative flex items-center justify-center py-6"
          >
            <div className="relative w-full h-full max-w-[340px] max-h-[420px] overflow-hidden rounded-2xl flex items-center justify-center p-4">
              {/* Soft ambient radial glow matching the theme */}
              <div className="absolute inset-0 bg-cyan-300/20 blur-[60px] rounded-full" />
              
              <img 
                src={aiRobotUrl} 
                alt="AI Robot" 
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_20px_50px_rgba(0,180,210,0.15)]" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Elegant high-tech background framing borders */}
            <div className="absolute inset-0 border border-neutral-900/5 rounded-3xl -z-10 pointer-events-none" />
            <div className="absolute -inset-4 border border-dashed border-neutral-900/5 rounded-[2rem] -z-10 pointer-events-none animate-[spin_120s_linear_infinite]" />
          </motion.div>

        </div>

      </div>

      {/* Hero Foot: Link downward */}
      <div 
        onClick={() => onScrollToSection("about")}
        className="relative z-10 w-full py-4 border-t border-neutral-900/10 bg-white/30 text-center flex items-center justify-center space-x-2 text-neutral-500 hover:text-cyan-700 cursor-pointer group transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
          Discover your true potential
        </span>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Sparkles, ArrowDown, MapPin, Award, TrendingUp, Compass } from "lucide-react";
// @ts-ignore
import martinPortraitUrl from "../assets/images/Martin-walker-Marketni.png";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {

  return (
    <section id="hero" className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-between">
      {/* Background Ambience Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glow highlight */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Sleek Navigation Bar */}
      <nav className="relative z-10 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md px-6 py-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onScrollToSection("hero")}>
          <span className="font-mono text-xl font-black tracking-widest text-white">
            MARKET<span className="text-cyan-400">NI</span>
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-xs tracking-wider text-neutral-450">
          <button 
            onClick={() => onScrollToSection("services")} 
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            01// SERVICES
          </button>
          <button 
            onClick={() => onScrollToSection("strategy")} 
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            02// INSTANT CAMPAIGN
          </button>
          <button 
            onClick={() => onScrollToSection("testimonials")} 
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            03// SUCCESSES
          </button>
          <button 
            onClick={() => onScrollToSection("feeds")} 
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            04// SOCIALS
          </button>
          <button 
            onClick={() => onScrollToSection("contact")} 
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            05// CONTACT
          </button>
        </div>

        <div>
          <button
            onClick={() => onScrollToSection("strategy")}
            className="font-mono text-xs font-bold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-4 py-2 rounded-none tracking-widest cursor-pointer shadow-[0_0_15px_rgba(111,255,233,0.1)] hover:shadow-[0_0_25px_rgba(111,255,233,0.3)]"
          >
            INSTANT CAMPAIGN &rarr;
          </button>
        </div>
      </nav>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center flex-grow">
        
        {/* Left Side: Bold, minimalist portrait */}
        <motion.div 
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group max-w-sm lg:max-w-md w-full">
            {/* Visual decorative lines / Brutalist accents */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg blur opacity-15 group-hover:opacity-35 transition duration-1000 group-hover:duration-205" />
            
            {/* Corner Bracket Accents (High-Tech Minimalist) */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
            
            <div className="relative bg-neutral-900 overflow-hidden border border-white/10 rounded-md shadow-2xl">
              <img
                src={martinPortraitUrl}
                alt="Martin Walker Portrait - Senior Marketing Consultant"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover filter contrast-[1.02] hover:scale-102 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
                <span className="font-mono text-[10px] text-cyan-400 tracking-widest block uppercase font-bold mb-1">
                  Founder & Principal
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white mb-1.5">
                  Martin Walker
                </h3>
                <div className="flex items-center space-x-2 text-xs text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Connecting locally &bull; Growing digitally</span>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -top-5 -right-5 bg-[#050505] border border-white/10 text-white p-3 rounded-none shadow-2xl font-mono text-center pointer-events-none hidden sm:block">
              <span className="block text-2xl font-bold text-cyan-400 tracking-tight">100%</span>
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest font-black">Local Focus</span>
            </div>
          </div>
        </motion.div>
 
        {/* Right Side: Bio and Bold Callout */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Creative Shoutout Label */}
          <div className="inline-flex items-center space-x-2 bg-neutral-900/85 border border-white/10 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
            <span className="font-mono text-[9px] sm:text-[10px] text-neutral-300 font-bold tracking-wider">
              CREATIVE AGENCY MEETS TECH-DRIVEN PERFORMANCE
            </span>
          </div>
 
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-tight lg:leading-none">
            I BRING THE STRATEGY OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-450">GLOBAL SENSATIONS</span> TO MAIN STREETS.
          </h1>
 
          <div className="space-y-4 max-w-2xl">
            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              Hey, I'm <strong className="text-white font-bold">Martin Walker</strong>. 
              After two decades designing high-acquisition digital engines for market leaders and hot scaleups, I founded <strong className="text-cyan-400">Marketni</strong>. I bring elite, modern growth consulting straight to your business, coupling hyper-targeted Local SEO and high-conversion assets with sleek automation systems built to turn local intent into booked revenue. 
            </p>
            <p className="text-xs sm:text-sm text-neutral-450 font-sans leading-relaxed">
              No bloated retainers, no generic agency packages, no fluff. Just pure, clean, data-driven execution that makes your brand the default regional choice.
            </p>
          </div>
 
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-5 font-mono text-left">
            <div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-white">&pound;18M+</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider block mt-1 font-bold">Growth Generated</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-white">100%</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider block mt-1 font-bold">Local Strategy</span>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-lg sm:text-2xl font-bold tracking-tight text-white">3.8x</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider block mt-1 font-bold font-semibold">Visibility Gain</span>
            </div>
          </div>
 
          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
            <button
              onClick={() => onScrollToSection("strategy")}
              className="px-8 py-4 bg-cyan-400 text-black font-mono text-xs font-black tracking-widest hover:bg-white hover:text-black hover:-translate-y-0.5 shadow-[0_4px_25px_rgba(111,255,233,0.25)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.35)] transition-all duration-200 cursor-pointer text-center"
            >
              GET 3 INSTANT CAMPAIGNS
            </button>
            <button
              onClick={() => onScrollToSection("contact")}
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white font-mono text-xs font-bold tracking-widest hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
            >
              BOOK CONSULT & COLLAB
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Foot: Tiny Prompt Accents */}
      <div 
        onClick={() => onScrollToSection("services")}
        className="relative z-10 w-full py-4 border-t border-white/10 bg-[#050505] text-center flex items-center justify-center space-x-2 text-neutral-500 hover:text-neutral-300 cursor-pointer group transition-colors"
      >
        <span className="font-mono text-[10px] tracking-wider uppercase">
          Scroll Down to See Core Services
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-neutral-600 group-hover:translate-y-0.5 duration-200" />
      </div>
    </section>
  );
}

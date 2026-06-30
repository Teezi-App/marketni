import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Layers, Briefcase, Sparkles, Coffee, Shield, Stethoscope, Home, Dumbbell, Star, ShoppingBag } from "lucide-react";
// @ts-ignore
import martinPortraitUrl from "../assets/images/Martin-walker-Marketni.png";
// @ts-ignore
import teeziGolfUrl from "../assets/images/teezi-golf.jpg";
// @ts-ignore
import hanburyHomeUrl from "../assets/images/hanbury-home.jpg";
// @ts-ignore
import cmbHomeUrl from "../assets/images/cmb-home.jpg";
// @ts-ignore
import electricRichHomeUrl from "../assets/images/electric-rich-home.jpg";
// @ts-ignore
import aiSlopMarketingUrl from "../assets/images/ai-slop-marketing.jpg";
// @ts-ignore
import aiBusinessKillerUrl from "../assets/images/ai-business-killer.jpg";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

interface WebPreviewCard {
  id: string;
  brand: string;
  tagline: string;
  actionText: string;
  category: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  icon: any;
  customDesign: ReactNode;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // The client mockup images showing full-bleed custom designs (no overlaid mock UI text)
  const previewCards: WebPreviewCard[] = [
    {
      id: "ai-business-killer",
      brand: "AI Business Killer",
      tagline: "",
      actionText: "",
      category: "",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Sparkles,
      customDesign: (
        <div className="w-full h-full bg-neutral-950 relative overflow-hidden">
          <img src={aiBusinessKillerUrl} alt="AI Business Killer" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      id: "teezi",
      brand: "TEEZI GOLF",
      tagline: "",
      actionText: "",
      category: "",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: ShoppingBag,
      customDesign: (
        <div className="w-full h-full bg-neutral-950 relative overflow-hidden">
          <img src={teeziGolfUrl} alt="Teezi Golf" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      id: "hanbury",
      brand: "HANBURY AUTO'S",
      tagline: "",
      actionText: "",
      category: "",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Home,
      customDesign: (
        <div className="w-full h-full bg-neutral-950 relative overflow-hidden">
          <img src={hanburyHomeUrl} alt="Hanbury Autos" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      id: "cmbepsom",
      brand: "CMB EPSOM",
      tagline: "",
      actionText: "",
      category: "",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Coffee,
      customDesign: (
        <div className="w-full h-full bg-neutral-950 relative overflow-hidden">
          <img src={cmbHomeUrl} alt="CMB Epsom" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      id: "electricrich",
      brand: "ELECTRICRICH",
      tagline: "",
      actionText: "",
      category: "",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Sparkles,
      customDesign: (
        <div className="w-full h-full bg-neutral-950 relative overflow-hidden">
          <img src={electricRichHomeUrl} alt="ElectricRich" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )
    }
  ];

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % previewCards.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + previewCards.length) % previewCards.length);
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#121415] text-white overflow-hidden flex flex-col justify-between font-sans">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src={aiSlopMarketingUrl} alt="Background" className="w-full h-full object-cover opacity-65" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121415]/15 via-[#121415]/60 to-[#121415]" />
      </div>

      {/* Background Subtle Ambiance and Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[linear-gradient(to_bottom,rgba(18,20,21,1),rgba(18,20,21,0))] pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* =======================================================
          SLICK NAVIGATION BAR (Matches uploaded UI)
          ======================================================= */}
      <nav className="relative z-20 border-b border-white/5 bg-[#121415]/95 backdrop-blur-md px-6 py-5 md:px-12 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => onScrollToSection("hero")}>
          <span className="font-display text-xl font-black tracking-widest text-white leading-none">
            MARKETNI
          </span>
          <span className="font-mono text-[9px] text-brand-green tracking-wider mt-0.5 font-bold uppercase">
            By Martin Walker
          </span>
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
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="font-mono text-xs text-brand-green font-black uppercase tracking-widest block">
                Every business. Same story.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-none font-display uppercase">
              AI CAN MAKE IT <br />
              LOOK GREAT. <br />
              NOT MAKE IT <br />
              <span className="text-brand-green">DIFFERENT.</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-xl">
            <p className="text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed">
              Templates. Prompts. Platforms. Different industries. Same websites. No direction. No positioning. No growth.
            </p>
            
            <div className="pt-2">
              <span className="font-script text-brand-green text-4xl font-bold inline-block transform -rotate-3 select-none pl-1">
                That's where I come in.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-4">
            <button
              onClick={() => onScrollToSection("strategy")}
              className="px-8 py-4 bg-brand-green text-black font-mono text-xs font-black tracking-widest hover:bg-white transition-all duration-200 cursor-pointer text-center uppercase"
            >
              Get 3 Instant Campaigns &rarr;
            </button>
            <button
              onClick={() => onScrollToSection("about")}
              className="px-8 py-4 bg-neutral-950 hover:bg-neutral-900 border border-white/10 text-white font-mono text-xs font-bold tracking-widest transition-all duration-200 cursor-pointer text-center uppercase"
            >
              Discover Approach
            </button>
          </div>

        </div>

        {/* Right Column: High-Fidelity 3D Perspective Device Slideshow */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative w-full">
          
          {/* Main 3D Card Stage container */}
          <div className="w-full max-w-sm md:max-w-md aspect-[4/5] relative [perspective:1200px] flex items-center justify-center py-6">
            
            <AnimatePresence mode="wait">
              {previewCards.map((card, idx) => {
                if (idx !== activeCardIndex) return null;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, rotateY: 30, rotateX: 10, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, rotateY: -15, rotateX: 8, scale: 1, x: 0 }}
                    exit={{ opacity: 0, rotateY: -30, rotateX: -5, scale: 0.9, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute w-full h-full max-w-[320px] max-h-[400px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden rounded-lg hover:[transform:rotateY(-5deg)_rotateX(2deg)] duration-500 cursor-grab active:cursor-grabbing"
                  >
                    {card.customDesign}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Depth reflections behind active card */}
            <div className="absolute w-[80%] h-[80%] -z-10 bg-neutral-950/40 border border-white/5 rounded-lg [transform:rotateY(-25deg)_rotateX(10deg)_translateZ(-40px)] opacity-60 pointer-events-none" />
            <div className="absolute w-[70%] h-[70%] -z-20 bg-neutral-950/20 border border-white/5 rounded-lg [transform:rotateY(-32deg)_rotateX(12deg)_translateZ(-80px)] opacity-30 pointer-events-none" />
          </div>

          {/* Interactive Slideshow Controls */}
          <div className="flex items-center justify-between w-full max-w-[320px] mt-8">
            
            {/* Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={handlePrevCard}
                className="p-3 bg-neutral-950 border border-white/10 hover:border-brand-green text-neutral-400 hover:text-brand-green transition rounded-full cursor-pointer"
                title="Previous Website Design"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNextCard}
                className="p-3 bg-neutral-950 border border-white/10 hover:border-brand-green text-neutral-400 hover:text-brand-green transition rounded-full cursor-pointer"
                title="Next Website Design"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex space-x-2">
              {previewCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCardIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === activeCardIndex ? "bg-brand-green w-4" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>

          </div>



        </div>

      </div>

      {/* Hero Foot: Link downward */}
      <div 
        onClick={() => onScrollToSection("about")}
        className="relative z-10 w-full py-4 border-t border-white/5 bg-[#121415] text-center flex items-center justify-center space-x-2 text-neutral-500 hover:text-brand-green cursor-pointer group transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase font-bold">
          See How We Disrupt the Status Quo
        </span>
      </div>
    </section>
  );
}

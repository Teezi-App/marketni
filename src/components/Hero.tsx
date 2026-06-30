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

  // The 4 distinct client mockups matching the services tabs in exact order
  const previewCards: WebPreviewCard[] = [
    {
      id: "teezi",
      brand: "TEEZI GOLF",
      tagline: "Bespoke Golf Connections Platform",
      actionText: "EXPLORE COLLECTION",
      category: "Bespoke E-Commerce",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: ShoppingBag,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between bg-neutral-950 relative overflow-hidden font-sans border border-brand-green/20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={teeziGolfUrl} alt="Teezi Golf" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          </div>
          {/* Top bar */}
          <div className="relative z-10 p-5 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-widest text-neutral-300 font-bold">TEEZI.GOLF</span>
            <span className="text-[8px] uppercase font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 border border-brand-green/20">Active</span>
          </div>
          {/* Bottom/Middle content */}
          <div className="relative z-10 p-5 mt-auto space-y-2">
            <span className="font-mono text-[8px] text-brand-green tracking-widest uppercase block">Bespoke Golf Connections</span>
            <h4 className="text-lg font-black tracking-tight text-white leading-tight uppercase">
              TEEZI GOLF PLATFORM
            </h4>
            <p className="text-[9px] text-neutral-300 font-light leading-relaxed">
              A bespoke golf networking platform connecting users in real-time with Google Antigravity & payment gateways.
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
              <span className="text-[9px] font-bold text-neutral-400 font-mono">500+ signups in 48h</span>
              <button className="px-2.5 py-1 bg-brand-green text-black text-[8px] font-black uppercase tracking-wider hover:bg-white transition-colors">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "hanbury",
      brand: "HANBURY AUTO'S",
      tagline: "Automotive Heritage & Service",
      actionText: "BOOK SLOT",
      category: "Local Service",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Home,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between bg-neutral-950 relative overflow-hidden font-sans border border-brand-green/20">
          <div className="absolute inset-0 z-0">
            <img src={hanburyHomeUrl} alt="Hanbury Autos" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          </div>
          <div className="relative z-10 p-5 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-widest text-neutral-300 font-bold">HANBURY AUTOS</span>
            <span className="text-[8px] uppercase font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 border border-brand-green/20">Heritage Focus</span>
          </div>
          <div className="relative z-10 p-5 mt-auto space-y-2">
            <span className="font-mono text-[8px] text-brand-green tracking-widest uppercase block">Business focus & Modernised approach</span>
            <h4 className="text-lg font-black tracking-tight text-white leading-tight uppercase">
              HANBURY AUTO'S
            </h4>
            <p className="text-[9px] text-neutral-300 font-light leading-relaxed">
              Bespoke re-design celebrating history, equipped with a custom database for slot booking and customer data management.
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
              <span className="text-[9px] font-bold text-neutral-400 font-mono">Expanded Marketing</span>
              <button className="px-2.5 py-1 bg-brand-green text-black text-[8px] font-black uppercase tracking-wider hover:bg-white transition-colors">
                BOOK SLOT
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "cmbepsom",
      brand: "CMB EPSOM",
      tagline: "Local Services & Digitalization",
      actionText: "VISIT SITE",
      category: "Local Business",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Coffee,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between bg-neutral-950 relative overflow-hidden font-sans border border-brand-green/20">
          <div className="absolute inset-0 z-0">
            <img src={cmbHomeUrl} alt="CMB Epsom" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          </div>
          <div className="relative z-10 p-5 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-widest text-neutral-300 font-bold">CMB EPSOM</span>
            <span className="text-[8px] uppercase font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 border border-brand-green/20">Go Digital</span>
          </div>
          <div className="relative z-10 p-5 mt-auto space-y-2">
            <span className="font-mono text-[8px] text-brand-green tracking-widest uppercase block">Go digital pack + Marketing strategy</span>
            <h4 className="text-lg font-black tracking-tight text-white leading-tight uppercase">
              CMB EPSOM
            </h4>
            <p className="text-[9px] text-neutral-300 font-light leading-relaxed">
              Providing full online presence from scratch, driving local customer reviews and optimizing location-based search marketing.
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
              <span className="text-[9px] font-bold text-neutral-400 font-mono">Location Strategy</span>
              <button className="px-2.5 py-1 bg-brand-green text-black text-[8px] font-black uppercase tracking-wider hover:bg-white transition-colors">
                LAUNCHED
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "electricrich",
      brand: "ELECTRICRICH",
      tagline: "Professional Electrical Services",
      actionText: "WHATSAPP CHAT",
      category: "Local Service",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: Sparkles,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between bg-neutral-950 relative overflow-hidden font-sans border border-brand-green/20">
          <div className="absolute inset-0 z-0">
            <img src={electricRichHomeUrl} alt="ElectricRich" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          </div>
          <div className="relative z-10 p-5 flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-widest text-neutral-300 font-bold">ELECTRICRICH</span>
            <span className="text-[8px] uppercase font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 border border-brand-green/20">Emergency Call-Outs</span>
          </div>
          <div className="relative z-10 p-5 mt-auto space-y-2">
            <span className="font-mono text-[8px] text-brand-green tracking-widest uppercase block">Emergency Support & Brand Launch</span>
            <h4 className="text-lg font-black tracking-tight text-white leading-tight uppercase">
              ELECTRICRICH
            </h4>
            <p className="text-[9px] text-neutral-300 font-light leading-relaxed">
              New brand identity and website for a local electrician with custom SEO localization and integrated WhatsApp instant emergency chat.
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
              <span className="text-[9px] font-bold text-neutral-400 font-mono">Instant Support</span>
              <button className="px-2.5 py-1 bg-brand-green text-black text-[8px] font-black uppercase tracking-wider hover:bg-white transition-colors">
                CHAT NOW
              </button>
            </div>
          </div>
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
            Work
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

          {/* Comment / Subtext shown on bottom right of UI */}
          <div className="text-right w-full max-w-[340px] mt-6 flex items-center justify-end space-x-2 text-neutral-500">
            <span className="w-6 h-px bg-neutral-800" />
            <span className="font-mono text-[9px] uppercase tracking-wider">
              Different industries. Same websites. Zero differentiation.
            </span>
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

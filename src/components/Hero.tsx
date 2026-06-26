import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Layers, Briefcase, Sparkles, Coffee, Shield, Stethoscope, Home, Dumbbell, Star, ShoppingBag } from "lucide-react";
// @ts-ignore
import martinPortraitUrl from "../assets/images/Martin-walker-Marketni.png";

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

  // The 5 distinct mockups shown in the uploaded UI carousel
  const previewCards: WebPreviewCard[] = [
    {
      id: "c1",
      brand: "URBAN BREW",
      tagline: "Premium Coffee Delivered",
      actionText: "SHOP NOW",
      category: "E-Commerce",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-amber-500",
      icon: Coffee,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#16120e] relative overflow-hidden font-sans border border-amber-900/40">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
          <div className="flex justify-between items-center">
            <span className="font-serif text-sm tracking-widest text-amber-500 font-bold">URBAN BREW</span>
            <span className="text-[9px] px-2 py-0.5 bg-neutral-950 text-amber-500 rounded border border-amber-500/20 uppercase font-mono">Espresso Shop</span>
          </div>
          
          <div className="my-auto space-y-2">
            <h4 className="text-xl font-bold tracking-tight text-white leading-tight font-serif">
              Premium Coffee <br />
              Delivered To <br />
              <span className="text-amber-500 underline decoration-amber-600">Your Doorstep.</span>
            </h4>
            <p className="text-[10px] text-neutral-400 font-light">
              Single-origin beans freshly roasted on-demand in micro-batches.
            </p>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
            <span className="text-xs font-bold text-white font-mono">$14.99/mo</span>
            <button className="px-3 py-1.5 bg-amber-500 text-black text-[9px] font-bold uppercase rounded-none hover:bg-amber-400 transition-colors">
              SHOP NOW &rarr;
            </button>
          </div>
        </div>
      )
    },
    {
      id: "c2",
      brand: "TEEZI GOLF",
      tagline: "Swiss Luxury & Sports Elegance",
      actionText: "EXPLORE COLLECTION",
      category: "Bespoke E-Commerce",
      bgColor: "bg-neutral-900",
      textColor: "text-white",
      accentColor: "text-brand-green",
      icon: ShoppingBag,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#0a0c0e] relative overflow-hidden font-sans border border-brand-green/20">
          <div className="absolute top-0 right-0 w-full h-1 bg-brand-green" />
          
          <div className="flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-widest text-neutral-300 font-bold">TEEZI.GOLF</span>
            <span className="text-[8px] uppercase font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 border border-brand-green/20">Surrey</span>
          </div>
          
          {/* A luxury sport layout with bold Swiss typography */}
          <div className="my-auto space-y-3 text-left">
            <span className="font-mono text-[8px] text-neutral-400 tracking-widest uppercase block">LAUNCHING 2026 // FROM SCRATCH</span>
            <h4 className="text-xl font-black tracking-tight text-white leading-none uppercase">
              SWISS LUXURY<br />
              <span className="text-brand-green">MEETS SPORT.</span>
            </h4>
            <p className="text-[9px] text-neutral-400 font-light leading-relaxed">
              Fully custom lifestyle hub built on Google Antigravity infrastructure & Stripe subscription engines.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
            <span className="text-[8px] text-neutral-500 font-mono">Premium Apparel Hub</span>
            <button className="px-2.5 py-1.5 bg-brand-green text-black text-[8px] font-black uppercase tracking-wider hover:bg-white transition-colors">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      )
    },
    {
      id: "c3",
      brand: "BRIGHT DENTAL",
      tagline: "Quality Care For Your Smile",
      actionText: "BOOK APPOINTMENT",
      category: "Medical Clinic",
      bgColor: "bg-slate-900",
      textColor: "text-white",
      accentColor: "text-cyan-400",
      icon: Stethoscope,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#0c1319] relative overflow-hidden font-sans border border-cyan-900/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span className="font-sans text-[11px] font-extrabold tracking-tight text-white">BRIGHT DENTAL</span>
            </div>
            <span className="text-[8px] bg-cyan-500/10 text-cyan-400 px-1.5 py-0.5 rounded font-mono">Epsom Clinic</span>
          </div>

          <div className="my-auto space-y-3">
            <h4 className="text-lg font-black tracking-tight text-white leading-tight">
              Quality Care <br />
              For Your Smile.
            </h4>
            
            {/* Minimal testimonial banner */}
            <div className="bg-neutral-950/40 p-2 border-l-2 border-cyan-400 flex items-center justify-between">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-cyan-400 text-cyan-400" />)}
              </div>
              <span className="text-[7px] text-neutral-400 font-mono">200+ Reviews</span>
            </div>
          </div>

          <button className="w-full py-2 bg-cyan-400 text-black text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
            BOOK APPOINTMENT
          </button>
        </div>
      )
    },
    {
      id: "c4",
      brand: "NORTH BUILDS",
      tagline: "Building Better Spaces",
      actionText: "LEARN MORE",
      category: "Architecture & Build",
      bgColor: "bg-stone-900",
      textColor: "text-white",
      accentColor: "text-yellow-500",
      icon: Home,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#121110] relative overflow-hidden font-sans border border-stone-800">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase font-black">NORTH BUILDS</span>
            <span className="text-[8px] text-stone-400 font-mono">London & Surrey</span>
          </div>

          <div className="my-auto space-y-2">
            <h4 className="text-xl font-light tracking-tight text-white leading-tight">
              Building <br />
              <strong className="font-extrabold text-neutral-100">Better Spaces.</strong>
            </h4>
            <p className="text-[9px] text-stone-400">
              Modern architect-led commercial and residential construction.
            </p>
          </div>

          <div className="space-y-1">
            <div className="w-full h-0.5 bg-stone-800" />
            <div className="flex justify-between items-center text-[7px] text-stone-500 font-mono uppercase">
              <span>EST. 2012</span>
              <span>ISO CERTIFIED</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "c5",
      brand: "GREAT BUILD",
      tagline: "Your Fitness Journey Starts Here",
      actionText: "START TRIAL",
      category: "Leisure & Wellness",
      bgColor: "bg-[#0b0c10]",
      textColor: "text-white",
      accentColor: "text-lime-400",
      icon: Dumbbell,
      customDesign: (
        <div className="w-full h-full flex flex-col justify-between p-6 bg-[#080a0d] relative overflow-hidden font-sans border border-lime-500/20">
          <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/5 rounded-full blur-xl" />
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-black italic text-lime-400 tracking-wider">GREAT BUILD</span>
            <span className="text-[8px] border border-lime-400 text-lime-400 px-1.5 py-0.5 font-bold">24/7 PASS</span>
          </div>

          <div className="my-auto space-y-2">
            <h4 className="text-lg font-black tracking-tight text-white uppercase italic leading-none">
              Your Fitness <br />
              Journey <br />
              Starts Here.
            </h4>
            <p className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">
              No contracts. Peak performance.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
            <span className="text-[8px] text-neutral-500 uppercase tracking-widest font-mono">Join Epsom Gym</span>
            <button className="px-3 py-1 bg-lime-400 text-black text-[8px] font-black uppercase tracking-widest hover:bg-white transition-colors">
              START TRIAL
            </button>
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

import { useEffect } from "react";
import Hero from "./components/Hero";
import AboutAndStrategy from "./components/AboutAndStrategy";
import Services from "./components/Services";
import InteractiveAuditer from "./components/InteractiveAuditer";
import Testimonials from "./components/Testimonials";
import SocialFeeds from "./components/SocialFeeds";
import ContactForm from "./components/ContactForm";
import WebsiteRedesignFloatingWidget from "./components/WebsiteRedesignFloatingWidget";
import { ArrowUp, Award, Mail, Instagram, ArrowUpRight } from "lucide-react";
// @ts-ignore
import martinPortraitUrl from "./assets/images/Martin-walker-Marketni.png";

export default function App() {
  
  // Custom Smooth Scrolling Handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Setup generic dynamic window title & styling options
  useEffect(() => {
    document.title = "Digital Marketing Epsom | Marketni";
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100 selection:bg-brand-green selection:text-black">
      
      {/* Free Website Redesign Floating Widget */}
      <WebsiteRedesignFloatingWidget />

      {/* 1. Header & Hero Bio Profile Section */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 1.5. About & Strategy Section (Light Background) */}
      <AboutAndStrategy onScrollToSection={handleScrollToSection} />

      {/* 2. Services grid list */}
      <Services />

      {/* 3. Martin's Bespoke AI local Campaign Auditor Module */}
      <InteractiveAuditer />

      {/* 4. Locally Verified Customer Testimonials */}
      <Testimonials />

      {/* 5. Live Feed of Modern Marketing Socials */}
      <SocialFeeds />

      {/* 6. High-Conversion Contact Intake & Leads Desk */}
      <ContactForm />

      {/* Modern High-End Mockup-styled Footer & CTA Banner */}
      <div className="relative w-full bg-[#030303] py-20 px-6 md:px-12 border-t border-white/10 overflow-hidden">
        {/* Abstract subtle dark brush wood textures background using styled gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#030303] to-black opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-green font-mono text-[10px] tracking-[0.25em] font-black uppercase block">
              BEFORE YOU SPEND ANOTHER POUND...
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white font-display tracking-tight leading-none uppercase">
              LET'S MAKE SURE IT'S <br />
              THE <span className="text-brand-green">RIGHT INVESTMENT.</span>
            </h2>
            <p className="text-sm font-sans text-neutral-450 max-w-xl leading-relaxed font-light">
              Whether you need a website, an app, better positioning or simply someone to challenge your thinking, let's have a conversation.
            </p>
            <div className="pt-4">
              <button
                onClick={() => handleScrollToSection("contact")}
                className="bg-brand-green hover:bg-white text-black font-mono font-black text-sm tracking-wider uppercase px-8 py-4 inline-flex items-center space-x-2 transition duration-300 cursor-pointer rounded-sm shadow-lg shadow-brand-green/10"
              >
                <span>BOOK A FREE STRATEGY SESSION</span>
                <ArrowUpRight className="w-4 h-4 text-black shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Portrait Column with Custom Paint Splat */}
          <div className="lg:col-span-5 relative flex items-end justify-center h-full min-h-[300px] lg:min-h-[380px] overflow-hidden md:overflow-visible">
            
            {/* Organic paint stroke backplate behind Martin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <svg
                viewBox="0 0 500 500"
                className="w-[340px] h-[340px] md:w-[380px] md:h-[380px] opacity-75 fill-brand-green filter blur-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M150,220 C180,140 280,100 380,140 C430,160 480,220 460,300 C440,380 340,440 240,430 C150,420 90,380 100,300 C110,240 130,260 150,220 Z" />
              </svg>
            </div>
            
            {/* Martin's Black & White Portrait Image */}
            <img
              src={martinPortraitUrl}
              alt="Martin Walker - Epsom Digital Marketing Consultant"
              className="w-auto h-[280px] lg:h-[340px] object-contain relative z-10 filter grayscale contrast-115 brightness-95 transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>

      {/* Elegant Black Footer Bar */}
      <footer className="bg-black border-t border-white/10 py-10 px-6 md:px-12 text-neutral-500 font-mono text-[10px] tracking-wider uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left side: branding credit */}
          <div className="flex items-center space-x-2 text-white font-black">
            <span>MARKETNI</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400 font-normal text-[9px] tracking-widest">BY MARTIN WALKER</span>
          </div>

          {/* Middle side: location footprint */}
          <div className="text-neutral-400 flex items-center space-x-3 text-[9px] font-bold">
            <span>LONDON</span>
            <span>&bull;</span>
            <span>UK</span>
            <span>&bull;</span>
            <span>INTERNATIONAL</span>
          </div>

          {/* Right side: quick shortcuts and up button */}
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 text-neutral-400">
              <a href="https://x.com/marketni_me" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition">
                X.COM
              </a>
              <a href="https://www.instagram.com/marketni_me/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition">
                INSTAGRAM
              </a>
              <a href="mailto:mwalker@marketni.co" className="hover:text-brand-green transition">
                EMAIL
              </a>
            </div>
            <button
              onClick={() => handleScrollToSection("hero")}
              className="p-2 bg-neutral-950 border border-white/10 hover:border-brand-green hover:text-brand-green text-neutral-400 transition rounded-full cursor-pointer group"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 duration-200" />
            </button>
          </div>

        </div>

        {/* Small copyright footnotes */}
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-neutral-600 text-[8px] tracking-widest">
          <div className="flex items-center space-x-1">
            <Award className="w-3 h-3 text-neutral-700" />
            <span>&copy; {new Date().getFullYear()} MARKETNI. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span>DIGITAL PRODUCTS & REGIONAL STRATEGY FOR SURREY.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

import { useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import InteractiveAuditer from "./components/InteractiveAuditer";
import Testimonials from "./components/Testimonials";
import SocialFeeds from "./components/SocialFeeds";
import ContactForm from "./components/ContactForm";
import { ArrowUp, Award } from "lucide-react";

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
    document.title = "Martin Walker | Marketni Local Marketing Consultancy";
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-neutral-100 selection:bg-cyan-400 selection:text-black">
      
      {/* 1. Header & Hero Bio Profile Section */}
      <Hero onScrollToSection={handleScrollToSection} />

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

      {/* Modern High-End Developer-styled Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-12 text-neutral-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Slogan info */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-mono text-base font-black tracking-widest text-white">
                MARKET<span className="text-cyan-400">NI</span>
              </span>
              <span className="text-[10px] bg-neutral-950 text-neutral-400 px-2 py-0.5 border border-white/10 rounded">
                MARTIN WALKER
              </span>
            </div>
            <p className="font-sans text-neutral-500 text-xs max-w-sm">
              Sleek performance-driven local marketing campaigns tailored personally by Martin Walker. No bloated agency retainers. Just organic maps pack supremacy and Radius-based ad funnels.
            </p>
          </div>

          {/* Quick links footer list */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-wider uppercase font-bold text-neutral-400">
            <button 
              onClick={() => handleScrollToSection("services")} 
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollToSection("strategy")} 
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Instant Campaigns
            </button>
            <button 
              onClick={() => handleScrollToSection("testimonials")} 
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleScrollToSection("feeds")} 
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Social Radar
            </button>
            <button 
              onClick={() => handleScrollToSection("contact")} 
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Collab Request
            </button>
          </div>

          {/* Right Action: Scroll upward */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <button
              onClick={() => handleScrollToSection("hero")}
              className="p-3 bg-neutral-950 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-neutral-400 transition rounded-full cursor-pointer group"
              title="Back to Telemetry Entry"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 duration-200" />
            </button>
            <span className="text-[9px] text-neutral-600 block">Back to top entry</span>
          </div>

        </div>

        {/* Copy footnote and credentials */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-[9px] uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <Award className="w-3.5 h-3.5 text-neutral-700" />
            <span>&copy; {new Date().getFullYear()} Marketni Group Ltd. Compiled under Walker Telemetries.</span>
          </div>
          <div>
            <span>Consultancy locally supplied throughout England &bull; Made in AI Studio Workspaces</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

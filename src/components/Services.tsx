import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, CheckCircle, Smartphone, ArrowRight, Star, Heart, Coffee, Shield, Stethoscope, Award, Zap } from "lucide-react";

interface ClientCaseStudy {
  id: string;
  name: string;
  url: string;
  industry: string;
  location: string;
  metric: string;
  challenge: string;
  solution: string;
  beforeMockup: {
    title: string;
    description: string;
    vibe: string;
    details: string[];
    bgClass: string;
  };
  afterMockup: {
    title: string;
    description: string;
    vibe: string;
    details: string[];
    bgClass: string;
    accentClass: string;
  };
}

export default function Services() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string>("teezi");
  const [viewModes, setViewModes] = useState<Record<string, "before" | "after">>({
    teezi: "after",
    northfield: "after",
    urbanbrew: "after",
    brightdental: "after"
  });

  const caseStudies: ClientCaseStudy[] = [
    {
      id: "teezi",
      name: "TEEZI GOLF",
      url: "www.teezi.golf",
      industry: "Premium Golf Apparel & Branding",
      location: "Epsom & Surrey Golf Corridor",
      metric: "Brand Launch: Sold Out in 48h",
      challenge: "A brand new premium Surrey golf apparel startup built entirely from scratch with no prior platform, digital identity, or online presence.",
      solution: "Fully designed, developed, and branded a high-conversion lifestyle and e-commerce platform using Google Antigravity infrastructure and Stripe custom subscription engines.",
      beforeMockup: {
        title: "TEEZI - Prior State",
        description: "Zero previous platform, zero digital footprint, and zero local brand recognition.",
        vibe: "Pre-Launch (No Platform)",
        details: ["No Existing Domain Setup", "No Brand Identity Assets", "No Customer Database", "No E-commerce Processing"],
        bgClass: "bg-neutral-100 text-neutral-800 border-neutral-300"
      },
      afterMockup: {
        title: "TEEZI.GOLF - Bespoke E-Commerce Platform",
        description: "High-performance Swiss-style design, custom-engineered UI/UX customer journeys, and fluid responsive catalog interaction.",
        vibe: "Swiss Luxury & Sports Elegance",
        details: ["Full Custom Branding & UX", "Google Antigravity Backend", "Stripe Subscription Engines", "Low Infrastructure Costs"],
        bgClass: "bg-neutral-950 text-white border-brand-green/30",
        accentClass: "text-brand-green"
      }
    },
    {
      id: "northfield",
      name: "NORTHFIELD LAW",
      url: "www.northfieldlaw.co.uk",
      industry: "Corporate & Regional Litigation",
      location: "Epsom Office Corridor",
      metric: "Consultation Booking Rate: 2% → 11%",
      challenge: "Standard, slow-loading WordPress theme crammed with generic stock photos of gavels and scales of justice, projecting zero local superiority.",
      solution: "Crafted an authoritative, editorial editorial interface in black and white, integrated with Martin's signature photography and a seamless, high-speed consulting form.",
      beforeMockup: {
        title: "Northfield Solicitors Surrey",
        description: "Slow WordPress template, generic stock icons, massive walls of unreadable legal text, and a complicated PDF intake form.",
        vibe: "1990s Corporate Template",
        details: ["Unresponsive on Mobile", "Generic Stock Images", "Messy Contact Email Links", "Confusing Page Hierarchy"],
        bgClass: "bg-slate-100 text-slate-800 border-slate-300"
      },
      afterMockup: {
        title: "NORTHFIELD - Supreme Legal Authority",
        description: "Aesthetic high-contrast editorial system, integrated 1-click booking schedules, and highly personalized local partner profiles.",
        vibe: "High-End Legal Editorial",
        details: ["Fully Responsive Layout", "Custom Local Partner Headshots", "Dynamic Appointment Calendar", "Secure SSL Form Pipeline"],
        bgClass: "bg-zinc-950 text-neutral-100 border-brand-green/20",
        accentClass: "text-white"
      }
    },
    {
      id: "urbanbrew",
      name: "URBAN BREW",
      url: "www.urbanbrewcoffee.co.uk",
      industry: "Artisan Coffee Subscription Box",
      location: "Surrey & South London Radius",
      metric: "1,200+ Active Monthly Subscribers",
      challenge: "No online e-commerce infrastructure; business relied solely on foot traffic, putting them at the mercy of climbing high-street rental costs.",
      solution: "Designed a clean, sensory-focused subscription engine with micro-targeted 5-mile radius social ads with custom copy and clear local origin values.",
      beforeMockup: {
        title: "Urban Brew - Coffee Shop Blog",
        description: "Simple brochure page with a basic map, operating hours, and an outdated blog page with no online shop.",
        vibe: "Static Digital Brochure",
        details: ["Zero Revenue Online", "No Mobile Ordering", "Static Location Map Only", "Standard Typography"],
        bgClass: "bg-orange-50 text-orange-950 border-orange-200"
      },
      afterMockup: {
        title: "URBAN BREW - Sensory Coffee Hub",
        description: "Subscription builder interface, recurring payments integration, custom flavor diagnostic tool, and hyper-fast web delivery dashboard.",
        vibe: "Cozy Modern Artisan E-Shop",
        details: ["Recurring Revenue Engine", "1-Minute Subscription Flow", "Interactive Flavor Tool", "Rich Media & Video Frames"],
        bgClass: "bg-[#14110f] text-[#f7f5f0] border-brand-green/20",
        accentClass: "text-amber-500"
      }
    },
    {
      id: "brightdental",
      name: "BRIGHT DENTAL",
      url: "www.brightdentalepsom.co.uk",
      industry: "Premium Family Clinic & Orthodontics",
      location: "Epsom High Street",
      metric: "Cost Per Lead Slashed: £45.00 → £4.25",
      challenge: "High spend on national PPC keywords with a generic, forgettable 'We care for your smile' slogan, yielding low-quality cold traffic.",
      solution: "Implemented local Maps-Pack geocoding domination, modern clean clinical interfaces, and high-conversion PR landing pages with automated review prompts.",
      beforeMockup: {
        title: "Bright Dental Surgery Epsom",
        description: "Confusing booking calendar, broken links, generic pricing table, and clinical stock images of doctors that looked fake.",
        vibe: "Clunky Health Directory",
        details: ["£45+ Lead Acquisition Cost", "Outdated Patient Portal", "High Desktop Bounce Rate", "Overused Blue Colors"],
        bgClass: "bg-sky-50 text-sky-950 border-sky-200"
      },
      afterMockup: {
        title: "BRIGHT DENTAL - Modern Dental Studio",
        description: "Custom premium clinic design, interactive treatment pricing calculators, Google Reviews live feed, and instant NHS/Private registration.",
        vibe: "Clean, Safe Clinical Luxury",
        details: ["NHS/Private Easy Toggle", "Dynamic Cost Estimator", "Automated Map-Pack Triggers", "Ultra-Modern Micro-Interactions"],
        bgClass: "bg-slate-950 text-slate-100 border-brand-green/20",
        accentClass: "text-cyan-400"
      }
    }
  ];

  const handleToggleViewMode = (id: string, mode: "before" | "after") => {
    setViewModes(prev => ({ ...prev, [id]: mode }));
  };

  const currentStudy = caseStudies.find(c => c.id === activeCaseStudy) || caseStudies[0];

  return (
    <section id="services" className="bg-[#050505] border-t border-b border-white/10 text-white py-24 px-6 md:px-12 relative overflow-hidden font-sans">
      
      {/* Structural Brutalist Grid Accents */}
      <div className="absolute right-0 top-0 w-32 h-32 border-r border-t border-white/5 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-32 h-32 border-l border-b border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-brand-green font-bold uppercase tracking-widest">
              <span>[01 // Pure Evidence Over Theory]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-display">
              CLIENT CASE STUDIES & <span className="text-neutral-500">RESULTS.</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-md text-neutral-400 uppercase tracking-wider leading-relaxed">
            I don't write generic, complicated service descriptions. I build custom, high-converting digital products. See exactly how we transform standard templates into local category leaders.
          </div>
        </div>

        {/* Client Selection Pills */}
        <div className="flex flex-wrap gap-3 border-b border-white/5 pb-6">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseStudy(study.id)}
              className={`px-5 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 border rounded-none cursor-pointer ${
                activeCaseStudy === study.id
                  ? "bg-brand-green text-black border-brand-green font-black"
                  : "bg-neutral-950 text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Case Study Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Client Narrative & Metrics */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-none text-brand-green font-mono text-[10px] uppercase font-bold">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{currentStudy.industry}</span>
              </div>
              
              <h3 className="text-3xl font-black tracking-tight text-white font-display uppercase">
                {currentStudy.name}
              </h3>
              
              <div className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                <span className="text-brand-green font-bold">&bull;</span>
                <span>{currentStudy.location}</span>
                <span className="text-brand-green font-bold">&bull;</span>
                <a 
                  href={`https://${currentStudy.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-green underline flex items-center space-x-1"
                >
                  <span>{currentStudy.url}</span>
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
            </div>

            {/* Impact Metric Hero Card */}
            <div className="bg-neutral-950 border-l-4 border-brand-green p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full blur-xl pointer-events-none" />
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block font-bold">
                Verified Outcome
              </span>
              <span className="text-2xl md:text-3xl font-black text-brand-green tracking-tight font-display uppercase block mt-1">
                {currentStudy.metric}
              </span>
            </div>

            {/* Before / After Narrative */}
            <div className="space-y-6 font-sans text-sm leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-black">
                  {currentStudy.id === "teezi" ? "The Brand New Startup Challenge (Before)" : "The Competitive Blocker (Before)"}
                </h4>
                <p className="text-neutral-400 font-light">
                  {currentStudy.challenge}
                </p>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4">
                <h4 className="font-mono text-[10px] text-brand-green uppercase tracking-widest font-black">
                  {currentStudy.id === "teezi" ? "The Bespoke Launch Architecture (After)" : "The Custom Playbook Solution (After)"}
                </h4>
                <p className="text-neutral-200 font-light">
                  {currentStudy.solution}
                </p>
                {currentStudy.id === "teezi" && (
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-3">
                    <h5 className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-black">
                      Project Development Includes:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-mono text-neutral-400">
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Full branding and platform identity development</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>UI / UX design and customer journey optimisation</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Built using Google Antigravity infrastructure</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Database architecture and live data management</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Stripe subscription and payment integrations</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>API integrations and scalable backend connectivity</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>CRM and customer lifecycle workflows</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Analytics and tracking system integrations</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Push notification and real-time engagement systems</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Security-focused platform implementation</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>AI-assisted development workflows and automation</span>
                      </li>
                      <li className="flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Low operational infrastructure model & data costs</span>
                      </li>
                      <li className="flex items-start space-x-1.5 col-span-1 sm:col-span-2">
                        <span className="text-brand-green font-bold">&bull;</span>
                        <span>Community-led engagement & retention systems KPI's</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* CTA directly in the services view */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-3 text-xs font-mono font-black uppercase tracking-widest text-brand-green hover:text-white transition-colors group"
              >
                <span>GET THE PLAYBOOK FOR YOUR BRAND</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
              </a>
            </div>
          </div>

          {/* Right Block: Dynamic Interactive Before & After Mockup Screen */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Control Switcher Bar */}
            <div className="flex justify-between items-center bg-neutral-950 border border-white/10 p-2.5 rounded-none">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-neutral-500" />
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Interactive Browser Preview
                </span>
              </div>

              {/* View toggle buttons */}
              <div className="flex space-x-1.5">
                <button
                  onClick={() => handleToggleViewMode(currentStudy.id, "before")}
                  className={`px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    viewModes[currentStudy.id] === "before"
                      ? "bg-red-950/80 text-red-400 border border-red-900/60"
                      : "bg-[#050505] text-neutral-500 border border-white/5 hover:text-neutral-300"
                  }`}
                >
                  BEFORE [Generic]
                </button>
                <button
                  onClick={() => handleToggleViewMode(currentStudy.id, "after")}
                  className={`px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    viewModes[currentStudy.id] === "after"
                      ? "bg-brand-green/20 text-brand-green border border-brand-green/45"
                      : "bg-[#050505] text-neutral-500 border border-white/5 hover:text-neutral-300"
                  }`}
                >
                  AFTER [Bespoke]
                </button>
              </div>
            </div>

            {/* Mockup Frame Container */}
            <div className="aspect-[16/10] w-full border border-white/10 rounded-md p-4 bg-neutral-950 shadow-2xl relative overflow-hidden group">
              
              {/* Dynamic content rendering with slide animation */}
              <AnimatePresence mode="wait">
                {viewModes[currentStudy.id] === "before" ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full h-full p-6 flex flex-col justify-between border rounded ${currentStudy.beforeMockup.bgClass} relative`}
                  >
                    {/* Cluttered overlay stamp */}
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded uppercase select-none animate-pulse">
                      Generic Template Slop
                    </div>

                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-bold text-xs font-sans tracking-tight">
                        {currentStudy.beforeMockup.title}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider opacity-60">
                        {currentStudy.beforeMockup.vibe}
                      </span>
                    </div>

                    <div className="my-auto space-y-3">
                      <h5 className="text-base font-bold leading-tight font-sans text-neutral-900">
                        {currentStudy.beforeMockup.description}
                      </h5>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        {currentStudy.beforeMockup.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5 text-neutral-600">
                            <span className="text-red-500 font-bold">&times;</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-2 flex justify-between items-center">
                      <span className="text-[9px] opacity-50 font-mono">Slow server load time: ~5.2s</span>
                      <button className="px-3 py-1 bg-neutral-300 text-neutral-600 text-[9px] font-sans rounded disabled cursor-not-allowed" disabled>
                        Submit Form
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full h-full p-6 flex flex-col justify-between border rounded ${currentStudy.afterMockup.bgClass} relative`}
                  >
                    {/* Sleek stamp */}
                    <div className="absolute top-2 right-2 bg-brand-green text-black text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded uppercase select-none">
                      Handcrafted Masterpiece
                    </div>

                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-mono text-xs font-black tracking-widest text-white">
                        {currentStudy.afterMockup.title}
                      </span>
                      <span className={`text-[8px] uppercase tracking-wider font-mono font-bold ${currentStudy.afterMockup.accentClass}`}>
                        {currentStudy.afterMockup.vibe}
                      </span>
                    </div>

                    <div className="my-auto space-y-3">
                      <h5 className="text-base font-black leading-tight font-display tracking-tight text-white uppercase">
                        {currentStudy.afterMockup.description}
                      </h5>

                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        {currentStudy.afterMockup.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5 text-neutral-300">
                            <span className={`font-bold ${currentStudy.afterMockup.accentClass}`}>&bull;</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-2 flex justify-between items-center">
                      <span className={`text-[9px] font-mono font-bold ${currentStudy.afterMockup.accentClass}`}>
                        Lightning fast load time: ~0.9s
                      </span>
                      <button className="px-3 py-1 bg-brand-green text-black text-[9px] font-mono font-black uppercase tracking-wider hover:bg-white transition-colors">
                        1-Click Book &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative side reflection overlay */}
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none transform skew-x-12" />
            </div>

            {/* Explanatory footer remark */}
            <div className="text-center">
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-relaxed">
                Tip: Click the <strong className="text-red-400 font-bold">BEFORE</strong> and <strong className="text-brand-green font-bold">AFTER</strong> buttons above to see the real structural and conversion rate optimization layout transition.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

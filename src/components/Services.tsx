import { useState } from "react";
import { motion } from "motion/react";
import { Search, Megaphone, Layers, Compass, BarChart, ArrowRight, Check, CheckCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  impactMetric: string;
  termTag: string;
  icon: any;
  colorClass: string;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const servicesList: ServiceItem[] = [
    {
      id: "seo",
      title: "Hyper-Local Google & Maps Domination",
      subtitle: "Occupy absolute search presence when neighbors seek solutions",
      description: "If you aren't in the Google Map Pack, you're invisible. I perform deep structural audits, build rich schema systems, construct high-authority local citations, and drive authentic customer reviews that secure the #1 spot in your postal code.",
      deliverables: [
        "Google Maps Map-Pack optimization",
        "Geocoded schema & technical SEO markup",
        "Competitor gap and local keyword mapping",
        "Automated review collection loops"
      ],
      impactMetric: "+280% organic local phone calls (avg)",
      termTag: "Local SEO Engine",
      icon: Search,
      colorClass: "from-cyan-400 to-teal-450"
    },
    {
      id: "social",
      title: "Social-First Local Lead Pipelines",
      subtitle: "Turn neighborhood screens into paying customers",
      description: "Organic posts aren't enough anymore. I engineer high-performing, hyper-targeted local social campaigns targeting a precise radius around your business. I craft the visual frameworks, scripting, and target parameters.",
      deliverables: [
        "Hyper-local radius-targeted social campaigns",
        "Creative content scripts & asset guidance",
        "High-performance landing copy",
        "A/B split testing of creative hooks"
      ],
      impactMetric: "Under £4.50 average lead acquisition cost",
      termTag: "Demographic Targeting",
      icon: Megaphone,
      colorClass: "from-cyan-400 to-blue-550"
    },
    {
      id: "systems",
      title: "Conversion Funnels & Review Automations",
      subtitle: "Frictionless digital systems built for local speed",
      description: "Stop letting leads slip through broken call-backs or slow website speeds. I build gorgeous, minimal, ultra-fast landing pages with preconfigured booking integrations and automated SMS lead follow-ups.",
      deliverables: [
        "60fps responsive mobile-first landing experience",
        "Automated immediate SMS responder configuration",
        "Calendl/Booking system integrations",
        "Speed & performance performance optimizations"
      ],
      impactMetric: "Avg booking rate increased from 2% to 11%",
      termTag: "Tech Infrastructure",
      icon: Layers,
      colorClass: "from-cyan-400 to-purple-550"
    },
    {
      id: "branding",
      title: "Bespoke Position & Authority Setup",
      subtitle: "Be declared the undisputed category king in your town",
      description: "Why compete on price when you can compete on authority? I align your narrative, modern brand identity, slogan, and client onboarding experience so you become the premium, custom default choice in the region.",
      deliverables: [
        "Core positioning statement & slogan discovery",
        "Premium visual guidelines & sleek asset packs",
        "High-conversion PR copy templates",
        "Customer onboarding flow consult"
      ],
      impactMetric: "Allows premium price charging over rivals",
      termTag: "Brand Engineering",
      icon: Compass,
      colorClass: "from-cyan-400 to-indigo-500"
    }
  ];

  const filteredServices = activeTab === "all" 
    ? servicesList 
    : servicesList.filter(s => s.id === activeTab);

  return (
    <section id="services" className="bg-[#050505] border-t border-b border-white/10 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Structural Brutalist Grid Elements */}
      <div className="absolute right-0 top-0 w-32 h-32 border-r border-t border-white/10" />
      <div className="absolute left-0 bottom-0 w-32 h-32 border-l border-b border-white/10" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
              <span>[01 // Bespoke Frameworks]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              CORE STRATEGY & SERVICES <span className="text-neutral-500">I DEPLOY.</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-neutral-400 uppercase tracking-wide leading-relaxed">
            No bloated agency retention hours. No complex overhead. I deploy laser-guided, custom engines built directly around your business's immediate revenue triggers.
          </div>
        </div>

        {/* Dynamic Service Categories Filters */}
        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold tracking-widest uppercase">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-none border transition-all ${
              activeTab === "all" 
                ? "bg-white text-black border-white" 
                : "bg-neutral-950 text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
            } cursor-pointer`}
          >
            Show All Services
          </button>
          
          {servicesList.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-5 py-2.5 rounded-none border transition-all ${
                activeTab === s.id 
                  ? "bg-cyan-400 text-black border-cyan-400" 
                  : "bg-neutral-950 text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
              } cursor-pointer`}
            >
              {s.termTag}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                layout
                className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#6fffe9]/30 transition-all duration-300 relative rounded-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Visual side glow effect */}
                <div className={`absolute top-0 left-0 w-1 group-hover:h-full h-12 bg-gradient-to-b ${service.colorClass} transition-all duration-300`} />
                
                <div className="space-y-6">
                  {/* Top: Icon & Tags */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-neutral-950 border border-white/10 group-hover:border-[#6fffe9]/30 transition duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase font-black bg-neutral-950 border border-white/10 px-2.5 py-1">
                      {service.termTag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 duration-300">
                      {service.title}
                    </h3>
                    <h4 className="text-xs font-mono text-neutral-400 tracking-wider">
                      {service.subtitle}
                    </h4>
                    <p className="text-sm font-sans text-neutral-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="border-t border-white/10 pt-6 space-y-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                      KEY DELIVERABLES INCLUDED
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-300">
                      {service.deliverables.map((del, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Foot: Metric Highlight & CTA link */}
                <div className="border-t border-white/10 mt-8 pt-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">
                      Target Outcome metric
                    </span>
                    <span className="text-sm font-bold tracking-tight text-neutral-100 flex items-center space-x-1 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 inline" />
                      <span>{service.impactMetric}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1 font-mono text-xs text-neutral-450 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 duration-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner callout */}
        <div className="bg-[#050505] border border-white/10 p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-md">
          <div className="lg:col-span-8 space-y-2">
            <h4 className="text-xl font-bold tracking-tight text-white">
              Unsure which trigger point to activate first?
            </h4>
            <p className="text-sm text-neutral-450 font-sans font-light">
              Enter details below in the **Instant Strategy Auditor** module. Let my custom campaign engine generate a localized step-by-step game plan tailored to your town immediately.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="#strategy"
              className="px-6 py-3 bg-neutral-900 border border-white/10 hover:border-cyan-400 text-white hover:text-cyan-400 font-mono text-xs tracking-wider transition-all"
            >
              RUN AUDIT NOW &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

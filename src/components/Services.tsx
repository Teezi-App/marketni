import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// @ts-ignore
import teeziGolfUrl from "../assets/images/teezi-golf.jpg";
// @ts-ignore
import teeiAppUrl from "../assets/images/Teei-app.jpg";
// @ts-ignore
import golfBrandMoodBoardUrl from "../assets/images/golf-brand-mood-board.jpg";
// @ts-ignore
import hanburyHomeUrl from "../assets/images/hanbury-home.jpg";
// @ts-ignore
import hanburyBookingUrl from "../assets/images/hanbury-autos-booking.jpg";
// @ts-ignore
import hanburyHeritageUrl from "../assets/images/Hanbury-autos-heritage.jpg";
// @ts-ignore
import cmbHomeUrl from "../assets/images/cmb-home.jpg";
// @ts-ignore
import cmbReviewsUrl from "../assets/images/cmb-reviews.jpg";
// @ts-ignore
import cmbMapsUrl from "../assets/images/cmb-maps.jpg";
// @ts-ignore
import electricRichHomeUrl from "../assets/images/electric-rich-home.jpg";
// @ts-ignore
import richServicesUrl from "../assets/images/rich-services.jpg";
// @ts-ignore
import emergencyUrl from "../assets/images/emergency.jpg";

interface CarouselSlide {
  image: string;
  subheading: string;
}

interface ClientCaseStudy {
  id: string;
  name: string;
  url: string;
  industry: string;
  location: string;
  metric: string;
  solution: string;
  slides: CarouselSlide[];
  bullets?: string[];
}

export default function Services() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string>("teezi");
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const caseStudies: ClientCaseStudy[] = [
    {
      id: "teezi",
      name: "TEEZI GOLF",
      url: "www.teezi.golf",
      industry: "Premium Golf Apparel & Branding",
      location: "Epsom & Surrey Golf Corridor",
      metric: "Startup Launch: 500+ signups In 48h",
      solution: "Teezi golf is a bespoke golf networking platform that connects users in real-time. Built using Google Antigravity with payment gateways, It was successfully launched In March and on budget.",
      slides: [
        {
          image: golfBrandMoodBoardUrl,
          subheading: "Teezi.golf brand mood board and positioning."
        },
        {
          image: teeziGolfUrl,
          subheading: "Teezi.golf landing page funnel to drive subscriptions to the App."
        },
        {
          image: teeiAppUrl,
          subheading: "Teezi.golf app pages."
        }
      ],
      bullets: [
        "Brand playbook and direction",
        "Multi-device app, no install required",
        "Built for low-data consumption",
        "Data-base and real-time capture",
        "CRM, Analytic tracking all touch-points",
        "Social media Integrations"
      ]
    },
    {
      id: "hanbury",
      name: "HANBURY AUTO'S",
      url: "www.hanburyautos.co.uk",
      industry: "Automotive Heritage & Service",
      location: "Heritage pitch",
      metric: "Business focus & Modernised approach",
      solution: "Hanbury Auto's website re-design and build focuses on celebrating the company's rich heritage, which was previously completely missing. We built a custom slot booking database and streamlined customer information flows to elevate brand identity and expand local marketing activities.",
      slides: [
        {
          image: hanburyHomeUrl,
          subheading: "Hanbury autos website re-design and build."
        },
        {
          image: hanburyBookingUrl,
          subheading: "Custom database for slots and customer information to expand marketing activities."
        },
        {
          image: hanburyHeritageUrl,
          subheading: "We focused on the companies heritage which was missing completely."
        }
      ],
      bullets: [
        "Brand and website revamp",
        "New business opportunities Identified",
        "Social media strategy",
        "Customer data captured",
        "Reduced platform running costs",
        "Business strategy guidance"
      ]
    },
    {
      id: "cmbepsom",
      name: "CMB EPSOM",
      url: "www.cmbepsom.co.uk",
      industry: "Local Services & Business Digitalization",
      location: "Epsom Surrey",
      metric: "Go digital pack + Marketing strategy",
      solution: "CMB had no online presence. We supported them with our new Go Digital Pack designed for small businesses. By focusing on customer reviews and their strategic physical location, we created an effective and modern search footprint.",
      slides: [
        {
          image: cmbHomeUrl,
          subheading: "CMB had no online presence. We supported them with our new Go Digital Pack designed for small businesses."
        },
        {
          image: cmbReviewsUrl,
          subheading: "No heritage, No problem. We focused the business on their reviews."
        },
        {
          image: cmbMapsUrl,
          subheading: "Business location matters. We enhanced this page to focus on their strengths. Location was the strategy."
        }
      ],
      bullets: [
        "Go Digital Pack deployment",
        "Social review integration",
        "Business location optimization",
        "Enhanced search visibility",
        "Mobile-optimized web design",
        "Strategic marketing support"
      ]
    },
    {
      id: "electricrich",
      name: "ELECTRICRICH",
      url: "www.electricrich.co.uk",
      industry: "Professional Electrical Services",
      location: "Surrey & Epsom",
      metric: "Emergency Support & Brand Launch",
      solution: "We created a new brand identity and website for ElectricRich, establishing a powerful digital presence. By highlighting their emergency call-out services and integrating instant WhatsApp chat functionality, we built a direct, high-converting channel for local customers.",
      slides: [
        {
          image: electricRichHomeUrl,
          subheading: "Created a new brand Identity and website for a local electrician."
        },
        {
          image: richServicesUrl,
          subheading: "Created a localised SEO list of electric services."
        },
        {
          image: emergencyUrl,
          subheading: "This was our focus point, emergency call outs with instant whatsapp chat integrated."
        }
      ],
      bullets: [
        "Brand identity design",
        "Local SEO services setup",
        "WhatsApp chat integration",
        "Mobile-first responsive layout",
        "Emergency capture system",
        "Ongoing strategy support"
      ]
    }
  ];

  const handleCaseStudyChange = (studyId: string) => {
    setActiveCaseStudy(studyId);
    setActiveSlideIndex(0);
  };

  const currentStudy = caseStudies.find(c => c.id === activeCaseStudy) || caseStudies[0];

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % currentStudy.slides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + currentStudy.slides.length) % currentStudy.slides.length);
  };

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
            I don't create generic off the shelf products. I build custom, high-converting digital products with the latest code that can be scaled into any digital format, including apps.
          </div>
        </div>

        {/* Client Selection Pills */}
        <div className="flex flex-wrap gap-3 border-b border-white/5 pb-6">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => handleCaseStudyChange(study.id)}
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

        {/* Main Case Study Area */}
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

            {/* Main Written Content - Solution Paragraph */}
            <div className="space-y-6 font-sans text-sm leading-relaxed text-neutral-300">
              <p className="font-light">
                {currentStudy.solution}
              </p>

              {/* Tighter, streamlined context details */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                <h5 className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-black">
                  Product Development Includes:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-neutral-400">
                  {(currentStudy.bullets || [
                    "Swiss UI/UX Design",
                    "Google Antigravity Setup",
                    "Stripe Subscription Core",
                    "Lightweight CRM & Analytics",
                    "Zero-Waste Serverless Infra",
                    "Continuous Secure Delivery"
                  ]).map((bullet, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-brand-green font-bold">&bull;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
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

          {/* Right Block: Dynamic Mockup Image Carousel */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Carousel Frame Container */}
            <div className="w-full border border-white/10 rounded-md bg-neutral-950 shadow-2xl relative overflow-hidden group">
              
              {/* Dynamic image rendering with slide animation */}
              <AnimatePresence mode="wait">
                {currentStudy.slides.map((slide, idx) => {
                  if (idx !== activeSlideIndex) return null;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-auto flex items-center justify-center bg-neutral-950"
                    >
                      <img
                        src={slide.image}
                        alt={slide.subheading}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto block"
                      />
                      {/* Dark gradient overlay at the bottom for readability */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Decorative side reflection overlay */}
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none transform skew-x-12" />
            </div>

            {/* Slide explanation subheading box */}
            <div className="bg-neutral-950/80 border border-white/5 p-4 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-green" />
              <span className="font-mono text-[9px] text-brand-green uppercase tracking-widest font-bold block">
                Current Preview // Slide 0{activeSlideIndex + 1} of 0{currentStudy.slides.length}
              </span>
              <p className="font-sans text-xs text-neutral-300 mt-1 font-light leading-relaxed">
                {currentStudy.slides[activeSlideIndex]?.subheading}
              </p>
            </div>

            {/* Interactive Carousel Controls */}
            <div className="flex items-center justify-between w-full mt-2">
              
              {/* Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-2.5 bg-neutral-950 border border-white/10 hover:border-brand-green text-neutral-400 hover:text-brand-green transition rounded-full cursor-pointer"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={handleNextSlide}
                  className="p-2.5 bg-neutral-950 border border-white/10 hover:border-brand-green text-neutral-400 hover:text-brand-green transition rounded-full cursor-pointer"
                  title="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Indicator dots */}
              <div className="flex space-x-1.5">
                {currentStudy.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlideIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === activeSlideIndex ? "bg-brand-green w-4" : "bg-neutral-700"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

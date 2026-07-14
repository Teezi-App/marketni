import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TestimonialType } from "../types";
import { Star, MapPin, Quote, Sparkles, Building2, User } from "lucide-react";

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const testimonialsList: TestimonialType[] = [
    {
      id: "t1",
      clientName: "Dave Hanbury",
      businessName: "Hanbury Auto's",
      location: "Hanbury, Staffordshire",
      reviewMessage: "Martin has been fantastic. He completely rebuilt our garage's website, captured our family-run heritage, and sorted our local SEO. We've seen a massive spike in phone calls and bookings since it went live. Direct, reliable, and actually delivers what he promises.",
      rating: 5,
      category: "Local Services",
      yearTag: "Client Since 2026"
    },
    {
      id: "t2",
      clientName: "Chris",
      businessName: "CMB Epsom",
      location: "Epsom Surrey",
      reviewMessage: "Excellent experience working with Marketni. Martin modernized our digital presence, got us ranking #1 on Google Maps for Epsom car repairs, and set up an enquiry channel that saves us hours of admin. Honest, professional, and highly recommended.",
      rating: 5,
      category: "Local Services",
      yearTag: "Client Since 2026"
    },
    {
      id: "t3",
      clientName: "Richard",
      businessName: "ElectricRich",
      location: "Swadlincote, Derbyshire",
      reviewMessage: "Martin Walker knows exactly how to position a local trade business. He defined our USP, built a fast, fully responsive website, and got us ranking for key local search terms in Surrey. Excellent, straight-talking advice.",
      rating: 5,
      category: "Local Services",
      yearTag: "Client Since 2026"
    },
    {
      id: "t4",
      clientName: "Mark",
      businessName: "Teezi Golf",
      location: "Epsom & Surrey",
      reviewMessage: "Martin helped launch our startup golf brand. From our brand playbook and direction to our digital platform, everything was built for low-data consumption and real-time capture. His marketing strategy is absolute gold.",
      rating: 5,
      category: "Startup Brands",
      yearTag: "Client Since 2026"
    },
    {
      id: "t5",
      clientName: "Dr. Sonal Patel",
      businessName: "Podiatry & Chiropody Clinic",
      location: "Clinic Platforms",
      reviewMessage: "Martin's custom booking pages and Go Digital Custom Platform doubled our patient enrollment rate. The tech is top-tier but incredibly easy for our customers. He didn't just give us advice; he built the actual system.",
      rating: 5,
      category: "Clinical Platforms",
      yearTag: "Client Since 2026"
    }
  ];

  const categories = ["All", "Local Services", "Startup Brands", "Clinical Platforms"];

  const filteredTestimonials = selectedCategory === "All"
    ? testimonialsList
    : testimonialsList.filter(t => t.category === selectedCategory);

  return (
    <section id="testimonials" className="bg-[#050505] border-b border-white/10 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Dynamic graphic rings */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 -left-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-brand-green font-bold uppercase tracking-widest">
              <span>[02 // Direct Evidence]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-display">
              LOCAL PROOFS & <span className="text-neutral-500">CLIENT SUCCESS.</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap gap-2 text-sm font-mono font-bold tracking-widest uppercase">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-4 py-2.5 border transition-all duration-300 ${
                 selectedCategory === cat
                   ? "bg-brand-green text-black border-brand-green"
                   : "bg-neutral-950 text-neutral-400 border-white/10 hover:text-white hover:border-white/30"
               } cursor-pointer`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between hover:border-brand-green/30 transition duration-300 relative rounded-md group"
              >
                {/* Back decorative quotation sign */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-neutral-900 pointer-events-none group-hover:text-brand-green/5 duration-300 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Star Rating list */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green shrink-0" />
                    ))}
                  </div>

                  {/* Review Text block */}
                  <p className="text-neutral-300 font-sans text-sm leading-relaxed italic font-light">
                    &ldquo;{testimonial.reviewMessage}&rdquo;
                  </p>
                </div>

                {/* Footer block: Author and client tag */}
                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-neutral-950 rounded-none border border-white/10 flex items-center justify-center text-brand-green font-mono font-bold text-xs">
                      {testimonial.clientName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight text-white flex items-center space-x-1.5 font-display uppercase">
                        <User className="w-3.5 h-3.5 text-neutral-500 inline" />
                        <span>{testimonial.clientName}</span>
                      </h4>
                      <p className="text-xs text-neutral-400 flex items-center space-x-1.5 mt-0.5 font-light">
                        <Building2 className="w-3 h-3 text-neutral-500 inline" />
                        <span>{testimonial.businessName}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="inline-flex items-center space-x-1 text-xs text-neutral-400 bg-neutral-950 border border-white/10 px-2.5 py-1">
                      <MapPin className="w-3 h-3 text-brand-green" />
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{testimonial.location}</span>
                    </div>
                    <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest mt-1.5">
                      {testimonial.yearTag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>



      </div>
    </section>
  );
}

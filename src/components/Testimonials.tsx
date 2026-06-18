import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TestimonialType } from "../types";
import { Star, MapPin, Quote, Sparkles, Building2, User } from "lucide-react";

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const testimonialsList: TestimonialType[] = [
    {
      id: "t1",
      clientName: "Claire Jennings",
      businessName: "Craft & Sew Boutique",
      location: "Harrogate",
      reviewMessage: "Martin completely overhauled our organic presence. Our local search ranking jumped to #1 within 30 days, and our foot traffic is up 45% year-on-year. He is incredibly direct, reliable, and knows exactly how local shoppers think.",
      rating: 5,
      category: "Retail",
      yearTag: "Client Since 2025"
    },
    {
      id: "t2",
      clientName: "Dave Miller",
      businessName: "Apex Plumbing & Gas",
      location: "St Albans",
      reviewMessage: "Before connecting with Marketni, we were throwing thousands at generic PPC agencies with zero return. Martin set up a radius-based lead pipeline. Within weeks we had our team fully booked. His systems work instantly.",
      rating: 5,
      category: "Professional",
      yearTag: "Client Since 2024"
    },
    {
      id: "t3",
      clientName: "Dr. Sonal Patel",
      businessName: "Peak Chiropractic Studio",
      location: "West London",
      reviewMessage: "Martin's custom booking pages and automated SMS reply flows doubled our patient enrollment rate. The tech is top-tier but incredibly easy for our customers. He didn't just give us advice; he built the actual system.",
      rating: 5,
      category: "Health/Wellness",
      yearTag: "Client Since 2025"
    },
    {
      id: "t4",
      clientName: "Marcus Vance",
      businessName: "The Hearthstone Inn",
      location: "Harrogate",
      reviewMessage: "Our restaurant seats were empty on mid-week days. Martin launched a localized 'Storytelling Reel' targeting foodies within 5 miles. We broke our Tuesday revenue record in week three. His advice is gold.",
      rating: 5,
      category: "Food & Leisure",
      yearTag: "Client Since 2025"
    }
  ];

  const categories = ["All", "Retail", "Professional", "Health/Wellness", "Food & Leisure"];

  const filteredTestimonials = selectedCategory === "All"
    ? testimonialsList
    : testimonialsList.filter(t => t.category === selectedCategory);

  return (
    <section id="testimonials" className="bg-[#050505] border-b border-white/10 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Dynamic graphic rings */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 -left-40 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
              <span>[02 // Direct Evidence]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              LOCAL PROOFS & <span className="text-neutral-500">CLIENT SUCCESS.</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-neutral-400 uppercase tracking-wide leading-relaxed">
            Real local businesses in your close neighborhood making actual sales. I let my clients' numbers do the talking.
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap gap-2 text-xs font-mono font-bold tracking-widest uppercase">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-4 py-2.5 border transition-all duration-300 ${
                 selectedCategory === cat
                   ? "bg-cyan-400 text-black border-cyan-400"
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
                className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between hover:border-[#6fffe9]/30 transition duration-300 relative rounded-md group"
              >
                {/* Back decorative quotation sign */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-neutral-900 pointer-events-none group-hover:text-cyan-950/20 duration-300 pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Star Rating list */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400 shrink-0" />
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
                    <div className="w-10 h-10 bg-neutral-950 rounded-none border border-white/10 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                      {testimonial.clientName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight text-white flex items-center space-x-1.5">
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
                      <MapPin className="w-3 h-3 text-cyan-400" />
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

        {/* Local Growth Target block */}
        <div className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-md">
          <div className="space-y-2">
            <h4 className="text-lg font-bold tracking-tight text-white flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-lime-400" />
              <span>Seeking custom expansion metrics for your postcode?</span>
            </h4>
            <p className="text-xs text-neutral-400 font-sans">
              I consult personally on-site with local business owners in Harrogate, St Albans, West London, and adjacent counties.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-lime-400 hover:text-lime-400 text-white font-mono text-xs tracking-wider transition-all cursor-pointer whitespace-nowrap"
          >
            START ON-SITE ENCOUNTERS &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}

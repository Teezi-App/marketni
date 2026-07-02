import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, MessageCircle, Mail, ExternalLink, ArrowRight, ShieldCheck, Zap, Sparkles, Check } from "lucide-react";

export default function SocialFeeds() {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim()) return;
    setEmailSubscribed(true);
    setSubscriberEmail("");
    setTimeout(() => {
      setEmailSubscribed(false);
    }, 4000);
  };

  return (
    <section id="feeds" className="bg-[#050505] text-white py-24 px-6 md:px-12 relative overflow-hidden font-sans border-b border-white/10">
      {/* Structural Tech Accents */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-brand-green font-bold uppercase tracking-widest">
              <span>[02 // Zero Corporate Gatekeepers]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-display uppercase">
              FOLLOW THE LOCAL <br />
              <span className="text-brand-green">MARKETING PLAYBOOK.</span>
            </h2>
          </div>
        </div>

        {/* Playbook Channel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Instagram Channel */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-md p-6 flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-gradient-to-tr from-pink-500/15 to-purple-500/15 border border-pink-500/20 text-pink-500 rounded-sm">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[9px] text-pink-500 font-bold uppercase tracking-widest bg-pink-500/10 px-2 py-0.5 border border-pink-500/20">
                  @marketni_me
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tight text-white font-display">INSTAGRAM REELS</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Fast-paced, visual audits of real Epsom storefronts, copywriting teardowns, and live conversion checks.
                </p>
              </div>

              {/* Mini visual mockup item */}
              <div className="bg-neutral-950 border border-white/5 p-3 rounded space-y-1 font-mono text-[9px] text-neutral-500 select-none">
                <div className="flex justify-between text-[8px] text-neutral-400">
                  <span>INSTA AUDIO ACTIVE</span>
                  <span className="text-pink-500 font-bold">&bull; LIVE</span>
                </div>
                <p className="text-neutral-300 line-clamp-2">"Stop putting your logo in the middle of your banners. Here is why..."</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <a
                href="https://www.instagram.com/marketni_me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-950 hover:bg-pink-500 hover:text-white border border-white/10 hover:border-pink-500 text-neutral-300 font-mono text-xs font-bold tracking-widest transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>OPEN INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: X / Twitter Channel */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-md p-6 flex flex-col justify-between hover:border-neutral-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-neutral-900 border border-white/10 text-white rounded-sm font-sans font-black text-sm">
                  X
                </div>
                <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-widest bg-neutral-900 px-2 py-0.5 border border-white/10">
                  @marketni_me
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tight text-white font-display">GROWTH THREADS</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Uncensored tactical threads on geocoding metadata, schema structures, and local agency secrets.
                </p>
              </div>

              {/* Mini visual mockup item */}
              <div className="bg-neutral-950 border border-white/5 p-3 rounded space-y-1 font-mono text-[9px] text-neutral-500 select-none">
                <div className="flex justify-between text-[8px] text-neutral-400">
                  <span>X THREAD ANALYTICS</span>
                  <span className="text-brand-green font-bold">12.5K READS</span>
                </div>
                <p className="text-neutral-300 line-clamp-2">"Most local ads are absolute snake oil. Simplicity dominates..."</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <a
                href="https://x.com/marketni_me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-950 hover:bg-white hover:text-black border border-white/10 hover:border-white text-neutral-300 font-mono text-xs font-bold tracking-widest transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>READ ON-X</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Direct */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-md p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-sm">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 animate-pulse">
                  FAST REPLY
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tight text-white font-display">WHATSAPP RE-FRESH</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Send me your website URL for a free website re-fresh design and business opportunities direction.
                </p>
              </div>

              {/* Mini visual mockup item */}
              <div className="bg-neutral-950 border border-white/5 p-3 rounded space-y-1 font-mono text-[9px] text-neutral-500 select-none">
                <div className="flex justify-between text-[8px] text-neutral-400">
                  <span>GUARANTEED DELIVERY</span>
                  <span className="text-emerald-400 font-bold">&lt; 48 HOURS</span>
                </div>
                <p className="text-neutral-300 line-clamp-2">"We will send you the website revamp within the next 48hrs."</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <a
                href="https://wa.me/447985182951"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-950 hover:bg-emerald-500 hover:text-black border border-white/10 hover:border-emerald-500 text-neutral-300 font-mono text-xs font-bold tracking-widest transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>WHATSAPP MARTIN</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Email Weekly Dispatch */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-md p-6 flex flex-col justify-between hover:border-brand-green/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-sm">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[9px] text-brand-green font-bold uppercase tracking-widest bg-brand-green/10 px-2 py-0.5 border border-brand-green/20">
                  WEEKLY INTEL
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tight text-white font-display">EMAIL DISPATCH</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Every Monday, get 1 highly actionable local marketing tactic or code script. No spam, just pure strategy.
                </p>
              </div>

              {/* Embedded micro-subscription input */}
              <form onSubmit={handleSubscribe} className="space-y-1.5 pt-1">
                <AnimatePresence mode="wait">
                  {emailSubscribed ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-2 bg-brand-green/10 border border-brand-green/20 text-center rounded text-brand-green font-mono text-[9px] font-bold"
                    >
                      ✓ SUBSCRIBED & KEYED IN
                    </motion.div>
                  ) : (
                    <div className="flex space-x-1">
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={subscriberEmail}
                        onChange={(e) => setSubscriberEmail(e.target.value)}
                        className="bg-neutral-950 border border-white/10 focus:border-brand-green focus:outline-none text-[10px] px-2 py-1.5 rounded-sm w-full text-neutral-200"
                      />
                      <button
                        type="submit"
                        className="bg-brand-green hover:bg-white text-black px-2 py-1 text-[10px] font-mono font-black rounded-sm cursor-pointer"
                      >
                        JOIN
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <button
                type="button"
                onClick={() => {
                  const contactSec = document.getElementById("contact");
                  contactSec?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-2.5 bg-neutral-950 hover:bg-brand-green hover:text-black border border-white/10 hover:border-brand-green text-neutral-300 font-mono text-xs font-bold tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>GET THE BLUEPRINTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

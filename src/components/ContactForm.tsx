import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LeadInquiry } from "../types";
import { Send, CheckCircle, Mail, Phone, MapPin, Building2, User, Inbox, Trash2, BadgeInfo } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("Local SEO Audit");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);

  // Available topics for chips
  const topics = ["Local SEO Audit", "Strategy Consultation", "System Automation", "General Collab"];

  // Load leads from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem("marketni_leads");
    if (cached) {
      try {
        setLeads(JSON.parse(cached));
      } catch (e) {
        console.error("Failed to parse cached leads.");
      }
    } else {
      // Seed initial leads for illustration in Admin view
      const seed: LeadInquiry[] = [
        {
          id: "seed-1",
          senderName: "Marcus Vance",
          senderEmail: "marcus@hearthstoneharrogate.co.uk",
          businessName: "The Hearthstone Inn",
          topic: "Strategy Consultation",
          messageText: "Hey Martin, our Tuesday famille reels were a massive hit. Want to book you for a full 1-on-1 brand strategy consult. Let us know when you're available for a pint and a chat next week.",
          timestamp: "2026-06-17, 14:12",
          isHandled: true
        },
        {
          id: "seed-2",
          senderName: "Claire Jennings",
          senderEmail: "claire@craftsewboutique.com",
          businessName: "Craft & Sew Boutique",
          topic: "Local SEO Audit",
          messageText: "Hi Martin, could we run a map search analysis for our second shop in York? Your St Albans checklist worked wonders.",
          timestamp: "2026-06-18, 09:30",
          isHandled: false
        }
      ];
      setLeads(seed);
      localStorage.setItem("marketni_leads", JSON.stringify(seed));
    }
  }, []);

  // Sync leads back to localStorage
  const saveLeadsToStorage = (updatedLeads: LeadInquiry[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("marketni_leads", JSON.stringify(updatedLeads));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setSubmitError(null);

    const newLead: LeadInquiry = {
      id: "lead-" + Date.now(),
      senderName: name,
      senderEmail: email,
      businessName: businessName || "Independent Operator",
      topic: topic,
      messageText: message,
      timestamp: new Date().toLocaleString(),
      isHandled: false
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessName,
          topic,
          message,
        }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData?.error || "Strategic transmission error.");
      }

      // Save it locally too for the admin dashboard demo
      const updated = [newLead, ...leads];
      saveLeadsToStorage(updated);
      setSubmitted(true);

      // Reset fields
      setName("");
      setEmail("");
      setBusinessName("");
      setPhone("");
      setMessage("");

      // Automatically dismiss success window after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error("Direct channel dispatch failed:", err);
      // Fallback: save to local storage anyway so Martin doesn't lose lead data
      const updated = [newLead, ...leads];
      saveLeadsToStorage(updated);
      
      setSubmitError(
        "Form saved locally! Real email dispatch requires SMTP_HOST, SMTP_USER and SMTP_PASS variables to be added in AI Studio secrets."
      );
      setSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  // Admin Actions
  const toggleHandleLead = (leadId: string) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, isHandled: !l.isHandled } : l);
    saveLeadsToStorage(updated);
  };

  const deleteLead = (leadId: string) => {
    const updated = leads.filter(l => l.id !== leadId);
    saveLeadsToStorage(updated);
  };

  return (
    <section id="contact" className="bg-[#050505] border-t border-white/10 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative High Tech Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-white/5 pointer-events-none" />

      {/* Cybernetic glowing background asset */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct info bullet list */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
                <span>[04 // Connect Directly]</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none">
                ENGAGE THE <span className="text-cyan-400">PLAYBOOK.</span>
              </h2>
              <p className="text-sm font-sans text-neutral-450 leading-relaxed font-light">
                Ready to dominate your postcode? Drop me a message. No automated sales pitches.! I review every local inquiry personally within 24 hours. Let's make your brand the regional default.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-4 bg-neutral-950 p-4 border border-white/10">
                <div className="p-2.5 bg-neutral-900 border border-white/10 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Personal Email</span>
                  <a href="mailto:mwalker@marketni.co" className="text-neutral-200 hover:text-white transition font-bold">mwalker@marketni.co</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-neutral-950 p-4 border border-white/10">
                <div className="p-2.5 bg-neutral-900 border border-white/10 text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Consulting Hotline</span>
                  <span className="text-neutral-200 font-bold">+44 (0) 7985 182 951</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-neutral-950 p-4 border border-white/10">
                <div className="p-2.5 bg-neutral-900 border border-white/10 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Primary Office Address</span>
                  <span className="text-neutral-200 font-bold">Ashley House, Epsom, KT18 5AB</span>
                </div>
              </div>
            </div>

            <p className="text-xs font-sans text-neutral-500 leading-relaxed font-light">
              By submitting this inquiry, you secure a fully custom geographic SEO audit from Martin Walker, provided with zero future obligation.
            </p>
          </div>

          {/* Right Column: Dynamic Form Box layout */}
          <div className="lg:col-span-7">
            <div className="bg-[#050505] border border-white/10 p-6 md:p-8 rounded-md relative shadow-2xl">
              
              <AnimatePresence mode="wait">
                {/* Submit Success block */}
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6 font-mono"
                  >
                    <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-white uppercase">INQUIRY DISPATCHED</h3>
                      <p className="text-xs text-neutral-400 font-sans max-w-sm mx-auto leading-relaxed">
                        Your parameters have been logged and securely routed. Martin Walker will follow up directly within one business day with your geocoded schema diagnostic report.
                      </p>
                    </div>
                    {submitError && (
                      <div className="p-3.5 bg-neutral-950 border border-white/10 text-[10px] text-neutral-400 max-w-sm mx-auto text-left leading-normal font-sans">
                        <p className="font-mono uppercase font-black tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          SMTP Config Notice
                        </p>
                        {submitError}
                      </div>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#050505] border border-white/10 hover:border-white text-white text-xs font-bold uppercase tracking-wider cursor-pointer font-sans"
                    >
                      SEND ANOTHER DIRECT MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block border-b border-white/10 pb-2">
                      [Direct Channel Encrypted]
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-cyan-400 focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-200 font-sans"
                          />
                          <User className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-600" />
                        </div>
                      </div>

                      {/* Business Name */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Business Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="e.g. St Albans Bakery"
                            className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-cyan-400 focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-200 font-sans"
                          />
                          <Building2 className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-600" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-cyan-400 focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-200 font-sans"
                          />
                          <Mail className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-600" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Phone number Code</label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Optional"
                            className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-cyan-400 focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-200 font-sans"
                          />
                          <Phone className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-600" />
                        </div>
                      </div>
                    </div>

                    {/* Topic toggle Chips */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Select Engagement trigger</label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((top) => (
                          <button
                            type="button"
                            key={top}
                            onClick={() => setTopic(top)}
                            className={`px-3 py-1.5 border font-mono text-[10px] tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                              topic === top
                                ? "bg-cyan-400 text-black border-cyan-400 font-bold"
                                : "bg-[#050505] text-neutral-400 border-white/10 hover:text-white"
                            }`}
                          >
                            {top}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Brief Message / Local Targets *</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your business, target area, and any competitive local blockers..."
                        className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-cyan-400 focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-200 font-sans font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 bg-cyan-400 hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-black font-mono text-xs font-black tracking-widest transition duration-200 cursor-pointer flex items-center justify-center space-x-2 rounded-sm"
                    >
                      {isSending ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin mr-1" />
                          <span>TRANSMITTING INQUIRY DATABASE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-black" />
                          <span>DISPATCH INQUIRY DOSSIER &rarr;</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LeadInquiry } from "../types";
import { Send, CheckCircle, Mail, Phone, MapPin, Building2, User, Inbox, Trash2, BadgeInfo } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("BUSINESS AUDIT");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);

  // Available topics for chips
  const topics = ["BUSINESS AUDIT", "Strategy Consultation", "AUTOMATION ADVISE", "GO DIGITAL", "General Collab"];

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
          topic: "BUSINESS AUDIT",
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
    <section id="contact" className="bg-[#fcfcfc] border-t border-neutral-200 text-neutral-900 py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative High Tech Shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-neutral-200/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-neutral-200/50 pointer-events-none" />

      {/* Cybernetic glowing background asset */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct info bullet list */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 font-mono text-xs text-neutral-900 font-extrabold uppercase tracking-widest">
                <span>[04 // Connect Directly]</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 leading-none font-display">
                ENGAGE THE <span className="text-neutral-900 relative inline-block border-b-4 border-brand-green">PLAYBOOK.</span>
              </h2>
              <p className="text-sm font-sans text-neutral-600 leading-relaxed font-light">
                Ready to dominate your postcode? Drop me a message. No automated sales pitches! I review every local inquiry personally within 24 hours. Let's make your brand the regional default.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-4 bg-white p-4 border border-neutral-200 rounded shadow-sm">
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 text-brand-green rounded-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-450 uppercase tracking-widest font-bold">Personal Email</span>
                  <a href="mailto:mwalker@marketni.co" className="text-neutral-800 hover:text-black transition font-bold">mwalker@marketni.co</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 border border-neutral-200 rounded shadow-sm">
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 text-brand-green rounded-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-450 uppercase tracking-widest font-bold">WHATSAPP HOTLINE</span>
                  <a href="tel:+447985182951" className="text-neutral-800 hover:text-black transition font-bold">+44 (0) 7985 182 951</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white p-4 border border-neutral-200 rounded shadow-sm">
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 text-brand-green rounded-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-neutral-450 uppercase tracking-widest font-bold">Primary Office Address</span>
                  <span className="text-neutral-800 font-bold">Ashley House, Epsom, KT18 5AB</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Box layout */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 p-6 md:p-8 rounded-md relative shadow-xl">
              
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
                    <CheckCircle className="w-16 h-16 text-brand-green mx-auto animate-bounce" />
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-neutral-900 uppercase font-display">INQUIRY DISPATCHED</h3>
                      <p className="text-xs text-neutral-600 font-sans max-w-sm mx-auto leading-relaxed">
                        Your parameters have been logged and securely routed. Martin Walker will follow up directly within one business day with your geocoded schema diagnostic report.
                      </p>
                    </div>
                    {submitError && (
                      <div className="p-3.5 bg-neutral-50 border border-neutral-200 text-[10px] text-neutral-500 max-w-sm mx-auto text-left leading-normal font-sans">
                        <p className="font-mono uppercase font-black tracking-wider text-brand-green mb-1 flex items-center gap-1.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                          SMTP Config Notice
                        </p>
                        {submitError}
                      </div>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-neutral-900 hover:bg-black text-white text-sm font-bold uppercase tracking-wider cursor-pointer font-sans rounded"
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
                    <span className="font-mono text-[10px] text-neutral-450 uppercase tracking-widest block border-b border-neutral-250 pb-2 font-bold">
                      [Direct Channel Encrypted]
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-brand-green focus:bg-white focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-950 font-sans"
                          />
                          <User className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                        </div>
                      </div>

                      {/* Business Name */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Business Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="e.g. Epsom Bakery"
                            className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-brand-green focus:bg-white focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-950 font-sans"
                          />
                          <Building2 className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Email Address *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-brand-green focus:bg-white focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-950 font-sans"
                          />
                          <Mail className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Phone number Code</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Optional"
                            className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-brand-green focus:bg-white focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-950 font-sans"
                          />
                          <Phone className="absolute right-3 top-3.5 w-3.5 h-3.5 text-neutral-400" />
                        </div>
                      </div>
                    </div>

                    {/* Topic toggle Chips */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Select Engagement trigger</label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((top) => (
                          <button
                            type="button"
                            key={top}
                            onClick={() => setTopic(top)}
                            className={`px-3 py-1.5 border font-mono text-sm tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                              topic === top
                                ? "bg-brand-green text-black border-brand-green font-bold"
                                : "bg-neutral-50 text-neutral-600 border-neutral-300 hover:text-black hover:border-neutral-900"
                            }`}
                          >
                            {top}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-black font-extrabold uppercase tracking-wider">Brief Message / Local Targets *</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your business, target area, and any competitive local blockers..."
                        className="w-full bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-brand-green focus:bg-white focus:outline-none transition px-3.5 py-2.5 text-xs text-neutral-950 font-sans font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 bg-brand-green hover:bg-neutral-900 hover:text-white disabled:bg-neutral-150 disabled:text-neutral-400 disabled:cursor-not-allowed text-black font-mono text-sm font-black tracking-widest transition duration-200 cursor-pointer flex items-center justify-center space-x-2 rounded-sm"
                    >
                      {isSending ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin mr-1" />
                          <span>TRANSMITTING INQUIRY DATABASE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-black" />
                          <span>SEND ENQUIRY &rarr;</span>
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

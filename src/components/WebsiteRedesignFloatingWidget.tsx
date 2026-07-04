import { useState, MouseEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Send, ArrowRight, CheckCircle2, Loader2, Monitor } from "lucide-react";

export default function WebsiteRedesignFloatingWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCloseModal = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
    // Reset state after closing
    setFirstName("");
    setBusinessName("");
    setWebsiteUrl("");
    setContactInfo("");
    setSubmitSuccess(false);
    setErrorMsg("");
  };

  const handleDismissWidget = (e: MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !businessName || !websiteUrl || !contactInfo) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/redesign-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          businessName,
          websiteUrl,
          contactInfo,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Trigger Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-4 right-4 mx-auto sm:left-auto sm:right-6 sm:bottom-6 sm:mx-0 w-auto max-w-sm z-50"
            id="redesign-floating-container"
          >
            <div 
              onClick={handleOpen}
              className="relative group bg-neutral-950/95 hover:bg-black border border-brand-green/30 hover:border-brand-green/80 p-4 md:p-5 rounded-2xl shadow-2xl shadow-brand-green/5 cursor-pointer flex items-start gap-3 backdrop-blur-md transition-all duration-300"
              id="redesign-bubble-card"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-2.5 -left-2 bg-brand-green text-black text-[9px] font-mono font-black tracking-wider uppercase px-2 py-0.5 rounded-sm shadow-md animate-pulse">
                FREE REDESIGN
              </div>

              {/* Icon Indicator */}
              <div className="bg-brand-green/10 p-2.5 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-black transition duration-300 shrink-0 mt-1">
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Core Text */}
              <div className="space-y-1 pr-6">
                <h4 className="text-xs font-mono font-black text-brand-green tracking-widest uppercase">
                  BUSINESS SUPPORT
                </h4>
                <p className="text-sm font-bold text-white tracking-tight leading-tight">
                  Want To See What Your Website Could Become?
                </p>
                <p className="text-[10px] text-neutral-400 font-mono font-light tracking-wide flex items-center gap-1">
                  <span>Click to request 48hr concept</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition duration-200" />
                </p>
              </div>

              {/* Widget Close Button */}
              <button
                onClick={handleDismissWidget}
                className="absolute top-3 right-3 p-1 rounded-full text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
                title="Dismiss widget"
                id="btn-dismiss-redesign-widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Transition Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full min-h-screen z-[9999] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 overflow-y-auto"
            id="redesign-modal-overlay"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-xl mx-auto my-auto bg-neutral-950 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
              id="redesign-modal-card"
            >
              {/* Subtle visual laser accent lines */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition"
                title="Close overlay"
                id="btn-close-redesign-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dynamic Content */}
              {!submitSuccess ? (
                <div className="space-y-6" id="redesign-form-content">
                  {/* Title and Intro */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center space-x-2 bg-brand-green/10 px-3 py-1 rounded-full text-brand-green font-mono text-xs font-bold tracking-wider uppercase">
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Complimentary Homepage Revamp</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white leading-snug font-display tracking-tight uppercase">
                      Fantastic! I'll review your details below and send your free homepage redesign within 48hrs
                    </h2>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Please supply accurate details so Martin can thoroughly evaluate your digital layout, search positioning, and business conversion opportunities.
                    </p>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleSubmit} className="space-y-4" id="redesign-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Name Input */}
                      <div className="space-y-1">
                        <label htmlFor="first-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                          First Name <span className="text-brand-green font-black">*</span>
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g., Sarah"
                          className="w-full bg-neutral-900 border border-white/10 focus:border-brand-green text-white px-4 py-3 rounded-md text-sm outline-none transition duration-250 placeholder:text-neutral-600"
                        />
                      </div>

                      {/* Business Name Input */}
                      <div className="space-y-1">
                        <label htmlFor="business-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                          Business Name <span className="text-brand-green font-black">*</span>
                        </label>
                        <input
                          type="text"
                          id="business-name"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g., Epsom Local Café"
                          className="w-full bg-neutral-900 border border-white/10 focus:border-brand-green text-white px-4 py-3 rounded-md text-sm outline-none transition duration-250 placeholder:text-neutral-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Website URL Input */}
                      <div className="space-y-1">
                        <label htmlFor="website-url" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                          Website URL <span className="text-brand-green font-black">*</span>
                        </label>
                        <input
                          type="text"
                          id="website-url"
                          required
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          placeholder="e.g., www.mybusiness.co.uk"
                          className="w-full bg-neutral-900 border border-white/10 focus:border-brand-green text-white px-4 py-3 rounded-md text-sm outline-none transition duration-250 placeholder:text-neutral-600"
                        />
                      </div>

                      {/* Phone or Email Input */}
                      <div className="space-y-1">
                        <label htmlFor="contact-info" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                          Phone or Email <span className="text-brand-green font-black">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-info"
                          required
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="e.g., sarah@email.com or 0712345678"
                          className="w-full bg-neutral-900 border border-white/10 focus:border-brand-green text-white px-4 py-3 rounded-md text-sm outline-none transition duration-250 placeholder:text-neutral-600"
                        />
                      </div>
                    </div>

                    {/* Error Box */}
                    {errorMsg && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-rose-400 font-mono"
                        id="redesign-error-msg"
                      >
                        {errorMsg}
                      </motion.p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-brand-green hover:bg-white text-black font-mono font-black text-xs tracking-widest uppercase py-4 rounded-sm transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      id="btn-redesign-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING TO MARTIN...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND TO MARTIN</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Message State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                  id="redesign-success-state"
                >
                  <div className="flex justify-center">
                    <div className="bg-brand-green/10 p-4 rounded-full text-brand-green">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white font-display tracking-tight uppercase">
                      REQUEST RECEIVED!
                    </h3>
                    <p className="text-sm font-light text-neutral-300 max-w-md mx-auto">
                      We will send you the website revamp within the next 48hrs.
                    </p>
                    <p className="text-xs text-neutral-500 font-mono font-light">
                      Martin is currently pulling up your site metadata. Prepare to see your brand completely transformed!
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-3 border border-white/15 hover:border-brand-green text-neutral-400 hover:text-white font-mono text-xs tracking-wider uppercase rounded-sm transition duration-200 cursor-pointer"
                      id="btn-success-close"
                    >
                      CLOSE WINDOW
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

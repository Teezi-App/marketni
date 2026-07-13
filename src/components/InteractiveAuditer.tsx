import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Play, Search, MapPin, Target, Send, Layers, Printer, RotateCcw, AlertCircle, Cpu } from "lucide-react";

interface AuditResult {
  campaignTitle: string;
  steps: Array<{
    title: string;
    detail: string;
  }>;
  quote: string;
}

export default function InteractiveAuditer() {
  // Form input status
  const [businessName, setBusinessName] = useState("");
  const [industrySpace, setIndustrySpace] = useState("");
  const [localArea, setLocalArea] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AuditResult | null>(null);

  const logs = [
    "Establishing connection with Marketni Consulting Core...",
    `Scanning search-pack competition indexing local ${industrySpace || "industries"}...`,
    `Analyzing geo-grid ranking signals specifically for ${localArea || "the area"}...`,
    `Mapping demographic intent triggers for: "${targetAudience || "local prospects"}"...`,
    "Applying Martin Walker's custom acquisition algorithms...",
    "Bespoke strategy compiled. Opening secure telemetry dashboard..."
  ];

  const handleRunAudit = async (e: FormEvent) => {
    e.preventDefault();
    if (!businessName || !industrySpace || !localArea || !targetAudience) return;

    setLoading(true);
    setResult(null);
    setError(null);
    setLoadingStep(0);

    // Dynamic simulated terminal logs
    const logInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= logs.length - 1) {
          clearInterval(logInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1100);

    try {
      const resp = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          industrySpace,
          localArea,
          targetAudience,
        }),
      });

      if (!resp.ok) {
        throw new Error("Local system compilation stalled. Please retry.");
      }

      const data = await resp.json();
      
      // Keep loading on screen for at least 4.5 seconds to build immersion for the terminal outputs
      setTimeout(() => {
        clearInterval(logInterval);
        setResult(data);
        setLoading(false);
      }, 4800);

    } catch (err: any) {
      clearInterval(logInterval);
      setError(err.message || "An error occurred compiling strategy.");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="strategy" className="bg-brand-green border-b border-black/15 text-neutral-900 py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Cybernetic glowing background asset */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-1 bg-neutral-950 border border-neutral-900 px-3 py-1 text-brand-green text-xs font-mono font-bold tracking-widest uppercase shadow-md">
            <Cpu className="w-3.5 h-3.5 animate-spin" />
            <span>Marketni Module [V2.55]</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none font-display text-neutral-950 uppercase">
            INSTANT LOCAL <span className="text-black">CAMPAIGNS.</span>
          </h2>
          <p className="text-sm font-sans text-neutral-850 max-w-2xl mx-auto font-medium leading-relaxed">
            Input your business details. My custom-engineered machine proxy will generate you a 3-stage local acquisition plan to dominate your competitors.
          </p>
        </div>

        {/* Console Box Layout */}
        <div className="bg-[#050505] border border-black/20 rounded-lg overflow-hidden shadow-2xl">
          {/* Header of the terminal */}
          <div className="bg-neutral-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="font-mono text-xs text-neutral-400 ml-2 tracking-widest font-bold">
                martin-walker-campaigns.exe
              </span>
            </div>
            <span className="font-mono text-[10px] text-brand-green font-bold bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 animate-pulse uppercase">
              // Live Node
            </span>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              
              {/* Reset state: The user input forms */}
              {!loading && !result && !error && (
                <motion.form
                  onSubmit={handleRunAudit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="font-mono text-xs text-neutral-500 tracking-wider uppercase border-b border-white/10 pb-3 mb-6">
                    [01// Establish Target Parameters]
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Business Name */}
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        Business Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="e.g., Bella Sourdough Bakery"
                          className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-brand-green focus:outline-none transition-colors px-4 py-3 text-neutral-200 text-sm font-sans"
                        />
                        <Send className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                      </div>
                    </div>

                    {/* Industry niche */}
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        Industry / Niche Specialty
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={industrySpace}
                          onChange={(e) => setIndustrySpace(e.target.value)}
                          placeholder="e.g., Artisan Sourdough, Dentist, Plumber"
                          className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-brand-green focus:outline-none transition-colors px-4 py-3 text-neutral-200 text-sm font-sans"
                        />
                        <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                      </div>
                    </div>

                    {/* Local Area */}
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        Local City, Town, or district
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={localArea}
                          onChange={(e) => setLocalArea(e.target.value)}
                          placeholder="e.g., Epsom, Leatherhead, Sutton"
                          className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-brand-green focus:outline-none transition-colors px-4 py-3 text-neutral-200 text-sm font-sans"
                        />
                        <MapPin className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="space-y-2">
                      <label className="block font-mono text-xs text-neutral-300 uppercase tracking-wider">
                        Target customer profile
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={targetAudience}
                          onChange={(e) => setTargetAudience(e.target.value)}
                          placeholder="e.g., Young foodies, Local homeowners"
                          className="w-full bg-[#050505] border border-white/10 hover:border-neutral-700 focus:border-brand-green focus:outline-none transition-colors px-4 py-3 text-neutral-200 text-sm font-sans"
                        />
                        <Target className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-600" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-green hover:bg-white text-black font-mono text-xs font-black tracking-widest transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 animate-pulse"
                    >
                      <Sparkles className="w-4 h-4 text-black" />
                      <span>RUN CAMPAIGN ENGINE &rarr;</span>
                    </button>
                    <span className="block text-center text-[10px] text-neutral-500 uppercase tracking-wider font-mono mt-3">
                      Connection guaranteed &bull; Fully integrated local schema models
                    </span>
                  </div>
                </motion.form>
              )}

              {/* Loading State: Terminal Log Output */}
              {loading && !result && (
                <motion.div
                  key="loading-screen"
                  className="space-y-6 min-h-[300px] flex flex-col justify-between font-mono select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-xs text-neutral-500 uppercase tracking-wider border-b border-white/10 pb-3">
                    [02// Telemetry Signal active]
                  </p>

                  <div className="space-y-2.5 flex-grow font-mono text-xs">
                    {logs.slice(0, loadingStep + 1).map((log, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start space-x-2 duration-300 ${
                          idx === loadingStep ? "text-brand-green font-bold" : "text-neutral-400"
                        }`}
                      >
                        <span className="text-neutral-600">[{idx+1}]</span>
                        <span className="shrink-0">{idx === loadingStep ? ">>" : "OK"}</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visual Loading Indicator bar */}
                  <div className="space-y-2 bg-[#050505] p-4 border border-white/10">
                    <div className="flex justify-between items-center text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                      <span>Synthesizing Local Strategy</span>
                      <span>{Math.round(((loadingStep + 1) / logs.length) * 100)}% Complete</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-900 border border-white/10">
                      <div 
                        className="h-full bg-brand-green duration-500"
                        style={{ width: `${((loadingStep + 1) / logs.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error State */}
              {error && (
                <motion.div
                  key="error-screen"
                  className="space-y-6 text-center py-12 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle className="w-12 h-12 text-red-500 mx-auto animate-bounce" />
                  <p className="text-sm font-bold text-neutral-200">
                    {error}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#050505] border border-white/10 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Reset &amp; Try Again
                  </button>
                </motion.div>
              )}

              {/* Result State: The bespoke strategy render */}
              {result && !loading && (
                <motion.div
                  key="result-screen"
                  className="space-y-8"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Results Subheader */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <span className="font-mono text-[10px] text-brand-green uppercase tracking-widest block font-bold">
                        Bespoke Campaign Dossier Compiled
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white mt-1 font-display">
                        {result.campaignTitle}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrint}
                        className="p-2 sm:px-3 sm:py-1.5 bg-neutral-950 border border-white/10 hover:border-white text-neutral-400 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition duration-200 cursor-pointer"
                        title="Print PDF Strategy"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Print / Save PDF</span>
                      </button>
                      <button
                        onClick={handleReset}
                        className="p-2 sm:px-3 sm:py-1.5 bg-neutral-950 border border-white/10 hover:border-white text-brand-green hover:text-white font-mono text-xs flex items-center space-x-1.5 transition duration-200 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">New Audit</span>
                      </button>
                    </div>
                  </div>

                  {/* 3 Phases steps cards */}
                  <div className="space-y-4">
                    {result.steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="bg-neutral-950 border border-white/10 p-5 rounded relative group hover:border-brand-green/30 transition duration-350"
                      >
                        <span className="absolute top-5 right-5 font-mono text-2xl text-neutral-800 font-bold group-hover:text-brand-green/20 transition duration-300">
                          0{idx+1}
                        </span>
                        
                        <div className="space-y-2 max-w-[90%]">
                          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-black block">
                            Campaign Phase 0{idx+1}
                          </span>
                          <h4 className="text-base font-bold tracking-tight text-white group-hover:text-brand-green duration-300 font-display uppercase">
                            {step.title}
                          </h4>
                          <p className="text-xs font-sans text-neutral-400 leading-relaxed font-light">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Martin's Quote block */}
                  <div className="bg-neutral-950 border-l-2 border-brand-green p-5 italic text-sm text-neutral-350 font-sans relative">
                    <span className="absolute -top-3 left-4 bg-[#050505] px-2 border border-white/10 font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-black">
                      Walker's Playbook Comment
                    </span>
                    <p className="leading-relaxed font-sans font-light">
                      &ldquo;{result.quote}&rdquo;
                    </p>
                    <span className="block mt-2 font-mono text-[10px] text-brand-green not-italic uppercase font-bold tracking-wider text-right">
                      &mdash; Martin Walker, Strategy Lead, Marketni
                    </span>
                  </div>

                  {/* Immediate outreach trigger */}
                  <div className="bg-brand-green/10 border border-brand-green/25 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-brand-green font-bold uppercase tracking-widest block font-bold">
                        Phase 4: Flawless Production
                      </span>
                      <p className="text-xs font-sans text-neutral-300">
                        Let's translate this AI framework into an active lead acquisition machine. Connect directly.
                      </p>
                    </div>
                    
                    <a
                      href="#contact"
                      className="px-5 py-2.5 bg-brand-green text-black hover:bg-white transition duration-200 font-mono text-xs font-black text-center tracking-widest shrink-0"
                    >
                      ENGAGE THE PLAYBOOK &rarr;
                    </a>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

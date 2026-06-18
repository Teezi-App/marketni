import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SocialPostType } from "../types";
import { Heart, MessageSquare, Share2, Instagram, MessageCircle, ExternalLink, Calendar, PlusCircle, CheckCircle } from "lucide-react";

export default function SocialFeeds() {
  const [posts, setPosts] = useState<SocialPostType[]>([
    {
      id: "sp1",
      platform: "instagram",
      username: "marketni_martin",
      avatarLetter: "MW",
      avatarColor: "bg-gradient-to-tr from-cyan-400 to-teal-500",
      relativeTime: "10 hours ago",
      metrics: { likes: 142, shares: 19, comments: 3 },
      mediaType: "image",
      mediaUrl: "https://picsum.photos/seed/agency/600/400",
      captionText: "Local SEO Hack 💡: Geocode your web images! Prior to uploading pictures to your site, embed the precise longitude and latitude coordinates of your storefront in the EXIF metadata. Google's local indexing crawl decodes these signals, immediately reinforcing your local maps-pack rankings in that exact neighborhood corridor. It takes 5 minutes but puts you miles ahead on search rankings. #LocalSEO #HyperLocal #AgencyLife #Marketni #Consulting",
      commentsList: [
        { author: "bella_napoli_cafe", text: "Did this on our St Albans page and we already saw three queries mentioning maps today!", timestamp: "8h ago" },
        { author: "miller_builders", text: "Incredible tips. Standard agencies never tell you this stuff.", timestamp: "6h ago" },
        { author: "harrogate_boutique", text: "Martin, we need to map our other store coordinates. DM sent!", timestamp: "4h ago" }
      ]
    },
    {
      id: "sp2",
      platform: "x",
      username: "MartinWalkerX",
      avatarLetter: "MW",
      avatarColor: "bg-neutral-900 border border-white/10",
      relativeTime: "1 day ago",
      metrics: { likes: 312, shares: 84, comments: 2 },
      mediaType: "quote",
      captionText: "Most local advertising is absolute snake oil. Agencies upsell complex programmatic display networks to a neighborhood chiropractor. Why? Because they can charge a chunky retainer.\n\nSimplicity dominates. Radiate high-quality, authentic short videos on Instagram in a 5-mile local radius. Solve one specific pain point. Connect it straight to a clean 1-click booking tool on maps. That is how you generate direct ROI. Keep it simple, neighbors.",
      commentsList: [
        { author: "apex_plumbing_dave", text: "Spot on Martin. No bloated fees, just direct bookings that keep my vans rolling.", timestamp: "20h ago" },
        { author: "vance_marcus", text: "Saved our Tuesday dinner service. Best advice I got all year.", timestamp: "18h ago" }
      ]
    },
    {
      id: "sp3",
      platform: "instagram",
      username: "marketni_martin",
      avatarLetter: "MW",
      avatarColor: "bg-gradient-to-tr from-cyan-400 to-teal-500",
      relativeTime: "3 days ago",
      metrics: { likes: 98, shares: 7, comments: 1 },
      mediaType: "text_only",
      captionText: "Slogan template for modern dentists: Stop writing 'We care for your smile' on your billboard. Write: 'The St Albans dental team that makes you look forward to the reservation.' Custom positioning acts as a barrier that prevents rivals from stealing your customer leads on price. Stand out or get commoditized. #BrandPositioning #CopywritingTips",
      commentsList: [
        { author: "dental_care_patel", text: "Changed our header copy to this format and the patient registration conversion tripled immediately.", timestamp: "2d ago" }
      ]
    }
  ]);

  const [activeCommentsPostId, setActiveCommentsPostId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState("");
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // Like status toggler
  const handleLike = (postId: string) => {
    const isLiked = likedPosts[postId];
    setLikedPosts(prev => ({ ...prev, [postId]: !isLiked }));

    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            metrics: {
              ...p.metrics,
              likes: isLiked ? p.metrics.likes - 1 : p.metrics.likes + 1
            }
          };
        }
        return p;
      })
    );
  };

  // Add Comment live simulator
  const handleCommentSubmit = (e: FormEvent, postId: string) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            metrics: {
              ...p.metrics,
              comments: p.metrics.comments + 1
            },
            commentsList: [
              ...p.commentsList,
              {
                author: "your_local_business",
                text: newCommentText,
                timestamp: "Just now"
              }
            ]
          };
        }
        return p;
      })
    );

    setNewCommentText("");
  };

  return (
    <section id="feeds" className="bg-[#050505] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative High Tech Gridlines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 pointer-events-none" />

      {/* Background glow assets */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
              <span>[03 // Streaming Insights]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              MARKETNI RADAR: <span className="text-neutral-500">INSIGHTS FEED.</span>
            </h2>
          </div>
          <div className="font-mono text-xs max-w-sm text-neutral-400 uppercase tracking-wide leading-relaxed">
            Real tactical value. Check my live social channels for hot updates, local marketing secrets, and direct case studies.
          </div>
        </div>

        {/* Outer Flex Feed Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: List of Live Posts */}
          <div className="lg:col-span-8 space-y-8">
            {posts.map((post) => {
              const hasLiked = likedPosts[post.id];
              return (
                <div 
                  key={post.id}
                  className="bg-[#050505] border border-white/10 hover:border-[#6fffe9]/30 transition duration-300 rounded-md overflow-hidden relative"
                >
                  {/* Post Header */}
                  <div className="px-6 py-4 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-none flex items-center justify-center font-mono font-black text-xs ${post.avatarColor}`}>
                        {post.avatarLetter}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5 font-bold text-xs text-white">
                          <span>{post.username}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 fill-cyan-950" />
                        </div>
                        <span className="text-[10px] text-neutral-500 font-mono tracking-wide">{post.relativeTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {post.platform === "instagram" ? (
                        <div className="flex items-center space-x-1 text-xs text-neutral-400 font-mono">
                          <Instagram className="w-4 h-4 text-pink-500" />
                          <span className="hidden sm:inline">Instagram</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 text-xs text-neutral-400 font-mono">
                          <span className="font-sans font-bold text-white text-base leading-none">X</span>
                          <span className="hidden sm:inline">Twitter</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm font-sans text-neutral-250 leading-relaxed font-light whitespace-pre-line">
                      {post.captionText}
                    </p>

                    {/* Media render if present */}
                    {post.mediaType === "image" && post.mediaUrl && (
                      <div className="relative rounded-md overflow-hidden border border-white/10">
                        <img 
                          src={post.mediaUrl}
                          alt="Feed visual insight"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover max-h-[350px] filter contrast-[1.02] grayscale-[10%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <span className="font-mono text-[9px] text-cyan-400 tracking-wider font-bold">
                            EXCLUSIVE CASE FILE // LOCAL INTENT ENGINE
                          </span>
                        </div>
                      </div>
                    )}

                    {post.mediaType === "quote" && (
                      <div className="border-l-2 border-cyan-400 pl-4 py-1.5 italic text-sm text-neutral-400 font-sans">
                        &quot;Simplifying local metrics drives direct neighborhood customer acquisitions.&quot;
                      </div>
                    )}
                  </div>

                  {/* Post Footer metrics bar */}
                  <div className="px-6 py-4 bg-neutral-950 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1.5 transition-colors cursor-pointer ${
                          hasLiked ? "text-red-400 font-bold" : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${hasLiked ? "fill-red-400 text-red-400" : ""}`} />
                        <span>{post.metrics.likes}</span>
                      </button>

                      <button 
                        onClick={() => setActiveCommentsPostId(activeCommentsPostId === post.id ? null : post.id)}
                        className="flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.commentsList.length} Comments</span>
                      </button>

                      <button className="flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer">
                        <Share2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Share</span>
                      </button>
                    </div>

                    <a 
                      href="https://www.marketni.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition flex items-center space-x-1"
                    >
                      <span className="text-[10px] uppercase font-bold tracking-wider">Open App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Expandable Comments Drawer */}
                  <AnimatePresence>
                    {activeCommentsPostId === post.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/10 bg-neutral-950/40 overflow-hidden"
                      >
                        <div className="p-6 space-y-4">
                          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block font-bold">
                            Live Discussion Thread
                          </span>

                          <div className="space-y-3">
                            {post.commentsList.map((comment, index) => (
                              <div key={index} className="bg-neutral-950/80 border border-white/10 p-3 rounded text-xs flex justify-between items-start">
                                <div className="space-y-1">
                                  <span className="font-mono font-bold text-cyan-400">@{comment.author}:</span>
                                  <p className="text-neutral-300 font-sans font-light leading-relaxed">{comment.text}</p>
                                </div>
                                <span className="text-[9px] font-mono text-neutral-600 shrink-0">{comment.timestamp}</span>
                              </div>
                            ))}
                          </div>

                          {/* Post comment form */}
                          <form onSubmit={(e) => handleCommentSubmit(e, post.id)} className="flex items-center gap-2 pt-2 border-t border-white/10">
                            <input 
                              type="text" 
                              required
                              value={newCommentText}
                              onChange={(e) => setNewCommentText(e.target.value)}
                              placeholder="Write a simulated live response (e.g. your business name)..."
                              className="bg-neutral-950 border border-white/10 hover:border-neutral-700/55 focus:border-cyan-400 focus:outline-none transition px-3 py-2 text-xs flex-grow font-sans text-neutral-200"
                            />
                            <button 
                              type="submit"
                              className="bg-cyan-400 hover:bg-white text-black font-mono font-black text-[10px] uppercase py-2.5 px-4 tracking-widest cursor-pointer whitespace-nowrap"
                            >
                              Post reply
                            </button>
                          </form>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Martin's Channel Spotlight */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#050505] border border-white/10 p-6 rounded-md space-y-6 relative">
              <span className="absolute top-0 left-0 w-8 h-px bg-cyan-400" />
              <span className="absolute top-0 left-0 w-px h-8 bg-cyan-400" />

              <div className="space-y-2">
                <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest block font-bold">
                  Channel Directory
                </span>
                <h4 className="text-xl font-bold tracking-tight text-white leading-tight">
                  Follow the local marketing playbook.
                </h4>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Channel List */}
                <div className="bg-neutral-950 p-3.5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span className="text-neutral-200">@marketni_martin</span>
                  </div>
                  <span className="text-[9px] text-neutral-500 font-bold tracking-widest uppercase">7.4k fans</span>
                </div>

                <div className="bg-neutral-950 p-3.5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="font-sans font-black text-white text-base leading-none">X</span>
                    <span className="text-neutral-200">@MartinWalkerX</span>
                  </div>
                  <span className="text-[9px] text-neutral-500 font-bold tracking-widest uppercase">12.1k fans</span>
                </div>

                <div className="bg-neutral-950 p-3.5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-neutral-200">Martin Consultation</span>
                  </div>
                  <span className="text-[9px] text-neutral-500 font-bold tracking-widest uppercase">On-Site</span>
                </div>
              </div>

              <p className="text-xs font-sans text-neutral-450 leading-relaxed font-light">
                I share real local marketing templates, geocoding maps-pack code scripts, and immediate CRM automations direct to our channels. We connect with real neighbors.
              </p>

              <button
                onClick={() => {
                  const target = document.getElementById("contact");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-white font-mono text-xs font-bold tracking-widest transition duration-200 cursor-pointer"
              >
                BOOK ON-SITE IN-PERSON CONSULT
              </button>
            </div>

            {/* Quote of the day */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-md space-y-4 font-sans font-light">
              <span className="text-cyan-400 text-lg font-bold leading-none">“</span>
              <p className="text-neutral-300 text-sm italic font-light">
                A highly-optimized business listing in St Albans out-converts a £10,000 national campaign with zero local focus. Local trust is the ultimate leverage.
              </p>
              <div className="text-right font-mono text-[9px] text-neutral-500 uppercase tracking-widest mt-2">
                &mdash; Martin Walker, X, January 2026
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

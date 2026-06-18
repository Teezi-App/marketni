import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Martin's Instant AI Local Marketing Strategy Auditor
  app.post("/api/audit", async (req, res) => {
    const { businessName, industrySpace, localArea, targetAudience } = req.body;
    
    if (!businessName || !industrySpace || !localArea || !targetAudience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const fallbackResponse = {
      campaignTitle: `Local Market Domination Strategy for ${businessName}`,
      steps: [
        {
          title: "Phase 1: Saturate Local Search & Mapping Real Estate",
          detail: `Lock down localized keywords matching "${industrySpace} in ${localArea}". Optimize structures so that when the custom demographic (${targetAudience}) searches local terms, your business is the immediate default solution. Setup interactive citations and custom schema.`
        },
        {
          title: "Phase 2: Tailored Community & Visual Storytelling",
          detail: `Abandon standard boring corporate posts. Create video and photographic narratives speaking directly to the unique cultural values of ${targetAudience} in ${localArea}. Feature local faces, community partnerships, and real utility.`
        },
        {
          title: "Phase 3: Automated Conversational Lead Capture",
          detail: `Implement frictionless conversational landing structures, giving local prospects a direct, personalized incentive (e.g., local vouchers, video audit) in exchange for their contact details, then build a automated, highly personable SMS/email nurture chain.`
        }
      ],
      quote: `Forget mass marketing. If you want to build a truly bulletproof local brand in ${localArea}, you must speak to your audience as key distinct neighbors. Customization and trust outperform pure ad budgets every single time.`
    };

    if (!process.env.GEMINI_API_KEY) {
      console.log("GEMINI_API_KEY not found in environment, returning customized aesthetic fallback strategy.");
      return res.json(fallbackResponse);
    }

    try {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are Martin Walker, a brilliant, charismatic, local-focused marketing consultant of Marketni. The user's business details are:
- Business Name: ${businessName}
- Industry/Space: ${industrySpace}
- Local Area/City/Town: ${localArea}
- Target Customer Demographic: ${targetAudience}

Generate a hyper-creative, high-impact, 3-phase bespoke marketing campaign strategy designed to help them immediately stand out and dominate their local market.
Provide a high-quality JSON response matching the exact structure below:
{
  "campaignTitle": "A catchy, custom headline for the local campaign",
  "steps": [
    {
      "title": "Phase 1 Title (e.g., Hyper-Local Mapping, Community Launch)",
      "detail": "Specific actionable marketing playbook steps, brief and confident style."
    },
    {
      "title": "Phase 2 Title",
      "detail": "Specific actionable marketing playbook steps, brief and confident style."
    },
    {
      "title": "Phase 3 Title",
      "detail": "Specific actionable playbook steps, brief and confident style."
    }
  ],
  "quote": "A powerful quote tailored directly to their sector and town in Martin Walker's visionary, confident style"
}

Make sure that you return ONLY valid, parsable JSON matching this structure. Do not surround with markdown block unless it's strictly a raw JSON stream.`
      });

      const text = response.text || "";
      // Strip markdown code fences if present
      const cleanedJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
      
      try {
        const parsed = JSON.parse(cleanedJson);
        return res.json(parsed);
      } catch (parseError) {
        console.error("Failed to parse Gemini JSON, returning personalized fallback:", text);
        return res.json(fallbackResponse);
      }
    } catch (apiError) {
      console.error("Gemini API call failed:", apiError);
      return res.json(fallbackResponse);
    }
  });

  // Serve static assets or configure Vite middleware depending on mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

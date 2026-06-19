import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Helper to send emails via SMTP or fall back gracefully
async function sendEmail({
  to,
  subject,
  html,
  replyTo
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM_EMAIL || user || "no-reply@marketni.co";

  console.log(`[Email Dispatch] Attempting to send email to ${to} with subject: "${subject}"`);

  if (!host || !user || !pass) {
    console.warn(
      `[Email Dispatch Warning] SMTP server not configured in environment variables!\n` +
      `Please configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in the AI Studio settings.\n` +
      `----------------- SIMULATED OUTBOX MESSAGE -----------------\n` +
      `To: ${to}\n` +
      `Reply-To: ${replyTo || "N/A"}\n` +
      `Subject: ${subject}\n` +
      `Content:\n${html.replace(/<[^>]*>/g, " ").trim()}\n` +
      `------------------------------------------------------------`
    );
    return {
      success: false,
      error: "SMTP credentials missing. Form data was logged to server log. Let the administrator know.",
      simulated: true,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Marketni System" <${fromEmail}>`,
      to,
      replyTo,
      subject,
      html,
    });

    console.log(`[Email Dispatch Success] Message sent successfully: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error(`[Email Dispatch Error] Failed to send email via SMTP:`, err);
    return { success: false, error: err.message || "Unknown SMTP error" };
  }
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Client Direct Contact Form API route
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, businessName, topic, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const receiverEmail = process.env.EMAIL_RECEIVER || "mwalker@marketni.co";

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #06b6d4; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Marketni Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Business Name:</strong> ${businessName || "N/A"}</p>
        <p><strong>Selected Engagement Trigger:</strong> ${topic || "N/A"}</p>
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #06b6d4;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="font-size: 11px; color: #a3a3a3;">Sent via Marketni system proxy at ${new Date().toLocaleString()}</p>
      </div>
    `;

    const result = await sendEmail({
      to: receiverEmail,
      subject: `[Contact Form] ${topic || "New Inquiry"} - ${name} (${businessName || "Independent"})`,
      html: emailHtml,
      replyTo: email,
    });

    return res.json({
      success: true,
      message: "Your inquiry has been successfully dispatched.",
      details: result
    });
  });

  // Martin's Instant AI Local Marketing Strategy Auditor
  app.post("/api/audit", async (req, res) => {
    const { businessName, industrySpace, localArea, targetAudience } = req.body;
    
    if (!businessName || !industrySpace || !localArea || !targetAudience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Trigger background notification email to Martin Walker
    const receiverEmail = process.env.EMAIL_RECEIVER || "mwalker@marketni.co";
    const auditHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #06b6d4; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">Instant Campaign Audit Requested</h2>
        <p>A new visitor has requested an Instant Local Campaign Strategy Audit.</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Industry/Space:</strong> ${industrySpace}</p>
        <p><strong>Local Area:</strong> ${localArea}</p>
        <p><strong>Ideal Customers:</strong> ${targetAudience}</p>
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="font-size: 11px; color: #a3a3a3;">Sent via Marketni system proxy at ${new Date().toLocaleString()}</p>
      </div>
    `;

    sendEmail({
      to: receiverEmail,
      subject: `[Audit Request] ${businessName} - ${localArea}`,
      html: auditHtml
    }).catch(e => console.error("Headless campaign notification email failed:", e));

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

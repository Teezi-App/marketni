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
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.EMAIL_RECEIVER || user || "no-reply@marketni.co";

  console.log(`[Email Dispatch] Attempting to send email to ${to} with subject: "${subject}"`);

  // --- SMTP Configuration (Primary Choice, e.g., Hostinger SMTP) ---
  if (host && user && pass) {
    console.log(`[Email Dispatch] Using configured SMTP Host: ${host} (Port: ${port})`);
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
        tls: {
          // Bypasses SSL handshake hurdles common in serverless/container runtimes
          rejectUnauthorized: false
        }
      });

      const info = await transporter.sendMail({
        from: fromEmail, // Clean raw sender address prevents "not owned by user" SMTP rejections
        to,
        replyTo,
        subject,
        html,
      });

      console.log(`[Email Dispatch Success] Message sent successfully via SMTP: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err: any) {
      console.error(`[Email Dispatch Error] SMTP dispatch failed, trying fallbacks if available:`, err);
    }
  }

  // --- HTTP API Fallback 1: RESEND (Runs over Port 443 - Fully compatible with Render Free tier) ---
  if (process.env.RESEND_API_KEY) {
    console.log(`[Email Dispatch] Found RESEND_API_KEY. Using Resend HTTPS REST API bypass...`);
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: [to],
          reply_to: replyTo,
          subject: subject,
          html: html
        })
      });

      const data = await response.json() as any;
      if (response.ok) {
        console.log(`[Email Dispatch Success] Emailed successfully via Resend API:`, data);
        return { success: true, messageId: data.id };
      } else {
        throw new Error(data.message || JSON.stringify(data));
      }
    } catch (err: any) {
      console.error(`[Email Dispatch Error] Resend HTTP API dispatch failed:`, err);
    }
  }

  // --- HTTP API Fallback 2: BREVO (Runs over Port 443 - Fully compatible with Render Free tier) ---
  if (process.env.BREVO_API_KEY) {
    console.log(`[Email Dispatch] Found BREVO_API_KEY. Using Brevo HTTPS REST API bypass...`);
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sender: { email: fromEmail, name: "System Notifications" },
          to: [{ email: to }],
          replyTo: replyTo ? { email: replyTo } : undefined,
          subject: subject,
          htmlContent: html
        })
      });

      const data = await response.json() as any;
      if (response.ok) {
        console.log(`[Email Dispatch Success] Emailed successfully via Brevo API:`, data);
        return { success: true, messageId: data.messageId };
      } else {
        throw new Error(data.message || JSON.stringify(data));
      }
    } catch (err: any) {
      console.error(`[Email Dispatch Error] Brevo HTTP API dispatch failed:`, err);
    }
  }

  // If we reach here, either everything failed or nothing was configured
  console.warn(
    `[Email Dispatch Warning] No active/working email method (SMTP or API fallbacks) succeeded!\n` +
    `Please check your SMTP_HOST (${host || 'not set'}), SMTP_USER, and SMTP_PASS, or your BREVO/RESEND keys.\n` +
    `----------------- SIMULATED OUTBOX MESSAGE -----------------\n` +
    `To: ${to}\n` +
    `Reply-To: ${replyTo || "N/A"}\n` +
    `Subject: ${subject}\n` +
    `Content:\n${html.replace(/<[^>]*>/g, " ").trim()}\n` +
    `------------------------------------------------------------`
  );
  return {
    success: false,
    error: "No SMTP credentials or API keys configured, or all of them failed. Form logged to server.",
    simulated: true,
  };
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

    const isB2B = targetAudience.toLowerCase().includes("business") || 
                  targetAudience.toLowerCase().includes("b2b") || 
                  targetAudience.toLowerCase().includes("company") || 
                  targetAudience.toLowerCase().includes("corporate") || 
                  targetAudience.toLowerCase().includes("professional") ||
                  targetAudience.toLowerCase().includes("client") ||
                  industrySpace.toLowerCase().includes("b2b");

    const fallbackKeywords2Word = [`${localArea} ${industrySpace}`, `best ${industrySpace}`];
    const fallbackKeywords3Word = [`best ${industrySpace} ${localArea}`, `${industrySpace} near me`, `${industrySpace} in ${localArea}`];

    const fallbackResponse = {
      campaignTitle: `The ${localArea} Local Domination Playbook for ${businessName}`,
      steps: [
        {
          title: "Campaign Phase 01: High-Intent SEO & Searchable Headlines",
          detail: `First, capture high-intent local searches. Target these highly searchable 2-word keywords: "${fallbackKeywords2Word.join(", ")}" and 3-word keywords: "${fallbackKeywords3Word.join(", ")}". Implement these exact search-friendly phrases directly into your website's main headlines (H1/H2 tags, e.g., "The Premier ${industrySpace} in ${localArea}"). Furthermore, utilize these exact searchable terms in your social media post and video titles (like YouTube, Facebook, or Instagram video titles) so they index directly in Google and Bing search results.`
        },
        {
          title: "Campaign Phase 02: Twice-Weekly Storytelling & Organic Video",
          detail: `Create a disciplined organic video series going out exactly twice per week (no more and no less, to maintain top quality and keep the audience highly engaged without fatigue). Focus heavily on "behind-the-scenes" video footage to build deep, authentic trust with ${targetAudience} based on your unique process. Since you operate locally, integrate User Generated Content (UGC) if applicable, encouraging customers to share their genuine reactions. Replicate the high-performing social media formats of successful regional competitors, and partner with complementary local business owners or local chain networks in ${localArea} for collaborative cross-promotions.`
        },
        {
          title: "Campaign Phase 03: Sector-Specific Acquisition & Retention",
          detail: isB2B 
            ? `Classified Sector: B2B. Drive client acquisition by leveraging joint ventures with complementary local businesses and highly targeted LinkedIn networking tailored precisely to ${targetAudience}. For long-term client retention, implement structured monthly progress reports, VIP business-owner roundtable events, and regular ROI review cycles that continually prove your business value.`
            : `Classified Sector: B2C. Drive customer acquisition using highly targeted local lead magnets and collaborative local events. For long-term customer retention, implement an interactive mobile loyalty program, personalized milestone rewards, and a high-touch, personable automated local follow-up flow.`
        }
      ],
      quote: `In local marketing, clarity, direction, and authenticity outperform massive advertising budgets. By optimizing for specific searchable keywords, storytelling through twice-weekly behind-the-scenes video, and executing a laser-focused ${isB2B ? "B2B" : "B2C"} acquisition/retention strategy, ${businessName} will stand out as the definitive local choice in ${localArea}.`
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

You MUST tailor each phase of the response according to the following strict guidelines:

1. **For 'Campaign Phase 01' (SEO & Headlines Focus)**:
   - Perform a highly specific local search analysis. Generate and list real 2-word and 3-word search keywords that combine their industry/space ("${industrySpace}") and local area ("${localArea}") (e.g., if it's a pizza shop in Epsom, keywords like "Epsom pizza" or "best pizza Epsom").
   - Explicitly detail how to integrate these high-intent local SEO keywords into their website's main headlines (H1/H2 tags) for high-ranking search indexing.
   - Explain how to use these exact keywords in their social media video titles, description lines, or profile tags to ensure they are searchable and indexable by search engines (Google/Bing).

2. **For 'Campaign Phase 02' (Community & Storytelling Focus)**:
   - Focus heavily on organic video content creation. Specify a disciplined publication frequency of exactly twice per week (no more and no less, to avoid viewer burnout while maintaining top quality).
   - Detail concepts for "behind-the-scenes" video segments tailored specifically to "${industrySpace}" and target customer inputs ("${targetAudience}").
   - Integrate User Generated Content (UGC) ideas that fit their business type.
   - Advise them to research successful national/regional competitors outside their area, identify their highest-performing post styles, and replicate/adapt those formats.
   - Suggest specific local businesses, complementary services, or local chain partners in ${localArea} that they can collaborate with for co-promoted campaigns.

3. **For 'Campaign Phase 03' (Acquisition & Retention Focus)**:
   - Address the business's industry model directly. First, clearly classify whether "${industrySpace}" / "${targetAudience}" is a B2B (Business-to-Business) or B2C (Business-to-Consumer) setup.
   - Provide distinct, separate, actionable strategy sections for:
     a) Acquisition (attracting new clients/customers)
     b) Retention (keeping them coming back)
   - Ensure the distinction between B2B and B2C is highly evident in the strategy. (E.g., if B2B, focus on local partnerships, LinkedIn networking, case studies, or ongoing advisory agreements. If B2C, focus on loyalty incentives, interactive community campaigns, or high-touch follow-up).
   - Evolve the advice to be dynamic, fresh, and deeply contextualized rather than using generic marketing buzzwords.

Provide a high-quality JSON response matching the exact structure below:
{
  "campaignTitle": "A catchy, custom headline for the local campaign",
  "steps": [
    {
      "title": "Campaign Phase 01: High-Intent SEO & Searchable Headlines",
      "detail": "Actionable local SEO keyword lists, website headline integration, and search-optimized social media titles. Be highly specific and write in a confident, professional style."
    },
    {
      "title": "Campaign Phase 02: Twice-Weekly Storytelling & Organic Video",
      "detail": "Actionable video content playbook focusing on behind-the-scenes, UGC, competitor research replication, and local collaborations. Be specific to their business, and write in a confident style."
    },
    {
      "title": "Campaign Phase 03: Sector-Specific Acquisition & Retention",
      "detail": "Deep dive into B2B/B2C classification and specific action plans for customer attraction and long-term retention. Try to evolve the advice to be highly customized and dynamic."
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
  const isProduction = 
    process.env.NODE_ENV === "production" || 
    (typeof __filename !== "undefined" && __filename.includes("dist")) || 
    (typeof import.meta !== "undefined" && import.meta.url && import.meta.url.includes("dist"));

  if (!isProduction) {
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

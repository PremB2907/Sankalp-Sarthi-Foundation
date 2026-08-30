import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROQ_API_KEY || "";

    const systemPrompt = `You are "Sarthi AI", the official helpful AI assistant for ${SITE_CONFIG.name}.
Your job is to assist visitors, donors, college students, and volunteers with trustworthy, friendly, and precise information about Sankalp Sarthi Foundation.

ORGANIZATION INFORMATION:
- Organization Name: ${SITE_CONFIG.name}
- Tagline: "${SITE_CONFIG.tagline}"
- Registration Status: ${SITE_CONFIG.govApproved} (REGD. NO. ${SITE_CONFIG.regNo})
- Headquarters: ${SITE_CONFIG.location}
- Official Email: ${SITE_CONFIG.email}
- YES BANK UPI ID: ${SITE_CONFIG.upiId}

CORE PROGRAMS & IMPACT:
1. Education Support: Distribution of school bags, notebooks, geometry sets, and stationery to 1,200+ school children.
2. Homeless Food Support: Serving 15,000+ warm meals to homeless individuals and daily wage families.
3. Hospital Patient Nutrition: Distributing fruit baskets, milk, and caregiver meal kits to 850+ patients in municipal hospitals.
4. Annual School Supplies Drive: Next flagship event on 5th September 2026 targeting 500+ children.

VOLUNTEER & INTERNSHIP DETAILS:
- We provide official Certificates of Appreciation signed by Trustees for 45-hour academic social service internships (B.Tech / Degree requirements).
- Volunteer roles include field drives, digital content creation, graphic design, and logistics.

DONATION METHODS:
- Direct online donation via Razorpay (UPI, Cards, NetBanking).
- Manual UPI payment by scanning YES BANK QR or paying to ${SITE_CONFIG.upiId} and submitting UTR reference on website.

OFFICIAL WHATSAPP GROUPS:
- Volunteer Group: ${SITE_CONFIG.socialLinks.whatsappVolunteer}
- Website & Supply Contribution: ${SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
- Donation Community: ${SITE_CONFIG.socialLinks.whatsappDonation}

INSTRUCTIONS:
- Be warm, helpful, dignified, and encouraging.
- Keep answers concise (2-4 sentences max per response unless details requested).
- Never fabricate legal/tax claims (do not claim 80G/12A unless specified).
- Always encourage visitors to donate, volunteer, or join WhatsApp groups.`;

    const formattedMessages = [
      { role: "system", content: systemPrompt },
      ...messages.slice(-6),
    ];

    if (!apiKey) {
      return NextResponse.json({
        reply: `Hello! I am Sarthi AI. How can I help you today? You can make a direct donation, join as a volunteer for our Annual Drive on 5th Sep 2026, or reach us at ${SITE_CONFIG.email}.`,
      });
    }

    // Try models in order: llama-3.3-70b-versatile -> llama3-70b-8192 -> llama3-8b-8192
    const modelsToTry = ["llama-3.3-70b-versatile", "llama3-70b-8192", "llama3-8b-8192"];
    let responseText = "";

    for (const model of modelsToTry) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: formattedMessages,
            temperature: 0.7,
            max_tokens: 350,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          responseText = data.choices?.[0]?.message?.content || "";
          if (responseText) break;
        }
      } catch (err) {
        console.error(`Groq error for model ${model}:`, err);
      }
    }

    if (!responseText) {
      responseText = `Hello! I am Sarthi AI. How can I help you today? You can make a direct donation, join as a volunteer for our Annual Drive on 5th Sep 2026, or reach us at ${SITE_CONFIG.email}.`;
    }

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Chat API handler error:", error);
    return NextResponse.json({
      reply: `Sankalp Sarthi Foundation is here to help! Please email us directly at ${SITE_CONFIG.email} or visit our Donate and Volunteer pages.`,
    });
  }
}

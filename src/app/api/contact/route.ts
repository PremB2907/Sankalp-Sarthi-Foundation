import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import { sendContactEmails } from "@/lib/email-service";
import { ContactSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = ContactSchema.parse(body);

    const contactId = `CNT_${Date.now()}`;
    const createdAt = new Date().toISOString();

    // 1. Append to Google Sheets
    const rowValues = [
      contactId,
      createdAt,
      validated.name,
      validated.email,
      validated.subject,
      validated.message,
      "UNREAD",
    ];

    appendToSheet("CONTACTS", rowValues).catch((err) =>
      console.error("Async Google Sheets contact append failed:", err)
    );

    // 2. Send email via SMTP (From: sankalpsarthifoundation@gmail.com, To: User & Foundation)
    sendContactEmails(validated).catch((err) =>
      console.error("Async SMTP contact email failed:", err)
    );

    return NextResponse.json({
      success: true,
      contactId,
      message: "Thank you for reaching out to Sankalp Sarthi Foundation. We will respond soon.",
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send message" },
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";
import { verifyRazorpayWebhookSignature } from "@/lib/razorpay";
import { appendToSheet } from "@/lib/google-sheets";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || "";

    // Verify webhook signature if secret configured
    if (webhookSecret) {
      const isValid = verifyRazorpayWebhookSignature(rawBody, signature, webhookSecret);
      if (!isValid) {
        return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const payment = payload.payload?.payment?.entity || {};

    const eventId = payload.event_id || `EVT_${Date.now()}`;
    const receivedAt = new Date().toISOString();
    const paymentId = payment.id || "";
    const orderId = payment.order_id || "";
    const status = payment.status || "received";

    // Save to PAYMENT_EVENTS tab in Google Sheets
    // Columns: event_id, received_at, event_type, payment_id, order_id, status, raw_event_reference, processed, error
    const rowValues = [
      eventId,
      receivedAt,
      event,
      paymentId,
      orderId,
      status,
      JSON.stringify({ amount: payment.amount, email: payment.email }),
      "YES",
      "",
    ];

    await appendToSheet("PAYMENT_EVENTS", rowValues);

    return NextResponse.json({ status: "ok" });
  } catch (error: any) {
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

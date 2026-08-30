import { NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";
import { appendToSheet } from "@/lib/google-sheets";
import { sendDonationReceiptEmail } from "@/lib/email-service";
import { VerifyPaymentSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = VerifyPaymentSchema.parse(body);

    const isValid = verifyRazorpaySignature(
      validated.razorpay_order_id,
      validated.razorpay_payment_id,
      validated.razorpay_signature
    );

    const isTestMode =
      (process.env.RAZORPAY_MODE || "test") === "test" &&
      (!process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET === "rzp_test_placeholder_secret");

    if (!isValid && !isTestMode) {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    const donationId = `DON_${Date.now()}`;
    const createdAt = new Date().toISOString();

    const rowValues = [
      donationId,
      createdAt,
      validated.anonymous ? "Anonymous Donor" : validated.donorName,
      validated.donorEmail,
      validated.donorPhone || "",
      validated.amount,
      "INR",
      validated.cause,
      validated.campaignId || "",
      validated.razorpay_order_id,
      validated.razorpay_payment_id,
      "PAID",
      "Razorpay",
      validated.anonymous ? "YES" : "NO",
      validated.message || "",
      `/donation/success?id=${donationId}&order=${validated.razorpay_order_id}`,
      "Website Direct",
    ];

    // 1. Append to DONATIONS Google Sheet
    appendToSheet("DONATIONS", rowValues).catch((err) =>
      console.error("Async Google Sheets donation append failed:", err)
    );

    // 2. Send PDF Donation Receipt email via SMTP to Donor & Foundation copy
    sendDonationReceiptEmail({
      receiptId: donationId,
      donorName: validated.anonymous ? "Valued Donor" : validated.donorName,
      donorEmail: validated.donorEmail,
      donorPhone: validated.donorPhone,
      amount: validated.amount,
      cause: validated.cause,
      paymentMethod: "Razorpay",
      transactionRef: validated.razorpay_payment_id || validated.razorpay_order_id,
      createdAt,
    }).catch((err) => console.error("Async donation receipt email failed:", err));

    return NextResponse.json({
      success: true,
      donationId,
      orderId: validated.razorpay_order_id,
      paymentId: validated.razorpay_payment_id,
      amount: validated.amount,
      donorName: validated.anonymous ? "Anonymous Donor" : validated.donorName,
      donorEmail: validated.donorEmail,
      cause: validated.cause,
      createdAt,
    });
  } catch (error: any) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Payment verification failed" },
      { status: 400 }
    );
  }
}

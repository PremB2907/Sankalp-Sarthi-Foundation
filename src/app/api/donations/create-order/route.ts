import { NextResponse } from "next/server";
import { getRazorpayInstance } from "@/lib/razorpay";
import { CreateOrderSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = CreateOrderSchema.parse(body);

    const razorpay = getRazorpayInstance();

    // Create Razorpay Order in paisa (multiply INR by 100)
    const options = {
      amount: Math.round(validated.amount * 100),
      currency: validated.currency || "INR",
      receipt: `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      notes: {
        donorName: validated.donorName,
        donorEmail: validated.donorEmail,
        cause: validated.cause,
        campaignId: validated.campaignId || "",
        anonymous: validated.anonymous ? "true" : "false",
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder_key",
    });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to create donation order",
      },
      { status: 400 }
    );
  }
}

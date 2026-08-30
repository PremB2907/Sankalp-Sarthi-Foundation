import { NextResponse } from "next/server";
import { generateDonationPDFBuffer } from "@/lib/pdf-receipt";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const receiptId = searchParams.get("id") || `DON_${Date.now()}`;
    const donorName = searchParams.get("name") || "Valued Donor";
    const donorEmail = searchParams.get("email") || "donor@example.com";
    const amountStr = searchParams.get("amount") || "500";
    const cause = searchParams.get("cause") || "Education Support";
    const transactionRef = searchParams.get("order") || "order_ref_123";
    const paymentMethod = (searchParams.get("method") || "Razorpay") as "Razorpay" | "Manual UPI";

    const pdfBuffer = await generateDonationPDFBuffer({
      receiptId,
      donorName,
      donorEmail,
      amount: parseFloat(amountStr),
      cause,
      paymentMethod,
      transactionRef,
      createdAt: new Date().toISOString(),
    });

    const uint8Array = new Uint8Array(pdfBuffer);

    return new NextResponse(uint8Array, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Donation_Receipt_${receiptId}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error("Error generating PDF receipt API:", error);
    return NextResponse.json({ error: "Failed to generate PDF receipt" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { uploadFileToDrive } from "@/lib/google-drive";
import { appendToSheet } from "@/lib/google-sheets";
import { sendDonationReceiptEmail } from "@/lib/email-service";
import { ManualUPISchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "";
    const amountStr = formData.get("amount") as string;
    const utr = formData.get("utr") as string;
    const cause = (formData.get("cause") as string) || "General Fund";
    const message = (formData.get("message") as string) || "";
    const proofFile = formData.get("proof") as File | null;

    const validated = ManualUPISchema.parse({
      name,
      email,
      phone,
      amount: parseFloat(amountStr),
      utr,
      cause,
      message,
    });

    let screenshotUrl = "";

    if (proofFile && proofFile.size > 0) {
      const buffer = Buffer.from(await proofFile.arrayBuffer());
      const driveRes = await uploadFileToDrive(
        buffer,
        proofFile.name || `upi_proof_${utr}.png`,
        proofFile.type || "image/png"
      );
      screenshotUrl = driveRes.webViewLink || driveRes.fileId;
    }

    const recordId = `UPI_${Date.now()}`;
    const createdAt = new Date().toISOString();

    const rowValues = [
      recordId,
      createdAt,
      validated.name,
      validated.email,
      validated.amount,
      validated.utr,
      screenshotUrl || "No Attachment",
      "PENDING_VERIFICATION",
    ];

    // 1. Append to MANUAL_UPI Google Sheet
    appendToSheet("MANUAL_UPI", rowValues).catch((err) =>
      console.error("Async Google Sheets UPI append failed:", err)
    );

    // 2. Send PDF Donation Receipt email via SMTP
    sendDonationReceiptEmail({
      receiptId: recordId,
      donorName: validated.name,
      donorEmail: validated.email,
      donorPhone: validated.phone,
      amount: validated.amount,
      cause: validated.cause,
      paymentMethod: "Manual UPI",
      transactionRef: validated.utr,
      createdAt,
    }).catch((err) => console.error("Async UPI receipt email failed:", err));

    return NextResponse.json({
      success: true,
      recordId,
      message:
        "Your manual UPI payment reference has been submitted. A PDF acknowledgment receipt has been sent to your email.",
    });
  } catch (error: any) {
    console.error("Error submitting manual UPI proof:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process manual UPI submission" },
      { status: 400 }
    );
  }
}

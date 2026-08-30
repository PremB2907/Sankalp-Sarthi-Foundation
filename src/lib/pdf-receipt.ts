import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export interface ReceiptData {
  receiptId: string;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  cause: string;
  paymentMethod: "Razorpay" | "Manual UPI";
  transactionRef: string;
  createdAt: string;
}

export function generateDonationPDFBuffer(data: ReceiptData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 40 });
      const buffers: Buffer[] = [];

      doc.on("data", (chunk) => buffers.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(buffers)));

      // Primary colors
      const primaryColor = "#0A4D2E";
      const textColor = "#1F2937";
      const mutedColor = "#4B5563";

      // 1. Header & Branding
      doc.rect(0, 0, 595, 120).fill(primaryColor);

      // Title & Reg in Header
      doc
        .fillColor("#FFFFFF")
        .fontSize(22)
        .font("Helvetica-Bold")
        .text("SANKALP SARTHI FOUNDATION", 40, 30);

      doc
        .fontSize(10)
        .font("Helvetica")
        .text("Helping hands can make difference", 40, 58);

      doc
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("GOVT. APPROVED | REGD. NO. Mu/0001792/2025", 40, 75);

      doc
        .fontSize(9)
        .font("Helvetica")
        .text("Mumbai, Maharashtra, India | sankalpsarthifoundation@gmail.com", 40, 90);

      // Receipt Title Box
      doc
        .fillColor(primaryColor)
        .fontSize(16)
        .font("Helvetica-Bold")
        .text("DONATION ACKNOWLEDGMENT RECEIPT", 40, 140, { align: "center" });

      doc
        .moveTo(40, 165)
        .lineTo(555, 165)
        .strokeColor("#E5E7EB")
        .stroke();

      // 2. Receipt Details Grid
      let y = 185;

      const addRow = (label: string, value: string, isBold = false) => {
        doc
          .fillColor(mutedColor)
          .fontSize(10)
          .font("Helvetica")
          .text(label, 50, y);

        doc
          .fillColor(textColor)
          .fontSize(10)
          .font(isBold ? "Helvetica-Bold" : "Helvetica")
          .text(value, 220, y);

        y += 24;
      };

      addRow("Receipt Number:", data.receiptId, true);
      addRow("Date & Time:", new Date(data.createdAt).toLocaleString("en-IN"));
      addRow("Donor Name:", data.donorName, true);
      addRow("Donor Email:", data.donorEmail);
      if (data.donorPhone) {
        addRow("Donor Phone:", data.donorPhone);
      }
      addRow("Donation Amount:", `INR ₹${data.amount.toLocaleString()} /-`, true);
      addRow("Cause / Initiative:", data.cause);
      addRow("Payment Mode:", data.paymentMethod);
      addRow("Transaction Ref / Order ID:", data.transactionRef);

      // 3. Highlight Box for Amount
      y += 10;
      doc
        .rect(40, y, 515, 45)
        .fillAndStroke("#F0FDF4", "#BBF7D0");

      doc
        .fillColor(primaryColor)
        .fontSize(12)
        .font("Helvetica-Bold")
        .text(
          `TOTAL CONTRIBUTION: RS. ${data.amount.toLocaleString()} /-`,
          50,
          y + 15,
          { align: "center" }
        );

      y += 65;

      // 4. Thank You & Certification Note
      doc
        .fillColor(textColor)
        .fontSize(9)
        .font("Helvetica-Oblique")
        .text(
          "We gratefully acknowledge the receipt of your voluntary contribution. Your support directly enables Sankalp Sarthi Foundation to provide school supplies, food packages, and hospital patient care kits across Mumbai.",
          40,
          y,
          { width: 515, align: "left" }
        );

      y += 55;

      // 5. Signatures
      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .fillColor(textColor)
        .text("Priyanka Barge", 60, y);

      doc
        .fontSize(9)
        .font("Helvetica")
        .fillColor(mutedColor)
        .text("Treasurer, Sankalp Sarthi Foundation", 60, y + 14);

      doc
        .fontSize(10)
        .font("Helvetica-Bold")
        .fillColor(textColor)
        .text("Prem Baraskar", 380, y);

      doc
        .fontSize(9)
        .font("Helvetica")
        .fillColor(mutedColor)
        .text("IT Lead, Sankalp Sarthi Foundation", 380, y + 14);

      // Footer line
      doc
        .moveTo(40, 780)
        .lineTo(555, 780)
        .strokeColor("#E5E7EB")
        .stroke();

      doc
        .fontSize(8)
        .font("Helvetica")
        .fillColor(mutedColor)
        .text("This is a computer-generated donation receipt.", 40, 790, {
          align: "center",
        });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

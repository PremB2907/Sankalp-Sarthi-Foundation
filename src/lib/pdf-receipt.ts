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
  paymentMethod: "Razorpay" | "Manual UPI" | "Cash" | "Cheque" | "Bank Transfer";
  transactionRef: string;
  createdAt: string;
  donorAddress?: string;
  donorPan?: string;
}

function numberToWords(num: number): string {
  const a = [
    "", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ",
    "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero Only";

  function inWords(n: number): string {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : " ");
    if (n < 1000) return a[Math.floor(n / 100)] + "Hundred " + (n % 100 !== 0 ? "and " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + "Thousand " + (n % 1000 !== 0 ? inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + "Lakh " + (n % 100000 !== 0 ? inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + "Crore " + (n % 10000000 !== 0 ? inWords(n % 10000000) : "");
  }

  return inWords(Math.floor(num)).trim() + " Only";
}

export function generateDonationPDFBuffer(data: ReceiptData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 35, layout: "portrait" });
      const buffers: Buffer[] = [];

      doc.on("data", (chunk) => buffers.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(buffers)));

      // Colors matching official receipt
      const navyColor = "#0A2540";
      const greenColor = "#005B45";
      const textColor = "#1F2937";
      const mutedColor = "#4B5563";

      // 1. Header Section
      let y = 35;

      // Organization Title & Tagline Left
      doc
        .fillColor(navyColor)
        .fontSize(22)
        .font("Helvetica-Bold")
        .text("SANKALP", 40, y);

      doc
        .fillColor(greenColor)
        .fontSize(22)
        .font("Helvetica-Bold")
        .text("SARTHI FOUNDATION", 150, y);

      doc
        .fillColor(navyColor)
        .fontSize(9)
        .font("Helvetica-Oblique")
        .text("— Sankalp for Change, Sarthi for Every Step —", 40, y + 26);

      // Contact Details Right
      doc
        .fillColor(navyColor)
        .fontSize(8)
        .font("Helvetica")
        .text("7977854590  |  7738351352  |  8080880012  |  9004029544", 330, y, { align: "right", width: 220 })
        .text("sankalpsarthifoundation@gmail.com", 330, y + 14, { align: "right", width: 220 })
        .fontSize(7.5)
        .text("A-002, Ground Floor, Navratan CHS Ltd., Bindra Complex, Mahakali Caves Road, Andheri East, Mumbai – 400093, Maharashtra, India", 310, y + 26, { align: "right", width: 240 });

      y += 65;

      // Divider Line
      doc
        .moveTo(40, y)
        .lineTo(555, y)
        .strokeColor(navyColor)
        .lineWidth(1.5)
        .stroke();

      y += 10;

      // 2. Legal Registrations Bar
      doc
        .fillColor(textColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text(
          "Reg. No.: F-0087683   |   12A No.: ABNTS2001FE20251   |   80G No.: ABNTS2001FF20261   |   PAN No.: ABNTS2001F",
          40,
          y,
          { align: "center", width: 515 }
        );

      y += 22;

      // 3. Receipt Title
      doc
        .fillColor(greenColor)
        .fontSize(18)
        .font("Helvetica-Bold")
        .text("— • DONATION RECEIPT • —", 40, y, { align: "center", width: 515 });

      y += 35;

      // 4. Receipt No & Date Row
      const dateFormatted = new Date(data.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      doc
        .fillColor(textColor)
        .fontSize(10)
        .font("Helvetica")
        .text("Receipt No. : ", 40, y);

      doc
        .font("Helvetica-Bold")
        .text(data.receiptId, 110, y);

      doc
        .font("Helvetica")
        .text("Date : ", 400, y);

      doc
        .font("Helvetica-Bold")
        .text(dateFormatted, 440, y);

      y += 30;

      // 5. Received With Thanks From Line
      doc
        .font("Helvetica")
        .text("Received with thanks from : ", 40, y);

      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .text(data.donorName, 180, y);

      y += 24;

      // Address Line
      doc
        .fontSize(10)
        .font("Helvetica")
        .text("Address : ", 40, y);

      doc
        .font("Helvetica")
        .text(data.donorAddress || "Mumbai, Maharashtra, India", 110, y);

      y += 28;

      // Amount Figures & Words
      doc
        .text("Amount (in figures) : ", 40, y);

      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .text(`Rs. ${data.amount.toLocaleString()} /-`, 150, y);

      doc
        .font("Helvetica")
        .fontSize(10)
        .text("Amount (in words) : ", 300, y);

      doc
        .font("Helvetica-Bold")
        .fontSize(10)
        .text(numberToWords(data.amount), 405, y, { width: 150 });

      y += 32;

      // Mode of Payment Checkboxes
      doc
        .font("Helvetica")
        .text("Mode of Payment : ", 40, y);

      const isUPI = data.paymentMethod === "Manual UPI";
      const isRazorpay = data.paymentMethod === "Razorpay";
      const isCash = data.paymentMethod === "Cash";
      const isCheque = data.paymentMethod === "Cheque";
      const isBank = data.paymentMethod === "Bank Transfer";

      doc.text(`[${isCash ? "X" : " "}] Cash      [${isCheque ? "X" : " "}] Cheque      [${isUPI ? "X" : " "}] UPI      [${isRazorpay ? "X" : " "}] Online / Razorpay      [${isBank ? "X" : " "}] Bank Transfer`, 150, y);

      y += 26;

      // Ref No & Mobile
      doc.text("UPI / UTR / Ref. No. : ", 40, y);
      doc.font("Helvetica-Bold").text(data.transactionRef, 155, y);

      y += 24;

      doc.font("Helvetica").text("PAN No. : ", 40, y);
      doc.font("Helvetica-Bold").text(data.donorPan || "—", 100, y);

      doc.font("Helvetica").text("Mobile No. : ", 300, y);
      doc.font("Helvetica-Bold").text(data.donorPhone || "—", 370, y);

      y += 30;

      // Towards Purpose
      doc
        .font("Helvetica")
        .text("Towards : ", 40, y);

      doc
        .font("Helvetica-Bold")
        .text(`Donation towards ${data.cause} and charitable activities of Sankalp Sarthi Foundation.`, 100, y, { width: 455 });

      y += 40;

      // Divider Line before footer
      doc
        .moveTo(40, y)
        .lineTo(555, y)
        .strokeColor("#E5E7EB")
        .lineWidth(1)
        .stroke();

      y += 15;

      // 80G Tax Exemption Statement Left
      doc
        .fillColor(navyColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("This donation is gratefully acknowledged.", 40, y);

      doc
        .fillColor(greenColor)
        .fontSize(8.5)
        .font("Helvetica")
        .text("Contributions to Sankalp Sarthi Foundation are eligible for exemption under section 80G of the Income Tax Act, 1961.", 40, y + 14, { width: 320 });

      // Authorized Signature Right
      doc
        .fillColor(navyColor)
        .fontSize(14)
        .font("Helvetica-Bold")
        .text("Subhash.", 420, y + 10);

      doc
        .moveTo(380, y + 32)
        .lineTo(540, y + 32)
        .strokeColor(textColor)
        .lineWidth(1)
        .stroke();

      doc
        .fillColor(textColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("Authorized Signature", 380, y + 36, { align: "center", width: 160 });

      doc
        .fillColor(mutedColor)
        .fontSize(8)
        .font("Helvetica")
        .text("(Subhash Ramdas Saidane)", 380, y + 48, { align: "center", width: 160 })
        .text("President", 380, y + 58, { align: "center", width: 160 });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

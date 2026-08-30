import nodemailer from "nodemailer";
import { ReceiptData, generateDonationPDFBuffer } from "./pdf-receipt";

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER || "sankalpsarthifoundation@gmail.com";
  const pass = process.env.SMTP_PASS || "dayxxfnepwtvwnxq";

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Send Contact Us confirmation & notification email
 */
export async function sendContactEmails(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || "Sankalp Sarthi Foundation <sankalpsarthifoundation@gmail.com>";

    // 1. Notification to Foundation (with BCC to sankalpsarthi7@gmail.com)
    await transporter.sendMail({
      from: fromAddress,
      to: "sankalpsarthifoundation@gmail.com",
      bcc: "sankalpsarthi7@gmail.com",
      subject: `New Web Inquiry: ${data.subject}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // 2. Confirmation to User
    await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      bcc: "sankalpsarthi7@gmail.com",
      subject: `Thank you for contacting Sankalp Sarthi Foundation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0a4d2e; color: #ffffff; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px;">Sankalp Sarthi Foundation</h1>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #a7f3d0;">Helping hands can make difference</p>
          </div>
          <div style="padding: 24px; color: #1f2937;">
            <p>Dear <strong>${data.name}</strong>,</p>
            <p>Thank you for reaching out to Sankalp Sarthi Foundation regarding <em>"${data.subject}"</em>.</p>
            <p>We have received your message and our coordinator team will respond to your inquiry shortly.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">Sankalp Sarthi Foundation | Govt. Approved | Regd. No. F-0087683<br />Andheri East, Mumbai, Maharashtra, India</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending contact email via SMTP:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Send Donation Receipt Email with PDF Attachment to Donor
 */
export async function sendDonationReceiptEmail(data: ReceiptData) {
  try {
    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || "Sankalp Sarthi Foundation <sankalpsarthifoundation@gmail.com>";

    // Generate PDF receipt buffer
    const pdfBuffer = await generateDonationPDFBuffer(data);

    // Send to donor with BCC to sankalpsarthi7@gmail.com & sankalpsarthifoundation@gmail.com
    await transporter.sendMail({
      from: fromAddress,
      to: data.donorEmail,
      bcc: ["sankalpsarthifoundation@gmail.com", "sankalpsarthi7@gmail.com"],
      subject: `Donation Receipt — Sankalp Sarthi Foundation (Receipt #${data.receiptId})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0a4d2e; color: #ffffff; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Donation Acknowledgment</h1>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #a7f3d0;">Sankalp Sarthi Foundation | Mumbai</p>
          </div>
          <div style="padding: 24px; color: #1f2937; line-height: 1.6;">
            <p>Dear <strong>${data.donorName}</strong>,</p>
            <p>We gratefully acknowledge receipt of your generous contribution of <strong>INR ₹${data.amount.toLocaleString()} /-</strong> towards <strong>${data.cause}</strong>.</p>
            <p>Attached to this email is your official PDF Donation Receipt (Receipt #${data.receiptId}).</p>
            
            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 0; font-size: 13px; color: #065f46;"><strong>Receipt No:</strong> ${data.receiptId}</p>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #065f46;"><strong>Payment Mode:</strong> ${data.paymentMethod}</p>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #065f46;"><strong>Transaction Ref:</strong> ${data.transactionRef}</p>
            </div>

            <p>Contributions to Sankalp Sarthi Foundation are eligible for exemption under section 80G of the Income Tax Act, 1961.</p>
            <p>With warm regards,<br /><strong>Sankalp Sarthi Foundation Team</strong></p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `Donation_Receipt_${data.receiptId}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending donation receipt email:", error);
    return { success: false, error: String(error) };
  }
}

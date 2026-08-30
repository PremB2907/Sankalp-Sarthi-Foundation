import Razorpay from "razorpay";
import crypto from "crypto";

export function getRazorpayInstance() {
  const key_id = process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder_id";
  const key_secret = process.env.RAZORPAY_KEY_SECRET || "rzp_test_placeholder_secret";

  return new Razorpay({
    key_id,
    key_secret,
  });
}

/**
 * Verify HMAC SHA256 signature from Razorpay client checkout response
 */
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET || "rzp_test_placeholder_secret";
  const text = `${orderId}|${paymentId}`;
  
  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(text)
    .digest("hex");

  return generatedSignature === signature;
}

/**
 * Verify Razorpay webhook signature
 */
export function verifyRazorpayWebhookSignature(
  bodyText: string,
  signature: string,
  webhookSecret: string
): boolean {
  if (!signature || !webhookSecret) return false;
  
  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(bodyText)
    .digest("hex");

  return expectedSignature === signature;
}

"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import confetti from "canvas-confetti";
import { CheckCircle2, Download, Share2, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-dynamic";

function SuccessContent() {
  const searchParams = useSearchParams();

  const donationId = searchParams.get("id") || `DON_${Date.now()}`;
  const orderId = searchParams.get("order") || "order_test_12345";
  const amount = searchParams.get("amount") || "500";
  const cause = searchParams.get("cause") || "Education Support";
  const donorName = searchParams.get("name") || "Valued Donor";

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {}
  }, []);

  const handleDownloadPDF = () => {
    const downloadUrl = `/api/donations/pdf-receipt?id=${encodeURIComponent(
      donationId
    )}&order=${encodeURIComponent(orderId)}&amount=${encodeURIComponent(
      amount
    )}&cause=${encodeURIComponent(cause)}&name=${encodeURIComponent(donorName)}`;

    window.open(downloadUrl, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `I just supported ${SITE_CONFIG.name}!`,
        text: `Join me in supporting ${cause} with Sankalp Sarthi Foundation in Mumbai.`,
        url: window.location.origin,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xl space-y-8 text-center print:shadow-none print:border-none">
          
          {/* Header Icon & Title */}
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
              Payment Successful
            </span>

            <h1 className="font-serif text-3xl font-bold text-gray-900">
              Thank You, {donorName}!
            </h1>

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Your contribution of <strong className="text-emerald-950 font-bold">₹{parseFloat(amount).toLocaleString()}</strong> to <strong className="text-emerald-950">{cause}</strong> has been received. An official PDF donation receipt has been emailed to you.
            </p>
          </div>

          {/* Transaction Receipt Details Card */}
          <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 text-left space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
              <span className="font-semibold text-gray-500">Donation ID:</span>
              <span className="font-mono font-bold text-emerald-950">{donationId}</span>
            </div>

            <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
              <span className="font-semibold text-gray-500">Razorpay / Transaction Ref:</span>
              <span className="font-mono text-gray-800">{orderId}</span>
            </div>

            <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
              <span className="font-semibold text-gray-500">Amount Paid:</span>
              <span className="font-bold text-emerald-800 text-sm">₹{parseFloat(amount).toLocaleString()} INR</span>
            </div>

            <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
              <span className="font-semibold text-gray-500">Selected Cause:</span>
              <span className="font-bold text-gray-900">{cause}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-500">Organization:</span>
              <span className="font-bold text-gray-900">{SITE_CONFIG.name} (Regd No: {SITE_CONFIG.regNo})</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 print:hidden">
            <button
              onClick={handleDownloadPDF}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-emerald-700" />
              Download Official PDF Receipt
            </button>

            <button
              onClick={handleShare}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4 text-emerald-700" />
              Share Impact
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return Home
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function DonationSuccessPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-sm font-semibold text-emerald-800">Loading donation receipt...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

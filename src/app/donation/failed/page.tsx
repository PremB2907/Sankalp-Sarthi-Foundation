"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, RefreshCw, QrCode, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-dynamic";

function FailedContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "Payment session was cancelled or timed out.";

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl space-y-6 text-center">
          
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl font-bold text-gray-900">
              Payment Could Not Be Completed
            </h1>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
              Don't worry! Your bank account was not charged. {reason}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/donate"
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Payment
            </Link>

            <Link
              href="/donate?method=upi"
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4 text-emerald-700" />
              Use Manual UPI QR
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 text-xs text-gray-500">
            Need help? Contact coordinator at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-700 font-semibold underline">
              {SITE_CONFIG.email}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function DonationFailedPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-sm font-semibold text-emerald-800">Loading...</div>}>
      <FailedContent />
    </Suspense>
  );
}

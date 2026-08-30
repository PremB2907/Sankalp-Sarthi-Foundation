"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { UPIQRModal } from "@/components/upi-qr-modal";
import { Heart, ShieldCheck, QrCode, Lock, CheckCircle2, AlertCircle } from "lucide-react";

export const dynamic = "force-dynamic";

function DonateForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [amount, setAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [cause, setCause] = useState<string>("Education Support");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [upiModalOpen, setUpiModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const paramCause = searchParams.get("cause");
    if (paramCause) setCause(paramCause);
    const paramCampaign = searchParams.get("campaign");
    if (paramCampaign === "annual-drive-2026") {
      setCause("Annual Drive 2026");
    }
  }, [searchParams]);

  const finalAmount = isCustom ? parseFloat(customAmount) || 0 : amount;

  const handleSelectQuickAmount = (val: number) => {
    setIsCustom(false);
    setAmount(val);
  };

  const handleCustomChange = (val: string) => {
    setIsCustom(true);
    setCustomAmount(val);
  };

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!finalAmount || finalAmount < 1) {
      setErrorMessage("Please select or enter a valid donation amount.");
      return;
    }

    if (!consent) {
      setErrorMessage("Please accept the consent terms to proceed.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/donations/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          donorName: anonymous ? "Anonymous Donor" : donorName,
          donorEmail,
          donorPhone,
          cause,
          anonymous,
          message,
          consent: true,
        }),
      });

      const orderData = await res.json();

      if (!res.ok || !orderData.success) {
        throw new Error(orderData.error || "Could not initialize payment order.");
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: SITE_CONFIG.name,
        description: `Donation for ${cause}`,
        image: "/assets/foundation-logo-card.png",
        order_id: orderData.orderId,
        prefill: {
          name: donorName,
          email: donorEmail,
          contact: donorPhone,
        },
        theme: {
          color: "#0a4d2e",
        },
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/donations/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donorName: anonymous ? "Anonymous Donor" : donorName,
                donorEmail,
                donorPhone,
                amount: finalAmount,
                cause,
                anonymous,
                message,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              router.push(
                `/donation/success?id=${verifyData.donationId}&order=${verifyData.orderId}&amount=${finalAmount}&cause=${encodeURIComponent(
                  cause
                )}&name=${encodeURIComponent(anonymous ? "Anonymous Donor" : donorName)}`
              );
            } else {
              router.push(`/donation/failed?reason=${encodeURIComponent(verifyData.error || "Signature verification failed")}`);
            }
          } catch (err) {
            router.push("/donation/failed?reason=VerificationError");
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to launch payment checkout.");
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-semibold text-emerald-900">
            <Lock className="w-3.5 h-3.5 text-emerald-700" />
            <span>256-Bit Encrypted Secure Donation</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Make a Direct Difference Today
          </h1>

          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            100% of direct donations support buying school supplies, serving warm meals, and aiding hospital patients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Donation Form Box */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            
            {errorMessage && (
              <div className="p-4 bg-red-50 text-red-700 text-xs rounded-2xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleRazorpayPayment} className="space-y-6">
              
              {/* 1. Quick Amount Selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Select Donation Amount (₹)
                </label>
                
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {SITE_CONFIG.quickDonationAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleSelectQuickAmount(val)}
                      className={`py-3 text-sm font-bold rounded-xl border transition-all ${
                        !isCustom && amount === val
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                          : "bg-white text-gray-700 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50"
                      }`}
                    >
                      ₹{val.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div className="pt-1">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomChange(e.target.value)}
                      className={`w-full pl-8 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        isCustom
                          ? "border-emerald-600 ring-2 ring-emerald-600/20 font-bold"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* 2. Cause Picker */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Select Cause / Campaign
                </label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                >
                  <option value="Education Support">Education Support & School Supplies</option>
                  <option value="Homeless Food Drive">Homeless & Vulnerable Meal Drives</option>
                  <option value="Hospital Patient Nutrition">Hospital Patient Care Kits</option>
                  <option value="Annual Drive 2026">Annual School Supplies Drive (5th Sep 2026)</option>
                  <option value="General Fund">General Community Service Fund</option>
                </select>
              </div>

              {/* 3. Donor Personal Details */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Donor Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name {!anonymous && "*"}
                    </label>
                    <input
                      type="text"
                      required={!anonymous}
                      disabled={anonymous}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder={anonymous ? "Anonymous" : "John Doe"}
                      className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                    />
                  </div>

                  <div className="flex items-center pt-5">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700">
                      <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={(e) => setAnonymous(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600"
                      />
                      <span>Donate Anonymously</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message / Encouragement (Optional)
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Keep up the great work!"
                    className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 mt-0.5"
                  />
                  <span>
                    I confirm that this voluntary donation is made from legal funds to support Sankalp Sarthi Foundation’s community drives.
                  </span>
                </label>
              </div>

              {/* Primary Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                {loading
                  ? "Initializing Razorpay..."
                  : `Donate ₹${(finalAmount || 0).toLocaleString()} via Razorpay`}
              </button>

            </form>

            {/* UPI Fallback Link */}
            <div className="pt-4 border-t border-gray-100 text-center space-y-2">
              <span className="text-xs text-gray-500 block">Prefer scanning a UPI QR code?</span>
              <button
                type="button"
                onClick={() => setUpiModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
              >
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>Pay via YES BANK UPI QR & Submit Ref</span>
              </button>
            </div>

          </div>

          {/* Right Column: Donor Trust Sideboard */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-emerald-950 text-white p-6 rounded-3xl border border-emerald-900 space-y-4">
              <div className="flex items-center gap-2 text-lime-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-serif font-bold text-base text-white">Trust & Compliance</h3>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Sankalp Sarthi Foundation is a Govt. Approved non-profit entity based in Mumbai (Regd No: {SITE_CONFIG.regNo}).
              </p>
              <div className="space-y-2 pt-2 border-t border-emerald-900 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Instant Payment Confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Verified Photo Proof Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Direct Wholesale Procurement</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-3 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase">Need Assistance?</span>
              <p className="text-xs text-gray-700">
                Have questions regarding large bulk donations or corporate CSR sponsorship?
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-block text-xs font-bold text-emerald-700 hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Manual UPI Modal */}
      <UPIQRModal isOpen={upiModalOpen} onClose={() => setUpiModalOpen(false)} />

    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-sm font-semibold text-emerald-800">Loading donation portal...</div>}>
      <DonateForm />
    </Suspense>
  );
}

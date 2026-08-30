"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import { SITE_CONFIG } from "@/config/site";
import { UPIQRModal } from "@/components/upi-qr-modal";
import { QrCode, AlertCircle } from "lucide-react";

export const dynamic = "force-dynamic";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && (window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function DonateForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [amount, setAmount] = useState<number>(1000);
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
    // Pre-load Razorpay checkout SDK
    loadRazorpayScript();
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
      // Ensure Razorpay SDK is loaded
      const isRzpLoaded = await loadRazorpayScript();
      if (!isRzpLoaded || typeof (window as any).Razorpay === "undefined") {
        throw new Error("Razorpay Checkout SDK failed to load. Please check your internet connection or use YES BANK UPI QR below.");
      }

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
          color: "#005b45",
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
    <div className="py-14 sm:py-20 bg-[#005B45] text-white min-h-screen w-full max-w-full">
      
      {/* Dynamic script loading fallback */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
            Direct Social Impact
          </span>

          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white max-w-2xl mx-auto leading-tight">
            "Your contribution becomes someone's opportunity."
          </h1>

          <p className="text-xs sm:text-sm font-sans text-white/80 max-w-lg mx-auto">
            100% of direct donations support purchasing school supplies, serving warm meals, and aiding hospital patients.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#003D31] p-6 sm:p-12 border border-white/15 space-y-8">
          
          {errorMessage && (
            <div className="p-4 bg-red-950/90 border border-red-500/50 text-red-200 text-xs font-sans flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleRazorpayPayment} className="space-y-8">
            
            {/* 1. Quick Amount Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-sans font-bold uppercase tracking-widest text-white/90">
                Select Donation Amount (₹)
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SITE_CONFIG.quickDonationAmounts.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleSelectQuickAmount(val)}
                    className={`py-4 text-sm font-sans font-bold transition-all border min-h-[48px] ${
                      !isCustom && amount === val
                        ? "bg-[#63BE21] text-[#003D31] border-[#63BE21]"
                        : "bg-transparent text-white border-white/20 hover:border-white"
                    }`}
                  >
                    ₹{val.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="pt-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/60">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Or enter custom amount"
                    value={customAmount}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    className={`w-full pl-9 pr-4 py-3.5 text-sm font-sans bg-emerald-950/60 border outline-none text-white transition-all min-h-[48px] ${
                      isCustom ? "border-[#63BE21]" : "border-white/20 focus:border-white"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* 2. Cause Picker */}
            <div className="space-y-2">
              <label className="block text-xs font-sans font-bold uppercase tracking-widest text-white/90">
                Select Cause / Initiative
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full px-4 py-3.5 text-sm font-sans bg-emerald-950/80 border border-white/20 text-white outline-none focus:border-white min-h-[48px]"
              >
                <option value="Education Support">Education Support & School Supplies</option>
                <option value="Homeless Food Drive">Homeless & Vulnerable Meal Drives</option>
                <option value="Hospital Patient Nutrition">Hospital Patient Care Kits</option>
                <option value="Annual Drive 2026">Annual School Supplies Drive (5th Sep 2026)</option>
                <option value="General Fund">General Community Service Fund</option>
              </select>
            </div>

            {/* 3. Donor Personal Details */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-white/90">
                Donor Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-white/80 mb-1">
                    Full Name {!anonymous && "*"}
                  </label>
                  <input
                    type="text"
                    required={!anonymous}
                    disabled={anonymous}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={anonymous ? "Anonymous" : "Full Name"}
                    className="w-full px-4 py-3.5 text-xs font-sans bg-emerald-950/80 border border-white/20 text-white outline-none focus:border-white disabled:opacity-50 min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-white/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 text-xs font-sans bg-emerald-950/80 border border-white/20 text-white outline-none focus:border-white min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-white/80 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3.5 text-xs font-sans bg-emerald-950/80 border border-white/20 text-white outline-none focus:border-white min-h-[48px]"
                  />
                </div>

                <div className="flex items-center sm:pt-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-sans text-white/80 min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={anonymous}
                      onChange={(e) => setAnonymous(e.target.checked)}
                      className="w-4 h-4 text-[#63BE21] focus:ring-0"
                    />
                    <span>Donate Anonymously</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-white/80 mb-1">
                  Message / Note (Optional)
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Words of support..."
                  className="w-full px-4 py-3.5 text-xs font-sans bg-emerald-950/80 border border-white/20 text-white outline-none focus:border-white min-h-[48px]"
                />
              </div>
            </div>

            {/* Consent */}
            <div>
              <label className="flex items-start gap-2.5 cursor-pointer text-xs font-sans text-white/70">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 text-[#63BE21] focus:ring-0 mt-0.5"
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
              className="w-full min-h-[50px] py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 disabled:opacity-50 uppercase transition-all rounded-xs shadow-md"
            >
              {loading
                ? "INITIALIZING RAZORPAY..."
                : `DONATE ₹${(finalAmount || 0).toLocaleString()} NOW →`}
            </button>

          </form>

          {/* UPI Fallback Link */}
          <div className="pt-6 border-t border-white/10 text-center space-y-3">
            <span className="text-xs font-sans text-white/60 block uppercase tracking-wider">
              Prefer paying via YES BANK UPI QR?
            </span>
            <button
              type="button"
              onClick={() => setUpiModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] text-xs font-sans font-bold uppercase tracking-wider text-white border border-white/30 hover:border-white transition-colors inline-flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4 text-[#63BE21]" />
              <span>SHOW YES BANK UPI QR & SUBMIT REF</span>
            </button>
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
    <Suspense fallback={<div className="py-24 text-center text-xs font-sans font-bold text-white uppercase tracking-wider">Loading donation portal...</div>}>
      <DonateForm />
    </Suspense>
  );
}

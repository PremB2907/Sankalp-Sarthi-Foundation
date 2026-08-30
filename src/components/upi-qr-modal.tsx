"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Copy, Check, Upload, QrCode, AlertCircle, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface UPIQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UPIQRModal({ isOpen, onClose }: UPIQRModalProps) {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    utr: "",
    message: "",
  });
  const [proofFile, setProofFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(SITE_CONFIG.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("amount", formData.amount);
      data.append("utr", formData.utr);
      data.append("message", formData.message);
      if (proofFile) {
        data.append("proof", proofFile);
      }

      const res = await fetch("/api/donations/manual-upi", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit UPI reference");
      }

      setSuccessMsg("Your UPI payment reference has been recorded successfully! Our coordinator will verify and confirm.");
      setFormData({ name: "", email: "", phone: "", amount: "", utr: "", message: "" });
      setProofFile(null);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="p-6 bg-emerald-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-lime-400" />
            <h3 className="font-serif font-bold text-lg">
              Manual UPI QR Payment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* QR Artwork & Copy Card */}
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-center space-y-3">
            <div className="relative w-48 h-80 mx-auto bg-white rounded-xl shadow-md overflow-hidden p-2">
              <Image
                src="/assets/yesbank-upi-qr.png"
                alt="Sankalp Sarthi Foundation YES BANK UPI QR Code"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-500 font-medium">Official UPI ID ({SITE_CONFIG.upiBank})</span>
              <div className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-xl border border-emerald-200">
                <span className="font-mono text-xs font-bold text-emerald-950 tracking-tight">
                  {SITE_CONFIG.upiId}
                </span>
                <button
                  onClick={handleCopyUPI}
                  className="p-1 text-emerald-700 hover:text-emerald-900 font-semibold text-xs flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Submit Your Payment Reference (UTR)
            </h4>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Amount Paid (₹) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="500"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  UPI UTR / Ref No *
                </label>
                <input
                  type="text"
                  required
                  value={formData.utr}
                  onChange={(e) => setFormData({ ...formData, utr: e.target.value })}
                  placeholder="12-digit UTR Number"
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Upload Payment Screenshot (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProofFile(e.target.files?.[0] || null)}
                className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-800 hover:file:bg-emerald-100"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-xl transition-all shadow-sm"
            >
              {submitting ? "Submitting Reference..." : "Confirm UPI Payment Submission"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

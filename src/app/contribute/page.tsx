"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Package, BookOpen, Utensils, Laptop, Building, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContributePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contributionType: "School Supplies",
    description: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit contribution details");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Non-Monetary Support
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Contribute Supplies, Time & Expertise
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Supporting an NGO doesn't only mean donating money. You can donate physical school supplies, sponsor food drives, or contribute technical and digital skills.
          </p>
        </div>

        {/* Quick Contribution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <BookOpen className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-sm text-gray-900">School Supplies</h3>
            <p className="text-xs text-gray-600">Notebooks, geometry boxes, backpacks, drawing books.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <Utensils className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-sm text-gray-900">Food & Grains</h3>
            <p className="text-xs text-gray-600">Rice, pulses, cooking oil, fruit hampers for patients.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <Laptop className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-sm text-gray-900">Tech & Content</h3>
            <p className="text-xs text-gray-600">Web development, social media management, video editing.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <Building className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-sm text-gray-900">CSR Partnerships</h3>
            <p className="text-xs text-gray-600">Corporate sponsorships for entire school distribution drives.</p>
          </div>
        </div>

        {/* Direct WhatsApp Box */}
        <div className="bg-emerald-950 text-white p-6 rounded-3xl border border-emerald-900 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif font-bold text-lg text-white">Join Website & Contribution WhatsApp Group</h3>
            <p className="text-xs text-emerald-200/90 mt-1">
              Connect directly with our supply coordinators to arrange pickup/drop-offs in Mumbai.
            </p>
          </div>
          <a
            href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold text-emerald-950 bg-lime-400 hover:bg-lime-300 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-950" />
            Join WhatsApp Group
          </a>
        </div>

        {/* Form Box */}
        {success ? (
          <div className="bg-white p-8 rounded-3xl border border-gray-200 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-serif font-bold text-2xl text-gray-900">Thank You for Offering Your Support!</h3>
            <p className="text-xs text-gray-600">Our coordinator will review your submission and reach out shortly.</p>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            
            <h2 className="font-serif font-bold text-xl text-gray-900">
              Submit Your Non-Cash Contribution Proposal
            </h2>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Contribution Type *</label>
                  <select
                    value={formData.contributionType}
                    onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                  >
                    <option value="School Supplies">School Supplies (Bags, Books, Stationery)</option>
                    <option value="Food & Ration">Food & Ration Items</option>
                    <option value="Hospital Care Items">Hospital Care & Nutrition Kits</option>
                    <option value="Tech & Design Support">Tech, Web & Social Media Support</option>
                    <option value="CSR & Corporate Partnership">CSR & Corporate Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Details & Description *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the items or skills you wish to contribute..."
                  className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-xl transition-all shadow-md"
              >
                {submitting ? "Submitting Proposal..." : "Submit Contribution Offer"}
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}

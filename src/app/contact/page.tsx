"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Mail, MapPin, ShieldCheck, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to send contact message");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Contact Sankalp Sarthi Foundation
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Have questions regarding our drives, volunteering, or partnerships? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-emerald-950 text-white p-8 rounded-3xl border border-emerald-900 space-y-6 shadow-xl">
            <div>
              <h3 className="font-serif font-bold text-2xl text-white">Foundation Office</h3>
              <p className="text-xs text-emerald-200/80 mt-1">{SITE_CONFIG.name}</p>
            </div>

            <div className="space-y-4 text-xs text-emerald-200">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Email Address</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Headquarters</span>
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Government Registration</span>
                  <span>{SITE_CONFIG.govApproved} | REGD. NO. {SITE_CONFIG.regNo}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-900 space-y-3">
              <h4 className="text-xs font-bold text-lime-400 uppercase tracking-wider">
                Official WhatsApp Groups
              </h4>
              
              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-800 text-xs text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                <span>Volunteer Community</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-800 text-xs text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                <span>Website & Supply Contribution</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            
            <h3 className="font-serif font-bold text-xl text-gray-900">Send Us a Direct Message</h3>

            {errorMessage && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {success && (
              <div className="p-4 bg-emerald-50 text-emerald-800 text-xs rounded-2xl border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your message has been sent successfully. We will respond soon.</span>
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

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry / Partnership / Volunteer Inquiry"
                  className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

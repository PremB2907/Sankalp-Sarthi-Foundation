"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Mail, MapPin, ShieldCheck, MessageCircle, Send, CheckCircle2, AlertCircle, Phone } from "lucide-react";

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
    <div className="py-14 sm:py-20 bg-[#F7F6F0] min-h-screen w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
            Direct Communication Channel
          </span>
          <h1 className="font-serif text-[#17352D] text-fluid-hero">
            Contact Sankalp Sarthi Foundation
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#66756F] leading-relaxed">
            Have questions regarding our school supply drives, volunteering opportunities, or institutional partnerships? Reach out to our trustee and coordinator team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-[#003D31] text-white p-6 sm:p-8 border border-white/15 space-y-6 shadow-xl">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21]">
                Headquarters & Office
              </span>
              <h2 className="font-serif font-bold text-2xl text-white mt-1">Foundation Office</h2>
              <p className="text-xs font-sans text-white/70 mt-1">{SITE_CONFIG.name}</p>
            </div>

            <div className="space-y-4 text-xs font-sans text-white/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#63BE21] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Official Email</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white underline">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#63BE21] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Helpline Numbers</span>
                  <span>+91 7977854590 / 7738351352</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#63BE21] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Registered Address</span>
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#63BE21] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Government Registrations</span>
                  <span>12A & 80G Exempted | Regd. No. {SITE_CONFIG.regNo}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <h3 className="text-[10px] font-sans font-bold text-[#63BE21] uppercase tracking-widest">
                Official WhatsApp Communities
              </h3>
              
              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 border border-white/15 bg-emerald-950/80 hover:bg-emerald-900 text-xs text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#63BE21]" />
                <span>Volunteer Network Group ↗</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 border border-white/15 bg-emerald-950/80 hover:bg-emerald-900 text-xs text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#63BE21]" />
                <span>Website & Supply Contributions ↗</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#17352D]/15 space-y-6">
            
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45]">
                Direct Message Form
              </span>
              <h2 className="font-serif font-bold text-2xl text-[#17352D] mt-1">
                Send Us a Message
              </h2>
            </div>

            {errorMessage && (
              <div className="p-3.5 bg-red-50 text-red-700 text-xs font-sans border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {success && (
              <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-sans border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#005B45] shrink-0" />
                <span>Thank you! Your message has been sent successfully. We will respond to your email address shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3.5 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry / Partnership / Volunteer Questions"
                  className="w-full px-4 py-3.5 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or question here..."
                  className="w-full px-4 py-3.5 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[48px] py-4 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] disabled:opacity-50 uppercase transition-all rounded-xs shadow-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitting ? "SENDING MESSAGE..." : "SEND MESSAGE →"}
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}

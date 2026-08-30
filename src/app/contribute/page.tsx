"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { MessageCircle, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

interface Option {
  num: string;
  title: string;
  subtitle: string;
  items: string[];
}

const OPTIONS: Option[] = [
  {
    num: "01",
    title: "EDUCATION & LEARNING SUPPLIES",
    subtitle: "Donate physical school materials directly",
    items: ["New Durable School Backpacks", "Notebooks & Exercise Books", "Writing Instruments & Geometry Sets", "Drawing Kits & Art Supplies"],
  },
  {
    num: "02",
    title: "FOOD & NOURISHMENT",
    subtitle: "Donate grains, fruits & grocery staples",
    items: ["Bulk Grains (Rice, Wheat, Pulses)", "Fresh Fruit Hampers for Patients", "Cooking Oil & Basic Ration Supplies", "Hygiene & Caregiver Kits"],
  },
  {
    num: "03",
    title: "TECH & DIGITAL SKILLS",
    subtitle: "Contribute professional expertise",
    items: ["Web Development & Maintenance", "Social Media Content Strategy", "Photography & Video Editing", "Graphic Design & Copywriting"],
  },
  {
    num: "04",
    title: "CSR & CORPORATE PARTNERSHIPS",
    subtitle: "Sponsor complete rural school drives",
    items: ["Corporate Sponsored School Kits", "Institutional CSR Grant Partnerships", "Employee Volunteer Engagement", "Drive Equipment & Transport Support"],
  },
];

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
        throw new Error(json.error || "Failed to submit contribution proposal");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-[#F7F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
            Non-Monetary Support
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#17352D] leading-tight">
            Give more than money. <br />
            <span className="font-accent italic text-[#005B45] font-normal">
              Give what you can.
            </span>
          </h1>
          <p className="text-base font-sans text-[#66756F] leading-relaxed">
            Supporting an NGO is about showing up. You can contribute physical school bags, sponsor grocery rations, or donate your professional technical and creative skills.
          </p>
        </div>

        {/* 4 Large Editorial Numbered Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {OPTIONS.map((opt) => (
            <div
              key={opt.num}
              className="p-8 border border-[#17352D]/15 bg-white space-y-4 relative group hover:border-[#005B45] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-3xl text-[#005B45]">
                  {opt.num}
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#66756F]">
                  {opt.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#17352D]">
                {opt.title}
              </h3>

              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-[#17352D]/10 text-xs font-sans text-[#17352D]">
                {opt.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005B45]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct CTA Banner */}
        <div className="bg-[#003D31] text-white p-8 sm:p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Direct Supply Coordination
            </span>
            <h3 className="font-serif text-2xl text-white">
              Join Website & Supply Contribution WhatsApp Group
            </h3>
            <p className="text-xs font-sans text-white/80">
              Connect directly with our supply coordinators to organize drop-offs or bulk donations.
            </p>
          </div>

          <a
            href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#003D31]" />
            JOIN WHATSAPP GROUP →
          </a>
        </div>

        {/* Institutional Form Container */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-[#17352D]/15 space-y-8">
          
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
              Proposal Submission
            </span>
            <h2 className="font-serif text-3xl text-[#17352D] mt-1">
              Submit Your Contribution Proposal
            </h2>
          </div>

          {errorMessage && (
            <div className="p-4 bg-red-50 text-red-700 text-xs font-sans border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {success ? (
            <div className="p-8 text-center space-y-3 bg-[#F7F6F0] border border-[#17352D]/10">
              <CheckCircle2 className="w-12 h-12 text-[#005B45] mx-auto" />
              <h3 className="font-serif text-2xl text-[#17352D]">Proposal Received</h3>
              <p className="text-xs font-sans text-[#66756F]">
                Thank you for offering your support. Our coordinator will review your details and contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Contribution Type *
                  </label>
                  <select
                    value={formData.contributionType}
                    onChange={(e) => setFormData({ ...formData, contributionType: e.target.value })}
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  >
                    <option value="School Supplies">School Supplies (Bags, Books, Stationery)</option>
                    <option value="Food & Ration">Food & Ration Supplies</option>
                    <option value="Hospital Care Items">Hospital Care & Nutrition Hampers</option>
                    <option value="Tech & Design Support">Tech, Web & Social Media Support</option>
                    <option value="CSR & Corporate Partnership">CSR & Corporate Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                  Description & Quantity *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the items, skills, or proposal in detail..."
                  className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] disabled:opacity-50 uppercase transition-all"
              >
                {submitting ? "SUBMITTING..." : "SUBMIT CONTRIBUTION PROPOSAL →"}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

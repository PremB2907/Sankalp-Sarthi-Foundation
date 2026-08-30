"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS_DATA } from "@/config/faqs";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFaqs = activeCategory === "all"
    ? FAQS_DATA
    : FAQS_DATA.filter((faq) => faq.category === activeCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Frequently Asked Questions
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Donor & Volunteer Information
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Find answers to common questions about our donation process, volunteer opportunities, and governance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Questions" },
            { id: "donations", label: "Donations & Security" },
            { id: "volunteering", label: "Volunteering & Internships" },
            { id: "trust", label: "Trust & Governance" },
            { id: "general", label: "General Questions" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                activeCategory === cat.id
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-emerald-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-emerald-50/50 transition-colors"
                >
                  <span className="font-serif font-bold text-base text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-gray-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="bg-emerald-950 text-white p-6 rounded-3xl text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-lime-400 mx-auto" />
          <h3 className="font-serif font-bold text-xl text-white">Still Have Questions?</h3>
          <p className="text-xs text-emerald-200 max-w-md mx-auto">
            Our team is always happy to clarify any details about our campaigns or registration.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-emerald-950 bg-lime-400 hover:bg-lime-300 rounded-full transition-all shadow-md"
            >
              <Mail className="w-4 h-4 text-emerald-950" />
              Contact Coordinator
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

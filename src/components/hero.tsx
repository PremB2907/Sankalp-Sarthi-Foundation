"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Users, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-semibold text-emerald-900 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>{SITE_CONFIG.govApproved} | REGD. NO. {SITE_CONFIG.regNo}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-emerald-950 leading-tight">
              Small acts. <br className="hidden sm:inline" />
              <span className="text-emerald-700 underline decoration-lime-500 decoration-wavy decoration-2">
                Consistent service.
              </span>{" "}
              Real impact.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sankalp Sarthi Foundation is a Mumbai-based, volunteer-driven nonprofit empowering underprivileged school children with stationery & bags, serving warm meals to homeless families, and supporting hospital patients with nutritional care.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-gray-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-gray-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Volunteer Driven</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-gray-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Direct Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-gray-200/80 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Secure Payment Gateway</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/donate"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate Now
              </Link>
              
              <Link
                href="/volunteer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-300 rounded-full shadow-xs transition-all"
              >
                <Users className="w-4 h-4 text-emerald-700" />
                Become a Volunteer
              </Link>

              <Link
                href="/impact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 py-2 transition-colors"
              >
                See Our Impact
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Poster Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="aspect-4/3 relative">
                  <Image
                    src="/assets/annual-drive-poster.png"
                    alt="Sankalp Sarthi Foundation Annual School Supplies Drive"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <div className="p-4 bg-emerald-950 text-white flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider block">
                      Active Campaign
                    </span>
                    <h3 className="font-serif text-sm font-bold text-white">
                      Annual Drive — 5th Sept 2026
                    </h3>
                  </div>
                  <Link
                    href="/campaigns/annual-drive-2026"
                    className="px-3 py-1.5 text-xs font-bold bg-lime-500 text-emerald-950 hover:bg-lime-400 rounded-lg transition-colors"
                  >
                    View Drive
                  </Link>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                  13+
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Active Community</div>
                  <div className="text-sm font-bold text-gray-900">Serving Since 2013</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

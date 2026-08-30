"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative bg-[#F7F6F0] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#17352D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                {SITE_CONFIG.govApproved} • EST. {SITE_CONFIG.foundedYear}
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17352D] leading-[1.1] tracking-tight">
                Helping hands <br className="hidden sm:inline" />
                <span className="font-accent italic text-[#005B45] font-normal">
                  create lasting
                </span>{" "}
                change.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#66756F] leading-relaxed max-w-xl font-sans font-normal">
              Sankalp Sarthi Foundation is a volunteer-led non-profit in Mumbai dedicated to equipping school children with educational supplies, serving warm meals to vulnerable street communities, and providing nutritional care to hospital patients.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/donate"
                className="px-8 py-4 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs text-center"
              >
                DONATE NOW →
              </Link>
              
              <Link
                href="/volunteer"
                className="px-7 py-4 text-xs font-sans font-bold tracking-widest text-[#17352D] bg-transparent hover:bg-[#17352D] hover:text-white border border-[#17352D] uppercase transition-all rounded-xs flex items-center justify-center gap-1.5"
              >
                BECOME A VOLUNTEER
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Institutional Subtext */}
            <div className="pt-6 border-t border-[#17352D]/10 flex flex-wrap items-center gap-6 text-xs text-[#66756F]">
              <div>
                <span className="font-bold text-[#17352D]">100% Direct Impact</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#17352D]/30" />
              <div>
                <span className="font-bold text-[#17352D]">Govt. Regd. {SITE_CONFIG.regNo}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#17352D]/30" />
              <div>
                <span className="font-bold text-[#17352D]">Mumbai & Palghar, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photography Treatment with Real Field Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Real Photo Frame */}
              <div className="relative aspect-4/3 sm:aspect-4/5 overflow-hidden border border-[#17352D]/15 bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/drive_1.jpg"
                  alt="Sankalp Sarthi Foundation Book Distribution Programme Drive"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#003D31]/95 text-white backdrop-blur-xs border-t border-white/10">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21] block mb-1">
                    On-Ground Field Action
                  </span>
                  <h3 className="font-serif text-lg text-white font-bold leading-snug">
                    Book Distribution Programme
                  </h3>
                  <p className="text-xs font-sans text-white/80 mt-1">
                    Volunteers & primary school children during rural learning kit distribution.
                  </p>
                </div>
              </div>

              {/* Offset Accent Backdrop */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#005B45]/20 -z-10 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

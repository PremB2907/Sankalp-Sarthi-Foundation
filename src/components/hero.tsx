"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Hero() {
  return (
    <section className="relative bg-[#F7F6F0] pt-8 pb-16 lg:pt-20 lg:pb-28 border-b border-[#17352D]/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Mobile Order: 1. Eyebrow & Headline & Description */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
                {SITE_CONFIG.govApproved} • EST. {SITE_CONFIG.foundedYear}
              </span>
              
              <h1 className="font-serif text-[#17352D] leading-[1.1] tracking-tight text-fluid-hero">
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

            {/* Mobile Order: 2. CTAs (Stacked on Mobile min-h-[48px]) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/donate"
                className="w-full sm:w-auto px-8 min-h-[48px] py-3.5 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs flex items-center justify-center text-center"
              >
                DONATE NOW →
              </Link>
              
              <Link
                href="/volunteer"
                className="w-full sm:w-auto px-7 min-h-[48px] py-3.5 text-xs font-sans font-bold tracking-widest text-[#17352D] bg-transparent hover:bg-[#17352D] hover:text-white border border-[#17352D] uppercase transition-all rounded-xs flex items-center justify-center gap-1.5 text-center"
              >
                BECOME A VOLUNTEER
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Order: 3. Hero Image (Appears below CTAs on Mobile) */}
            <div className="pt-4 lg:hidden">
              <div className="relative aspect-4/3 w-full border border-[#17352D]/15 bg-[#EAE8DE] overflow-hidden">
                <Image
                  src="/assets/drives/drive_1.jpg"
                  alt="Sankalp Sarthi Foundation Book Distribution Programme Drive"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#003D31]/95 text-white backdrop-blur-xs border-t border-white/10">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#63BE21] block mb-0.5">
                    On-Ground Field Action
                  </span>
                  <h3 className="font-serif text-base text-white font-bold leading-snug">
                    Book Distribution Programme
                  </h3>
                  <p className="text-[11px] font-sans text-white/80 mt-0.5">
                    Volunteers & primary school children in Palghar district.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Order: 4. Trust / Registration Info Block */}
            <div className="pt-4 border-t border-[#17352D]/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#66756F]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005B45] shrink-0" />
                <span className="font-bold text-[#17352D]">100% Direct Impact</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005B45] shrink-0" />
                <span className="font-bold text-[#17352D]">Govt. Regd. {SITE_CONFIG.regNo}</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005B45] shrink-0" />
                <span className="font-bold text-[#17352D]">Mumbai & Palghar, India</span>
              </div>
            </div>

          </div>

          {/* Desktop Right Column: Photography Treatment */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative aspect-4/5 overflow-hidden border border-[#17352D]/15 bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/drive_1.jpg"
                  alt="Sankalp Sarthi Foundation Book Distribution Programme Drive"
                  fill
                  sizes="40vw"
                  className="object-cover object-center"
                  priority
                />
                
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

              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#005B45]/20 -z-10 pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

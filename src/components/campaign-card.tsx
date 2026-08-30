import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function CampaignCard() {
  return (
    <section className="py-16 sm:py-24 bg-[#003D31] text-white border-b border-white/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Mobile Stack: Text Header */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21] block">
                ANNUAL DRIVE • TARGET DATE: 5 SEPTEMBER 2026
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Backpack & School Stationery Kit Drive 2026
              </h2>
            </div>

            <p className="text-sm sm:text-base font-sans text-white/80 leading-relaxed">
              Equipping 500+ primary school students in rural Palghar district with durable backpacks, notebooks, writing materials, and drawing kits before the academic term begins.
            </p>

            {/* Mobile Campaign Image (Appears early on Mobile) */}
            <div className="lg:hidden">
              <div className="relative aspect-4/5 w-full border border-white/15 overflow-hidden bg-emerald-950">
                <Image
                  src="/assets/drives/annual-drive-poster.png"
                  alt="Annual School Supply Drive Poster 2026"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#003D31]/95 text-white border-t border-white/10 backdrop-blur-xs">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21]">
                    TARGET GOAL: ₹1,50,000
                  </span>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-2">
                    <div className="bg-[#63BE21] h-full w-[28%]" />
                  </div>
                  <span className="text-[11px] font-sans text-white/80 mt-1 block">
                    ₹42,500 Raised (28% Completed)
                  </span>
                </div>
              </div>
            </div>

            {/* Target Breakdown Box */}
            <div className="p-4 sm:p-6 bg-emerald-950/80 border border-white/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-sans">
                <span className="text-white/80 font-semibold uppercase tracking-wider">
                  Target Deliverable
                </span>
                <span className="text-[#63BE21] font-bold">500 Student Kits</span>
              </div>
              <div className="flex items-center justify-between text-xs font-sans pt-2 border-t border-white/10">
                <span className="text-white/80 font-semibold uppercase tracking-wider">
                  Sponsorship Cost
                </span>
                <span className="text-white font-bold">₹300 per Child Kit</span>
              </div>
            </div>

            {/* CTAs (Stacked on Mobile min-h-[48px]) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/donate?cause=Annual%20School%20Drive%202026"
                className="w-full sm:w-auto px-8 min-h-[48px] py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all rounded-xs shadow-md flex items-center justify-center text-center"
              >
                DONATE TO DRIVE NOW →
              </Link>
              
              <Link
                href="/volunteer"
                className="w-full sm:w-auto px-6 min-h-[48px] py-4 text-xs font-sans font-bold tracking-widest text-white border border-white/30 hover:border-white uppercase transition-all rounded-xs flex items-center justify-center gap-1.5 text-center"
              >
                JOIN VOLUNTEER TEAM
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Desktop Campaign Image */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="relative aspect-4/5 w-full border border-white/15 overflow-hidden bg-emerald-950">
              <Image
                src="/assets/drives/annual-drive-poster.png"
                alt="Annual School Supply Drive Poster 2026"
                fill
                sizes="50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#003D31]/95 text-white border-t border-white/10 backdrop-blur-xs">
                <div className="flex items-center justify-between text-xs font-sans mb-1.5">
                  <span className="font-bold uppercase tracking-widest text-[#63BE21]">
                    TARGET GOAL: ₹1,50,000
                  </span>
                  <span className="font-bold">28% Completed</span>
                </div>
                <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#63BE21] h-full w-[28%]" />
                </div>
                <div className="flex items-center justify-between text-xs font-sans mt-2 text-white/80">
                  <span>₹42,500 Raised</span>
                  <span>₹1,07,500 Remaining</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

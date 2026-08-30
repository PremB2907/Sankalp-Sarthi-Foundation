"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StickyMobileCTA() {
  const pathname = usePathname();

  // Hide sticky CTA bar on donation and volunteer form pages to prevent UI overlap
  if (pathname === "/donate" || pathname === "/volunteer") {
    return null;
  }

  return (
    <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#003D31]/95 text-white border-t border-white/15 backdrop-blur-md px-4 py-3 pb-safe shadow-2xl transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        <div className="flex flex-col">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21]">
            Transform A Life Today
          </span>
          <span className="text-xs font-serif font-bold text-white leading-tight">
            Sankalp Sarthi Foundation
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/volunteer"
            className="px-3 py-2.5 text-[11px] font-sans font-bold tracking-wider text-white border border-white/30 hover:bg-white/10 uppercase rounded-xs flex items-center gap-1 min-h-[44px]"
          >
            Volunteer
          </Link>

          <Link
            href="/donate"
            className="px-4 py-2.5 text-[11px] font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase rounded-xs shadow-md flex items-center gap-1 min-h-[44px]"
          >
            DONATE →
          </Link>
        </div>

      </div>
    </div>
  );
}

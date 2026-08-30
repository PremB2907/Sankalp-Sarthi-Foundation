"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#F7F6F0]/95 backdrop-blur-md border-t border-[#17352D]/15 p-3 shadow-lg">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <Link
          href="/volunteer"
          className="flex-1 py-3 text-xs font-sans font-bold tracking-wider text-center text-[#17352D] bg-transparent border border-[#17352D] uppercase rounded-xs"
        >
          Volunteer ↗
        </Link>
        <Link
          href="/donate"
          className="flex-[2] py-3 text-xs font-sans font-bold tracking-widest text-center text-white bg-[#005B45] hover:bg-[#003D31] uppercase rounded-xs shadow-xs"
        >
          DONATE NOW →
        </Link>
      </div>
    </div>
  );
}

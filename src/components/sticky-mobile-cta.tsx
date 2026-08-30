"use client";

import Link from "next/link";
import { Heart, Users } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 shadow-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <Link
          href="/volunteer"
          className="flex-1 py-2.5 px-3 text-xs font-semibold text-center text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl"
        >
          <Users className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
          Volunteer
        </Link>
        <Link
          href="/donate"
          className="flex-[2] py-2.5 px-4 text-xs font-bold text-center text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <Heart className="w-4 h-4 fill-white" />
          Donate Now
        </Link>
      </div>
    </div>
  );
}

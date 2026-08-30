"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CAUSES_DATA, Cause } from "@/config/causes";
import { Heart, CheckCircle2, ArrowRight, X } from "lucide-react";

export function CausesGrid() {
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  return (
    <section className="py-16 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Core NGO Programs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              Our Key Areas of Service
            </h2>
          </div>
          <Link
            href="/causes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAUSES_DATA.map((cause) => (
            <div
              key={cause.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {cause.impactMetric}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-700 mt-1">
                    {cause.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                    {cause.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCause(cause)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                  >
                    Read Details
                  </button>
                  <Link
                    href={`/donate?cause=${encodeURIComponent(cause.title)}`}
                    className="py-2 px-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    Support
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Cause Detail Modal */}
      {selectedCause && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedCause(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/9 bg-gray-100">
              <Image
                src={selectedCause.image}
                alt={selectedCause.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  {selectedCause.impactMetric}
                </span>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                  {selectedCause.title}
                </h3>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                {selectedCause.longDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  What Your Donation Provides:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCause.itemsProvided.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-gray-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Link
                  href={`/donate?cause=${encodeURIComponent(selectedCause.title)}`}
                  className="flex-1 py-3 text-center text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  Donate to {selectedCause.title}
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

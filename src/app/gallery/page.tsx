"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Filter, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "education" | "food" | "health" | "volunteers" | "drives";
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/assets/annual-drive-poster.png",
    title: "Annual School Supplies Drive Poster & Photos",
    category: "education",
    caption: "Children receiving high-quality school bags and stationery kits during our Annual Drive.",
  },
  {
    id: "g2",
    src: "/assets/foundation-certificate.png",
    title: "Social Service Internship Certificate",
    category: "volunteers",
    caption: "Official Foundation Certificate of Appreciation awarded for student internship contributions.",
  },
  {
    id: "g3",
    src: "/assets/foundation-letterhead.png",
    title: "Internship & Foundation Letterhead Document",
    category: "volunteers",
    caption: "Certified letterhead detailing academic 45-hour internship accomplishments.",
  },
  {
    id: "g4",
    src: "/assets/foundation-logo-card.png",
    title: "Govt. Approved Foundation Seal",
    category: "drives",
    caption: "Official registration mark (Regd No: Mu/0001792/2025) of Sankalp Sarthi Foundation.",
  },
  {
    id: "g5",
    src: "/assets/yesbank-upi-qr.png",
    title: "Official YES BANK UPI QR Code",
    category: "drives",
    caption: "Direct YES BANK UPI QR code for verified donor contributions.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Field Documentation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Field Photo Gallery & Drive Archives
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Authentic photographs capturing school distributions, volunteer activities, and foundation drives.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Photos" },
            { id: "education", label: "Education & Bags" },
            { id: "food", label: "Food Support" },
            { id: "health", label: "Hospital Care" },
            { id: "volunteers", label: "Volunteers & Interns" },
            { id: "drives", label: "Annual Drives" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-8 h-8" />
                </div>
              </div>

              <div className="p-4 space-y-1 bg-white">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-sm text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 bg-gray-950">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <h3 className="font-serif font-bold text-xl text-gray-900">
                {activeItem.title}
              </h3>
              <p className="text-sm text-gray-600">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

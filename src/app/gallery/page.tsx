"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  location: string;
  category: "education" | "press" | "hospital" | "volunteers" | "seniors";
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/assets/drives/drive_12.jpg",
    title: "Children Walking to School with Sarthi Backpacks",
    location: "Rural Palghar Village Path",
    category: "education",
    caption: "Primary school students walking along rural village mud path wearing official Sarthi Foundation printed backpacks.",
  },
  {
    id: "g2",
    src: "/assets/drives/senior_meal_1.png",
    title: "Gorai Care Center Senior Meal Distribution",
    location: "Gorai, Mumbai",
    category: "seniors",
    caption: "Serving fresh wholesome warm meals to elderly residents and senior citizens in wheelchairs.",
  },
  {
    id: "g3",
    src: "/assets/drives/hospital_fruit_crates.jpg",
    title: "Hospital Patient Care — Fruit Crates Drive",
    location: "Municipal Hospital Ward, Mumbai",
    category: "hospital",
    caption: "Volunteer team organizing crates and boxes of fresh apples and fruit hampers for municipal hospital inpatients.",
  },
  {
    id: "g4",
    src: "/assets/drives/newspaper_clipping.png",
    title: "Jagaruk Times Press Feature — Republic Day Drive",
    location: "Gorai, Mumbai",
    category: "press",
    caption: "Newspaper clipping from Jagaruk Times covering Sankalp Sarthi Foundation members distributing free blankets at Gorai Old Age Home.",
  },
  {
    id: "g5",
    src: "/assets/drives/drive_1.jpg",
    title: "Book Distribution Programme — Outdoor Drive",
    location: "Palghar District School",
    category: "education",
    caption: "Volunteers and primary school children holding book distribution packages in front of the official foundation banner.",
  },
  {
    id: "g6",
    src: "/assets/drives/backpack_distribution.jpg",
    title: "Backpack & Learning Kit Handover",
    location: "Palghar Primary School",
    category: "education",
    caption: "Volunteers handing over durable school backpacks and writing kits directly to primary school students.",
  },
  {
    id: "g7",
    src: "/assets/drives/drive_10.jpg",
    title: "Primary Student Backpack Handover",
    location: "Village Primary School",
    category: "education",
    caption: "Young student receiving branded school bag and exercise books from volunteer team.",
  },
  {
    id: "g8",
    src: "/assets/drives/drive_11.jpg",
    title: "School Corridor Distribution Line",
    location: "Rural Palghar School",
    category: "education",
    caption: "School children seated along school corridor receiving books and learning sets.",
  },
  {
    id: "g9",
    src: "/assets/drives/senior_meal_2.png",
    title: "Warm Meal Service for Senior Citizens",
    location: "Care Home, Mumbai",
    category: "seniors",
    caption: "Nutritious meal plates served to elderly care home residents by foundation volunteers.",
  },
  {
    id: "g10",
    src: "/assets/drives/hospital_fruit_1.jpg",
    title: "Nutritional Fruit Plate Distribution",
    location: "Public Hospital, Mumbai",
    category: "hospital",
    caption: "Female volunteers preparing fresh fruit plates (bananas and apples) for hospital patient nutrition drive.",
  },
  {
    id: "g11",
    src: "/assets/drives/hospital_fruit_2.jpg",
    title: "Hospital Patient Care Station",
    location: "Municipal Hospital Ward, Mumbai",
    category: "hospital",
    caption: "Volunteers stationed at the official Sarthi Foundation hospital nutrition service counter.",
  },
  {
    id: "g12",
    src: "/assets/drives/hospital_fruit_3.jpg",
    title: "Prepared Hospital Patient Fruit Hampers",
    location: "Hospital Ward, Mumbai",
    category: "hospital",
    caption: "Carefully arranged fresh fruit hampers prepared for distribution to hospital inpatients.",
  },
  {
    id: "g13",
    src: "/assets/drives/drive_8.jpg",
    title: "Volunteer Team Sorting & Packing 1,000s of Notebooks",
    location: "Supply Operations Center",
    category: "volunteers",
    caption: "Volunteers organizing, bundling, and quality checking thousands of notebooks for rural school delivery.",
  },
  {
    id: "g14",
    src: "/assets/drives/drive_2.jpg",
    title: "Sakhare Gram Panchayat Drive",
    location: "Dahanu, Palghar",
    category: "education",
    caption: "Large volunteer and student distribution gathering at Gram Panchayat Sakhare, Dahanu Tehsil, Palghar.",
  },
  {
    id: "g15",
    src: "/assets/drives/drive_3.jpg",
    title: "Learning Kit Handover to Primary School Girls",
    location: "Govane Malkaripada School",
    category: "education",
    caption: "Foundation volunteer presenting educational books and stationery kits directly to school students.",
  },
  {
    id: "g16",
    src: "/assets/drives/drive_4.png",
    title: "Classroom Learning Kit Distribution",
    location: "Palghar Rural School",
    category: "education",
    caption: "Indoor classroom distribution drive supplying exercise books and stationery hampers to young learners.",
  },
  {
    id: "g17",
    src: "/assets/drives/drive_5.jpg",
    title: "Volunteer Field Logistics Team",
    location: "Kotharpada Center, Dahanu",
    category: "volunteers",
    caption: "Sankalp Sarthi volunteer team preparing stacked book packages outside village school building.",
  },
  {
    id: "g18",
    src: "/assets/drives/drive_7.jpg",
    title: "Classroom Refreshment & Nutrition Drive",
    location: "Rural Primary School",
    category: "education",
    caption: "Serving healthy fruit juices and nutritious snacks to seated primary students in classroom environment.",
  },
  {
    id: "g19",
    src: "/assets/drives/drive_6.jpg",
    title: "Rainy Season Monsoon School Book Drive",
    location: "Palghar Remote Center",
    category: "education",
    caption: "Volunteers braving heavy monsoon rains to deliver school supplies by bus to remote village children.",
  },
  {
    id: "g20",
    src: "/assets/drives/drive_9.jpg",
    title: "Gorai Old Age Home Care Package Handover",
    location: "Gorai, Mumbai",
    category: "seniors",
    caption: "Foundation trustees and team presenting essential care packages to senior citizens in Gorai.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem = activeIdx !== null ? filteredItems[activeIdx] : null;

  // Lock body scroll when lightbox is active & handle keyboard arrow keys
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIdx, filteredItems.length]);

  return (
    <div className="py-14 sm:py-20 bg-[#F7F6F0] min-h-screen w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
            20 Verified Field Media Files
          </span>
          <h1 className="font-serif text-[#17352D] text-fluid-hero">
            Field Photo Archive & Media Features
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#66756F] leading-relaxed">
            Real photographs documenting book distribution drives, hospital patient nutrition, senior care home meal services, volunteer packing operations, and newspaper press features in Mumbai & Palghar.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#17352D]/10 pb-4">
          {[
            { id: "all", label: "All Media (20)" },
            { id: "education", label: "Book Drives & Backpacks" },
            { id: "hospital", label: "Hospital Patient Care" },
            { id: "seniors", label: "Senior Citizen Care" },
            { id: "volunteers", label: "Volunteer Operations" },
            { id: "press", label: "Press Coverage" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveIdx(null);
              }}
              className={`px-3.5 py-2 text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider transition-all rounded-xs min-h-[40px] ${
                activeCategory === cat.id
                  ? "bg-[#005B45] text-white"
                  : "bg-white text-[#17352D] border border-[#17352D]/20 hover:border-[#005B45]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile 2-Column Masonry Grid / Desktop 3-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className="group bg-white border border-[#17352D]/15 cursor-pointer transition-all duration-300 hover:border-[#005B45] p-3 sm:p-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 bg-[#EAE8DE] overflow-hidden mb-2.5 sm:mb-3">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#003D31]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45]">
                    <span>{item.category}</span>
                    <span className="text-[#66756F]">{item.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs font-sans text-[#66756F] line-clamp-2 mt-2 hidden sm:block">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && activeIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#003D31]/95 backdrop-blur-xs animate-in fade-in duration-200 w-full max-w-full">
          
          <button
            onClick={() => setActiveIdx(null)}
            className="absolute top-4 right-4 p-3 bg-black/70 text-white rounded-full hover:bg-black z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={() => setActiveIdx(activeIdx > 0 ? activeIdx - 1 : filteredItems.length - 1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => setActiveIdx(activeIdx < filteredItems.length - 1 ? activeIdx + 1 : 0)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/50 text-white rounded-full hover:bg-black z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full bg-[#F7F6F0] border border-white/20 shadow-2xl overflow-hidden rounded-xs">
            <div className="relative aspect-4/3 sm:aspect-16/10 bg-[#003D31]">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-white space-y-1.5 border-t border-[#17352D]/10">
              <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
                {activeItem.location} • {activeItem.category}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl text-[#17352D] leading-snug">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#66756F]">
                {activeItem.caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

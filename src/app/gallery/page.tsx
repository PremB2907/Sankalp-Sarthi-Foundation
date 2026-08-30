"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

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
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="py-20 bg-[#F7F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
            20 Verified Field Media Files
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#17352D] leading-tight">
            Field Photo Archive & Media Features
          </h1>
          <p className="text-base font-sans text-[#66756F] leading-relaxed">
            Real photographs documenting book distribution drives, hospital patient nutrition, senior care home meal services, volunteer packing operations, and newspaper press features in Mumbai & Palghar.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#17352D]/10 pb-4">
          {[
            { id: "all", label: "All Media (20)" },
            { id: "education", label: "Book Drives & Backpacks" },
            { id: "hospital", label: "Hospital Patient Nutrition" },
            { id: "seniors", label: "Senior Citizens & Meal Drives" },
            { id: "volunteers", label: "Volunteer Operations" },
            { id: "press", label: "Press Coverage" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wider transition-all rounded-xs ${
                activeCategory === cat.id
                  ? "bg-[#005B45] text-white"
                  : "bg-white text-[#17352D] border border-[#17352D]/20 hover:border-[#005B45]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white border border-[#17352D]/15 cursor-pointer transition-all duration-300 hover:border-[#005B45] p-4"
            >
              <div className="relative aspect-4/3 bg-[#EAE8DE] overflow-hidden mb-3">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#003D31]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45]">
                  <span>{item.category}</span>
                  <span className="text-[#66756F]">{item.location}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-[#66756F] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#003D31]/90 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-[#F7F6F0] border border-white/20 shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2.5 bg-black/60 text-white hover:bg-black z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 bg-[#003D31]">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="p-8 bg-white space-y-2 border-t border-[#17352D]/10">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                {activeItem.location} — {activeItem.category}
              </span>
              <h3 className="font-serif text-2xl text-[#17352D]">
                {activeItem.title}
              </h3>
              <p className="text-sm font-sans text-[#66756F]">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";

interface WorkSection {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metric: string;
  items: string[];
}

const WORK_SECTIONS: WorkSection[] = [
  {
    num: "01",
    title: "EDUCATION & SCHOOL KITS",
    subtitle: "Empowering children with essential learning tools",
    description: "Many children in rural and semi-urban Mumbai attend school without notebooks, pens, or durable school bags. Sankalp Sarthi Foundation delivers complete education kits directly to underprivileged primary students.",
    image: "/assets/annual-drive-poster.png",
    metric: "1,200+ Students Supported",
    items: ["Durable Backpacks", "Notebooks & Exercise Books", "Geometry & Writing Sets", "Drawing Kits & Color Pencils"],
  },
  {
    num: "02",
    title: "FOOD & NOURISHMENT",
    subtitle: "Wholesome meal drives & hospital patient care",
    description: "Hunger is an immediate crisis for street families and daily wage laborers. We cook, pack, and distribute fresh wholesome meals. Additionally, we provide fruit hampers and caregiver kits to patients in public municipal hospitals.",
    image: "/assets/foundation-certificate.png",
    metric: "15,000+ Meals & 850+ Patients",
    items: ["Fresh Cooked Meals", "Clean Drinking Water", "Hospital Fruit Hampers", "Nutritional Caregiver Kits"],
  },
  {
    num: "03",
    title: "COMMUNITY SERVICE",
    subtitle: "Grassroots volunteer drives & emergency aid",
    description: "Driven entirely by youth and community volunteers, we conduct seasonal monsoon raincoat distributions, winter blanket drives, neighborhood cleanliness workshops, and disaster relief activities.",
    image: "/assets/foundation-letterhead.png",
    metric: "50+ Grassroots Drives",
    items: ["Winter Blanket Drives", "Monsoon Umbrella & Raincoat Distribution", "Cleanliness & Awareness Workshops", "Emergency Disaster Assistance"],
  },
];

export function CausesGrid() {
  const [selectedSection, setSelectedSection] = useState<WorkSection | null>(null);

  return (
    <section className="py-24 bg-[#F7F6F0] border-b border-[#17352D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
              Core Foundation Initiatives
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#17352D]">
              Our Key Areas of Work
            </h2>
          </div>

          <Link
            href="/causes"
            className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] hover:text-[#003D31] flex items-center gap-1.5 transition-colors"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Numbered Sections */}
        <div className="space-y-16">
          {WORK_SECTIONS.map((section, idx) => (
            <div
              key={section.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 ${
                idx !== WORK_SECTIONS.length - 1 ? "border-b border-[#17352D]/10" : ""
              }`}
            >
              
              {/* Text & Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-3xl text-[#005B45]">
                    {section.num}
                  </span>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#66756F]">
                    — {section.metric}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#17352D] leading-tight">
                  {section.title}
                </h3>

                <p className="text-sm font-sans text-[#66756F] leading-relaxed">
                  {section.description}
                </p>

                {/* Items List */}
                <div className="grid grid-cols-2 gap-2 text-xs font-sans text-[#17352D]">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005B45]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/donate?cause=${encodeURIComponent(section.title)}`}
                    className="px-6 py-3 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs"
                  >
                    SUPPORT THIS CAUSE →
                  </Link>

                  <button
                    onClick={() => setSelectedSection(section)}
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#005B45] underline transition-colors"
                  >
                    Read Details
                  </button>
                </div>

              </div>

              {/* Photography */}
              <div className="lg:col-span-6">
                <div className="relative aspect-16/10 border border-[#17352D]/15 overflow-hidden bg-[#EAE8DE]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#003D31] text-white text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5">
                    {section.subtitle}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail */}
      {selectedSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#003D31]/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#F7F6F0] rounded-xs max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#17352D]/20">
            <button
              onClick={() => setSelectedSection(null)}
              className="absolute top-4 right-4 p-2 text-[#17352D] hover:text-[#005B45] z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 space-y-6">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                {selectedSection.num} — {selectedSection.metric}
              </span>
              
              <h3 className="font-serif text-3xl text-[#17352D]">
                {selectedSection.title}
              </h3>

              <p className="text-sm font-sans text-[#66756F] leading-relaxed">
                {selectedSection.description}
              </p>

              <div className="pt-4 space-y-2 border-t border-[#17352D]/10">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#17352D]">
                  Direct Beneficiary Deliverables:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-sans text-[#17352D]">
                  {selectedSection.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005B45]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/donate?cause=${encodeURIComponent(selectedSection.title)}`}
                  className="w-full py-4 text-center text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all block"
                >
                  DONATE TO THIS CAUSE NOW →
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

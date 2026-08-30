"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

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
    description: "Many children in rural Palghar and semi-urban Mumbai attend school without notebooks, writing sets, or durable school bags. Sankalp Sarthi Foundation delivers complete education kits directly to underprivileged primary students.",
    image: "/assets/drives/backpack_distribution.jpg",
    metric: "1,200+ Students Supported",
    items: ["Durable Backpacks", "Notebooks & Exercise Books", "Writing Instruments & Geometry Sets", "Drawing Kits & Color Pencils"],
  },
  {
    num: "02",
    title: "FOOD & NOURISHMENT",
    subtitle: "Wholesome meal drives & hospital patient care",
    description: "Hunger is an immediate crisis for street families and daily wage laborers. We cook, pack, and distribute fresh wholesome meals. Additionally, we provide fruit hampers and caregiver kits to patients in public municipal hospitals.",
    image: "/assets/drives/hospital_fruit_crates.jpg",
    metric: "15,000+ Meals & 850+ Patients",
    items: ["Fresh Cooked Meals", "Clean Drinking Water", "Hospital Fruit Hampers", "Nutritional Caregiver Kits"],
  },
  {
    num: "03",
    title: "COMMUNITY SERVICE",
    subtitle: "Grassroots volunteer drives & emergency aid",
    description: "Driven entirely by youth and community volunteers, we conduct seasonal monsoon raincoat distributions, winter blanket drives, neighborhood cleanliness workshops, and disaster relief activities.",
    image: "/assets/drives/drive_8.jpg",
    metric: "50+ Grassroots Drives",
    items: ["Winter Blanket Drives", "Monsoon Umbrella & Raincoat Distribution", "Cleanliness & Awareness Workshops", "Emergency Disaster Assistance"],
  },
];

export function CausesGrid() {
  const [selectedSection, setSelectedSection] = useState<WorkSection | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F0] border-b border-[#17352D]/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
              Core Foundation Initiatives
            </span>
            <h2 className="font-serif text-[#17352D] text-fluid-section">
              Our Key Areas of Work
            </h2>
          </div>

          <Link
            href="/causes"
            className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] hover:text-[#003D31] flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Numbered Sections */}
        <div className="space-y-12 sm:space-y-16">
          {WORK_SECTIONS.map((section, idx) => (
            <div
              key={section.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center pb-12 sm:pb-16 ${
                idx !== WORK_SECTIONS.length - 1 ? "border-b border-[#17352D]/10" : ""
              }`}
            >
              
              {/* Text & Content */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-[#005B45]">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#17352D]">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005B45] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Image (Appears between text and CTA on Mobile) */}
                <div className="lg:hidden pt-2">
                  <div className="relative aspect-4/3 w-full border border-[#17352D]/15 overflow-hidden bg-[#EAE8DE]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-[#003D31] text-white text-[9px] font-sans font-bold uppercase tracking-widest px-2.5 py-1">
                      {section.subtitle}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href={`/donate?cause=${encodeURIComponent(section.title)}`}
                    className="w-full sm:w-auto px-6 min-h-[48px] py-3.5 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs flex items-center justify-center text-center"
                  >
                    SUPPORT THIS CAUSE →
                  </Link>

                  <button
                    onClick={() => setSelectedSection(section)}
                    className="text-xs font-sans font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#005B45] underline transition-colors text-center min-h-[44px] flex items-center justify-center"
                  >
                    Read Details
                  </button>
                </div>

              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block lg:col-span-6">
                <div className="relative aspect-16/10 border border-[#17352D]/15 overflow-hidden bg-[#EAE8DE]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="50vw"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#003D31]/80 backdrop-blur-xs animate-in fade-in duration-200 w-full max-w-full">
          <div className="bg-[#F7F6F0] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-[#17352D]/20 p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedSection(null)}
              className="absolute top-4 right-4 p-2 text-[#17352D] hover:text-[#005B45] z-10"
              aria-label="Close details modal"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block pt-2">
              {selectedSection.num} — {selectedSection.metric}
            </span>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17352D]">
              {selectedSection.title}
            </h3>

            <p className="text-sm font-sans text-[#66756F] leading-relaxed">
              {selectedSection.description}
            </p>

            <div className="pt-4 space-y-2 border-t border-[#17352D]/10">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#17352D] block">
                Direct Beneficiary Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#17352D]">
                {selectedSection.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005B45] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/donate?cause=${encodeURIComponent(selectedSection.title)}`}
                className="w-full min-h-[48px] py-4 text-center text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all flex items-center justify-center"
              >
                DONATE TO THIS CAUSE NOW →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

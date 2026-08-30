import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ImpactStats } from "@/components/impact-stats";
import { CausesGrid } from "@/components/causes-grid";
import { CampaignCard } from "@/components/campaign-card";
import { TrustBadges } from "@/components/trust-badges";
import { ArrowRight, MessageCircle, Newspaper } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#F7F6F0]">
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Impact Stats (Oversized Editorial Numbers) */}
      <ImpactStats />

      {/* 3. Our Work (01 EDUCATION, 02 NOURISHMENT, 03 COMMUNITY) */}
      <CausesGrid />

      {/* 4. Active Campaign (Annual Drive 5th Sept 2026) */}
      <CampaignCard />

      {/* 5. Editorial Photo Stories & Press Section */}
      <section className="py-24 bg-[#F7F6F0] border-b border-[#17352D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                Field Documentation & Press Media
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#17352D]">
                Real drives, real smiles, verified community impact
              </h2>
            </div>

            <Link
              href="/gallery"
              className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] hover:text-[#003D31] flex items-center gap-1.5 transition-colors"
            >
              View All 10 Field Photos & News Clippings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-3 group border border-[#17352D]/15 bg-white p-4">
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/drive_1.jpg"
                  alt="School Supplies Distribution Drive"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45] block">
                Palghar School Drive
              </span>
              <h3 className="font-serif font-bold text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-tight">
                Book Distribution Programme
              </h3>
              <p className="text-xs font-sans text-[#66756F]">
                Volunteers delivering complete learning kits to primary school children across Palghar district.
              </p>
            </div>

            <div className="space-y-3 group border border-[#17352D]/15 bg-white p-4">
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/drive_7.jpg"
                  alt="Classroom Refreshment Drive"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45] block">
                Classroom Nutrition
              </span>
              <h3 className="font-serif font-bold text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-tight">
                Student Juice & Snack Drives
              </h3>
              <p className="text-xs font-sans text-[#66756F]">
                Serving fresh fruit juices and wholesome nutrition to seated young learners.
              </p>
            </div>

            <div className="space-y-3 group border border-[#17352D]/15 bg-white p-4">
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/drive_8.jpg"
                  alt="Volunteer Notebook Packing Operations"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45] block">
                Volunteer Operations
              </span>
              <h3 className="font-serif font-bold text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-tight">
                Sorting 1,000s of Notebooks
              </h3>
              <p className="text-xs font-sans text-[#66756F]">
                Youth volunteer team organizing and bundling education kits for rural school logistics.
              </p>
            </div>

            <div className="space-y-3 group border border-[#17352D]/15 bg-white p-4">
              <div className="relative aspect-4/3 overflow-hidden bg-[#EAE8DE]">
                <Image
                  src="/assets/drives/newspaper_clipping.png"
                  alt="Jagaruk Times Newspaper Coverage"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#005B45] block flex items-center gap-1">
                <Newspaper className="w-3 h-3 text-[#005B45]" />
                Press Coverage
              </span>
              <h3 className="font-serif font-bold text-base text-[#17352D] group-hover:text-[#005B45] transition-colors leading-tight">
                Jagaruk Times Media Feature
              </h3>
              <p className="text-xs font-sans text-[#66756F]">
                Press coverage of Sankalp Sarthi Foundation’s Republic Day free blanket drive at Gorai Old Age Home.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Volunteer Callout Section */}
      <section className="py-24 bg-[#005B45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
                Join Our Volunteer Network
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Want to make a hands-on difference in Mumbai?
              </h2>
              <p className="text-sm font-sans text-white/80 max-w-2xl leading-relaxed">
                Whether you are a college student completing an academic internship or a working professional wanting to give back—your time and skills will transform lives.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/volunteer"
                className="px-8 py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all text-center rounded-xs"
              >
                BECOME A VOLUNTEER →
              </Link>

              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-sans font-semibold tracking-wider text-white border border-white/30 hover:border-white uppercase transition-all text-center rounded-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#63BE21]" />
                JOIN WHATSAPP VOLUNTEER GROUP
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Institutional Governance & Trust */}
      <TrustBadges />

    </div>
  );
}

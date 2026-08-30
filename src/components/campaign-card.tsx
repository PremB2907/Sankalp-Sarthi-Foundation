"use client";

import Image from "next/image";
import Link from "next/link";
import { CAMPAIGNS_DATA } from "@/config/campaigns";
import { Calendar, MapPin, ArrowUpRight, Share2, MessageCircle } from "lucide-react";

export function CampaignCard() {
  const campaign = CAMPAIGNS_DATA[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign.title,
        text: campaign.subtitle,
        url: window.location.origin + "/campaigns/annual-drive-2026",
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.origin + "/campaigns/annual-drive-2026");
      alert("Campaign link copied to clipboard!");
    }
  };

  return (
    <section className="py-24 bg-[#003D31] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Poster Artwork Column */}
          <div className="lg:col-span-6 relative aspect-16/11 border border-white/20 bg-emerald-950 overflow-hidden">
            <Image
              src={campaign.coverImage}
              alt={campaign.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2"
              priority
            />
            <div className="absolute top-4 left-4 bg-[#63BE21] text-[#003D31] font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1.5">
              Flagship Annual Drive
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-sans font-semibold text-[#63BE21] uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {campaign.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {campaign.location}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                {campaign.title}
              </h2>

              <p className="text-sm font-sans text-white/80 leading-relaxed">
                {campaign.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2 text-xs font-sans text-white/90">
                {campaign.highlights.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#63BE21] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/donate?campaign=annual-drive-2026"
                  className="px-7 py-3.5 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all rounded-xs shadow-xs"
                >
                  DONATE TO DRIVE NOW →
                </Link>

                <Link
                  href="/volunteer"
                  className="px-6 py-3.5 text-xs font-sans font-bold tracking-widest text-white border border-white/30 hover:border-white uppercase transition-all rounded-xs flex items-center gap-1"
                >
                  JOIN VOLUNTEER TEAM
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleShare}
                  className="p-3 text-white border border-white/30 hover:border-white rounded-xs transition-colors"
                  title="Share Campaign"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <a
                href={campaign.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans text-white/70 hover:text-white transition-colors pt-2"
              >
                <MessageCircle className="w-4 h-4 text-[#63BE21]" />
                <span>Join Official Annual Drive WhatsApp Volunteer Community</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

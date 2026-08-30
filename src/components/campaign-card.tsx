"use client";

import Image from "next/image";
import Link from "next/link";
import { CAMPAIGNS_DATA } from "@/config/campaigns";
import { Calendar, MapPin, Users, Heart, Share2, MessageCircle, CheckCircle2 } from "lucide-react";

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
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-900 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Poster Artwork Column */}
          <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto min-h-[320px] bg-emerald-900">
            <Image
              src={campaign.coverImage}
              alt={campaign.title}
              fill
              className="object-contain p-2"
              priority
            />
            <div className="absolute top-4 left-4 bg-lime-500 text-emerald-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
              Featured Annual Drive
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 text-white">
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-lime-400 font-semibold">
                <span className="flex items-center gap-1.5 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
                  <Calendar className="w-3.5 h-3.5" />
                  {campaign.date}
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
                  <MapPin className="w-3.5 h-3.5" />
                  {campaign.location}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {campaign.title}
              </h2>

              <p className="text-sm text-emerald-200/90 leading-relaxed">
                {campaign.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                {campaign.highlights.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign Actions */}
            <div className="pt-4 border-t border-emerald-900/80 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/donate?campaign=annual-drive-2026"
                  className="flex-1 min-w-[140px] py-3 text-center text-xs sm:text-sm font-bold text-emerald-950 bg-lime-400 hover:bg-lime-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-emerald-950" />
                  Donate to Drive
                </Link>
                <Link
                  href="/volunteer"
                  className="py-3 px-4 text-xs sm:text-sm font-semibold text-emerald-100 bg-emerald-900 hover:bg-emerald-800 rounded-xl border border-emerald-700 transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-lime-400" />
                  Join Drive
                </Link>
                <button
                  onClick={handleShare}
                  className="p-3 text-emerald-200 bg-emerald-900 hover:bg-emerald-800 rounded-xl border border-emerald-700 transition-colors"
                  title="Share Campaign"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <a
                href={campaign.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs text-emerald-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                <span>Join Official Drive WhatsApp Volunteer Group</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

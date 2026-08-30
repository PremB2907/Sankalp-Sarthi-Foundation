import Image from "next/image";
import Link from "next/link";
import { CAMPAIGNS_DATA } from "@/config/campaigns";
import { TrustBadges } from "@/components/trust-badges";
import { Calendar, MapPin, Users, Heart, Share2, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Annual School Supplies Drive 5th Sep 2026 | Sankalp Sarthi Foundation",
  description: "Join Sankalp Sarthi Foundation's Annual Drive on 5th September 2026 to distribute school bags, notebooks, and stationery to 500+ children.",
};

export default function AnnualDrivePage() {
  const campaign = CAMPAIGNS_DATA[0];

  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900 border border-emerald-700 text-xs font-semibold text-lime-400">
            <Calendar className="w-4 h-4" />
            <span>Event Date: 5th September 2026</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {campaign.title}
          </h1>

          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            {campaign.subtitle}
          </p>
        </div>
      </section>

      {/* Main Campaign Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Poster Image & Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="aspect-16/10 relative">
                <Image
                  src={campaign.coverImage}
                  alt={campaign.title}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <h3 className="font-serif font-bold text-lg text-emerald-950">
                Key Objectives of the 2026 Drive:
              </h3>
              <div className="space-y-2">
                {campaign.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Donation & Volunteer Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6 sticky top-28">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Drive Details
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mt-1">
                Participate or Support
              </h3>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-500">Date:</span>
                <span className="font-bold text-gray-900">{campaign.date}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-500">Location:</span>
                <span className="font-bold text-gray-900">{campaign.location}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="font-semibold text-gray-500">Target Beneficiaries:</span>
                <span className="font-bold text-gray-900">500+ Students</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/donate?campaign=annual-drive-2026"
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate School Kits (₹500 / kit)
              </Link>

              <Link
                href="/volunteer"
                className="w-full py-3 text-center text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-emerald-600" />
                Join On-Ground Volunteer Team
              </Link>
            </div>

            <div className="pt-2 border-t border-gray-100 text-center">
              <a
                href={campaign.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Join WhatsApp Annual Drive Volunteer Group
              </a>
            </div>

          </div>

        </div>
      </section>

      <TrustBadges />
    </div>
  );
}

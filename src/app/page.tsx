import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ImpactStats } from "@/components/impact-stats";
import { CausesGrid } from "@/components/causes-grid";
import { CampaignCard } from "@/components/campaign-card";
import { TrustBadges } from "@/components/trust-badges";
import { Heart, Users, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero */}
      <Hero />

      {/* 2. Verified Impact Statistics */}
      <ImpactStats />

      {/* 3. Causes Grid */}
      <CausesGrid />

      {/* 4. Featured Campaign (Annual Drive 5th Sept 2026) */}
      <CampaignCard />

      {/* 5. Real Field Photos & Community Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Field Action Gallery
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Real Drives, Real Smiles, Real Service
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Every school bag given and warm meal served is made possible by people like you.
            </p>
          </div>

          {/* Photo Grid showcasing real photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group border border-gray-100 bg-gray-100">
              <Image
                src="/assets/annual-drive-poster.png"
                alt="Stationery distribution drive for school children"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400 bg-emerald-900/80 px-2 py-0.5 rounded">
                  Education Drive
                </span>
                <h3 className="font-serif font-bold text-sm text-white mt-1">
                  School Bags & Stationery Distribution
                </h3>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group border border-gray-100 bg-gray-100">
              <Image
                src="/assets/foundation-certificate.png"
                alt="Volunteer appreciation & community distribution"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400 bg-emerald-900/80 px-2 py-0.5 rounded">
                  Youth Internships
                </span>
                <h3 className="font-serif font-bold text-sm text-white mt-1">
                  Social Service Volunteer Internships
                </h3>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md group border border-gray-100 bg-gray-100">
              <Image
                src="/assets/foundation-letterhead.png"
                alt="Hospital patient nutrition support"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400 bg-emerald-900/80 px-2 py-0.5 rounded">
                  Hospital Care
                </span>
                <h3 className="font-serif font-bold text-sm text-white mt-1">
                  Nutritional Support for Patients
                </h3>
              </div>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              View Complete Field Photo Gallery
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Volunteer Callout Banner */}
      <section className="py-16 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
                Join Our Volunteer Network
              </span>
              <h2 className="font-serif text-3xl font-bold text-white leading-tight">
                Want to make a hands-on difference in Mumbai?
              </h2>
              <p className="text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Whether you are a college student looking to complete an internship, a working professional wanting to give back on weekends, or a digital creator—your skills can transform lives.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-medium text-emerald-200 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  Flexible Weekend Drives
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  Official Internship Certificates
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400" />
                  Digital Communications Team
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/volunteer"
                className="py-3 px-6 text-center text-sm font-bold text-emerald-950 bg-lime-400 hover:bg-lime-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-emerald-950" />
                Apply as Volunteer
              </Link>

              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-center text-xs font-semibold text-emerald-100 bg-emerald-950 hover:bg-emerald-950/80 rounded-xl border border-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-lime-400" />
                Join WhatsApp Group
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Trust & Governance */}
      <TrustBadges />

    </div>
  );
}

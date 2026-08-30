import Image from "next/image";
import Link from "next/link";
import { ImpactStats } from "@/components/impact-stats";
import { TrustBadges } from "@/components/trust-badges";
import { CheckCircle2, Heart, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Impact & Stories | Sankalp Sarthi Foundation",
  description: "Read transparent impact reports, field drive workflows, photo stories, and volunteer testimonials from Sankalp Sarthi Foundation.",
};

export default function ImpactPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
            Transparent Accountability
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Measuring Our Real Impact
          </h1>
          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            We believe true non-profit impact is measured not by claims, but by consistent, verified actions on the ground.
          </p>
        </div>
      </section>

      {/* Impact Counter */}
      <ImpactStats />

      {/* Drive Lifecycle Storytelling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Our Operational Process
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
            What Happens During a Foundation Drive?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs relative">
            <span className="text-3xl font-serif font-extrabold text-emerald-600 mb-2 block">01</span>
            <h3 className="font-bold text-base text-gray-900 mb-2">Need Identification</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our teams coordinate with school principals, hospital social workers, and community leaders to identify specific requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs relative">
            <span className="text-3xl font-serif font-extrabold text-emerald-600 mb-2 block">02</span>
            <h3 className="font-bold text-base text-gray-900 mb-2">Direct Bulk Procurement</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We procure high-quality school bags, stationery, and food ingredients directly from wholesale suppliers at wholesale prices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs relative">
            <span className="text-3xl font-serif font-extrabold text-emerald-600 mb-2 block">03</span>
            <h3 className="font-bold text-base text-gray-900 mb-2">On-Ground Volunteer Drive</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Volunteer teams organize, pack, and hand-deliver supply kits directly to students and beneficiaries with dignity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs relative">
            <span className="text-3xl font-serif font-extrabold text-emerald-600 mb-2 block">04</span>
            <h3 className="font-bold text-base text-gray-900 mb-2">Transparent Verification</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Drive photos, beneficiary receipts, and financial summaries are documented and updated for donors and coordinators.
            </p>
          </div>
        </div>
      </section>

      {/* Field Photo Story Showcase */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Dignified Storytelling
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Field Stories from Mumbai & Surrounding Regions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="relative aspect-16/10 bg-gray-100">
                <Image
                  src="/assets/annual-drive-poster.png"
                  alt="Annual School Supplies Drive photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-emerald-700 uppercase">School Supply Drive</span>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Bringing School Bags to Rural Primary Schools
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  During our school supply drives, children receive durable backpacks equipped with notebooks, geometry sets, and drawing supplies, motivating them to attend school regularly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <div className="relative aspect-16/10 bg-gray-100">
                <Image
                  src="/assets/foundation-certificate.png"
                  alt="Volunteer Internship certificate document"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-emerald-700 uppercase">Volunteer Empowerment</span>
                <h3 className="font-serif font-bold text-xl text-gray-900">
                  Mentoring College Interns in Social Impact
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Students completing their mandatory 45-hour social service internships gain invaluable experience in digital communications, logistics management, and community outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
    </div>
  );
}

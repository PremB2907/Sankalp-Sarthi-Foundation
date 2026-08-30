import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About Us | Sankalp Sarthi Foundation",
  description: "Learn about Sankalp Sarthi Foundation's mission, leadership, registration details, and social service history in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-[#F7F6F0] space-y-20">
      
      {/* Banner */}
      <section className="bg-[#003D31] text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4 text-center">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
            {SITE_CONFIG.govApproved} • REGD. NO. {SITE_CONFIG.regNo}
          </span>
          
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight">
            About Sankalp Sarthi Foundation
          </h1>
          
          <p className="text-base sm:text-lg font-sans text-white/80 leading-relaxed">
            Founded on the guiding principle that “Helping hands create lasting change”, we are a volunteer-led non-profit organization serving vulnerable communities in Mumbai since 2013.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
              Institutional Credibility
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17352D] leading-tight">
              Small acts of consistent service build resilient communities
            </h2>
            
            <p className="text-sm font-sans text-[#66756F] leading-relaxed">
              Sankalp Sarthi Foundation operates at the intersection of education support, food security, and community health. Powered entirely by dedicated volunteers and donors, we focus on high-impact grassroots drives that deliver tangible relief directly to beneficiaries.
            </p>

            <div className="space-y-4 pt-2 border-t border-[#17352D]/10 text-xs font-sans text-[#17352D]">
              <div className="py-2 border-b border-[#17352D]/10">
                <strong className="block font-bold text-[#005B45] text-sm">Education & School Supplies</strong>
                <span className="text-[#66756F]">Equipping underprivileged students with durable school bags, notebooks, and writing materials.</span>
              </div>

              <div className="py-2 border-b border-[#17352D]/10">
                <strong className="block font-bold text-[#005B45] text-sm">Food Support & Hunger Relief</strong>
                <span className="text-[#66756F]">Distributing fresh wholesome warm meals to homeless families across Mumbai.</span>
              </div>

              <div className="py-2">
                <strong className="block font-bold text-[#005B45] text-sm">Hospital Patient Care</strong>
                <span className="text-[#66756F]">Providing fresh fruits, milk, and nutritional supplements in public municipal hospitals.</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative aspect-4/5 border border-[#17352D]/15 overflow-hidden bg-[#EAE8DE]">
            <Image
              src="/assets/foundation-certificate.png"
              alt="Official Foundation Certificate Document"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-2"
            />
          </div>

        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
            Foundation Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#17352D]">
            Leadership & Coordination
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {SITE_CONFIG.leadership.map((member) => (
            <div
              key={member.name}
              className="p-8 border border-[#17352D]/15 bg-white space-y-3"
            >
              <h3 className="font-serif font-bold text-2xl text-[#17352D]">{member.name}</h3>
              <p className="text-xs font-sans font-bold text-[#005B45] uppercase tracking-wider">{member.title}</p>
              <p className="text-xs font-sans text-[#66756F]">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

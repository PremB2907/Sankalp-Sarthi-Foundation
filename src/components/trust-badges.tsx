import { ShieldCheck, FileCheck, Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TrustBadges() {
  const BADGES = [
    {
      icon: ShieldCheck,
      title: "Govt. Approved NGO",
      description: `Official Non-Profit registered under Maharashtra Public Trusts Act (Reg. No. ${SITE_CONFIG.regNo}). 12A & 80G Tax Exempted.`,
    },
    {
      icon: FileCheck,
      title: "Automated PDF Receipts",
      description: "Instant 80G tax exemption receipts generated automatically and emailed directly to your inbox upon donation.",
    },
    {
      icon: Award,
      title: "Volunteer Certified",
      description: "Official Certificates of Appreciation & Trustee Recommendation Letterheads awarded for 45-hour social service internships.",
    },
    {
      icon: Users,
      title: "Direct Beneficiary Delivery",
      description: "100% of public donations directly fund school kits, hospital fruit hampers, and warm meals for homeless families.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F7F6F0] border-b border-[#17352D]/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
            Institutional Transparency
          </span>
          <h2 className="font-serif text-[#17352D] text-fluid-[#005B45]">
            Why Donors & Volunteers Trust Us
          </h2>
        </div>

        {/* Clean Editorial Vertical List on Mobile / Grid on Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BADGES.map((badge) => (
            <div
              key={badge.title}
              className="p-6 bg-white border border-[#17352D]/15 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <badge.icon className="w-8 h-8 text-[#005B45]" />
                <h3 className="font-serif font-bold text-xl text-[#17352D]">
                  {badge.title}
                </h3>
                <p className="text-xs font-sans text-[#66756F] leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

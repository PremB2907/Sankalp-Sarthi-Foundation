import { ShieldCheck, Lock, FileCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TrustBadges() {
  return (
    <section className="py-20 bg-[#003D31] text-white font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
            Transparency & Institutional Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Built on Trust & Direct Accountability
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 border border-white/15 bg-emerald-950/60 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#63BE21]" />
            <h3 className="font-serif font-bold text-lg text-white">Govt. Approved NGO</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Official registration number {SITE_CONFIG.regNo} based in Mumbai.
            </p>
          </div>

          <div className="p-6 border border-white/15 bg-emerald-950/60 space-y-3">
            <Lock className="w-6 h-6 text-[#63BE21]" />
            <h3 className="font-serif font-bold text-lg text-white">Secure Payments</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              256-bit encrypted Razorpay checkout gateway and YES BANK UPI.
            </p>
          </div>

          <div className="p-6 border border-white/15 bg-emerald-950/60 space-y-3">
            <FileCheck className="w-6 h-6 text-[#63BE21]" />
            <h3 className="font-serif font-bold text-lg text-white">Automated PDF Receipts</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Instant digital PDF donation receipts issued for every contribution.
            </p>
          </div>

          <div className="p-6 border border-white/15 bg-emerald-950/60 space-y-3">
            <Award className="w-6 h-6 text-[#63BE21]" />
            <h3 className="font-serif font-bold text-lg text-white">Volunteer Certified</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Official Certificates of Appreciation issued for student internships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

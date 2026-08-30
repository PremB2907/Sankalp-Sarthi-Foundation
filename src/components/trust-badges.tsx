import { ShieldCheck, FileCheck, Lock, Award } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function TrustBadges() {
  return (
    <section className="py-12 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
            Transparency & Governance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Built on Trust, Integrity & Direct Accountability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-white">Govt. Approved NGO</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Official registration number {SITE_CONFIG.regNo} based in Mumbai.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 mx-auto flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-white">Secure Payments</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              256-bit encrypted Razorpay gateway and direct YES BANK UPI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 mx-auto flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-white">Direct Receipts</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Instant digital payment receipts and transaction records for every donor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-white">Volunteer Certified</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Official Certificates of Appreciation issued for social service internships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

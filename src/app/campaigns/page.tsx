import { CampaignCard } from "@/components/campaign-card";
import { TrustBadges } from "@/components/trust-badges";

export const metadata = {
  title: "Campaigns & Drives | Sankalp Sarthi Foundation",
  description: "View upcoming and past community drives by Sankalp Sarthi Foundation, including the flagship Annual School Supplies Drive on 5th September 2026.",
};

export default function CampaignsIndexPage() {
  return (
    <div className="py-12 space-y-12">
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
            Special Community Initiatives
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Foundation Drives & Campaigns
          </h1>
          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            Join our dedicated seasonal and annual drives to support education, nutrition, and emergency aid.
          </p>
        </div>
      </section>

      <CampaignCard />

      <TrustBadges />
    </div>
  );
}

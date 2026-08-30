import { CausesGrid } from "@/components/causes-grid";
import { TrustBadges } from "@/components/trust-badges";
import { Heart } from "lucide-react";

export const metadata = {
  title: "Our Work & Causes | Sankalp Sarthi Foundation",
  description: "Explore Sankalp Sarthi Foundation's key social initiatives: Education support, food drives for homeless, hospital patient nutrition, and grassroots community service.",
};

export default function CausesPage() {
  return (
    <div className="py-12 space-y-12">
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold text-lime-400 uppercase tracking-widest">
            Nonprofit Initiatives
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Our Key Causes & Programs
          </h1>
          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            Every cause we support is carefully structured to maximize direct impact for beneficiaries with zero wasteful overhead.
          </p>
        </div>
      </section>

      <CausesGrid />

      <TrustBadges />
    </div>
  );
}

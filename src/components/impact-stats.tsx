import { SITE_CONFIG } from "@/config/site";
import { BookOpen, Utensils, Stethoscope, Users } from "lucide-react";

export function ImpactStats() {
  const icons = [BookOpen, Utensils, Stethoscope, Users];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Verified Community Work
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Where your support creates direct impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.impactStats.map((stat, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-serif font-extrabold text-3xl text-emerald-950 tracking-tight mb-1">
                  {stat.count}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

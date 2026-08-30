import { SITE_CONFIG } from "@/config/site";

export function ImpactStats() {
  return (
    <section className="py-12 sm:py-20 bg-[#F7F6F0] border-b border-[#17352D]/10 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16 space-y-2">
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] block">
            Verified Operational Reach
          </span>
          <h2 className="font-serif text-[#17352D] text-fluid-section">
            Impact measured in real community service
          </h2>
        </div>

        {/* Mobile 2x2 Grid / Desktop 4 Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {SITE_CONFIG.impactStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-[#005B45] pl-4 sm:pl-6 py-1 sm:py-2 space-y-1.5 sm:space-y-2 group"
            >
              <div className="font-serif text-[#17352D] tracking-tight group-hover:text-[#005B45] transition-colors text-fluid-number">
                {stat.count}
              </div>
              <div className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#005B45] leading-snug">
                {stat.label}
              </div>
              <p className="text-xs font-sans text-[#66756F] leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { SITE_CONFIG } from "@/config/site";

export function ImpactStats() {
  return (
    <section className="py-20 bg-[#F7F6F0] border-b border-[#17352D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
            Verified Operational Reach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#17352D]">
            Impact measured in real community service
          </h2>
        </div>

        {/* Editorial Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {SITE_CONFIG.impactStats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-l-2 border-[#005B45] pl-6 py-2 space-y-2 group"
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17352D] tracking-tight group-hover:text-[#005B45] transition-colors">
                {stat.count}
              </div>
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                {stat.label}
              </div>
              <p className="text-xs font-sans text-[#66756F] leading-relaxed pt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink, ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#003D31] text-white pt-20 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Make A Difference Today
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              "Your contribution becomes someone's opportunity."
            </h2>
          </div>

          <Link
            href="/donate"
            className="px-8 py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all rounded-xs shadow-xs shrink-0 text-center"
          >
            DONATE NOW →
          </Link>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden shrink-0">
                <Image
                  src="/assets/foundation-logo-card.png"
                  alt="Sankalp Sarthi Foundation Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#63BE21]">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs font-sans text-white/70 leading-relaxed max-w-sm">
              A volunteer-driven non-profit organization based in Mumbai, dedicated to education support, homeless hunger relief, and hospital patient care.
            </p>

            <div className="pt-2 space-y-2 text-xs font-sans text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#63BE21]" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#63BE21]" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#63BE21] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-sans text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/causes" className="hover:text-white transition-colors">
                  Our Key Work
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-white transition-colors">
                  Impact & Reach
                </Link>
              </li>
              <li>
                <Link href="/campaigns/annual-drive-2026" className="hover:text-white transition-colors">
                  Annual Drive 2026
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Involvement */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#63BE21] mb-4">
              Get Involved
            </h4>
            <ul className="space-y-3 text-xs font-sans text-white/80">
              <li>
                <Link href="/donate" className="hover:text-white transition-colors font-bold text-[#63BE21]">
                  Donate Funds →
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="hover:text-white transition-colors">
                  Contribute Supplies / Tech
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Coordinator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ & Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Social & WhatsApp */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#63BE21] mb-4">
              Communities & Social
            </h4>
            <div className="space-y-2 text-xs font-sans text-white/80">
              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-emerald-950/80 hover:bg-emerald-950 border border-white/10 text-white rounded-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#63BE21]" />
                <span>Volunteer Group</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 bg-emerald-950/80 hover:bg-emerald-950 border border-white/10 text-white rounded-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#63BE21]" />
                <span>Supply & Tech Group</span>
              </a>

              <div className="pt-3 flex flex-wrap gap-3 text-xs text-white/70">
                <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  LinkedIn
                </a>
                <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  Instagram
                </a>
                <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/60">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. {SITE_CONFIG.govApproved} ({SITE_CONFIG.regNo}).</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin" className="hover:text-white transition-colors">
              Coordinator Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#003D31] text-white border-t border-white/10 pt-16 pb-24 lg:pb-16 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Legal */}
          <div className="lg:col-span-4 space-y-4">
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
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-white">
                  Sankalp Sarthi Foundation
                </span>
                <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#63BE21]">
                  Regd. No. {SITE_CONFIG.regNo}
                </span>
              </div>
            </div>

            <p className="text-xs font-sans text-white/70 leading-relaxed">
              Govt. Approved non-profit organization in Mumbai dedicated to education support, homeless food distribution, and hospital patient care.
            </p>

            <div className="pt-2 text-[11px] font-sans text-white/60 space-y-1">
              <div>12A Reg. No.: <strong className="text-white">{SITE_CONFIG.reg12A}</strong></div>
              <div>80G Reg. No.: <strong className="text-white">{SITE_CONFIG.reg80G}</strong></div>
              <div>PAN No.: <strong className="text-white">{SITE_CONFIG.panNo}</strong></div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors block py-1">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors block py-1">About Us</Link></li>
              <li><Link href="/causes" className="hover:text-white transition-colors block py-1">Our Programs</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors block py-1">Verified Impact</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors block py-1">Field Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors block py-1">FAQ & 80G Info</Link></li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Get Involved
            </h3>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li><Link href="/donate" className="hover:text-white transition-colors block py-1 font-bold text-white">Make a Donation →</Link></li>
              <li><Link href="/volunteer" className="hover:text-white transition-colors block py-1">Volunteer Network</Link></li>
              <li><Link href="/contribute" className="hover:text-white transition-colors block py-1">In-Kind Contributions</Link></li>
              <li><Link href="/campaigns/annual-drive-2026" className="hover:text-white transition-colors block py-1">Annual Drive 2026</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors block py-1 text-white/50">Admin Portal</Link></li>
            </ul>

            {/* WhatsApp Communities */}
            <div className="pt-2 space-y-1.5">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21] block">
                Official WhatsApp Groups
              </span>
              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium py-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#63BE21]" />
                <span>Join Volunteer Group ↗</span>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.whatsappDonation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium py-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#63BE21]" />
                <span>Join Donors Channel ↗</span>
              </a>
            </div>
          </div>

          {/* Col 4: Registered Office Contact */}
          <div className="lg:col-span-3 space-y-3 text-xs font-sans text-white/80">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Registered Office
            </h3>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#63BE21] shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail className="w-4 h-4 text-[#63BE21] shrink-0" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline text-white font-medium">
                {SITE_CONFIG.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#63BE21] shrink-0" />
              <span>+91 7977854590 / 7738351352</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-white/60">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

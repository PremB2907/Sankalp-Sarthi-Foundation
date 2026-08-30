import Link from "next/image";
import NextLink from "next/link";
import Image from "next/image";
import { Heart, Mail, MapPin, ExternalLink, ShieldCheck, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Foundation Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 bg-white">
                <Image
                  src="/assets/foundation-logo-card.png"
                  alt="Sankalp Sarthi Foundation Seal"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white tracking-tight">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-200/80 leading-relaxed max-w-md">
              A volunteer-driven non-profit organization based in Mumbai, dedicated to empowering children through school supply drives, serving warm meals to vulnerable communities, and supporting hospital patients.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-900/60 border border-emerald-800 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{SITE_CONFIG.govApproved} | REGD. NO. {SITE_CONFIG.regNo}</span>
            </div>

            <div className="pt-2 space-y-2 text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-200/80">
              <li>
                <NextLink href="/" className="hover:text-white transition-colors">
                  Home
                </NextLink>
              </li>
              <li>
                <NextLink href="/about" className="hover:text-white transition-colors">
                  About Us
                </NextLink>
              </li>
              <li>
                <NextLink href="/causes" className="hover:text-white transition-colors">
                  Our Work & Causes
                </NextLink>
              </li>
              <li>
                <NextLink href="/impact" className="hover:text-white transition-colors">
                  Impact & Stories
                </NextLink>
              </li>
              <li>
                <NextLink href="/campaigns/annual-drive-2026" className="hover:text-white transition-colors">
                  Annual Drive 2026
                </NextLink>
              </li>
              <li>
                <NextLink href="/gallery" className="hover:text-white transition-colors">
                  Field Photo Gallery
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-200/80">
              <li>
                <NextLink href="/donate" className="hover:text-white transition-colors flex items-center gap-1.5 text-lime-400 font-semibold">
                  <Heart className="w-3.5 h-3.5 fill-lime-400" />
                  Donate Funds
                </NextLink>
              </li>
              <li>
                <NextLink href="/volunteer" className="hover:text-white transition-colors">
                  Become a Volunteer
                </NextLink>
              </li>
              <li>
                <NextLink href="/contribute" className="hover:text-white transition-colors">
                  Contribute Supplies / Tech
                </NextLink>
              </li>
              <li>
                <NextLink href="/contact" className="hover:text-white transition-colors">
                  Contact Coordinator
                </NextLink>
              </li>
              <li>
                <NextLink href="/faq" className="hover:text-white transition-colors">
                  Donor FAQ
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Communities & Social */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Official WhatsApp & Social
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={SITE_CONFIG.socialLinks.whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-800 text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Join Volunteer Group</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappWebsiteContrib}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-800 text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Website & Supply Group</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappDonation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-800 text-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Donation Community</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
              </a>

              <div className="pt-2 flex flex-wrap gap-3 text-xs text-emerald-300">
                <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  LinkedIn
                </a>
                <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  Instagram
                </a>
                <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  Facebook
                </a>
                <a href={SITE_CONFIG.socialLinks.blog} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                  Official Blog
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <NextLink href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </NextLink>
            <NextLink href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </NextLink>
            <NextLink href="/admin" className="hover:text-white transition-colors opacity-60">
              Coordinator Portal
            </NextLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

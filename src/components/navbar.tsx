"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Heart, Sparkles, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/", desc: "Sankalp Sarthi Foundation Overview" },
    { name: "About Us", href: "/about", desc: "Governance, Trustees & Legal Reg." },
    { name: "Our Programs", href: "/causes", desc: "School Drives, Meals & Patient Care" },
    { name: "Verified Impact", href: "/impact", desc: "15k+ Meals & 1.2k+ Students Reached" },
    { name: "Field Gallery", href: "/gallery", desc: "20 Photo Stories & Press Coverage" },
  ];

  const secondaryLinks = [
    { name: "Annual Drive 2026", href: "/campaigns/annual-drive-2026", tag: "5TH SEP" },
    { name: "Volunteer Program", href: "/volunteer", tag: "CERTIFIED" },
    { name: "In-Kind Contributions", href: "/contribute", tag: "SUPPLIES" },
    { name: "Contact Team", href: "/contact", tag: "ANDHERI E." },
  ];

  return (
    <>
      {/* Standard Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F7F6F0]/95 backdrop-blur-md border-b border-[#17352D]/10 transition-colors w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo & Name */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden shrink-0">
                <Image
                  src="/assets/foundation-logo-card.png"
                  alt="Sankalp Sarthi Foundation Logo"
                  fill
                  sizes="(max-width: 640px) 32px, 40px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base sm:text-lg leading-tight text-[#17352D] tracking-tight group-hover:text-[#005B45] transition-colors">
                  Sankalp Sarthi Foundation
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest text-[#66756F]">
                  Mumbai, India • {SITE_CONFIG.regNo}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {mainLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-sans font-semibold tracking-wider text-[#17352D]/80 hover:text-[#005B45] uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Social Icons & Action CTAs */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3 border-r border-[#17352D]/15 pr-4 text-[#17352D]/80">
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1.5 hover:text-[#005B45] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 hover:text-[#005B45] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-1.5 hover:text-[#005B45] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>

              <Link
                href="/volunteer"
                className="text-xs font-sans font-semibold tracking-wider text-[#17352D] hover:text-[#005B45] uppercase flex items-center gap-1 transition-colors"
              >
                Volunteer <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/donate"
                className="px-5 py-2.5 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs"
              >
                DONATE NOW →
              </Link>
            </div>

            {/* Mobile Menu Trigger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 bg-[#003D31] text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform focus:outline-none"
                aria-label="Open Mobile App Menu"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 100% Solid Full-Screen Mobile App Navigation Sheet (Zero Bleed) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#002B22] text-white flex flex-col justify-between overflow-y-auto animate-in fade-in zoom-in-95 duration-200 w-full max-w-full">
          
          {/* Internal Top Header inside Full Screen Sheet */}
          <div className="sticky top-0 bg-[#00211A] border-b border-white/10 px-5 sm:px-6 py-4 flex items-center justify-between z-10 shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-8 h-8 overflow-hidden shrink-0">
                <Image
                  src="/assets/foundation-logo-card.png"
                  alt="Sankalp Sarthi Foundation Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-base leading-tight text-white">
                  Sankalp Sarthi Foundation
                </span>
                <span className="text-[9px] font-sans font-medium uppercase tracking-widest text-[#63BE21]">
                  Mumbai • {SITE_CONFIG.regNo}
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 bg-[#63BE21] text-[#00211A] rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform focus:outline-none"
              aria-label="Close Mobile App Menu"
            >
              <X className="w-5 h-5 font-bold" />
            </button>
          </div>

          {/* Main App Content Area */}
          <div className="p-5 sm:p-6 space-y-6 flex-1">
            
            {/* Top Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 bg-[#63BE21] text-[#00211A] rounded-2xl flex flex-col justify-between space-y-3 font-sans font-bold shadow-xl active:scale-98 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <Heart className="w-5 h-5 fill-current" />
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest block text-[#00211A]/70">Support Cause</span>
                  <span className="text-sm uppercase tracking-wider">Donate Now →</span>
                </div>
              </Link>

              <Link
                href="/volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-4 bg-emerald-950 border border-white/20 text-white rounded-2xl flex flex-col justify-between space-y-3 font-sans font-bold shadow-xl active:scale-98 transition-transform"
              >
                <div className="flex items-center justify-between text-[#63BE21]">
                  <Sparkles className="w-5 h-5" />
                  <ArrowUpRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest block text-[#63BE21]">Join Field Team</span>
                  <span className="text-sm uppercase tracking-wider text-white">Volunteer</span>
                </div>
              </Link>
            </div>

            {/* Primary Navigation Cards */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21] block px-1">
                Explore Foundation Pages
              </span>

              <div className="space-y-1.5">
                {mainLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3.5 bg-emerald-950/80 hover:bg-emerald-900 border border-white/10 rounded-xl flex items-center justify-between group transition-all active:scale-98"
                  >
                    <div className="flex flex-col text-left">
                      <span className="font-serif font-bold text-base text-white group-hover:text-[#63BE21] transition-colors leading-snug">
                        {link.name}
                      </span>
                      <span className="text-[11px] font-sans text-white/60">
                        {link.desc}
                      </span>
                    </div>
                    <span className="text-xs font-sans text-[#63BE21] font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Secondary Direct Action Grid */}
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#63BE21] block px-1">
                Direct Action Programs
              </span>

              <div className="grid grid-cols-2 gap-2">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-emerald-950/60 border border-white/10 rounded-xl flex flex-col justify-between text-left space-y-2 transition-all active:scale-98"
                  >
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#63BE21] bg-white/10 px-2 py-0.5 rounded-full w-fit">
                      {link.tag}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-white leading-snug">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom App Footer Bar */}
          <div className="p-5 border-t border-white/15 space-y-3 bg-[#00211A] shrink-0">
            
            <a
              href={SITE_CONFIG.socialLinks.whatsappVolunteer}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#63BE21]/15 border border-[#63BE21]/30 rounded-xl flex items-center justify-between text-white transition-all"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#63BE21]" />
                <span className="text-xs font-sans font-bold text-white">Join Volunteer WhatsApp Group</span>
              </div>
              <span className="text-xs font-bold text-[#63BE21]">↗</span>
            </a>

            <div className="flex items-center justify-between text-xs text-white/70 px-1">
              <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">Instagram ↗</a>
              <span className="text-white/20">•</span>
              <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">LinkedIn ↗</a>
              <span className="text-white/20">•</span>
              <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">Facebook ↗</a>
            </div>

          </div>

        </div>
      )}
    </>
  );
}

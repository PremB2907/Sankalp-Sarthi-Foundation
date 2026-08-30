"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/causes" },
    { name: "Impact", href: "/impact" },
    { name: "Stories", href: "/gallery" },
    { name: "Annual Drive", href: "/campaigns/annual-drive-2026" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F6F0]/95 backdrop-blur-md border-b border-[#17352D]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 overflow-hidden shrink-0">
              <Image
                src="/assets/foundation-logo-card.png"
                alt="Sankalp Sarthi Foundation Seal"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-[#17352D] tracking-tight group-hover:text-[#005B45] transition-colors">
                Sankalp Sarthi Foundation
              </span>
              <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#66756F]">
                Mumbai, India • {SITE_CONFIG.regNo}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-sans font-semibold tracking-wider text-[#17352D]/80 hover:text-[#005B45] uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/volunteer"
              className="text-xs font-sans font-semibold tracking-wider text-[#17352D] hover:text-[#005B45] uppercase flex items-center gap-1 transition-colors"
            >
              Volunteer
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/donate"
              className="px-5 py-2.5 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase transition-all rounded-xs shadow-xs"
            >
              DONATE NOW →
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/donate"
              className="px-3.5 py-1.5 text-xs font-sans font-bold tracking-wider text-white bg-[#005B45] rounded-xs uppercase"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#17352D] hover:text-[#005B45] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F6F0] border-b border-[#17352D]/10 px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 pb-4 border-b border-[#17352D]/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#005B45]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans font-semibold uppercase tracking-wider text-[#17352D] hover:text-[#005B45] flex items-center gap-1"
            >
              Volunteer <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-3.5 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase rounded-xs"
          >
            DONATE NOW →
          </Link>
        </div>
      )}
    </header>
  );
}

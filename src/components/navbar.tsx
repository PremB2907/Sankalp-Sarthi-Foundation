"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
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
          <Link href="/" className="flex items-center gap-3 group shrink-0">
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

          {/* Desktop Social Icons & Action CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            
            {/* Clickable Social Media SVG Icons */}
            <div className="flex items-center gap-3 border-r border-[#17352D]/15 pr-4 text-[#17352D]/80">
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankalp Sarthi Instagram"
                className="p-1.5 hover:text-[#005B45] hover:bg-[#17352D]/5 rounded-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankalp Sarthi LinkedIn"
                className="p-1.5 hover:text-[#005B45] hover:bg-[#17352D]/5 rounded-xs transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankalp Sarthi Facebook"
                className="p-1.5 hover:text-[#005B45] hover:bg-[#17352D]/5 rounded-xs transition-all"
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

          {/* Mobile Right Controls: Quick Social Icons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            
            {/* Quick Header Social Icons for Mobile */}
            <div className="flex items-center gap-1 border-r border-[#17352D]/15 pr-2 mr-1">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankalp Sarthi Instagram"
                className="p-2 text-[#17352D] hover:text-[#005B45]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sankalp Sarthi LinkedIn"
                className="p-2 text-[#17352D] hover:text-[#005B45]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <Link
              href="/donate"
              className="px-3 py-2 text-[11px] font-sans font-bold tracking-wider text-white bg-[#005B45] hover:bg-[#003D31] rounded-xs uppercase"
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

      {/* Enhanced Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F6F0] border-b border-[#17352D]/15 px-6 pt-4 pb-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-200">
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-3.5 pb-5 border-b border-[#17352D]/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-sans font-bold uppercase tracking-wider text-[#17352D] hover:text-[#005B45] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#66756F]">→</span>
              </Link>
            ))}
            
            <Link
              href="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-sans font-bold uppercase tracking-wider text-[#005B45] flex items-center justify-between pt-1"
            >
              <span>Volunteer Program</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dedicated Social Media Badges Grid */}
          <div className="space-y-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#66756F] block">
              Official Social Channels
            </span>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#17352D]/15 rounded-xs flex flex-col items-center justify-center gap-1.5 text-[#17352D] hover:text-[#005B45] hover:border-[#005B45] transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Instagram</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#17352D]/15 rounded-xs flex flex-col items-center justify-center gap-1.5 text-[#17352D] hover:text-[#005B45] hover:border-[#005B45] transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">LinkedIn</span>
              </a>

              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-[#17352D]/15 rounded-xs flex flex-col items-center justify-center gap-1.5 text-[#17352D] hover:text-[#005B45] hover:border-[#005B45] transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="pt-2 border-t border-[#17352D]/10 text-xs font-sans text-[#66756F] space-y-1.5">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#005B45]" />
              <span>{SITE_CONFIG.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#005B45]" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-4 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] uppercase rounded-xs shadow-xs"
          >
            DONATE NOW →
          </Link>
        </div>
      )}
    </header>
  );
}

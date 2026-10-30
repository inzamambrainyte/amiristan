"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import data from "@/content/data.json";
import { useNavbarNavigation } from "@/hooks";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brandName, logoPath, navLinks, ctaText, ctaLink } = data.Navigation;

  const {
    activeHref,
    setActiveHref,
    setHoveredHref,
    highlightedHref,
  } = useNavbarNavigation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/70 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoPath}
                alt={brandName}
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-xl text-slate-900 group-hover:text-[#f38020] transition-colors tracking-tight">
              {brandName}
            </span>
          </Link>

          <div
            className="hidden md:flex items-center gap-2 h-full relative"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => {
              const isCurrent = highlightedHref === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative h-full flex items-center px-4 text-sm font-medium transition-colors select-none ${
                    isCurrent
                      ? "text-[#f38020] font-semibold"
                      : "text-slate-600 hover:text-[#f38020]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isCurrent && (
                    <motion.span
                      layoutId="navbar-active-line"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                      }}
                      className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#f38020] rounded-t shadow-[0_-1px_6px_rgba(243,128,32,0.4)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href={ctaLink}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] shadow-sm hover:shadow-[0_4px_16px_rgba(243,128,32,0.3)] active:scale-[0.98] transition-all duration-200"
            >
              {ctaText}
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:text-[#f38020] bg-slate-50 border border-slate-200/80 shadow-sm transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl px-6 py-5 flex flex-col gap-3 shadow-xl">
          {navLinks.map((link) => {
            const isCurrent = activeHref === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setMobileMenuOpen(false);
                }}
                className={`text-base px-4 py-2.5 rounded-xl transition-colors ${
                  isCurrent
                    ? "text-[#f38020] font-semibold bg-orange-50/80 border border-[#f38020]/25"
                    : "text-slate-700 hover:text-[#f38020]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={ctaLink}
            onClick={() => setMobileMenuOpen(false)}
            className="text-center px-6 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] shadow-md"
          >
            {ctaText}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

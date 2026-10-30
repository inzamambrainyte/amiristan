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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1360px] mx-auto pointer-events-auto">
        <nav className="bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoPath}
                alt={brandName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-xl text-slate-900 group-hover:text-[#f38020] transition-colors tracking-tight">
              {brandName}
            </span>
          </Link>

          <div
            className="hidden md:flex items-center gap-1 relative"
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
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 select-none ${
                    isCurrent
                      ? "text-[#f38020]"
                      : "text-slate-600 hover:text-[#f38020]"
                  }`}
                >
                  {isCurrent && (
                    <motion.span
                      layoutId="amiristan-nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-[#f38020]/25 shadow-sm -z-10"
                    >
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#f38020] rounded-full shadow-[0_0_6px_#f38020]" />
                    </motion.span>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href={ctaLink}
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:shadow-[0_8px_20px_rgba(243,128,32,0.35)] active:scale-[0.98] transition-all duration-200"
            >
              {ctaText}
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-[#f38020] bg-slate-50 border border-slate-200/80 shadow-sm transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/90 flex flex-col gap-3">
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
                  className={`text-base px-4 py-2 rounded-xl transition-colors ${
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
              className="text-center px-6 py-3 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] shadow-md"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

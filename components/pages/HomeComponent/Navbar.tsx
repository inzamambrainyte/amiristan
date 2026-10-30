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
        <nav className="bg-[#ecedf1] rounded-[50px] shadow-neu-navbar px-3 sm:px-6 py-2.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src={logoPath}
                alt={brandName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="font-medium text-xl sm:text-2xl text-[#1c1c1c] tracking-tight">
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
                  className={`relative px-6 py-3 rounded-[50px] text-base transition-colors duration-200 select-none ${
                    isCurrent
                      ? "text-[#f38020] font-semibold"
                      : "text-[#1c1c1c] font-normal hover:text-[#f38020]"
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
                      className="absolute inset-0 rounded-[50px] bg-white/75 border border-[#f38020]/30 shadow-[0_4px_16px_rgba(243,128,32,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] -z-10"
                    >
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#f38020] rounded-full shadow-[0_0_6px_#f38020]" />
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
              className="px-8 py-3.5 rounded-[50px] text-base font-medium text-white bg-[#f38020] hover:bg-[#fa8c34] active:bg-[#d96b0f] transition-all duration-200 shadow-neu-button hover:shadow-[0_8px_20px_rgba(243,128,32,0.35)] active:shadow-neu-button-inset active:scale-[0.98]"
            >
              {ctaText}
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#1c1c1c] hover:text-[#f38020] shadow-neu-badge transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-[#ecedf1] rounded-[25px] shadow-neu-card border border-white/60 flex flex-col gap-3">
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
                  className={`text-base px-4 py-2 rounded-[50px] transition-colors ${
                    isCurrent
                      ? "text-[#f38020] font-semibold bg-white/80 border border-[#f38020]/30 shadow-[0_2px_8px_rgba(243,128,32,0.15)]"
                      : "text-[#1c1c1c] font-normal hover:text-[#f38020]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ctaLink}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-8 py-3 rounded-[50px] text-base font-medium text-white bg-[#f38020] hover:bg-[#fa8c34] transition-all duration-200 shadow-neu-button"
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

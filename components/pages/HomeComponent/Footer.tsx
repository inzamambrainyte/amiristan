"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";
import data from "@/content/data.json";

interface SocialItem {
  id: string;
  name: string;
  href: string;
  icon: React.ElementType;
}

export const Footer: React.FC = () => {
  const { brandName, logoPath, copyright, links, socials } = data.Footer;

  const socialItems: SocialItem[] = [
    {
      id: "linkedin",
      name: "LinkedIn",
      href: socials.linkedin,
      icon: LinkedinLogo,
    },
    {
      id: "twitter",
      name: "Twitter",
      href: socials.twitter,
      icon: TwitterLogo,
    },
    {
      id: "instagram",
      name: "Instagram",
      href: socials.instagram,
      icon: InstagramLogo,
    },
    {
      id: "facebook",
      name: "Facebook",
      href: socials.facebook,
      icon: FacebookLogo,
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 py-10 px-4 sm:px-6">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-[50px] h-[50px] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center border border-slate-200/80 bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoPath}
              alt={brandName}
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-2xl text-slate-900 group-hover:text-[#f38020] transition-colors tracking-tight">
            {brandName}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 py-1.5 text-base text-slate-600 font-medium">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f38020] transition-colors duration-200"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#f38020] transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500 order-2 md:order-1 text-center md:text-left">
            {copyright}
          </p>

          <div className="flex items-center gap-3 order-1 md:order-2">
            {socialItems.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 450, damping: 22 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-[#f38020]/40 hover:bg-[#fff7ed] hover:shadow-[0_6px_16px_-2px_rgba(243,128,32,0.22)] flex items-center justify-center overflow-hidden cursor-pointer shrink-0 text-slate-600 hover:text-[#f38020] transition-colors group"
                >
                  <IconComp size={22} weight="regular" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

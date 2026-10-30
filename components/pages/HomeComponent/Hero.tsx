"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";

export const Hero: React.FC = () => {
  const { title, description } = data.Home.hero;

  return (
    <section id="hero" className="pt-36 pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ecedf1] shadow-neu-badge text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#f38020] animate-pulse" />
          Next-Gen AI &amp; Cloud Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-[60px] font-semibold tracking-tight text-[#1c1c1c] leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-[22px] text-[#4d4d4d] max-w-3xl leading-[1.5] font-normal"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

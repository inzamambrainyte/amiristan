"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";

export const Hero: React.FC = () => {
  const { title, description } = data.Home.hero;

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(243,128,32,0.12),rgba(248,249,252,0))] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl md:text-[22px] text-slate-600 max-w-3xl leading-[1.6] font-normal"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

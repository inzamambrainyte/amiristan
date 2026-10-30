"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";

export const About: React.FC = () => {
  const { title, paragraphs, ctaText, ctaLink } = data.Home.about;

  return (
    <section id="about-us" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/95 rounded-3xl p-8 sm:p-14 md:p-16 border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)] relative overflow-hidden text-center flex flex-col items-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[radial-gradient(ellipse_at_top,rgba(243,128,32,0.12),transparent_70%)] pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 relative z-10">
            {title}
          </h2>

          <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl text-center mb-10 relative z-10">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] hover:shadow-[0_10px_28px_rgba(243,128,32,0.4)] active:scale-[0.98] transition-all duration-200 shadow-md relative z-10 cursor-pointer"
          >
            <span>{ctaText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

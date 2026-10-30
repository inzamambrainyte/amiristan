"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";

export const About: React.FC = () => {
  const { badge, title, paragraphs, ctaText, ctaLink } = data.Home.about;
  const productLink = process.env.NEXT_PUBLIC_APP_STORE_URL || ctaLink;

  return (
    <section id="about-us" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#ecedf1] rounded-[25px] p-8 sm:p-12 md:p-16 shadow-neu-card border border-white/50 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#ecedf1] shadow-neu-badge text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-6">
            {badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c1c1c] mb-8">
            {title}
          </h2>

          <div className="space-y-6 text-[#4d4d4d] text-base sm:text-lg leading-relaxed max-w-2xl text-center mb-10">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[50px] text-base font-medium text-white bg-[#f38020] hover:bg-[#fa8c34] active:bg-[#d96b0f] transition-all duration-200 shadow-neu-button hover:shadow-[0_8px_24px_rgba(243,128,32,0.38)] active:shadow-neu-button-inset active:scale-[0.98]"
          >
            <span>{ctaText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

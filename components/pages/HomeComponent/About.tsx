"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";

export const About: React.FC = () => {
  const { title, paragraphs, ctaText, ctaLink } = data.Home.about;

  return (
    <section id="about-us" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl text-center mb-10"
        >
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] hover:shadow-[0_10px_28px_rgba(243,128,32,0.4)] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer"
          >
            <span>{ctaText}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

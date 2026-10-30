"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import data from "@/content/data.json";

export const Features: React.FC = () => {
  const { title, subtitle, items } = data.Home.features;

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#f38020]/25 shadow-[0_2px_12px_rgba(243,128,32,0.1)] text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f38020] shadow-[0_0_8px_#f38020] animate-pulse" />
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.25] mb-4">
            {title.startsWith("Features") ? (
              <>
                <span className="text-[#f38020]">Features</span> {title.replace("Features", "").trim()}
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Card {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

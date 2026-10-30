"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import data from "@/content/data.json";

export const Features: React.FC = () => {
  const { title, subtitle, items } = data.Home.features;

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f38020] leading-[1.25] mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -70 : 70, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 1.1,
                  delay: (idx % 2) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card {...item} layout="horizontal" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

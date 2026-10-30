"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import data from "@/content/data.json";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const { badge, title, subtitle, items } = data.Home.faq;

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#f38020]/25 shadow-[0_2px_12px_rgba(243,128,32,0.1)] text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f38020] shadow-[0_0_8px_#f38020] animate-pulse" />
            {badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "border-[#f38020]/40 shadow-[0_8px_24px_rgba(243,128,32,0.1)]"
                    : "border-slate-200/80 shadow-sm hover:border-[#f38020]/30 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-medium transition-colors ${
                      isOpen ? "text-[#f38020]" : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#f38020] text-white shadow-sm"
                        : "rotate-0 text-[#f38020] bg-[#fff7ed] border border-[#f38020]/20"
                    }`}
                  >
                    <Plus size={18} weight="bold" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

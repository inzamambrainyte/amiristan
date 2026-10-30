"use client";

import React from "react";
import { motion } from "framer-motion";
import { LegalContent } from "@/types";

interface LegalViewProps {
  data: LegalContent;
}

export const LegalView: React.FC<LegalViewProps> = ({ data }) => {
  const title = data?.title || "";
  const blocks = data?.blocks || [];

  const renderTextWithLinks = (text: string) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    if (emailRegex.test(text)) {
      const parts = text.split(emailRegex);
      return (
        <span>
          {parts.map((part, index) =>
            emailRegex.test(part) ? (
              <a
                key={index}
                href={`mailto:${part}`}
                className="text-[#f38020] underline hover:text-[#d96b0f] font-medium transition-colors"
              >
                {part}
              </a>
            ) : (
              part
            )
          )}
        </span>
      );
    }
    return text;
  };

  return (
    <main className="w-full flex-grow pt-36 sm:pt-44 pb-24 px-6 sm:px-10 lg:px-12 max-w-[1100px] mx-auto flex flex-col items-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full text-center mb-10 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-5">
          <span className="w-2 h-2 rounded-full bg-[#f38020] animate-pulse" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 tracking-tight">
          {title}
        </h1>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0.001,
          scale: 0.98,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full bg-white/95 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.04)] text-left text-base sm:text-lg leading-relaxed text-slate-600 space-y-6"
      >
        {blocks.map((block, idx) => {
          if (block.type === "heading") {
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 first:pt-0"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "list" && block.items) {
            return (
              <ul
                key={idx}
                className="list-disc pl-6 space-y-2 text-base sm:text-lg leading-relaxed text-slate-600"
              >
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{renderTextWithLinks(item)}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={idx} className="text-base sm:text-lg leading-relaxed text-slate-600">
              {block.text ? renderTextWithLinks(block.text) : ""}
            </p>
          );
        })}
      </motion.div>
    </main>
  );
};

export default LegalView;

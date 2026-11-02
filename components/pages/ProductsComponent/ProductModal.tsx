"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  CheckCircle,
  ArrowSquareOut,
  Cpu,
  Robot,
  ChalkboardTeacher,
  PencilSimple,
  X,
} from "@phosphor-icons/react";
import { ProductItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Robot,
  ChalkboardTeacher,
  PencilSimple,
  Sparkle,
  Cpu,
};

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  appStoreUrl: string;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  appStoreUrl,
}) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12 max-h-[90vh] overflow-y-auto my-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#f38020]/10 via-[#faae40]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                  {product.title}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="text-[#f38020] shrink-0 mt-0.5"
                      />
                      <span className="text-sm sm:text-base text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {product.tools && (
                  <div className="w-full mb-8 p-4 rounded-2xl bg-orange-50/70 border border-orange-100 text-xs sm:text-sm text-slate-700">
                    <span className="font-semibold text-[#f38020] block mb-1.5 uppercase tracking-wider text-[11px]">
                      Main Tools
                    </span>
                    <p className="leading-relaxed font-medium">
                      {product.tools}
                    </p>
                  </div>
                )}

                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] shadow-[0_10px_24px_rgba(243,128,32,0.35)] hover:shadow-[0_14px_30px_rgba(243,128,32,0.45)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>{product.ctaText}</span>
                  <ArrowSquareOut size={18} weight="bold" />
                </a>
              </div>

              <div className="hidden lg:flex lg:col-span-5 justify-center w-full">
                <div className="w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-800 text-white relative">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#f38020] flex items-center justify-center text-white shadow-md">
                        {React.createElement(
                          (product.iconName && iconMap[product.iconName]) ||
                            Cpu,
                          { size: 18, weight: "bold" }
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {product.title}
                        </h4>
                        <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                          {product.preview?.engine || "Active Engine"}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {product.preview?.badge || "v2.0"}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="bg-slate-800/80 rounded-xl p-3.5 text-slate-300 ml-6 border border-slate-700/60">
                      {product.preview?.query}
                    </div>

                    <div className="bg-[#f38020]/15 rounded-xl p-4 text-slate-100 mr-4 border border-[#f38020]/30 space-y-2">
                      <p className="font-medium text-[#f38020]">
                        {product.preview?.resultTitle}
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-200">
                        {product.preview?.resultBullets.map((bullet, bIdx) => (
                          <li key={bIdx}>• {bullet}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/80 rounded-xl p-3.5 text-slate-300 ml-6 border border-slate-700/60">
                      {product.preview?.followUp}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkle
                        size={13}
                        weight="fill"
                        className="text-[#f38020]"
                      />
                      {product.preview?.footerLeft}
                    </span>
                    <span className="text-slate-500 font-mono">
                      {product.preview?.footerRight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;


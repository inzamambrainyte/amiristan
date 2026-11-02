"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Robot,
  ChalkboardTeacher,
  PencilSimple,
  Sparkle,
  Cpu,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { ProductItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Robot,
  ChalkboardTeacher,
  PencilSimple,
  Sparkle,
  Cpu,
};

interface ProductCardProps {
  product: ProductItem;
  index: number;
  onOpen: (product: ProductItem) => void;
  appStoreUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  onOpen,
  appStoreUrl,
}) => {
  const IconComponent =
    (product.iconName && iconMap[product.iconName]) || Robot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full sm:w-[360px] md:w-[380px] lg:w-[360px] flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(243,128,32,0.22)] hover:border-[#f38020]/40 transition-all duration-300 group cursor-pointer"
      onClick={() => onOpen(product)}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100/80 flex items-center justify-center text-[#f38020] shadow-sm">
            <IconComponent size={28} weight="bold" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#f38020] transition-colors mb-3">
          {product.title}
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {product.shortDescription || product.description}
        </p>
      </div>

      <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(product);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#f38020] bg-orange-50 hover:bg-orange-100/80 transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight size={14} weight="bold" />
        </button>

        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label={`Get ${product.title} on App Store`}
        >
          <ArrowSquareOut size={18} weight="bold" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;


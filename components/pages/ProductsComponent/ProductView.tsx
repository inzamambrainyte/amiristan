"use client";

import React from "react";
import { motion } from "framer-motion";
import data from "@/content/data.json";
import { useProductModal } from "@/hooks";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export const ProductView: React.FC = () => {
  const { title, subtitle } = data.Product;
  const {
    products,
    selectedProduct,
    openProduct,
    closeProduct,
    getAppStoreUrl,
  } = useProductModal();

  return (
    <main className="w-full flex-grow pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(243,128,32,0.12),rgba(248,249,252,0))] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-3xl text-center flex flex-col items-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </motion.div>

      <section className="w-full">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onOpen={openProduct}
              appStoreUrl={getAppStoreUrl(product)}
            />
          ))}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={closeProduct}
        appStoreUrl={selectedProduct ? getAppStoreUrl(selectedProduct) : ""}
      />
    </main>
  );
};

export default ProductView;

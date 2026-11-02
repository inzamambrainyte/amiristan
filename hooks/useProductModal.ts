"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { ProductItem } from "@/types";
import data from "@/content/data.json";

export const useProductModal = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );

  const products: ProductItem[] = useMemo(() => {
    return (
      data.Product?.items ||
      (data.Product?.flagship ? [data.Product.flagship] : [])
    );
  }, []);

  const openProduct = useCallback((product: ProductItem) => {
    setSelectedProduct(product);
  }, []);

  const closeProduct = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  const getAppStoreUrl = useCallback((product?: ProductItem) => {
    if (product?.ctaLink && product.ctaLink.trim() !== "") {
      return product.ctaLink;
    }
    return process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com";
  }, []);

  return {
    products,
    selectedProduct,
    setSelectedProduct,
    openProduct,
    closeProduct,
    getAppStoreUrl,
  };
};

export default useProductModal;


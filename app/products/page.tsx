import React from "react";
import type { Metadata } from "next";
import { ProductView } from "@/components/pages/ProductsComponent/ProductView";
import data from "@/content/data.json";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || data.config.siteUrl;

export const metadata: Metadata = {
  title: `Our Products | ${data.config.siteName}`,
  description: data.Product.subtitle,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Our Products | ${data.config.siteName}`,
    description: data.Product.subtitle,
    url: `${siteUrl}/products`,
    siteName: data.config.siteName,
    images: [
      {
        url: data.config.ogImage,
        width: 200,
        height: 200,
        alt: `${data.config.siteName} Logo`,
      },
    ],
    locale: data.config.locale,
    type: "website",
  },
};

export const dynamic = "force-static";

export default function ProductPage() {
  return <ProductView />;
}


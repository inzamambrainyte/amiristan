import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex-grow pt-44 pb-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
      <div className="bg-[#ecedf1] rounded-[25px] p-10 sm:p-14 shadow-neu-card border border-white/50 w-full flex flex-col items-center">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#ecedf1] shadow-neu-badge text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-6">
          404 Error
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1c1c1c] mb-4">
          Page Not Found
        </h1>

        <p className="text-base text-[#4d4d4d] leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[50px] text-base font-medium text-white bg-[#f38020] hover:bg-[#fa8c34] active:bg-[#d96b0f] transition-all duration-200 shadow-neu-button hover:shadow-[0_8px_20px_rgba(243,128,32,0.35)] active:shadow-neu-button-inset active:scale-[0.98]"
        >
          <ArrowLeft size={18} weight="bold" />
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}

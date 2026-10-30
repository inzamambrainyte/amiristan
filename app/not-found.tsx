import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex-grow pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 sm:p-14 border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)] w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-base text-slate-600 leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_16px_rgba(243,128,32,0.25)] hover:shadow-[0_6px_20px_rgba(243,128,32,0.35)]"
        >
          <ArrowLeft size={18} weight="bold" />
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  Clock,
  Sparkle,
  ArrowLeft,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Input, Textarea, Button } from "@/components/ui";
import data from "@/content/data.json";
import { useContactForm } from "@/hooks";

export const ContactView: React.FC = () => {
  const { title, description, form } = data.Contact;

  const {
    formData,
    status,
    feedbackMessage,
    handleChange,
    handleSubmit,
  } = useContactForm({
    defaultSuccessMessage: form?.successMessage,
    defaultErrorMessage: form?.errorMessage,
  });

  return (
    <main className="w-full flex-grow pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto flex flex-col items-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
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
        className="w-full max-w-3xl text-center flex flex-col items-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
          {title.includes("to hear") ? (
            <>
              {title.split("to hear")[0]} <span className="font-light text-slate-600">to hear{title.split("to hear")[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </motion.div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 lg:order-2 lg:col-span-7 bg-white/95 rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="page-name"
                className="text-sm font-medium text-slate-700 pl-1"
              >
                {form.nameLabel}
              </label>
              <Input
                id="page-name"
                name="name"
                type="text"
                placeholder={form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={50}
                disabled={status === "loading"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="page-email"
                className="text-sm font-medium text-slate-700 pl-1"
              >
                {form.emailLabel}
              </label>
              <Input
                id="page-email"
                name="email"
                type="email"
                placeholder={form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="page-subject"
                className="text-sm font-medium text-slate-700 pl-1"
              >
                {form.subjectLabel || "Subject"}
              </label>
              <Input
                id="page-subject"
                name="subject"
                type="text"
                placeholder={form.subjectPlaceholder || "Subject of inquiry"}
                value={formData.subject}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={100}
                disabled={status === "loading"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="page-message"
                className="text-sm font-medium text-slate-700 pl-1"
              >
                {form.messageLabel}
              </label>
              <Textarea
                id="page-message"
                name="message"
                placeholder={form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                minLength={10}
                maxLength={1000}
                disabled={status === "loading"}
              />
            </div>

            <div className="pt-2 flex flex-col items-start gap-4">
              <Button
                type="submit"
                disabled={status === "loading"}
                isLoading={status === "loading"}
                loadingText={form.submittingButton}
                className="w-full sm:w-auto"
              >
                {form.submitButton}
              </Button>

              {status === "success" && (
                <p className="text-emerald-700 text-sm font-medium animate-fade-in bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                  {feedbackMessage}
                </p>
              )}

              {status === "error" && (
                <p className="text-rose-700 text-sm font-medium animate-fade-in bg-rose-500/10 px-4 py-2 rounded-xl border border-rose-500/20">
                  {feedbackMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-[#f38020]/20 flex items-center justify-center shrink-0 text-[#f38020]">
              <EnvelopeSimple size={24} weight="regular" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-1">
                Email Support
              </span>
              <a
                href={`mailto:${data.config.contactEmail}`}
                className="text-base sm:text-lg font-medium text-slate-900 hover:text-[#f38020] transition-colors leading-snug"
              >
                {data.config.contactEmail}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-[#f38020]/20 flex items-center justify-center shrink-0 text-[#f38020]">
              <Clock size={24} weight="regular" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-1">
                Response Time
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-snug">
                Within 24 business hours
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-[#f38020]/20 flex items-center justify-center shrink-0 text-[#f38020]">
              <Sparkle size={24} weight="regular" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-1">
                Global Availability
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-900 leading-snug">
                Serving users & clients worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex justify-center mt-12 sm:mt-16"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200/90 bg-white/90 shadow-sm text-sm font-medium text-slate-600 hover:text-[#f38020] hover:border-[#f38020]/40 transition-all duration-200"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Back to Overview</span>
        </Link>
      </motion.div>
    </main>
  );
};

export default ContactView;

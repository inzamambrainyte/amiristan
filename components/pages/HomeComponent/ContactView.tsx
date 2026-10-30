"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  MapPin,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import { Input, Textarea, Button } from "@/components/ui";
import { useContactForm } from "@/hooks";
import data from "@/content/data.json";

export const ContactView: React.FC = () => {
  const { badge, title, description, form } = data.Contact;

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
    <main className="w-full flex-grow pt-36 sm:pt-44 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto flex flex-col items-center">
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#f38020]/25 shadow-[0_2px_12px_rgba(243,128,32,0.1)] text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#f38020] shadow-[0_0_8px_#f38020] animate-pulse" />
          {badge}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
          {title.includes("to hear") ? (
            <>
              {title.split("to hear")[0]}{" "}
              <span className="text-[#f38020]">
                to hear{title.split("to hear")[1]}
              </span>
            </>
          ) : (
            title
          )}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#f38020]/20 flex items-center justify-center text-[#f38020] shrink-0">
              <EnvelopeSimple size={26} weight="regular" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-slate-900">Email Support</h3>
              <a
                href={`mailto:${data.config.contactEmail}`}
                className="text-base font-medium text-[#f38020] hover:underline"
              >
                {data.config.contactEmail}
              </a>
              <p className="text-sm text-slate-500 mt-1">
                We typically reply within 24 business hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#f38020]/20 flex items-center justify-center text-[#f38020] shrink-0">
              <MapPin size={26} weight="regular" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-slate-900">Company</h3>
              <p className="text-base text-slate-800 font-medium">
                {data.config.siteName}
              </p>
              <p className="text-sm text-slate-500">
                DriveConnect &amp; AI Chatbot Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <Input
                label={form?.nameLabel || "Name"}
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={50}
                value={formData.name}
                onChange={handleChange}
                placeholder={form?.namePlaceholder || "Your Full Name"}
              />

              <Input
                label={form?.emailLabel || "Email"}
                name="email"
                type="email"
                required
                minLength={5}
                maxLength={100}
                value={formData.email}
                onChange={handleChange}
                placeholder={form?.emailPlaceholder || "name@example.com"}
              />
            </div>

            <Input
              label={form?.subjectLabel || "Subject"}
              name="subject"
              type="text"
              required
              minLength={3}
              maxLength={100}
              value={formData.subject}
              onChange={handleChange}
              placeholder={form?.subjectPlaceholder || "Subject of inquiry"}
            />

            <Textarea
              label={form?.messageLabel || "Message"}
              name="message"
              rows={4}
              required
              minLength={10}
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              placeholder={form?.messagePlaceholder || "Tell us how we can help..."}
            />

            {status === "success" && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-sm">
                <CheckCircle size={20} weight="fill" className="text-emerald-500 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-sm">
                <WarningCircle size={20} weight="fill" className="text-rose-500 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                isLoading={status === "loading"}
                loadingText={form?.submittingButton || "Sending..."}
                className="w-full sm:w-auto"
              >
                {form?.submitButton || "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactView;

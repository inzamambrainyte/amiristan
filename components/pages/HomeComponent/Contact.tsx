"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { Input, Textarea, Button } from "@/components/ui";
import { useContactForm } from "@/hooks";
import data from "@/content/data.json";

export const Contact: React.FC = () => {
  const { badge, title, description, form, ctaLink } = data.Contact;

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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/95 rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)] flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[radial-gradient(ellipse_at_top,rgba(243,128,32,0.1),transparent_70%)] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#f38020]/25 shadow-[0_2px_12px_rgba(243,128,32,0.1)] text-xs font-semibold uppercase tracking-wider text-[#f38020] mb-6 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#f38020] shadow-[0_0_8px_#f38020] animate-pulse" />
            {badge}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-center relative z-10">
            {title.includes("to hear") ? (
              <>
                {title.split("to hear")[0]} <span className="font-light text-slate-600">to hear{title.split("to hear")[1]}</span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-10 text-center relative z-10">
            {description}
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col gap-5 text-left relative z-10"
          >
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

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <Button
                type="submit"
                isLoading={status === "loading"}
                loadingText={form?.submittingButton || "Sending..."}
                className="w-full sm:w-auto"
              >
                {form?.submitButton || "Send Message"}
              </Button>

              <Link
                href={ctaLink || "/contact"}
                className="text-xs sm:text-sm text-slate-500 hover:text-[#f38020] underline transition-colors"
              >
                Go to Contact Us Page →
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

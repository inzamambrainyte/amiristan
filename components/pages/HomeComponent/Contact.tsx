"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input, Textarea, Button } from "@/components/ui";
import data from "@/content/data.json";
import { useContactForm } from "@/hooks";

export const Contact: React.FC = () => {
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-center relative z-10">
            {title.includes("to hear") ? (
              <>
                {title.split("to hear")[0]} <span className="font-light text-slate-600">to hear{title.split("to hear")[1]}</span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl text-center mb-12 relative z-10">
            {description}
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl flex flex-col gap-6 relative z-10"
          >
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700 select-none pl-1"
              >
                {form.nameLabel}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={100}
                disabled={status === "loading"}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700 select-none pl-1"
              >
                {form.emailLabel}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700 select-none pl-1"
              >
                {form.messageLabel}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                minLength={10}
                maxLength={5000}
                disabled={status === "loading"}
              />
            </div>

            <div className="pt-2 flex flex-col items-center gap-4">
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
                <p className="text-emerald-700 text-sm font-medium text-center animate-fade-in bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                  {feedbackMessage}
                </p>
              )}

              {status === "error" && (
                <p className="text-rose-700 text-sm font-medium text-center animate-fade-in bg-rose-500/10 px-4 py-2 rounded-xl border border-rose-500/20">
                  {feedbackMessage}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

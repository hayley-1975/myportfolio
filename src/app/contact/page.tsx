"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const res = await submitContactForm({ success: false, message: "" }, formData);

    setIsSubmitting(false);
    setResult(res);

    if (res.success) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-3xl mx-auto space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cerulean-700 hover:text-cerulean-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to portfolio
      </Link>

      <div className="bg-white rounded-3xl border border-cerulean-100 shadow-card p-6 sm:p-10">
        <div className="mb-6">
          <span className="text-[10px] font-bold tracking-wider uppercase text-cerulean-600 block mb-1">
            LET&apos;S TALK
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cerulean-950 tracking-tight">
            Get in touch
          </h1>
          <p className="text-xs sm:text-sm text-surface-muted mt-2">
            Have a project, funnel, or AI automation pipeline in mind? Fill out
            the details below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {result && (
          <div
            className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs ${
              result.success
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-rose-50 text-rose-800 border border-rose-200"
            }`}
          >
            {result.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <p>{result.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-cerulean-900 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Kenneth Villar"
              className="w-full px-4 py-2.5 rounded-xl border border-cerulean-200 text-sm focus:outline-none focus:ring-2 focus:ring-cerulean-500 bg-cerulean-50/30 text-cerulean-950 placeholder:text-cerulean-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-cerulean-900 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 rounded-xl border border-cerulean-200 text-sm focus:outline-none focus:ring-2 focus:ring-cerulean-500 bg-cerulean-50/30 text-cerulean-950 placeholder:text-cerulean-300"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-cerulean-900 mb-1.5">
              What are you looking to build?
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Describe your project, timeline, or current automation bottlenecks..."
              className="w-full px-4 py-2.5 rounded-xl border border-cerulean-200 text-sm focus:outline-none focus:ring-2 focus:ring-cerulean-500 bg-cerulean-50/30 text-cerulean-950 placeholder:text-cerulean-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl bg-cerulean-600 text-white font-semibold text-sm hover:bg-cerulean-700 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Sending message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
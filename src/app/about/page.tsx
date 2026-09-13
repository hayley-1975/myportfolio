import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, SealCheck, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function AboutPage() {
  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-4xl mx-auto space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-cerulean-600 hover:text-cerulean-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <span className="text-[10px] font-bold tracking-wider uppercase text-cerulean-600 block mb-1">
          BACKGROUND & PHILOSOPHY
        </span>
        <h1 className="text-3xl font-extrabold text-cerulean-950 tracking-tight">
          Who I Am and How I Work
        </h1>
      </div>

      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-cerulean-100 shadow-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-cerulean-100">
          <div className="relative shrink-0">
            <img
              src="/avatar.jpg"
              alt="Maria Rochelle"
              className="w-28 h-28 rounded-2xl object-cover object-top border-2 border-cerulean-500 shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <h2 className="text-xl font-bold text-cerulean-950">Maria Rochelle</h2>
              <SealCheck weight="fill" className="w-4 h-4 text-cerulean-500" />
            </div>
            <p className="text-xs font-bold text-cerulean-600 uppercase tracking-wide">
              Systems Architect & GoHighLevel Administrator
            </p>
            <p className="text-xs text-surface-muted leading-relaxed pt-1">
              Engineering high-conversion funnels, enterprise automation workflows, and resilient technical pipelines for growing brands and agencies.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-surface-muted leading-relaxed">
          <p>
            I specialize in bridging the gap between business operations and technical automation. When leads drop or manual follow-ups slip through the cracks, revenue is lost. My mission is simple: <strong>Build it once. Run it forever.</strong>
          </p>
          <p>
            From complex multi-location GoHighLevel account builds to custom webhook integrations, AI triage agents, and secure database pipelines with Supabase, every system I build is clean, documented, and designed to run reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-cerulean-50/70 border border-cerulean-200/60">
            <h3 className="text-xs font-bold text-cerulean-950 mb-2">Core Principles</h3>
            <ul className="space-y-1.5 text-xs text-cerulean-800 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                Zero-maintenance automation design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                Strict role-based access & security
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                Sub-second page speeds & high conversion
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-cerulean-50/70 border border-cerulean-200/60">
            <h3 className="text-xs font-bold text-cerulean-950 mb-2">Technical Toolbelt</h3>
            <div className="flex flex-wrap gap-1.5">
              {["GoHighLevel", "Next.js", "Supabase", "REST APIs", "Webhooks", "Zendesk", "Intercom", "OpenAI / Claude"].map((item) => (
                <span key={item} className="px-2 py-1 rounded bg-white text-[10px] font-bold text-cerulean-900 border border-cerulean-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-xl bg-cerulean-600 text-white font-bold text-xs hover:bg-cerulean-700 shadow-md inline-flex items-center gap-2"
          >
            <span>Get in touch with Maria</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
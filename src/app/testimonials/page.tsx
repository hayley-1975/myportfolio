import React from "react";
import Link from "next/link";
import { ArrowLeft, Quotes, Star, SealCheck } from "@phosphor-icons/react/dist/ssr";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Operations Manager & GHL Specialist",
      company: "Client 1 — Digital Scale Agency",
      tags: "GHL Build · Automation · Membership",
      text: "Maria transformed our chaotic manual onboarding into a completely hands-off system. What used to take our staff 4 hours every day now completes before we even log in. Zero lost leads.",
    },
    {
      name: "GHL Specialist & Agentic AI Engineer",
      company: "Client 2 — AI Consultancy",
      tags: "CRM · Pipelines · Forms · API Webhooks",
      text: "The architectural cleanliness Maria delivers is unmatched. Every single tag, pipeline stage, and webhook trigger was documented and tested. If you need bulletproof operations, look no further.",
    },
    {
      name: "Web Dev & GHL Specialist",
      company: "Client 3 — High-Ticket Coaching",
      tags: "Web Dev · GHL · Automation · Security",
      text: "Our conversion rates shot up immediately after replacing our old pages with her coded Next.js funnels. Lightning fast, beautiful, and the automated calendar follow-ups work every time.",
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-5xl mx-auto space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-cerulean-600 hover:text-cerulean-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <span className="text-[10px] font-bold tracking-wider uppercase text-cerulean-600 block mb-1">
          CLIENT ENDORSEMENTS
        </span>
        <h1 className="text-3xl font-extrabold text-cerulean-950 tracking-tight">
          What Clients Say About The Work
        </h1>
        <p className="text-sm text-surface-muted mt-1 max-w-2xl">
          Real outcomes and verified feedback from agencies and coaches running on my automated systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-cerulean-100 shadow-card flex flex-col justify-between hover:border-cerulean-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange">
                  <Quotes weight="fill" className="w-4 h-4" />
                </span>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" className="w-3.5 h-3.5" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-cerulean-950 leading-relaxed font-normal italic mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-cerulean-100">
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-cerulean-950">{r.name}</span>
                <SealCheck weight="fill" className="w-3.5 h-3.5 text-cerulean-500 shrink-0" />
              </div>
              <p className="text-[11px] text-cerulean-700 font-medium">{r.company}</p>
              <p className="text-[10px] font-mono text-surface-muted mt-1">{r.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
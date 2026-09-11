import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPortfolioData } from "@/lib/supabase";
import { ToolsBar } from "@/components/ToolsBar";
import { BentoGrid } from "@/components/BentoGrid";
import { VisitCounter } from "@/components/VisitCounter";

// Revalidate page every 60 seconds (ISR)
export const revalidate = 60;

export default async function HomePage() {
  const data = await getPortfolioData();

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-8 relative">
      
      {/* 1. Header Section */}
      <section className="flex flex-col md:flex-row md:items-start justify-between gap-5 pt-2">
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cerulean-950 tracking-tight leading-[1.15]">
            Build it once. Run it forever.
          </h1>
          <p className="text-sm sm:text-base text-surface-muted leading-relaxed font-normal">
            Lost leads are never found again. A workflow built once works forever,
            and the follow-up that fires itself never asks for a raise.
          </p>
        </div>

        {/* Top-Right Pill Button */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cerulean-900 text-white font-semibold text-xs sm:text-sm hover:bg-cerulean-800 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 text-cerulean-300" />
          </Link>
        </div>
      </section>

      {/* 2. Tools I work with bar (Daily drivers) */}
      <section>
        <ToolsBar tools={data.tools} />
      </section>

      {/* 3. Bento Grid of Cards */}
      <section>
        <BentoGrid
          project={data.project}
          services={data.services}
          testimonials={data.testimonials}
          credential={data.credential}
        />
      </section>

      {/* 4. Bottom-Right Floating Live Visit Counter */}
      <VisitCounter initialCount={data.visitCount} />
    </div>
  );
}
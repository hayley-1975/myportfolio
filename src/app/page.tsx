import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPortfolioData } from "@/lib/supabase";
import { ToolsBar } from "@/components/ToolsBar";
import { BentoGrid } from "@/components/BentoGrid";
import { VisitCounter } from "@/components/VisitCounter";

export const revalidate = 60;

export default async function HomePage() {
  const data = await getPortfolioData();

  return (
    <div className="p-3 sm:p-5 lg:px-7 lg:py-4 max-w-7xl mx-auto flex flex-col justify-between min-h-screen lg:h-screen lg:overflow-hidden gap-3 relative">
      {/* 1. Header Section */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
        <div className="max-w-2xl space-y-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cerulean-950 tracking-tight leading-tight">
            Build it once. Run it forever.
          </h1>
          <p className="text-xs sm:text-sm text-surface-muted leading-relaxed font-normal">
            Lost leads are never found again. A workflow built once works
            forever, and the follow-up that fires itself never asks for a raise.
          </p>
        </div>

        {/* Top-Right Pill Button */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cerulean-900 text-white font-semibold text-xs hover:bg-cerulean-800 shadow-sm transition-all"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cerulean-300" />
          </Link>
        </div>
      </section>

      {/* 2. Daily Drivers Bar */}
      <section className="shrink-0">
        <ToolsBar tools={data.tools} />
      </section>

      {/* 3. Bento Grid (Fits the remaining height) */}
      <section className="flex-1 flex flex-col justify-center">
        <BentoGrid
          project={data.project}
          services={data.services}
          testimonials={data.testimonials}
          credential={data.credential}
        />
      </section>

      {/* 4. Bottom-Right Floating Visit Counter */}
      <VisitCounter initialCount={data.visitCount} />
    </div>
  );
}

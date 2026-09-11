import React from "react";
import Link from "next/link";
import {
  FolderSimple,
  User,
  Sparkle,
  ShieldCheck,
  Stack,
  Quotes,
  SealCheck,
  ArrowUpRight,
  Code,
  GitFork,
  Database,
  Globe,
  DeviceMobile,
} from "@phosphor-icons/react/dist/ssr";
import {
  ProjectItem,
  ServiceItem,
  TestimonialItem,
  CredentialItem,
} from "@/types";

interface BentoGridProps {
  project: ProjectItem;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  credential: CredentialItem;
}

export function BentoGrid({
  project,
  services,
  testimonials,
  credential,
}: BentoGridProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "code":
        return <Code className="w-3 h-3 text-cerulean-600" />;
      case "workflow":
        return <GitFork className="w-3 h-3 text-cerulean-600" />;
      case "database":
        return <Database className="w-3 h-3 text-cerulean-600" />;
      case "globe":
        return <Globe className="w-3 h-3 text-cerulean-600" />;
      case "smartphone":
        return <DeviceMobile className="w-3 h-3 text-cerulean-600" />;
      default:
        return <Sparkle className="w-3 h-3 text-cerulean-600" />;
    }
  };

  return (
    <div className="w-full bg-cerulean-100/40 backdrop-blur-xs p-2.5 sm:p-3.5 rounded-3xl border border-cerulean-200/60 shadow-sm flex flex-col justify-between gap-3">
      {/* ================= TOP ROW ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* 1. PROJECTS CARD (Spans 5 cols) */}
        <div
          id="projects"
          className="scroll-mt-6 lg:col-span-5 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all"
        >
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <FolderSimple weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                PROJECTS
              </h2>
            </div>
            <p className="text-[11px] text-surface-muted leading-tight">
              {project.description}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-cerulean-200/80 bg-white shadow-sm flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cerulean-50/60 border-b border-cerulean-100">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="ml-2 text-[10px] text-cerulean-700/60 font-mono">
                brewedops.app
              </span>
            </div>

            <div className="p-2.5 sm:p-3 grid grid-cols-12 gap-2.5 items-center">
              <div className="col-span-7 space-y-1">
                <h3 className="text-xs font-bold text-cerulean-950 leading-snug">
                  {project.title}
                </h3>
                <p className="text-[10px] text-surface-muted leading-relaxed line-clamp-2">
                  Enterprise-grade automated workflows, CRM pipelines, and
                  security protocols.
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-semibold text-cerulean-600 hover:text-cerulean-800 pt-0.5"
                >
                  <span>View build</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="col-span-5 rounded-lg overflow-hidden border border-cerulean-100 shadow-inner">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-20 sm:h-24 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. ABOUT CARD (Spans 3 cols) */}
        <div
          id="about"
          className="scroll-mt-6 lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all text-center"
        >
          <div>
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <User weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                ABOUT
              </h2>
            </div>
            <p className="text-[11px] text-surface-muted text-left">
              Who I am and how I work.
            </p>
          </div>

          <div className="my-2 flex justify-center items-center">
            <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cerulean-100 via-white to-cerulean-50 border border-cerulean-200 p-2 shadow-inner flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-cerulean-600 text-white flex items-center justify-center font-bold shadow text-xs mb-1">
                MR
              </div>
              <p className="text-[10px] font-bold text-cerulean-950">
                Maria Rochelle
              </p>
              <p className="text-[9px] text-cerulean-700 font-medium">
                Ops & Security
              </p>
              <span className="mt-1 px-2 py-0.5 bg-cerulean-900 text-white rounded-full text-[8px] font-bold shadow-xs">
                Certified Admin
              </span>
            </div>
          </div>

          <p className="text-[10px] text-surface-muted leading-tight">
            Systems that run reliably and securely without breaking.
          </p>
        </div>

        {/* 3. AI BUILDS CARD (Spans 4 cols) */}
        <div
          id="ai-builds"
          className="scroll-mt-6 lg:col-span-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <Sparkle weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                AI BUILDS
              </h2>
            </div>
            <p className="text-[11px] text-surface-muted leading-tight">
              Agents, RAG chatbots and the tools I run on them.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 my-2">
            {[
              "KapeAI",
              "KapeSEO",
              "KAPE Reel workflow",
              "Kape AI knowledge search",
              "Autonomous Triage",
              "Supabase RAG",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cerulean-50/80 text-cerulean-800 border border-cerulean-200/70 hover:bg-cerulean-100 transition-colors flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cerulean-500"></span>
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[10px] text-surface-muted">
            Direct API integrations connecting LLMs to databases and CRM
            webhooks.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM ROW ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* 4. CREDENTIALS CARD (Spans 3 cols) */}
        <div
          id="credentials"
          className="scroll-mt-6 lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all text-center"
        >
          <div>
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <ShieldCheck weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                CREDENTIALS
              </h2>
            </div>
            <p className="text-[10px] text-surface-muted leading-tight text-left">
              {credential.title}
            </p>
          </div>

          <div className="my-1.5 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-cerulean-300 p-1.5 flex items-center justify-center bg-cerulean-50/50 shadow-inner">
              <div className="w-12 h-12 rounded-full bg-cerulean-700 text-white flex flex-col items-center justify-center shadow">
                <SealCheck weight="fill" className="w-5 h-5 text-white" />
                <span className="text-[7px] uppercase tracking-wider font-extrabold">
                  VERIFIED
                </span>
              </div>
            </div>
            <span className="mt-1.5 px-2.5 py-0.5 rounded-full bg-cerulean-900 text-white text-[9px] font-bold tracking-wide uppercase shadow-xs">
              {credential.badge_label || "Certified Admin"}
            </span>
          </div>

          <p className="text-[9px] text-surface-muted">
            HighLevel Admin Certified & Security Architect.
          </p>
        </div>

        {/* 5. SERVICES CARD (Spans 3 cols) */}
        <div
          id="services"
          className="scroll-mt-6 lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <Stack weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                SERVICES
              </h2>
            </div>
            <p className="text-[10px] text-surface-muted">
              What I build for coaches and agencies.
            </p>
          </div>

          <div className="divide-y divide-cerulean-100/80 my-1">
            {services.map((service) => (
              <div
                key={service.order_number}
                className="py-1 flex items-center justify-between group hover:bg-cerulean-50/40 px-1 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-0.5 rounded bg-cerulean-50">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-cerulean-950">
                    {service.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-cerulean-400">
                  {service.order_number}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-[10px] font-bold text-cerulean-600 hover:text-cerulean-800 flex items-center justify-between pt-1 border-t border-cerulean-100"
          >
            <span>Request custom build</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* 6. TESTIMONIALS CARD (Spans 6 cols) */}
        <div
          id="testimonials"
          className="scroll-mt-6 lg:col-span-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100/90 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                  <Quotes weight="fill" className="w-3.5 h-3.5" />
                </span>
                <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
                  TESTIMONIALS
                </h2>
              </div>
              <p className="text-[10px] text-surface-muted">
                What the people I build for say about the work.
              </p>
            </div>
          </div>

          <div className="space-y-1.5">
            {testimonials.map((t, idx) => (
              <div
                key={t.id || idx}
                className="px-3 py-1.5 rounded-xl bg-cerulean-50/50 border border-cerulean-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-cerulean-100/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-badge-orange shrink-0"></span>
                  <span className="text-xs font-bold text-cerulean-950">
                    {t.client_name}
                  </span>
                  <span className="text-[10px] text-cerulean-700 font-medium truncate">
                    — {t.role}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-surface-muted sm:text-right shrink-0">
                  {t.tags}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

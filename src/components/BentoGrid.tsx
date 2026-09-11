import React from "react";
import Link from "next/link";
import {
  Folder,
  User,
  Lightbulb,
  Shield,
  Layers,
  Quote,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  Globe,
  Database,
  Smartphone,
  Code,
} from "lucide-react";
import { ProjectItem, ServiceItem, TestimonialItem, CredentialItem } from "@/types";

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
        return <Code className="w-3.5 h-3.5 text-cerulean-600" />;
      case "workflow":
        return <Workflow className="w-3.5 h-3.5 text-cerulean-600" />;
      case "database":
        return <Database className="w-3.5 h-3.5 text-cerulean-600" />;
      case "globe":
        return <Globe className="w-3.5 h-3.5 text-cerulean-600" />;
      case "smartphone":
        return <Smartphone className="w-3.5 h-3.5 text-cerulean-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-cerulean-600" />;
    }
  };

  return (
    <div className="w-full bg-cerulean-100/40 p-3 sm:p-5 rounded-3xl border border-cerulean-200/70 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        
        {/* 1. PROJECTS CARD (Spans 2 columns on medium & large) */}
        <div
          id="projects"
          className="md:col-span-2 bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 flex flex-col justify-between group hover:border-cerulean-300 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                <Folder className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                PROJECTS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-surface-muted mb-4">
              {project.description}
            </p>
          </div>

          {/* Browser Mockup Inside Card */}
          <div className="rounded-xl overflow-hidden border border-cerulean-200/80 bg-slate-950/95 text-white shadow-md transition-transform duration-300 group-hover:-translate-y-1">
            {/* Browser top dots */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <div className="ml-3 px-3 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-400 font-mono tracking-tight flex items-center gap-1">
                <span>https://brewedops.app/overview</span>
              </div>
            </div>

            {/* Mockup Preview Content */}
            <div className="p-5 sm:p-7 bg-gradient-to-b from-slate-900 to-slate-950">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-cerulean-500/20 text-cerulean-300 text-[10px] font-semibold tracking-wider mb-2 border border-cerulean-400/30">
                    FEATURED ARCHITECTURE
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Custom CRM integrations, webhook triggers, API connectors,
                    and responsive user portals tailored for scaled digital agencies.
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-cerulean-400 hover:text-cerulean-300 group/link"
                  >
                    <span>Inspect live project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                <div className="rounded-lg overflow-hidden border border-slate-700/60 shadow-lg">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-36 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. ABOUT CARD */}
        <div
          id="about"
          className="bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 flex flex-col justify-between group hover:border-cerulean-300 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                <User className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                ABOUT
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-surface-muted">
              Who I am and how I work.
            </p>
          </div>

          {/* Desk illustration style graphic */}
          <div className="my-4 flex justify-center items-center py-4">
            <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-cerulean-100 via-white to-cerulean-50 border border-cerulean-200 p-3 shadow-inner flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-cerulean-600 text-white flex items-center justify-center font-bold shadow-md text-base mb-2">
                KV
              </div>
              <p className="text-[11px] font-bold text-cerulean-950">Kenneth Villar</p>
              <p className="text-[10px] text-cerulean-700 font-medium">Ops & AI Architect</p>
              <div className="absolute -bottom-2 px-2.5 py-0.5 bg-cerulean-800 text-white rounded-full text-[9px] font-bold shadow">
                Full-Stack GHL
              </div>
            </div>
          </div>

          <p className="text-xs text-surface-muted text-center leading-relaxed">
            Obsessed with zero-maintenance automation, seamless client handoffs,
            and reliable infrastructure.
          </p>
        </div>

        {/* 3. AI BUILDS CARD */}
        <div
          id="kape-tools"
          className="bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 flex flex-col justify-between group hover:border-cerulean-300 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                <Lightbulb className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                AI BUILDS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-surface-muted">
              Agents, RAG chatbots and the tools I run on them.
            </p>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 my-5">
            {[
              "KapeAI",
              "KapeSEO",
              "KAPE Reel workflow",
              "Kape AI knowledge search",
              "Autonomous Triage Agent",
              "Supabase Vector Embeddings",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-cerulean-50 text-cerulean-800 border border-cerulean-200/70 hover:bg-cerulean-100 transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cerulean-500"></span>
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[11px] text-surface-muted">
            Building intelligent pipelines connected directly with OpenAI, Claude, and PostgreSQL vector stores.
          </p>
        </div>

        {/* 4. CREDENTIALS CARD */}
        <div className="bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 flex flex-col justify-between group hover:border-cerulean-300 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                <Shield className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                CREDENTIALS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-surface-muted">
              {credential.title}
            </p>
          </div>

          {/* Circular badge / certificate seal */}
          <div className="my-5 flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full border-4 border-dashed border-cerulean-300 p-2 flex items-center justify-center bg-cerulean-50/50 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-cerulean-700 text-white flex flex-col items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6 text-white mb-0.5" />
                <span className="text-[8px] uppercase tracking-wider font-extrabold">
                  VERIFIED
                </span>
              </div>
            </div>
            <span className="mt-3 px-3 py-1 rounded-full bg-cerulean-900 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
              {credential.badge_label || "Certified Admin"}
            </span>
          </div>

          <p className="text-xs text-surface-muted text-center">
            HighLevel Admin Certified & Production AI Workflow Specialist.
          </p>
        </div>

        {/* 5. SERVICES CARD */}
        <div
          id="services"
          className="bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 flex flex-col justify-between group hover:border-cerulean-300 transition-all duration-300"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                <Layers className="w-4 h-4" />
              </span>
              <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                SERVICES
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-surface-muted">
              What I build for coaches and agencies.
            </p>
          </div>

          {/* Numbered List 01-05 */}
          <div className="divide-y divide-cerulean-100/80 my-3">
            {services.map((service) => (
              <div
                key={service.order_number}
                className="py-2.5 flex items-center justify-between group/srv hover:bg-cerulean-50/50 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1 rounded-md bg-cerulean-50 border border-cerulean-200/50">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-cerulean-950">
                    {service.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-cerulean-500">
                  {service.order_number}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-xs font-bold text-cerulean-600 hover:text-cerulean-800 flex items-center justify-between pt-2 border-t border-cerulean-100"
          >
            <span>Request custom build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6. TESTIMONIALS CARD (Wide, spans remaining columns on large screens) */}
        <div
          id="testimonials"
          className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl border border-cerulean-100/90 shadow-card p-5 sm:p-6 group hover:border-cerulean-300 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-1.5 rounded-lg bg-badge-orangeBg text-badge-orange border border-badge-orange/20 shadow-xs">
                  <Quote className="w-4 h-4" />
                </span>
                <h2 className="text-xs font-extrabold tracking-wider uppercase text-cerulean-900">
                  TESTIMONIALS
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-surface-muted">
                What the people I build for say about the work.
              </p>
            </div>
          </div>

          {/* Testimonial Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {testimonials.map((t, idx) => (
              <div
                key={t.id || idx}
                className="p-4 rounded-xl bg-cerulean-50/60 border border-cerulean-100 flex flex-col justify-between hover:bg-cerulean-100/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-badge-orange"></span>
                    <h3 className="text-xs font-bold text-cerulean-950">
                      {t.client_name}
                    </h3>
                  </div>
                  <p className="text-[11px] font-medium text-cerulean-700">
                    {t.role}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-cerulean-200/50">
                  <p className="text-[10px] font-mono text-surface-muted">
                    {t.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
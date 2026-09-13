"use client";

import React, { useState } from "react";
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

// Extra dummy frames the preview cycles through alongside the real `project`
// prop. The real project always plays first; edit/replace these freely.
const dummyProjectFrames = [
  {
    title: "Autonomous Knowledge Retrieval (RAG)",
    description:
      "Postgres pgvector search pipeline connecting company docs with Claude and GPT-4 for internal agent triage.",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Security & Role Compliance Gateway",
    description:
      "Automated permission auditing and role-based access control policies for distributed technical teams.",
    image_url:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Headless Commerce Checkout Funnel",
    description:
      "Custom Shopify + Next.js storefront with abandoned-cart recovery flows across three payment processors.",
    image_url:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Zero-Downtime CI/CD Pipeline",
    description:
      "GitHub Actions to blue-green deploys on ECS, with automated rollback triggers on failed health checks.",
    image_url:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
  },
];

export function BentoGrid({
  project,
  services,
  testimonials,
  credential,
}: BentoGridProps) {
  const [activeAboutTab, setActiveAboutTab] = useState<
    "profile" | "education" | "extras"
  >("profile");

  const aboutTabs = [
    { id: "profile" as const, label: "Profile" },
    { id: "education" as const, label: "Education" },
    { id: "extras" as const, label: "Extras" },
  ];
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

  // Real project plays first, dummy frames follow in the scroll loop.
  const previewFrames = [
    {
      title: project.title,
      description:
        "High-converting funnels, automated workflows, and CRM logic built to solve operational bottlenecks.",
      image_url: project.image_url,
    },
    ...dummyProjectFrames,
  ];

  // The track renders the list twice back-to-back and scrolls up by exactly
  // one set's worth (-50% of the doubled track) so the loop is seamless.
  const SECONDS_PER_FRAME = 3.2;
  const TOTAL_SECONDS = previewFrames.length * SECONDS_PER_FRAME;
  const FRAME_HEIGHT_CLASS = "h-[108px] sm:h-[120px]";

  return (
    <div className="w-full bg-cerulean-100/40 p-2.5 sm:p-3.5 rounded-3xl border border-cerulean-200/60 shadow-sm flex flex-col justify-between gap-3">
      {/* Top Row: Projects (5 cols), About (3 cols), AI Tools (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* 1. PROJECTS CARD */}
        <div className="projects-bento-card lg:col-span-5 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all">
          <div className="flex items-center justify-between mb-2">
            <Link href="/projects" className="flex items-center gap-2 group">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <FolderSimple weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900 group-hover:text-cerulean-600 transition-colors">
                PROJECTS
              </h2>
            </Link>
            <Link
              href="/projects"
              className="text-[10px] font-bold text-cerulean-600 hover:underline flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-cerulean-200/80 bg-white shadow-sm flex-1 min-h-[132px] flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-cerulean-50/60 border-b border-cerulean-100 relative z-10 shrink-0">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="ml-2 text-[10px] text-cerulean-700/60 font-mono">
                brewedops.app
              </span>
            </div>

            <div className={`relative overflow-hidden ${FRAME_HEIGHT_CLASS}`}>
              <div className="proj-track flex flex-col">
                {[...previewFrames, ...previewFrames].map((frame, i) => (
                  <div
                    key={i}
                    className={`shrink-0 w-full p-2.5 sm:p-3 grid grid-cols-12 gap-2.5 items-center ${FRAME_HEIGHT_CLASS}`}
                  >
                    <div className="col-span-7 space-y-1">
                      <h3 className="text-xs font-bold text-cerulean-950 leading-snug line-clamp-2">
                        {frame.title}
                      </h3>
                      <p className="text-[10px] text-surface-muted leading-relaxed line-clamp-2">
                        {frame.description}
                      </p>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-cerulean-600 hover:text-cerulean-800 pt-0.5"
                      >
                        <span>Explore system</span>
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>

                    <div className="col-span-5 rounded-lg overflow-hidden border border-cerulean-100 shadow-inner">
                      <img
                        src={frame.image_url}
                        alt={frame.title}
                        className="w-full h-20 sm:h-24 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. ABOUT CARD */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all text-center">
          <div className="flex items-center justify-between">
            <Link href="/about" className="flex items-center gap-2 group">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <User weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900 group-hover:text-cerulean-600">
                ABOUT
              </h2>
            </Link>
            <Link
              href="/about"
              className="text-[10px] font-bold text-cerulean-600 hover:underline flex items-center gap-0.5"
            >
              <span>Read</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
          </div>

          <div className="my-1 flex justify-center items-center">
            <div className="relative w-full h-8 rounded-2xl  p-1.5 flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold text-cerulean-950">
                Maria Rochelle Quelonio
              </p>
              <p className="text-[9px] text-cerulean-700 font-medium">
                Ops & Security
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mb-1">
            {aboutTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveAboutTab(tab.id)}
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide transition-colors ${
                  activeAboutTab === tab.id
                    ? "bg-cerulean-900 text-white"
                    : "bg-cerulean-50 text-cerulean-700 border border-cerulean-200/70 hover:bg-cerulean-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            key={activeAboutTab}
            className="about-tab-content min-h-[36px] flex flex-col items-center justify-center gap-0.5"
          >
            {activeAboutTab === "profile" && (
              <>
                <p className="text-[11px] font-bold text-cerulean-950">
                  24 years old
                </p>
                <p className="text-[10px] text-surface-muted">
                  Pasig City, Philippines
                </p>
              </>
            )}

            {activeAboutTab === "education" && (
              <>
                <p className="text-[11px] font-bold text-cerulean-950">
                  BS Information Technology
                </p>
                <p className="text-[10px] text-surface-muted">
                  Polytechnic University of the Philippines — Lopez
                </p>
              </>
            )}

            {activeAboutTab === "extras" && (
              <div className="flex flex-wrap justify-center gap-1">
                {/* Placeholder cert — swap for your actual one(s) */}
                <span className="px-2 py-0.5 rounded-full bg-cerulean-50 text-cerulean-800 border border-cerulean-200/70 text-[9px] font-semibold">
                  Automation & Workflow Specialist
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 3. AI TOOLS CARD */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all">
          <div className="flex items-center justify-between mb-1">
            <Link href="/ai-tools" className="flex items-center gap-2 group">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <Sparkle weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900 group-hover:text-cerulean-600">
                AI TOOLS
              </h2>
            </Link>
            <Link
              href="/ai-tools"
              className="text-[10px] font-bold text-cerulean-600 hover:underline flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
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

      {/* Bottom Row: Credentials (3 cols), Services (3 cols), Testimonials (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* 4. CREDENTIALS CARD */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all text-center">
          <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
            <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
              <ShieldCheck weight="fill" className="w-3.5 h-3.5" />
            </span>
            <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900">
              CREDENTIALS
            </h2>
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

        {/* 5. SERVICES CARD */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all">
          <div className="flex items-center justify-between mb-1">
            <Link href="/services" className="flex items-center gap-2 group">
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <Stack weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900 group-hover:text-cerulean-600">
                SERVICES
              </h2>
            </Link>
            <Link
              href="/services"
              className="text-[10px] font-bold text-cerulean-600 hover:underline flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
          </div>

          <div className="divide-y divide-cerulean-100/80 my-1">
            {services.map((service) => (
              <Link
                key={service.order_number}
                href="/services"
                className="py-1 flex items-center justify-between group hover:bg-cerulean-50/60 px-1 rounded transition-colors"
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
              </Link>
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

        {/* 6. TESTIMONIALS CARD */}
        <div className="lg:col-span-6 bg-white/95 backdrop-blur-sm rounded-2xl border border-cerulean-100 shadow-card p-3.5 sm:p-4 flex flex-col justify-between hover:border-cerulean-300 transition-all">
          <div className="flex items-center justify-between mb-2">
            <Link
              href="/testimonials"
              className="flex items-center gap-2 group"
            >
              <span className="p-1 rounded-md bg-badge-orangeBg text-badge-orange border border-badge-orange/20">
                <Quotes weight="fill" className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-[11px] font-extrabold tracking-wider uppercase text-cerulean-900 group-hover:text-cerulean-600">
                TESTIMONIALS
              </h2>
            </Link>
            <Link
              href="/testimonials"
              className="text-[10px] font-bold text-cerulean-600 hover:underline flex items-center gap-0.5"
            >
              <span>View all</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </Link>
          </div>

          <div className="space-y-1.5">
            {testimonials.map((t, idx) => (
              <Link
                key={t.id || idx}
                href="/testimonials"
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aboutTabFadeIn {
          from {
            opacity: 0;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-tab-content {
          animation: aboutTabFadeIn 0.2s ease;
        }

        @keyframes projAutoScroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        .proj-track {
          animation: projAutoScroll ${TOTAL_SECONDS}s linear infinite;
          animation-play-state: paused;
        }

        .projects-bento-card:hover .proj-track {
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
}

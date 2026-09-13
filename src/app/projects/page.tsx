"use client";

import React, { useMemo, useState } from "react";
import {
  FolderSimple,
  ArrowUpRight,
  ArrowRight,
  MagnifyingGlass,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

type Stat = { label: string; value: string; valueClass?: string };

type Project = {
  id: string;
  size: "hero" | "wide" | "compact";
  category: string;
  tag: string;
  tagClass: string;
  badge?: string;
  title: string;
  description: string;
  stats: Stat[];
  stack: string[];
  footerLabel: string;
  footerValue?: string;
};

const CATEGORIES = [
  "All Systems",
  "CRM & HighLevel",
  "Agentic AI & RAG",
  "Custom Webhooks & Ops",
  "E-Commerce Funnels",
];

const projects: Project[] = [
  {
    id: "crm-architecture",
    size: "hero",
    category: "CRM & HighLevel",
    tag: "GoHighLevel & Webhooks",
    tagClass: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
    badge: "Production Ready",
    title: "Automated Enterprise CRM Architecture",
    description:
      "End-to-end multi-pipeline client onboarding, automated SMS/email sequences, and webhook routers handling 20,000+ leads monthly across 14 synchronized sub-accounts with zero packet loss.",
    stats: [
      { label: "Monthly Leads", value: "20,000+" },
      {
        label: "Webhook SLA",
        value: "99.98%",
        valueClass: "text-cerulean-700",
      },
      {
        label: "Pipeline Velocity",
        value: "< 1.2s",
        valueClass: "text-emerald-600",
      },
    ],
    stack: [
      "GoHighLevel",
      "Make / Webhooks",
      "PostgreSQL",
      "Next.js",
      "Claude API",
    ],
    footerLabel: "brewedops.app/crm",
  },
  {
    id: "rag-retrieval",
    size: "wide",
    category: "Agentic AI & RAG",
    tag: "AI & Vector Databases",
    tagClass: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Autonomous Knowledge Retrieval (RAG)",
    description:
      "Self-updating vector search engine connected to client documentation, Slack threads, and Notion workspaces with agentic query re-writing.",
    stats: [
      { label: "Latency", value: "< 450ms" },
      {
        label: "Retrieval Accuracy",
        value: "0.94 cosine",
        valueClass: "text-cerulean-700",
      },
      {
        label: "Ticket Deflection",
        value: "85%",
        valueClass: "text-emerald-600",
      },
    ],
    stack: ["Supabase pgvector", "Claude Sonnet", "LangChain", "Python"],
    footerLabel: "85% Ticket Deflection Rate",
  },
  {
    id: "security-gateway",
    size: "wide",
    category: "Custom Webhooks & Ops",
    tag: "Cybersecurity & RBAC",
    tagClass: "bg-rose-50 text-rose-700 border-rose-200",
    title: "Security & Role Compliance Gateway",
    description:
      "Automated user permission auditing, server asset tracking, and role-based access control policies for distributed technical teams.",
    stats: [
      { label: "Audit Trail", value: "Immutable Hash" },
      {
        label: "Key Rotation",
        value: "Every 30 Days",
        valueClass: "text-cerulean-700",
      },
      {
        label: "Compliance",
        value: "HIPAA & GDPR",
        valueClass: "text-emerald-600",
      },
    ],
    stack: ["Cloudflare WAF", "Vault KMS", "Auth0"],
    footerLabel: "100% Audit Pass",
  },
  {
    id: "checkout-funnel",
    size: "compact",
    category: "E-Commerce Funnels",
    tag: "E-Commerce & Payments",
    tagClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Headless Commerce Checkout Funnel",
    description:
      "Custom Shopify + Next.js storefront with abandoned-cart recovery flows and a unified webhook ledger across three payment processors.",
    stats: [
      { label: "Checkout Success", value: "98.4%" },
      { label: "Cart Recovery", value: "+34%", valueClass: "text-emerald-600" },
      {
        label: "Processors",
        value: "3 unified",
        valueClass: "text-cerulean-700",
      },
    ],
    stack: ["Shopify Headless", "Stripe Webhooks", "Klaviyo SMS"],
    footerLabel: "$1.2M+ Annual Volume",
  },
  {
    id: "cicd-pipeline",
    size: "compact",
    category: "Custom Webhooks & Ops",
    tag: "DevOps & Automation",
    tagClass: "bg-cerulean-50 text-cerulean-700 border-cerulean-200",
    title: "Zero-Downtime CI/CD Pipeline",
    description:
      "GitHub Actions to blue-green deploys on ECS, with automated schema migrations and rollback triggers on failed health checks.",
    stats: [
      { label: "Deploy Frequency", value: "Multiple / day" },
      { label: "Rollback Rate", value: "0.4%", valueClass: "text-emerald-600" },
      { label: "Uptime", value: "99.99%", valueClass: "text-cerulean-700" },
    ],
    stack: ["GitHub Actions", "AWS ECS", "Terraform"],
    footerLabel: "Zero Downtime Deploys",
  },
  {
    id: "support-concierge",
    size: "compact",
    category: "Agentic AI & RAG",
    tag: "AI & Customer Ops",
    tagClass: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Multi-Channel Support Concierge",
    description:
      "LLM-backed triage bot routing email, chat, and SMS support tickets by intent, with human handoff and sentiment escalation.",
    stats: [
      {
        label: "Speed-to-Response",
        value: "< 15 sec",
        valueClass: "text-emerald-600",
      },
      { label: "Auto-Resolved", value: "61%", valueClass: "text-cerulean-700" },
      { label: "Satisfaction", value: "4.9 / 5" },
    ],
    stack: ["Twilio API", "OpenAI Tools", "Zendesk"],
    footerLabel: "4.9/5 satisfaction",
  },
];

const toolsEngineeredWith = [
  "Cursor",
  "Hermes AI",
  "GoHighLevel",
  "Lightspeed",
  "Zendesk & Slack",
  "Claude Sonnet",
  "Supabase",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Systems");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "All Systems" || p.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const hero = filteredProjects.find((p) => p.size === "hero");
  const rest = filteredProjects.filter((p) => p.size !== "hero");

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-4 sm:p-6 lg:p-10">
      {/* Header */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-cerulean-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerulean-100/80 border border-cerulean-200 text-cerulean-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-cerulean-600 animate-pulse" />
              Portfolio & Engineering Showcase
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-cerulean-950 tracking-tight">
              Projects & Production Systems
            </h1>
            <p className="mt-2 text-surface-muted text-sm sm:text-base max-w-3xl leading-relaxed">
              Battle-tested funnels, autonomous multi-agent pipelines, and
              secure enterprise workflows built to solve real operational
              bottlenecks.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cerulean-950 hover:bg-cerulean-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="inline-flex items-center gap-2 bg-white/90 border border-cerulean-100 px-3.5 py-2 rounded-xl text-xs font-mono text-cerulean-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span className="font-medium">3,037 visits</span>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                  activeCategory === cat
                    ? "bg-cerulean-950 text-white shadow-sm"
                    : "bg-white text-cerulean-700 border border-cerulean-100 hover:border-cerulean-300 hover:text-cerulean-900"
                }`}
              >
                {cat === "All Systems"
                  ? `All Systems (${projects.length})`
                  : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-56">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search architecture..."
                className="w-full bg-white border border-cerulean-100 focus:border-cerulean-400 focus:ring-1 focus:ring-cerulean-400 text-xs rounded-xl px-3 py-1.5 pl-8 text-cerulean-800 placeholder-cerulean-300 shadow-sm transition outline-none"
              />
              <MagnifyingGlass className="w-3.5 h-3.5 text-cerulean-300 absolute left-2.5 top-2.5" />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium whitespace-nowrap bg-emerald-50 border border-emerald-200/60 px-2.5 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Systems
            </div>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {hero && (
          <article className="project-card lg:col-span-12 bg-white rounded-2xl border border-cerulean-100 shadow-sm overflow-hidden flex flex-col xl:flex-row hover:border-cerulean-300 transition-all duration-300">
            <div className="p-6 sm:p-8 xl:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border ${hero.tagClass}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cerulean-500" />
                    {hero.tag}
                  </span>
                  {hero.badge && (
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                      {hero.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-cerulean-950 tracking-tight leading-tight">
                  {hero.title}
                </h2>
                <p className="mt-3 text-surface-muted text-sm leading-relaxed">
                  {hero.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {hero.stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-cerulean-50/60 border border-cerulean-100 p-2.5 rounded-xl text-center"
                    >
                      <div
                        className={`font-extrabold text-base sm:text-lg font-mono ${s.valueClass || "text-cerulean-950"}`}
                      >
                        {s.value}
                      </div>
                      <div className="text-[11px] text-surface-muted font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {hero.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-cerulean-50 text-cerulean-800 text-xs font-mono rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-cerulean-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-cerulean-600 hover:bg-cerulean-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm">
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    className="px-3.5 py-2 text-cerulean-700 hover:text-cerulean-900 text-xs font-semibold rounded-xl hover:bg-cerulean-50 transition flex items-center gap-1"
                    href="#"
                  >
                    Live Demo <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <span className="text-[11px] font-mono text-cerulean-400">
                  {hero.footerLabel}
                </span>
              </div>
            </div>

            {/* Dark mockup panel */}
            <div className="xl:w-1/2 bg-cerulean-950 p-3 sm:p-5 flex flex-col justify-between border-t xl:border-t-0 xl:border-l border-cerulean-900 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-cerulean-900 text-xs text-cerulean-300 font-mono">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-2 text-cerulean-300 font-medium">
                    pipeline-telemetry.v3
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cerulean-900 text-cerulean-300 border border-cerulean-800">
                  GHL Webhook Router
                </span>
              </div>

              <div className="relative my-3 rounded-xl overflow-hidden border border-cerulean-900 bg-cerulean-950/80 p-4">
                <div className="flex items-center justify-between text-xs text-cerulean-300 font-mono mb-3">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Dispatcher Stream Active
                  </span>
                  <span>Buffer: 0ms lag</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-cerulean-900/90 border border-cerulean-800 text-cerulean-200">
                    <div className="text-[10px] text-cerulean-400">
                      INPUT SOURCE
                    </div>
                    <div className="font-bold text-white mt-1">Lead Ingest</div>
                    <div className="text-[10px] text-emerald-400 mt-1">
                      ✓ Verified 200 OK
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-cerulean-900/90 border border-cerulean-800 text-amber-300">
                    <div className="text-[10px] text-cerulean-400">
                      MIDDLEWARE
                    </div>
                    <div className="font-bold text-white mt-1">
                      Dedupe & Score
                    </div>
                    <div className="text-[10px] text-cerulean-300 mt-1">
                      LangChain Triage
                    </div>
                  </div>
                  <div className="p-2.5 rounded bg-cerulean-900/90 border border-cerulean-800 text-purple-300">
                    <div className="text-[10px] text-cerulean-400">
                      DISPATCH
                    </div>
                    <div className="font-bold text-white mt-1">
                      14 Subaccounts
                    </div>
                    <div className="text-[10px] text-purple-300 mt-1">
                      Zero Latency
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-black/40 rounded-lg font-mono text-[11px] text-cerulean-200 leading-relaxed overflow-x-auto">
                  <p className="text-cerulean-500">
                    // Real-time Router Log [Production Node 04]
                  </p>
                  <p>
                    <span className="text-cerulean-300">POST</span>{" "}
                    /v1/lead/onboard{" "}
                    <span className="text-emerald-400">201 Created</span>{" "}
                    (142ms)
                  </p>
                  <p>
                    <span className="text-amber-300">ROUTER</span> →
                    GHL_Pipeline: "Commercial VIP" → Assigned
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-cerulean-400 pt-2 border-t border-cerulean-900">
                <span>Security: TLS 1.3 | HMAC Verified</span>
                <span className="text-cerulean-300">inspect schema ↗</span>
              </div>
            </div>
          </article>
        )}

        {rest.map((p) => (
          <article
            key={p.id}
            className={`project-card ${
              p.size === "wide" ? "lg:col-span-6" : "lg:col-span-4"
            } bg-white rounded-2xl border border-cerulean-100 shadow-sm p-6 flex flex-col justify-between hover:border-cerulean-300 transition-all duration-300`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border ${p.tagClass}`}
                >
                  {p.tag}
                </span>
              </div>
              <h3
                className={`${p.size === "wide" ? "text-xl" : "text-lg"} font-bold text-cerulean-950 tracking-tight`}
              >
                {p.title}
              </h3>
              <p className="mt-2 text-surface-muted text-xs sm:text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4 p-3 bg-cerulean-50/50 rounded-xl border border-cerulean-100 font-mono text-[11px] text-cerulean-800 space-y-1">
                {p.stats.map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-surface-muted">{s.label}:</span>
                    <strong className={s.valueClass || "text-cerulean-900"}>
                      {s.value}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-cerulean-50 text-cerulean-700 text-[11px] font-mono rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-cerulean-100 flex items-center justify-between">
              <span className="text-[11px] text-surface-muted font-mono">
                {p.footerLabel}
              </span>
              <a
                className="text-xs font-bold text-cerulean-600 hover:text-cerulean-800 flex items-center gap-1"
                href="#"
              >
                Inspect <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <div className="lg:col-span-12 text-center py-16 text-surface-muted text-sm">
            No projects match that filter yet.
          </div>
        )}
      </section>

      {/* Metrics banner */}
      <section className="bg-gradient-to-r from-cerulean-950 via-cerulean-900 to-cerulean-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-cerulean-900">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-cerulean-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck weight="fill" className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-cerulean-300">
                Live Infrastructure Health
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to automate your operations or fix fragile workflows?
            </h3>
            <p className="text-xs sm:text-sm text-cerulean-300 mt-1 max-w-2xl">
              Systems designed for resilient scalability, zero lead drop-off,
              and crystal-clear visibility from day one.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-cerulean-500 hover:bg-cerulean-400 text-white font-bold text-xs tracking-wide transition shadow-lg shadow-cerulean-500/25 whitespace-nowrap"
            >
              Schedule Architecture Audit
            </a>
            <a
              href="#services"
              className="px-4 py-3 rounded-xl bg-cerulean-900/80 hover:bg-cerulean-800/80 text-cerulean-100 border border-cerulean-800 font-semibold text-xs transition whitespace-nowrap"
            >
              View Services & Rates
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cerulean-900/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: "140k+", label: "Leads Processed", cls: "text-white" },
            {
              value: "42+",
              label: "Active Pipelines",
              cls: "text-cerulean-300",
            },
            {
              value: "99.99%",
              label: "Reliability SLA",
              cls: "text-emerald-400",
            },
            {
              value: "< 15 min",
              label: "Escalation Response",
              cls: "text-amber-300",
            },
          ].map((m) => (
            <div
              key={m.label}
              className="p-3 bg-cerulean-900/40 rounded-xl border border-cerulean-800/50"
            >
              <div
                className={`text-xl sm:text-2xl font-extrabold font-mono ${m.cls}`}
              >
                {m.value}
              </div>
              <div className="text-[11px] text-cerulean-300 uppercase tracking-wider mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools strip */}
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cerulean-100 p-5 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-3.5 h-3.5 text-cerulean-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-cerulean-400 font-bold">
              Engineered With
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-cerulean-700">
            {toolsEngineeredWith.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-lg bg-cerulean-50 border border-cerulean-200/60 flex items-center gap-1.5"
              >
                <FolderSimple className="w-3 h-3 text-cerulean-500" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

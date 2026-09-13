import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Stack, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function ServicesPage() {
  const serviceList = [
    {
      num: "01",
      title: "Coded Funnels & Landing Engines",
      desc: "Pixel-perfect, high-speed landing pages and funnel workflows engineered with Next.js and Tailwind to turn paid traffic into qualified leads.",
      deliverables: ["Custom conversion components", "Sub-second loading times", "A/B split-testing architecture"],
    },
    {
      num: "02",
      title: "GHL Automation & Pipeline Logic",
      desc: "Full GoHighLevel ecosystem design. Automated lead nurture sequences, calendar scheduling, review generation, and automated deal triage.",
      deliverables: ["Custom webhook triggers", "Zero lead-drop architecture", "Multi-stage pipeline automation"],
    },
    {
      num: "03",
      title: "CRM Setup & Database Migration",
      desc: "Structured data models, contacts cleansing, custom field provisioning, and syncing legacy spreadsheets into live relational databases.",
      deliverables: ["Postgres / Supabase integration", "Data migration scripts", "RBAC role permissions"],
    },
    {
      num: "04",
      title: "Custom Website Architecture",
      desc: "Modern responsive web applications built for reliability, accessibility, and high performance across mobile and desktop displays.",
      deliverables: ["Full responsive design", "SEO & metadata best practices", "Modern headless CMS setup"],
    },
    {
      num: "05",
      title: "App & API Connectors",
      desc: "Connecting third-party systems using REST APIs, serverless functions, and real-time event webhooks without manual intervention.",
      deliverables: ["Stripe & payment gateways", "Custom webhook handlers", "Automated error logging"],
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-5xl mx-auto space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-cerulean-600 hover:text-cerulean-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <span className="text-[10px] font-bold tracking-wider uppercase text-cerulean-600 block mb-1">
          FULL CAPABILITIES
        </span>
        <h1 className="text-3xl font-extrabold text-cerulean-950 tracking-tight">
          Services & Technical Solutions
        </h1>
        <p className="text-sm text-surface-muted mt-1 max-w-2xl">
          Everything you need to automate workflows, safeguard data, and scale operations effortlessly.
        </p>
      </div>

      <div className="space-y-4">
        {serviceList.map((s) => (
          <div key={s.num} className="bg-white/95 backdrop-blur-md rounded-2xl border border-cerulean-100 shadow-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cerulean-300 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-xl font-mono font-black text-cerulean-500 bg-cerulean-50 px-3 py-1.5 rounded-xl border border-cerulean-100 shrink-0">
                {s.num}
              </span>
              <div className="space-y-1">
                <h2 className="text-base font-bold text-cerulean-950">
                  {s.title}
                </h2>
                <p className="text-xs text-surface-muted leading-relaxed max-w-xl">
                  {s.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  {s.deliverables.map((d) => (
                    <span key={d} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-cerulean-800">
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-500" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="shrink-0 px-4 py-2 rounded-xl bg-cerulean-900 text-white hover:bg-cerulean-800 text-xs font-bold inline-flex items-center gap-1.5 self-start md:self-center"
            >
              <span>Book Service</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
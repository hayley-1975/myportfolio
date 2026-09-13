import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight,  } from "@phosphor-icons/react/dist/ssr";

export default function AIToolsPage() {
  const tools = [
    {
      name: "KapeAI",
      category: "Autonomous Agent",
      status: "Production",
      description: "Conversational agent connected directly with customer histories, automating customer triage and ticket categorization.",
    },
    {
      name: "KapeSEO",
      category: "Content Automation",
      status: "Production",
      description: "Generates data-backed content outlines, keyword clusters, and structured schema markup at scale.",
    },
    {
      name: "KAPE Reel Workflow",
      category: "Media Pipeline",
      status: "Active",
      description: "Automated video asset pipeline extracting short-form video hooks, caption alignments, and social format renders.",
    },
    {
      name: "Kape AI Knowledge Search",
      category: "Semantic Vector Search",
      status: "Production",
      description: "Vector embedding engine searching through internal SOPs and databases to supply verified citations to client prompts.",
    },
    {
      name: "Autonomous Triage Agent",
      category: "Incident Response",
      status: "Active",
      description: "Real-time monitoring bot that catches server drops or failed webhooks and alerts administrators via Discord and SMS.",
    },
    {
      name: "Supabase Vector Engine",
      category: "Embeddings Infrastructure",
      status: "Production",
      description: "Postgres vector database storing thousands of text embeddings for instant semantic cosine similarity search.",
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-5xl mx-auto space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-cerulean-600 hover:text-cerulean-800 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>
        <span className="text-[10px] font-bold tracking-wider uppercase text-cerulean-600 block mb-1">
          AUTONOMOUS WORKFLOWS
        </span>
        <h1 className="text-3xl font-extrabold text-cerulean-950 tracking-tight">
          AI Tools & Agent Ecosystem
        </h1>
        <p className="text-sm text-surface-muted mt-1 max-w-2xl">
          Intelligent pipelines, RAG chatbots, and autonomous agents designed to eliminate repetitive operational tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tools.map((t) => (
          <div key={t.name} className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-cerulean-100 shadow-card flex flex-col justify-between hover:border-cerulean-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cerulean-50 text-cerulean-700 text-[10px] font-bold border border-cerulean-200">
                  {t.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {t.status}
                </span>
              </div>
              <h2 className="text-base font-bold text-cerulean-950 mt-1">
                {t.name}
              </h2>
              <p className="text-xs text-surface-muted mt-2 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-cerulean-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-cerulean-600 font-semibold">
                REST API · Webhooks · OpenAI
              </span>
              <Link href="/contact" className="text-xs font-bold text-cerulean-700 hover:text-cerulean-900 inline-flex items-center gap-1">
                <span>Deploy</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
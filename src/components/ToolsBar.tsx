"use client";

import React from "react";
import { ToolItem } from "@/types";
import {
  Sparkles,
  Terminal,
  Code,
  Bot,
  Laptop,
  Layers,
  Zap,
  Cpu,
} from "lucide-react";

interface ToolsBarProps {
  tools: ToolItem[];
}

export function ToolsBar({ tools }: ToolsBarProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "sparkles":
        return <Sparkles className="w-3 h-3 text-amber-500" />;
      case "terminal":
        return <Terminal className="w-3 h-3 text-slate-700" />;
      case "code":
        return <Code className="w-3 h-3 text-cerulean-600" />;
      case "bot":
        return <Bot className="w-3 h-3 text-indigo-500" />;
      case "laptop":
        return <Laptop className="w-3 h-3 text-blue-500" />;
      case "layers":
        return <Layers className="w-3 h-3 text-cerulean-600" />;
      case "zap":
        return <Zap className="w-3 h-3 text-amber-500" />;
      case "zendesk":
        return (
          <span className="text-[11px] font-black text-emerald-600 tracking-tighter">
            Z
          </span>
        );
      case "intercom":
        return (
          <span className="text-[11px] font-black text-blue-500 tracking-tighter">
            {"//"}
          </span>
        );
      case "slack":
        return (
          <span className="text-[11px] font-black text-amber-500 tracking-tighter">
            #
          </span>
        );
      default:
        return <Cpu className="w-3 h-3 text-cerulean-500" />;
    }
  };

  // Speed scales with item count so a longer list doesn't feel rushed.
  const SECONDS_PER_TOOL = 2.5;
  const TOTAL_SECONDS = Math.max(tools.length * SECONDS_PER_TOOL, 8);

  const renderBadge = (tool: ToolItem, key: string) => (
    <div
      key={key}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cerulean-50/70 border border-cerulean-200/50 text-[11px] font-semibold text-cerulean-900 shrink-0 hover:bg-cerulean-100/70 transition-all cursor-default"
    >
      {renderIcon(tool.icon || tool.name)}
      <span>{tool.name}</span>
    </div>
  );

  return (
    <div className="tools-marquee-bar w-full bg-white/95 backdrop-blur-md rounded-2xl border border-cerulean-100 shadow-soft px-3 py-2 flex flex-col md:flex-row md:items-center gap-3">
      {/* Left label */}
      <div className="shrink-0 md:pr-3 md:border-r border-cerulean-100 flex items-center md:block gap-2">
        <span className="block text-[9px] font-bold tracking-wider uppercase text-cerulean-600">
          DAILY DRIVERS
        </span>
        <span className="text-xs font-bold text-cerulean-950">
          Tools I work with
        </span>
      </div>

      {/* Marquee viewport */}
      <div className="relative flex-1 min-w-0 overflow-hidden py-0.5 marquee-viewport">
        <div className="marquee-track flex items-center gap-2 w-max">
          {tools.map((tool) => renderBadge(tool, `a-${tool.name}`))}
          {tools.map((tool) => renderBadge(tool, `b-${tool.name}`))}
        </div>
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />
      </div>

      <style jsx>{`
        @keyframes toolsMarqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: toolsMarqueeScroll ${TOTAL_SECONDS}s linear infinite;
        }

        .tools-marquee-bar:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 24px;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0)
          );
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0)
          );
        }
      `}</style>
    </div>
  );
}

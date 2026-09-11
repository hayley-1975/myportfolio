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

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl border border-cerulean-100 shadow-soft px-3 py-2 flex flex-col md:flex-row md:items-center gap-3">
      {/* Left label */}
      <div className="shrink-0 md:pr-3 md:border-r border-cerulean-100 flex items-center md:block gap-2">
        <span className="block text-[9px] font-bold tracking-wider uppercase text-cerulean-600">
          DAILY DRIVERS
        </span>
        <span className="text-xs font-bold text-cerulean-950">
          Tools I work with
        </span>
      </div>

      {/* Horizontal Badges */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cerulean-50/70 border border-cerulean-200/50 text-[11px] font-semibold text-cerulean-900 shrink-0 hover:bg-cerulean-100/70 transition-all cursor-default"
          >
            {renderIcon(tool.icon || tool.name)}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

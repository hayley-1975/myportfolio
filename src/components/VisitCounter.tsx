"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { incrementPageView } from "@/app/actions/analytics";

interface VisitCounterProps {
  initialCount: number;
}

export function VisitCounter({ initialCount }: VisitCounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    let isMounted = true;

    // Increment page view on mount
    incrementPageView("home")
      .then((liveCount) => {
        if (isMounted && liveCount) {
          setCount(liveCount);
        }
      })
      .catch((err) => {
        console.warn("Could not log view counter:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <aside
      aria-label="Live site visitor statistics"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cerulean-900 text-white shadow-lg border border-cerulean-700/80 backdrop-blur-md text-xs font-semibold hover:scale-105 transition-transform cursor-pointer group"
      title="Live tracked visitors"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Eye className="w-3.5 h-3.5 text-cerulean-300 group-hover:text-white transition-colors" />
      <span className="tracking-wide font-mono">
        {count.toLocaleString()} visits
      </span>
    </aside>
  );
}
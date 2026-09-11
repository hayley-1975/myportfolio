"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  FolderSimple,
  Wrench,
  Sparkle,
  ChatCircleText,
  User,
  EnvelopeSimple,
  SealCheck,
} from "@phosphor-icons/react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/#", icon: House },
    { label: "Projects", href: "#projects", icon: FolderSimple },
    { label: "Services", href: "#services", icon: Wrench },
    { label: "Kape Tools", href: "#ai-builds", icon: Sparkle },
    { label: "Testimonials", href: "#testimonials", icon: ChatCircleText },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "/contact", icon: EnvelopeSimple },
  ];

  return (
    <aside className="w-full lg:w-64 bg-transparent flex flex-col justify-between shrink-0 min-h-screen lg:fixed lg:left-0 lg:top-0 lg:bottom-0 p-5 z-40">
      {/* Top Profile Header */}
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full ring-2 ring-cerulean-400 p-1 bg-gradient-to-tr from-cerulean-500 to-cerulean-200 shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Maria Rochelle"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Name */}
          <div className="mt-3 flex items-center gap-1.5 justify-center">
            <h1 className="text-base font-bold text-cerulean-950 tracking-tight">
              Maria Rochelle
            </h1>
            <SealCheck weight="fill" className="w-4 h-4 text-cerulean-500" />
          </div>

          {/* Tagline / Handle */}
          <p className="text-[10px] font-bold text-cerulean-600 tracking-wider mt-0.5 uppercase">
            SYSTEMS. SECURITY. AUTOMATION.
          </p>

          {/* Social Icons: LinkedIn, Upwork, Gmail */}
          <div className="flex items-center justify-center gap-2 mt-3.5 text-cerulean-800">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/70 backdrop-blur-sm border border-cerulean-100 hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors shadow-xs"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Upwork */}
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/70 backdrop-blur-sm border border-cerulean-100 hover:bg-cerulean-50 hover:text-emerald-600 transition-colors shadow-xs"
              title="Upwork"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.722 0-5.467 2.731-5.911 4.544-1.354-1.99-2.373-4.89-2.787-7.562H6.974v10.518c0 2.05-1.668 3.718-3.718 3.718-2.05 0-3.718-1.668-3.718-3.718V2h-2.89v10.518c0 3.644 2.964 6.608 6.608 6.608 3.644 0 6.608-2.964 6.608-6.608v-1.411c.421 1.776 1.455 3.967 3.011 5.424l-1.921 8.07h2.955l1.417-5.952c1.077.584 2.302.915 3.629.915 3.967 0 7.195-3.228 7.195-7.196 0-3.967-3.228-7.195-7.196-7.195z" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="mailto:queloniomariarochelle@gmail.com"
              className="p-1.5 rounded-lg bg-white/70 backdrop-blur-sm border border-cerulean-100 hover:bg-cerulean-50 hover:text-rose-600 transition-colors shadow-xs"
              title="Email Maria Rochelle"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.634-1.636 1.634h-3.819V11.73L12 16.64l-6.545-4.91v9.27H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.5l8.073-6.007C21.69 2.279 24 3.434 24 5.457z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="mt-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/#"
                ? pathname === "/"
                : pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive && item.href === "/#"
                    ? "bg-white/80 backdrop-blur-md text-cerulean-700 shadow-sm border border-cerulean-200/60 font-bold"
                    : "text-surface-muted hover:text-cerulean-900 hover:bg-white/40"
                }`}
              >
                <Icon
                  weight={isActive && item.href === "/#" ? "fill" : "regular"}
                  className={`w-4 h-4 ${
                    isActive && item.href === "/#"
                      ? "text-cerulean-600"
                      : "text-surface-muted"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Pinned Bar: Replaced with Copyright Notice */}
      <div className="pt-4 border-t border-cerulean-200/50 text-center">
        <p className="text-[11px] font-semibold text-cerulean-950">
          © 2026 Maria Rochelle.
        </p>
        <p className="text-[10px] text-surface-muted">
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}
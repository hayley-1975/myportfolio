"use client";

import React, { useState } from "react";
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
  List,
  X,
} from "@phosphor-icons/react";

export function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", icon: House },
    { label: "Projects", href: "/projects", icon: FolderSimple },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "AI Tools", href: "/ai-tools", icon: Sparkle },
    { label: "Testimonials", href: "/testimonials", icon: ChatCircleText },
    { label: "About", href: "/about", icon: User },
    { label: "Contact", href: "/contact", icon: EnvelopeSimple },
  ];

  return (
    <>
      {/* Mobile Sticky Header */}
      <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-4 py-3  ">
        {/* <div className="flex items-center gap-2.5">
          <img
            src="/avatar.jpg"
            alt="Maria Rochelle"
            className="w-9 h-9 rounded-full object-cover object-top border border-cerulean-400"
          />
          <div>
            <span className="text-sm font-bold text-cerulean-950 block leading-none">
              Maria Rochelle
            </span>
            <span className="text-[10px] text-cerulean-600 font-medium">
              SYSTEMS. SECURITY. AUTOMATION.
            </span>
          </div>
        </div> */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-cerulean-800 rounded-lg hover:bg-cerulean-50"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <List className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop & Open Mobile Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 p-5 sm:p-6 flex flex-col justify-between bg-white/70 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-r border-cerulean-200/50 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Profile Card */}
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            {/* Standard Clean Static Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full ring-2 ring-cerulean-400 ring-offset-2 ring-offset-surface overflow-hidden bg-slate-100 shadow-sm">
                <img
                  src="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-1/800934887_2503265086861099_4460186277975741309_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGfM2PS9Isd9p6X2bheSOWeJP7ReCBQrM8k_tF4IFCsz-f287oV-Mm5BxA2CWkxJrXoskhYR3vncjw3hCwfBzAU&_nc_ohc=7P1_6DKwYhwQ7kNvwHK46oH&_nc_oc=AdpwAZKVkk2a8abKM1UTxRxVSzirYCh8kRY6KFraSpzIWwCYykYl2QnmBwzu7Fo7sBzmB2NxoIHUFRxMU1KU9Wg2&_nc_zt=24&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=aXLy5O0QnuIy6e31ieIvMA&_nc_ss=7b2a8&oh=00_AQLDUP540tmY_eVEH-n9ljOUwmnJvMcTwVfRLPxXp-7-QA&oe=6AAC32BA"
                  alt="Maria Rochelle"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 justify-center">
              <h1 className="text-lg font-bold text-cerulean-950 tracking-tight">
                Maria Rochelle
              </h1>
              <SealCheck weight="fill" className="w-4 h-4 text-cerulean-500" />
            </div>

            <p className="text-[10px] font-extrabold text-cerulean-700 tracking-wider mt-1 uppercase">
              SYSTEMS. SECURITY. AUTOMATION.
            </p>

            {/* Social Badges */}
            <div className="flex items-center justify-center gap-2.5 mt-4 text-cerulean-800">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/80 border border-cerulean-200/70 hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://upwork.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/80 border border-cerulean-200/70 hover:bg-cerulean-50 hover:text-emerald-600 transition-colors shadow-xs"
                title="Upwork"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.722 0-5.467 2.731-5.911 4.544-1.354-1.99-2.373-4.89-2.787-7.562H6.974v10.518c0 2.05-1.668 3.718-3.718 3.718-2.05 0-3.718-1.668-3.718-3.718V2h-2.89v10.518c0 3.644 2.964 6.608 6.608 6.608 3.644 0 6.608-2.964 6.608-6.608v-1.411c.421 1.776 1.455 3.967 3.011 5.424l-1.921 8.07h2.955l1.417-5.952c1.077.584 2.302.915 3.629.915 3.967 0 7.195-3.228 7.195-7.196 0-3.967-3.228-7.195-7.196-7.195z" />
                </svg>
              </a>

              <a
                href="mailto:queloniomariarochelle@gmail.com"
                className="p-2 rounded-xl bg-white/80 border border-cerulean-200/70 hover:bg-cerulean-50 hover:text-rose-600 transition-colors shadow-xs"
                title="Gmail"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.634-1.636 1.634h-3.819V11.73L12 16.64l-6.545-4.91v9.27H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.5l8.073-6.007C21.69 2.279 24 3.434 24 5.457z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white/95 text-cerulean-700 shadow-sm border border-cerulean-200/80 font-bold"
                      : "text-surface-muted hover:text-cerulean-950 hover:bg-white/50"
                  }`}
                >
                  <Icon
                    weight={isActive ? "fill" : "regular"}
                    className={`w-5 h-5 ${
                      isActive ? "text-cerulean-600" : "text-surface-muted"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-cerulean-100/70 text-left pl-2">
          <p className="text-[10px] text-slate-400 font-light leading-tight">
            © 2026 Maria Rochelle.
          </p>
          <p className="text-[9px] text-slate-400/80 font-light mt-0.5">
            All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
}

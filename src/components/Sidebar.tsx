"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderGit2,
  Wrench,
  Sparkles,
  MessageSquareQuote,
  User,
  Mail,
  CheckCircle2,
  Moon,
  Sun,
  Plus,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Services", href: "#services", icon: Wrench },
    { label: "Kape Tools", href: "#kape-tools", icon: Sparkles },
    { label: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
    { label: "About", href: "#about", icon: User },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white/80 backdrop-blur-md border-r border-cerulean-100 flex flex-col justify-between shrink-0 min-h-screen lg:fixed lg:left-0 lg:top-0 lg:bottom-0 p-5 z-40 shadow-soft">
      {/* Top Profile Header */}
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full ring-2 ring-cerulean-400 p-1 bg-gradient-to-tr from-cerulean-500 to-cerulean-200 shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Kenneth Villar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            <h1 className="text-lg font-bold text-cerulean-900 tracking-tight">
              Kenneth Villar
            </h1>
            <CheckCircle2 className="w-4 h-4 text-cerulean-500 fill-cerulean-500/20" />
          </div>
          <p className="text-xs font-medium text-cerulean-600/80">@brewedops</p>

          {/* Social Icons & Dark Mode */}
          <div className="flex items-center gap-2 mt-3.5 text-cerulean-800">
            {/* Facebook SVG */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors"
              title="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn SVG */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Discord SVG */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors"
              title="Discord"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg hover:bg-cerulean-50 hover:text-cerulean-600 transition-colors"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="mt-7 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || (pathname === "/" && item.href.startsWith("#"));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive && item.href === "/"
                    ? "bg-cerulean-50 text-cerulean-700 shadow-sm border border-cerulean-200/60 font-semibold"
                    : "text-surface-muted hover:text-cerulean-900 hover:bg-cerulean-50/60"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive && item.href === "/"
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

      {/* Bottom Pinned Mini Profile Bar */}
      <div className="pt-4 border-t border-cerulean-100">
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-cerulean-50/60 border border-cerulean-100">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Kenneth"
              className="w-7 h-7 rounded-full object-cover shrink-0"
            />
            <div className="truncate">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-cerulean-900 truncate">
                  Kenneth Villar
                </span>
                <CheckCircle2 className="w-3 h-3 text-cerulean-500 shrink-0" />
              </div>
              <p className="text-[10px] text-surface-muted">© 2026</p>
            </div>
          </div>

          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-all shrink-0 flex items-center gap-1 ${
              isFollowing
                ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                : "bg-cerulean-600 text-white hover:bg-cerulean-700"
            }`}
          >
            {isFollowing ? (
              "Following"
            ) : (
              <>
                <Plus className="w-2.5 h-2.5" />
                Follow
              </>
            )}
          </button>
        </div>

        {/* Scrolling Ticker Text */}
        <div className="mt-2.5 overflow-hidden text-[11px] text-cerulean-800 bg-cerulean-100/40 rounded-lg px-2.5 py-1.5 flex items-center justify-between border border-cerulean-200/40">
          <span className="truncate">How To Create Your Portfolio...</span>
          <a
            href="https://brewedops.com"
            target="_blank"
            rel="noreferrer"
            className="text-cerulean-600 font-semibold hover:underline shrink-0 ml-1"
          >
            See more
          </a>
        </div>
      </div>
    </aside>
  );
}
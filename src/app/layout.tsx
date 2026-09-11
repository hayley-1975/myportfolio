import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenneth Villar — brewedops",
  description: "Build it once. Run it forever. Funnels, workflows and apps built to solve real problems.",
  keywords: ["brewedops", "Kenneth Villar", "GoHighLevel", "AI Agents", "Automations", "Full-Stack Ops"],
  authors: [{ name: "Kenneth Villar" }],
  openGraph: {
    title: "Kenneth Villar — brewedops",
    description: "Build it once. Run it forever.",
    url: "https://brewedops.com",
    siteName: "brewedops",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface text-cerulean-900 selection:bg-cerulean-200 selection:text-cerulean-900">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main Content Area (Offset for lg fixed sidebar) */}
          <main className="flex-1 lg:pl-64 w-full min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
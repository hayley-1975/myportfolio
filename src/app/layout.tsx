import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { BackgroundLines } from "@/components/BackgroundLines";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Rochelle — SYSTEMS. SECURITY. AUTOMATION.",
  description: "Build it once. Run it forever. High-converting funnels, automated workflows, and secure infrastructure.",
  keywords: ["Maria Rochelle", "brewedops", "Systems", "Security", "Automation", "CRM Setup", "GoHighLevel"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans bg-surface text-cerulean-900 selection:bg-cerulean-200 selection:text-cerulean-900 relative">
        {/* Dynamic moving lines in background */}
        <BackgroundLines />

        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
          {/* Transparent Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 lg:pl-64 w-full min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
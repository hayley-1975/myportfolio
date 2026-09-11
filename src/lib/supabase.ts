import { createClient } from "@supabase/supabase-js";
import { PortfolioData } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fallback seed data in case Supabase credentials aren't wired up yet
export const fallbackData: PortfolioData = {
  tools: [
    { id: "1", name: "Zendesk", icon: "zendesk", category: "daily_driver" },
    { id: "2", name: "Intercom", icon: "intercom", category: "daily_driver" },
    { id: "3", name: "Slack", icon: "slack", category: "daily_driver" },
    { id: "4", name: "Claude Code", icon: "sparkles", category: "daily_driver" },
    { id: "5", name: "Codex", icon: "terminal", category: "daily_driver" },
    { id: "6", name: "Cursor", icon: "code", category: "daily_driver" },
    { id: "7", name: "Hermes AI", icon: "bot", category: "daily_driver" },
    { id: "8", name: "VS Code", icon: "laptop", category: "daily_driver" },
    { id: "9", name: "GoHighLevel", icon: "layers", category: "daily_driver" },
    { id: "10", name: "Lightspeed X-Series", icon: "zap", category: "daily_driver" },
  ],
  project: {
    id: "1",
    title: "A hillside of cypress, overlooking the quiet Pacific",
    description: "Funnels, workflows and apps built to solve real problems",
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    link: "https://brewedops.com",
  },
  services: [
    { id: "1", title: "Coded Funnels", order_number: "01", icon: "code" },
    { id: "2", title: "GHL Automation", order_number: "02", icon: "workflow" },
    { id: "3", title: "CRM Setup", order_number: "03", icon: "database" },
    { id: "4", title: "Website", order_number: "04", icon: "globe" },
    { id: "5", title: "Apps", order_number: "05", icon: "smartphone" },
  ],
  testimonials: [
    {
      id: "1",
      client_name: "Client 1",
      role: "Operations Manager & GHL Specialist",
      tags: "GHL Build · Automation · Membership",
      order_number: 1,
    },
    {
      id: "2",
      client_name: "Client 2",
      role: "GHL Specialist & Agentic AI Engineer",
      tags: "CRM · Pipelines · Forms",
      order_number: 2,
    },
    {
      id: "3",
      client_name: "Client 3",
      role: "Web Dev & GHL Specialist",
      tags: "Web Dev · GHL · Automation",
      order_number: 3,
    },
  ],
  credential: {
    id: "1",
    title: "Certified GHL Admin. Aspiring AI Engineer.",
    description: "Funnels, automated workflows, and custom webhook logic built cleanly.",
    badge_label: "Certified Admin",
  },
  visitCount: 2948,
};

export async function getPortfolioData(): Promise<PortfolioData> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return fallbackData;
  }

  try {
    const [
      { data: tools },
      { data: projects },
      { data: services },
      { data: testimonials },
      { data: credentials },
      { count: viewCount },
    ] = await Promise.all([
      supabase.from("tools").select("*"),
      supabase.from("projects").select("*").limit(1),
      supabase.from("services").select("*").order("order_number", { ascending: true }),
      supabase.from("testimonials").select("*").order("order_number", { ascending: true }),
      supabase.from("credentials").select("*").limit(1),
      supabase.from("page_views").select("*", { count: "exact", head: true }),
    ]);

    return {
      tools: tools && tools.length > 0 ? tools : fallbackData.tools,
      project: projects && projects.length > 0 ? projects[0] : fallbackData.project,
      services: services && services.length > 0 ? services : fallbackData.services,
      testimonials: testimonials && testimonials.length > 0 ? testimonials : fallbackData.testimonials,
      credential: credentials && credentials.length > 0 ? credentials[0] : fallbackData.credential,
      visitCount: viewCount && viewCount > 0 ? viewCount : fallbackData.visitCount,
    };
  } catch (error) {
    console.warn("Supabase fetch failed, utilizing fallback data:", error);
    return fallbackData;
  }
}
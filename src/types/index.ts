export interface ToolItem {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  link: string;
  created_at?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  order_number: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  client_name: string;
  role: string;
  tags: string;
  order_number: number;
}

export interface CredentialItem {
  id: string;
  title: string;
  description: string;
  badge_label: string;
}

export interface PortfolioData {
  tools: ToolItem[];
  project: ProjectItem;
  services: ServiceItem[];
  testimonials: TestimonialItem[];
  credential: CredentialItem;
  visitCount: number;
}
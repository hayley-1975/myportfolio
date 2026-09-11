-- 1. Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    link TEXT DEFAULT '#',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create services table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    order_number TEXT NOT NULL,
    icon TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    role TEXT NOT NULL,
    tags TEXT NOT NULL,
    order_number INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create credentials table
CREATE TABLE IF NOT EXISTS public.credentials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    badge_label TEXT DEFAULT 'Certified Admin',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Create tools table
CREATE TABLE IF NOT EXISTS public.tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    icon TEXT NOT NULL,
    category TEXT DEFAULT 'daily_driver',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Create messages table for contact submissions
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Create page_views table for visit analytics
CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page TEXT NOT NULL,
    viewed_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow public read access to display data
CREATE POLICY "Allow public read on projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read on services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read on testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read on credentials" ON public.credentials FOR SELECT USING (true);
CREATE POLICY "Allow public read on tools" ON public.tools FOR SELECT USING (true);

-- Allow public inserts for messages and page views
CREATE POLICY "Allow public insert on messages" ON public.messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on page_views" ON public.page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on page_views" ON public.page_views FOR SELECT USING (true);

-- SEED INITIAL DATA
INSERT INTO public.tools (name, icon, category) VALUES
('Zendesk', 'zendesk', 'daily_driver'),
('Intercom', 'intercom', 'daily_driver'),
('Slack', 'slack', 'daily_driver'),
('Claude Code', 'sparkles', 'daily_driver'),
('Codex', 'terminal', 'daily_driver'),
('Cursor', 'code', 'daily_driver'),
('Hermes AI', 'bot', 'daily_driver'),
('VS Code', 'laptop', 'daily_driver'),
('GoHighLevel', 'layers', 'daily_driver'),
('Lightspeed X-Series', 'zap', 'daily_driver');

INSERT INTO public.projects (title, description, image_url, link) VALUES
('Architectural Sanctuary', 'Funnels, workflows and apps built to solve real problems', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', 'https://brewedops.com');

INSERT INTO public.services (title, order_number, icon) VALUES
('Coded Funnels', '01', 'code'),
('GHL Automation', '02', 'workflow'),
('CRM Setup', '03', 'database'),
('Website', '04', 'globe'),
('Apps', '05', 'smartphone');

INSERT INTO public.credentials (title, description, badge_label) VALUES
('Certified GHL Admin. Aspiring AI Engineer.', 'Specialized in high-converting automation workflows, API pipelines, and RAG agents.', 'Certified Admin');

INSERT INTO public.testimonials (client_name, role, tags, order_number) VALUES
('Client 1', 'Operations Manager & GHL Specialist', 'GHL Build · Automation · Membership', 1),
('Client 2', 'GHL Specialist & Agentic AI Engineer', 'CRM · Pipelines · Forms', 2),
('Client 3', 'Web Dev & GHL Specialist', 'Web Dev · GHL · Automation', 3);

-- Seed initial count so badge starts with a realistic number
INSERT INTO public.page_views (page)
SELECT 'home' FROM generate_series(1, 2948);
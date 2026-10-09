import {
  Briefcase,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  Palette,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';

export const portfolioData = {
  name: 'Luz Vivian Cantos',
  headline: 'Designing digital experiences that make an impact.',
  intro:
    'I’m a multidisciplinary designer and frontend developer creating clear, emotionally resonant digital products that help brands and teams move forward with confidence.',
  email: 'hello@luzviviancantos.dev',
  location: 'Lima, Peru',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/', icon: <Github size={18} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: <Linkedin size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram size={18} /> },
  ],
  stats: [
    { value: '6+', label: 'Years experience' },
    { value: '24', label: 'Projects shipped' },
    { value: '8', label: 'Creative collaborations' },
  ],
  about: {
    summary:
      'I help businesses translate strategy into meaningful interfaces — blending research, branding, and implementation to create user experiences that feel premium, intuitive, and memorable.',
    mission:
      'My mission is to design products that bridge clarity and emotion, making technical complexity feel effortless while building trust at every touchpoint.',
    highlights: [
      { title: 'Research-first', text: 'I turn user insight into product decisions with measurable outcomes.', icon: <Sparkles size={18} /> },
      { title: 'Design systems', text: 'I build scalable design foundations that keep products consistent and efficient.', icon: <Layers3 size={18} /> },
      { title: 'Frontend craft', text: 'I translate polished design into responsive, performative experiences.', icon: <Code2 size={18} /> },
    ],
  },
  skillGroups: [
    { title: 'Frontend Development', skills: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { title: 'UI / UX Design', skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'UX Audits', 'Motion Design'] },
    { title: 'Backend & APIs', skills: ['Node.js', 'REST APIs', 'Supabase', 'MongoDB', 'Authentication', 'API Integration'] },
    { title: 'Product Strategy', skills: ['Research', 'User Flows', 'Roadmapping', 'Stakeholder Alignment', 'A/B Testing', 'Analytics'] },
    { title: 'Tools & Workflow', skills: ['GitHub', 'Notion', 'Slack', 'Vercel', 'Framer', 'Linear'] },
    { title: 'Creative Direction', skills: ['Brand Systems', 'Campaign Design', 'Art Direction', 'Content Layouts', 'Storytelling', 'Creative QA'] },
  ],
  projects: [
    {
      title: 'Asteria Studio',
      category: 'Brand Experience',
      description: 'A soft luxury digital brand experience for a boutique creative studio, designed to showcase portfolio narratives and premium service offerings.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
    {
      title: 'Northstar Commerce',
      category: 'E-commerce',
      description: 'A conversion-focused storefront concept emphasizing premium storytelling, audience trust, and product discoverability.',
      tech: ['Shopify', 'Figma', 'UX Strategy'],
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
    {
      title: 'Harbor Analytics',
      category: 'Dashboard',
      description: 'A complex reporting experience built to help data teams explore performance metrics with speed and clarity.',
      tech: ['React', 'Charts', 'Design System'],
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
  ],
  experience: [
    {
      company: 'Freelance',
      role: 'Product Designer & Frontend Developer',
      period: '2023 — Present',
      description: 'Partner with founders and small teams to shape digital product direction, interface systems, and responsive web experiences that feel premium and conversion-ready.',
    },
    {
      company: 'Blue Horizon Labs',
      role: 'Senior Product Designer',
      period: '2021 — 2023',
      description: 'Led UX strategy for multi-platform digital products and facilitated cross-functional design sprints that improved feature adoption and product clarity.',
    },
  ],
  education: [
    {
      school: 'University of Creative Technologies',
      degree: 'B.A. in Digital Design',
      period: '2016 — 2020',
      description: 'Focused on interaction design, visual communication, and systems thinking with a strong emphasis on human-centered product design.',
      icon: <GraduationCap size={18} />,
    },
    {
      school: 'Interactive Product Lab',
      degree: 'Frontend & UX Certification',
      period: '2021',
      description: 'Advanced coursework in modern frontend architecture, accessibility, and design implementation for digital products.',
      icon: <Palette size={18} />,
    },
  ],
};

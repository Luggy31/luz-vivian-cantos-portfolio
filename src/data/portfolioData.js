import {
  Briefcase,
  Code2,
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
    'I’m Luz Vivian Cantos, a multidisciplinary product designer and frontend developer creating calm, polished digital experiences that feel as intentional as they are useful.',
  email: 'hello@luzviviancantos.dev',
  location: 'Remote / Peru',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/', icon: <Github size={18} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: <Linkedin size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram size={18} /> },
  ],
  stats: [
    { value: '5+', label: 'Years crafting digital experiences' },
    { value: '18', label: 'Projects delivered' },
    { value: '8', label: 'Creative collaborations' },
  ],
  about: {
    summary:
      'I help brands and teams turn ideas into refined product experiences, blending strategy, interface design, and frontend craft to create work that feels premium, intuitive, and human-centered.',
    mission:
      'My mission is to design digital products that balance clarity, emotion, and usefulness — making complex ideas feel simple, calm, and compelling from the first interaction onward.',
    highlights: [
      { title: 'Strategic design', text: 'I connect user needs, business goals, and visual direction into coherent digital experiences.', icon: <Sparkles size={18} /> },
      { title: 'Design systems', text: 'I build scalable UI foundations that keep products consistent, polished, and easy to evolve.', icon: <Layers3 size={18} /> },
      { title: 'Frontend craft', text: 'I translate interfaces into responsive, accessible experiences with thoughtful interaction details.', icon: <Code2 size={18} /> },
    ],
  },
  skillGroups: [
    { title: 'Product Design', skills: ['UX Strategy', 'Wireframes', 'Design Thinking', 'Prototyping', 'User Flows', 'Interaction Design'] },
    { title: 'Frontend Development', skills: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Responsive UI'] },
    { title: 'Brand & Visual Design', skills: ['Brand Direction', 'Art Direction', 'Interface Design', 'Typography', 'Moodboards', 'Creative Systems'] },
    { title: 'Research & Insight', skills: ['User Research', 'Empathy Mapping', 'Feature Prioritization', 'Testing', 'UX Audits', 'Analytics Review'] },
    { title: 'Tools & Workflow', skills: ['Figma', 'GitHub', 'Notion', 'Vercel', 'Framer', 'Canva'] },
    { title: 'Content & Experience', skills: ['Storytelling', 'Landing Pages', 'Campaign Design', 'Personal Branding', 'Content Structure', 'Accessibility'] },
  ],
  projects: [
    {
      title: 'Asteria Studio',
      category: 'Brand Experience',
      description: 'A refined digital presence for a creative studio, designed to communicate premium services, portfolio narratives, and calm visual storytelling.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
    {
      title: 'Northstar Commerce',
      category: 'E-commerce',
      description: 'A conversion-focused storefront concept centered on polished product storytelling, trust signals, and a premium mobile-first experience.',
      tech: ['UX Strategy', 'Figma', 'UI Design'],
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
    {
      title: 'Harbor Analytics',
      category: 'Dashboard',
      description: 'A modern reporting dashboard concept built to surface metrics clearly, reduce cognitive load, and support confident decision-making.',
      tech: ['React', 'Design System', 'Product Thinking'],
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com/',
    },
  ],
  experience: [
    {
      company: 'Independent Practice',
      role: 'Product Designer & Frontend Developer',
      period: '2022 — Present',
      description: 'Design and develop digital experiences for founders, small businesses, and purpose-driven brands seeking elevated product and marketing touchpoints.',
    },
    {
      company: 'Creative Digital Studio',
      role: 'UI / UX Designer',
      period: '2020 — 2022',
      description: 'Led interface strategy, visual direction, and product design refinement for brand websites, feature launches, and customer-facing experiences.',
    },
  ],
  education: [
    {
      title: 'Visual Communication & Digital Design',
      detail: 'Self-directed professional study and design practice',
      period: 'Ongoing',
      description: 'Focused on interface design, branding, visual systems, and digital storytelling through practical product and portfolio work.',
      icon: <Palette size={18} />,
    },
    {
      title: 'Frontend & Product Design Foundations',
      detail: 'Hands-on learning and implementation practice',
      period: '2021',
      description: 'Developed skills in responsive design, accessibility, modern frontend workflows, and product-oriented design systems.',
      icon: <Code2 size={18} />,
    },
  ],
};

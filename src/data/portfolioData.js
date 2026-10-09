import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  DownloadCloud,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Sparkles,
  Star,
  X,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

const fadeUp = (shouldReduceMotion) => ({
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.1 : 0.7,
      ease: 'easeOut',
    },
  },
});

const stagger = (shouldReduceMotion) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.12,
      delayChildren: shouldReduceMotion ? 0 : 0.14,
    },
  },
});

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(portfolioData.projects.map((project) => project.category))],
    [],
  );

  const filteredProjects =
    activeFilter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === activeFilter);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters long.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const mailtoLink = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061923]">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="loading-ring" />
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-seafoam/80">
              <Sparkles size={14} />
              Loading portfolio
            </div>
            <p className="max-w-xs text-sm text-storm/70">Crafting a cinematic journey for Luz Vivian Cantos.</p>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061923]/80 backdrop-blur-xl">
          <div className="section-shell flex h-20 items-center justify-between">
            <a href="#home" className="font-display text-xl font-bold tracking-[-0.04em] text-storm">
              LVC
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              {portfolioData.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="social-pill"
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-storm md:hidden"
              type="button"
              aria-label="Toggle mobile navigation"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="section-shell pb-4 md:hidden">
              <div className="glass-card rounded-2xl p-4">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="nav-link text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>

        <main>
          <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 grid-ripple opacity-40" />
            <div className="ambient-orb ambient-orb--one" />
            <div className="ambient-orb ambient-orb--two" />
            <div className="ambient-orb ambient-orb--three" />

            <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                variants={stagger(shouldReduceMotion)}
                initial="hidden"
                animate="show"
                className="relative z-10"
              >
                <motion.div variants={fadeUp(shouldReduceMotion)} className="mb-6 flex items-center gap-3">
                  <span className="section-label">
                    <Sparkles size={12} />
                    Available for select projects
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp(shouldReduceMotion)} className="ink-heading max-w-xl">
                  {portfolioData.headline}
                </motion.h1>

                <motion.p
                  variants={fadeUp(shouldReduceMotion)}
                  className="mt-6 max-w-xl text-lg leading-8 text-storm/75"
                >
                  {portfolioData.intro}
                </motion.p>

                <motion.div variants={fadeUp(shouldReduceMotion)} className="mt-8 flex flex-wrap gap-4">
                  <a href="#projects" className="primary-button">
                    Explore my work
                    <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="secondary-button">
                    Let&apos;s connect
                    <Mail size={18} />
                  </a>
                </motion.div>

                <motion.div variants={fadeUp(shouldReduceMotion)} className="mt-10 flex flex-wrap items-center gap-6">
                  {portfolioData.stats.map((stat) => (
                    <div key={stat.label} className="min-w-[120px]">
                      <div className="text-2xl font-bold text-storm">{stat.value}</div>
                      <div className="text-sm text-storm/60">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, y: shouldReduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.9, ease: 'easeOut' }}
                className="relative z-10"
              >
                <div className="glass-card floating-card relative overflow-hidden rounded-[30px] p-4 sm:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,189,181,0.18),transparent_28%)]" />
                  <div className="relative rounded-[26px] border border-white/10 bg-[#0b2d35]/80 p-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
                      alt="Portrait of Luz Vivian Cantos"
                      className="h-[520px] w-full rounded-[22px] object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-seafoam/30 bg-[#061923]/80 p-4 shadow-glow backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-seafoam">Currently</p>
                        <h3 className="mt-2 text-lg font-semibold text-storm">Available for select collaborations</h3>
                      </div>
                      <span className="inline-flex h-3 w-3 rounded-full bg-seafoam shadow-[0_0_18px_rgba(139,189,181,0.8)]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex">
              <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.33em] text-storm/60">
                <span>Scroll</span>
                <span className="inline-block h-12 w-px bg-gradient-to-b from-seafoam via-storm to-transparent" />
              </div>
            </div>
          </section>

          <motion.section
            id="about"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(shouldReduceMotion)}
            className="py-20 sm:py-24"
          >
            <div className="section-shell">
              <motion.div variants={fadeUp(shouldReduceMotion)} className="mb-10">
                <span className="section-label">About me</span>
              </motion.div>

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <motion.div variants={fadeUp(shouldReduceMotion)} className="glass-card rounded-[28px] p-4 sm:p-5">
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"
                    alt="Luz Vivian Cantos profile"
                    className="h-[420px] w-full rounded-[24px] object-cover"
                  />
                </motion.div>

                <motion.div variants={fadeUp(shouldReduceMotion)} className="space-y-6">
                  <div>
                    <h2 className="ink-heading text-4xl sm:text-5xl">Thoughtful design meets usable product craft.</h2>
                  </div>

                  <p className="text-lg leading-8 text-storm/75">{portfolioData.about.summary}</p>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {portfolioData.about.highlights.map((item) => (
                      <div key={item.title} className="skill-card rounded-2xl p-4">
                        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-seafoam/10 text-seafoam">
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-storm">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-storm/65">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card rounded-2xl p-5">
                    <h3 className="text-xl font-semibold text-storm">My approach</h3>
                    <p className="mt-3 text-base leading-7 text-storm/70">{portfolioData.about.mission}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(shouldReduceMotion)}
            className="py-20 sm:py-24"
          >
            <div className="section-shell">
              <motion.div variants={fadeUp(shouldReduceMotion)} className="mb-10">
                <span className="section-label">Skills</span>
                <h2 className="mt-5 ink-heading text-4xl sm:text-5xl">Tools and systems built for clarity and momentum.</h2>
              </motion.div>

              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {portfolioData.skillGroups.map((group) => (
                  <motion.div key={group.title} variants={fadeUp(shouldReduceMotion)} className="skill-card">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold text-storm">{group.title}</h3>
                      <span className="rounded-full border border-seafoam/30 bg-seafoam/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-seafoam">
                        {group.skills.length} tools
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-[#0d3a41] px-3 py-2 text-sm text-storm/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(shouldReduceMotion)}
            className="py-20 sm:py-24"
          >
            <div className="section-shell">
              <motion.div variants={fadeUp(shouldReduceMotion)} className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="section-label">Projects</span>
                  <h2 className="mt-5 ink-heading text-4xl sm:text-5xl">Selected work across product, brand, and interface design.</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? 'bg-seafoam text-[#041d26]'
                          : 'border border-white/10 bg-white/5 text-storm/80 hover:border-seafoam/60 hover:text-storm'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <motion.article key={project.title} variants={fadeUp(shouldReduceMotion)} className="project-card p-3">
                    <div className="overflow-hidden rounded-[22px] border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-4">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="rounded-full border border-seafoam/30 bg-seafoam/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-seafoam">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-seafoam">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs text-storm/70">{project.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-storm">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-storm/70">{project.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-[#0a2c34] px-2.5 py-1 text-[11px] text-storm/75">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="primary-button flex-1">
                          View project
                        </a>
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" className="secondary-button flex-1">
                          Source code
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="experience"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger(shouldReduceMotion)}
            className="py-20 sm:py-24"
          >
            <div className="section-shell">
              <motion.div variants={fadeUp(shouldReduceMotion)} className="mb-10">
                <span className="section-label">Experience</span>
                <h2 className="mt-5 ink-heading text-4xl sm:text-5xl">Career journey that blends product thinking and frontend execution.</h2>
              </motion.div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  {portfolioData.experience.map((item) => (
                    <motion.div key={item.company} variants={fadeUp(shouldReduceMotion)} className="timeline-item">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-seafoam">{item.company}</p>
                          <h3 className="mt-2 text-2xl font-semibold text-storm">{item.role}</h3>
                        </div>
                        <span className="rounded-full border border-seafoam/30 bg-seafoam/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-seafoam">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-4 text-base leading-7 text-storm/70">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  {portfolioData.education.map((item) => (
                    <motion.div key={item.school} variants={fadeUp(shouldReduceMotion)} className="timeline-item">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-seafoam">{item.period}</p>
                          <h3 className="mt-2 text-2xl font-semibold text-storm">{item.degree}</h3>
                          <p className="mt-1 text-base text-storm/80">{item.school}</p>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/5 p-2 text-seafoam">
                          {item.icon}
                        </div>
                      </div>
                      <p className="mt-4 text-base leading-7 text-storm/70">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(shouldReduceMotion)}
            className="py-20 sm:py-24"
          >
            <div className="section-shell">
              <motion.div variants={fadeUp(shouldReduceMotion)} className="glass-card relative overflow-hidden rounded-[32px] border border-seafoam/20 p-6 sm:p-8 lg:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,189,181,0.15),transparent_32%)]" />
                <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <span className="section-label">Contact</span>
                    <h2 className="mt-5 ink-heading text-4xl sm:text-5xl">Have a project in mind?</h2>
                    <p className="mt-5 max-w-md text-lg leading-8 text-storm/75">
                      I&apos;m open to design partnerships, product strategy work, and digital experiences that feel polished, purposeful, and memorable.
                    </p>

                    <div className="mt-8 space-y-4 text-storm/80">
                      <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 text-storm hover:text-seafoam">
                        <Mail size={18} className="text-seafoam" />
                        {portfolioData.email}
                      </a>
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-seafoam" />
                        {portfolioData.location}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm text-storm/70">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-2xl border border-white/10 bg-[#0d2d35] px-4 py-3 text-storm placeholder:text-storm/30 focus:border-seafoam/80 focus:outline-none"
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="mb-2 block text-sm text-storm/70">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-2xl border border-white/10 bg-[#0d2d35] px-4 py-3 text-storm placeholder:text-storm/30 focus:border-seafoam/80 focus:outline-none"
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-storm/70">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/10 bg-[#0d2d35] px-4 py-3 text-storm placeholder:text-storm/30 focus:border-seafoam/80 focus:outline-none"
                        placeholder="Project inquiry"
                      />
                      {errors.subject && <p className="mt-2 text-sm text-rose-300">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-storm/70">Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/10 bg-[#0d2d35] px-4 py-3 text-storm placeholder:text-storm/30 focus:border-seafoam/80 focus:outline-none"
                        placeholder="Tell me about your idea, timeline, and goals..."
                      />
                      {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button type="submit" className="primary-button">
                        Send message
                        <ArrowRight size={18} />
                      </button>
                      <a href={`mailto:${portfolioData.email}`} className="secondary-button">
                        Email directly
                      </a>
                    </div>

                    {submitted && (
                      <p className="text-sm text-seafoam">
                        Thanks! Your message draft has been prepared in your mail app.
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <footer className="border-t border-white/10 bg-[#061923]/90 py-8">
          <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <a href="#home" className="font-display text-xl font-bold tracking-[-0.04em] text-storm">
                LVC
              </a>
              <p className="mt-2 text-sm text-storm/60">© {new Date().getFullYear()} Luz Vivian Cantos.</p>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-storm/70">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-seafoam">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {portfolioData.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="social-pill h-10 w-10"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

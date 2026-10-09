/* ========== Tailwind directives ========== */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  --bg-deep: #061923;
  --bg-ocean: #092f37;
  --bg-surface: rgba(14, 41, 49, 0.7);
  --bg-card: rgba(82, 125, 125, 0.16);
  --stroke: rgba(209, 216, 217, 0.16);
  --text: #d1d8d9;
  --text-soft: rgba(209, 216, 217, 0.78);
  --accent: #8bbdb5;
  --accent-soft: #b0d4cd;
  --teal: #527d7d;
  --shadow: rgba(6, 25, 35, 0.6);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(139, 189, 181, 0.18), transparent 25%),
    linear-gradient(180deg, #061923 0%, #092f37 28%, #061923 100%);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

#root {
  min-height: 100vh;
}

::selection {
  background: rgba(139, 189, 181, 0.28);
  color: #edf7f6;
}

@layer components {
  .section-shell {
    @apply relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .glass-card {
    @apply border border-white/10 bg-white/5 backdrop-blur-xl shadow-card;
  }

  .soft-border {
    border: 1px solid rgba(209, 216, 217, 0.12);
  }

  .ink-heading {
    @apply font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-storm sm:text-5xl lg:text-6xl;
  }

  .section-label {
    @apply inline-flex items-center gap-2 rounded-full border border-seafoam/30 bg-seafoam/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-seafoam;
  }

  .nav-link {
    @apply relative text-sm font-medium text-storm/80 transition-colors duration-300 hover:text-storm;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139, 189, 181, 0.9), transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link:focus-visible::after {
    transform: scaleX(1);
  }

  .primary-button,
  .secondary-button {
    @apply inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seafoam/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061923];
  }

  .primary-button {
    @apply bg-seafoam text-[#031d24] shadow-glow hover:-translate-y-0.5 hover:bg-[#a4d0c7];
  }

  .secondary-button {
    @apply border border-white/15 bg-white/5 text-storm hover:border-seafoam/60 hover:bg-seafoam/10;
  }

  .social-pill {
    @apply inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-storm transition-all duration-300 hover:-translate-y-1 hover:border-seafoam/60 hover:bg-seafoam/15 hover:text-seafoam;
  }

  .skill-card {
    @apply rounded-2xl border border-white/10 bg-[rgba(82,125,125,0.12)] p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-seafoam/60 hover:shadow-glow;
  }

  .project-card {
    @apply overflow-hidden rounded-[28px] border border-white/10 bg-[#0b2d35]/80 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-seafoam/60 hover:shadow-glow;
  }

  .timeline-item {
    @apply relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-card;
  }
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, -16px, 0) scale(1.04);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes pulseGlow {
  0%,
  100% {
    box-shadow: 0 0 0 rgba(139, 189, 181, 0.1);
  }
  50% {
    box-shadow: 0 0 28px rgba(139, 189, 181, 0.25);
  }
}

.ambient-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.38;
  animation: drift 12s ease-in-out infinite;
}

.ambient-orb--one {
  width: 420px;
  height: 420px;
  background: rgba(139, 189, 181, 0.24);
  top: -120px;
  left: -80px;
}

.ambient-orb--two {
  width: 440px;
  height: 440px;
  background: rgba(66, 128, 134, 0.24);
  right: -140px;
  top: 120px;
  animation-delay: 1.5s;
}

.ambient-orb--three {
  width: 300px;
  height: 300px;
  background: rgba(176, 212, 205, 0.18);
  left: 40%;
  bottom: -100px;
  animation-delay: 3s;
}

.grid-ripple {
  background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center, black 35%, transparent 80%);
}

.loading-ring {
  width: 68px;
  height: 68px;
  border-radius: 9999px;
  border: 2px solid rgba(139, 189, 181, 0.28);
  border-top-color: rgba(139, 189, 181, 1);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.floating-card {
  animation: pulseGlow 4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

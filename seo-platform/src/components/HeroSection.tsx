'use client';

import { motion } from 'framer-motion';
import { Scene } from '@/components/Scene';

export function HeroSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-sky-200 ring-1 ring-sky-500/20">
          Pixel-perfect UI · Theming · 3D motion
        </div>
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            SEO platform designed for motion, scale, and modern experiences.
          </motion.h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Build with Next.js, Tailwind CSS, and a theme-first design system for high-fidelity, responsive interfaces that match Figma styling.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-sky-400"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
          >
            Explore features
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft"
      >
        <Scene />
      </motion.div>
    </section>
  );
}

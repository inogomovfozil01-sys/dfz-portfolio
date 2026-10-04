'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ArrowRight, Github, Mail, Sparkles, Terminal } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern overlay for tech aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-secondary border border-white/10 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-foreground/80 tracking-wide">
              {t.badge[language]}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
            <span className="text-muted block text-lg sm:text-xl font-mono font-normal mb-2 tracking-normal">
              {t.greeting[language]}
            </span>
            {t.name[language]}
          </h1>

          {/* Role badge with gradient */}
          <div className="inline-block mb-5">
            <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-accent via-indigo-300 to-indigo-100 bg-clip-text text-transparent">
              {t.role[language]}
            </span>
          </div>

          {/* Bio tagline */}
          <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8">
            {t.bio[language]}
          </p>

          {/* Key tags */}
          <div className="flex flex-wrap gap-2 mb-9">
            {['Next.js 16', 'TypeScript', 'Google Gemini AI', 'PostgreSQL', 'Socket.IO', 'Prisma ORM'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface border border-white/5 text-foreground/75"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 group"
            >
              <span>{t.ctaProjects[language]}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-secondary hover:bg-surface-tertiary text-foreground text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>{t.ctaContact[language]}</span>
            </a>

            <a
              href="https://github.com/inogomovfozil01-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-muted hover:text-foreground text-sm font-medium border border-white/5 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>{t.ctaGithub[language]}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Real GitHub Avatar with Editorial Frame & Glow */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/50 via-indigo-500/30 to-purple-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-glow-pulse" />

            {/* Frame Container */}
            <div className="relative rounded-3xl p-2.5 bg-surface-secondary/80 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-surface">
                <Image
                  src="/avatar.png"
                  alt="Fozil Inogomov - Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Glass Badge on top of image */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-surface/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-mono font-medium text-foreground">
                      DFZ • @inogomovfozil01-sys
                    </span>
                  </div>
                  <Terminal className="w-4 h-4 text-muted" />
                </div>
              </div>
            </div>

            {/* Floating Tech Indicator Badge */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-surface-tertiary border border-accent/40 shadow-xl flex items-center gap-1.5 text-xs font-mono text-foreground font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

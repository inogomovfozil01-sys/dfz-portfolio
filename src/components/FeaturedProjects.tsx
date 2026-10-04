'use client';

import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Sparkles, ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const { language } = useLanguage();
  const t = translations.projects;

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.sectionTitle[language]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-xl">
              {t.heading[language]}
            </h2>
            <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
              {t.subheading[language]}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-secondary hover:bg-surface-tertiary border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-foreground transition-all duration-200 self-start md:self-auto group"
          >
            <span>{t.viewAll[language]}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-accent" />
          </Link>
        </div>

        {/* Featured Projects Grid (Bento style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        {/* Bottom CTA to view all projects */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/30 text-sm font-semibold text-accent transition-all duration-200"
          >
            <span>{t.viewAll[language]} ({projects.length} {language === 'ru' ? 'проектов' : 'projects'})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

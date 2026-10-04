'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ExternalLink, Github, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = translations.projects;
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`group relative rounded-3xl bg-surface-secondary/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-accent/5 ${
        featured ? 'lg:col-span-6' : 'col-span-1'
      }`}
    >
      {/* Top Banner / Screenshot Area */}
      <div className="relative w-full h-52 sm:h-64 bg-surface overflow-hidden border-b border-white/5">
        <Image
          src={project.screenshot}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            // Fallback for cases where screenshot might fail
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        {/* Gradient Overlay for Editorial Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-secondary via-transparent to-transparent opacity-80" />

        {/* Badges on Top */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-surface/90 backdrop-blur-md border border-white/10 text-foreground shadow-sm">
            {project.category}
          </span>

          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border shadow-sm ${
              project.statusEn === 'Production'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
            }`}
          >
            {language === 'ru' ? project.statusRu : project.statusEn}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Tagline */}
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              {project.featured && (
                <Sparkles className="w-4 h-4 text-accent inline-block shrink-0" />
              )}
            </h3>
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {language === 'ru' ? project.taglineRu : project.taglineEn}
            </p>
          </div>

          {/* Problem & Solution Callout */}
          <div className="p-3.5 rounded-xl bg-surface/60 border border-white/5 mb-4 text-xs text-foreground/80 leading-relaxed">
            <span className="font-semibold text-accent block mb-1">
              {t.problem[language]}
            </span>
            {language === 'ru' ? project.problemRu : project.problemEn}
          </div>

          {/* Collapsible Key Features */}
          <div className="mb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center justify-between w-full text-xs font-mono font-semibold text-muted hover:text-foreground py-1 transition-colors"
            >
              <span>{t.keyFeatures[language]}</span>
              {expanded ? (
                <ChevronUp className="w-3.5 h-3.5 text-accent" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {expanded && (
              <ul className="mt-2 space-y-1.5 pl-1">
                {(language === 'ru' ? project.featuresRu : project.featuresEn).map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-muted flex items-start gap-2 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer: Action Links */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{t.githubRepo[language]}</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover shadow-md shadow-accent/20 transition-all duration-200"
            >
              <span>{t.liveDemo[language]}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

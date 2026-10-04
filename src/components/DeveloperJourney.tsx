'use client';

import React from 'react';
import { developerJourney } from '@/data/journey';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Milestone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DeveloperJourney() {
  const { language } = useLanguage();
  const t = translations.journey;

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-xl">
            {t.heading[language]}
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
            {t.subheading[language]}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
          {developerJourney.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin/Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-accent group-hover:scale-125 group-hover:bg-accent transition-all duration-300 shadow-md shadow-accent/30" />

              <div className="p-6 sm:p-8 rounded-3xl bg-surface-secondary/70 border border-white/5 hover:border-white/15 transition-all duration-200">
                {/* Period Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-accent mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{milestone.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {language === 'ru' ? milestone.titleRu : milestone.titleEn}
                </h3>

                <p className="text-sm font-mono text-indigo-300 mb-4">
                  {language === 'ru' ? milestone.subtitleRu : milestone.subtitleEn}
                </p>

                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  {language === 'ru' ? milestone.descriptionRu : milestone.descriptionEn}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-6">
                  {milestone.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Key Repos Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                  <span className="text-xs text-muted-dark font-mono">
                    {language === 'ru' ? 'Репозитории этапа:' : 'Milestone Repos:'}
                  </span>
                  {milestone.keyRepos.map((repo) => (
                    <a
                      key={repo}
                      href={`https://github.com/inogomovfozil01-sys/${repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/5 hover:bg-white/10 text-foreground/90 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      {repo}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

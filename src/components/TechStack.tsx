'use client';

import React, { useState } from 'react';
import { techStackCategories } from '@/data/tech-stack';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Layout, Server, Database, Sparkles, Cpu, Check, Layers } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Sparkles,
  Cpu,
};

export function TechStack() {
  const { language } = useLanguage();
  const t = translations.skills;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-xl">
            {t.heading[language]}
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
            {t.subheading[language]}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-white/5">
          {techStackCategories.map((category, index) => {
            const Icon = iconMap[category.iconName] || Layers;
            const isActive = activeCategory === index;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface-tertiary border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{language === 'ru' ? category.titleRu : category.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description & Skills Grid */}
        <div className="bg-surface-secondary/50 rounded-3xl p-6 sm:p-8 border border-white/5">
          <p className="text-muted text-sm mb-8">
            {language === 'ru'
              ? techStackCategories[activeCategory].descriptionRu
              : techStackCategories[activeCategory].descriptionEn}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStackCategories[activeCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-accent">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-2 text-xs text-muted">
                  <span className="text-muted-dark mr-1">{t.verifiedIn[language]}</span>
                  <span className="font-mono text-foreground/80">
                    {skill.verifiedIn.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

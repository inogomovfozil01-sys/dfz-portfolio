'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Code2, Cpu, Database, Globe, Layers, Sparkles, Terminal } from 'lucide-react';

export function About() {
  const { language } = useLanguage();
  const t = translations.about;

  const highlights = [
    {
      icon: Layers,
      titleRu: 'Full-Stack разработка',
      titleEn: 'Full-Stack Engineering',
      descRu: 'Проектирование целостных веб-продуктов от компонентного UI до реляционных схем и серверных экшенов.',
      descEn: 'Architecting cohesive digital products from reactive UI design to database schemas and server actions.'
    },
    {
      icon: Sparkles,
      titleRu: 'AI & Vision интеграции',
      titleEn: 'AI & Vision Integration',
      descRu: 'Внедрение моделей Google Gemini 3.8 Flash и Gemini Vision OCR для распознавания текстов и умного поиска.',
      descEn: 'Implementing Google Gemini 3.8 Flash and Gemini Vision OCR for multimodal recognition and intelligent search.'
    },
    {
      icon: Terminal,
      titleRu: 'Realtime & WebSockets',
      titleEn: 'Realtime & WebSockets',
      descRu: 'Двусторонняя коммуникация через Socket.IO в ClassOS и DFZ Messenger с комнатами и статусами.',
      descEn: 'Bidirectional low-latency pipelines via Socket.IO in ClassOS and DFZ Messenger with rooms and presence.'
    },
    {
      icon: Database,
      titleRu: 'Базы данных и ORM',
      titleEn: 'Databases & ORM',
      descRu: 'Моделирование данных в PostgreSQL, SQLite, Prisma ORM и SQLAlchemy с валидацией через Zod и Pydantic.',
      descEn: 'Relational data modeling with PostgreSQL, SQLite, Prisma ORM, and SQLAlchemy with Zod and Pydantic validation.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
            {t.heading[language]}
          </h2>
        </div>

        {/* Narrative & Metrics Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-muted text-base sm:text-lg leading-relaxed">
            <p className="bg-surface/60 p-6 rounded-2xl border border-white/5 shadow-sm">
              {t.text1[language]}
            </p>
            <p className="bg-surface/60 p-6 rounded-2xl border border-white/5 shadow-sm">
              {t.text2[language]}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-secondary border border-white/5">
                <span className="block text-2xl font-mono font-bold text-foreground">29</span>
                <span className="text-xs font-medium text-muted">{t.stats.repos[language]}</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-secondary border border-white/5">
                <span className="block text-2xl font-mono font-bold text-accent">DFZ</span>
                <span className="text-xs font-medium text-muted">{t.stats.brand[language]}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-surface-secondary border border-white/5">
                <span className="block text-2xl font-mono font-bold text-indigo-400">Full-Stack</span>
                <span className="text-xs font-medium text-muted">{t.stats.focus[language]}</span>
              </div>
            </div>
          </div>

          {/* Core Competencies Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-secondary/70 border border-white/5 hover:border-white/15 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-accent group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {language === 'ru' ? item.titleRu : item.titleEn}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {language === 'ru' ? item.descRu : item.descEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

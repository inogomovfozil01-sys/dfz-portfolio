'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectCategory } from '@/types';
import { Search, Filter, ArrowLeft, ArrowUpDown, X, Sparkles } from 'lucide-react';

const categories: { labelRu: string; labelEn: string; value: ProjectCategory }[] = [
  { labelRu: 'Все проекты', labelEn: 'All Projects', value: 'All' },
  { labelRu: 'Full-Stack', labelEn: 'Full-Stack', value: 'Full-Stack' },
  { labelRu: 'AI & Автоматизация', labelEn: 'AI & Automation', value: 'AI & Automation' },
  { labelRu: 'SaaS & Системы', labelEn: 'SaaS & Systems', value: 'SaaS & Business Systems' },
  { labelRu: 'Frontend', labelEn: 'Frontend', value: 'Frontend' },
  { labelRu: 'Backend & APIs', labelEn: 'Backend & APIs', value: 'Backend & APIs' },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'latest' | 'name'>('latest');

  // Extract all unique tech tags
  const allTechTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'All' && p.category !== selectedCategory) {
          return false;
        }

        // Tech filter
        if (selectedTech !== 'All' && !p.techStack.includes(selectedTech)) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchTagline =
            p.taglineRu.toLowerCase().includes(q) || p.taglineEn.toLowerCase().includes(q);
          const matchTech = p.techStack.some((t) => t.toLowerCase().includes(q));
          return matchTitle || matchTagline || matchTech;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'latest') {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        } else {
          return a.title.localeCompare(b.title);
        }
      });
  }, [searchQuery, selectedCategory, selectedTech, sortBy]);

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedCategory !== 'All' || selectedTech !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('All');
    setSortBy('latest');
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>{language === 'ru' ? 'Назад на главную' : 'Back to Home'}</span>
        </Link>

        {/* Page Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ru' ? 'Каталог работ' : 'Project Directory'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {language === 'ru' ? 'Все подтверждённые проекты' : 'All Verified Projects'}
          </h1>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            {language === 'ru'
              ? 'Полный список публичных веб-приложений, систем автоматизации и ботов, разработанных Fozil Inogomov (DFZ) на основе реального исходного кода из GitHub.'
              : 'Complete directory of public web applications, automation bots, and software systems engineered by Fozil Inogomov (DFZ) based on verified GitHub source code.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 rounded-3xl bg-surface-secondary border border-white/5 mb-10 space-y-5">
          {/* Top row: Search input & Sort Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ru'
                    ? 'Поиск по названию, описанию или стеку...'
                    : 'Search by title, description, or tech...'
                }
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface border border-white/10 focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Reset Actions */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="flex items-center gap-2 bg-surface px-3 py-2 rounded-xl border border-white/10 text-xs font-mono text-muted">
                <ArrowUpDown className="w-3.5 h-3.5 text-accent" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'name')}
                  className="bg-transparent text-foreground focus:outline-none cursor-pointer"
                >
                  <option value="latest" className="bg-surface text-foreground">
                    {language === 'ru' ? 'Сначала новые' : 'Latest First'}
                  </option>
                  <option value="name" className="bg-surface text-foreground">
                    {language === 'ru' ? 'По названию (A-Z)' : 'By Name (A-Z)'}
                  </option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted hover:text-foreground text-xs font-mono transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{language === 'ru' ? 'Сброс' : 'Reset'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? 'bg-accent text-white shadow-md shadow-accent/20'
                      : 'bg-surface text-muted hover:text-foreground hover:bg-surface-tertiary border border-white/5'
                  }`}
                >
                  {language === 'ru' ? cat.labelRu : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* Tech Tag quick selection dropdown */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-mono text-muted">
              {language === 'ru' ? 'Фильтр по технологии:' : 'Filter by tech:'}
            </span>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="bg-surface px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-foreground focus:border-accent focus:outline-none cursor-pointer"
            >
              <option value="All" className="bg-surface">
                {language === 'ru' ? 'Все технологии' : 'All Technologies'}
              </option>
              {allTechTags.map((tech) => (
                <option key={tech} value={tech} className="bg-surface">
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Counter Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-muted mb-8 px-1">
          <span>
            {language === 'ru' ? 'Найдено проектов:' : 'Projects shown:'}{' '}
            <strong className="text-foreground">{filteredProjects.length}</strong> {language === 'ru' ? 'из' : 'of'}{' '}
            {projects.length}
          </span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} featured={false} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-surface-secondary border border-white/5 p-8">
            <p className="text-base text-muted mb-4">
              {language === 'ru'
                ? 'По вашему запросу ничего не найдено.'
                : 'No projects match your current filters.'}
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors"
            >
              {language === 'ru' ? 'Сбросить фильтры' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

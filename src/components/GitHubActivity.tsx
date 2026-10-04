'use client';

import React from 'react';
import { initialGitHubStats } from '@/data/github-stats';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Github, GitPullRequest, GitFork, Star, ArrowUpRight, FolderGit2 } from 'lucide-react';

export function GitHubActivity() {
  const { language } = useLanguage();
  const t = translations.github;
  const stats = initialGitHubStats;

  return (
    <section id="github" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-xl">
            {t.heading[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Metrics & Language Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            {/* Numbers Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-surface-secondary border border-white/5">
                <div className="flex items-center justify-between text-muted mb-2">
                  <span className="text-xs font-medium">{t.statsPublic[language]}</span>
                  <FolderGit2 className="w-4 h-4 text-accent" />
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">
                  {stats.publicRepos}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-secondary border border-white/5">
                <div className="flex items-center justify-between text-muted mb-2">
                  <span className="text-xs font-medium">{t.statsFollowers[language]}</span>
                  <Github className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">
                  {stats.followers}
                </div>
              </div>
            </div>

            {/* Language Breakdown Card */}
            <div className="p-6 rounded-2xl bg-surface-secondary border border-white/5">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t.statsLangs[language]}
              </h3>

              {/* Progress Bar */}
              <div className="h-3 w-full rounded-full overflow-hidden flex bg-surface mb-5">
                {stats.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language Legend */}
              <div className="grid grid-cols-2 gap-3">
                {stats.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-xs text-foreground/90 font-medium">
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono text-muted ml-auto">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to GitHub */}
            <a
              href="https://github.com/inogomovfozil01-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-surface-secondary hover:bg-surface-tertiary border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-foreground transition-all duration-200 group"
            >
              <span>{t.viewProfile[language]}</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Recent Activity Feed */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-surface-secondary border border-white/5">
            <h3 className="text-sm font-semibold text-foreground mb-5 flex items-center justify-between">
              <span>{t.recentCommits[language]}</span>
              <span className="text-xs font-mono text-accent">Active Repositories</span>
            </h3>

            <div className="space-y-3.5">
              {stats.recentUpdates.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-surface/70 hover:bg-surface border border-white/5 hover:border-white/15 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-accent" />
                      {item.repo}
                    </span>
                    <span className="text-[11px] font-mono text-muted">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

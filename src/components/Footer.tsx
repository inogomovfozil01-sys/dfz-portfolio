'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ArrowUp, Github, Mail } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();
  const t = translations.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Author */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-mono font-bold">
            DFZ
          </div>
          <div>
            <span className="text-sm font-semibold text-foreground block">
              {t.brand[language]}
            </span>
            <span className="text-xs text-muted">
              Full-Stack Developer • © {new Date().getFullYear()} {t.rights[language]}
            </span>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="flex items-center gap-6 text-xs text-muted">
          <a
            href="https://github.com/inogomovfozil01-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            {language === 'ru' ? 'Все проекты' : 'All Projects'}
          </Link>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground text-xs font-mono transition-colors"
          >
            <span>{t.backToTop[language]}</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}

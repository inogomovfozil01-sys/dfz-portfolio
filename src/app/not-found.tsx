'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md p-8 rounded-3xl bg-surface-secondary border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/20 blur-[60px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-accent mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404</span>
        </div>

        <h1 className="text-6xl font-extrabold font-mono tracking-tight text-foreground mb-3">
          404
        </h1>

        <h2 className="text-xl font-bold text-foreground mb-2">
          {language === 'ru' ? 'Страница не найдена' : 'Page Not Found'}
        </h2>

        <p className="text-sm text-muted mb-8 leading-relaxed">
          {language === 'ru'
            ? 'Запрошенная страница не существует или была перемещена.'
            : 'The page you requested could not be found or has been moved.'}
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-wide shadow-lg shadow-accent/25 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>{language === 'ru' ? 'Вернуться на главную' : 'Back to Home'}</span>
        </Link>
      </div>
    </div>
  );
}

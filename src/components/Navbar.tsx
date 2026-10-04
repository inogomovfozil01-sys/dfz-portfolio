'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations.nav;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for sections
      const sections = ['home', 'about', 'projects', 'skills', 'journey', 'github', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', id: 'home', label: t.home[language] },
    { href: '/#about', id: 'about', label: t.about[language] },
    { href: '/#projects', id: 'projects', label: t.projects[language] },
    { href: '/#skills', id: 'skills', label: t.skills[language] },
    { href: '/#journey', id: 'journey', label: t.journey[language] },
    { href: '/#github', id: 'github', label: t.github[language] },
    { href: '/#contact', id: 'contact', label: t.contact[language] },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/40'
            : 'bg-surface/50 backdrop-blur-md border-white/5 shadow-lg'
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-foreground font-bold tracking-wider text-lg"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-indigo-400 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-accent/25 group-hover:scale-105 transition-transform">
            DFZ
          </div>
          <span className="hidden sm:inline font-mono text-sm tracking-tight text-foreground/90 group-hover:text-accent transition-colors">
            Fozil.dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === '/' && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-muted hover:text-foreground hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <Link
            href="/projects"
            className={`ml-1 px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 ${
              pathname === '/projects'
                ? 'text-white bg-accent/20 border border-accent/40'
                : 'text-accent/90 hover:text-accent hover:bg-accent/10'
            }`}
          >
            <span>{t.allProjects[language]}</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right Actions: Language Switcher & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language between Russian and English"
            className="flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-foreground/90 border border-white/10 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* GitHub Quick Link */}
          <a
            href="https://github.com/inogomovfozil01-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground/80 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 rounded-2xl bg-surface/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl flex flex-col gap-3 z-50">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/90 hover:bg-white/5 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-accent bg-accent/10 border border-accent/20 flex items-center justify-between"
          >
            <span>{t.allProjects[language]}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}

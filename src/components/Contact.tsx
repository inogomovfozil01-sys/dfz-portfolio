'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Mail, Github, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';

export function Contact() {
  const { language } = useLanguage();
  const t = translations.contact;

  const email = 'inogomovfozil01@gmail.com';
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam detected
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t.formError[language]);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(language === 'ru' ? 'Некорректный формат email' : 'Invalid email format');
      return;
    }

    setError('');
    setSubmitted(true);

    // Trigger direct mail client opening with structured parameters
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-accent mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-xl">
            {t.heading[language]}
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
            {t.subheading[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Fast Actions */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-surface-secondary border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center gap-3 text-accent mb-3">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-muted">
                  {t.emailLabel[language]}
                </span>
              </div>
              <p className="font-mono text-base sm:text-lg text-foreground font-semibold mb-4 select-all">
                {email}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.copySuccess[language]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted" />
                      <span>{t.copyBtn[language]}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-accent hover:bg-accent-hover text-white transition-all shadow-md shadow-accent/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* GitHub Verified Channel Card */}
            <a
              href="https://github.com/inogomovfozil01-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-surface-secondary border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/5 text-foreground group-hover:scale-105 group-hover:bg-white/10 transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs font-mono text-muted">
                    @inogomovfozil01-sys
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-accent">Open →</span>
            </a>

            {/* Direct Collaboration Note */}
            <div className="p-5 rounded-2xl bg-surface/50 border border-white/5 text-xs text-muted leading-relaxed">
              <span className="text-foreground font-semibold block mb-1">
                {language === 'ru' ? 'Сотрудничество и проекты' : 'Collaboration & Roles'}
              </span>
              {language === 'ru'
                ? 'Открыт к предложениям по разработке веб-приложений, созданию архитектуры с нуля, интеграции AI-моделей и долгосрочному партнерству.'
                : 'Available for full-stack engineering, web application architecture, Gemini AI integrations, and long-term project partnerships.'}
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-surface-secondary border border-white/5">
            <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              <span>{language === 'ru' ? 'Написать сообщение' : 'Send an Inquiry'}</span>
            </h3>
            <p className="text-xs text-muted mb-6">
              {language === 'ru'
                ? 'Заполните форму, и письмо сформируется с готовой темой и текстом.'
                : 'Fill out this form to prepare a formatted email directly to my inbox.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field for anti-spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  {t.formName[language]}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'ru' ? 'Иван Иванов' : 'Alex Johnson'}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  {t.formEmail[language]}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-1.5">
                  {t.formMessage[language]}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'ru'
                      ? 'Опишите ваш проект, цели, сроки и технические пожелания...'
                      : 'Tell me about your project, goals, timeline, and requirements...'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted/40 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-400 font-medium">
                  {error}
                </p>
              )}

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{t.formSent[language]}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.formSubmit[language]}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

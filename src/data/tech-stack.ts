import { SkillCategory } from '@/types';

export const techStackCategories: SkillCategory[] = [
  {
    titleRu: 'Frontend Development',
    titleEn: 'Frontend Development',
    descriptionRu: 'Современные реактивные интерфейсы, дизайн-системы и производительный рендеринг',
    descriptionEn: 'Modern reactive user interfaces, component design systems, and high-performance rendering',
    iconName: 'Layout',
    skills: [
      { name: 'Next.js (App Router 15/16)', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs', 'Pomogayka AI'] },
      { name: 'React 19 / React Server Components', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs'] },
      { name: 'TypeScript', level: 'Advanced', verifiedIn: ['dfz-messenger', 'ClassOS', 'WordFlow', 'UzbJobs'] },
      { name: 'Tailwind CSS & Tailwind Animate', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs', 'pomogayka-ai'] },
      { name: 'Framer Motion', level: 'Proficient', verifiedIn: ['ClassOS', 'pomogayka-ai'] },
      { name: 'Radix UI Primitives', level: 'Proficient', verifiedIn: ['ClassOS'] },
      { name: 'JavaScript (ES6+ Modern)', level: 'Advanced', verifiedIn: ['Watches', 'Zvezd', 'Audiophile'] },
      { name: 'HTML5 Semantic & Modern CSS3', level: 'Advanced', verifiedIn: ['Oltin Qalam', 'Audiophile', 'Dokon'] }
    ]
  },
  {
    titleRu: 'Backend & Realtime Systems',
    titleEn: 'Backend & Realtime Systems',
    descriptionRu: 'Серверные архитектуры, асинхронные обработчики и двунаправленные сокеты',
    descriptionEn: 'Server architectures, asynchronous event processing, and bidirectional WebSockets',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', verifiedIn: ['dfz-messenger', 'Zvezd'] },
      { name: 'Next.js Route Handlers & Server Actions', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs'] },
      { name: 'Socket.IO / WebSockets', level: 'Advanced', verifiedIn: ['ClassOS', 'dfz-messenger'] },
      { name: 'Python 3 (Asyncio)', level: 'Advanced', verifiedIn: ['Bot-for-my-group', 'IQRO-ACADEMY', 'buyursin-bot'] },
      { name: 'Aiogram 3 (Python)', level: 'Advanced', verifiedIn: ['Bot-for-my-group', 'IQRO-ACADEMY', 'Avtopost'] },
      { name: 'grammY (TypeScript)', level: 'Proficient', verifiedIn: ['pomogayka-ai'] },
      { name: 'REST API Design & Webhooks', level: 'Advanced', verifiedIn: ['dfz-messenger', 'ClassOS', 'UzbJobs'] }
    ]
  },
  {
    titleRu: 'Databases & ORM',
    titleEn: 'Databases & ORM',
    descriptionRu: 'Реляционное моделирование данных, миграции и оптимизация запросов',
    descriptionEn: 'Relational data modeling, declarative migrations, and connection-pooled queries',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', verifiedIn: ['WordFlow', 'dfz-messenger', 'Bot-for-my-group', 'Zvezd'] },
      { name: 'Prisma ORM', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs', 'pomogayka-ai'] },
      { name: 'SQLAlchemy & AsyncPG', level: 'Proficient', verifiedIn: ['Bot-for-my-group'] },
      { name: 'SQLite', level: 'Proficient', verifiedIn: ['IQRO-ACADEMY', 'buyursin-bot'] },
      { name: 'Zod Runtime Schema Validation', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs', 'pomogayka-ai'] }
    ]
  },
  {
    titleRu: 'AI & Cognitive Engineering',
    titleEn: 'AI & Cognitive Engineering',
    descriptionRu: 'Мультимодальные модели, vision-пайплайны и алгоритмы адаптивного обучения',
    descriptionEn: 'Multimodal foundation models, vision pipelines, and adaptive learning algorithms',
    iconName: 'Sparkles',
    skills: [
      { name: 'Google Gemini 3.8 Flash API', level: 'Advanced', verifiedIn: ['WordFlow', 'UzbJobs', 'ClassOS'] },
      { name: 'Google Gemini Vision (Multimodal OCR)', level: 'Advanced', verifiedIn: ['pomogayka-ai'] },
      { name: 'SuperMemo SM-2 Spaced Repetition', level: 'Advanced', verifiedIn: ['WordFlow'] },
      { name: 'Automated AI Match & Scoring Engines', level: 'Advanced', verifiedIn: ['UzbJobs'] },
      { name: 'Multimodal Context Prompting', level: 'Advanced', verifiedIn: ['WordFlow', 'pomogayka-ai'] }
    ]
  },
  {
    titleRu: 'DevOps & Tooling',
    titleEn: 'DevOps & Tooling',
    descriptionRu: 'Инфраструктура сборки, тестирование, контейнеризация и контроль версий',
    descriptionEn: 'Build tooling, continuous deployment, containerization, and version control',
    iconName: 'Cpu',
    skills: [
      { name: 'Git & GitHub Workflow', level: 'Advanced', verifiedIn: ['30+ Public/Team Repositories'] },
      { name: 'Vercel Deployment & Cloud Edge', level: 'Advanced', verifiedIn: ['ClassOS', 'WordFlow', 'UzbJobs', 'Watches'] },
      { name: 'Docker & Docker Compose', level: 'Proficient', verifiedIn: ['dfz-messenger', 'buyursin-bot'] },
      { name: 'Vitest Unit & Integration Testing', level: 'Proficient', verifiedIn: ['ClassOS', 'UzbJobs', 'pomogayka-ai'] },
      { name: 'Poetry & Pipenv (Python)', level: 'Proficient', verifiedIn: ['Bot-for-my-group', 'buyursin-bot'] },
      { name: 'Monorepo Architecture (npm workspaces)', level: 'Proficient', verifiedIn: ['dfz-messenger'] }
    ]
  }
];

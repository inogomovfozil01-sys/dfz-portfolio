import { JourneyMilestone } from '@/types';

export const developerJourney: JourneyMilestone[] = [
  {
    period: '2026 • Текущий этап',
    titleRu: 'Full-Stack и AI-инженерия нового поколения',
    titleEn: 'Next-Gen Full-Stack & AI Systems Engineering',
    subtitleRu: 'Next.js 16, React 19, Google Gemini 3.8 Flash, Socket.IO, Monorepo',
    subtitleEn: 'Next.js 16, React 19, Google Gemini 3.8 Flash, Socket.IO, Monorepo',
    descriptionRu: 'Фокус на проектировании высоконагруженных веб-сервисов, глубокой интеграции больших языковых моделей и мультимодального зрения (Gemini Vision), распределенных систем обмена сообщениями и наукоемких образовательных платформ.',
    descriptionEn: 'Engineering complex full-stack web products, deep integration of foundation LLMs and multimodal vision (Gemini Vision), real-time WebSocket messaging architectures, and cognitive educational platforms.',
    highlights: [
      'Архитектура ClassOS — системы школьного управления с Realtime-чатом и AI-поддержкой',
      'Разработка платформы WordFlow с алгоритмом SM-2 и персональным AI-тьютором',
      'Создание UzbJobs — интеллектуального агрегатора вакансий с AI Match скорингом',
      'Проектирование DFZ Messenger с Monorepo-структурой и двунаправленными вебсокетами'
    ],
    keyRepos: ['ClassOs', 'wordflow', 'uzbjobs', 'pomogayka-ai', 'dfz-messenger']
  },
  {
    period: '2026 • Q1 - Q2',
    titleRu: 'Базы данных, асинхронные бэкенды и веб-интерфейсы',
    titleEn: 'Database Systems, Asynchronous Backends & Frontend Mastery',
    subtitleRu: 'PostgreSQL, Prisma, SQLAlchemy, AsyncPG, Vanilla JS ES6+, Responsive UI',
    subtitleEn: 'PostgreSQL, Prisma, SQLAlchemy, AsyncPG, Vanilla JS ES6+, Responsive UI',
    descriptionRu: 'Углубление в реляционные базы данных, пулы соединений, миграции и клиентскую производительность. Разработка интерактивных витрин и специализированных бот-систем с управлением состоянием.',
    descriptionEn: 'Deep-dive into relational schema design, connection pooling, and client-side performance. Crafting interactive product storefronts and stateful bot systems.',
    highlights: [
      'Разработка Watches Luxury Store — интерактивной витрины на нативном ES6+ без лишних зависимостей',
      'Создание ботов с реляционными БД: Bot-for-my-group (PostgreSQL/SQLAlchemy) и Zvezd (Node.js/pg)',
      'Командная разработка веб-порталов Oltin Qalam, Dokon и Al-Anvar с адаптивной версткой'
    ],
    keyRepos: ['watches', 'Bot-for-my-group', 'Zvezd', 'oltin-kalam', 'Dokon']
  },
  {
    period: '2025 • Старт',
    titleRu: 'Автоматизация, скриптинг и интеграция API',
    titleEn: 'Automation, Scripting & API Integrations',
    subtitleRu: 'Python, Aiogram 3, Asynchronous Programming, Media Processing',
    subtitleEn: 'Python, Aiogram 3, Asynchronous Programming, Media Processing',
    descriptionRu: 'Начало пути в разработке серверной логики и автоматизации. Создание первых асинхронных ботов, работа с внешними API, парсинг медиа-потоков и интеграция хранилищ данных.',
    descriptionEn: 'Foundational phase in backend logic and workflow automation. Developing asynchronous Telegram bots, external API integrations, media stream processors, and structured storage.',
    highlights: [
      'Освоение асинхронной архитектуры на Python (asyncio, aiogram 3)',
      'Реализация автоматизированных ботов для медиа-обработки и интерактивных викторин',
      'Формирование инженерной культуры чистого кода, контроля версий Git и работы в GitHub'
    ],
    keyRepos: ['IQRO-ACADEMY', 'Quiz_bot', 'Save_video_bro', 'telegram-bot']
  }
];

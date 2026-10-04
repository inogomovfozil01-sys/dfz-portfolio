import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'classos',
    title: 'ClassOS',
    taglineRu: 'Операционная веб-система для управления учебным процессом класса',
    taglineEn: 'Comprehensive Class OS & Electronic Gradebook Platform',
    problemRu: 'Разрозненность школьных инструментов: отсутствие единого удобного пространства для расписания, домашних заданий, оценок, чата и файлообмена для учеников, учителей и родителей.',
    problemEn: 'Fragmented school tools: lack of a unified digital workspace for timetables, homework assignments, grades, real-time chat, and file sharing for students, teachers, and parents.',
    featuresRu: [
      'Электронный дневник и журнал с гибкой системой ролей (Owner, Admin, Teacher, Student, Parent)',
      'Интерактивное расписание занятий и трекер домашних заданий с дедлайнами',
      'Встроенный Realtime-чат на WebSockets (Socket.IO) для оперативного общения',
      'Интеграция с Google Gemini AI для интеллектуальной поддержки учебных задач',
      'Защищенная аутентификация с bcryptjs, JWT-сессиями и строгой валидацией данных через Zod'
    ],
    featuresEn: [
      'Electronic diary & gradebook with granular role-based access control (Owner, Admin, Teacher, Student, Parent)',
      'Interactive class timetable & homework tracker with deadlines',
      'Built-in real-time classroom messaging powered by Socket.IO WebSockets',
      'Google Gemini AI integration for intelligent learning assistance',
      'Secure authentication using bcryptjs, JWT sessions, and strict Zod runtime schema validation'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Socket.IO', 'Gemini AI', 'Radix UI', 'Framer Motion'],
    category: 'Full-Stack',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/ClassOs',
    liveUrl: 'https://classos-five.vercel.app',
    screenshot: '/projects/classos.png',
    statusRu: 'Production',
    statusEn: 'Production',
    updatedAt: '2026-09-25'
  },
  {
    id: 'wordflow',
    title: 'WordFlow',
    taglineRu: 'Платформа изучения английской лексики с алгоритмом SM-2 и AI-тьютором',
    taglineEn: 'Production-Ready English Vocabulary Platform with SM-2 Spaced Repetition & AI Tutor',
    problemRu: 'Низкая эффективность традиционного заучивания слов: забывание лексики без системного интервального повторения и недостаток контекстной языковой практики с обратной связью.',
    problemEn: 'Inefficient rote memorization: rapid memory decay without scientific spaced repetition and lack of personalized contextual feedback for learners.',
    featuresRu: [
      'Алгоритм интервальных повторений SuperMemo SM-2 с динамическим расчетом интервалов и фактора легкости',
      '10 интерактивных режимов тренировок (Flashcards, Context Fill, Audio Quiz, Speed Recall и др.)',
      'Двуязычная поддержка с качественными переводами на русский и узбекский языки',
      'Персональный AI-тьютор на базе Google Gemini 3.8 Flash для генерации контекстных примеров и разбора нюансов',
      'Полноценный бэкенд на PostgreSQL и Prisma ORM с отслеживанием прогресса от уровня A1 до C2'
    ],
    featuresEn: [
      'Scientific SuperMemo SM-2 spaced repetition algorithm with adaptive review intervals and ease factor calculation',
      '10 multimodal interactive practice modes (Flashcards, Context Fill, Audio Quiz, Speed Recall, etc.)',
      'Bilingual Russian and Uzbek contextual translations tailored for Central Asian learners',
      'Personalized AI tutor powered by Google Gemini 3.8 Flash for instant nuances breakdown and example generation',
      'Robust PostgreSQL and Prisma ORM backend tracking learning mastery curves from A1 to C2'
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Google Gemini 3.8 Flash', 'Tailwind CSS', 'Jose JWT'],
    category: 'AI & Automation',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/wordflow',
    liveUrl: 'https://wordflow-fozilpro.vercel.app',
    screenshot: '/projects/wordflow.png',
    statusRu: 'Production',
    statusEn: 'Production',
    updatedAt: '2026-09-20'
  },
  {
    id: 'uzbjobs',
    title: 'UzbJobs',
    taglineRu: 'AI-платформа агрегации вакансий и умного подбора работы в Узбекистане',
    taglineEn: 'Intelligent Job Aggregation & AI-Driven Hiring Platform for Uzbekistan',
    problemRu: 'Хаотичный рынок труда в локальном сегменте: вакансии раскиданы по разным каналам и порталам, соискателям сложно оценить совместимость своего резюме с требованиями.',
    problemEn: 'Scattered local employment market: job listings are fragmented across platforms, making it time-consuming to evaluate skill match and draft tailored applications.',
    featuresRu: [
      'Автоматическое обнаружение и сбор вакансий через Google Search API и парсинг с помощью Cheerio',
      'Интеллектуальная обработка и дедупликация вакансий с помощью Google Gemini API',
      'Расчет коэффициента совместимости соискателя AI Match на основе профиля и навыков',
      'Генерация персонализированных сопроводительных писем на трех языках (узбекский, русский, английский)',
      'Современная серверная архитектура на Next.js 15, React 19, Tailwind CSS, Prisma ORM и NextAuth'
    ],
    featuresEn: [
      'Automated job discovery pipeline utilizing Google Search API and robust Cheerio HTML parsing',
      'AI-powered vacancy extraction, categorization, and deduplication via Google Gemini API',
      'Algorithmic AI Match score calculating applicant compatibility against position requirements',
      'Automated multi-language cover letter generation tailored in Uzbek, Russian, and English',
      'Modern server-rendered stack on Next.js 15, React 19, Tailwind CSS, Prisma ORM, and NextAuth'
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma ORM', 'Gemini AI', 'Tailwind CSS', 'Cheerio', 'NextAuth'],
    category: 'SaaS & Business Systems',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/uzbjobs',
    liveUrl: 'https://uzbjobs.vercel.app',
    screenshot: '/projects/uzbjobs.png',
    statusRu: 'Production',
    statusEn: 'Production',
    updatedAt: '2026-09-14'
  },
  {
    id: 'pomogayka-ai',
    title: 'Помогайка DFZ (AI Homework Ecosystem)',
    taglineRu: 'AI-экосистема образовательной помощи школьникам с Google Gemini Vision',
    taglineEn: 'AI Educational Assistant Ecosystem with Multimodal Gemini Vision',
    problemRu: 'Школьники сталкиваются с трудными заданиями и не всегда могут получить понятное пошаговое объяснение на доступном для их возраста языке.',
    problemEn: 'School students frequently hit roadblocks on homework without access to clear, step-by-step explanations adapted to their grade level.',
    featuresRu: [
      'Telegram-бот на базе grammY с поддержкой контекстного диалога и тем супергрупп по 1–11 классам',
      'Мгновенное оптическое распознавание рукописного текста и страниц учебников через Google Gemini Vision',
      'Адаптивное объяснение решений: понятный язык под возраст ученика, исключающий слепое списывание',
      'Next.js веб-дашборд с административной панелью, аналитикой обращений и управлением базой данных',
      'Интеграция с PostgreSQL через Prisma ORM с высокой устойчивостью к пиковым нагрузкам'
    ],
    featuresEn: [
      'GrammY Telegram bot integration supporting structured forum topics for grades 1 through 11',
      'Instant multimodal OCR for textbook pages and handwritten homework via Google Gemini Vision',
      'Adaptive age-tailored pedagogical explanations focused on genuine concept comprehension',
      'Next.js web dashboard with admin analytics, query statistics, and database oversight',
      'PostgreSQL data layer managed via Prisma ORM for resilience and low latency'
    ],
    techStack: ['TypeScript', 'grammY', 'Google Gemini Vision', 'Next.js', 'Prisma ORM', 'PostgreSQL', 'Framer Motion'],
    category: 'AI & Automation',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/pomogayka-ai',
    screenshot: '/projects/pomogayka.png',
    statusRu: 'В активной разработке',
    statusEn: 'In Active Development',
    updatedAt: '2026-09-20'
  },
  {
    id: 'dfz-messenger',
    title: 'DFZ Messenger',
    taglineRu: 'Высокопроизводительный realtime web-мессенджер на WebSockets',
    taglineEn: 'High-Performance Realtime Web Messenger Architecture',
    problemRu: 'Необходимость быстрой, независимой и масштабируемой системы обмена сообщениями без задержек и перегрузки сторонними библиотеками.',
    problemEn: 'The demand for a fast, independent, and scalable real-time messaging architecture with zero latency and clean protocol control.',
    featuresRu: [
      'Модульная Monorepo-архитектура (apps/client, apps/server, packages/shared) со сквозной типизацией',
      'Двунаправленная коммуникация реального времени через Socket.IO с поддержкой комнат и каналов',
      'Индикаторы присутствия пользователей онлайн, статусы доставки и индикаторы набора текста',
      'Бэкенд на Express и PostgreSQL с оптимизированным пулом соединений и реляционными связями',
      'Готовая инфраструктура контейнеризации и конфигурации для развёртывания в облаке'
    ],
    featuresEn: [
      'Modular Monorepo architecture (apps/client, apps/server, packages/shared) with end-to-end TypeScript safety',
      'Bidirectional real-time event pipeline built on Socket.IO supporting multi-room messaging',
      'Live user presence indicators, message delivery status receipts, and typing stream telemetry',
      'Robust Express and PostgreSQL server architecture with connection pooling and relational indexing',
      'Production-oriented Docker container setup and cloud deployment configuration'
    ],
    techStack: ['TypeScript', 'Next.js', 'Express', 'Socket.IO', 'PostgreSQL', 'Docker', 'Monorepo'],
    category: 'Full-Stack',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/dfz-messenger',
    screenshot: '/projects/dfz-messenger.png',
    statusRu: 'В активной разработке',
    statusEn: 'In Active Development',
    updatedAt: '2026-09-26'
  },
  {
    id: 'watches',
    title: 'Watches Luxury Store',
    taglineRu: 'Интерактивная витрина премиального часового бутика',
    taglineEn: 'Interactive Modern Luxury Watch Showcase & Storefront',
    problemRu: 'Создание безупречного премиального пользовательского интерфейса с плавной анимацией и динамическим управлением состоянием без тяжелых фреймворков.',
    problemEn: 'Engineering an immaculate luxury e-commerce experience with fluid micro-interactions and pure vanilla JavaScript state control.',
    featuresRu: [
      'Чистая архитектура на нативном JavaScript (ES6+), современном CSS3 и семантическом HTML5',
      'Динамическая фильтрация и сортировка коллекций с мгновенным откликом интерфейса',
      'Интерактивная корзина покупателя с сохранением состояния в LocalStorage',
      'Адаптивная премиальная верстка с гладкими переходами и поддержкой всех типов экранов',
      'Модульные тестовые скрипты валидации данных магазина (test_store.js, test_validator.js)'
    ],
    featuresEn: [
      'Clean architecture on pure modern JavaScript (ES6+), advanced CSS3, and semantic HTML5',
      'Dynamic collection filtering and multi-attribute sorting with instantaneous response',
      'Interactive cart state management with persistent LocalStorage syncing',
      'Adaptive luxury dark layout with refined transitions across desktop and mobile',
      'Modular verification and automated testing suites (test_store.js, test_validator.js)'
    ],
    techStack: ['JavaScript (ES6+)', 'CSS3 Modern', 'HTML5 Semantic', 'LocalStorage', 'Responsive UI'],
    category: 'Frontend',
    featured: true,
    repoUrl: 'https://github.com/inogomovfozil01-sys/watches',
    liveUrl: 'https://watches-fozilpro.vercel.app',
    screenshot: '/projects/watches.png',
    statusRu: 'Production',
    statusEn: 'Production',
    updatedAt: '2026-09-15'
  },
  {
    id: 'oltin-kalam',
    title: 'Oltin Qalam',
    taglineRu: 'Многостраничный цифровой портал издательского и литературного конкурса',
    taglineEn: 'Digital Publishing Portal & Literary Awards Media Platform',
    problemRu: 'Комплексная презентация обширного литературного каталога, карточек авторов, статей и обращений с четкой структурой навигации.',
    problemEn: 'Complex publishing presentation structuring extensive book catalogs, author profiles, editorial articles, and public appeals.',
    featuresRu: [
      'Разветвленная многостраничная архитектура (каталог, авторы, статьи, издатели, контакты, обращения)',
      'Полная адаптивность под мобильные устройства и планшеты с сохранением типографики',
      'Оптимизированная медиа-структура и ускоренная загрузка графических материалов'
    ],
    featuresEn: [
      'Multi-page structural navigation (catalog, authors, articles, publishers, appeals, and contacts)',
      'Mobile-first responsive typography and clean grid systems',
      'Optimized asset loading and high-fidelity media rendering'
    ],
    techStack: ['HTML5', 'CSS3 Grid/Flexbox', 'Responsive Design', 'JavaScript'],
    category: 'Frontend',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/oltin-kalam',
    liveUrl: 'https://oltin-kalam.vercel.app',
    screenshot: '/projects/oltin-kalam.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-09-22'
  },
  {
    id: 'dokon',
    title: 'Dokon Marketplace UI',
    taglineRu: 'Современный интерфейс интернет-магазина с каталогом и корзиной',
    taglineEn: 'Modern E-Commerce Marketplace UI & Shopping Cart Interface',
    problemRu: 'Создание интуитивно понятного интерфейса онлайн-покупок с быстрым просмотром товаров и оформлением заказа.',
    problemEn: 'Designing a lightweight, intuitive shopping UI with rapid product discovery and streamlined checkout mechanics.',
    featuresRu: [
      'Командная разработка с продуманной организацией компонентов и модульной структурой стилей',
      'Интерактивный каталог товаров с детализированными карточками и кнопками быстрого заказа',
      'Рабочий модуль корзины с подсчетом стоимости и управлением количеством'
    ],
    featuresEn: [
      'Collaborative team project following modular CSS styling conventions',
      'Interactive merchandise catalog with product modals and quick-add actions',
      'Functional cart subsystem with live total calculations and quantity controls'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git Collaboration'],
    category: 'Frontend',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/Dokon',
    liveUrl: 'https://dokon-roan.vercel.app',
    screenshot: '/projects/dokon.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-09-22'
  },
  {
    id: 'audiophile',
    title: 'Audiophile Storefront',
    taglineRu: 'Минималистичный интерфейс магазина профессиональной аудиотехники',
    taglineEn: 'Minimalist High-End Audio Equipment Storefront UI',
    problemRu: 'Презентация премиальной аудиотехники с фокусом на визуальную эстетику и эргономику.',
    problemEn: 'Presenting high-end consumer audio hardware with modern visual hierarchy and elegant spacing.',
    featuresRu: [
      'Современная типографическая сетка в темном стиле с акцентом на продуктовые рендеры',
      'Векторная графика SVG для идеального отображения на дисплеях высокой плотности',
      'Адаптивная верстка с плавной реакцией на взаимодействие'
    ],
    featuresEn: [
      'Editorial dark grid typography highlighting product industrial design',
      'Crisp resolution-independent SVG iconography across high-DPI displays',
      'Responsive flexbox layout with elegant interaction feedback'
    ],
    techStack: ['HTML5', 'CSS3', 'SVG Graphics', 'Responsive Layout'],
    category: 'Frontend',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/Audiophile',
    liveUrl: 'https://audiophile-ruby-ten.vercel.app',
    screenshot: '/projects/audiophile.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-09-24'
  },
  {
    id: 'al-anvar',
    title: 'Al-Anvar Travel Services',
    taglineRu: 'Лендинг туристических и паломнических программ',
    taglineEn: 'Travel & Pilgrimage Services Showcase Landing Page',
    problemRu: 'Информативное и эстетичное представление маршрутов, условий и пакетов услуг для путешественников.',
    problemEn: 'Delivering an informative and trustworthy presentation of travel itineraries, service packages, and booking details.',
    featuresRu: [
      'Тематический визуальный дизайн с продуманными информационными блоками',
      'Удобная форма обратной связи и интерактивные триггеры целевого действия',
      'Высокая скорость загрузки благодаря легковесному коду'
    ],
    featuresEn: [
      'Thematic visual styling with structured itinerary and package blocks',
      'Streamlined call-to-action touchpoints for customer inquiries',
      'Ultra-fast load times through lightweight zero-dependency markup'
    ],
    techStack: ['HTML5', 'CSS3 Modern', 'Responsive Web Design'],
    category: 'Frontend',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/AL-ANVAR',
    liveUrl: 'https://al-anvar.vercel.app',
    screenshot: '/projects/al-anvar.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-09-19'
  },
  {
    id: 'bot-for-my-group',
    title: 'Group Workflow Automation Bot',
    taglineRu: 'Асинхронный Telegram-бот на Python для управления сообществом и автоматизации рутины',
    taglineEn: 'Asynchronous Python Telegram Automation Engine for Community Workflows',
    problemRu: 'Рутинное модерирование, учет активности и автоматизация регламентных задач в сообществах и группах.',
    problemEn: 'Manual overhead in managing high-volume telegram community operations, activity tracking, and repetitive tasks.',
    featuresRu: [
      'Построен на современном асинхронном фреймворке Aiogram 3.24 с быстрой диспетчеризацией событий',
      'Работа с базой данных PostgreSQL через SQLAlchemy 2.0 и высокопроизводительный драйвер asyncpg',
      'Менеджмент зависимостей через Poetry, строгое разделение логики и надежная обработка исключений',
      'Интеграция с внешними медиа-библиотеками и фоновыми задачами'
    ],
    featuresEn: [
      'Engineered on cutting-edge asynchronous Aiogram 3.24 with high-throughput event dispatching',
      'PostgreSQL data tier with SQLAlchemy 2.0 ORM and ultra-fast non-blocking asyncpg driver',
      'Poetry-managed reproducible dependency graph with decoupled service handlers',
      'External media parsing and scheduled background worker integrations'
    ],
    techStack: ['Python 3.12', 'Aiogram 3', 'SQLAlchemy', 'AsyncPG', 'PostgreSQL', 'Poetry'],
    category: 'Backend & APIs',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/Bot-for-my-group',
    screenshot: '/projects/bot-for-my-group.png',
    statusRu: 'Production',
    statusEn: 'Production',
    updatedAt: '2026-05-16'
  },
  {
    id: 'zvezd-giveaway',
    title: 'Zvezd Contest Engine',
    taglineRu: 'Система проведения прозрачных розыгрышей и опросов в Telegram',
    taglineEn: 'Contest & Interactive Polling System for Telegram Channels',
    problemRu: 'Обеспечение автоматизированных и честных розыгрышей для каналов с верификацией участников.',
    problemEn: 'Running transparent, automated giveaways and polling verifications in broadcast channels.',
    featuresRu: [
      'Архитектура на Node.js и `node-telegram-bot-api` с хранением данных в PostgreSQL',
      'Автоматическая публикация анонса в целевой канал при инициализации розыгрыша админом',
      'Подсчет голосов, валидация лимита участников и случайный выбор победителя'
    ],
    featuresEn: [
      'Node.js and node-telegram-bot-api architecture backed by PostgreSQL persistence',
      'Automated announcement broadcasting to connected channels upon admin initiation',
      'Live vote tallying, participant cap checks, and provably fair automated winner selection'
    ],
    techStack: ['Node.js', 'JavaScript', 'PostgreSQL (pg)', 'Telegram API', 'dotenv'],
    category: 'Backend & APIs',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/Zvezd',
    screenshot: '/projects/zvezd.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-04-01'
  },
  {
    id: 'iqro-academy',
    title: 'IQRO Academy Bot',
    taglineRu: 'Чат-бот образовательного центра для навигации по курсам и учету студентов',
    taglineEn: 'Educational Center Automation & Course Navigation Bot',
    problemRu: 'Автоматизация первичной консультации студентов и предоставления учебных материалов.',
    problemEn: 'Automating student onboarding, course directory navigation, and inquiry processing.',
    featuresRu: [
      'Асинхронная архитектура на Aiogram 3 с хранилищем SQLite и валидацией через Pydantic',
      'Интерактивное меню с программами обучения, расписанием и контактами',
      'База данных пользователей для оперативного информирования об обновлениях'
    ],
    featuresEn: [
      'Async Aiogram 3 architecture with SQLite persistence and Pydantic schema validation',
      'Interactive multi-level inline menus covering course syllabi and schedules',
      'Student lead database for scheduled announcements and enrollment tracking'
    ],
    techStack: ['Python', 'Aiogram 3', 'SQLite', 'Pydantic', 'Asyncio'],
    category: 'AI & Automation',
    featured: false,
    repoUrl: 'https://github.com/inogomovfozil01-sys/IQRO-ACADEMY',
    screenshot: '/projects/iqro.png',
    statusRu: 'Завершен',
    statusEn: 'Completed',
    updatedAt: '2026-01-24'
  }
];

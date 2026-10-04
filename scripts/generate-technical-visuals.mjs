import { chromium } from 'playwright';
import path from 'path';

const visuals = [
  {
    id: 'wordflow',
    title: 'WordFlow Architecture',
    subtitle: 'SM-2 Cognitive Spaced Repetition & Gemini 3.8 Flash AI',
    badge: 'Cognitive Science + LLM Engine',
    accent: '#6D7CFF',
    tags: ['SuperMemo SM-2', 'Next.js 16', 'PostgreSQL', 'Prisma ORM', 'RU/UZ Translations', 'Gemini Flash'],
    metrics: [
      { label: 'Algorithm', value: 'SM-2 Adaptive' },
      { label: 'Modes', value: '10 Interactive' },
      { label: 'Vocabulary', value: 'A1 → C2' },
      { label: 'AI Model', value: 'Gemini 3.8 Flash' }
    ],
    codeSnippet: `// SM-2 Spaced Repetition calculation
const calculateReview = (quality: number, factor: number, repetitions: number) => {
  const newFactor = Math.max(1.3, factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  const nextInterval = repetitions === 0 ? 1 : repetitions === 1 ? 6 : Math.round(repetitions * newFactor);
  return { nextInterval, newFactor };
};`
  },
  {
    id: 'watches',
    title: 'Watches Luxury Storefront',
    subtitle: 'High-Performance Vanilla JavaScript ES6+ & CSS3 Animations',
    badge: 'Zero-Dependency Vanilla Architecture',
    accent: '#D4AF37',
    tags: ['JavaScript (ES6+)', 'Modern CSS3', 'HTML5 Semantic', 'LocalStorage Cart', 'Responsive UI'],
    metrics: [
      { label: 'Dependencies', value: 'Zero (Vanilla)' },
      { label: 'Cart Sync', value: 'LocalStorage' },
      { label: 'Performance', value: '100 Score' },
      { label: 'Tests', value: 'Modular Suite' }
    ],
    codeSnippet: `// Pure JavaScript reactive store state
class StoreEngine {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('watches_cart') || '[]');
  }
  filterByCollection(brand, priceRange) {
    return this.catalog.filter(item => item.brand === brand && item.price <= priceRange);
  }
}`
  },
  {
    id: 'pomogayka',
    title: 'Помогайка DFZ Ecosystem',
    subtitle: 'Multimodal AI Educational Bot & Next.js Admin Dashboard',
    badge: 'Google Gemini Vision OCR + grammY',
    accent: '#8B5CF6',
    tags: ['Google Gemini Vision', 'grammY (TS)', 'Next.js 15', 'Prisma ORM', 'PostgreSQL', '1-11 Grades'],
    metrics: [
      { label: 'Vision OCR', value: 'Multimodal' },
      { label: 'Audience', value: 'Grades 1–11' },
      { label: 'Bot Engine', value: 'grammY Framework' },
      { label: 'Database', value: 'PostgreSQL' }
    ],
    codeSnippet: `// Multimodal Gemini Vision homework OCR & step-by-step reasoning
async function processHomework(photoBuffer: Buffer, grade: number) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = \`Explain step-by-step for a grade \${grade} student:\`;
  return await model.generateContent([prompt, { inlineData: { data: photoBuffer.toString('base64'), mimeType: 'image/jpeg' }}]);
}`
  },
  {
    id: 'dfz-messenger',
    title: 'DFZ Messenger Architecture',
    subtitle: 'Low-Latency Realtime WebSockets on Next.js, Express & Socket.IO',
    badge: 'Monorepo Realtime Messaging',
    accent: '#3B82F6',
    tags: ['Socket.IO', 'Next.js', 'Express', 'PostgreSQL', 'Monorepo', 'TypeScript End-to-End'],
    metrics: [
      { label: 'Protocol', value: 'WebSockets' },
      { label: 'Architecture', value: 'npm Monorepo' },
      { label: 'Telemetry', value: 'Presence & Typing' },
      { label: 'Data Store', value: 'PostgreSQL Pooled' }
    ],
    codeSnippet: `// Realtime Socket.IO room dispatching & typing indicator
io.on('connection', (socket) => {
  socket.on('join_room', ({ roomId, userId }) => {
    socket.join(roomId);
    socket.to(roomId).emit('user_presence', { userId, status: 'online' });
  });
});`
  },
  {
    id: 'bot-for-my-group',
    title: 'Community Automation Bot',
    tagline: 'Asynchronous Python Workflow & Telemetry Engine',
    subtitle: 'High-Throughput Telegram Dispatcher with SQLAlchemy & AsyncPG',
    badge: 'Asynchronous Python Architecture',
    accent: '#10B981',
    tags: ['Python 3.12', 'Aiogram 3.24', 'SQLAlchemy 2.0', 'AsyncPG', 'PostgreSQL', 'Poetry'],
    metrics: [
      { label: 'Framework', value: 'Aiogram 3.24' },
      { label: 'Driver', value: 'asyncpg' },
      { label: 'Runtime', value: 'asyncio' },
      { label: 'Packaging', value: 'Poetry' }
    ],
    codeSnippet: `# Async SQLAlchemy & Aiogram 3 Event Handler
@router.message(Command("moderate"))
async def handle_moderation(message: Message, session: AsyncSession):
    user_status = await check_activity_score(session, message.from_user.id)
    await message.reply(f"Status verified: {user_status}")`
  },
  {
    id: 'zvezd',
    title: 'Zvezd Contest Engine',
    subtitle: 'Transparent Telegram Channel Giveaway & Poll Verification',
    badge: 'Contest & Automated Voting System',
    accent: '#F59E0B',
    tags: ['Node.js', 'PostgreSQL', 'node-telegram-bot-api', 'dotenv', 'Channel Broadcast'],
    metrics: [
      { label: 'Environment', value: 'Node.js' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'Target', value: 'Channels & Groups' },
      { label: 'Logic', value: 'Fair Random Winner' }
    ],
    codeSnippet: `// Automated channel announcement & participant tally
bot.onText(/\\/start/, async (msg) => {
  const contest = await db.query('SELECT * FROM contests WHERE active = true');
  await bot.sendMessage(channelId, \`🎁 New Contest: \${contest.title}\`);
});`
  },
  {
    id: 'iqro',
    title: 'IQRO Academy Assistant',
    subtitle: 'Educational Center Course Catalog & Onboarding Bot',
    badge: 'Education Management Bot',
    accent: '#06B6D4',
    tags: ['Python', 'Aiogram 3', 'SQLite', 'Pydantic', 'Asyncio'],
    metrics: [
      { label: 'Platform', value: 'Telegram Bot' },
      { label: 'Database', value: 'SQLite' },
      { label: 'Validation', value: 'Pydantic v2' },
      { label: 'Navigation', value: 'Inline Keyboards' }
    ],
    codeSnippet: `# Course navigation & student lead capturing
@dp.callback_query(F.data.startswith("course_"))
async def show_course_details(callback: CallbackQuery):
    course_id = callback.data.split("_")[1]
    details = await db.get_course(course_id)
    await callback.message.edit_text(details.description)`
  }
];

async function generate() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 750 } });

  for (const v of visuals) {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            background: #0C0E14;
            color: #F5F6FA;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            width: 1200px;
            height: 750px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 56px;
            position: relative;
            overflow: hidden;
          }
          .glow {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, ${v.accent}25 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
          }
          .grid-bg {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 14px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.12);
            font-size: 13px;
            font-family: monospace;
            color: ${v.accent};
            margin-bottom: 20px;
          }
          .title {
            font-size: 44px;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin-bottom: 12px;
            color: #FFFFFF;
          }
          .subtitle {
            font-size: 20px;
            color: #969BA8;
            max-width: 780px;
            line-height: 1.4;
            margin-bottom: 32px;
          }
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 36px;
          }
          .tag {
            padding: 6px 12px;
            background: #171A22;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 8px;
            font-size: 13px;
            font-family: monospace;
            color: #D1D5DB;
          }
          .bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 24px;
          }
          .metrics-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .metric-card {
            background: #141720;
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 14px;
            padding: 16px 20px;
          }
          .metric-label {
            font-size: 12px;
            color: #717684;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 6px;
          }
          .metric-value {
            font-size: 18px;
            font-weight: 700;
            color: #FFFFFF;
            font-family: monospace;
          }
          .code-box {
            background: #08090D;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 14px;
            padding: 18px 22px;
            font-family: "JetBrains Mono", Consolas, monospace;
            font-size: 12.5px;
            line-height: 1.6;
            color: #E2E8F0;
            white-space: pre-wrap;
          }
          .code-header {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
        </style>
      </head>
      <body>
        <div class="glow"></div>
        <div class="grid-bg"></div>

        <div style="position: relative; z-index: 2;">
          <div class="badge">◆ ${v.badge}</div>
          <h1 class="title">${v.title}</h1>
          <p class="subtitle">${v.subtitle}</p>
          <div class="tags">
            ${v.tags.map(t => `<div class="tag">${t}</div>`).join('')}
          </div>
        </div>

        <div class="bottom-grid" style="position: relative; z-index: 2;">
          <div class="metrics-grid">
            ${v.metrics.map(m => `
              <div class="metric-card">
                <div class="metric-label">${m.label}</div>
                <div class="metric-value">${m.value}</div>
              </div>
            `).join('')}
          </div>
          <div class="code-box">
            <div class="code-header">
              <div class="dot" style="background:#EF4444;"></div>
              <div class="dot" style="background:#F59E0B;"></div>
              <div class="dot" style="background:#10B981;"></div>
              <span style="margin-left: 8px; font-size: 11px; color: #64748B;">verified_source.ts</span>
            </div>
            ${v.codeSnippet}
          </div>
        </div>
      </body>
      </html>
    `;

    await page.setContent(html);
    await page.waitForTimeout(500);
    const dest = path.resolve('public', 'projects', `${v.id}.png`);
    await page.screenshot({ path: dest });
    console.log(`Rendered technical visual for: ${v.id}.png`);
  }

  await browser.close();
  console.log('All technical visuals generated!');
}

generate().catch(console.error);

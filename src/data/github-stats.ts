import { GitHubStatsData } from '@/types';

export const initialGitHubStats: GitHubStatsData = {
  publicRepos: 29,
  followers: 3,
  following: 0,
  languages: [
    { name: 'TypeScript', percentage: 72, color: '#3178C6' },
    { name: 'Python', percentage: 14, color: '#3572A5' },
    { name: 'JavaScript', percentage: 7, color: '#F7DF1E' },
    { name: 'HTML & CSS', percentage: 7, color: '#E34F26' },
  ],
  recentUpdates: [
    {
      repo: 'dfz-messenger',
      date: 'Сентябрь 2026',
      description: 'Realtime WebSocket web messenger (Monorepo, Next.js, Express, Socket.IO, PostgreSQL)',
      url: 'https://github.com/inogomovfozil01-sys/dfz-messenger'
    },
    {
      repo: 'ClassOs',
      date: 'Сентябрь 2026',
      description: 'School OS & Electronic gradebook (Next.js 15, Prisma, Socket.IO, Gemini AI)',
      url: 'https://github.com/inogomovfozil01-sys/ClassOs'
    },
    {
      repo: 'wordflow',
      date: 'Сентябрь 2026',
      description: 'English vocabulary platform with SM-2 Spaced Repetition & Gemini 3.8 Flash AI Tutor',
      url: 'https://github.com/inogomovfozil01-sys/wordflow'
    },
    {
      repo: 'uzbjobs',
      date: 'Сентябрь 2026',
      description: 'AI-driven job aggregation & career match scoring engine for Uzbekistan',
      url: 'https://github.com/inogomovfozil01-sys/uzbjobs'
    },
    {
      repo: 'pomogayka-ai',
      date: 'Сентябрь 2026',
      description: 'Multimodal educational bot ecosystem powered by Google Gemini Vision OCR',
      url: 'https://github.com/inogomovfozil01-sys/pomogayka-ai'
    },
    {
      repo: 'watches',
      date: 'Сентябрь 2026',
      description: 'Interactive luxury watch store with pure JavaScript ES6+ state management',
      url: 'https://github.com/inogomovfozil01-sys/watches'
    }
  ]
};

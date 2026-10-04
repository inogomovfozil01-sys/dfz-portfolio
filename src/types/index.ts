export type ProjectCategory = 
  | 'Featured'
  | 'Full-Stack'
  | 'Frontend'
  | 'Backend & APIs'
  | 'AI & Automation'
  | 'SaaS & Business Systems'
  | 'All';

export interface Project {
  id: string;
  title: string;
  taglineRu: string;
  taglineEn: string;
  problemRu: string;
  problemEn: string;
  featuresRu: string[];
  featuresEn: string[];
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  repoUrl: string;
  liveUrl?: string;
  screenshot: string;
  statusRu: 'Production' | 'В активной разработке' | 'Завершен' | 'Архив';
  statusEn: 'Production' | 'In Active Development' | 'Completed' | 'Archived';
  stars?: number;
  forks?: number;
  updatedAt: string;
}

export interface SkillCategory {
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    verifiedIn: string[];
  }[];
}

export interface JourneyMilestone {
  period: string;
  titleRu: string;
  titleEn: string;
  subtitleRu: string;
  subtitleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  highlights: string[];
  keyRepos: string[];
}

export interface GitHubStatsData {
  publicRepos: number;
  followers: number;
  following: number;
  languages: { name: string; percentage: number; color: string }[];
  recentUpdates: {
    repo: string;
    date: string;
    description: string;
    url: string;
  }[];
}

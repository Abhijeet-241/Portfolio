export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  problem: string;
  responsibility: string;
  solution: string;
  outcomes: string[];
  stack: string[];
}

export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface ProjectMeta {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  kind: string;
  problem: string;
  approach: string;
  decisions: string[];
  highlights: ProjectMeta[];
  stack: string[];
  links: ProjectLink;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

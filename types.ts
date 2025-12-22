export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  linkedinUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  avatarUrl?: string;
  topSkills: string[];
  languages: string[];
  certifications: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export enum TemplateType {
  ExecutiveSidebar = 'Executive Sidebar',
  ModernClean = 'Modern Clean',
  TechDark = 'Tech Dark',
  TimelineCreative = 'Timeline Creative',
  GridAnalyst = 'Grid Analyst',
  AgileFlow = 'Agile Flow'
}

export type ProfileType = 'SM' | 'DOTNET';
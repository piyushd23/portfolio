export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  bulletPoints?: string[];
  technologies?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade?: string;
  description?: string;
  bulletPoints?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  challenge: string;
  solution: string;
  keyInsights: string[];
  timeline: string;
  myRole: string;
  toolsUsed: string[];
  isCaseStudy?: boolean;
}

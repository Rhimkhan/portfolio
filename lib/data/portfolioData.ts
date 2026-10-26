export { projectsData, type ProjectItem } from "./projects";
export { certificatesData, type CertificateItem } from "./certificates";
export { experienceData, type ExperienceItem, type ExperienceDocument } from "./offerLetters";

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  available: boolean;
  availableText: string;
  bio: string;
  quote: string;
  roleBadges: string[];
  resume: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
  board?: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: string[];
}

export interface AchievementItem {
  icon: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  name: "Rhim Khan",
  role: "AI/ML Engineer & Full Stack Developer",
  tagline: "Building intelligent solutions at the intersection of technology and real-world impact.",
  email: "rhim78975730@gmail.com",
  phone: "+91 7897573053",
  github: "https://github.com/Rhimkhan",
  linkedin: "https://linkedin.com/in/rhimkhan",
  location: "Gwalior, MP, India",
  available: true,
  availableText: "Open to internships and full-time roles",
  quote: "Building intelligent solutions at the intersection of technology and real-world impact.",
  bio: "Hi, I'm Rhim Khan — an aspiring AI/ML Engineer and Full Stack Developer. Currently pursuing B.Tech in AI & ML at Amity University, Gwalior (3rd Year). I've completed 3 internships across AI and Full Stack Development, and built 5 end-to-end projects spanning Computer Vision, NLP, and Machine Learning.",
  roleBadges: ["AI & ML Engineer", "Full Stack Developer", "Tech Explorer", "Problem Solver"],
  resume: "/resume.pdf",
};

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in AI & ML",
    institution: "Amity University, Gwalior",
    period: "2024–2028",
    grade: "3rd Year",
    status: "Pursuing",
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "Modern Public School, Jhansi",
    period: "2024",
    board: "CBSE Board",
    grade: "A Grade",
    status: "Completed",
  },
  {
    degree: "10th Grade (Secondary)",
    institution: "Modern Public School, Jhansi",
    period: "2022",
    board: "ICSE Board",
    grade: "A Division",
    status: "Completed",
  },
];

export const statsData: StatItem[] = [
  { value: "5+", label: "Projects Built" },
  { value: "3", label: "Internships Completed" },
  { value: "4+", label: "Certificates Earned" },
  { value: "2", label: "Hackathons Participated" },
];

export const floatingSkills: string[] = [
  "Python",
  "React",
  "Machine Learning",
  "Computer Vision",
  "YOLOv8",
  "NLP",
  "Node.js",
  "C++",
  "TypeScript",
  "Flask",
  "MongoDB",
  "Express",
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    color: "#3b82f6",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    category: "AI & ML",
    color: "#8b5cf6",
    items: ["Machine Learning", "Computer Vision", "NLP", "DSA", "Deep Learning"],
  },
  {
    category: "Web Dev",
    color: "#06b6d4",
    items: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    color: "#f59e0b",
    items: ["Flask", "Git", "GitHub", "Vercel"],
  },
  {
    category: "Core Concepts",
    color: "#ec4899",
    items: ["Data Structures & Algorithms", "Text Classification", "Object Detection"],
  },
  {
    category: "Soft Skills",
    color: "#10b981",
    items: ["Problem Solving", "Teamwork", "Creativity", "Adaptability"],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    icon: "🏆",
    title: "Oracle Certified",
    description: "Agentic AI Foundations Associate certification validating core competencies in agentic frameworks and AI systems.",
    issuer: "Oracle University",
    date: "Aug 2026",
  },
  {
    icon: "🤖",
    title: "AI Internship Completed",
    description: "Engineered real-time NLP sentiment analysis pipeline with text preprocessing and streaming classification.",
    issuer: "Codtech IT Solutions (4 Weeks)",
    date: "Jul–Aug 2026",
  },
  {
    icon: "💻",
    title: "Full Stack Internship Completed",
    description: "Developed production-ready React + Node.js web applications and REST endpoints under industry mentorship.",
    issuer: "Thiranex (4 Weeks)",
    date: "Jul–Aug 2026",
  },
  {
    icon: "🌐",
    title: "AI Web Dev Internship",
    description: "Designed and implemented intelligent web components blending AI models with dynamic frontend user experiences.",
    issuer: "InAmigos Foundation (2 Weeks)",
    date: "Aug 2026",
  },
  {
    icon: "⚡",
    title: "2 Hackathons Participated",
    description: "Collaborated in high-intensity collegiate hackathons building rapid prototypes under strict time constraints.",
    issuer: "Amity University",
    date: "2025–2026",
  },
  {
    icon: "📊",
    title: "Python for Data Science",
    description: "Comprehensive 180-hour rigorous hands-on program covering data wrangling, visualization, and ML modeling.",
    issuer: "Reliance Foundation Skilling Academy",
    date: "Jul 2026",
  },
  {
    icon: "🧠",
    title: "Fundamentals of AI",
    description: "Deep dive into artificial intelligence fundamentals, search algorithms, heuristic systems, and ML basics.",
    issuer: "Wadhwani Foundation",
    date: "Jul 2026",
  },
];

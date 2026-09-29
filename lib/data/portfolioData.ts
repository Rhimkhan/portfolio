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

export interface ProjectItem {
  name: string;
  tag: string;
  tagColor?: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  initials: string;
  initialsColor: string;
  period: string;
  duration: string;
  location: string;
  internId?: string;
  work: string;
  skills: string[];
  documents: { label: string; url: string }[];
  badge?: string;
  status: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  category: "AI" | "Data Science" | "Internship";
  topic?: string;
  hours?: string;
  date: string;
  credentialId?: string;
  verified: boolean;
  accentColor: string;
  pdf: string;
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
  name: "R Him Khan",
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
  bio: "Hi, I'm R Him Khan — an aspiring AI/ML Engineer and Full Stack Developer. Currently pursuing B.Tech in AI & ML at Amity University, Gwalior (3rd Year). I've completed 3 internships across AI and Full Stack Development, and built 5 end-to-end projects spanning Computer Vision, NLP, and Machine Learning.",
  roleBadges: ["AI & ML Engineer", "Full Stack Developer", "Tech Explorer", "Problem Solver"],
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

export const projectsData: ProjectItem[] = [
  {
    name: "Object Detection API",
    tag: "AI / Computer Vision",
    tagColor: "#3b82f6",
    description: "Flask REST API serving real-time object detection using YOLOv8. Accepts image input and returns detected objects with bounding box coordinates via API endpoints.",
    tech: ["Python", "YOLOv8", "Flask", "Computer Vision", "REST API"],
    github: "https://github.com/Rhimkhan/object-detection-api",
    live: null,
  },
  {
    name: "Real-Time Sentiment Analysis Pipeline",
    tag: "AI / NLP",
    tagColor: "#8b5cf6",
    description: "Python NLP pipeline classifying text sentiment in real time using text preprocessing and classification techniques on live/streamed text data.",
    tech: ["Python", "NLP", "Scikit-Learn", "Machine Learning", "Text Preprocessing"],
    github: "https://github.com/Rhimkhan/sentiment-analysis-project",
    live: null,
  },
  {
    name: "House Price Predictor",
    tag: "ML / Regression",
    tagColor: "#10b981",
    description: "Regression-based ML model predicting housing prices from historical data with feature engineering and model evaluation to improve accuracy.",
    tech: ["Python", "Pandas", "Regression", "Scikit-Learn", "Feature Engineering"],
    github: "https://github.com/Rhimkhan/house-price-predictor",
    live: null,
  },
  {
    name: "Titanic Survival Prediction",
    tag: "ML / Classification",
    tagColor: "#f59e0b",
    description: "Classification model predicting passenger survival on Titanic dataset using EDA and multiple ML algorithms.",
    tech: ["Python", "Machine Learning", "Classification", "Data Analysis", "EDA"],
    github: "https://github.com/Rhimkhan/Titanic-prediction",
    live: null,
  },
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

export const experienceData: ExperienceItem[] = [
  {
    role: "AI Intern",
    company: "Codtech IT Solutions Pvt. Ltd.",
    initials: "CT",
    initialsColor: "#10b981",
    period: "Jul 4 – Aug 1, 2026",
    duration: "4 Weeks",
    location: "Remote",
    internId: "CITS4944",
    work: "Built Python-based NLP pipeline for real-time sentiment analysis. Applied text preprocessing and classification techniques on live/streamed text data.",
    skills: ["Python", "NLP", "Machine Learning", "Text Preprocessing", "Sentiment Analysis"],
    documents: [
      { label: "📄 View Offer Letter", url: "/certificates/codtech-offer-letter.pdf" },
      { label: "📄 View Certificate", url: "/certificates/codtech-internship.pdf" },
    ],
    badge: "MOST RECENT",
    status: "Successfully Completed ✓",
  },
  {
    role: "Full Stack Development Intern",
    company: "Thiranex",
    initials: "TH",
    initialsColor: "#3b82f6",
    period: "Jul 29 – Aug 28, 2026",
    duration: "4 Weeks",
    location: "Remote",
    internId: "THX-JUL2926-161",
    work: "Worked on practical full stack development projects under industry mentorship. Built React + Node.js applications.",
    skills: ["React", "Node.js", "Full Stack Development", "REST APIs"],
    documents: [
      { label: "📄 View Offer Letter", url: "/certificates/thiranex-offer-letter.pdf" },
    ],
    status: "Successfully Completed ✓",
  },
  {
    role: "AI Web Developer Intern",
    company: "InAmigos Foundation",
    initials: "IA",
    initialsColor: "#f59e0b",
    period: "Aug 3, 2026",
    duration: "2 Weeks",
    location: "Remote",
    work: "AI Web Development internship building intelligent web applications.",
    skills: ["AI", "Web Development", "React"],
    documents: [],
    status: "Completed ✓",
  },
];

export const certificatesData: CertificateItem[] = [
  {
    name: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    category: "AI",
    topic: "Agentic AI Certified Foundations Associate",
    date: "August 22, 2026",
    credentialId: "330860221AAI26OFA",
    verified: true,
    accentColor: "#C74634",
    pdf: "/certificates/oracle-certified.pdf",
  },
  {
    name: "Python for Data Science",
    issuer: "Reliance Foundation Skilling Academy (Skill India Digital)",
    category: "Data Science",
    hours: "180 Hours",
    date: "July 13, 2026",
    credentialId: "RFSA000540196",
    verified: true,
    accentColor: "#0066CC",
    pdf: "/certificates/python-data-science.pdf",
  },
  {
    name: "Fundamentals of Artificial Intelligence",
    issuer: "Wadhwani Foundation",
    category: "AI",
    hours: "7.5 Hours",
    date: "July 13, 2026",
    verified: true,
    accentColor: "#E85D26",
    pdf: "/certificates/fundamentals-ai.pdf",
  },
  {
    name: "Certificate of Internship Experience",
    issuer: "Codtech IT Solutions Pvt. Ltd.",
    category: "Internship",
    topic: "Artificial Intelligence Domain",
    date: "August 2026",
    credentialId: "CITS4944",
    verified: true,
    accentColor: "#FFB800",
    pdf: "/certificates/codtech-internship.pdf",
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
    icon: "🎓",
    title: "Amity Coding Club",
    description: "Active member contributing to peer-led coding sessions, problem-solving workshops, and tech seminars.",
    issuer: "Amity University Gwalior",
    date: "Ongoing",
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

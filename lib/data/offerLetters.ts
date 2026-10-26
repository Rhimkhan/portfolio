export interface ExperienceDocument {
  label: string;
  url: string;
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
  documents: ExperienceDocument[];
  badge?: string;
  status: string;
}

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
      { label: "📄 View Offer Letter", url: "/docs/codtech-offer-letter.pdf" },
      { label: "📄 View Certificate", url: "/docs/codtech-internship.pdf" },
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
      { label: "📄 View Offer Letter", url: "/docs/thiranex-offer-letter.pdf" },
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
    documents: [
      { label: "📄 View Offer Letter", url: "/docs/inamigos-offer-letter.pdf" },
      { label: "📄 View Certificate", url: "/docs/inamigos-certificate.pdf" },
    ],
    status: "Completed ✓",
  },
];

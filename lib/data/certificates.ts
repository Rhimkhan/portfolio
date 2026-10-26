export interface CertificateItem {
  name: string;
  issuer: string;
  category: "AI & ML" | "Data Science" | "Internship";
  topic?: string;
  hours?: string;
  date: string;
  credentialId?: string;
  verified: boolean;
  accentColor: string;
  fileUrl: string;
  /** Backward compatibility alias */
  pdf?: string;
}

export const certificatesData: CertificateItem[] = [
  {
    name: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    category: "AI & ML",
    topic: "Agentic AI Certified Foundations Associate",
    date: "August 22, 2026",
    credentialId: "330860221AAI26OFA",
    verified: true,
    accentColor: "#C74634",
    fileUrl: "/docs/oracle-certified.pdf",
    pdf: "/docs/oracle-certified.pdf",
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
    fileUrl: "/docs/python-data-science.pdf",
    pdf: "/docs/python-data-science.pdf",
  },
  {
    name: "Fundamentals of Artificial Intelligence",
    issuer: "Wadhwani Foundation",
    category: "AI & ML",
    hours: "7.5 Hours",
    date: "July 13, 2026",
    verified: true,
    accentColor: "#E85D26",
    fileUrl: "/docs/fundamentals-ai.pdf",
    pdf: "/docs/fundamentals-ai.pdf",
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
    fileUrl: "/docs/codtech-internship.pdf",
    pdf: "/docs/codtech-internship.pdf",
  },
];

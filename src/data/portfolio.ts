import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Yash Gaikwad",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a passionate software developer student with a keen eye for building scalable web and mobile applications. I build scalable and secure web applications with modern technologies like React, Node.js, and MongoDB. I enjoy creating real-world solutions such as finance systems, authentication platforms, and productivity tools.",
  email: "yashgaikwad1016@gmail.com",
  location: "Nashik, India",
  mobile : 8669123318,
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "SPPU University",
      year: "2023 - 2027",
      description: "Specializing in Software Engineering with a focus on web technologies and distributed systems.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Janta Vidyalaya & Junior College, Igatpuri",
      year: "2021 - 2023",
      description: "Science stream with Computer Science. Scored 61%.",
    },
  ],
  goals: [
    "Build impactful products that solve real-world problems",
    "I am looking for internship opportunities to apply my skills in real-world environments."
  ],
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yashgaikwad1016", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-gaikwad-3b88672a7/", icon: Linkedin },
  { name: "Email", url: "yashgaikwad1016@gmail.com", icon: Mail },
  { name: "Instagram", url: "https://www.instagram.com/yash.g_7/", icon: Instagram },
  { name: "Twitter", url: "https://twitter.com/yashgaikwad", icon: Twitter },
];

export type ProjectCategory = "Web" | "Android" | "Python";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Authentication System",
    description: "A Backend authentication system with user registration, login, and session, tokens, JWT.",
    image: "../public/Auth-sys.png",
    techStack: ["Express.js", "Node.js", "MongoDB", "Postman"],
    category: "Web",
    github: "https://github.com/yashgaikwad1016/jwt-auth-backend-system",
    demo: "https://github.com/yashgaikwad1016/jwt-auth-backend-system",
  },
  {
    id: 2,
    title: "Bank-ledger",
    description: "A secure full-stack ledger system with authentication and real-time transaction management, Tokens, JWT, idempotency, and rate limiting.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    techStack: ["Next.js", "Express.js", "MongoDB", "Html/CSS"],
    category: "Web",
    github: "https://github.com/yashgaikwad1016/Bank-Ledger",
    demo: "https://github.com/yashgaikwad1016/Bank-Ledger",
  },
  {
    id: 3,
    title: "PG management system",
    description: "A full-stack Java web application that demonstrates CRUD operations using JSP, Servlets, JDBC, and MySQL.",
    image: "../public/PG.png",
    techStack: ["JSP", "Servlets", "MySQL", "JDBC"],
    category: "Web",
    github: "https://github.com/yashgaikwad1016/PG-Management-sys",
    demo: "https://github.com/yashgaikwad1016/PG-Management-sys",
  },
  {
    id: 4,
    title: "BGCut",
    description: "AI Background Removal Automatically removes background from images using advanced processing.",
    image: "../public/bgCut.png",
    techStack: ["Python", "Flask", "HTML/CSS"],
    category: "Python",
    github: "https://github.com/yashgaikwad1016/bg-Cut",
    demo: "https://github.com/yashgaikwad1016/bg-Cut",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with 7-day forecasts, interactive maps, location search, and weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    techStack: ["React", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    category: "Web",
    github: "https://github.com/yashgaikwad/weather",
    demo: "https://weather-demo.vercel.app",
  },
  {
    id: 6,
    title: "Data Visualizer",
    description: "A Python-based data visualization tool for analyzing datasets with interactive charts, statistical summaries, and export options.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    techStack: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    category: "Python",
    github: "https://github.com/yashgaikwad/datavisualizer",
    demo: "https://datavis-demo.streamlit.app",
  },
];

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 55 },
      { name: "React", level: 10 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Python", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 60 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "AWS", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 80 },
      { name: "Postman", level: 80 },
    ],
  },
];

export const resumeData = {
  experience: [
    {
      role: "Java Web Developer Intern",
      company: "Netleap IT Training Solutions",
      period: "Jan 2026 - Feb 2026",
      description: "Built responsive UI components using React and TypeScript. Implemented state management with Redux and integrated RESTful APIs.",
      highlights: ["Reduced page load time by 40%", "Built 15+ reusable components", "Collaborated with a team of 8 developers"],
    },
    {
      role: "Part Time Association",
      company: "Datamatics",
      period: "2026 - Present",
      description: "Part time role working on Tranning and project based work.",
      highlights: ["Training on different technologies and platforms"],
    },
  ],
  certifications: [
    "Full Stack Java Development. Issued by NetLeap IT Training Solutions ",
    "C/C++ Programming Certification. Issued by AICPE ",
    "CCC Professional Certificate. Issued by NIELIT ",
  ],
};

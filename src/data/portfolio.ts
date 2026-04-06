import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
  name: "Yash Gaikwad",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a passionate software developer student with a keen eye for building scalable web and mobile applications. I love turning complex problems into simple, beautiful, and intuitive solutions. Currently pursuing my degree in Computer Science, I spend my time exploring new technologies and contributing to open-source projects.",
  email: "yashgaikwad@example.com",
  location: "India",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "XYZ University",
      year: "2021 - 2025",
      description: "Specializing in Software Engineering with a focus on web technologies and distributed systems.",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "ABC Junior College",
      year: "2019 - 2021",
      description: "Science stream with Computer Science. Scored 92%.",
    },
  ],
  goals: [
    "Build impactful products that solve real-world problems",
    "Contribute to open-source communities",
    "Master cloud architecture and DevOps",
    "Launch a tech startup",
  ],
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/yashgaikwad", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com/in/yashgaikwad", icon: Linkedin },
  { name: "Email", url: "mailto:yashgaikwad@example.com", icon: Mail },
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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and an admin dashboard for managing products and orders.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web",
    github: "https://github.com/yashgaikwad/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspace features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    category: "Web",
    github: "https://github.com/yashgaikwad/taskmanager",
    demo: "https://taskmanager-demo.vercel.app",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "An Android fitness tracking app with workout logging, progress charts, calorie counter, and Google Fit integration.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Room DB"],
    category: "Android",
    github: "https://github.com/yashgaikwad/fitnesstracker",
    demo: "#",
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by NLP that can answer questions, provide recommendations, and learn from conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    techStack: ["Python", "TensorFlow", "Flask", "NLTK"],
    category: "Python",
    github: "https://github.com/yashgaikwad/ai-chatbot",
    demo: "https://chatbot-demo.vercel.app",
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
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

export const resumeData = {
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "TechCorp Solutions",
      period: "Jun 2024 - Aug 2024",
      description: "Built responsive UI components using React and TypeScript. Implemented state management with Redux and integrated RESTful APIs.",
      highlights: ["Reduced page load time by 40%", "Built 15+ reusable components", "Collaborated with a team of 8 developers"],
    },
    {
      role: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      description: "Active contributor to open-source projects on GitHub. Fixed bugs, added features, and improved documentation.",
      highlights: ["50+ pull requests merged", "Contributed to 10+ repositories", "Mentored 5 new contributors"],
    },
  ],
  certifications: [
    "AWS Cloud Practitioner",
    "Meta Frontend Developer Professional Certificate",
    "Google IT Support Professional Certificate",
  ],
};

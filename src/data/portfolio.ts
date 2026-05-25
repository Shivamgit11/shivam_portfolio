export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    frontend: string[];
    backend: string[];
    stateManagement: string[];
    mobile: string[];
    libraries: string[];
    web: string[];
    tools: string[];
    concepts: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Shivam Kumar",
  role: "React (Mern Stack) Developer",
  about:
    "I’m a Frontend-Focused Full Stack Developer with 3+ years of experience building scalable web applications, interactive dashboards, and high-performance user interfaces. My expertise spans React.js, Next.js, JavaScript, TypeScript, and modern frontend architecture, with strong backend experience in Node.js, Express.js, MongoDB, and MySQL. I’ve worked extensively on CRM systems, admin panels, and AI-powered applications, giving me a solid foundation across both frontend engineering and full-stack development.",
  profileImage: "/images/shivam_profile_pic.webp",
  // blogUrl: "https://medium.com/@shivam",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Shivamgit11",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/shivam-k-39958b220/",
      icon: "Linkedin",
    },

    {
      platform: "Email",
      url: "mailto:shivamkumar2002.dev@gmail.com",
      icon: "Mail",
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
    ],

    stateManagement: [
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Async State Handling",
    ],

    tools: ["Git", "Postman", "VS Code", "Chrome DevTools", "Vite", "Webpack"],
    libraries: [
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Axios",
      "React Router DOM",
      "Material UI",
      "React Beautiful DnD",
      "React Phone Input",
      "React Hook Form",
      "Formik",
      "Yup",
      "Chart.js",
      "React Big Calendar",
    ],

    concepts: [
      "Component Architecture",
      "Role-Based Access Control",
      "Performance Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Authentication & Authorization",
    ],
    mobile: [],
    web: [],
  },
  experience: [
    {
      company: "Helo.ai",
      role: "Software Engineer",
      period: "Dec 2025 - Present",
      description: [
        "Developed and enhanced user-facing features using React.js and TypeScript, focusing on performance, scalability, and clean component architecture.",
        "Worked with modern React patterns including hooks, context, Redux, and async state handling to build maintainable UI flows.",
        "Built reusable frontend components and optimized application responsiveness for better user experience.",
        "Collaborated with teams to deliver scalable frontend solutions for production-grade applications.",
      ],
    },
    {
      company: "TechTonic Enterprises Pvt Ltd",
      role: "Frontend-Focused Full Stack Developer",
      period: "Sep 2023 - Dec 2025",
      description: [
        "Led frontend development for enterprise CRM, CMS, and admin dashboard applications using React.js.",
        "Built scalable role-based systems supporting 8+ hierarchical user levels with permission-driven navigation and actions.",
        "Implemented Redux and Redux Toolkit for scalable state management and async API handling across multi-module applications.",
        "Optimized frontend performance using lazy loading, code splitting, and render optimization, reducing load time from minutes to seconds.",
        "Developed reusable UI components, approval workflows, reporting systems, and dynamic dashboards for enterprise applications.",
      ],
    },
    {
      company: "Sixwared Technology",
      role: "React Developer Intern",
      period: "Apr 2023 - Sep 2023",
      description: [
        "Built responsive and interactive user interfaces using React.js and modern JavaScript.",
        "Worked with functional components, hooks, context API, and component-based architecture.",
        "Developed frontend projects with responsive layouts and reusable components.",
        "Gained hands-on experience in frontend development workflows and React best practices.",
      ],
    },
  ],
  projects: [
    {
      title: "Enterprise CRM Dashboard",
      description:
        "Developed a scalable enterprise CRM and admin dashboard supporting 8+ hierarchical user roles with role-based access control, task management, reporting, and workflow automation. Optimized frontend performance, reducing load times from minutes to seconds.",
      techStack: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      link: "https://www.ecollat.com/solutions/crm/",
      github: "",
      thumbnail: "/images/projects/crm-dashboard.webp",
    },
    {
      title: "Cengage Management Dashboard",
      description:
        "Built and maintained a complex management dashboard with multi-level user permissions, report generation, approval workflows, professor and university management, and email/message template systems.",
      techStack: [
        "React.js",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
      link: "",
      github: "",
      thumbnail: "/images/projects/cengage-dashboard.webp",
    },
    {
      title: "AI Practice Question Generator",
      description:
        "Developed an AI-powered platform capable of generating over 2 million practice questions using OpenAI APIs and LangChain, with optimized backend architecture for scalability and cost efficiency.",
      techStack: ["Node.js", "MongoDB", "Redis", "LangChain", "OpenAI API"],
      link: "",
      github: "",
      thumbnail: "/images/projects/ai-generator.webp",
    },
    {
      title: "Real Estate CRM",
      description:
        "Built a feature-rich real estate CRM with modules for property management, meetings, tasks, reports, transaction tracking, and property suggestions. Implemented dashboards, reporting systems, and optimized application performance.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "REST APIs",
      ],
      link: "",
      github: "",
      thumbnail: "/images/projects/realestate-crm.webp",
    },
    {
      title: "Social Media Admin Dashboard",
      description:
        "Created an admin dashboard for social media management with user moderation, reported post handling, analytics, and lead management functionalities.",
      techStack: [
        "React.js",
        "Redux Toolkit",
        "Material UI",
        "Node.js",
        "MongoDB",
      ],
      link: "",
      github: "",
      thumbnail: "/images/projects/social-dashboard.webp",
    },
  ],
};

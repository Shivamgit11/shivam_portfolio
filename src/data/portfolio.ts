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
      url: "mailto:mailtoshivam2002@gmail.com",
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

   tools: [
     "Git",
     "Postman",
     "VS Code",
     "Chrome DevTools",
     "Vite",
     "Webpack",
   ],
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
   web: []
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
      title: "Covid-19 Status",
      description:
        "COVID-19 Status is a free and open-source Android app that provides real-time COVID-19 statistics across India and worldwide, featuring a clean, fast, and responsive user interface.",
      techStack: ["Java", "XML", "Firebase", "Rest APIs"],
      link: "https://project.vipuljha.com/covid",
      github: "https://github.com/Coders-Of-XDA-OT/covid19-status-android",
      thumbnail: "/images/projects/covid.webp",
    },
    {
      title: "ElectraBlue Kernel",
      description:
        "ElectraBlue is a flash-and-forget custom kernel for supported Android devices, built to deliver a stable, smooth, and battery-efficient experience with thoughtful customization options using apps like Kernel Adiutor.",
      techStack: ["Linux", "C", "Makefile", "Bash"],
      link: "https://xdaforums.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651",
      github: "https://github.com/lordarcadius/electrablue_mido",
      thumbnail: "/images/projects/eb.webp",
    },
    {
      title: "Portfolio Website",
      description:
        "A previous version of my personal portfolio website showcasing my projects, work experience, and resume before launching the further iterations built in more modern tech stack.",
      techStack: ["HTML", "CSS", "Bootstrap", "JQuery"],
      link: "https://project.vipuljha.com/website",
      github: "https://github.com/lordarcadius/website",
      thumbnail: "/images/projects/portfolio.webp",
    },
    {
      title: "ABS Tweaks",
      description:
        "ABS Tweaks (Arkaynine Boost Script) is a collection of shell-based performance optimizations for Android devices, designed to improve speed and battery life. It has been downloaded over 200,000 times.",
      techStack: ["Shell", "BusyBox", "Terminal Emulator", "SuperSU"],
      link: "https://xdaforums.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404",
      github: "https://github.com/lordarcadius/ABS-Tweaks",
      thumbnail: "/images/projects/abs.webp",
    },
    {
      title: "Lenovo SNAPit Camera",
      description:
        "Lenovo SNAPit Camera was one of the most feature-rich OEM camera apps of its time, offering a wide range of unique capabilities. I successfully ported it to run on nearly all supported Android devices back then.",
      techStack: ["Java", "XML", "Libs", "Smali", "Apktool"],
      link: "https://xdaforums.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/",
      github: "",
      thumbnail: "/images/projects/snapit.webp",
    },
    {
      title: "CyanogenOS Apps",
      description:
        "CyanogenOS 12.1 included exclusive apps such as the updated theme engine and a Truecaller-integrated dialer. I successfully ported these features to work on CyanogenMod 13 and CyanogenMod13-based ROMs.",
      techStack: ["Java", "Libs", "Updater Script", "Apktool"],
      link: "https://xdaforums.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/",
      github: "",
      thumbnail: "/images/projects/capps.webp",
    },
  ],
};

interface PROJECTS_INTERFACE {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  challenges: string;
  color: string;
  darkColor: string;
  textColor: string;
  darkTextColor: string;
  images: string[];
  deploymentUrL?: string;
  sourceCodeUrl: string;
}

const PROJECTS: PROJECTS_INTERFACE[] = [
  {
    id: 1,
    title: "Creamy Cream",
    shortDesc: "High-performance headless e-commerce backend.",
    fullDesc:
      "Engineered a scalable headless e-commerce platform designed for high-volume transactions. The architecture decouples the frontend presentation layer from the complex backend business logic, allowing for unparalleled flexibility and speed.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
    challenges:
      "Optimizing database queries for complex product variants and implementing a robust caching strategy to handle traffic spikes during sales events. Achieved a 40% reduction in API response times.",
    color: "bg-yellow-400",
    darkColor: "dark:bg-yellow-500",
    textColor: "text-black",
    darkTextColor: "dark:text-black",
    images: [
      "projects/creamy-cream/creamy-cream-1.png",
      "projects/creamy-cream/creamy-cream-2.png",
      "projects/creamy-cream/creamy-cream-3.png",
      "projects/creamy-cream/creamy-cream-4.png",
      "projects/creamy-cream/creamy-cream-5.png",
      "projects/creamy-cream/creamy-cream-6.png",
      "projects/creamy-cream/creamy-cream-7.png",
      "projects/creamy-cream/creamy-cream-8.png",
      "projects/creamy-cream/creamy-cream-9.png",
      "projects/creamy-cream/creamy-cream-10.png",
      "projects/creamy-cream/creamy-cream-11.png",
      "projects/creamy-cream/creamy-cream-12.png",
      "projects/creamy-cream/creamy-cream-13.png",
      "projects/creamy-cream/creamy-cream-14.png",
      "projects/creamy-cream/creamy-cream-15.png",
    ],
    deploymentUrL: "https://dam-creamy-cream.vercel.app/",
    sourceCodeUrl: "https://github.com/adamandp/dam-creamy-cream",
  },
  {
    id: 2,
    title: "Company Profile",
    shortDesc: "Real-time data visualization platform.",
    fullDesc:
      "A comprehensive analytics dashboard that processes and visualizes real-time data streams. Designed for enterprise clients to monitor KPIs with zero-latency updates and interactive chart components.",
    tech: ["React", "Next.js", "Tailwind CSS", "WebSockets", "Recharts"],
    challenges:
      "Managing complex state across multiple real-time widgets without causing UI stuttering. Implemented custom React hooks and WebWorkers to offload data processing from the main thread.",
    color: "bg-pink-400",
    darkColor: "dark:bg-pink-500",
    textColor: "text-white",
    darkTextColor: "dark:text-white",
    images: [
      "projects/company-profile/company-profile-1.png",
      "projects/company-profile/company-profile-2.png",
      "projects/company-profile/company-profile-3.png",
      "projects/company-profile/company-profile-4.png",
      "projects/company-profile/company-profile-5.png",
    ],
    deploymentUrL: "https://dam-company-profile.vercel.app/",
    sourceCodeUrl: "https://github.com/adamandp/dam-company-profile",
  },
  {
    id: 3,
    title: "Neural Classifier",
    shortDesc: "Secure authentication & authorization service.",
    fullDesc:
      "Developed a B2B SaaS product focused on providing seamless, secure identity management. Features include RBAC, SSO integrations, and advanced audit logging for compliance.",
    tech: ["Vue.js", "Node.js", "Express", "MongoDB", "JWT"],
    challenges:
      "Designing a highly secure yet developer-friendly API. Addressed security vulnerabilities by implementing strict CORS policies, rate limiting, and automated security auditing in the CI/CD pipeline.",
    color: "bg-cyan-400",
    darkColor: "dark:bg-cyan-500",
    textColor: "text-black",
    darkTextColor: "dark:text-black",
    images: [
      "projects/neural-classifier/neural-classifier-1.png",
      "projects/neural-classifier/neural-classifier-2.png",
      "projects/neural-classifier/neural-classifier-3.png",
      "projects/neural-classifier/neural-classifier-4.png",
    ],
    deploymentUrL: "https://dam-neural-classifier.vercel.app/",
    sourceCodeUrl: "https://github.com/adamandp/dam-neural-classifier",
  },
  {
    id: 4,
    title: "Rate Rush",
    shortDesc: "Visual node-based automation tool.",
    fullDesc:
      "An internal productivity tool allowing non-technical teams to build automated workflows by connecting triggers and actions via a drag-and-drop node interface.",
    tech: ["React", "Framer Motion", "Node.js", "PostgreSQL"],
    challenges:
      "Building a performant, accessible drag-and-drop canvas. Utilized advanced DOM manipulation and state management to ensure smooth 60fps animations even with hundreds of nodes on screen.",
    color: "bg-lime-400",
    darkColor: "dark:bg-lime-500",
    textColor: "text-black",
    darkTextColor: "dark:text-black",
    images: [
      "projects/rate-rush/rate-rush-1.png",
      "projects/rate-rush/rate-rush-2.png",
      "projects/rate-rush/rate-rush-3.png",
    ],
    deploymentUrL: "https://dam-rate-rush.vercel.app/",
    sourceCodeUrl: "https://github.com/adamandp/dam-rate-rush",
  },
  {
    id: 5,
    title: "Shop Control",
    shortDesc: "Visual node-based automation tool.",
    fullDesc:
      "An internal productivity tool allowing non-technical teams to build automated workflows by connecting triggers and actions via a drag-and-drop node interface.",
    tech: ["React", "Framer Motion", "Node.js", "PostgreSQL"],
    challenges:
      "Building a performant, accessible drag-and-drop canvas. Utilized advanced DOM manipulation and state management to ensure smooth 60fps animations even with hundreds of nodes on screen.",
    color: "bg-lime-400",
    darkColor: "dark:bg-lime-500",
    textColor: "text-black",
    darkTextColor: "dark:text-black",
    images: [
      "projects/shop-control/shop-control-1.png",
      "projects/shop-control/shop-control-2.png",
      "projects/shop-control/shop-control-3.png",
      "projects/shop-control/shop-control-4.png",
      "projects/shop-control/shop-control-5.png",
      "projects/shop-control/shop-control-6.png",
      "projects/shop-control/shop-control-7.png",
    ],
    deploymentUrL: "https://dam-shop-control.vercel.app/",
    sourceCodeUrl: "https://github.com/adamandp/dam-shop-control",
  },
];

export { PROJECTS, type PROJECTS_INTERFACE };

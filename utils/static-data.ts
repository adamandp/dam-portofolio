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
  images: string[]; // Menambahkan properti images
}

const PROJECTS: PROJECTS_INTERFACE[] = [
  {
    id: 1,
    title: "Nexus Commerce Engine",
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
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop", // E-commerce terminal
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop", // Online shopping concept
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop"  // Payment processing
    ],
  },
  {
    id: 2,
    title: "Aura Analytics Dashboard",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Data dashboard
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", // Analytics charts
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop"  // Data visualization
    ],
  },
  {
    id: 3,
    title: "Vanguard Identity SaaS",
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
      "https://images.unsplash.com/photo-1614064641913-a5323ea1f22b?q=80&w=1000&auto=format&fit=crop", // Cyber security / Lock
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop", // Code screen
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1000&auto=format&fit=crop"  // Network security
    ],
  },
  {
    id: 4,
    title: "Pulse Workflow Automator",
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
      "https://images.unsplash.com/photo-1507238692062-f74812f845a7?q=80&w=1000&auto=format&fit=crop", // Nodes / Connections concept
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", // Workspace / coding
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"  // Planning / Workflow
    ],
  },
];

export { PROJECTS, type PROJECTS_INTERFACE };
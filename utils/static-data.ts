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
    shortDesc:
      "Full-featured e-commerce storefront with cart and checkout simulation.",
    fullDesc:
      "A premium e-commerce web application for handcrafted ice cream products, featuring a complete shopping experience from product browsing to checkout. Built with Next.js and modern tooling, the app simulates a full-stack environment using Mock Service Worker (MSW), with Redux Toolkit handling cart and checkout state, and TanStack Query managing server data.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
      "MSW",
      "Docker",
    ],
    challenges:
      "Managing a clear separation between server state and client state using both TanStack Query and Redux Toolkit. Ensured predictable state flow for cart and checkout while simulating real API interactions using MSW, maintaining scalability for future backend integration.",
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
    id: 5,
    title: "Shop Control",
    shortDesc: "Next-gen e-commerce analytics & management suite.",
    fullDesc:
      "A high-performance internal dashboard designed for data-driven shop management. It features real-time geospatial user tracking across Indonesia, complex financial reporting with interactive visualizations, and automated inventory control systems.",
    tech: [
      "Next.js 16",
      "Maplibre GL",
      "React 19",
      "TanStack Query",
      "Recharts",
      "Tailwind CSS 4",
    ],
    challenges:
      "Optimizing data density and visual performance for complex charts and geospatial maps. Implemented Mock Service Worker (MSW) for a seamless offline-first development experience and utilized React 19's latest features for efficient state synchronization across nested analytics layouts.",
    color: "bg-indigo-600",
    darkColor: "dark:bg-indigo-500",
    textColor: "text-white",
    darkTextColor: "dark:text-white",
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
  {
    id: 2,
    title: "Company Profile",
    shortDesc: "Neo-brutalist landing page for a modern advertising agency.",
    fullDesc:
      "A visually bold company profile website designed using the Neo-Brutalism style, focused on strong brand identity and high-impact storytelling. Built with React and Vite, the application delivers a responsive and engaging user experience through structured sections such as hero, services, testimonials, and FAQ, combined with smooth animations and interactive components.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "React Slick",
    ],
    challenges:
      "Maintaining visual consistency across irregular Neo-Brutalist layouts while ensuring responsiveness on all screen sizes. Carefully structured components and spacing to balance bold aesthetics with usability, accessibility, and performance.",
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
    shortDesc:
      "Web app for classifying brain signals into neurological conditions.",
    fullDesc:
      "A web-based application designed to classify brain signal data into neurological conditions such as Normal, Mild Cognitive Impairment (MCI), and Alzheimer's. Built with a modern frontend stack, the app provides an interactive and responsive interface for visualizing classification results and experimenting with model outputs.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Axios",
      "MSW",
    ],
    challenges:
      "Handling asynchronous data flows and ensuring consistent state across the app using TanStack Query. Also addressed development without a real backend by implementing API mocking with MSW, while maintaining a scalable and clean architecture for future integration with real machine learning models.",
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
    shortDesc:
      "Logistics aggregator for comparing shipping rates across multiple couriers.",
    fullDesc:
      "A high-performance logistics aggregator that allows users to compare shipping rates from 15+ couriers across Indonesia in real time. Built with Nuxt 4 and Vue 3, the app provides a fast, responsive, and modern interface with transparent pricing and seamless user experience.",
    tech: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Nuxt UI",
      "TanStack Query",
      "Axios",
    ],
    challenges:
      "Handling multiple API integrations while maintaining fast response times and consistent data across the UI. Optimized data fetching and caching using TanStack Query, and structured the app to ensure scalability and maintainability as more courier services and features are added.",
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
];

export { PROJECTS, type PROJECTS_INTERFACE };

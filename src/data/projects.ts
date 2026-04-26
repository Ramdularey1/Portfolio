export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with AI-powered insights and predictions",
    longDescription:
      "A comprehensive analytics dashboard built with Next.js and TypeScript that provides real-time data visualization, AI-powered insights, and predictive analytics. Features interactive charts, custom reports, and seamless data export capabilities.",
    image: "/images/project-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "AI/ML"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management",
    longDescription:
      "A production-ready e-commerce platform featuring a modern storefront, shopping cart, checkout flow, payment processing with Stripe, and comprehensive admin dashboard for inventory and order management.",
    image: "/images/project-2.png",
    tags: ["Next.js", "PostgreSQL", "Stripe", "React", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "SaaS Collaboration Tool",
    description: "Team collaboration platform with real-time updates and file sharing",
    longDescription:
      "A modern SaaS application enabling teams to collaborate in real-time with features including live document editing, video conferencing, file sharing, and project management capabilities.",
    image: "/images/project-3.png",
    tags: ["React", "WebSocket", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "4",
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress analytics",
    longDescription:
      "A comprehensive fitness application available on iOS and Android with features for workout tracking, progress analytics, personalized fitness plans, and social sharing capabilities.",
    image: "/images/project-4.png",
    tags: ["React Native", "Firebase", "TypeScript", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "5",
    title: "Design System & Component Library",
    description: "Comprehensive UI component library used across multiple products",
    longDescription:
      "A fully-featured design system built with React and TypeScript, featuring 50+ customizable components, comprehensive documentation, and Storybook integration for seamless developer experience.",
    image: "/images/project-5.png",
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Content Management System",
    description: "Headless CMS with REST API and visual content builder",
    longDescription:
      "A flexible headless CMS platform with a visual content builder, REST/GraphQL APIs, media management, and multi-language support for content creation and distribution.",
    image: "/images/project-6.png",
    tags: ["Node.js", "Express", "MongoDB", "React", "GraphQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

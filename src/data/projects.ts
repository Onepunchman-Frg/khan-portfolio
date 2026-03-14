export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Home page for the online store of electrical equipment",
    description:
      "Pixel-perfect responsive layout for a modern online store with complex product grids and filtering UI.",
    role: "Frontend Layout Developer",
    image: "/site1.png",
    liveUrl: "https://gr-130-electrical-engineering.oml.ru/",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    id: "project-2",
    title: "Website Page for 'Legal Services for Small and Medium Businesses'",
    description:
      "Clean, professional multi-section landing page with animations and mobile-first approach.",
    role: "Layout Developer",
    image: "/site2.png",
    liveUrl: "https://www.scriptolex.ru/yuridicheskoe-obsluzhivanie/",
    tags: ["HTML", "SCSS", "BEM", "Responsive"],
  },
  {
    id: "project-3",
    title: "Home page for the Fasteners Website",
    description:
      "Pixel-perfect responsive layout for a modern online store with complex product grids and filtering UI.",
    role: "Frontend Layout Developer",
    image: "/site3.png",
    liveUrl: "https://gr-fasteners-store.oml.ru/",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    id: "project-4",
    title: "Website application for internal use within the order pickup point",
    description:
      "Gamification for a pickup point website is a tool that keeps customers coming back again and again without direct discounts.",
    role: "Layout Developer",
    image: "/site4.png",
    liveUrl: "https://pvz-crm-bot.lovable.app/",
    tags: ["AI Lovable"],
  },
  {
    id: "project-5",
    title: "Portfolio site for a frontend developer",
    description: "Creative portfolio with 'AI Lovable', Github and Vercel.",
    role: "Frontend Developer",
    image: "/site6.png",
    liveUrl: "https://khan-portfolio-psi.vercel.app/",
    tags: ["React", "AI Lovable", "Github", "Vercel", "Responsive"],
  },
  {
    id: "project-6",
    title: "Personal project - family tree website",
    description: "In development.",
    role: "Frontend Layout Developer",
    image: "/placeholder.svg",
    liveUrl: "https://family-tree-two-jet.vercel.app/people",
    tags: ["React", "Tailwind CSS", "NextJS", "Responsive"],
  },
];

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
    title: "E-Commerce Platform",
    description: "Pixel-perfect responsive layout for a modern online store with complex product grids and filtering UI.",
    role: "Frontend Layout Developer",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    id: "project-2",
    title: "Corporate Website",
    description: "Clean, professional multi-section landing page with animations and mobile-first approach.",
    role: "Layout Developer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["HTML", "SCSS", "BEM", "Responsive"],
  },
  {
    id: "project-3",
    title: "Dashboard UI",
    description: "Complex dashboard interface with data tables, charts, and responsive sidebar navigation.",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "project-4",
    title: "Restaurant Website",
    description: "Elegant landing page with menu sections, gallery, and reservation form integration.",
    role: "Layout Developer",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "project-5",
    title: "SaaS Landing Page",
    description: "High-converting landing page with pricing tables, feature sections, and smooth scroll animations.",
    role: "Frontend Layout Developer",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "project-6",
    title: "Portfolio Redesign",
    description: "Creative portfolio with grid-based layout, smooth transitions, and dark mode support.",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    tags: ["React", "CSS Modules", "Responsive"],
  },
];

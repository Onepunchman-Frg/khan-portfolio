import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-card-foreground">
            {project.title}
          </h3>
        </div>
        <Badge variant="secondary" className="mb-3 text-xs">
          {project.role}
        </Badge>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" size="sm" className="w-full group/btn">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            My Work
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

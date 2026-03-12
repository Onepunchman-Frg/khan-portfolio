import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
  "Responsive Design", "Tailwind CSS", "SCSS/SASS", "BEM",
  "Git", "Figma", "Pixel Perfect", "Cross-browser",
];

const tools = [
  "VS Code", "Chrome DevTools", "Figma", "GitHub", "Webpack", "Vite",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6 bg-accent/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2 text-center">
            About
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photo & Bio */}
          <div className="space-y-6">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-md bg-muted">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop"
                alt="Working on code"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a frontend / layout developer with a passion for creating
              clean, responsive, and pixel-perfect web interfaces. I enjoy
              turning designs into fully functional pages that work beautifully
              across all devices and browsers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience in modern web technologies, I focus on writing
              maintainable code and delivering polished user experiences. I'm
              always eager to learn new tools and improve my craft.
            </p>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary font-medium border border-primary/20 transition-colors hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

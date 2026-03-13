import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-5xl">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fade-in">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Frontend / Layout Developer
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Hi, I'm <span className="text-primary">Batirkhan</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            I build pixel-perfect, responsive interfaces that look great on
            every device. Focused on clean code, modern layouts, and seamless
            user experiences.
          </p>
          <Button
            size="lg"
            onClick={() => scrollTo("#work")}
            className="group gap-2"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-accent overflow-hidden border-2 border-border shadow-lg">
              <img
                src="/0001.jpg"
                alt="Professional photo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

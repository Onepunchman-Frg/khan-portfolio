import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contacts = [
  {
    icon: Send,
    label: "Telegram",
    value: "@ogxsdag_ehibxqs",
    href: "https://t.me/ogxsdag_ehibxqs",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abdullaevbatyr416@gmail.com",
    href: "mailto:abdullaevbatyr416@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Onepunchman-Frg",
    href: "https://github.com/Onepunchman-Frg",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/батырхан-абдуллаев-19b7b437a",
    href: "https://linkedin.com/in/батырхан-абдуллаев-19b7b437a",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <contact.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {contact.label}
                </p>
                <p className="text-sm text-muted-foreground">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

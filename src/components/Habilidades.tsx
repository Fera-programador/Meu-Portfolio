import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { motion } from "framer-motion";

const habilidades = [
  { name: "React", level: 95, color: "hsl(var(--primary))" },
  { name: "TypeScript", level: 90, color: "hsl(var(--primary))" },
  { name: "Node.js", level: 85, color: "hsl(var(--accent))" },
  { name: "Next.js", level: 88, color: "hsl(var(--primary))" },
  { name: "Tailwind CSS", level: 92, color: "hsl(var(--accent))" },
  { name: "PostgreSQL", level: 80, color: "hsl(var(--primary))" },
];

const tecnologias = [
  "JavaScript", "Python", "Git", "Docker", "AWS", "Firebase",
  "GraphQL", "REST APIs", "MongoDB", "Redis", "Prisma", "Figma"
];

export const Habilidades = () => {
  return (
    <section id="habilidades" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Habilidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tecnologias que <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sempre aprendendo e evoluindo com as tecnologias mais modernas do mercado.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {habilidades.map((habilidade, index) => (
                <div key={habilidade.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{habilidade.name}</span>
                    <span className="text-muted-foreground text-sm">{habilidade.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${habilidade.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full"
                      style={{ background: habilidade.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-card p-8 h-full">
              <h3 className="font-display text-xl font-semibold mb-6">
                Outras Tecnologias
              </h3>
              <StaggerContainer className="flex flex-wrap gap-3">
                {tecnologias.map((tech) => (
                  <StaggerItem key={tech}>
                    <span className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                      {tech}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

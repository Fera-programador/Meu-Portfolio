import { ExternalLink, Github, Folder } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

interface Projeto {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}

const projetos = [
  {
    title: "Portfolio",
    description: "Meu portfólio pessoal desenvolvido com JavaScript para apresentar meus projetos e habilidades.",
    tags: ["JavaScript", "HTML", "CSS", "Vercel"],
    github: "https://github.com/Fera-programador/portfolio",
    demo: "https://douglasdev.vercel.app/",
  },
  {
    title: "Dashboard Python",
    description: "Dashboard interativo desenvolvido em Python para visualização e análise de dados.",
    tags: ["Python", "Dashboard", "Data Analysis"],
    github: "https://github.com/Fera-programador/Dashboard-Python",
  },
  {
    title: "Lista de Tarefas Python",
    description: "Aplicativo de gerenciamento de tarefas desenvolvido em Python com funcionalidades completas.",
    tags: ["Python", "Task Manager", "CLI"],
    github: "https://github.com/Fera-programador/Lista-tarefa-Python",
  },
  {
    title: "Backend Portfolio",
    description: "API backend para integração do portfólio, desenvolvida com JavaScript e Node.js.",
    tags: ["JavaScript", "Node.js", "API", "Backend"],
    github: "https://github.com/Fera-programador/backend-portfolio",
  },
];

export const Projetos = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Projetos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, aplicando as melhores tecnologias e práticas.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <StaggerItem key={projeto.title}>
              <article className="glass-card p-8 hover-lift group h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Folder className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {projeto.demo && (
                      <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {projeto.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {projeto.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projeto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-secondary/50 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

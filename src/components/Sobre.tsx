import { Code2, Palette, Rocket } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código legível, testável e bem documentado seguindo as melhores práticas.",
  },
  {
    icon: Palette,
    title: "Design Moderno",
    description: "Crio interfaces intuitivas e visualmente atraentes focadas na experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Otimizo aplicações para máxima velocidade e melhor experiência de uso.",
  },
];

export const Sobre = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sobre Mim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Desenvolvedor apaixonado por{" "}
            <span className="gradient-text">tecnologia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estudando Frameworks de programação e Análise e Desenvolvimento de Sistemas.
            Sempre pronto para contribuir em equipe e aprender novas tecnologias.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card p-8 hover-lift group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

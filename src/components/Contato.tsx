import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
const contatoInfo = [
  { icon: Mail, label: "Email", value: "dsdouglas13@gmail.com" },
  { icon: Phone, label: "Telefone", value: "+55 (11) 91427-2665" },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
];
const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Fera-programador" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];
export const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name: Nome, email: Email, message: Mensagem } = formData;
    setError(null);
    setLoading(true);
    setSubmitted(false);
    setSenderName(formData.name);
    try {
      const response = await fetch(
        "https://backend-portfolio-gudw.onrender.com/api/mensagem",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Nome, Email, Mensagem }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar a mensagem");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vamos trabalhar <span className="gradient-text">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade.
          </p>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contatoInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="space-y-6">
            {submitted && (
              <div className="glass-card border border-primary/30 bg-primary/10 p-6 rounded-xl animate-fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      Mensagem enviada com sucesso
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Obrigado pelo contato,{" "}
                      <span className="font-medium text-primary">
                        {senderName}
                      </span>
                      .<br />
                      Sua mensagem foi recebida e retornarei o contato o mais breve
                      possível.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="glass-card border border-destructive/30 bg-destructive/10 p-4 rounded-xl text-sm text-destructive">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Sua mensagem..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300
                  ${
                    loading
                      ? "bg-primary/70 cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover-lift"
                  }
                `}
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
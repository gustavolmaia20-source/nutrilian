import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="precos" className="py-20 md:py-28 bg-card/30">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3 block">Planos e Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Escolha sua jornada
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Comece com um desafio rápido ou mude seu estilo de vida definitivamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="bg-card border border-border rounded-4xl p-8 md:p-10 flex flex-col card-elevated"
          >
            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">Desafio</span>
            <h3 className="text-2xl font-bold text-foreground mb-2">21 Dias</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              21 dias para sair da intenção e entrar em rotina. Ideal para quem quer começar sem pressão.
            </p>
            <div className="text-4xl font-extrabold text-foreground mb-1">
              R$ 19,90
            </div>
            <span className="text-muted-foreground text-xs mb-8">pagamento único</span>

            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Plano de choque 21 dias",
                "Treino + dieta personalizados",
                "Check-in diário com a IA",
                "Guia de substituição alimentar",
                "Foco total em constância",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check size={14} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="heroOutline" size="lg" className="w-full">
              Quero o Desafio <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Monthly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="relative bg-gradient-to-b from-primary/10 to-card border border-primary/30 rounded-4xl p-8 md:p-10 flex flex-col card-elevated"
          >
            <div className="absolute top-5 right-5 bg-gradient-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Mais Assinado
            </div>

            <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4">Completo</span>
            <h3 className="text-2xl font-bold text-foreground mb-2">Nutri Lian Mensal</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Acompanhamento contínuo para resultados reais e duradouros.
            </p>
            <div className="text-4xl font-extrabold text-foreground mb-1">
              R$ 49,90
            </div>
            <span className="text-muted-foreground text-xs mb-8">/mês</span>

            <ul className="space-y-3 mb-10 flex-1">
              {[
                "Treinos e dietas ilimitados",
                "Ajustes automáticos semanais",
                "Suporte prioritário WhatsApp",
                "Aulas práticas exclusivas",
                "Histórico completo de evolução",
                "Conteúdos educativos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Check size={14} className="text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              Assinar Agora <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

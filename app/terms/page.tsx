import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  Database,
  CloudOff,
  ShieldAlert,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="relative w-full min-h-screen text-white bg-[#0B0E14] py-16 px-6">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1C1B2E_0%,#0B0E14_100%)] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Voltar */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-all mb-12"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Retornar ao início
        </Link>

        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-serif mb-4 italic">
            Termos &{" "}
            <span className="text-primary not-italic font-bold uppercase tracking-tighter">
              Transparência
            </span>
          </h1>
          <p className="text-white/40 font-sans text-sm tracking-wide">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </header>

        <section className="space-y-10 font-sans text-white/80 leading-relaxed">
          {/* Aviso Importante - Destaque */}
          <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-lg flex gap-4">
            <AlertTriangle className="text-amber-500 shrink-0" size={24} />
            <div className="space-y-2">
              <h3 className="font-bold text-amber-500 uppercase text-xs tracking-widest">
                Aviso de Segurança
              </h3>
              <p className="text-sm font-mono">
                Este projeto é uma <strong>demonstração técnica</strong>. Não
                utilize para armazenar informações sensíveis como senhas, dados
                bancários ou segredos críticos.
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Bloco 1: Finalidade */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Database size={18} />
                <h2 className="font-serif italic text-xl">
                  Propósito do Projeto
                </h2>
              </div>
              <p className="text-sm opacity-70 font-mono">
                O <strong>Dear Future Me</strong> foi desenvolvido
                exclusivamente para fins de portfólio e demonstração de
                habilidades técnicas em desenvolvimento de software. É um
                experimento de interface e lógica, não um serviço comercial.
              </p>
            </div>

            {/* Bloco 2: Longevidade */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <CloudOff size={18} />
                <h2 className="font-serif italic text-xl">
                  Infraestrutura e Longevidade
                </h2>
              </div>
              <p className="text-sm opacity-70 font-mono">
                Como o projeto utiliza camadas gratuitas de hospedagem e banco
                de dados (free tier),{" "}
                <strong>não há garantia de longevidade</strong> ou manutenção
                perpétua. As mensagens podem ser perdidas caso os provedores de
                infraestrutura descontinuem seus serviços gratuitos ou o projeto
                seja reiniciado.
              </p>
            </div>

            {/* Bloco 3: Privacidade */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldAlert size={18} />
                <h2 className="font-serif italic text-xl">
                  Privacidade e Dados
                </h2>
              </div>
              <p className="text-sm opacity-70 font-mono">
                Atualmente, os dados são armazenados de forma estruturada em
                banco de dados, porém{" "}
                <strong>sem criptografia de ponta-a-ponta</strong>. Isso
                significa que, em nível de banco de dados, as mensagens são
                legíveis por administradores do sistema. Ao utilizar o serviço,
                você concorda com esta limitação técnica.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

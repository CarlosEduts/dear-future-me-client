import Link from "next/link";
import { Undo2, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative w-full h-dvh overflow-hidden text-white bg-[#0B0E14]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1C1B2E_0%,#0B0E14_100%)]" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6">
        {/* Header */}
        <div className="font-serif italic text-lg opacity-40">
          Dear Future Me
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col items-center text-center max-w-md animate-in fade-in zoom-in duration-1000">
          <div className="relative mb-8">
            <h1 className="text-[12rem] font-serif leading-none font-bold text-white/5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Ghost size={80} className="text-primary/40 animate-bounce" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif mb-4 italic">
            Você se perdeu no{" "}
            <span className="text-primary">vácuo do tempo</span>.
          </h2>

          <p className="font-sans font-light text-white/60 leading-relaxed mb-10">
            Esta página não existe, foi movida para um futuro distante ou nunca
            chegou a ser escrita na nossa linha do tempo atual.
          </p>

          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-3 rounded-full border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all text-primary"
          >
            <Undo2
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-serif text-lg font-medium">
              Voltar para o Presente
            </span>
          </Link>
        </div>

        {/* Rodapé */}
        <div className="flex flex-col items-center gap-2 opacity-30">
          <p className="text-[10px] uppercase tracking-[0.4em]">
            Erro de Sincronia Temporal
          </p>
          <div className="h-px w-12 bg-white/20"></div>
        </div>
      </div>

      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
    </main>
  );
}

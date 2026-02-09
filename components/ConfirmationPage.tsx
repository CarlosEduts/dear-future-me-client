import { Share2, Calendar as CalendarIcon, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmationPage({
  deliveryDate = "15 de Setembro de 2038",
}) {
  return (
    <main className="relative w-full min-h-dvh overflow-hidden text-white bg-[#0B0E14]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#252339_0%,#0B0E14_100%)] opacity-80" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6">
        {/* Branding */}
        <header className="opacity-40 hover:opacity-100 transition-opacity">
          <span className="font-serif italic text-xl tracking-wider">
            Dear Future Me
          </span>
        </header>

        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-1000">
          {/* O Selo */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
            <div className="relative">
              <Image
                src="/dear_future_me_seal.png"
                alt="Selo de Cera Dourado"
                width={192}
                height={192}
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-5deg]"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Sua cápsula foi <br />
            <span className="italic text-primary">selada com sucesso.</span>
          </h1>

          <p className="font-sans font-light text-white/60 max-w-sm mx-auto mb-10 leading-relaxed">
            Agora, suas palavras viajam através do tempo. Fique tranquilo, nós
            cuidaremos delas até o momento da entrega.
          </p>

          {/* Card de Resumo */}
          <div className="mb-5 w-full max-w-xs ">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-primary/10 rounded-lg">
                <CalendarIcon className="text-primary" size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block">
                  Destino Final
                </span>
                <p className="font-serif text-lg font-bold text-white/90">
                  {deliveryDate}
                </p>
              </div>
            </div>
          </div>

          {/* Ações pós-criação */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm">
            <Link
              href="/"
              className="group flex items-center gap-3 px-8 py-3 rounded-full border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all text-primary"
            >
              <Undo2
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </Link>

            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-full font-sans font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">
              <Share2 size={16} />
              Compartilhar Link de acompanhamento
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center space-y-4 mt-16">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
            A paciência é a virtude de quem planta no futuro.
          </p>
          <div className="h-px w-24 bg-linear-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
        </footer>
      </div>
    </main>
  );
}

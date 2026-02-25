"use client";

import { Share2, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./ui/Footer";
import { useShareCapsule } from "@/hooks/use-capsule-share";

export default function ConfirmationPage({ id }: { id: string }) {
  const { handleShare } = useShareCapsule(id);

  return (
    <main className="relative w-full min-h-dvh overflow-hidden text-white bg-[#0B0E14]">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#252339_0%,#0B0E14_100%)] opacity-80" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6">
        <header className="opacity-40 hover:opacity-100 transition-opacity">
          <span className="font-serif italic text-xl tracking-wider">
            Dear Future Me
          </span>
        </header>

        <section className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-1000">
          {/* Imagem da logo do projeto */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse" />
            <Image
              src="/dear_future_me_seal.png"
              alt="Selo de Cera Dourado"
              width={192}
              height={192}
              className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-5deg]"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
            Sua cápsula foi <br />
            <span className="italic text-primary">selada com sucesso.</span>
          </h1>

          <p className="font-sans font-light text-white/60 max-w-sm mx-auto mb-10 leading-relaxed">
            Agora, suas palavras viajam através do tempo. Fique tranquilo,
            cuidaremos delas.
          </p>

          {/* Visualização do código de acompanhamento */}
          <div className="mb-5 w-full max-w-xs gap-2 flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">
              Código de Acompanhamento
            </span>
            <p className="border text-primary border-primary/20 bg-primary/5 px-3 py-1 text-sm font-sans rounded-full">
              {id}
            </p>
          </div>

          {/* Botões de Ação: Retornar a home e compartilhar link */}
          <div className="flex flex-col justify-center md:flex-row gap-4 w-full max-w-sm mb-5">
            <Link
              href="/"
              className="group flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all text-primary"
            >
              <Undo2
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </Link>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-full font-sans font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all"
            >
              <Share2 size={16} />
              Compartilhar Código
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

"use client";

import { Calendar } from "@/components/ui/calendar";
import Footer from "@/components/ui/Footer";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import Image from "next/image";

export default function Capsule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-between py-10 px-6 bg-[#F9F7F2] bg-[radial-gradient(circle_at_center,#F9F7F2_0%,#F0EFE9_100%)] text-[#2D2D2D] relative overflow-hidden">
      {/* Branding Minimalista */}
      <header className="z-10 text-center mb-8">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-black/30 mb-1 block">
          Nova Mensagem
        </span>
        <h2 className="font-serif text-2xl italic opacity-80">
          Dear Future Me
        </h2>
      </header>

      <form
        action=""
        className="z-10 w-full max-w-5xl flex flex-col items-center gap-10"
      >
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Carta */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <label
              htmlFor="message"
              className="font-serif italic text-lg opacity-60 ml-2"
            >
              O que você quer lembrar?
            </label>
            <div className="relative group">
              <textarea
                name="message"
                id="message"
                className="w-full min-h-112.5 p-8 md:p-12 bg-white/50 backdrop-blur-sm border border-black/5 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] font-serif text-xl leading-relaxed placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Querido eu do futuro..."
              ></textarea>
            </div>
          </div>

          {/* Calendário */}
          <div className="w-full lg:w-auto flex flex-col gap-4">
            <label className="font-serif italic text-lg opacity-60 ml-2">
              Quando devo entregar?
            </label>
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-sm border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
                disabled={{ before: new Date() }}
                className="font-sans"
              />
              <div className="mt-4 p-3 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 block">
                  Entrega estimada
                </span>
                <p className="font-serif font-bold text-primary">
                  {date
                    ? date.toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Selecione uma data"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ação de Selar */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <div className="relative group flex items-center justify-center">
            <button
              type="submit"
              className="relative overflow-hidden px-16 py-4 bg-[#D4AF37] hover:bg-[#C59D24] text-[#2D2D2D] font-serif text-xl font-bold rounded-full shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95 group"
            >
              <span className="relative z-10">Selar Cápsula</span>
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Selo */}
            <div className="absolute -left-13 hidden md:block animate-in fade-in zoom-in duration-700">
              <Image
                src="/dear_future_me_seal.png"
                width={80}
                height={80}
                alt="Selo de Cera"
                className="rotate-[-15deg] drop-shadow-md group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
            Uma vez selada, a mensagem não poderá ser editada.
          </p>
        </div>
      </form>

      <Footer />
    </div>
  );
}

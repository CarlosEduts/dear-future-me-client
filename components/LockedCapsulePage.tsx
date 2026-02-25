import { Clock } from "lucide-react";
import Footer from "./Footer";
import { formatCapsuleDate } from "@/lib/utils";

export default function LockedCapsulePage({
  unlockDate,
}: {
  unlockDate: string;
}) {
  const unlockDateFormatted = formatCapsuleDate(unlockDate);

  return (
    <div className="w-full min-h-dvh flex flex-col gap-12 items-center justify-between py-12 px-6 bg-[#0B0E14] bg-[radial-gradient(circle_at_center,#1C1B2E_0%,#0B0E14_100%)] text-white relative overflow-hidden">
      {/* Estrelas ao fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Branding */}
      <header className="z-10 text-center animate-pulse">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-primary/60 mb-2 block">
          Cápsula Selada
        </span>
        <h2 className="font-serif text-2xl italic">Dear Future Me</h2>
      </header>

      {/* Container do Cofre */}
      <main className="z-10 w-full max-w-lg">
        <div className="relative glass-card border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
            <Clock className="w-16 h-16 text-primary relative z-10 animate-[spin_10s_linear_infinite]" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
            Esta cápsula está <br />
            <span className="italic text-primary">protegida pelo tempo</span>
          </h1>

          <p className="font-sans text-sm text-white/60 mb-10 max-w-70">
            O conteúdo foi guardado e só será revelado quando o relógio do
            futuro permitir.
          </p>

          {/* Countdown Grid  */}
          <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest opacity-40 mb-5">
            <span>Floresce em:</span>
          </div>
          <div className="w-full flex justify-center gap-2">
            {[
              {
                label: "Dia",
                value: unlockDateFormatted.day.toString().padStart(2, "0"),
              },
              { label: "Mês", value: unlockDateFormatted.month },
              { label: "Ano", value: unlockDateFormatted.year },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 rounded-lg py-3 border border-white/5 w-26"
              >
                <span className="block text-xl font-bold font-sans">
                  {item.value}
                </span>
                <span className="text-[9px] uppercase tracking-tighter opacity-40">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Textura de ruído */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

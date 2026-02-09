import { Clock } from "lucide-react";
import Footer from "./ui/Footer";

export default function LockedCapsulePage() {
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
          <div className="w-full grid grid-cols-4 gap-2 mb-8">
            {[
              { label: "Dias", value: "422" },
              { label: "Hrs", value: "02" },
              { label: "Min", value: "15" },
              { label: "Seg", value: "30" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 rounded-lg py-3 border border-white/5"
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

          {/* Barra de Progresso */}
          <div className="w-full space-y-3">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-primary/50 via-primary to-primary/50 shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-1000"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest opacity-40">
              <span>Plantada em 2025</span>
              <span>Floresce em 2038</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Textura de ruído */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

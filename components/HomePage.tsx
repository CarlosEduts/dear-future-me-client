import Link from "next/link";
import Particles from "./ui/Particles";
import Footer from "./ui/Footer";

const PARTICLE_CONFIG = {
  particleColors: ["#ffffff", "#F3E5AB", "#D4AF37"],
  particleCount: 400,
  speed: 0.03,
  particleBaseSize: 20,
  moveParticlesOnHover: true,
};

const HeroSection = () => (
  <header className="flex flex-col gap-10 items-center max-w-4xl animate-in fade-in zoom-in duration-1000">
    <div className="space-y-6 text-center">
      <h1 className="text-6xl md:text-7xl font-serif tracking-tighter leading-[0.9] text-white">
        O que você diria para a sua <br />
        <span className="italic text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          versão do futuro?
        </span>
      </h1>

      <p className="text-lg md:text-xl font-sans font-light opacity-70 max-w-lg mx-auto leading-relaxed">
        Crie cápsulas do tempo digitais e preserve seus pensamentos, metas e
        sentimentos. Nós as entregamos quando o momento chegar.
      </p>
    </div>

    <div className="flex flex-col items-center gap-4 mt-4">
      {/* Botão Principal */}
      <Link
        href="/capsule"
        className="group relative transition-all hover:scale-105 active:scale-95 overflow-hidden px-12 py-4 rounded-full bg-[#D4AF37] text-[#2D2D2D] shadow-[0_0_30px_rgba(212,175,55,0.2)]"
      >
        <span className="relative z-10 font-serif text-xl font-bold uppercase tracking-wider">
          Plantar uma Semente
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Link>

      <Link
        href="/example"
        className="group flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-all"
      >
        Veja como funciona
      </Link>
    </div>
  </header>
);

export default function HomePage({ capsuleCount }: { capsuleCount: number }) {
  return (
    <main className="relative w-full min-h-dvh overflow-hidden text-white bg-[#0B0E14]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1C1B2E_0%,#0B0E14_100%)]" />
        <Particles {...PARTICLE_CONFIG} />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between gap-16 py-12 pb-8 px-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60">
            Est. 2026
          </span>
          <span className="font-serif italic text-lg tracking-wide">
            Dear Future Me
          </span>
        </div>

        <HeroSection />

        {/* Footer com contador de cápsulas */}
        <div className="flex flex-col items-center">
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">
            Mais de{" "}
            <span className="text-white opacity-100">{capsuleCount}</span>{" "}
            mensagens viajando pelo tempo
          </p>
          <Footer />
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import Particles from "./ui/Particles";

const PARTICLE_CONFIG = {
  particleColors: ["#fafafa", "#f0f0f0", "#e0e0e0"],
  particleCount: 500,
  speed: 0.05,
  particleBaseSize: 40,
  moveParticlesOnHover: true,
};

const HeroSection = () => (
  <header className="flex flex-col gap-8 items-center max-w-2xl animate-fade-in">
    <div className="space-y-4">
      <h1 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight text-center">
        O que você diria para a sua{" "}
        <span className="text-primary-light">versão do futuro?</span>
      </h1>
      <p className="text-lg md:text-xl font-light opacity-90 max-w-md mx-auto leading-relaxed text-center">
        Crie cápsulas do tempo digitais e preserve seus pensamentos. Nós as
        entregamos no momento certo.
      </p>
    </div>

    <div className="flex flex-col items-center gap-4 mt-4">
      <Link
        href="/capsule"
        className="transition-transform hover:scale-105 active:scale-95 glass-card px-9 py-2.5 rounded-full text-white"
      >
        <span className="font-semibold text-lg uppercase tracking-wider">
          Criar Cápsula
        </span>
      </Link>
      <Link
        href="/example"
        className="text-sm font-medium hover:underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
      >
        Veja um Exemplo
      </Link>
    </div>
  </header>
);

const Footer = () => {
  const links = [
    { label: "Sobre o projeto", href: "/about" },
    { label: "Importante", href: "/terms" },
    { label: "Github", href: "https://github.com" },
  ];

  return (
    <footer className="flex flex-col items-center gap-4 py-6 opacity-60 text-xs">
      <nav aria-label="Navegação secundária">
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-primary-light transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-center">
        &copy; {new Date().getFullYear()} Dear Future Me. Crafted for time
        travelers.
      </p>
    </footer>
  );
};

export default function HomePage() {
  return (
    <main className="relative w-full h-dvh overflow-hidden text-white cosmic-gradient">
      {/* Camada de Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cosmic"
        aria-hidden="true"
      >
        <Particles {...PARTICLE_CONFIG} />
      </div>

      {/* Camada de Conteúdo */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-8 pb-4 px-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">
          Dear Future Me
        </span>

        <HeroSection />

        <Footer />
      </div>
    </main>
  );
}

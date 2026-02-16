import { CapsuleData, FormattedDate } from "@/types/capsule";
import { formatCapsuleDate } from "@/lib/utils";
import Footer from "./ui/Footer";

export default function UnlockedCapsulePage(props: CapsuleData) {
  const createdAt: FormattedDate = formatCapsuleDate(props.createdAt);
  const unlockDate: FormattedDate = formatCapsuleDate(props.unlockDate);

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-between py-12 px-6 bg-[#0B0E14] bg-[radial-gradient(circle_at_top,#2E2C45_0%,#0B0E14_100%)] text-white relative overflow-hidden">
      {/* Estrelas ao fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Branding Superior */}
      <header className="z-10 text-center">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-white/40 mb-2 block">
          Memória Preservada
        </span>
        <h2 className="font-serif text-2xl italic text-primary/80">
          Dear Future Me
        </h2>
      </header>

      {/* O Papel da Carta */}
      <main className="z-10 w-full max-w-2xl my-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="relative bg-[#F9F7F2] text-[#2D2D2D] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 min-h-[60vh] flex flex-col">
          {/* Marca d'água ou Selo de Abertura */}
          <div className="absolute top-6 right-6 opacity-20 select-none">
            <div className="border-2 border-[#D4AF37] rounded-full p-2 rotate-12 text-[10px] font-bold text-[#D4AF37] uppercase">
              Aberto em 2026
            </div>
          </div>

          {/* Metadados da Cápsula */}
          <header className="border-b border-black/10 pb-6 mb-8">
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-black/40 font-sans font-bold">
                Identificador da Cápsula
              </span>
              <code className="text-xs bg-black/5 p-1 rounded w-fit text-black/60">
                {props.id}
              </code>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-black/40 font-sans font-bold">
                  Escrito em
                </span>
                <p className="font-serif font-bold text-sm">
                  {createdAt.day} de {createdAt.month}, {createdAt.year}{" "}
                  <span className="font-sans font-normal opacity-60">
                    {createdAt.hour}:{createdAt.minute}
                  </span>
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-black/40 font-sans font-bold">
                  Liberado em
                </span>
                <p className="font-serif font-bold text-sm">
                  {unlockDate.day} de {unlockDate.month}, {unlockDate.year}{" "}
                  <span className="font-sans font-normal opacity-60">
                    {unlockDate.hour}:{unlockDate.minute}
                  </span>
                </p>
              </div>
            </div>
          </header>

          {/* Conteúdo da Mensagem */}
          <article className="font-serif text-lg md:text-xl leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-1 text-[#37261C]">
            {props.message}
          </article>
        </div>
      </main>

      <Footer />

      {/* Textura de ruído */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

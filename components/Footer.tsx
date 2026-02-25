import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Termos & Privacidade", href: "/terms" },
    {
      label: "Github / Sobre o projeto",
      href: "https://github.com/CarlosEduts/dear-future-me-client",
      isExternal: true,
    },
  ];

  return (
    <footer className="w-full flex flex-col items-center gap-6 py-8 px-4">
      <div className="w-full max-w-xs h-px bg-linear-to-r from-transparent via-current opacity-10" />

      <nav aria-label="Navegação secundária">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 hover:opacity-100 hover:text-primary transition-all duration-300"
              >
                {link.label}
                {link.isExternal && (
                  <ExternalLink
                    size={10}
                    className="opacity-0 group-hover:opacity-50 -translate-y-0.5 transition-all"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] text-center tracking-widest opacity-30 font-sans uppercase">
          &copy; {currentYear} —{" "}
          <span className="font-serif italic lowercase tracking-normal text-xs">
            Dear Future Me
          </span>
        </p>
      </div>
    </footer>
  );
}

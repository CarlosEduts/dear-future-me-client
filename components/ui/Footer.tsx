import Link from "next/link";

export default function Footer() {
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
}

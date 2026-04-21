import logo from "@/assets/nutrilian-logo.png";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" aria-label="Nutri Lian — Página inicial" className="flex items-center gap-2 font-extrabold text-foreground text-lg">
          <img src={logo} alt="Logo Nutri Lian" width={32} height={32} className="h-8 w-8 object-contain" loading="lazy" decoding="async" />
          <span>Nutri Lian</span>
        </a>
        <p className="text-muted-foreground text-xs">
          © 2025 Nutri Lian. Inteligência Artificial aplicada à saúde.
        </p>
        <div className="flex gap-6 text-muted-foreground text-xs">
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Heart, Mail, Instagram, Linkedin, Shield, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand text-primary-foreground shadow-soft">
              <Heart className="h-5 w-5" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">Acolhe</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Saúde com respeito, segurança e acolhimento para a comunidade LGBTQIAPN+.
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:ola@acolhe.app" aria-label="E-mail" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol
          title="Plataforma"
          links={[
            { to: "/buscar", label: "Buscar profissionais" },
            { to: "/mapa", label: "Mapa de serviços" },
            { to: "/biblioteca", label: "Biblioteca de saúde" },
            { to: "/dashboard", label: "Minha conta" },
          ]}
        />
        <FooterCol
          title="Para profissionais"
          links={[
            { to: "/", label: "Cadastre-se" },
            { to: "/", label: "Selo de inclusão" },
            { to: "/", label: "Formação contínua" },
            { to: "/", label: "Central de ajuda" },
          ]}
        />
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Confiança
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 text-teal" aria-hidden="true" />
              Privacidade pela LGPD
            </li>
            <li className="flex items-start gap-2">
              <Lock className="mt-0.5 h-4 w-4 text-teal" aria-hidden="true" />
              Dados criptografados ponta a ponta
            </li>
            <li className="flex items-start gap-2">
              <Heart className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              Curadoria com a comunidade
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Acolhe Saúde. Feito com cuidado.</p>
          <ul className="flex gap-5">
            <li><a href="#" className="hover:text-foreground">Privacidade</a></li>
            <li><a href="#" className="hover:text-foreground">Termos</a></li>
            <li><a href="#" className="hover:text-foreground">Acessibilidade</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

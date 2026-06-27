import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Search, MapPin, BookOpen, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Início", icon: Heart },
  { to: "/buscar", label: "Buscar", icon: Search },
  { to: "/mapa", label: "Mapa", icon: MapPin },
  { to: "/biblioteca", label: "Biblioteca", icon: BookOpen },
  { to: "/dashboard", label: "Minha conta", icon: LayoutDashboard },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="pride-bar h-1 w-full" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="GAG — Página inicial">
          <span className="grid h-9 w-9 place-items-center rounded-xl gradient-pride text-primary-foreground shadow-soft">
            <Heart className="h-5 w-5" aria-hidden="true" fill="currentColor" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">GAG</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary-soft text-primary"
                        : "text-foreground/75 hover:bg-muted hover:text-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <l.icon className="h-4 w-4" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/dashboard"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Entrar
          </Link>
          <Link
            to="/buscar"
            className="rounded-xl gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95"
          >
            Encontrar atendimento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-border md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Menu mobile" className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 p-3">
            {links.map((l) => {
              const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium ${
                      active ? "bg-primary-soft text-primary" : "text-foreground"
                    }`}
                  >
                    <l.icon className="h-5 w-5" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                to="/buscar"
                onClick={() => setOpen(false)}
                className="block rounded-xl gradient-brand px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Encontrar atendimento
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

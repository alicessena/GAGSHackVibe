import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Heart, FileText, Bell, BookOpen, Video, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Minha conta — Acolhe" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-brand text-xl font-bold text-primary-foreground">
              M
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Bem-vinde de volta</p>
              <h1 className="truncate font-display text-2xl font-extrabold sm:text-3xl">Olá, Mari</h1>
            </div>
          </div>
          <Link to="/buscar" className="shrink-0 rounded-xl gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
            Nova consulta
          </Link>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Próxima consulta */}
          <section className="card-soft p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Próxima consulta</h2>
              <Link to="/agendamento" className="text-sm font-semibold text-primary hover:underline">Ver todas</Link>
            </div>
            <div className="mt-4 grid items-center gap-4 rounded-2xl bg-surface p-5 sm:grid-cols-[auto_1fr_auto]">
              <div className="h-14 w-14 rounded-2xl" style={{ background: "linear-gradient(135deg,#6C63FF,#3B82F6)" }} aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-bold">Dra. Ana Ribeiro</p>
                <p className="text-sm text-muted-foreground">Psicologia · Teleconsulta</p>
                <p className="mt-1 text-sm font-semibold text-primary">Quinta, 24 out · 14:30</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                <Video className="h-4 w-4" /> Entrar na sala
              </button>
            </div>
          </section>

          {/* Lembretes */}
          <section className="card-soft p-6">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold">Lembretes</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="rounded-xl bg-accent-soft p-3 text-accent-foreground"><span className="font-semibold text-accent">Hoje</span> · Tomar medicação às 20h</li>
              <li className="rounded-xl bg-muted p-3"><span className="font-semibold">Amanhã</span> · Exame de rotina</li>
              <li className="rounded-xl bg-muted p-3"><span className="font-semibold">5 nov</span> · Renovar PrEP</li>
            </ul>
          </section>

          {/* Atalhos */}
          <section className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
            <ShortcutCard icon={<Heart className="h-5 w-5" />} title="Favoritos" desc="6 profissionais" />
            <ShortcutCard icon={<Calendar className="h-5 w-5" />} title="Histórico" desc="12 consultas" />
            <ShortcutCard icon={<FileText className="h-5 w-5" />} title="Exames" desc="3 disponíveis" />
          </section>

          {/* Conteúdos */}
          <section className="card-soft p-6 lg:col-span-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-teal" aria-hidden="true" />
                <h2 className="font-display text-lg font-bold">Recomendado para você</h2>
              </div>
              <Link to="/biblioteca" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Biblioteca <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { t: "Saúde mental e autocompaixão", c: "Saúde Mental", g: "linear-gradient(135deg,#6C63FF,#3B82F6)" },
                { t: "Hormonioterapia: dúvidas frequentes", c: "Hormonioterapia", g: "linear-gradient(135deg,#8B5CF6,#EC4899)" },
                { t: "Como funciona a PrEP no SUS", c: "PrEP", g: "linear-gradient(135deg,#14B8A6,#3B82F6)" },
              ].map((a) => (
                <a key={a.t} href="#" className="card-soft card-hover overflow-hidden hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]">
                  <div className="h-28" style={{ background: a.g }} aria-hidden="true" />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-muted-foreground">{a.c}</span>
                    <p className="mt-1 font-display text-base font-bold leading-tight">{a.t}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ShortcutCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <a href="#" className="card-soft card-hover flex items-center gap-3 p-5 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">{icon}</span>
      <span className="min-w-0">
        <span className="block font-display text-base font-bold">{title}</span>
        <span className="block text-sm text-muted-foreground">{desc}</span>
      </span>
    </a>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { professionals } from "@/lib/mock-data";
import {
  Star,
  MapPin,
  Video,
  Stethoscope,
  Globe,
  GraduationCap,
  Calendar,
  Heart,
  Share2,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/profissional/$id")({
  loader: ({ params }) => {
    const p = professionals.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return { p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.p.name} — GAG` },
      { name: "description", content: `${loaderData?.p.specialty}. ${loaderData?.p.pronoun}.` },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-dvh place-items-center p-6 text-center">
      <div>
        <h1 className="font-display text-2xl font-bold">Profissional não encontrado</h1>
        <Link to="/buscar" className="mt-4 inline-block text-primary underline">Voltar para a busca</Link>
      </div>
    </div>
  ),
  component: Perfil,
});

function Perfil() {
  const { p } = Route.useLoaderData();
  const slots = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#perfil" className="skip-link">Pular para o conteúdo</a>
      <Navbar />

      <main id="perfil" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Trilha" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link to="/buscar" className="hover:text-foreground">Buscar</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-foreground" aria-current="page">{p.name}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Header */}
            <div className="card-soft p-6 sm:p-8">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 sm:flex sm:items-start">
                <div
                  className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl text-2xl font-bold text-white sm:h-32 sm:w-32"
                  style={{ background: p.avatarGradient }}
                  aria-hidden="true"
                >
                  {p.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{p.name}</h1>
                  <p className="text-sm text-muted-foreground">{p.pronoun} · {p.specialty}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
                    <span className="inline-flex items-center gap-1 font-semibold">
                      <Star className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
                      {p.rating.toFixed(1)} <span className="font-normal text-muted-foreground">({p.reviews} avaliações)</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" aria-hidden="true" /> {p.city}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.online && <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent"><Video className="h-3 w-3"/> Online</span>}
                    {p.inPerson && <span className="inline-flex items-center gap-1 rounded-full bg-teal-soft px-2.5 py-1 text-xs font-semibold text-teal"><Stethoscope className="h-3 w-3"/> Presencial</span>}
                    {p.badges.map((b: string) => <span key={b} className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">{b}</span>)}
                  </div>
                </div>
                <div className="col-span-2 flex gap-2 sm:col-span-1 sm:flex-col">
                  <button aria-label="Favoritar" className="grid h-11 w-11 place-items-center rounded-xl border border-border hover:bg-muted">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button aria-label="Compartilhar" className="grid h-11 w-11 place-items-center rounded-xl border border-border hover:bg-muted">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Inclusion */}
            <div className="mt-6 card-soft p-6">
              <div className="grid items-center gap-4 sm:grid-cols-[auto_1fr]">
                <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-brand text-primary-foreground">
                  <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Índice de Inclusão</p>
                  <p className="font-display text-3xl font-extrabold text-primary">{p.inclusionScore}<span className="text-base text-muted-foreground">/100</span></p>
                  <p className="text-sm text-muted-foreground">Baseado em formação, avaliações e feedback da comunidade.</p>
                </div>
              </div>
            </div>

            {/* About */}
            <Section title="Sobre">
              <p className="text-muted-foreground">
                {p.name} atende com escuta ativa, sigilo e uma abordagem afirmativa.
                Trabalha com pessoas LGBTQIAPN+ há mais de 8 anos, integrando práticas
                baseadas em evidências e respeito à individualidade de cada paciente.
              </p>
            </Section>

            <Section title="Formação">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /> Graduação — Universidade Federal</li>
                <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /> Especialização em Saúde LGBTQIAPN+</li>
                <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" /> Formação em abordagem afirmativa</li>
              </ul>
            </Section>

            <Section title="Idiomas">
              <div className="flex flex-wrap gap-2">
                {["Português", "Inglês", "Libras"].map((l) => (
                  <span key={l} className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" /> {l}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Avaliações">
              <ul className="space-y-4">
                {[
                  { name: "Marina", text: "Acolhimento desde o primeiro contato. Me senti respeitada e ouvida." },
                  { name: "K.", text: "Profissional incrível, com conhecimento real sobre saúde trans." },
                ].map((r) => (
                  <li key={r.name} className="card-soft p-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold">
                        <Star className="h-3.5 w-3.5 fill-warning text-warning" aria-hidden="true" /> 5.0
                      </span>
                      <span className="text-sm text-muted-foreground">— {r.name}</span>
                    </div>
                    <p className="mt-2 text-sm">{r.text}</p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Booking sidebar */}
          <aside className="card-soft h-fit p-6 lg:sticky lg:top-24" aria-label="Agendamento">
            <h2 className="font-display text-lg font-bold">Agendar consulta</h2>
            <p className="mt-1 text-sm text-muted-foreground">Hoje · Quinta, 24 de outubro</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {slots.map((s) => (
                <button
                  key={s}
                  className="min-h-11 rounded-xl border border-border bg-card text-sm font-semibold hover:border-primary hover:bg-primary-soft hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mt-5 space-y-3 rounded-2xl bg-surface p-4 text-sm">
              <Row label="Modalidade" value="Teleconsulta" />
              <Row label="Duração" value="50 min" />
              <Row label="Valor" value="R$ 220,00" />
            </div>

            <Link
              to="/agendamento"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 font-semibold text-primary-foreground shadow-soft hover:opacity-95"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Agendar consulta
            </Link>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Confirmação imediata · Cancelamento gratuito até 24h antes.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 card-soft p-6">
      <h2 className="font-display text-lg font-bold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

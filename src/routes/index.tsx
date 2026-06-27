import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Brain,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
  Activity,
  Cross,
  Salad,
  ArrowRight,
  Calendar,
  MapPin,
  Lock,
  CheckCircle2,
  Star,
  Rainbow,
  UsersRound,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionals, articles } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAG — Saúde LGBTQIAPN+ com orgulho, respeito e segurança" },
      {
        name: "description",
        content:
          "Encontre profissionais de saúde preparados para atender a comunidade LGBTQIAPN+. Atendimento online ou presencial, com privacidade, respeito e cuidado afirmativo.",
      },
    ],
  }),
  component: Home,
});

const specialtyIcons = {
  Brain,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
  Activity,
  Cross,
  Salad,
} as const;

const specialties = [
  { name: "Saúde Mental", icon: "Brain", count: 248 },
  { name: "Saúde Sexual", icon: "HeartPulse", count: 184 },
  { name: "Hormonioterapia", icon: "Pill", count: 92 },
  { name: "PrEP & PEP", icon: "ShieldCheck", count: 64 },
  { name: "Ginecologia inclusiva", icon: "Stethoscope", count: 76 },
  { name: "Endocrinologia", icon: "Activity", count: 58 },
  { name: "Clínica Geral", icon: "Cross", count: 312 },
  { name: "Nutrição", icon: "Salad", count: 121 },
] as const;

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar />

      <main id="conteudo">
        {/* HERO */}
        <section className="gradient-hero relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary shadow-soft">
                  <Rainbow className="h-3.5 w-3.5" aria-hidden="true" />
                  GAG · saúde afirmativa LGBTQIAPN+
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Cuidado para viver com{" "}
                  <span className="bg-gradient-to-r from-pride-red via-pride-green to-pride-purple bg-clip-text text-transparent">
                    orgulho e segurança.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  A GAG conecta pessoas LGBTQIAPN+ a profissionais preparados para
                  atender com privacidade, escuta ativa, linguagem respeitosa e cuidado
                  afirmativo.
                </p>

                {/* Search */}
                <form
                  className="mt-8 rounded-2xl border border-border bg-card p-2 shadow-elevated"
                  role="search"
                  aria-label="Buscar atendimento"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                    <label className="relative">
                      <span className="sr-only">Especialidade ou profissional</span>
                      <Search
                        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        placeholder="Especialidade ou profissional"
                        className="h-12 w-full rounded-xl border border-transparent bg-surface pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:outline-none"
                      />
                    </label>
                    <label className="relative">
                      <span className="sr-only">Cidade</span>
                      <MapPin
                        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        placeholder="Cidade ou “Online”"
                        className="h-12 w-full rounded-xl border border-transparent bg-surface pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:outline-none"
                      />
                    </label>
                    <Link
                      to="/buscar"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95"
                    >
                      Buscar
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </form>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Pessoas trans", "PrEP", "Hormonioterapia", "Saúde sexual sem tabu", "Nome social"].map((t) => (
                    <Link
                      key={t}
                      to="/buscar"
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-muted"
                    >
                      {t}
                    </Link>
                  ))}
                </div>

                <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-2">
                    <Lock className="h-4 w-4 text-teal" aria-hidden="true" />
                    100% privado · LGPD
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" aria-hidden="true" />
                    Atendimento afirmativo
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Star className="h-4 w-4 text-warning" fill="currentColor" aria-hidden="true" />
                    4.9 / 5 em avaliações
                  </li>
                </ul>
              </div>

              {/* Visual mock */}
              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="relative grid gap-4">
                  <div className="card-soft overflow-hidden p-5">
                    <div className="pride-bar h-3 rounded-full" />
                    <div className="mt-5 flex items-start gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-pride text-white shadow-soft">
                        <UsersRound className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-display text-xl font-extrabold">GAG</p>
                        <p className="text-sm text-muted-foreground">Rede de cuidado LGBTQIAPN+</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                      <span className="rounded-xl bg-primary-soft px-2 py-2 text-primary">Trans</span>
                      <span className="rounded-xl bg-accent-soft px-2 py-2 text-accent">Bi+</span>
                      <span className="rounded-xl bg-teal-soft px-2 py-2 text-teal">Queer</span>
                    </div>
                  </div>
                  <div className="card-soft ml-auto w-72 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl gradient-pride" />
                      <div>
                        <p className="text-sm font-bold">Dra. Ana Ribeiro</p>
                        <p className="text-xs text-muted-foreground">Psicologia · ela/dela</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-semibold text-primary">Pessoas trans</span>
                      <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[11px] font-semibold text-teal">Online</span>
                    </div>
                  </div>
                  <div className="card-soft w-80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Próxima consulta</p>
                    <p className="mt-2 font-display text-lg font-bold">Quinta · 14:30</p>
                    <p className="text-sm text-muted-foreground">Teleconsulta · 30 min</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="h-7 w-7 rounded-full bg-pride-blue ring-2 ring-card" />
                        <div className="h-7 w-7 rounded-full bg-pride-purple ring-2 ring-card" />
                      </div>
                      <span className="rounded-full gradient-pride px-3 py-1 text-xs font-semibold text-primary-foreground">Confirmada</span>
                    </div>
                  </div>
                  <div className="card-soft ml-12 w-72 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Índice de inclusão</p>
                    <p className="mt-1 font-display text-3xl font-extrabold text-primary">98<span className="text-base text-muted-foreground">/100</span></p>
                    <div className="mt-3 h-2 rounded-full bg-muted">
                      <div className="h-full w-[98%] rounded-full gradient-pride" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Especialidades</h2>
              <p className="mt-2 text-muted-foreground">
                Profissionais com formação e experiência para acolher pessoas LGBTQIAPN+.
              </p>
            </div>
            <Link to="/buscar" className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {specialties.map((s) => {
              const Icon = specialtyIcons[s.icon as keyof typeof specialtyIcons];
              return (
                <li key={s.name}>
                  <Link
                    to="/buscar"
                    className="card-soft card-hover flex items-center gap-3 p-4 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-foreground">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.count} profissionais</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* QUICK ACTIONS */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <QuickAction
              icon={<Calendar className="h-5 w-5" />}
              title="Agendar consulta"
              desc="Cuidado afirmativo em minutos."
              to="/agendamento"
              tone="primary"
            />
            <QuickAction
              icon={<MapPin className="h-5 w-5" />}
              title="Mapa de serviços"
              desc="Locais seguros para a comunidade."
              to="/mapa"
              tone="accent"
            />
            <QuickAction
              icon={<ShieldCheck className="h-5 w-5" />}
              title="PrEP e PEP"
              desc="Prevenção sem julgamento."
              to="/biblioteca"
              tone="teal"
            />
          </div>
        </section>

        {/* RECOMMENDED PROFESSIONALS */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Profissionais recomendados</h2>
              <p className="mt-2 text-muted-foreground">
                Curadoria com base em avaliações, pronomes respeitados e Índice de Inclusão.
              </p>
            </div>
            <Link to="/buscar" className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {professionals.slice(0, 3).map((p) => (
              <ProfessionalCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* ARTICLES */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Saúde LGBTQIAPN+</h2>
              <p className="mt-2 text-muted-foreground">
                Conteúdo confiável, revisado por profissionais.
              </p>
            </div>
            <Link to="/biblioteca" className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">
              Ir para a biblioteca <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {articles.map((a) => (
              <article key={a.id} className="card-soft card-hover overflow-hidden hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]">
                <div className="h-40 w-full" style={{ background: a.gradient }} aria-hidden="true" />
                <div className="p-5">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-foreground/80">
                    {a.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold leading-tight">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{a.readTime} de leitura</span>
                    <a href="#" className="font-semibold text-primary hover:underline">Ler artigo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 text-primary-foreground shadow-elevated sm:p-14">
            <div aria-hidden="true" className="pride-bar absolute inset-x-0 top-0 h-1" />
            <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  GAG está com você em cada etapa do cuidado.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/90">
                  Encontre profissionais que respeitam sua identidade, seu corpo, seus pronomes e sua história — onde quer que você esteja.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/buscar"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-white/90"
                >
                  Encontrar atendimento
                </Link>
                <Link
                  to="/biblioteca"
                  className="rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Ler a biblioteca
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function QuickAction({
  icon,
  title,
  desc,
  to,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
  tone: "primary" | "accent" | "teal";
}) {
  const tones = {
    primary: "bg-primary-soft text-primary",
    accent: "bg-accent-soft text-accent",
    teal: "bg-teal-soft text-teal",
  };
  return (
    <Link
      to={to}
      className="card-soft card-hover flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]"
    >
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tones[tone]}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-bold text-foreground">{title}</span>
        <span className="block truncate text-sm text-muted-foreground">{desc}</span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
    </Link>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionals } from "@/lib/mock-data";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/buscar")({
  head: () => ({
    meta: [
      { title: "Buscar profissionais — GAG" },
      { name: "description", content: "Filtre por especialidade, cidade e atendimento inclusivo." },
    ],
  }),
  component: Buscar,
});

const filterGroups = [
  {
    label: "Tipo de atendimento",
    options: ["Online", "Presencial"],
  },
  {
    label: "Pagamento",
    options: ["Aceita SUS", "Aceita plano", "Particular"],
  },
  {
    label: "Especialidade",
    options: ["Saúde mental", "Hormonioterapia", "Saúde sexual", "Ginecologia inclusiva", "Endocrinologia"],
  },
  {
    label: "Experiência inclusiva",
    options: ["Pessoas trans", "Não-binárie", "Sorologia HIV+", "Neurodivergência"],
  },
];

function Buscar() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#resultados" className="skip-link">Pular para os resultados</a>
      <Navbar />

      <main>
        {/* Header */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Encontre cuidado que respeita você
            </h1>
            <p className="mt-2 text-muted-foreground">
              {professionals.length}+ profissionais com experiência inclusiva.
            </p>

            <form
              role="search"
              aria-label="Buscar profissionais"
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 grid gap-2 rounded-2xl border border-border bg-card p-2 shadow-soft sm:grid-cols-[1fr_1fr_auto]"
            >
              <label className="relative">
                <span className="sr-only">Buscar</span>
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Nome, especialidade…"
                  className="h-12 w-full rounded-xl border border-transparent bg-surface pl-10 pr-3 text-sm focus:border-primary focus:bg-card focus:outline-none"
                />
              </label>
              <label className="relative">
                <span className="sr-only">Cidade</span>
                <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="h-12 w-full rounded-xl border border-transparent bg-surface pl-10 pr-3 text-sm focus:border-primary focus:bg-card focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl gradient-brand px-6 text-sm font-semibold text-primary-foreground"
              >
                Buscar
              </button>
            </form>
          </div>
        </section>

        {/* Results */}
        <section id="resultados" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
            {/* Filters trigger - mobile */}
            <div className="mb-4 flex items-center justify-between lg:hidden">
              <p className="text-sm text-muted-foreground">{professionals.length} resultados</p>
              <button
                type="button"
                onClick={() => setFiltersOpen((v) => !v)}
                aria-expanded={filtersOpen}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold"
              >
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Filtros
              </button>
            </div>

            {/* Filters */}
            <aside
              className={`${filtersOpen ? "block" : "hidden"} card-soft h-fit p-5 lg:sticky lg:top-24 lg:block`}
              aria-label="Filtros"
            >
              <h2 className="font-display text-base font-bold">Filtros</h2>
              <div className="mt-4 space-y-6">
                {filterGroups.map((g) => (
                  <fieldset key={g.label} className="border-0 p-0">
                    <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {g.label}
                    </legend>
                    <ul className="space-y-2">
                      {g.options.map((o) => (
                        <li key={o}>
                          <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-muted">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                            />
                            <span className="text-sm">{o}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </fieldset>
                ))}
                <button
                  type="button"
                  className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted"
                >
                  Limpar filtros
                </button>
              </div>
            </aside>

            <div>
              <div className="mb-5 hidden items-center justify-between lg:flex">
                <p className="text-sm text-muted-foreground">{professionals.length} resultados</p>
                <label className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Ordenar:</span>
                  <select className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold focus:border-primary focus:outline-none">
                    <option>Melhor avaliados</option>
                    <option>Mais próximos</option>
                    <option>Índice de inclusão</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {professionals.map((p) => (
                  <ProfessionalCard key={p.id} p={p} />
                ))}
              </div>

              {/* Pagination */}
              <nav aria-label="Paginação" className="mt-10 flex items-center justify-center gap-1">
                {["‹", "1", "2", "3", "›"].map((p, i) => (
                  <button
                    key={i}
                    className={`min-h-11 min-w-11 rounded-xl px-3 text-sm font-semibold ${
                      p === "1" ? "gradient-brand text-primary-foreground" : "border border-border bg-card hover:bg-muted"
                    }`}
                    aria-current={p === "1" ? "page" : undefined}
                  >
                    {p}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";

export const Route = createFileRoute("/biblioteca")({
  head: () => ({ meta: [{ title: "Biblioteca de saúde — GAG" }] }),
  component: Biblioteca,
});

const categories = [
  "Todos","Saúde Mental","Saúde Sexual","ISTs","PrEP","PEP","Hormonioterapia","Direitos","Prevenção","Bem-estar",
];

const articles = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  category: categories[(i % (categories.length - 1)) + 1],
  title: [
    "Construindo uma rede de apoio segura",
    "Tudo sobre PrEP: dúvidas mais comuns",
    "Hormonioterapia: início e cuidados",
    "Saúde mental e ansiedade na comunidade",
    "ISTs: prevenção combinada na prática",
    "Direitos LGBTQIAPN+ no SUS",
    "Bem-estar: rituais simples de autocuidado",
    "Quando procurar a PEP",
    "Sexo seguro sem julgamentos",
  ][i],
  excerpt: "Conteúdo revisado por profissionais da rede, com linguagem acessível e baseada em evidências.",
  readTime: `${5 + (i % 7)} min`,
  gradient: [
    "linear-gradient(135deg,#6C63FF,#3B82F6)",
    "linear-gradient(135deg,#14B8A6,#3B82F6)",
    "linear-gradient(135deg,#8B5CF6,#EC4899)",
    "linear-gradient(135deg,#3B82F6,#14B8A6)",
    "linear-gradient(135deg,#EC4899,#6C63FF)",
    "linear-gradient(135deg,#14B8A6,#6C63FF)",
  ][i % 6],
}));

function Biblioteca() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Biblioteca de saúde</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Conteúdo confiável sobre saúde LGBTQIAPN+, revisado por profissionais da rede GAG.
          </p>

          <label className="relative mt-6 block max-w-xl">
            <span className="sr-only">Buscar artigo</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              className="h-12 w-full rounded-2xl border border-border bg-card pl-11 pr-4 text-sm shadow-soft focus:border-primary focus:outline-none"
              placeholder="Buscar por tema, sintoma ou dúvida…"
            />
          </label>
        </header>

        <nav aria-label="Categorias" className="mt-6 overflow-x-auto">
          <ul className="flex w-max gap-2">
            {categories.map((c, i) => (
              <li key={c}>
                <button className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? "gradient-brand text-primary-foreground" : "border border-border bg-card hover:bg-muted"}`}>
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.id} className="card-soft card-hover overflow-hidden hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-elevated)]">
              <div className="h-44 w-full" style={{ background: a.gradient }} aria-hidden="true" />
              <div className="p-5">
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-foreground/80">{a.category}</span>
                <h2 className="mt-3 font-display text-lg font-bold leading-tight">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{a.readTime} de leitura</span>
                  <a href="#" className="font-semibold text-primary hover:underline">Ler artigo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

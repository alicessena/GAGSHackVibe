import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Cross, Brain, FlaskConical, Pill, Search, Navigation } from "lucide-react";

export const Route = createFileRoute("/mapa")({
  head: () => ({ meta: [{ title: "Mapa de serviços — GAG" }] }),
  component: Mapa,
});

const markers = [
  { id: 1, name: "Casa Acolher", type: "Clínica", icon: Building2, top: "28%", left: "32%", tone: "primary" },
  { id: 2, name: "Hospital Santa Inclusão", type: "Hospital", icon: Cross, top: "45%", left: "58%", tone: "accent" },
  { id: 3, name: "Espaço Equilíbrio", type: "Psicólogos", icon: Brain, top: "62%", left: "40%", tone: "teal" },
  { id: 4, name: "Lab Diverso", type: "Laboratório", icon: FlaskConical, top: "38%", left: "72%", tone: "primary" },
  { id: 5, name: "Farmácia Cuidar+", type: "Farmácia", icon: Pill, top: "70%", left: "65%", tone: "accent" },
];

const toneBg = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  teal: "bg-teal text-white",
} as const;

function Mapa() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Mapa de serviços</h1>
            <p className="mt-1 text-muted-foreground">Encontre clínicas, hospitais, farmácias e laboratórios afirmativos para pessoas LGBTQIAPN+ perto de você.</p>
          </div>
          <label className="relative w-full sm:w-80">
            <span className="sr-only">Buscar local</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-3 text-sm focus:border-primary focus:outline-none"
              placeholder="Buscar local ou serviço"
            />
          </label>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* Sidebar list */}
          <aside className="card-soft max-h-[640px] overflow-auto p-3" aria-label="Locais">
            <ul className="space-y-2">
              {markers.map((m) => (
                <li key={m.id}>
                  <button className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${toneBg[m.tone as keyof typeof toneBg]}`}>
                      <m.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">{m.name}</span>
                      <span className="block text-xs text-muted-foreground">{m.type} · 1,{m.id} km</span>
                    </span>
                    <span className="rounded-full bg-teal-soft px-2 py-0.5 text-[10px] font-bold text-teal">Inclusivo</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Map mock */}
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft" style={{ minHeight: 560 }}>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.96 0.02 200) 0%, oklch(0.94 0.02 250) 100%)",
              }}
              aria-hidden="true"
            />
            {/* fake roads */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="oklch(0.85 0.02 250)" strokeWidth="0.6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
              <path d="M0,300 Q200,260 400,320 T800,280" stroke="oklch(0.78 0.04 250)" strokeWidth="14" fill="none" opacity="0.5"/>
              <path d="M150,0 Q180,200 220,400 T260,800" stroke="oklch(0.78 0.04 250)" strokeWidth="10" fill="none" opacity="0.5"/>
              <path d="M0,500 Q300,460 600,520 T1000,480" stroke="oklch(0.78 0.04 250)" strokeWidth="10" fill="none" opacity="0.45"/>
            </svg>

            {markers.map((m) => (
              <button
                key={m.id}
                style={{ top: m.top, left: m.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                aria-label={m.name}
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl shadow-elevated ring-4 ring-white ${toneBg[m.tone as keyof typeof toneBg]}`}>
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {m.name}
                </span>
              </button>
            ))}

            <button
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl bg-card px-3.5 py-2.5 text-sm font-semibold shadow-elevated hover:bg-muted"
              aria-label="Centralizar na minha localização"
            >
              <Navigation className="h-4 w-4 text-primary" /> Minha localização
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

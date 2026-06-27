import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, CalendarCheck, Video, Clock } from "lucide-react";

export const Route = createFileRoute("/agendamento")({
  head: () => ({
    meta: [{ title: "Agendar consulta — GAG" }],
  }),
  component: Agendamento,
});

function Agendamento() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState<number | null>(24);
  const [time, setTime] = useState<string | null>(null);
  const steps = ["Data e horário", "Resumo", "Confirmação"];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Agendar consulta</h1>
        <p className="mt-2 text-muted-foreground">com Dra. Ana Ribeiro · Psicologia</p>

        {/* Stepper */}
        <ol className="mt-8 grid grid-cols-3 gap-3" aria-label="Progresso">
          {steps.map((s, i) => {
            const n = (i + 1) as 1 | 2 | 3;
            const active = step === n;
            const done = step > n;
            return (
              <li key={s} className="flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-bold ${
                    done ? "bg-teal text-white" : active ? "gradient-brand text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden="true" /> : n}
                </span>
                <span className={`text-sm font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {s}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 card-soft p-6 sm:p-8">
          {step === 1 && (
            <div className="grid gap-8 md:grid-cols-[1fr_240px]">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-bold">Outubro 2026</h2>
                  <div className="flex gap-1">
                    <button aria-label="Mês anterior" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted"><ChevronLeft className="h-4 w-4"/></button>
                    <button aria-label="Próximo mês" className="grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted"><ChevronRight className="h-4 w-4"/></button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {["D","S","T","Q","Q","S","S"].map((d,i) => <div key={i} className="py-2">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
                    const sel = date === d;
                    const disabled = d < 22;
                    return (
                      <button
                        key={d}
                        disabled={disabled}
                        onClick={() => setDate(d)}
                        aria-pressed={sel}
                        aria-label={`Dia ${d}`}
                        className={`min-h-11 rounded-xl text-sm font-semibold ${
                          sel ? "gradient-brand text-primary-foreground shadow-soft" :
                          disabled ? "text-muted-foreground/40" :
                          "hover:bg-primary-soft hover:text-primary"
                        }`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="font-display text-base font-bold">Horários</h3>
                <p className="text-xs text-muted-foreground">Quinta, {date} de outubro</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {["08:00","09:30","11:00","14:00","15:30","17:00"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      aria-pressed={time === t}
                      className={`min-h-11 rounded-xl border text-sm font-semibold ${
                        time === t ? "gradient-brand border-transparent text-primary-foreground" : "border-border hover:border-primary hover:bg-primary-soft hover:text-primary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={!time}
                  onClick={() => setStep(2)}
                  className="mt-6 w-full rounded-xl gradient-brand px-5 py-3 font-semibold text-primary-foreground shadow-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-lg font-bold">Resumo da consulta</h2>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
                <SumRow icon={<CalendarCheck className="h-5 w-5"/>} label="Data" value={`Quinta, ${date} de outubro de 2026`} />
                <SumRow icon={<Clock className="h-5 w-5"/>} label="Horário" value={time ?? "—"} />
                <SumRow icon={<Video className="h-5 w-5"/>} label="Modalidade" value="Teleconsulta · 50 min" />
              </ul>
              <div className="mt-5 rounded-2xl bg-surface p-4 text-sm">
                <div className="flex items-center justify-between"><span>Consulta</span><span>R$ 220,00</span></div>
                <div className="mt-2 flex items-center justify-between font-semibold"><span>Total</span><span>R$ 220,00</span></div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setStep(1)} className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted">Voltar</button>
                <button onClick={() => setStep(3)} className="flex-1 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">Confirmar agendamento</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-teal-soft text-teal">
                <Check className="h-8 w-8" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-extrabold">Consulta confirmada!</h2>
              <p className="mt-2 text-muted-foreground">
                Enviamos os detalhes para o seu e-mail. Você pode acompanhar tudo no seu painel.
              </p>
              <div className="mx-auto mt-6 max-w-md rounded-2xl bg-surface p-5 text-left">
                <p className="text-sm text-muted-foreground">Dra. Ana Ribeiro</p>
                <p className="font-display text-lg font-bold">Quinta, {date} · {time}</p>
                <p className="text-sm text-muted-foreground">Teleconsulta · link enviado por e-mail</p>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                <Link to="/dashboard" className="rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground">Ir para minha conta</Link>
                <Link to="/" className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-muted">Voltar ao início</Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SumRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-center gap-4 p-4">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="block font-semibold">{value}</span>
      </span>
    </li>
  );
}

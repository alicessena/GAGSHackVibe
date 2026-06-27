import { Star, MapPin, Video, Stethoscope } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type Professional = {
  id: string;
  name: string;
  pronoun: string;
  specialty: string;
  rating: number;
  reviews: number;
  distance?: string;
  online: boolean;
  inPerson: boolean;
  acceptsSus: boolean;
  acceptsInsurance: boolean;
  city: string;
  inclusionScore: number;
  badges: string[];
  avatarGradient: string;
  initials: string;
};

export function ProfessionalCard({ p }: { p: Professional }) {
  return (
    <article className="card-soft card-hover hover:[box-shadow:var(--shadow-elevated)] hover:-translate-y-0.5 p-5">
      <div className="flex items-start gap-4">
        <div
          className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-bold text-white"
          style={{ background: p.avatarGradient }}
          aria-hidden="true"
        >
          {p.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-bold text-foreground">
            {p.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {p.pronoun} · {p.specialty}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1 font-semibold text-foreground">
              <Star className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
              {p.rating.toFixed(1)}
              <span className="font-normal text-muted-foreground">
                ({p.reviews})
              </span>
            </span>
            {p.distance && (
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {p.distance}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.online && (
          <Chip icon={<Video className="h-3 w-3" />} tone="accent">
            Online
          </Chip>
        )}
        {p.inPerson && (
          <Chip icon={<Stethoscope className="h-3 w-3" />} tone="teal">
            Presencial
          </Chip>
        )}
        {p.badges.map((b) => (
          <Chip key={b} tone="primary">
            {b}
          </Chip>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Índice de inclusão</p>
          <p className="font-display text-base font-bold text-primary">
            {p.inclusionScore}/100
          </p>
        </div>
        <Link
          to="/profissional/$id"
          params={{ id: p.id }}
          className="rounded-xl gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-95"
        >
          Ver perfil
        </Link>
      </div>
    </article>
  );
}

function Chip({
  children,
  icon,
  tone = "primary",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  tone?: "primary" | "accent" | "teal" | "muted";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary-soft text-primary",
    accent: "bg-accent-soft text-accent",
    teal: "bg-teal-soft text-teal",
    muted: "bg-muted text-foreground/80",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}

import { INFO_BAR } from "@/lib/data";
import { Calendar, Hourglass, Monitor, Clock, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  calendar: Calendar,
  hourglass: Hourglass,
  monitor: Monitor,
  clock: Clock,
};

/** Faixa de informações rápidas do programa (4 blocos). */
export function InfoBar() {
  return (
    <section aria-label="Informações do programa" className="bg-deep text-ink-light">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-10 sm:gap-8 lg:grid-cols-4">
        {INFO_BAR.map((item) => {
          const Icon = ICONS[item.icone] ?? Calendar;
          return (
            <div
              key={item.titulo}
              className="flex flex-col items-center gap-2 px-2 py-4 text-center"
            >
              <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-wide text-ink-light/70">
                {item.titulo}
              </span>
              <span className="font-display text-lg font-bold text-white sm:text-xl">
                {item.valor}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { TARJA_TOPO } from "@/lib/data";

/** Tarja fixa no topo — público-alvo. */
export function TopBar() {
  return (
    <div className="bg-[#c08a30] text-white">
      <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-[11px] font-semibold uppercase leading-snug tracking-wide sm:text-xs">
        {TARJA_TOPO}
      </p>
    </div>
  );
}

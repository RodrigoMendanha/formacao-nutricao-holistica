import { FOOTER } from "@/lib/site";

/** Rodapé. */
export function Footer() {
  return (
    <footer className="bg-dark py-8 text-ink-light/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm sm:flex-row sm:justify-between">
        <p>
          © {FOOTER.ano} {FOOTER.marca} • {FOOTER.cidade}
        </p>
        <a
          href={FOOTER.linkPrivacidade}
          className="underline underline-offset-4 transition hover:text-gold"
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}

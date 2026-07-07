import Image from "next/image";
import { OFERTA } from "@/lib/data";
import { CheckoutButton } from "@/components/ui/CheckoutButton";
import { Cta } from "@/components/ui/Cta";
import { CHECKOUT, WHATSAPP_LINK } from "@/lib/site";
import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bloco de preço com ênfase no valor:
 *  - "De R$ …" riscado (opcional)
 *  - prefixo pequeno ("por apenas")  ← quebra de linha
 *  - VALOR grande em destaque         ← quebra de linha
 *  - sufixo pequeno ("à vista")
 */
function Preco({
  de,
  prefixo,
  valor,
  sufixo,
  valorClassName,
}: {
  de?: string;
  prefixo?: string;
  valor: string;
  sufixo?: string;
  valorClassName?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      {de && <span className="text-sm text-ink-light/60 line-through">{de}</span>}
      {prefixo && (
        <span className="mt-1 text-sm font-medium text-ink-light/80">{prefixo}</span>
      )}
      <span className={cn("font-display font-bold leading-none text-gold", valorClassName)}>
        {valor}
      </span>
      {sufixo && (
        <span className="mt-1 text-sm font-medium text-ink-light/80">{sufixo}</span>
      )}
    </div>
  );
}

/**
 * Oferta — dois planos de produto, com a mesma estrutura sobreposta:
 *  - Esquerda: FORMAÇÃO NUTRIÇÃO HOLÍSTICA (1 logo).
 *  - Direita (destaque): FORMAÇÃO + META NUTRI ACADEMY (2 logos), 2 planos de acesso.
 * Âncora #inscricao.
 */
export function Oferta() {
  const { formacao, combo } = OFERTA;

  return (
    <section
      id="inscricao"
      aria-labelledby="oferta-title"
      className="scroll-mt-8 bg-dark py-16 text-ink-light sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-0">
        <h2
          id="oferta-title"
          className="mx-auto mb-12 max-w-3xl text-center font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          {OFERTA.titulo}
        </h2>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-center md:gap-0">
          {/* ESQUERDA — Formação (fica embaixo/atrás) */}
          <article className="relative z-0 flex flex-col rounded-2xl border border-line-dark bg-white/[0.03] p-7 md:w-1/2 md:shrink-0 md:pr-14">
            {/* 1 logo */}
            <div className="mb-6 flex items-center justify-center">
              <Image
                src="/img/logo-nutricao-holistica.png"
                width={180}
                height={72}
                alt="Logo Formação em Nutrição Holística"
                className="h-36 w-auto object-contain"
              />
            </div>

            <h3 className="mb-5 text-center font-display text-xl font-bold text-gold">
              {formacao.titulo}
            </h3>

            <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-ink-light/90">
              {formacao.itens.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col items-center">
              {/* <span className="mb-3 inline-block rounded-full bg-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink-light">
                {formacao.precoLabel}
              </span> */}
              <Preco
                de={formacao.precoDe}
                prefixo={formacao.precoPrefixo}
                valor={formacao.precoValor}
                sufixo={formacao.precoSufixo}
                valorClassName="text-4xl sm:text-5xl"
              />
              <CheckoutButton href={CHECKOUT.formacao} className="mt-5 w-full">
                {formacao.cta}
              </CheckoutButton>
            </div>
          </article>

          {/* DIREITA — Combo em destaque (elevado e por cima) */}
          <article className="relative z-10 flex flex-col rounded-3xl border-2 border-gold/60 bg-dark p-7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7),0_0_50px_-12px_rgba(163,107,34,0.55)] md:-ml-10 md:-mt-8 md:w-1/2 md:shrink-0">
            {/* 2 logos */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <Image
                src="/img/logo-nutricao-holistica.png"
                width={150}
                height={64}
                alt="Logo Formação em Nutrição Holística"
                className="h-36 w-auto object-contain"
              />
              <span aria-hidden="true" className="text-2xl font-light text-gold">
                +
              </span>
              <Image
                src="/img/logo-meta-nutri-academy.png"
                width={150}
                height={64}
                alt="Logo Meta Nutri Academy"
                className="h-36 w-auto object-contain"
              />
            </div>

            <h3 className="mb-6 text-center font-bold text-xl font-bold text-gold">
              {combo.titulo}
            </h3>

            {/* Grupos de itens */}
            <div className="flex flex-col gap-5">
              {combo.grupos.map((grupo) => (
                <div key={grupo.titulo}>
                  <p className="mb-2 text-sm font-bold text-white">{grupo.titulo}</p>
                  <ul className="flex flex-col gap-2 text-sm leading-relaxed text-ink-light/90">
                    {grupo.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Planos de acesso */}
            <div className="mt-7 grid gap-4">
              {combo.planos.map((plano, i) => (
                <div
                  key={plano.label}
                  className="flex flex-col rounded-2xl border border-gold/40 bg-white/[0.04] p-5 text-center"
                >
                  <span className="inline-block self-center rounded-full bg-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink-light">
                    {plano.label}
                  </span>
                  <div className="mt-3">
                    <Preco
                      de={plano.precoDe}
                      prefixo={plano.precoPrefixo}
                      valor={plano.precoValor}
                      sufixo={plano.precoSufixo}
                      valorClassName="text-3xl"
                    />
                  </div>
                  <CheckoutButton
                    href={i === 0 ? CHECKOUT.comboAnual : CHECKOUT.comboSemestral}
                    size="md"
                    className="mt-4 w-full"
                  >
                    {plano.cta}
                  </CheckoutButton>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Dúvidas sobre a inscrição — WhatsApp */}
        <div className="mt-10 flex justify-center">
          <Cta href={WHATSAPP_LINK} variant="outline-light" className="gap-2">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Quero tirar dúvida sobre a inscrição
          </Cta>
        </div>
      </div>
    </section>
  );
}

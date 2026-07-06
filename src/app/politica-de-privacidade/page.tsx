import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import {
  SITE_URL,
  ORG_NAME,
  FOOTER,
  PRIVACIDADE_EMAIL,
  PRIVACIDADE_ATUALIZACAO,
  CHECKOUT_MODAL_ENABLED,
  WHATSAPP_LINK,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Formação em Nutrição Holística®",
  description:
    "Como tratamos seus dados pessoais na Formação em Nutrição Holística®, em conformidade com a LGPD.",
  alternates: {
    canonical: new URL("politica-de-privacidade", SITE_URL).toString(),
  },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para a página inicial
          </Link>

          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            Última atualização: {PRIVACIDADE_ATUALIZACAO}
          </p>

          <div className="mt-8 flex flex-col gap-8 text-sm leading-relaxed text-ink-soft sm:text-base">
            <section aria-labelledby="pp-intro">
              <h2 id="pp-intro" className="mb-2 font-display text-xl font-bold text-ink">
                1. Quem somos
              </h2>
              <p>
                Esta política descreve como a {ORG_NAME} ({FOOTER.marca}, {FOOTER.cidade})
                trata os dados pessoais dos visitantes desta página, em conformidade com a
                Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
              </p>
            </section>

            <section aria-labelledby="pp-coleta">
              <h2 id="pp-coleta" className="mb-2 font-display text-xl font-bold text-ink">
                2. Dados que coletamos
              </h2>

              {/* Bloco exibido APENAS quando o modal de captura está ativo. */}
              {CHECKOUT_MODAL_ENABLED ? (
                <>
                  <p>
                    Ao clicar no botão de inscrição, exibimos um formulário no qual, para
                    prosseguir até o checkout, solicitamos os seguintes dados:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    <li><strong>Nome completo</strong></li>
                    <li><strong>E-mail</strong></li>
                    <li><strong>WhatsApp (com DDD)</strong></li>
                  </ul>
                  <p className="mt-3">
                    Esses dados são enviados aos nossos servidores e registrados em planilha
                    (Google Sheets), com data e hora, para que nossa equipe possa entrar em
                    contato e dar continuidade à sua inscrição.
                  </p>
                </>
              ) : (
                <p>
                  Não coletamos dados pessoais por meio de formulários nesta página. O contato
                  é feito diretamente pelo WhatsApp, por sua iniciativa, e o checkout é realizado
                  em ambiente de terceiro (processador de pagamento).
                </p>
              )}
            </section>

            <section aria-labelledby="pp-whatsapp">
              <h2 id="pp-whatsapp" className="mb-2 font-display text-xl font-bold text-ink">
                3. Contato via WhatsApp
              </h2>
              <p>
                Ao clicar em “Quero outras informações”, você é redirecionado para o{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gold underline underline-offset-2"
                >
                  WhatsApp
                </a>
                . A conversa iniciada por você e os dados ali compartilhados são tratados
                também segundo a política de privacidade do WhatsApp/Meta.
              </p>
            </section>

            <section aria-labelledby="pp-finalidade">
              <h2 id="pp-finalidade" className="mb-2 font-display text-xl font-bold text-ink">
                4. Finalidade do tratamento
              </h2>
              <p>Utilizamos seus dados para:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>responder às suas solicitações e prestar atendimento;</li>
                <li>dar andamento à sua inscrição na Formação;</li>
                <li>enviar informações sobre o curso e comunicações comerciais relacionadas.</li>
              </ul>
            </section>

            <section aria-labelledby="pp-compart">
              <h2 id="pp-compart" className="mb-2 font-display text-xl font-bold text-ink">
                5. Compartilhamento com terceiros
              </h2>
              <p>
                Podemos utilizar serviços de terceiros que atuam como operadores, tais como
                plataforma de pagamento/checkout e ferramentas de armazenamento (por exemplo,
                Google). Não vendemos seus dados pessoais.
              </p>
            </section>

            <section aria-labelledby="pp-direitos">
              <h2 id="pp-direitos" className="mb-2 font-display text-xl font-bold text-ink">
                6. Seus direitos (LGPD)
              </h2>
              <p>
                Você pode solicitar, a qualquer momento, confirmação da existência de
                tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus
                dados, bem como revogar o consentimento. Para exercer esses direitos, entre em
                contato pelo e-mail{" "}
                <a
                  href={`mailto:${PRIVACIDADE_EMAIL}`}
                  className="font-semibold text-gold underline underline-offset-2"
                >
                  {PRIVACIDADE_EMAIL}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="pp-contato">
              <h2 id="pp-contato" className="mb-2 font-display text-xl font-bold text-ink">
                7. Contato
              </h2>
              <p>
                Dúvidas sobre esta Política de Privacidade podem ser enviadas para{" "}
                <a
                  href={`mailto:${PRIVACIDADE_EMAIL}`}
                  className="font-semibold text-gold underline underline-offset-2"
                >
                  {PRIVACIDADE_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

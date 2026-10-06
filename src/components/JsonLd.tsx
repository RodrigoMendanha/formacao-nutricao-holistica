import { FAQ } from "@/lib/data";
import {
  SITE_URL,
  SITE_DESCRIPTION,
  ORG_NAME,
  ORG_LOGO,
  ORG_SAMEAS,
} from "@/lib/site";

/**
 * Dados estruturados (JSON-LD): Course + FAQPage + Organization.
 * Não invente Review/AggregateRating — só inclua se houver dados reais.
 */
export function JsonLd() {
  const logoUrl = new URL(ORG_LOGO, SITE_URL).toString();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    logo: logoUrl,
    ...(ORG_SAMEAS.length ? { sameAs: ORG_SAMEAS } : {}),
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Formação em Nutrição Holística®",
    description: SITE_DESCRIPTION,
    provider: {
      "@type": "Organization",
      name: `${ORG_NAME} / Rodrigo Mendanha`,
      sameAs: SITE_URL,
    },
    inLanguage: "pt-BR",
    educationalCredentialAwarded: "Certificado de conclusão da Formação em Nutrição Holística®",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT120H",
      duration: "P12M",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.itens.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

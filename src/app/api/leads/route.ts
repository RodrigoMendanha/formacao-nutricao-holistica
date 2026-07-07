import { google } from "googleapis";
import { type NextRequest, NextResponse } from "next/server";

/**
 * POST /api/leads
 * Recebe o formulário "Quero outras informações", valida no servidor e
 * grava o lead numa Google Sheet (mesmo padrão do projeto imersao-syatt).
 */

export interface Lead {
  name: string;
  email: string;
  whatsapp: string;
  /** Produto/oferta escolhido (ex.: "Formação + Meta Nutri Academy (Anual)"). */
  product?: string;
}

/** Remove caracteres de controle e limita tamanho (anti-injeção/abuso). */
function clean(value: string, max = 500): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ") // tira control chars
    .trim()
    .slice(0, max);
}

function isValidLead(body: unknown): body is Lead {
  if (typeof body !== "object" || body === null) return false;
  const { name, email, whatsapp } = body as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 1 &&
    typeof whatsapp === "string" &&
    whatsapp.replace(/\D/g, "").length >= 10 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

async function getGoogleSheets() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // A chave vem do .env com \n literais — converte para quebras reais.
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      { error: "Preencha nome, um e-mail válido e um WhatsApp válido." },
      { status: 400 }
    );
  }

  const lead: Lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 160).toLowerCase(),
    whatsapp: clean(body.whatsapp, 40),
    product:
      typeof body.product === "string" ? clean(body.product, 120) : undefined,
  };

  try {
    const sheets = await getGoogleSheets();
    const now = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const sheetName =
      process.env.GOOGLE_SHEET_NAME || "Inscrição Formação Nutrição Holistica";

    // Colunas: Nome | E-mail | WhatsApp | Produto | Mensagem | Data/Hora
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${sheetName}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            lead.name,
            lead.email,
            lead.whatsapp,
            lead.product ?? "",
            now,
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { error: "Erro interno ao salvar dados." },
      { status: 500 }
    );
  }
}

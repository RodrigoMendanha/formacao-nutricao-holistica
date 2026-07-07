"use client";

import { Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { withUtms } from "@/lib/utm";

/**
 * CheckoutModal — captura o lead (nome/WhatsApp/e-mail) e só então redireciona
 * para o checkout. Mesmo comportamento do projeto imersao-syatt, adaptado ao
 * tema desta landing (dourado/escuro) e sem framer-motion (animação em CSS).
 *
 * Ativação: controlada pela flag CHECKOUT_MODAL_ENABLED em src/lib/site.ts.
 */

export interface CheckoutTarget {
  /** URL do checkout para onde redirecionar após capturar o lead. */
  href: string;
  /** Rótulo do produto/oferta (ex.: "Formação Nutrição Holística"). */
  ticket: string;
}

interface CheckoutModalProps {
  /** Quando definido, o modal abre para este checkout. */
  target: CheckoutTarget | null;
  onClose: () => void;
}

const initialForm = { name: "", whatsapp: "" };

/** Máscara de telefone brasileiro: (00) 0000-0000 ou (00) 00000-0000. */
function maskWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type FieldErrors = Partial<Record<keyof typeof initialForm, string>>;

function validate(form: typeof initialForm): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Informe seu nome.";
  const phoneDigits = form.whatsapp.replace(/\D/g, "");
  if (phoneDigits.length < 10) errors.whatsapp = "Informe um WhatsApp válido com DDD.";
  return errors;
}

export function CheckoutModal({ target, onClose }: CheckoutModalProps) {
  const [form, setForm] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const open = target !== null;

  // Reseta o estado sempre que um novo checkout é aberto.
  useEffect(() => {
    if (open) {
      setForm(initialForm);
      setFieldErrors({});
      setError(null);
      setSubmitting(false);
    }
  }, [open]);

  // Fecha com Esc e bloqueia o scroll do body enquanto aberto.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setFieldErrors((errs) => (errs[field] ? { ...errs, [field]: undefined } : errs));
  }

  function validateField(field: keyof typeof initialForm) {
    setFieldErrors((errs) => ({ ...errs, [field]: validate(form)[field] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!target || submitting) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // `product` diferencia qual oferta o lead escolheu (Formação x Combo).
        body: JSON.stringify({ ...form, product: target.ticket }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Não foi possível enviar seus dados.");
      }

      // Lead registrado: redireciona para o checkout (com os UTMs da sessão).
      window.location.href = withUtms(target.href);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo deu errado. Tente novamente.");
      setSubmitting(false);
    }
  }

  if (!open || typeof document === "undefined") return null;

  // Portal para o <body>: evita que os contextos de empilhamento dos cards de
  // oferta (z-0 / z-10 sobrepostos) deixem o modal atrás do card da direita.
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="checkout-modal-title"
    >
      {/* Overlay */}
      <div
        className="modal-overlay absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => !submitting && onClose()}
      />

      {/* Painel */}
      <div className="modal-panel relative z-10 w-full max-w-md rounded-3xl bg-paper p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          disabled={submitting}
          className="absolute right-5 top-5 text-ink-soft transition-colors hover:text-ink disabled:opacity-50"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mb-6 text-center">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gold">
            {target?.ticket}
          </span>
          <h3
            id="checkout-modal-title"
            className="font-display text-2xl font-bold tracking-tight text-ink"
          >
            Falta pouco!
          </h3>
          <p className="mt-2 text-sm text-ink-soft">
            Preencha seus dados para continuar para o checkout.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <Field
            id="co-name"
            label="Nome completo"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            value={form.name}
            error={fieldErrors.name}
            onChange={(v) => updateField("name", v)}
            onBlur={() => validateField("name")}
          />
          <Field
            id="co-whatsapp"
            label="WhatsApp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            value={form.whatsapp}
            error={fieldErrors.whatsapp}
            onChange={(v) => updateField("whatsapp", maskWhatsapp(v))}
            onBlur={() => validateField("whatsapp")}
          />

          {error && (
            <p className="text-sm font-medium text-danger" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-btn px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold-light hover:text-dark disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Redirecionando...
              </>
            ) : (
              "Ir para o checkout"
            )}
          </button>

          <p className="text-center text-xs text-ink-soft">
            Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </div>
    </div>,
    document.body
  );
}

interface FieldProps {
  id: string;
  label: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  error?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
  onChange: (value: string) => void;
  onBlur?: () => void;
}

function Field({
  id,
  label,
  type,
  autoComplete,
  placeholder,
  value,
  error,
  inputMode,
  onChange,
  onBlur,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-ink transition-colors placeholder:text-ink-soft/60 focus:outline-none ${
          error
            ? "border-danger focus:border-danger"
            : "border-line focus:border-gold"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

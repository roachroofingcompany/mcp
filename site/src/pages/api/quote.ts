import type { APIRoute } from "astro";
import { z } from "zod";
import { company } from "~/data/company";

export const prerender = false;

const QuoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{7,}$/, "Please enter a valid phone number."),
  service: z.enum(company.services as unknown as [string, ...string[]], {
    errorMap: () => ({ message: "Pick a service." }),
  }),
  cityState: z.string().trim().min(2, "Where is the project?"),
  message: z.string().trim().max(2000).optional().default(""),
});

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const raw = Object.fromEntries(form.entries()) as Record<string, string>;
  const parsed = QuoteSchema.safeParse(raw);

  if (!parsed.success) {
    // Re-render index with field errors by redirecting back with query flag.
    // (Form-state preservation is out of scope for this scaffold; see README.)
    console.warn("[quote] validation failed", parsed.error.flatten().fieldErrors);
    return new Response(
      JSON.stringify({ ok: false, errors: parsed.error.flatten().fieldErrors }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  // TODO: wire up an email/CRM provider (Resend, SendGrid, Formspree, Zapier webhook).
  // For now, log so the submission is visible during local development.
  console.log("[quote] new submission", {
    at: new Date().toISOString(),
    ...parsed.data,
  });

  return redirect("/thanks", 303);
};

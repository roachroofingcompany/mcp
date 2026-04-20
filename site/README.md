# Roach Roofing Company — Website

Astro + Tailwind scaffold for [roachroofingcompany.com](https://roachroofingcompany.com). Initial focus: contact + quote-request form.

## Stack

- Astro 4 (hybrid output, Node adapter)
- Tailwind CSS
- Zod for form validation
- TypeScript (strict)

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run check        # type + astro diagnostics
npm run build
npm run preview
```

## Layout

```
src/
├── data/company.ts         single source of truth for company info
├── layouts/BaseLayout.astro
├── components/             Header, Hero, QuoteForm, ContactInfo, SocialLinks, Footer
├── pages/
│   ├── index.astro         hero + quote form + contact info
│   ├── thanks.astro        post-submit landing
│   └── api/quote.ts        POST endpoint, zod-validated (email delivery TODO)
└── styles/global.css
```

## Quote submissions

`POST /api/quote` validates with zod and logs to the server console. Wiring up a provider (Resend, SendGrid, Formspree webhook) is tracked as a TODO in `src/pages/api/quote.ts`.

## Social

- YouTube — https://youtube.com/@roachroofingcompany
- Facebook — https://facebook.com/brconstruction715

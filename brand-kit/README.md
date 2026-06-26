# Novion Brand Kit

Everything you need to make a new product **look and feel like a Novion product** within an hour.

A visitor should be able to land on `topapplicant.novion.one`, `pricing.novion.one`, or any future `*.novion.one` and recognize the family within two seconds - same mark, same teal pulse, same paper background, same wordmark rhythm.

---

## 1. The mark

The Novion symbol is a stylized **"n" with a teal dot**. It appears in three forms:

| Use                          | Asset                       |
|------------------------------|-----------------------------|
| Browser tab / app icon       | [`assets/favicon.svg`](./assets/favicon.svg) - square, black bg, white "n", teal dot. |
| Marketing / full wordmark    | [`assets/logo.svg`](./assets/logo.svg) - full "noon" wordmark on white. |
| In-app nav, headers          | [`code/BrandHeader.tsx`](./code/BrandHeader.tsx) - inline React component, same paths as the favicon, color-controlled via CSS vars. |

**Rules**
- The teal dot is the soul of the mark. Never recolor it. Never remove it.
- Minimum size: 24×24px. Below that, only the favicon variant.
- Clear space around the mark: at least 25% of its width on all sides.
- Never stretch, rotate, recolor the "n", outline it, or add effects.

---

## 2. The palette

Two colors do all the work: **near-black** and **signature teal**. Everything else is paper or a tint.

| Token        | Hex       | Role                                                  |
|--------------|-----------|-------------------------------------------------------|
| `--primary`  | `#111111` | Wordmark, headings, primary buttons, body text         |
| `--accent`   | `#14B8A6` | The dot. Status indicators. One CTA per screen, max.   |
| `--paper`    | `#FAFAF7` | Every page background. Never pure white.               |

Full scales (50 → 900) live in [`code/tokens.css`](./code/tokens.css).

**Why this works**
- Charcoal + teal is **distinctive**. Every SaaS uses blue or teal-on-white - Novion uses *paper + charcoal + a single teal accent*. That's the gestalt.
- Two colors = strong recognition. Adding a third dilutes the brand.

**Don't**
- Don't use teal as a large background fill. It loses its meaning the moment it stops being "the dot."
- Don't introduce a secondary brand color per product. If a product needs a status color (success/error), use semantic colors *outside* the brand palette (green-600, red-600 from Tailwind).
- Don't use pure black `#000` or pure white `#fff`. We use `#111` and `#FAFAF7`.

---

## 3. Typography

- **Display + UI**: [Geist Sans](https://vercel.com/font) (variable weight 100–900). Use `font-black` (900) for the wordmark, `font-bold` (700) for headings, `font-medium` (500) for UI, `font-normal` (400) for body.
- **Mono**: Geist Mono for code, hashes, tokens, technical readouts.
- **Tracking**: headings get `tracking-tight`. Small uppercase labels get `tracking-[0.18em]` (this is the "by Novion" rhythm - keep it identical across products).

The "TopApplicant by Novion" lockup pattern:

```
[mark]  Top·Applicant         ← font-black, tracking-tight, primary + gray-900
        BY NOVION             ← 9px, font-medium, tracking-[0.18em], gray-400
```

Every product in the family uses **this exact same lockup**, just swapping the product name. That's the cheapest, strongest unifier you have.

---

## 4. Voice & copy

Novion products talk like this:
- **Direct**. "Check my resume," not "Initiate a complimentary review."
- **Honest about limits**. "Free · No account · Your file stays private" beats "World's #1 AI."
- **Quietly confident**. No exclamation marks. No "🚀". No "supercharge."
- **Lowercase tags**. UI pills are uppercase + tracked (`MOST POPULAR`); body and CTAs are sentence case.

Trust phrasing that's worked on TopApplicant and is worth re-using:
> *"No account needed · Results in 60 seconds · Your file stays private"*

---

## 5. Layout primitives

Every Novion product should feel like it was built from the same kit:

- **Paper background** (`bg-paper`) for every page, every state.
- **Sticky brand header** at top, backdrop-blurred over paper.
- **Rounded-2xl cards** with `border border-primary-100` and `shadow-sm`. No heavy shadows.
- **Hairline borders** (`border-primary-100`) not gray-200/300. Quieter, more premium.
- **Max-width container** `max-w-5xl mx-auto px-6` for landing, `max-w-3xl` for forms, `max-w-2xl` for focused reading.
- **Sentence-case "Most popular" / "Free" pills** in tracked uppercase, `rounded-full`, accent-tinted backgrounds.

---

## 6. The 5-minute setup for a new Novion product

1. Copy [`assets/favicon.svg`](./assets/favicon.svg) and [`assets/logo.svg`](./assets/logo.svg) into your project's `public/`.
2. Copy [`code/tokens.css`](./code/tokens.css) into your global stylesheet (or `@import` it). All CSS vars are now live.
3. Copy [`code/tailwind.colors.ts`](./code/tailwind.colors.ts) and spread `novionColors` into `tailwind.config.ts → theme.extend.colors`.
4. Copy [`code/BrandHeader.tsx`](./code/BrandHeader.tsx) into `src/components/`. Drop `<BrandHeader withAIPill />` at the top of every page.
5. Wire the favicon + theme color in your framework's metadata (Next.js example):

   ```tsx
   export const metadata = {
     icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
     openGraph: { images: ["/logo.svg"] },
   };
   export const viewport = { themeColor: "#111111" };
   ```

That's it. The product now reads as a Novion product.

---

## 7. Product-name conventions

- Product names are **one word, sentence-cased compound** (`TopApplicant`, not `Top Applicant` or `topapplicant`).
- Suffix is always `by Novion` (small caps, tracked).
- Subdomain is always `<product>.novion.one`, lowercased (`topapplicant.novion.one`).
- The wordmark colors the first half of the compound `text-primary`, the second half `text-gray-900`. Pattern: **Top**Applicant, **My**Pricing, **Fast**Mailer.

---

## 8. When to break the rules

You shouldn't. If a product genuinely needs to look different (a dark-mode-only dev tool, say), inherit the *mark, paper, teal, typography, voice* - and only diverge on layout/density. The five anchors above are what make a product Novion.

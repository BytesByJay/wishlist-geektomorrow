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

Novion uses **three** typefaces, all free, all on Google Fonts:

- **Display + UI**: [Geist Sans](https://vercel.com/font) (variable weight 100–900). Use `font-black` (900) for the wordmark and large display, `font-bold` (700) for section titles, `font-medium` (500) for UI, `font-normal` (400) for body.
- **Mono**: **Geist Mono** for code, hashes, numerals in step badges, technical readouts, the `01 / 02 / 03` corner labels on cards.
- **Accent display**: **Instrument Serif** *italic* — used ONLY for one accent word inside a headline, no more than one per screen. This is what gives a Novion headline its distinctive bold-sans + italic-serif rhythm:

  > Your files. *Your rules.*
  > Three steps. *That's it.*
  > The math *doesn't* lie.

  Pair it with `text-accent-700` for the color. Never set Instrument Serif at body size — it's a display face only.

- **Tracking**: headings get `tracking-tight` (-0.03em to -0.04em on the largest sizes). Small uppercase labels get `tracking-[0.18em]` (this is the "by Novion" rhythm — keep it identical across products).

The "TopApplicant by Novion" lockup pattern:

```
[mark]  Top·Applicant         ← font-black, tracking-tight, primary + primary-700
        BY NOVION             ← 9.5px, font-medium, tracking-[0.18em], primary-300
```

Every product in the family uses **this exact same lockup**, just swapping the product name. That's the cheapest, strongest unifier you have.

Load all three together:

```html
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700;900&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
```

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
- **Paper grain overlay** — add the `.novion-paper-grain` class to `<body>` (defined in `tokens.css`). It's a fixed SVG fractal-noise layer at ~35% opacity, multiply blend. Invisible until you remove it and the page suddenly looks flat.
- **Sticky brand header** at top, backdrop-blurred over paper (`bg-paper/72` + `backdrop-blur-md`).
- **Rounded-2xl / 3xl cards** with `border border-primary-100` and a soft layered shadow (`0 1px 2px rgb(0 0 0 / .04), 0 18px 48px -28px rgb(var(--primary) / .14)`). No heavy shadows, no solid drops.
- **Hairline borders** (`border-primary-100`) not gray-200/300. Quieter, more premium.
- **Gradient icon tiles** — small icons sit in a 44–48px rounded tile with a top-light gradient and a hairline border. Two variants:
  - Neutral: `linear-gradient(180deg, #fff, rgb(var(--primary-50)))` + `border-primary-100` + `text-primary-700`.
  - Accent: `linear-gradient(180deg, rgb(var(--accent-50)), #fff)` + `border-accent-200` + `text-accent-700`. Use this for "the good column" — the Novion-side icons.
- **Max-width container** `max-w-5xl mx-auto px-6` for landing, `max-w-3xl` for forms, `max-w-2xl` for focused reading.
- **Sentence-case "Most popular" / "Free" pills** in tracked uppercase, `rounded-full`, accent-tinted backgrounds.
- **Mono numerals** for ordinals — step badges, card corner labels (`01 / 02 / 03`), stat units. Geist Mono, `font-medium`, `tracking-[0.04em]`.

### The radiating dot

Wherever you'd put a status indicator, use the **radiating dot** pattern — a 6px teal dot with a soft teal ring scaling out and fading every 2s. It's the in-motion sibling of the logo's teal dot.

```html
<span class="novion-dot"></span>  <!-- ready, defined in tokens.css -->
```

Use it on: "In development" pills, "Online" badges, the eyebrow above the hero headline, sync-status rows in dashboards. Never more than 2–3 visible at once.

### The dot-grid background

For the hero (and *only* the hero, or one other large empty surface), use `.novion-dot-grid` from `tokens.css`. It's a 22×22 dot pattern, radial-masked so the edges never tile. Pair it with one or two soft `radial-gradient` glows (teal at top-right, charcoal at bottom-left) for depth without color noise.

---

## 5b. Motion

Novion motion is **soft, not bouncy**. Two easings cover everything (both shipped in `tokens.css` as CSS vars):

- `--ease-soft` `cubic-bezier(.2,.65,.25,1)` — default for hovers, reveals, opacity.
- `--ease-out`  `cubic-bezier(.22,.68,0,1.02)` — slightly more snap; for transforms (card lift, device tilt).

Durations: **180–250ms** for hover interactions, **600–800ms** for scroll-reveal entries. Anything faster reads as twitchy; anything slower reads as sluggish.

Stock keyframes living in `tokens.css`:

- `brand-pulse` — the logo dot.
- `ring-out` — the radiating status dot.
- `shimmer` — diagonal highlight sweep. Use on primary CTAs and progress bars. Subtle (`rgb(255 255 255 / .12)` over the button surface).
- `float-y` — 8px Y-axis float, 6–7s loop. Use on the hero device mockup and 1–2 hero "chips." Never on text.

**Magnetic primary CTA** — primary buttons get a gentle cursor-follow on hover (translate up to ~12% of pointer offset). The JS is six lines; the effect is what separates "fine" from "polished." Pattern lives in [`code/BrandHeader.tsx`](./code/BrandHeader.tsx) usage notes.

---

## 6. The 5-minute setup for a new Novion product

1. Copy [`assets/favicon.svg`](./assets/favicon.svg) and [`assets/logo.svg`](./assets/logo.svg) into your project's `public/`.
2. Copy [`code/tokens.css`](./code/tokens.css) into your global stylesheet (or `@import` it). All CSS vars, the radiating dot, paper grain, and dot grid are now live.
3. Copy [`code/tailwind.colors.ts`](./code/tailwind.colors.ts) and spread `novionColors` into `tailwind.config.ts → theme.extend.colors`.
4. Copy [`code/BrandHeader.tsx`](./code/BrandHeader.tsx) into `src/components/`. Drop `<BrandHeader withAIPill />` at the top of every page.
5. Add `class="novion-paper-grain"` to your `<body>` and the three-font link tag from §3 to your `<head>`.
6. Wire the favicon + theme color in your framework's metadata (Next.js example):

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

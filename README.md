# Versatile Tech Solutions

VTS's public website, built with Next.js App Router and Tailwind CSS.

## Local development

```sh
npm install
npm run dev
```

Open the local address printed by Next.js. Run `npm run build` to verify the production build.

## Content

Shared company details and the product catalogue live in `lib/site-content.ts`.
The contact address is `versatiletechsolutions1@gmail.com`.

The catalogue starts empty. The homepage shows the development message until
real products are entered; it never displays sample products or an empty grid.
Each product entry includes its name, identity (initials and optional logo),
customer problem, primary benefit, explanation, availability, and CTA link.
Use availability and CTA wording that accurately reflect the product's status.

The header has direct Products, Solutions, and About links, with Contact on the
right. Products and Solutions lead to Coming soon pages (`/products` and
`/solutions`). The same links stay visible on mobile without dropdowns. The hero
CTA points to the Products Coming soon page.

The contact page includes a name, email, and message form. Its Send message
button intentionally has no action yet, and form submission is prevented.

The blog and former placeholder pages have been removed. Exact redirects in
`next.config.ts` send the former product, learning, and solution URLs to the
appropriate Coming soon page. Remove a matching redirect before reusing one of
those URLs for a real product or solution.

Page titles and descriptions use the full company name. The footer's copyright
year follows the current year at render time.

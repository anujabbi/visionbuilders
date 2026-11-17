# visionbuilders.org

The Vision Builders website: a static site built with [Astro](https://astro.build), hosted on Cloudflare.

## Pages
| Page | File |
|---|---|
| Home | `src/pages/index.astro` |
| Kutumb | `src/pages/kutumb.astro` |
| NIPUN | `src/pages/nipun.astro` |
| Annual newsletter | `src/pages/newsletter.astro` |
| Donate | `src/pages/donate.astro` |

Shared facts (address, EIN, emails, PayPal link, Facebook pages) live in **`src/data/site.ts`**. Change them there and every page updates.
Colors and type live in `src/styles/global.css`.

## Run it locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (one-time setup)
The site is served by Cloudflare Workers as static files (config in `wrangler.jsonc`).
1. In the Cloudflare dashboard: Workers & Pages > Create > Import a repository, and pick this repo.
2. Build command: `npm run build`. Deploy command: `npx wrangler deploy`. Leave the rest as is.
3. After the first deploy you get a `visionbuilders.<account>.workers.dev` link. Check it on a phone.
4. Then add `visionbuilders.org` and `www.visionbuilders.org` under the Worker's Settings > Domains & Routes. Cloudflare walks you through the DNS change.
5. Every push to `main` now redeploys automatically.

`public/_redirects` sends old WordPress addresses (like `/donate-now/` and `/kutumb-project/`) to the new pages.

## Yearly update: new newsletter
1. Put the PDF in `public/newsletters/`.
2. Update the numbers in `src/pages/newsletter.astro`, `index.astro`, `kutumb.astro` and `nipun.astro`.
3. Add last year's PDF to the `archive` list in `newsletter.astro`.

## To do
- Replace `public/images/logo.jpg` with the original high-resolution logo.
- Add earlier newsletters to the archive.

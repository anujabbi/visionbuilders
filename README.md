# visionbuilders.org

The Vision Builders website: a static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.

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
1. Push this folder to a GitHub repository.
2. In Cloudflare: Workers & Pages > Create > Pages > Connect to Git, and pick the repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. After the first deploy, add the custom domain `visionbuilders.org` (and `www`) under the project's Custom domains. Cloudflare walks you through the DNS change.
5. Every push to `main` now redeploys automatically, with a preview link for every branch.

`public/_redirects` sends old WordPress addresses (like `/donate-now/` and `/kutumb-project/`) to the new pages.

## Yearly update: new newsletter
1. Put the PDF in `public/newsletters/`.
2. Update the numbers in `src/pages/newsletter.astro`, `index.astro`, `kutumb.astro` and `nipun.astro`.
3. Add last year's PDF to the `archive` list in `newsletter.astro`.

## To do
- Replace `public/images/logo.jpg` with the original high-resolution logo.
- Add earlier newsletters to the archive.

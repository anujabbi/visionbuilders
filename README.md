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

Editable content lives in **`src/content/*.json`** (see below); `src/data/site.ts` turns it into what the pages use.
Colors and type live in `src/styles/global.css`.

## Editing content (for organizers)
Smita and other organizers edit the site in the browser with [Pages CMS](https://app.pagescms.org), no code needed.
What they can edit is defined in `.pages.yml`; the content itself lives in `src/content/*.json`:

| Editor section | File |
|---|---|
| Home page (headline, why give, impact numbers) | `src/content/home.json` |
| Kutumb page (numbers, graduates) | `src/content/kutumb.json` |
| NIPUN page (numbers, pillars, stories) | `src/content/nipun.json` |
| Annual newsletters (page images per year) | `src/content/newsletters.json` |
| Fundraisers (text and photos) | `src/content/fundraisers.json` |
| Board and volunteers | `src/content/board.json` |
| Contact and donation details | `src/content/settings.json` |

Every save becomes a commit (with the editor's name) and the site redeploys in about a minute. To undo a change, revert that commit on GitHub.

**Adding a newsletter:** turn each page of the PDF into an image (for example, export pages as JPG at about 1100 px wide), then in Annual newsletters add a year and upload the pages in order.

**One-time setup:** sign in at app.pagescms.org with GitHub, install the Pages CMS GitHub App on this repository only, open the repo, then invite editors by email under Collaborators.

## Run it locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (one-time setup)
The site runs on **Cloudflare Pages** at `www.visionbuilders.org`. DNS and email stay at Bluehost.
1. Cloudflare dashboard: Workers & Pages > Create > Pages > Connect to Git, pick this repo.
   Build command `npm run build`, output directory `dist`.
2. In the Pages project: Custom domains > Set up a domain > `www.visionbuilders.org` (do this before step 3).
3. At Bluehost DNS: make `www` a CNAME to `visionbuilders.pages.dev` (remove any old `www` A record). Leave MX/TXT/mail records alone.
4. At Bluehost: redirect the bare domain `visionbuilders.org` to `https://www.visionbuilders.org`
   (Bluehost Redirects tool, or `bluehost/.htaccess` from this repo placed in `public_html`).
5. Every push to `main` now redeploys automatically, with a preview link for every branch.

`public/_redirects` sends old WordPress addresses (like `/donate-now/` and `/kutumb-project/`) to the new pages.

## Yearly update: new newsletter
1. Put the PDF in `public/newsletters/`.
2. Update the numbers in `src/pages/newsletter.astro`, `index.astro`, `kutumb.astro` and `nipun.astro`.
3. Add last year's PDF to the `archive` list in `newsletter.astro`.

## To do
- Replace `public/images/logo.jpg` with the original high-resolution logo.
- Add earlier newsletters to the archive.

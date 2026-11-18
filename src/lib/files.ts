// Helpers that list files in /public at build time, so adding newsletter pages
// or a fundraiser photo is just a matter of dropping the file in the right folder.
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC = path.resolve('public');

/** Page images of each printed newsletter, from public/newsletters/pages/<year>-<NN>.jpg.
 *  Returns years newest first, each with its pages in order. */
export function newsletterPages() {
  const dir = path.join(PUBLIC, 'newsletters', 'pages');
  if (!fs.existsSync(dir)) return [];
  const byYear = new Map<string, string[]>();
  for (const f of fs.readdirSync(dir).filter((f) => /^\d{4}-\d+\.(jpe?g|png|webp)$/i.test(f)).sort()) {
    const year = f.slice(0, 4);
    byYear.set(year, [...(byYear.get(year) || []), `/newsletters/pages/${f}`]);
  }
  return [...byYear.entries()].sort((a, b) => b[0].localeCompare(a[0])).map(([year, pages]) => ({ year, pages }));
}

/** Photos in public/images/fundraisers/<folder>, sorted by file name. */
export function photos(folder: string) {
  const dir = path.join(PUBLIC, 'images', 'fundraisers', folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/images/fundraisers/${folder}/${f}`);
}

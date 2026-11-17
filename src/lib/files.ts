// Helpers that list files in /public at build time, so adding a newsletter PDF
// or a fundraiser photo is just a matter of dropping the file in the right folder.
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC = path.resolve('public');

/** Newsletter PDFs in public/newsletters, newest first. The year is read from the file name. */
export function newsletters() {
  const dir = path.join(PUBLIC, 'newsletters');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .map((f) => ({ year: (f.match(/20\d\d/) || ['Undated'])[0], href: `/newsletters/${f}` }))
    .sort((a, b) => b.year.localeCompare(a.year));
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

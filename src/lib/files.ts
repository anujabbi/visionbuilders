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

/** Pixel size of a JPEG or PNG in /public, read from the file header at build time,
 *  so <img> tags can carry width and height and the page doesn't jump while photos load. */
export function imageSize(publicPath: string): { width?: number; height?: number } {
  try {
    const buf = fs.readFileSync(path.join(PUBLIC, publicPath));
    if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  } catch {}
  return {};
}

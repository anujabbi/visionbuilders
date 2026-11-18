// Build-time helpers for files in /public.
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC = path.resolve('public');

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

#!/usr/bin/env node
/**
 * Build 1200x630 Open Graph cards from a real photo (home) and type (donate).
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "/Users/hermandavis/grok-transfer/jrbees-v2/research/photos/08-i5fa4d54.jpg";

const homeSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16120F" stop-opacity="0.25"/>
      <stop offset="0.45" stop-color="#16120F" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#16120F" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#scrim)"/>
  <text x="64" y="470" font-family="Impact, 'Arial Narrow', sans-serif" font-size="28" font-weight="700" fill="#FFE9A8" letter-spacing="6">PORT ARTHUR</text>
  <text x="64" y="548" font-family="Impact, 'Arial Narrow', sans-serif" font-size="72" font-weight="800" fill="#F4EFE4">JR BEES</text>
  <text x="64" y="590" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#E0B03A">Youth football and dance since 1985</text>
</svg>
`);

const donateSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#16120F"/>
  <text x="64" y="210" font-family="Impact, 'Arial Narrow', sans-serif" font-size="28" font-weight="700" fill="#FFE9A8" letter-spacing="6">PORT ARTHUR JR BEES</text>
  <text x="64" y="340" font-family="Impact, 'Arial Narrow', sans-serif" font-size="96" font-weight="800" fill="#E0B03A">30x30</text>
  <text x="64" y="410" font-family="Impact, 'Arial Narrow', sans-serif" font-size="36" font-weight="700" fill="#F4EFE4">BUILDING FUND</text>
  <text x="64" y="520" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#F4EFE4">Give a dollar. Build a dream.</text>
</svg>
`);

const photo = sharp(SRC).rotate().resize(1200, 630, { fit: "cover", position: "centre" });
await photo
  .composite([{ input: homeSvg, top: 0, left: 0 }])
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

await sharp(donateSvg)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og-donate.jpg"));

console.log("wrote public/og.jpg and public/og-donate.jpg");

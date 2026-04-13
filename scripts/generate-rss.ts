/**
 * RSS Feed Generator — run at build time via `vite-plugin-rss` or manually.
 * Outputs public/rss.xml
 */
import { sampleArticles } from "../src/data/sampleNews";
import * as fs from "fs";
import * as path from "path";

const SITE_URL = "https://indianewsai.com";
const FEED_TITLE = "IndiaNewsAi — AI-Powered News Intelligence";
const FEED_DESC =
  "Real-time AI-powered news covering Delhi NCR, religion, politics, technology, entertainment, and world affairs.";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const sorted = [...sampleArticles].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

const items = sorted
  .slice(0, 50)
  .map(
    (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${SITE_URL}/article/${a.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/article/${a.slug}</guid>
      <description>${escapeXml(a.description)}</description>
      <category>${escapeXml(a.category)}</category>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <source url="${SITE_URL}">${escapeXml(FEED_TITLE)}</source>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(FEED_DESC)}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

const outPath = path.resolve(__dirname, "../public/rss.xml");
fs.writeFileSync(outPath, rss, "utf-8");
console.log(`✅ RSS feed generated: ${outPath} (${sorted.length} articles)`);

// Fetches a URL and extracts OG/Twitter/meta tags for social sharing diagnostics.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface MetaResult {
  url: string;
  finalUrl: string;
  status: number;
  fetchedAt: string;
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  themeColor?: string;
  og: Record<string, string>;
  twitter: Record<string, string>;
  warnings: string[];
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function getAttr(tag: string, name: string): string | undefined {
  const re = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const m = tag.match(re);
  if (!m) return undefined;
  return decodeEntities(m[2] ?? m[3] ?? m[4] ?? "");
}

function parseMeta(html: string, url: string, finalUrl: string, status: number): MetaResult {
  const head = html.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? html;
  const result: MetaResult = {
    url, finalUrl, status, fetchedAt: new Date().toISOString(),
    og: {}, twitter: {}, warnings: [],
  };

  result.title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();

  const metaTags = head.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of metaTags) {
    const property = getAttr(tag, "property")?.toLowerCase();
    const nameAttr = getAttr(tag, "name")?.toLowerCase();
    const content = getAttr(tag, "content");
    if (!content) continue;
    if (property?.startsWith("og:")) result.og[property.slice(3)] = content;
    else if (nameAttr?.startsWith("twitter:")) result.twitter[nameAttr.slice(8)] = content;
    else if (nameAttr === "description") result.description = content;
    else if (nameAttr === "robots") result.robots = content;
    else if (nameAttr === "theme-color") result.themeColor = content;
  }

  const linkTags = head.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of linkTags) {
    if (getAttr(tag, "rel")?.toLowerCase() === "canonical") {
      result.canonical = getAttr(tag, "href");
    }
  }

  if (!result.og.title) result.warnings.push("Missing og:title");
  if (!result.og.description) result.warnings.push("Missing og:description");
  if (!result.og.image) result.warnings.push("Missing og:image (required for Instagram/Facebook previews)");
  if (!result.og.url) result.warnings.push("Missing og:url");
  if (!result.twitter.card) result.warnings.push("Missing twitter:card");
  if (!result.twitter.image && !result.og.image) result.warnings.push("Missing twitter:image (X preview will be blank)");
  if (result.og.image && !/^https:\/\//i.test(result.og.image)) result.warnings.push("og:image should be an absolute https:// URL");
  if (!result.canonical) result.warnings.push("Missing canonical link");

  return result;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return new Response(JSON.stringify({ error: "url required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    let parsed: URL;
    try { parsed = new URL(url); } catch {
      return new Response(JSON.stringify({ error: "Invalid URL" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^https?:$/.test(parsed.protocol)) {
      return new Response(JSON.stringify({ error: "Only http/https allowed" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch(parsed.toString(), {
      headers: { "User-Agent": "facebookexternalhit/1.1 (IndiaNewsAI-OG-Diagnostics)" },
      redirect: "follow",
    });
    const html = await res.text();
    const result = parseMeta(html, url, res.url, res.status);
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

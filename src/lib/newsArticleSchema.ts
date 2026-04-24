/**
 * NewsArticle JSON-LD schema generator.
 *
 * Strictly populates ONLY the approved fields you pass in:
 *   headline, image, datePublished, author, publisher, mainEntityOfPage.
 *
 * No defaults are inferred and no extra fields are added — this keeps the
 * output trustworthy for Google News / Discover validation.
 */

export interface ApprovedAuthor {
  /** Full name of the human author or organization byline. */
  name: string;
  /** Optional canonical URL for the author profile. */
  url?: string;
  /** "Person" (default) or "Organization". */
  type?: "Person" | "Organization";
}

export interface ApprovedPublisher {
  /** Publisher / outlet name. */
  name: string;
  /** Absolute URL to the publisher logo (PNG, ≥ 60px tall recommended). */
  logoUrl: string;
  /** Optional publisher homepage. */
  url?: string;
}

export interface ApprovedNewsArticleInput {
  /** Article headline — must match the visible <h1>. */
  headline: string;
  /** Absolute URL to the lead image (https only). */
  image: string;
  /** ISO-8601 publication timestamp, e.g. "2026-04-23T14:20:00+05:30". */
  datePublished: string;
  /** Approved author metadata. */
  author: ApprovedAuthor;
  /** Approved publisher metadata. */
  publisher: ApprovedPublisher;
  /** Canonical absolute URL of the article page (used as @id of mainEntityOfPage). */
  mainEntityOfPageUrl: string;
}

export interface NewsArticleJsonLd {
  "@context": "https://schema.org";
  "@type": "NewsArticle";
  headline: string;
  image: string;
  datePublished: string;
  author: {
    "@type": "Person" | "Organization";
    name: string;
    url?: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    url?: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

const ISO_8601 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})$/;

function assertHttpsUrl(value: string, field: string): void {
  if (!/^https:\/\//i.test(value)) {
    throw new Error(`[newsArticleSchema] ${field} must be an absolute https:// URL. Received: ${value}`);
  }
}

function assertNonEmpty(value: string, field: string): void {
  if (!value || !value.trim()) {
    throw new Error(`[newsArticleSchema] ${field} is required and cannot be empty.`);
  }
}

/**
 * Build a Google-News-compliant NewsArticle JSON-LD object from approved data.
 * Throws on invalid/missing inputs so bad data never reaches the page.
 */
export function buildNewsArticleSchema(input: ApprovedNewsArticleInput): NewsArticleJsonLd {
  assertNonEmpty(input.headline, "headline");
  assertNonEmpty(input.image, "image");
  assertHttpsUrl(input.image, "image");
  assertNonEmpty(input.datePublished, "datePublished");
  if (!ISO_8601.test(input.datePublished)) {
    throw new Error(
      `[newsArticleSchema] datePublished must be ISO-8601 (e.g. 2026-04-23T14:20:00+05:30). Received: ${input.datePublished}`,
    );
  }
  assertNonEmpty(input.author.name, "author.name");
  if (input.author.url) assertHttpsUrl(input.author.url, "author.url");
  assertNonEmpty(input.publisher.name, "publisher.name");
  assertNonEmpty(input.publisher.logoUrl, "publisher.logoUrl");
  assertHttpsUrl(input.publisher.logoUrl, "publisher.logoUrl");
  if (input.publisher.url) assertHttpsUrl(input.publisher.url, "publisher.url");
  assertNonEmpty(input.mainEntityOfPageUrl, "mainEntityOfPageUrl");
  assertHttpsUrl(input.mainEntityOfPageUrl, "mainEntityOfPageUrl");

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: input.headline,
    image: input.image,
    datePublished: input.datePublished,
    author: {
      "@type": input.author.type ?? "Person",
      name: input.author.name,
      ...(input.author.url ? { url: input.author.url } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: input.publisher.name,
      ...(input.publisher.url ? { url: input.publisher.url } : {}),
      logo: {
        "@type": "ImageObject",
        url: input.publisher.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.mainEntityOfPageUrl,
    },
  };
}

/**
 * Convenience: serialize the schema for direct injection into a
 * <script type="application/ld+json"> tag.
 */
export function buildNewsArticleSchemaString(input: ApprovedNewsArticleInput): string {
  return JSON.stringify(buildNewsArticleSchema(input));
}

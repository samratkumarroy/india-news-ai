import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, Share2, Check, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { sampleArticles } from "@/data/sampleNews";
import { buildNewsArticleSchema } from "@/lib/newsArticleSchema";
import eventManagementThumbnail from "@/assets/event-management-delhi-thumbnail.webp";
import metGalaImg1 from "@/assets/met-gala-2026-1.webp";
import metGalaImg2 from "@/assets/met-gala-2026-2.webp";
import metGalaImg3 from "@/assets/met-gala-2026-3.webp";
import metGalaImg4 from "@/assets/met-gala-2026-4.webp";

const categoryBadgeColors: Record<string, string> = {
  religion: "bg-green-100 text-green-800",
  politics: "bg-orange-100 text-orange-800",
  culture: "bg-purple-100 text-purple-800",
  weather: "bg-blue-100 text-blue-800",
  breaking: "bg-orange-100 text-saffron-dark",
  health: "bg-red-100 text-red-800",
  technology: "bg-indigo-100 text-indigo-800",
  fashion: "bg-pink-100 text-pink-800",
  entertainment: "bg-amber-100 text-amber-800",
  world: "bg-red-100 text-red-800",
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const article = sampleArticles.find((a) => a.url === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background" role="alert">
        <h1 className="font-display text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-news-muted mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link
          to="/"
          className="bg-saffron text-primary-foreground px-6 py-2 rounded-sm font-bold tracking-widest uppercase text-sm hover:bg-saffron-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.description, url: shareUrl });
      } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const pubDate = new Date(article.publishedAt);
  const formattedDate = pubDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = pubDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const isEventArticle = slug === "how-to-choose-event-management-company-delhi";
  const isMetGalaArticle = slug === "met-gala-2026-fashion-is-art-theme-co-chairs-may-4" || slug === "met-gala-2026-cochairs-beyonce-kidman-williams-wintour";

  // Curated social-share image overrides (absolute URLs for OG/Twitter crawlers)
  const SITE_ORIGIN = "https://indianewsai.com";
  const BRAND_NAME = "India News AI";
  const socialImageOverrides: Record<string, string> = {
    "met-gala-2026-deepika-padukone-ranveer-singh-guest-list-leak":
      `${SITE_ORIGIN}/og/met-gala-2026-deepika-ranveer.jpg`,
    "avatar-3-teaser-cinemacon-2026-james-cameron-december-release":
      `${SITE_ORIGIN}/og/avatar-3-teaser-2026.jpg`,
  };
  const resolvedSocialImage =
    (slug && socialImageOverrides[slug]) ||
    (article.image
      ? article.image.startsWith("http")
        ? article.image
        : `${SITE_ORIGIN}${article.image}`
      : `${SITE_ORIGIN}/favicon-512.png`);

  const webStoryUrlMap: Record<string, string> = {
    "kangana-ranaut-dhurandhar-2-madhavan-terrific-ajit-doval-film": "/web-stories/kangana-dhurandhar2-web-story.html",
    "brock-lesnar-wwe-retirement-wrestlemania-42": "/web-stories/brock-lesnar-wwe-retirement-wrestlemania-42.html",
  };
  const webStoryUrl = slug ? webStoryUrlMap[slug] ?? null : null;

  const canonicalArticleUrl = `${SITE_ORIGIN}/article/${article.url}`;
  const publisherLogoUrl = `${SITE_ORIGIN}/favicon-512.png`;
  const articleJsonLd = buildNewsArticleSchema({
    headline: article.title,
    image: resolvedSocialImage,
    datePublished: article.publishedAt,
    author: { type: "Organization", name: BRAND_NAME, url: SITE_ORIGIN },
    publisher: { name: BRAND_NAME, url: SITE_ORIGIN, logoUrl: publisherLogoUrl },
    mainEntityOfPageUrl: canonicalArticleUrl,
  });

  const webStoryJsonLd = webStoryUrl
    ? {
        "@context": "https://schema.org",
        "@type": "WebStory",
        url: `https://indianewsai.com${webStoryUrl}`,
        name: article.title,
        headline: article.title,
        description: article.description,
        image: resolvedSocialImage,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        inLanguage: "en",
        author: { "@type": "Organization", name: BRAND_NAME, url: SITE_ORIGIN },
        publisher: {
          "@type": "NewsMediaOrganization",
          name: BRAND_NAME,
          url: SITE_ORIGIN,
          logo: { "@type": "ImageObject", url: publisherLogoUrl },
        },
        isPartOf: { "@type": "WebPage", "@id": canonicalArticleUrl },
      }
    : null;

  const faqJsonLd = isEventArticle
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best event management company in Delhi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Companies like The Kabir Company in Delhi, with 20+ years of experience specialising in corporate events, celebrity bookings, and luxury weddings, are considered among the best in the industry.",
            },
          },
          {
            "@type": "Question",
            name: "What should you look for when choosing an event management company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Experience, portfolio, artist network, client reviews, budget transparency, and local expertise — these 7 factors are the most important.",
            },
          },
          {
            "@type": "Question",
            name: "How much does celebrity booking cost for a corporate event?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In India, celebrity bookings for corporate events can range from ₹5 lakh to ₹5 crore — depending on the celebrity's popularity and the scale of the event.",
            },
          },
          {
            "@type": "Question",
            name: "How big is the event industry in Delhi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In 2025, Delhi NCR's event industry was valued at over ₹3,200 crore and is growing at 18% per year.",
            },
          },
        ],
      }
    : null;

  // Met Gala special layout
  if (isMetGalaArticle) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0a0a0a", fontFamily: "'Playfair Display', 'Georgia', serif" }}>
        <Helmet>
          <title>{article.title} | IndiaNewsAi</title>
          <meta name="description" content={article.description} />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.description} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`${SITE_ORIGIN}/article/${article.url}`} />
          <meta property="og:image" content={resolvedSocialImage} />
          <meta property="og:image:alt" content={article.title} />
          <meta property="og:site_name" content="IndiaNewsAi" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.title} />
          <meta name="twitter:description" content={article.description} />
          <meta name="twitter:image" content={resolvedSocialImage} />
          <meta name="twitter:image:alt" content={article.title} />
          <link rel="canonical" href={`${SITE_ORIGIN}/article/${article.url}`} />
          <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
          {webStoryJsonLd && <script type="application/ld+json">{JSON.stringify(webStoryJsonLd)}</script>}
        </Helmet>

        {/* Elegant black header */}
        <header className="sticky top-0 z-50 border-b border-white/10 pt-[env(safe-area-inset-top,0px)]" style={{ background: "#000" }} role="banner">
          <nav className="flex items-center justify-between px-6 py-4" aria-label="Article navigation">
            <button
              onClick={() => navigate(-1)}
              className="text-white/70 hover:text-white transition-colors flex items-center gap-1 text-xs tracking-[0.25em] uppercase"
              aria-label="Go back"
            >
              <ChevronLeft size={14} /> Back
            </button>
            <Link to="/" className="text-xl font-black text-white leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              India<span className="text-neutral-400">News</span>Ai
            </Link>
            <div className="w-16"></div>
          </nav>
        </header>

        <main className="flex-1 w-full">
          {/* Hero image */}
          <div className="relative w-full" style={{ maxHeight: "70vh", overflow: "hidden" }}>
            <img
              src={article.image || metGalaImg4}
              alt={article.title}
              className="w-full object-cover"
              style={{ maxHeight: "70vh" }}
              loading="eager"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 50%)" }} />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-12 md:pb-12">
              <span className="inline-block text-[0.6rem] tracking-[0.3em] uppercase font-bold px-3 py-1 mb-4 border border-white/30 text-white/80">
                Fashion
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] max-w-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Met Gala 2026: 'Fashion Is Art'
              </h1>
              <p className="text-white/50 text-sm mt-4 tracking-[0.15em] uppercase">
                May 4, 2026 · The Metropolitan Museum of Art, New York
              </p>
            </div>
          </div>

          {/* Article body */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16">
            {/* Meta bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 tracking-wide">
                <span className="font-semibold text-white/80">{article.source}</span>
                <time dateTime={article.publishedAt} className="flex items-center gap-1">
                  <Calendar size={12} /> {formattedDate}
                </time>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {formattedTime} IST
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors border border-white/20 px-4 py-2"
                aria-label="Share this article"
              >
                {copied ? <Check size={12} className="text-green-400" /> : <Share2 size={12} />}
                {copied ? "Copied" : "Share"}
              </button>
            </div>

            {/* Lead */}
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              {article.description}
            </p>

            {/* Content */}
            <div className="text-neutral-400 leading-[1.9] text-base md:text-lg" style={{ fontFamily: "'Georgia', serif" }}>
              {article.content ? (
                <div className="whitespace-pre-wrap">{article.content}</div>
              ) : (
                <div className="p-8 border border-white/10 text-center italic text-neutral-600">
                  Full article content is currently being generated.
                </div>
              )}
            </div>

            {/* Gallery */}
            {article.gallery && article.gallery.length > 0 && (
            <div className="mt-16 mb-8">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Gallery
              </h2>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {article.gallery.map((img, i) => (
                  <div key={i} className="overflow-hidden group">
                    <img
                      src={img}
                      alt={`${article.title} — Image ${i + 1}`}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </main>

        {/* Minimal footer */}
        <footer className="text-center py-8 border-t border-white/10 text-neutral-600 text-[0.65rem] tracking-[0.25em] uppercase" role="contentinfo">
          <strong className="text-white/60">IndiaNewsAi</strong> — AI-Powered News Intelligence
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{article.title} | IndiaNewsAi</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_ORIGIN}/article/${article.url}`} />
        <meta property="og:image" content={resolvedSocialImage} />
        <meta property="og:image:alt" content={article.title} />
        <meta property="og:site_name" content="IndiaNewsAi" />
        {isEventArticle && <meta property="og:image" content="https://indianewsai.com/og-event-management-delhi.png" />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={resolvedSocialImage} />
        <meta name="twitter:image:alt" content={article.title} />
        <meta name="twitter:site" content="@indianews_ai" />
        <link rel="canonical" href={`${SITE_ORIGIN}/article/${article.url}`} />
        {isEventArticle && (
          <meta name="keywords" content="event management company Delhi, best event planner Delhi NCR, celebrity booking India, corporate events Delhi, luxury wedding planner, artist management India, The Kabir Company" />
        )}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        {webStoryJsonLd && <script type="application/ld+json">{JSON.stringify(webStoryJsonLd)}</script>}
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Helmet>

      <header className="sticky top-0 z-50 bg-ink border-b-3 border-saffron pt-[env(safe-area-inset-top,0px)]" role="banner">
        <nav className="flex items-center justify-between px-6 py-3" aria-label="Article navigation">
          <button
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:text-saffron transition-colors flex items-center gap-1 text-sm font-bold tracking-widest uppercase"
            aria-label="Go back to previous page"
          >
            <ChevronLeft size={16} aria-hidden="true" /> Back
          </button>
          <Link to="/" className="font-display text-xl font-black text-primary-foreground leading-none" aria-label="India News AI homepage">
            India<span className="text-saffron">News</span>Ai
          </Link>
          <div className="w-16" aria-hidden="true"></div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-3 sm:px-4 py-6 md:py-12 flex-1 w-full" role="main">
        <article className="bg-card p-4 sm:p-6 md:p-10 rounded-sm shadow-[0_2px_12px_rgba(26,16,8,0.08)] border border-paper-dark">
          <div className="mb-6">
            <span
              className={`inline-block text-[0.65rem] tracking-[0.18em] uppercase font-bold mb-4 px-2 py-1 rounded-sm ${
                categoryBadgeColors[article.category] || "bg-orange-100 text-saffron-dark"
              }`}
              aria-label={`Category: ${article.category}`}
            >
              {article.category}
            </span>
            {isEventArticle && (
              <img
                src={eventManagementThumbnail}
                alt="Your ultimate guide for top event management companies in Delhi 2026 — IndiaNewsAi"
                className="w-full rounded-sm mb-6 border border-paper-dark"
                loading="eager"
              />
            )}
            {!isEventArticle && article.image && (
              <img
                src={article.image}
                alt={`${article.title} — IndiaNewsAi`}
                className="w-full rounded-sm mb-6 border border-paper-dark"
                loading="eager"
              />
            )}
            {webStoryUrl && (
              <a
                href={webStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 mb-6 px-4 py-3 rounded-sm bg-gradient-to-r from-saffron to-saffron-dark text-primary-foreground font-bold tracking-widest uppercase text-xs sm:text-sm shadow-md hover:shadow-lg transition-all min-h-[44px]"
                aria-label="Watch the AMP web story for this article"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-foreground animate-pulse" aria-hidden="true" />
                  Watch Web Story
                </span>
                <span className="opacity-90 group-hover:translate-x-1 transition-transform">▶</span>
              </a>
            )}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-ink mb-4 sm:mb-6">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 border-y border-rule/30 mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-news-muted">
                <span className="font-bold text-ink">{article.source}</span>
                <time dateTime={article.publishedAt} className="flex items-center gap-1">
                  <Calendar size={14} aria-hidden="true" /> {formattedDate}
                </time>
                <span className="flex items-center gap-1">
                  <Clock size={14} aria-hidden="true" /> {formattedTime} IST
                </span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-ink hover:text-saffron transition-colors bg-paper-dark px-4 py-2 rounded-sm"
                aria-label="Share this article"
              >
                {copied ? <Check size={14} className="text-green-600" aria-hidden="true" /> : <Share2 size={14} aria-hidden="true" />}
                {copied ? <span className="text-green-600">Copied</span> : "Share"}
              </button>
            </div>
          </div>

          <div className="prose prose-stone prose-lg max-w-none font-serif text-ink leading-relaxed">
            <p className="text-xl font-medium leading-relaxed mb-8 text-news-muted">{article.description}</p>
            {article.content ? (
              <div className="whitespace-pre-wrap">{article.content}</div>
            ) : (
              <div className="p-8 bg-paper-dark border border-rule/50 rounded-sm text-center italic text-news-muted">
                Full article content is currently being generated.
              </div>
            )}
          </div>

          {isEventArticle && (
            <div className="mt-10 rounded-sm overflow-hidden bg-ink p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">
                  The Kabir Company — Delhi's #1 for Celebrity Bookings
                </h3>
                <p className="text-rule text-sm">
                  20+ years of experience · Corporate Events · Celebrity Booking · Luxury Weddings · Concerts
                </p>
              </div>
              <a
                href="https://thekabircompany.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-saffron text-primary-foreground font-bold text-sm tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-saffron-dark transition-colors whitespace-nowrap"
              >
                Visit Website →
              </a>
            </div>
          )}
        </article>
      </main>

      <footer className="bg-ink text-rule text-center p-6 text-[0.7rem] tracking-widest border-t-3 border-saffron leading-loose mt-12" role="contentinfo">
        <strong className="text-primary-foreground">IndiaNewsAi</strong> — AI-Powered News Intelligence
        <br />
        <div className="text-saffron my-1" aria-hidden="true">✦ ✦ ✦</div>
        <span>Covering Delhi NCR · Religion · Politics · Culture · Weather</span>
      </footer>
    </div>
  );
}
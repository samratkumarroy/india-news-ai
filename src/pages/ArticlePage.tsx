import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, Share2, Check, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { sampleArticles } from "@/data/sampleNews";

const categoryBadgeColors: Record<string, string> = {
  religion: "bg-green-100 text-green-800",
  politics: "bg-orange-100 text-orange-800",
  culture: "bg-purple-100 text-purple-800",
  weather: "bg-blue-100 text-blue-800",
  breaking: "bg-orange-100 text-saffron-dark",
  health: "bg-red-100 text-red-800",
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "en",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "IndiaNewsAi",
      url: "https://indianewsai.com",
    },
    mainEntityOfPage: `https://indianewsai.com/article/${article.url}`,
  };

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{article.title} | IndiaNewsAi</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://indianewsai.com/article/${article.url}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <link rel="canonical" href={`https://indianewsai.com/article/${article.url}`} />
        {isEventArticle && (
          <meta name="keywords" content="event management company Delhi, best event planner Delhi NCR, celebrity booking India, corporate events Delhi, luxury wedding planner, artist management India, The Kabir Company" />
        )}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
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

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12 flex-1 w-full" role="main">
        <article className="bg-card p-6 md:p-10 rounded-sm shadow-[0_2px_12px_rgba(26,16,8,0.08)] border border-paper-dark">
          <div className="mb-6">
            <span
              className={`inline-block text-[0.65rem] tracking-[0.18em] uppercase font-bold mb-4 px-2 py-1 rounded-sm ${
                categoryBadgeColors[article.category] || "bg-orange-100 text-saffron-dark"
              }`}
              aria-label={`Category: ${article.category}`}
            >
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-ink mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-rule/30 mb-8">
              <div className="flex items-center gap-4 text-sm text-news-muted">
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

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sampleArticles } from "@/data/sampleNews";
import { useState, useEffect } from "react";

export default function SitemapPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const categories = [...new Set(sampleArticles.map((a) => a.category))];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Sitemap — India News AI</title>
        <meta name="description" content="Browse the complete sitemap of India News AI. Find all pages, articles, and categories." />
        <link rel="canonical" href="https://indianewsai.com/sitemap" />
      </Helmet>
      <Header currentTime={currentTime} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule" />
            <h1 className="font-display text-2xl md:text-3xl font-black text-center">Sitemap</h1>
            <div className="flex-1 h-px bg-rule" />
          </div>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">Main Pages</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link to="/" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Home</Link></li>
              <li><Link to="/about" className="text-saffron hover:text-primary-foreground underline underline-offset-2">About Us</Link></li>
              <li><Link to="/contact-us" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Terms & Conditions</Link></li>
              <li><Link to="/editorial-policy" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Editorial Policy</Link></li>
              <li><Link to="/disclaimer" className="text-saffron hover:text-primary-foreground underline underline-offset-2">Disclaimer</Link></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">XML Sitemaps</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/sitemap.xml" target="_blank" rel="noopener" className="text-saffron hover:text-primary-foreground underline underline-offset-2">sitemap.xml</a> — Full site XML sitemap</li>
              <li><a href="/news-sitemap.xml" target="_blank" rel="noopener" className="text-saffron hover:text-primary-foreground underline underline-offset-2">news-sitemap.xml</a> — Google News sitemap</li>
              <li><a href="/rss.xml" target="_blank" rel="noopener" className="text-saffron hover:text-primary-foreground underline underline-offset-2">RSS Feed</a></li>
            </ul>
          </section>

          {categories.map((category) => (
            <section key={category} className="mb-8">
              <h2 className="font-display text-xl font-bold mb-3 text-saffron capitalize">{category}</h2>
              <ul className="list-disc pl-6 space-y-2">
                {sampleArticles
                  .filter((a) => a.category === category)
                  .map((article) => (
                    <li key={article.url}>
                      <Link
                        to={`/article/${article.url}`}
                        className="text-saffron hover:text-primary-foreground underline underline-offset-2"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}

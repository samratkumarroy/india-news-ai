import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>About Us — IndiaNewsAi | AI-Powered News Intelligence</title>
        <meta
          name="description"
          content="IndiaNewsAi delivers AI-powered, real-time news intelligence covering Delhi NCR, religion, politics, technology, entertainment, and world affairs."
        />
        <link rel="canonical" href="https://indianewsai.com/about" />
      </Helmet>

      <Header currentTime={currentTime} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule"></div>
            <span className="font-display text-sm font-bold">About Us</span>
            <div className="flex-1 h-px bg-rule"></div>
          </div>

          <div className="bg-card border border-rule rounded-sm p-6 sm:p-8 space-y-6">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Who We Are
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">IndiaNewsAi</strong> is an AI-powered news intelligence platform delivering real-time, verified coverage of India and the world. We combine automated editorial intelligence with human oversight to bring you the stories that matter — fast, accurate, and bias-aware.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Our Mission
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To democratize access to high-quality news through artificial intelligence — making breaking news, deep analysis, and contextual reporting available to every reader in India and beyond, around the clock.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                What We Cover
              </h2>
              <ul className="text-sm text-muted-foreground space-y-2 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">Delhi NCR</strong> — Local governance, infrastructure, metro, weather, and civic life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">Religion & Culture</strong> — Festivals, pilgrimages, interfaith events, and heritage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">Politics</strong> — Parliament, policy, elections, and governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">Technology & AI</strong> — Artificial intelligence, startups, digital India, and global tech</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">Entertainment</strong> — Bollywood, fashion, lifestyle, and trending culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-0.5">✦</span>
                  <span><strong className="text-foreground">World</strong> — Geopolitics, diplomacy, conflicts, and international affairs</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Our Sources
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We aggregate and verify information from trusted sources including <strong className="text-foreground">ANI, Zee News, News24, The Tribune, LiveLaw, Business Standard</strong>, and other credible outlets. Every story undergoes AI-assisted fact-checking before publication.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                AI-Powered Features
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our platform features an <strong className="text-foreground">AI News Assistant</strong> powered by advanced language models that can answer questions about current events, summarize articles, and provide contextual analysis — available 24/7 via the chat widget on every page.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                RSS Feed
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Stay updated with our{" "}
                <a
                  href="/rss.xml"
                  className="text-saffron underline underline-offset-2 hover:text-saffron-dark"
                  target="_blank"
                  rel="noopener"
                >
                  RSS Feed
                </a>{" "}
                — subscribe in your favorite reader to get the latest stories delivered automatically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">
                Contact
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For tips, corrections, or partnerships, reach us at{" "}
                <a
                  href="mailto:contact@indianewsai.com"
                  className="text-saffron underline underline-offset-2 hover:text-saffron-dark"
                >
                  contact@indianewsai.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-xs tracking-widest uppercase text-saffron hover:text-saffron-dark underline underline-offset-4"
            >
              ← Back to Headlines
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

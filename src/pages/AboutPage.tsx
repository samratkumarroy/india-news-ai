import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Globe, Zap, MessageCircle, Bot, ExternalLink } from "lucide-react";
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
        <title>About Us — India News AI | AI-Powered News Destination</title>
        <meta
          name="description"
          content="India News AI is a next-generation AI-powered news platform delivering live breaking news from across India and the world — faster, smarter, 24/7."
        />
        <link rel="canonical" href="https://indianewsai.com/about" />
      </Helmet>

      <Header currentTime={currentTime} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article>
          <span className="inline-block text-[0.7rem] font-medium bg-saffron/10 text-saffron px-3 py-1 rounded-full tracking-wider uppercase mb-6">
            About Us
          </span>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight mb-4">
            India's AI-powered news destination — breaking stories, the moment they happen.
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            India News AI is a next-generation news platform delivering live breaking news from across India and around the world — powered by artificial intelligence to bring you faster, smarter, and more relevant coverage 24/7.
          </p>

          <div className="border-l-4 border-saffron bg-paper-dark px-5 py-4 rounded-sm mb-8">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              Our mission is simple: keep you informed without the wait. From Delhi NCR to global headlines, we combine real-time journalism with AI to surface what matters most — before anyone else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-paper-dark border border-rule rounded-sm p-4">
              <Globe className="w-4 h-4 text-saffron mb-2" />
              <h3 className="text-sm font-semibold text-foreground mb-1">India & international coverage</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">From national politics and business to global events — comprehensive reporting across every beat.</p>
            </div>
            <div className="bg-paper-dark border border-rule rounded-sm p-4">
              <Zap className="w-4 h-4 text-saffron mb-2" />
              <h3 className="text-sm font-semibold text-foreground mb-1">Live breaking news</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">AI-curated alerts and real-time updates so you're always the first to know — not the last.</p>
            </div>
            <div className="bg-paper-dark border border-rule rounded-sm p-4">
              <MessageCircle className="w-4 h-4 text-saffron mb-2" />
              <h3 className="text-sm font-semibold text-foreground mb-1">AI news chatbot</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Ask questions, get summaries, and explore stories conversationally — your personal news assistant, always on.</p>
            </div>
          </div>

          <div className="border border-rule rounded-sm p-5 flex items-start gap-4 mb-8 bg-card">
            <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-saffron" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Meet your AI news assistant</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Not sure where to start? Our built-in news chatbot lets you ask anything — "What's happening in Delhi today?" or "Summarise the latest budget news" — and get clear, instant answers drawn from our live coverage. No scrolling required.
              </p>
              <a
                href="https://indianewsai.com"
                className="inline-flex items-center gap-1.5 text-xs text-saffron bg-saffron/10 px-3 py-1.5 rounded-full hover:bg-saffron/20 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                indianewsai.com
              </a>
            </div>
          </div>

          <hr className="border-rule mb-6" />

          <p className="text-sm text-muted-foreground leading-relaxed">
            India News AI is built for readers who value speed, accuracy, and clarity. Whether you're tracking a developing story from Mumbai, following a geopolitical shift in Washington, or just catching up on the morning headlines — we're here, around the clock, powered by AI and driven by the belief that everyone deserves news that works for them.
          </p>

          <div className="mt-10 text-center">
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

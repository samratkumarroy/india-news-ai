import { useState, useMemo, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import NewsTicker from "@/components/NewsTicker";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";
const AIChatWidget = lazy(() => import("@/components/AIChatWidget"));
import { sampleArticles } from "@/data/sampleNews";

export default function Index() {
  const [filter, setFilter] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    const loadTimer = setTimeout(() => setLoading(false), 1200);
    return () => {
      clearInterval(timer);
      clearTimeout(loadTimer);
    };
  }, []);

  const articles = sampleArticles;

  const filteredArticles = useMemo(() => {
    const list = filter === "all" ? articles : articles.filter((a) => a.category === filter);
    return [...list].sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [articles, filter]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentTime={currentTime} />

      <nav aria-label="News categories">
        <CategoryNav filter={filter} onFilterChange={setFilter} />
      </nav>

      <NewsTicker />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-1 w-full" role="main">
        <div className="flex flex-wrap items-center justify-between bg-paper-dark border border-rule rounded-sm px-3 sm:px-4 py-2 mb-4 gap-2" aria-label="News status">
          <div className="flex gap-2 items-center text-[0.62rem] sm:text-[0.67rem] text-news-muted">
            <span className="flex items-center gap-1">
              <Clock size={12} aria-hidden="true" /> Updated:{" "}
              <strong>
                {currentTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST
              </strong>
            </span>
          </div>
          <span className="text-[0.62rem] sm:text-[0.66rem] text-green-700 font-semibold flex items-center gap-1">
            <CheckCircle2 size={12} aria-hidden="true" /> {articles.length} verified live stories
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 my-4 sm:my-5" role="separator">
          <div className="flex-1 h-px bg-rule"></div>
          <span className="font-display text-xs sm:text-sm font-bold whitespace-nowrap">
            Breaking News ·{" "}
            {currentTime.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <div className="flex-1 h-px bg-rule"></div>
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              aria-label="Loading news"
            >
              <NewsCardSkeleton isHero />
              {Array.from({ length: 5 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              role="feed"
              aria-label="News articles"
            >
              {filteredArticles.map((article, i) => (
                <NewsCard
                  key={article.url}
                  article={article}
                  index={i}
                  isHero={i === 0 && filter === "all"}
                  currentTime={currentTime}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <Suspense fallback={null}>
        <AIChatWidget />
      </Suspense>
    </div>
  );
}

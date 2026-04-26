import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Share2, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
  isHero?: boolean;
  currentTime: Date;
}

const categoryColors: Record<string, string> = {
  religion: "text-green-700",
  politics: "text-orange-800",
  culture: "text-purple-700",
  weather: "text-blue-700",
  breaking: "text-saffron",
  technology: "text-indigo-700",
  fashion: "text-pink-700",
  entertainment: "text-amber-700",
  world: "text-red-700",
  health: "text-red-700",
};

export default function NewsCard({ article, index, isHero, currentTime }: NewsCardProps) {
  const [copied, setCopied] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = article.gallery;
  const cardImage = article.thumbnail || article.image;
  const webStoryUrlMap: Record<string, string> = {
    "kangana-ranaut-dhurandhar-2-madhavan-terrific-ajit-doval-film": "/web-stories/kangana-dhurandhar2-web-story.html",
    "brock-lesnar-wwe-retirement-wrestlemania-42": "/web-stories/brock-lesnar-wwe-retirement-wrestlemania-42.html",
  };
  const webStoryUrl = webStoryUrlMap[article.url];

  useEffect(() => {
    if (!gallery || gallery.length <= 1) return;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gallery]);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/article/${article.url}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.description, url: shareUrl });
      } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.2) }}
      className={`news-card flex flex-col ${isHero ? "md:col-span-2 lg:col-span-3 md:flex-row" : ""}`}
    >
      {isHero && !article.image && (
        <div className="card-pattern md:w-2/5 min-h-[200px]">
          <div className="text-center p-4">
            <div className="font-display text-3xl lg:text-4xl text-primary-foreground font-black leading-none uppercase">
              BREAKING<br />NEWS
            </div>
            <div className="inline-block mt-2 bg-saffron text-primary-foreground text-[0.58rem] tracking-[0.18em] uppercase px-2 py-1 rounded-sm font-bold">
              Live · {currentTime.toLocaleDateString("en-IN", { day: "numeric", month: "long" })}
            </div>
          </div>
        </div>
      )}
      {gallery && gallery.length > 1 ? (
        <div className={`overflow-hidden relative ${isHero ? "md:w-2/5 min-h-[200px]" : "h-48"}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryIndex}
              src={gallery[galleryIndex]}
              alt={`${article.title} — Image ${galleryIndex + 1}`}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              loading={index < 3 ? "eager" : "lazy"}
              width={isHero ? 600 : 400}
              height={isHero ? 400 : 192}
              decoding="async"
            />
          </AnimatePresence>
          <div className="absolute bottom-2 right-2 flex gap-1 z-10">
            {gallery.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === galleryIndex ? "bg-saffron" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      ) : cardImage ? (
        <div className={`overflow-hidden ${isHero ? "md:w-2/5 min-h-[200px]" : "h-48"}`}>
          <img
            src={cardImage}
            alt={`${article.title} — IndiaNewsAi`}
            className="w-full h-full object-cover"
            loading={index < 3 ? "eager" : "lazy"}
            width={isHero ? 600 : 400}
            height={isHero ? 400 : 192}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ) : null}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[0.58rem] tracking-[0.18em] uppercase font-bold ${categoryColors[article.category] || "text-saffron"}`}>
            {article.category}
          </span>
        </div>
        <h2 className={`font-display font-bold leading-snug mb-2 sm:mb-3 text-ink ${isHero ? "text-lg sm:text-xl lg:text-2xl" : "text-[0.95rem] sm:text-base lg:text-lg"}`}>
          {article.title}
        </h2>
        {webStoryUrl && (
          <a
            href={webStoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group inline-flex items-center justify-between gap-2 mb-3 px-3 py-2 rounded-sm bg-gradient-to-r from-saffron to-saffron-dark text-primary-foreground font-bold tracking-widest uppercase text-[0.65rem] sm:text-xs shadow hover:shadow-md transition-all min-h-[36px] w-full sm:w-auto self-start"
            aria-label="Watch web story for this article"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" aria-hidden="true" />
              Watch Web Story
            </span>
            <span className="opacity-90 group-hover:translate-x-1 transition-transform">▶</span>
          </a>
        )}
        <p className="text-[0.82rem] sm:text-sm text-news-muted leading-relaxed mb-3 sm:mb-4 flex-1">
          {article.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-secondary">
          <span className="text-[0.6rem] text-news-muted tracking-wide">{article.source}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-news-muted hover:text-saffron transition-colors p-2 -m-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Share article"
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
            </button>
            <Link
              to={`/article/${article.url}`}
              className="text-saffron text-[0.67rem] tracking-widest uppercase font-bold flex items-center gap-1 hover:text-saffron-dark transition-colors min-h-[36px] px-1"
            >
              Read <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

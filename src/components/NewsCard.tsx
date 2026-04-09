import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Share2, Check } from "lucide-react";
import { useState } from "react";
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
};

export default function NewsCard({ article, index, isHero, currentTime }: NewsCardProps) {
  const [copied, setCopied] = useState(false);

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`news-card flex flex-col ${isHero ? "md:col-span-2 lg:col-span-3 md:flex-row" : ""}`}
    >
      {isHero && (
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
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[0.58rem] tracking-[0.18em] uppercase font-bold ${categoryColors[article.category] || "text-saffron"}`}>
            {article.category}
          </span>
        </div>
        <h2 className={`font-display font-bold leading-tight mb-3 text-ink ${isHero ? "text-xl lg:text-2xl" : "text-base lg:text-lg"}`}>
          {article.title}
        </h2>
        <p className="text-sm text-news-muted leading-relaxed mb-4 flex-1">
          {article.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-secondary">
          <span className="text-[0.6rem] text-news-muted tracking-wide">{article.source}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-news-muted hover:text-saffron transition-colors p-1"
              aria-label="Share article"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
            </button>
            <Link
              to={`/article/${article.url}`}
              className="text-saffron text-[0.67rem] tracking-widest uppercase font-bold flex items-center gap-1 hover:text-saffron-dark transition-colors"
            >
              Read <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

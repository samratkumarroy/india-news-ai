import { Link } from "react-router-dom";
import { Rss } from "lucide-react";

interface HeaderProps {
  currentTime: Date;
}

export default function Header({ currentTime }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-ink border-b-3 border-saffron pt-[env(safe-area-inset-top,0px)]" role="banner">
      <div className="flex items-center justify-between px-6 py-2 border-b border-primary-foreground/10">
        <time
          dateTime={currentTime.toISOString()}
          className="text-[0.65rem] tracking-[0.14em] uppercase text-rule"
        >
          {currentTime.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          ·{" "}
          {currentTime.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          IST
        </time>
        <div className="flex items-center gap-3">
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS Feed"
            className="text-saffron hover:text-primary-foreground transition-colors"
          >
            <Rss className="w-4 h-4" />
          </a>
          <div className="flex gap-0.5 items-center" aria-label="Indian flag" role="img">
            <div className="w-4 h-1.5 bg-[#FF9933] rounded-sm"></div>
            <div className="w-4 h-1.5 bg-primary-foreground rounded-sm"></div>
            <div className="w-4 h-1.5 bg-[#138808] rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className="text-center py-4 px-6">
        <Link to="/" aria-label="India News AI - Home">
          <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground leading-none">
            India<span className="text-saffron">News</span>Ai
          </h1>
        </Link>
        <p className="text-[0.55rem] md:text-[0.68rem] tracking-[0.18em] uppercase text-rule mt-1">
          Automated Intelligence · Delhi NCR & Religion · Live Updates
        </p>
      </div>
    </header>
  );
}

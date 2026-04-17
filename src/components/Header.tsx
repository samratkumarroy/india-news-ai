import { Link } from "react-router-dom";
import { Rss } from "lucide-react";
import logo from "@/assets/india-news-ai-logo.png";

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
        <nav className="flex items-center gap-3 text-[0.65rem] tracking-widest uppercase" aria-label="Top navigation">
          <Link to="/about" className="text-rule hover:text-saffron transition-colors">About</Link>
          <Link to="/contact-us" className="text-rule hover:text-saffron transition-colors">Contact</Link>
          <a
            href="https://x.com/indianews_ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow India News AI on X"
            className="text-saffron hover:text-primary-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21l-6.49 7.41L22 22h-6.828l-4.78-6.243L4.8 22H2.04l6.94-7.93L2 2h6.914l4.32 5.71L18.244 2zm-2.39 18h1.882L7.27 4H5.27l10.585 16z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/india_newsai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow India News AI on Instagram"
            className="text-saffron hover:text-primary-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed" className="text-saffron hover:text-primary-foreground transition-colors">
            <Rss className="w-4 h-4" />
          </a>
          <div className="flex gap-0.5 items-center" aria-label="Indian flag" role="img">
            <div className="w-4 h-1.5 bg-[#FF9933] rounded-sm"></div>
            <div className="w-4 h-1.5 bg-primary-foreground rounded-sm"></div>
            <div className="w-4 h-1.5 bg-[#138808] rounded-sm"></div>
          </div>
        </nav>
      </div>

      <div className="text-center py-4 px-6">
        <Link to="/" aria-label="India News AI - Home" className="inline-flex items-center justify-center gap-3">
          <img
            src={logo}
            alt="India News AI logo"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground leading-none">
            India<span className="text-saffron">News</span>Ai
          </h1>
        </Link>
        <p className="text-[0.55rem] md:text-[0.68rem] tracking-[0.18em] uppercase text-rule mt-1">
          AI-Powered News · Breaking Stories the Moment They Happen
        </p>
      </div>
    </header>
  );
}

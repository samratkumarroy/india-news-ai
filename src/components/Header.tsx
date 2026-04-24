import { Link } from "react-router-dom";
import { Rss } from "lucide-react";
import logo from "@/assets/india-news-ai-logo.png";

interface HeaderProps {
  currentTime: Date;
}

export default function Header({ currentTime }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border pt-[env(safe-area-inset-top,0px)]" role="banner">
      <div className="flex items-center justify-between px-6 py-2 border-b border-border">
        <time
          dateTime={currentTime.toISOString()}
          className="text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground font-medium"
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
        <nav className="flex items-center gap-3 text-[0.65rem] tracking-widest uppercase font-semibold" aria-label="Top navigation">
          <Link to="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
          <Link to="/contact-us" className="text-foreground hover:text-accent transition-colors">Contact</Link>
          <a
            href="https://x.com/indianews_ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow India News AI on X"
            className="text-foreground hover:text-accent transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21l-6.49 7.41L22 22h-6.828l-4.78-6.243L4.8 22H2.04l6.94-7.93L2 2h6.914l4.32 5.71L18.244 2zm-2.39 18h1.882L7.27 4H5.27l10.585 16z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/indianewsai_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow India News AI on Instagram"
            className="text-foreground hover:text-accent transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed" className="text-foreground hover:text-accent transition-colors">
            <Rss className="w-4 h-4" />
          </a>
          <div className="flex gap-0.5 items-center" aria-label="Indian flag" role="img">
            <div className="w-4 h-1.5 bg-[#FF9933] rounded-sm"></div>
            <div className="w-4 h-1.5 bg-foreground/10 border border-border rounded-sm"></div>
            <div className="w-4 h-1.5 bg-[#138808] rounded-sm"></div>
          </div>
        </nav>
      </div>

      <div className="text-center py-6 px-6">
        <Link to="/" aria-label="India News AI - Home" className="inline-flex items-center justify-center gap-3">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground leading-none tracking-tight">
            India<span className="italic font-bold">News</span>Ai
          </h1>
        </Link>
        <p className="text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mt-2 font-medium">
          AI-Powered News · Breaking Stories the Moment They Happen
        </p>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background text-center p-6 text-[0.7rem] tracking-widest leading-loose mt-12 border-t border-border" role="contentinfo">
      <strong className="text-background font-display text-base">IndiaNewsAi</strong> — AI-Powered News Intelligence
      <br />
      <div className="text-background/60 my-1" aria-hidden="true">✦ ✦ ✦</div>
      <span className="text-background/70">Covering Delhi NCR · Religion · Politics · Culture · Weather</span>
      <br />
      <span className="text-background/70">Sources: ANI · Zee News · News24 · The Tribune · LiveLaw · Business Standard</span>
      <div className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-4">
        <Link to="/about" className="text-background hover:opacity-70 underline underline-offset-2">About Us</Link>
        <Link to="/contact-us" className="text-background hover:opacity-70 underline underline-offset-2">Contact Us</Link>
        <Link to="/privacy-policy" className="text-background hover:opacity-70 underline underline-offset-2">Privacy Policy</Link>
        <Link to="/terms" className="text-background hover:opacity-70 underline underline-offset-2">Terms</Link>
        <Link to="/editorial-policy" className="text-background hover:opacity-70 underline underline-offset-2">Editorial Policy</Link>
        <Link to="/disclaimer" className="text-background hover:opacity-70 underline underline-offset-2">Disclaimer</Link>
        <Link to="/sitemap" className="text-background hover:opacity-70 underline underline-offset-2">Sitemap</Link>
        <a href="/rss.xml" target="_blank" rel="noopener" className="text-background hover:opacity-70 underline underline-offset-2">RSS Feed</a>
      </div>
    </footer>
  );
}

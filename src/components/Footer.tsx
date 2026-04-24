import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background text-center p-6 text-[0.7rem] tracking-widest leading-loose mt-12 border-t-4 bg-gradient-brand-border" role="contentinfo" style={{ borderImage: "var(--gradient-brand) 1" }}>
      <strong className="text-background">India<span className="text-gradient-brand">News</span>Ai</strong> — AI-Powered News Intelligence
      <br />
      <div className="text-gradient-brand my-1 font-bold" aria-hidden="true">✦ ✦ ✦</div>
      <span className="text-background/70">Covering Delhi NCR · Religion · Politics · Culture · Weather</span>
      <br />
      <span className="text-background/70">Sources: ANI · Zee News · News24 · The Tribune · LiveLaw · Business Standard</span>
      <div className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-4">
        <Link to="/about" className="text-background hover:text-gradient-brand underline underline-offset-2">About Us</Link>
        <Link to="/contact-us" className="text-background hover:text-gradient-brand underline underline-offset-2">Contact Us</Link>
        <Link to="/privacy-policy" className="text-background hover:text-gradient-brand underline underline-offset-2">Privacy Policy</Link>
        <Link to="/terms" className="text-background hover:text-gradient-brand underline underline-offset-2">Terms</Link>
        <Link to="/editorial-policy" className="text-background hover:text-gradient-brand underline underline-offset-2">Editorial Policy</Link>
        <Link to="/disclaimer" className="text-background hover:text-gradient-brand underline underline-offset-2">Disclaimer</Link>
        <Link to="/sitemap" className="text-background hover:text-gradient-brand underline underline-offset-2">Sitemap</Link>
        <a href="/rss.xml" target="_blank" rel="noopener" className="text-background hover:text-gradient-brand underline underline-offset-2">RSS Feed</a>
      </div>
    </footer>
  );
}

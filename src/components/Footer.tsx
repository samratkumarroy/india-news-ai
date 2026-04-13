import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-rule text-center p-6 text-[0.7rem] tracking-widest border-t-3 border-saffron leading-loose mt-12" role="contentinfo">
      <strong className="text-primary-foreground">IndiaNewsAi</strong> — AI-Powered News Intelligence
      <br />
      <div className="text-saffron my-1" aria-hidden="true">✦ ✦ ✦</div>
      <span>Covering Delhi NCR · Religion · Politics · Culture · Weather</span>
      <br />
      <span>Sources: ANI · Zee News · News24 · The Tribune · LiveLaw · Business Standard</span>
      <div className="mt-3 flex justify-center gap-4">
        <Link to="/about" className="text-saffron hover:text-primary-foreground underline underline-offset-2">About Us</Link>
        <a href="/rss.xml" target="_blank" rel="noopener" className="text-saffron hover:text-primary-foreground underline underline-offset-2">RSS Feed</a>
      </div>
    </footer>
  );
}

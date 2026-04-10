export default function NewsTicker() {
  const keywords = [
    "Breaking News",
    "Meta Strikes $21B Deal with CoreWeave",
    "Spring 2026 Fashion Trends",
    "Bollywood Actresses Power-Packed 2026",
    "Anant Ambani Turns 31",
    "Israeli Strikes in Lebanon Escalate",
    "AI Model Push by Meta",
    "Windbreakers & Capris Trending",
    "Alia Bhatt in YRF Spy Thriller Alpha",
    "SRK & Salman Wish Anant Ambani",
    "US-Iran Ceasefire Under Threat",
    "CoreWeave Cloud Infrastructure",
    "Dhurandhar 2 Box Office Record",
    "Delhi NCR Events",
    "India Politics",
    "Live Updates",
  ];

  return (
    <div className="bg-saffron py-1 overflow-hidden whitespace-nowrap relative">
      <div className="inline-block bg-ink text-primary-foreground px-3 py-0.5 text-[0.62rem] tracking-[0.15em] uppercase mr-4 font-bold relative z-10">
        LIVE
      </div>
      <span className="ticker-content">
        {keywords.map((kw, i) => (
          <span key={i}>
            ◆ {kw} &nbsp;&nbsp;
          </span>
        ))}
        {keywords.map((kw, i) => (
          <span key={`dup-${i}`}>
            ◆ {kw} &nbsp;&nbsp;
          </span>
        ))}
      </span>
    </div>
  );
}

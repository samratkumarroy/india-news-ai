export default function NewsTicker() {
  const keywords = [
    "Breaking News",
    "Event Management Delhi",
    "Celebrity Booking India",
    "The Kabir Company",
    "Corporate Events Delhi NCR",
    "Luxury Wedding Planner",
    "MOONLIIT Fest",
    "Artist Management India",
    "Delhi NCR Events",
    "Bollywood Celebrity Booking",
    "India Politics",
    "Religion & Culture",
    "Live Updates",
    "Health Investigation",
    "Ayodhya",
    "Parliament",
    "Digital India",
    "Weather Alert",
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

export default function NewsTicker() {
  const keywords = [
    "Breaking News",
    "Delhi NCR",
    "Asian Hospital Faridabad Negligence",
    "AIMS Faridabad Complaint",
    "Dr. Anita Kant",
    "Medical Negligence India",
    "NMC Complaint Filed",
    "Patient Safety Alert",
    "India Politics",
    "Religion & Culture",
    "Live Updates",
    "Noida",
    "Gurugram",
    "Weather Alert",
    "Health Investigation",
    "Ayodhya",
    "Parliament",
    "Digital India",
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

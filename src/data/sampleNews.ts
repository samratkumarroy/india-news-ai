import { NewsArticle } from "@/types/news";
import { newArticles } from "./newArticles";
import hormuzShipImg from "@/assets/iran-hormuz-india-bound-ship-april-2026.jpg";
import ecKhargeImg from "@/assets/ec-kharge-notice-april-2026.jpg";
import supremeCourtMamataImg from "@/assets/supreme-court-mamata-ipac-april-2026.jpg";
import keralaFireworksImg from "@/assets/kerala-fireworks-blast-april-2026.jpg";
import pahalgamAnniversaryImg from "@/assets/pahalgam-attack-anniversary-april-2026.jpg";

// Base articles use fixed dates for proper chronological sorting

const baseArticles: NewsArticle[] = [
  {
    title: "IRGC Seizes India-Bound Ship Near Strait of Hormuz, Raising Fresh Alarm Over India's Energy Security",
    description: "Iran's Revolutionary Guard has seized two vessels including the Gujarat-bound Epaminondas headed for Mundra, sharply escalating shipping risk in the Strait of Hormuz as India monitors possible fallout for oil imports and maritime security.",
    content: `BREAKING NEWS — Energy Security / West Asia | April 22, 2026

India's energy-security establishment moved into high alert on Wednesday evening after Iran's Revolutionary Guard seized two vessels in and around the Strait of Hormuz, including the India-bound Epaminondas, a ship reportedly heading toward Gujarat's Mundra Port.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS

• India-bound vessel Epaminondas was among ships seized in the Hormuz region
• The route is critical because a large share of India's crude imports pass through these waters
• Delhi has raised concerns as regional military tensions remain elevated
• Maritime monitoring and energy-risk calculations are intensifying in New Delhi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THIS MATTERS FOR INDIA

The Strait of Hormuz remains one of the world's most strategically sensitive chokepoints. Any disruption here directly affects freight insurance, tanker routing, delivery schedules and crude price expectations. For India, the stakes are unusually high because Gulf-origin energy cargoes remain central to refining, transport fuel supply and inflation management.

Officials are expected to closely track whether the seizure remains an isolated signal or expands into a broader pressure tactic linked to ongoing US-Iran tensions. Shipping firms, refiners and port-linked logistics operators may now reassess route risk, timing buffers and exposure to sudden escalation.

WHAT HAPPENS NEXT

India's diplomatic and security systems are likely to focus on safe passage, ship status, crew welfare, and the broader risk to commercial shipping lanes. Any sustained disruption in Hormuz could ripple through freight costs, oil pricing and market sentiment within hours.

Source: Reuters / maritime security monitoring / IndiaNewsAi desk, April 22, 2026.`,
    category: "breaking",
    source: "Reuters / IndiaNewsAi Desk",
    publishedAt: "2026-04-22T19:20:00+05:30",
    url: "irgc-seizes-india-bound-ship-strait-of-hormuz-april-2026",
    image: hormuzShipImg,
    pinned: true,
  },
  {
    title: "Election Commission Issues Notice to Mallikarjun Kharge Over 'Terrorist' Remark Against PM Modi",
    description: "The Election Commission has sent a sharp notice to Congress chief Mallikarjun Kharge over his 'terrorist' remark against Prime Minister Narendra Modi, asking for a response within 24 hours as campaigning intensifies ahead of key polling phases.",
    content: `POLITICS — Election Watch | April 22, 2026

The Election Commission has issued a formal notice to Congress president Mallikarjun Kharge over his reported "terrorist" remark aimed at Prime Minister Narendra Modi during a press interaction in Chennai, opening a fresh flashpoint in an already heated campaign cycle.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS

• EC has sought Kharge's reply within 24 hours
• BJP has demanded an apology and accused Congress of lowering political discourse
• The controversy has surfaced just as campaigning peaks before crucial voting rounds
• The episode is likely to dominate television debates and party messaging through polling eve

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THE NOTICE MATTERS

At this stage of the campaign, language and code-of-conduct disputes can shape headlines almost as much as manifestos. The Commission's intervention signals concern over rhetoric that could inflame tensions or distort public discourse in the final stretch before voting.

With Tamil Nadu and West Bengal entering a high-intensity political window, both sides are expected to weaponise the controversy: the BJP as evidence of disrespect toward the prime minister, and Congress as part of a wider argument over political overreach and selective outrage.

WHAT TO WATCH NEXT

The next step will be Kharge's response, followed by any advisory or censure from the Commission. The issue may also influence campaign messaging in states where turnout battles are tight and last-minute narrative shifts matter.

Source: Election Commission reporting / ANI / IndiaNewsAi political desk, April 22, 2026.`,
    category: "politics",
    source: "ANI / Election Watch",
    publishedAt: "2026-04-22T18:55:00+05:30",
    url: "election-commission-notice-mallikarjun-kharge-pm-modi-remark-april-2026",
    image: ecKhargeImg,
  },
  {
    title: "Supreme Court Criticises Mamata Banerjee in I-PAC Case, Says Democracy Cannot Ignore 'Reality'",
    description: "The Supreme Court has sharply criticised West Bengal Chief Minister Mamata Banerjee in the I-PAC matter, warning that democracy cannot function by 'shutting our eyes to reality' amid allegations of interference during an ED raid.",
    content: `POLITICS — Supreme Court / West Bengal | April 22, 2026

In one of the sharpest observations of the campaign season, the Supreme Court on Wednesday criticised West Bengal Chief Minister Mamata Banerjee in the I-PAC-related matter, saying the court could not "shut our eyes to reality" while examining allegations tied to interference during an Enforcement Directorate operation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS

• Supreme Court made strong remarks while hearing the I-PAC-linked matter
• Bench indicated that democratic accountability cannot be ignored during politically sensitive raids
• Observations come as West Bengal wraps up campaigning ahead of the next voting phase
• The remarks are likely to become a major campaign issue within hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THIS IS POLITICALLY SIGNIFICANT

Courtroom observations during election season often carry outsized political weight, particularly when they touch on governance, institutional conduct and law-enforcement access. Opposition parties and the ruling establishment in Bengal are both likely to recast the court's comments to suit competing narratives of federal overreach versus rule-of-law breakdown.

The timing is critical. With campaigning entering its final stage, any judicially framed language around democracy, interference and state responsibility can quickly shift the public conversation and news agenda.

WHAT HAPPENS NEXT

Attention will now turn to the court's subsequent directions, the legal responses from the Bengal government, and whether the matter produces concrete procedural consequences beyond the verbal observations.

Source: Supreme Court reporting / legal correspondents / IndiaNewsAi desk, April 22, 2026.`,
    category: "politics",
    source: "Legal Correspondents / IndiaNewsAi",
    publishedAt: "2026-04-22T18:25:00+05:30",
    url: "supreme-court-criticises-mamata-banerjee-ipac-case-april-2026",
    image: supremeCourtMamataImg,
  },
  {
    title: "Kerala Fireworks Unit Blast Kills 13 in Mundathicode, Days After Tamil Nadu Factory Tragedy",
    description: "At least 13 people have been killed in a blast at a fireworks unit in Kerala's Mundathicode, prompting a state disaster response and judicial probe just days after another deadly firecracker factory tragedy in Tamil Nadu.",
    content: `BREAKING NEWS — Disaster / Public Safety | April 22, 2026

At least 13 people were killed after a powerful explosion tore through a fireworks unit in Mundathicode, Kerala, deepening national concern over industrial safety failures in the fireworks sector just days after a separate high-fatality firecracker factory tragedy in Tamil Nadu.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS

• 13 people reported dead in Kerala fireworks unit explosion
• State government has treated the incident as a disaster and ordered a judicial probe
• Most victims are reported to be women workers
• The blast comes within days of another deadly factory tragedy in Tamil Nadu

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THIS STORY CUTS DEEP

The back-to-back tragedies raise urgent questions about storage practices, licensing, enforcement and worker protection in hazardous manufacturing clusters. Fireworks and firecracker units remain heavily dependent on labour-intensive processes, often exposing workers to catastrophic risk when safety audits fail or production norms are bypassed.

For policymakers, the latest explosion is likely to trigger renewed scrutiny over inspections, emergency preparedness, and whether existing regulations are being implemented in practice rather than on paper.

WHAT TO WATCH NEXT

Investigators will examine the blast trigger, compliance history, and accountability chain within the unit. Families of the victims are expected to seek compensation, while labour safety enforcement could become a wider political and administrative issue across southern states.

Source: state disaster reporting / local administration / IndiaNewsAi desk, April 22, 2026.`,
    category: "breaking",
    source: "State Disaster Reporting / IndiaNewsAi",
    publishedAt: "2026-04-22T17:40:00+05:30",
    url: "kerala-fireworks-unit-blast-mundathicode-april-2026",
    image: keralaFireworksImg,
  },
  {
    title: "One Year After Pahalgam Terror Attack, Leaders Renew Warning as Security Tightens Across Kashmir",
    description: "India marked one year since the Pahalgam terror attack with tributes, renewed warnings to Pakistan and heightened security across Kashmir as officials balanced remembrance, deterrence and the return of tourist activity.",
    content: `NATIONAL SECURITY — Kashmir / Terror Response | April 22, 2026

India on Wednesday marked one year since the Pahalgam terror attack with tributes to those killed, sharpened political warnings toward Pakistan, and visible security tightening across parts of Kashmir as the region manages both grief and recovery.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS

• National leaders marked the anniversary with public tributes and security messaging
• Rajnath Singh and other senior figures renewed warning signals toward Pakistan
• Tourist activity is returning, but security presence has been visibly strengthened
• Army messaging emphasized preparedness after Operation Sindoor-era lessons

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHY THE ANNIVERSARY MATTERS

Anniversary dates in conflict-sensitive regions are never symbolic alone. They shape public memory, counterterror messaging, force posture and political signalling. This year's observance comes at a moment when Kashmir is trying to project stability and tourism revival without appearing complacent about persistent security threats.

The government's messaging reflects that dual objective: honour the victims, reassure civilians and visitors, and underline that deterrence remains active.

WHAT TO WATCH NEXT

Security agencies are likely to maintain elevated alert levels around tourist corridors, memorial events and transport nodes. Political statements around cross-border terrorism may also sharpen as parties frame the anniversary through national security and regional stability.

Source: defence and security reporting / IndiaNewsAi desk, April 22, 2026.`,
    category: "breaking",
    source: "Security Reporting / IndiaNewsAi",
    publishedAt: "2026-04-22T16:50:00+05:30",
    url: "pahalgam-terror-attack-anniversary-kashmir-security-april-2026",
    image: pahalgamAnniversaryImg,
  },
  {
    title: "How to Choose an Event Management Company in Delhi? 7 Essential Things to Know",
    description: "From corporate events to Bollywood celebrity bookings — the event industry in Delhi NCR is evolving rapidly. 7 expert tips for choosing the right partner and avoiding costly mistakes.",
    content: `SPECIAL REPORT — Business / Event Industry | Delhi NCR | March 2026

In today's world, an event is no longer just a gathering — it has become a brand statement. Whether a large company wants to launch a product, a wedding calls for a Bollywood star, or thousands are expected at a concert — every such occasion is backed by the expertise of a professional event management company.

Delhi NCR is India's largest event market. According to industry figures, over 14,000 corporate and private events were held in Delhi-NCR in 2025, with a combined market value exceeding ₹3,200 crore. But in a market this vast, choosing the right company is no easy task.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY MARKET DATA

• 14,000+ events per year in Delhi NCR
• ₹3,200 Crore — Delhi Event Market value (2025)
• 18% annual growth rate
• 20+ years of experience among top companies

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


1. COMPANY EXPERIENCE & PORTFOLIO

When evaluating any event management company, the first thing to examine is its track record. Don't just go by what's written on a website — ask for real projects and case studies.

✓ Has the company handled both corporate and celebrity events?
✓ Do they have references from major clients like DLF or Omaxe?
✓ Has their work been covered in any media publications?

Expert Tip: Companies like Delhi's The Kabir Company — which started with IITEO trade fairs in 2001 and has since expanded to luxury weddings and large-scale concerts — are a testament to just how much experience matters.


2. END-TO-END SERVICE CAPABILITY

A good event company doesn't just book a venue — it designs the entire experience. From venue selection, décor, and artist booking to technical production and post-event reporting, everything should be available under one roof.

When a single team manages the entire event, communication gaps disappear and execution improves — that's the difference between an ordinary event and an unforgettable one.


3. CELEBRITY & ARTIST NETWORK

Celebrity performances at corporate events have become an expectation. Annual functions, product launches, or brand activations — the demand for Bollywood stars or renowned musicians is universal.

Make sure your event company has experience working with A-list artists like Salman Khan, Arijit Singh, Badshah, and Guru Randhawa. The stronger the network, the smoother the booking — and often the better the price.

• ₹5L+ — B-Category Artist Booking
• ₹5Cr+ — A-List Celebrity Booking


4. CLIENT REVIEWS & MARKET REPUTATION

Google Reviews, social media feedback, and media coverage — together, these three paint a true picture of any company. Before hiring, speak with their previous clients directly.

✓ Have they been covered in publications like Business Standard or Tribune India?
✓ Do they hold a 4.5+ star rating on Google?
✓ Are there any major public complaints filed against the company?


5. CREATIVITY & TREND AWARENESS

The top trends shaping the event industry in 2026 include Destination Weddings, Immersive Experience Design, AI-Powered Event Tech, and Hybrid Events. A good company doesn't just know these trends — it can execute them within your budget.


6. BUDGET CLARITY & TRANSPARENCY

A professional event company always provides a clear quotation — no hidden charges, no last-minute surprises. All deliverables, timelines, and cancellation policies must be clearly stated in the contract.

Remember: The cheapest company isn't always the best. True value for money means accountability for every rupee spent and follow-through on every promise made.


7. LOCAL EXPERTISE — THE DELHI NCR ADVANTAGE

Organising an event in Delhi is different from any other city. The permissions process, traffic management, preferred venues, and government collaborations all require experience. A locally expert company handles all of this seamlessly, without the usual headaches.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY FACTS

• Delhi NCR is India's largest event market — ₹3,200 crore+ (2025)
• The Kabir Company has been active in Delhi since 2001 and is the organiser of large-scale events like MOONLIIT Fest
• Celebrity booking rates in India range from ₹5 lakh to ₹5 crore
• Top event companies in Delhi include The Kabir Company, specialising in corporate events, celebrity management, and luxury weddings
• Delhi's event industry is growing at 18% annually

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FREQUENTLY ASKED QUESTIONS

Q: Which is the best event management company in Delhi?
A: Companies like The Kabir Company in Delhi, which bring 20+ years of experience in corporate events, celebrity bookings, and luxury weddings, are considered among the top in the industry.

Q: How much does celebrity booking cost for a corporate event?
A: In India, celebrity bookings for corporate events can range from ₹5 lakh to ₹5 crore. This depends on the celebrity's popularity, the duration of the performance, and the scale of the event.

Q: What should you check first when selecting an event management company?
A: Start with the company's portfolio, client reviews, and artist network. Then confirm budget transparency and local expertise.

Q: How big is the event industry in Delhi?
A: In 2025, Delhi NCR's event industry was valued at over ₹3,200 crore and is growing at 18% per year.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONCLUSION

Choosing the right event management company determines the success of your entire event. Experience, creativity, a strong celebrity network, and budget transparency — these four pillars define any top-tier company.

In a competitive market like Delhi, the companies that stand out are those that combine two decades of experience with the creativity demands of a new era.

Tags: Event Management Delhi · Celebrity Booking · Corporate Events · The Kabir Company · Luxury Weddings · MOONLIIT Fest · Event Management India`,
    category: "breaking",
    source: "India News AI — Special Correspondent",
    publishedAt: "2026-03-22T10:00:00.000Z",
    url: "how-to-choose-event-management-company-delhi",
    pinned: true
  },
  {
    title: "Delhi Metro Phase-IV Corridor Receives Final Environmental Clearance",
    description: "The Ministry of Environment has granted the final clearance for three new Delhi Metro Phase-IV corridors connecting Lajpat Nagar to Saket and Inderlok to Indraprastha, set to benefit over 8 lakh daily commuters.",
    content: "The Ministry of Environment, Forest and Climate Change has officially granted the final environmental clearance for three key corridors under the Delhi Metro Phase-IV expansion project.\n\nThe approved corridors — Lajpat Nagar to Saket G-Block (7.9 km), Inderlok to Indraprastha (12.4 km), and Mukundpur to Maujpur (12.6 km) — are expected to collectively serve over 8 lakh daily commuters once operational.\n\nDMRC Managing Director confirmed that construction tenders will be floated within the next 45 days, with completion targeted by 2029. The corridors will feature energy-efficient rolling stock and solar-powered stations.\n\nUrban planners have welcomed the decision, noting that the new lines will significantly reduce congestion on parallel road corridors and provide last-mile connectivity to several underserved areas in East and South Delhi.",
    category: "breaking",
    source: "ANI",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "delhi-metro-phase-4-environmental-clearance-2026"
  },
  {
    title: "Char Dham Yatra 2026 Registrations Cross 5 Lakh Mark in Record Time",
    description: "The Uttarakhand government reports unprecedented demand for the annual Char Dham pilgrimage, with registrations crossing 5 lakh within the first week of portal opening.",
    content: "Registrations for the 2026 Char Dham Yatra have surpassed the 5 lakh mark within just seven days of the online portal going live, shattering all previous records.\n\nThe Uttarakhand Tourism Department attributed the surge to improved road infrastructure, including the nearly completed Char Dham Highway project, and enhanced digital registration systems.\n\nChief Minister announced additional medical facilities and helicopter services along all four pilgrimage routes — Yamunotri, Gangotri, Kedarnath, and Badrinath — to accommodate the expected footfall.\n\nSecurity agencies have deployed over 15,000 personnel and implemented AI-powered crowd monitoring at key bottleneck points to ensure pilgrim safety during the season.",
    category: "religion",
    source: "The Tribune",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "char-dham-yatra-2026-registrations-record"
  },
  {
    title: "IMD Issues Yellow Alert for Delhi NCR: Thunderstorm Expected Tonight",
    description: "The India Meteorological Department has issued a yellow alert for Delhi and surrounding NCR regions, predicting thunderstorms with gusty winds up to 60 kmph and possible hailstorm activity.",
    content: "The India Meteorological Department (IMD) has issued a yellow alert for the entire Delhi-NCR region, warning of thunderstorms accompanied by gusty winds reaching speeds of 50-60 kmph.\n\nThe weather system, originating from a Western Disturbance interacting with lower-level easterlies from the Bay of Bengal, is expected to bring moderate to heavy rainfall between 8 PM and midnight.\n\nIMD scientist Dr. R.K. Jenamani advised residents to avoid outdoor activities during the storm window and secure loose objects on rooftops and balconies. Flight operations at IGI Airport may face delays.\n\nTemperatures are expected to drop by 4-5°C following the storm, providing temporary relief from the early summer heat that has pushed daytime temperatures to 38°C this week.",
    category: "weather",
    source: "IMD / Zee News",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "imd-yellow-alert-delhi-ncr-thunderstorm"
  },
  {
    title: "Ram Navami Celebrations Draw Millions Across North India",
    description: "Grand celebrations mark Ram Navami across Ayodhya, Delhi, and major North Indian cities with elaborate processions, cultural programmes, and community feasts.",
    content: "Ram Navami celebrations reached a crescendo across North India with millions participating in processions, bhajan sandhyas, and community feasts marking the birth anniversary of Lord Ram.\n\nIn Ayodhya, the newly constructed Ram Mandir witnessed a footfall of over 3.5 lakh devotees, with special rituals performed from dawn including the ceremonial bathing of the Ram Lalla idol with panchamrit.\n\nDelhi's major temples including Birla Mandir, Hanuman Mandir at Connaught Place, and Chattarpur Temple organised day-long programmes featuring Ramcharitmanas recitations and cultural performances.\n\nSecurity arrangements were heightened across all major cities with CCTV surveillance, drone monitoring, and multi-layered barricading at procession routes. No untoward incident was reported from any location.",
    category: "religion",
    source: "News24",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "ram-navami-celebrations-north-india-2026"
  },
  {
    title: "Lok Sabha Passes Digital Personal Data Protection Amendment Bill",
    description: "Parliament clears key amendments to the DPDP Act strengthening consent mechanisms and introducing penalties up to ₹500 crore for data breaches affecting Indian citizens.",
    content: "The Lok Sabha has passed the Digital Personal Data Protection (Amendment) Bill, 2026, introducing sweeping changes to India's data privacy framework.\n\nKey amendments include mandatory 72-hour breach notification requirements, enhanced consent mechanisms requiring explicit opt-in for cross-border data transfers, and penalties of up to ₹500 crore for significant data breaches.\n\nIT Minister stated that the amendments bring India's data protection regime at par with global standards while ensuring the digital economy continues to thrive. Opposition members raised concerns about surveillance exemptions retained from the original Act.\n\nIndustry body NASSCOM welcomed the clarity on compliance timelines but urged the government to establish the Data Protection Board expeditiously to handle disputes and complaints.",
    category: "politics",
    source: "LiveLaw",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "lok-sabha-dpdp-amendment-bill-2026"
  },
  {
    title: "Sufi Music Festival Returns to Nizamuddin Dargah After Three-Year Hiatus",
    description: "The annual Sufi music and qawwali festival at Hazrat Nizamuddin Dargah resumes with performances by legendary qawwals and musicians from across South Asia.",
    content: "After a three-year gap, the iconic Sufi music festival at the Hazrat Nizamuddin Auliya Dargah in Delhi has returned, drawing thousands of music lovers and spiritual seekers.\n\nThe five-day festival features performances by renowned qawwali groups including the Nizami Bandhu, Sabri Brothers, and emerging artists from Pakistan, Bangladesh, and Afghanistan who received special cultural visas.\n\nThe Dargah committee, in collaboration with the Delhi government's cultural wing, has expanded the festival to include Sufi poetry recitations, calligraphy exhibitions, and workshops on the syncretic traditions of South Asian Sufism.\n\nEntry is free and the festival runs from 6 PM to midnight daily. DMRC has arranged additional late-night metro services from JLN Stadium metro station to facilitate the expected crowds.",
    category: "culture",
    source: "The Hindu",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "sufi-music-festival-nizamuddin-dargah-2026"
  },
  {
    title: "Vaishno Devi Shrine Board Introduces AI-Powered Queue Management System",
    description: "The Shri Mata Vaishno Devi Shrine Board launches an AI-driven crowd and queue management system to reduce waiting times and enhance pilgrim safety during peak season.",
    content: "The Shri Mata Vaishno Devi Shrine Board has unveiled an artificial intelligence-powered queue management and crowd monitoring system ahead of the peak pilgrimage season.\n\nThe system uses computer vision cameras at 47 strategic points along the 13-km trekking route to monitor real-time crowd density, predict bottlenecks, and dynamically adjust batch release timings from the base camp at Katra.\n\nPilgrims will now receive real-time updates on estimated wait times via the shrine's mobile app, with the system capable of processing movement data for up to 50,000 pilgrims simultaneously.\n\nThe board's CEO said the technology has been developed in partnership with IIT Delhi and is expected to reduce average darshan waiting times by 40% compared to last year's peak season figures.",
    category: "religion",
    source: "Business Standard",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "vaishno-devi-ai-queue-management-2026"
  },
  {
    title: "Noida Authority Approves ₹2,400 Crore Elevated Road Connecting Greater Noida to Jewar Airport",
    description: "The Noida Authority has approved construction of a 21-km elevated corridor providing direct connectivity between Greater Noida and the upcoming Jewar International Airport.",
    content: "In a major infrastructure boost for the NCR region, the Noida Authority has given final approval for a ₹2,400 crore elevated road project connecting Greater Noida's commercial hub to the upcoming Noida International Airport at Jewar.\n\nThe 21-km six-lane elevated corridor will reduce travel time between the Knowledge Park area and the airport to under 20 minutes, compared to the current estimated 45-minute journey via surface roads.\n\nThe project will be executed in two phases, with the first 12-km stretch expected to be operational before the airport's planned inauguration. Land acquisition for the corridor has already been completed.\n\nReal estate developers in the region have welcomed the announcement, predicting a 15-20% appreciation in property values along the corridor within the next 18 months.",
    category: "breaking",
    source: "Economic Times",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "noida-elevated-road-jewar-airport-2026"
  },
  {
    title: "Delhi Government Launches Free Heritage Walking Tours Covering 15 Mughal-Era Monuments",
    description: "A new initiative by the Delhi Tourism Department offers free guided heritage walks covering lesser-known Mughal, Sultanate, and colonial-era monuments every weekend.",
    content: "The Delhi Tourism Department has launched a series of free heritage walking tours covering 15 lesser-known historical monuments from the Mughal, Sultanate, and British colonial eras.\n\nThe weekend walks, led by trained historians and archaeologists from JNU and Jamia Millia Islamia, cover three curated routes: the Mehrauli Archaeological Park trail, the Purana Qila-Nizamuddin circuit, and the Civil Lines heritage corridor.\n\nEach walk spans approximately 3 hours and includes access to monuments that are typically closed to general visitors, including the Tomb of Balban, Rajon ki Baoli, and the Mutiny Memorial.\n\nRegistration is available through the Delhi Tourism app, with each walk limited to 40 participants to ensure an intimate and educational experience. The programme runs every Saturday and Sunday through September.",
    category: "culture",
    source: "Hindustan Times",
    publishedAt: "2026-04-08T10:00:00.000Z",
    url: "delhi-free-heritage-walking-tours-2026"
  },
];

export const sampleArticles: NewsArticle[] = [...newArticles, ...baseArticles];

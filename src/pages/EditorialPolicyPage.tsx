import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function EditorialPolicyPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Editorial Policy — India News AI</title>
        <meta name="description" content="India News AI's Editorial Policy outlines our fact-checking process, sources policy, and corrections procedures for transparent journalism." />
        <link rel="canonical" href="https://indianewsai.com/editorial-policy" />
      </Helmet>
      <Header currentTime={currentTime} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule" />
            <h1 className="font-display text-2xl md:text-3xl font-black text-center">Editorial Policy</h1>
            <div className="flex-1 h-px bg-rule" />
          </div>
          <p className="text-news-muted text-xs text-center mb-8">Last updated: April 14, 2026</p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">1. Our Commitment</h2>
            <p>India News AI is committed to delivering accurate, fair, and trustworthy news coverage. We combine AI-powered content curation with rigorous editorial oversight to ensure every story meets the highest standards of journalism.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">2. Fact-Checking Process</h2>
            <p>Every article published on India News AI undergoes a multi-step verification process:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Source Verification:</strong> All claims are cross-referenced against at least two credible, independent sources before publication.</li>
              <li><strong>AI-Assisted Analysis:</strong> Our AI tools flag potential inaccuracies, inconsistencies, and unverified claims for human review.</li>
              <li><strong>Editorial Review:</strong> A human editor reviews every article for factual accuracy, context, and balanced presentation before it goes live.</li>
              <li><strong>Ongoing Monitoring:</strong> Published stories are continuously monitored for developments that may require updates or corrections.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">3. Sources Policy</h2>
            <p>We rely on authoritative, verified sources including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Wire Services:</strong> ANI, PTI, and other recognized news agencies</li>
              <li><strong>Established Media:</strong> Zee News, News24, The Tribune, Business Standard, Economic Times, LiveLaw</li>
              <li><strong>Official Sources:</strong> Government press releases, court documents, and official statements</li>
              <li><strong>Domain Experts:</strong> Verified subject-matter experts and credentialed analysts</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> rely on anonymous social media posts, unverified blogs, or single-source rumours as primary sources.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">4. Corrections Policy</h2>
            <p>We take factual accuracy seriously. When errors are identified:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Minor Corrections:</strong> Typos, grammatical errors, and minor factual corrections are updated in-place with a note appended at the bottom of the article.</li>
              <li><strong>Significant Corrections:</strong> Material errors that affect the meaning or context of a story are corrected promptly with a visible correction notice at the top of the article, including the date and nature of the correction.</li>
              <li><strong>Retractions:</strong> In rare cases where an article is found to be fundamentally inaccurate, it will be retracted with a full explanation published in its place.</li>
            </ul>
            <p className="mt-3">To report an error, please contact us at <strong>contact@indianewsai.com</strong> with the article URL and details of the concern.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">5. Independence & Impartiality</h2>
            <p>India News AI maintains full editorial independence. Our reporting is not influenced by advertisers, political entities, or commercial interests. We strive for balanced, non-partisan coverage across all topics.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">6. AI Transparency</h2>
            <p>We believe in transparency about the role of AI in our newsroom:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>AI tools assist in content aggregation, summarisation, and initial draft generation</li>
              <li>All AI-generated content is reviewed, edited, and approved by human editors</li>
              <li>AI is used as a tool to enhance — not replace — human journalism</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">7. Feedback</h2>
            <p>We welcome feedback from our readers. If you have concerns about our coverage, editorial practices, or wish to submit a correction, please reach out to <strong>contact@indianewsai.com</strong>.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

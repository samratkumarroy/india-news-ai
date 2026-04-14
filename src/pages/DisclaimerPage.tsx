import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function DisclaimerPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Disclaimer — India News AI</title>
        <meta name="description" content="Disclaimer for India News AI. Understand the distinction between opinions and facts, and our liability limits." />
        <link rel="canonical" href="https://indianewsai.com/disclaimer" />
      </Helmet>
      <Header currentTime={currentTime} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule" />
            <h1 className="font-display text-2xl md:text-3xl font-black text-center">Disclaimer</h1>
            <div className="flex-1 h-px bg-rule" />
          </div>
          <p className="text-news-muted text-xs text-center mb-8">Last updated: April 14, 2026</p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">1. General Information</h2>
            <p>The information provided on India News AI (<strong>indianewsai.com</strong>) is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">2. Opinions vs. Facts</h2>
            <p>India News AI publishes both factual reporting and opinion-based content:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>News Reports:</strong> Factual articles are based on verified sources and undergo our editorial review process. They aim to present information objectively.</li>
              <li><strong>Analysis & Commentary:</strong> Some articles include analysis, commentary, or expert opinions. These represent the views of the respective authors and do not necessarily reflect the official position of India News AI.</li>
              <li><strong>AI-Generated Summaries:</strong> AI-powered content summaries are generated algorithmically and may not capture every nuance of the original reporting.</li>
            </ul>
            <p className="mt-3">Readers are encouraged to exercise their own judgement and consult multiple sources before forming opinions or making decisions based on our content.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">3. Liability Limits</h2>
            <p>India News AI shall not be held liable for any loss, damage, or inconvenience caused as a result of reliance on information published on this website. This includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Financial losses resulting from acting on news reports or market-related content</li>
              <li>Personal decisions made based on health, legal, or political information</li>
              <li>Technical issues, data loss, or security breaches arising from website usage</li>
              <li>Content accessed through external links from our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">4. No Professional Advice</h2>
            <p>Nothing on this website constitutes legal, financial, medical, or professional advice. Always consult a qualified professional before making decisions based on information found online.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">5. External Links</h2>
            <p>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and accept no responsibility for them.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">6. Contact</h2>
            <p>If you have questions or concerns about this disclaimer, please contact us at <strong>contact@indianewsai.com</strong>.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

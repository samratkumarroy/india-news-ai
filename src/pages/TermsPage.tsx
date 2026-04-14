import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Terms & Conditions — India News AI</title>
        <meta name="description" content="Terms and Conditions for India News AI. Read our usage rules, liability disclaimers, and intellectual property guidelines." />
        <link rel="canonical" href="https://indianewsai.com/terms" />
      </Helmet>
      <Header currentTime={currentTime} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule" />
            <h1 className="font-display text-2xl md:text-3xl font-black text-center">Terms &amp; Conditions</h1>
            <div className="flex-1 h-px bg-rule" />
          </div>
          <p className="text-news-muted text-xs text-center mb-8">Last updated: April 14, 2026</p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">1. Acceptance of Terms</h2>
            <p>By accessing and using India News AI (<strong>indianewsai.com</strong>), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">2. Use of Content</h2>
            <p>All content published on this website — including articles, images, graphics, and AI-generated summaries — is protected by copyright and intellectual property laws. You may:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>View, read, and share articles for personal, non-commercial use</li>
              <li>Quote brief excerpts with proper attribution to India News AI</li>
            </ul>
            <p className="mt-3">You may <strong>not</strong>:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Reproduce, distribute, or republish content without prior written permission</li>
              <li>Use automated tools (scrapers, bots) to extract content at scale</li>
              <li>Modify, adapt, or create derivative works without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">3. User Conduct</h2>
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Engage in any activity that disrupts or interferes with the website's functionality</li>
              <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>Transmit any malicious code, viruses, or harmful data</li>
              <li>Use the website for any unlawful or fraudulent purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">4. Disclaimer of Warranties</h2>
            <p>India News AI provides content on an <strong>"as is"</strong> and <strong>"as available"</strong> basis. We make no warranties, express or implied, regarding:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The accuracy, completeness, or timeliness of any content</li>
              <li>Uninterrupted or error-free operation of the website</li>
              <li>The suitability of information for any particular purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, India News AI, its owners, editors, and contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your use of or inability to use the website</li>
              <li>Any errors, inaccuracies, or omissions in content</li>
              <li>Actions taken based on information published on the website</li>
              <li>Unauthorized access to your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content or practices of any third-party site.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">7. AI-Generated Content</h2>
            <p>Some content on India News AI is generated or enhanced using artificial intelligence tools. While we strive for accuracy, AI-generated content may occasionally contain errors. All AI-assisted articles are reviewed by our editorial team before publication.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">8. Modifications</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time without prior notice. Changes become effective upon posting. Continued use of the website constitutes acceptance of the modified terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">9. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">10. Contact</h2>
            <p>For questions regarding these Terms, contact us at <strong>contact@indianewsai.com</strong>.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

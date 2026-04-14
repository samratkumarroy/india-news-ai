import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Privacy Policy — India News AI</title>
        <meta name="description" content="Privacy Policy for India News AI. Learn about our data collection, cookies, and user tracking practices." />
        <link rel="canonical" href="https://indianewsai.com/privacy-policy" />
      </Helmet>
      <Header currentTime={currentTime} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        <article className="prose prose-neutral max-w-none">
          <div className="flex items-center gap-3 mb-6" role="separator">
            <div className="flex-1 h-px bg-rule" />
            <h1 className="font-display text-2xl md:text-3xl font-black text-center">Privacy Policy</h1>
            <div className="flex-1 h-px bg-rule" />
          </div>
          <p className="text-news-muted text-xs text-center mb-8">Last updated: April 14, 2026</p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">1. Introduction</h2>
            <p>India News AI ("we", "our", or "us") operates the website <strong>indianewsai.com</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. By accessing the site, you agree to the terms outlined in this policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">2. Data Collection</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Personal Information:</strong> Name and email address when you voluntarily submit them via our Contact Us form.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, operating system, referring URLs, pages viewed, time spent on pages, and other diagnostic data collected automatically.</li>
              <li><strong>Device Information:</strong> IP address, device type, screen resolution, and language preferences.</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> collect sensitive personal data such as financial details, health records, or government-issued identification numbers.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">3. Cookies & Tracking Technologies</h2>
            <p>Our website uses cookies and similar tracking technologies to enhance your experience:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality such as page navigation and access to secure areas.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website (e.g., Google Analytics). These collect anonymized data about page views, traffic sources, and user behaviour.</li>
              <li><strong>Advertising Cookies:</strong> Used by third-party advertising networks (e.g., Google AdSense) to serve personalised advertisements based on your browsing interests.</li>
            </ul>
            <p className="mt-3">You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">4. User Tracking</h2>
            <p>We use third-party analytics services to monitor and analyse web traffic. These services may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Google Analytics:</strong> Tracks page views, session duration, bounce rate, and geographic location (anonymized).</li>
              <li><strong>Google AdSense:</strong> May use cookies to serve ads based on your prior visits to this or other websites.</li>
            </ul>
            <p className="mt-3">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except as described in this policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">5. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies independently.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information, including HTTPS encryption, secure servers, and restricted access controls. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">7. Children's Privacy</h2>
            <p>Our website is not directed at individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 13, we will take steps to delete it promptly.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <strong>contact@indianewsai.com</strong>.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold mb-3 text-saffron">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <strong>contact@indianewsai.com</strong>.</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

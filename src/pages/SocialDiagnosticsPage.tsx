import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Loader2, AlertCircle, CheckCircle2, ExternalLink, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface MetaResult {
  url: string;
  finalUrl: string;
  status: number;
  fetchedAt: string;
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  themeColor?: string;
  og: Record<string, string>;
  twitter: Record<string, string>;
  warnings: string[];
}

const SUPABASE_URL = "https://copqnzarlbskubaemxux.supabase.co";

export default function SocialDiagnosticsPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MetaResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runDiagnostics = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const res = await fetch(`${SUPABASE_URL}/functions/v1/og-inspect`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
        },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to inspect URL");
      setResult(data as MetaResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const renderTagRow = (key: string, value: string) => (
    <div key={key} className="grid grid-cols-[140px_1fr] gap-3 py-2 border-b border-rule last:border-0 text-sm">
      <span className="font-mono text-xs text-news-muted">{key}</span>
      <span className="break-all font-serif">{value}</span>
    </div>
  );

  const renderImage = (src?: string) => {
    if (!src) return null;
    return (
      <div className="mt-3 border border-rule rounded-sm overflow-hidden bg-paper-dark">
        <img src={src} alt="Preview" className="max-h-64 w-auto mx-auto" loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Social Sharing Diagnostics | India News AI</title>
        <meta name="description" content="Inspect Open Graph and Twitter card meta tags for any article URL." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Header currentTime={new Date()} />

      <main className="max-w-4xl mx-auto px-3 sm:px-4 py-6 flex-1 w-full">
        <div className="mb-6">
          <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Social Sharing Diagnostics</h1>
          <p className="text-sm text-news-muted">
            Fetch and parse Open Graph & Twitter card meta tags to preview how a URL will appear on Instagram, X, Facebook, and LinkedIn.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={runDiagnostics} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="url"
                placeholder="https://indianewsai.com/article/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={loading || !url.trim()} className="min-h-[40px]">
                {loading ? <><Loader2 className="animate-spin" /> Inspecting...</> : <><Search /> Inspect</>}
              </Button>
            </form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  Fetch Result
                  <span className={`text-xs px-2 py-0.5 rounded-sm ${result.status >= 200 && result.status < 300 ? "bg-green-100 text-green-800" : "bg-destructive/10 text-destructive"}`}>
                    {result.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <div className="flex items-start gap-2 break-all">
                  <span className="text-news-muted shrink-0">Final URL:</span>
                  <a href={result.finalUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    {result.finalUrl} <ExternalLink size={12} />
                  </a>
                </div>
                <div><span className="text-news-muted">Fetched:</span> {new Date(result.fetchedAt).toLocaleString()}</div>
              </CardContent>
            </Card>

            {result.warnings.length > 0 ? (
              <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>{result.warnings.length} issue{result.warnings.length > 1 ? "s" : ""} found</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {result.warnings.map((w, i) => <li key={i}>{w}</li>)}
                  </ul>
                </AlertDescription>
              </Alert>
            ) : (
              <Alert>
                <CheckCircle2 />
                <AlertTitle>All essential tags present</AlertTitle>
                <AlertDescription>This URL is ready for social sharing.</AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader><CardTitle className="text-base">General</CardTitle></CardHeader>
              <CardContent>
                {result.title && renderTagRow("title", result.title)}
                {result.description && renderTagRow("description", result.description)}
                {result.canonical && renderTagRow("canonical", result.canonical)}
                {result.robots && renderTagRow("robots", result.robots)}
                {result.themeColor && renderTagRow("theme-color", result.themeColor)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Open Graph (Facebook, Instagram, LinkedIn)</CardTitle></CardHeader>
              <CardContent>
                {Object.keys(result.og).length === 0 ? (
                  <p className="text-sm text-news-muted">No og:* tags found.</p>
                ) : (
                  <>
                    {Object.entries(result.og).map(([k, v]) => renderTagRow(`og:${k}`, v))}
                    {renderImage(result.og.image)}
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Twitter / X Card</CardTitle></CardHeader>
              <CardContent>
                {Object.keys(result.twitter).length === 0 ? (
                  <p className="text-sm text-news-muted">No twitter:* tags found.</p>
                ) : (
                  <>
                    {Object.entries(result.twitter).map(([k, v]) => renderTagRow(`twitter:${k}`, v))}
                    {renderImage(result.twitter.image)}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

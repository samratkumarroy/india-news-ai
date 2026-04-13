import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);

    const subject = encodeURIComponent(form.subject || "Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@indianewsai.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      toast({ title: "Email client opened!", description: "Please send the email from your mail app." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us — India News AI</title>
        <meta name="description" content="Get in touch with India News AI. Send us your news tips, feedback, or partnership inquiries." />
        <link rel="canonical" href="https://indianewsai.com/contact-us" />
      </Helmet>

      <Header currentTime={new Date()} />

      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <h1 className="font-display text-3xl md:text-4xl font-black text-foreground text-center mb-2">
            Contact <span className="text-saffron">Us</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
            Have a news tip, feedback, or partnership inquiry? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Mail, label: "Email", value: "contact@indianewsai.com" },
              { icon: MapPin, label: "Location", value: "Delhi NCR, India" },
              { icon: Phone, label: "Response", value: "Within 24 hours" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center text-center p-5 rounded-xl border border-border bg-card">
                <Icon className="w-6 h-6 text-saffron mb-2" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</span>
                <span className="text-sm font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground mb-1 block">Name *</label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" maxLength={100} required />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground mb-1 block">Email *</label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" maxLength={255} required />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-xs font-medium text-muted-foreground mb-1 block">Subject</label>
              <Input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" maxLength={200} />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground mb-1 block">Message *</label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={5} maxLength={2000} required />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-saffron hover:bg-saffron/90 text-foreground font-semibold">
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Opening mail client..." : "Send Message"}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

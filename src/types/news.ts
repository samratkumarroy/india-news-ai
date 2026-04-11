export interface NewsArticle {
  title: string;
  description: string;
  content?: string;
  category: "breaking" | "religion" | "politics" | "culture" | "weather" | "health" | "technology" | "fashion" | "entertainment" | "world";
  source: string;
  publishedAt: string;
  url: string;
  pinned?: boolean;
  image?: string;
  gallery?: string[];
}

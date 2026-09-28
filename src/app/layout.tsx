import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const sans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santos Collection — Women's Boutique in Surulere, Lagos",
  description:
    "A curated women's fashion boutique in Surulere, Lagos. Occasionwear, everyday classics and gifting, with same-day delivery across Lagos, often in about 45 minutes.",
  openGraph: {
    title: "Santos Collection — Surulere, Lagos",
    description: "Curated occasionwear, everyday classics and gifts. Same-day delivery across Lagos.",
    images: ["/images/emerald-gown.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EFE4" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1713" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

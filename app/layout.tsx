import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Ilona Frederiks | Styling, verkoop & performance";
const description =
  "Portfolio en cv van Ilona Frederiks, allround professional in styling, verkoop en performance in Zwolle. Bekijk haar werk, ervaring en beschikbaarheid.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilonafrederiks.nl"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Ilona Frederiks" }],
  openGraph: {
    type: "profile",
    locale: "nl_NL",
    url: "/",
    title,
    description,
    siteName: "Ilona Frederiks",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ilona Frederiks — styling, verkoop en performance in Zwolle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f0e7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

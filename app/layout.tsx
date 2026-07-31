import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Ilona Frederiks | Verkoopmedewerker mode, klantadvies & styling";
const description =
  "Maak kennis met Ilona Frederiks: verkoopmedewerker mode met ervaring in persoonlijk klantadvies, styling en winkelpresentatie. Beschikbaar voor 16–24 uur per week in Zwolle en omgeving.";

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
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ilona Frederiks — verkoopmedewerker mode, klantadvies en styling in Zwolle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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

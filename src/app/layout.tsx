import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilonafrederiks.nl"),
  title: "Ilona Frederiks | CV",
  description:
    "CV van Ilona Frederiks uit Zwolle: een sociale en creatieve professional met ervaring in verkoop, styling, gastvrijheid en dans.",
  applicationName: "Ilona Frederiks",
  openGraph: {
    title: "Ilona Frederiks | CV",
    description:
      "Sociale en creatieve professional met ervaring in verkoop, styling, gastvrijheid en dans.",
    type: "profile",
    locale: "nl_NL",
    siteName: "Ilona Frederiks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3ece2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

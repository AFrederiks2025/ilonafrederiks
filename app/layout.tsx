import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const forwardedProto = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProto ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Ilona Frederiks | Styling, verkoop & dans";
  const description =
    "Het online CV van Ilona Frederiks: een enthousiaste, sociale en creatieve professional uit Zwolle met ervaring in styling, verkoop, gastvrijheid en dans.";

  return {
    metadataBase,
    title,
    description,
    openGraph: {
      type: "profile",
      locale: "nl_NL",
      url: metadataBase,
      title,
      description,
      siteName: "Ilona Frederiks",
      images: [
        {
          url: new URL("/og.png", metadataBase).toString(),
          width: 1200,
          height: 630,
          alt: "Ilona Frederiks — styling, verkoop, gastvrijheid en dans",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", metadataBase).toString()],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

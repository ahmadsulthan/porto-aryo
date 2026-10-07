import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://porto-aryo.vercel.app"),

  title: "Aryo Anargya Hakim Putra | Researcher",
  description:
    "Sociology Education Graduate, Researcher, Educator, and Community Leader.",

  keywords: [
    "Aryo Anargya",
    "Researcher",
    "Sociology",
    "Education",
    "Community Leader",
    "Portfolio",
  ],

  authors: [
    {
      name: "Aryo Anargya Hakim Putra",
    },
  ],

  creator: "Aryo Anargya Hakim Putra",

  openGraph: {
    title: "Aryo Anargya Hakim Putra | Researcher",
    description:
      "Researcher, Educator, and Community Leader dedicated to educational development, social research, and community empowerment.",
    url: "https://porto-aryo.vercel.app",
    siteName: "Aryo Anargya Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryo Anargya Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryo Anargya Hakim Putra | Researcher",
    description:
      "Researcher, Educator, and Community Leader dedicated to educational development, social research, and community empowerment.",
    images: ["images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

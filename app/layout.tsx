import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryo Anargya Hakim Putra | Researcher",

  description:
    "Sociology Education Graduate, Researcher, Educator and Community Leader",

  keywords: ["Researcher", "Sociology", "Education", "Community Leader"],

  openGraph: {
    title: "Aryo Anargya Hakim Putra | Researcher",

    description: "Researcher, Educator and Community Leader",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aryo Anargya Hakim Putra | Researcher",

    description: "Researcher, Educator and Community Leader",
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

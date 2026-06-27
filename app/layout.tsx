import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jacquesepangue.com"),

  title: {
    default: "Jacques Epangue",
    template: "%s | Jacques Epangue",
  },

  description:
    "International Trade Strategist specializing in Food & Beverage Market Expansion, helping French culinary brands succeed in North America.",

  keywords: [
    "Jacques Epangue",
    "International Trade",
    "Food Export",
    "Food & Beverage",
    "Market Expansion",
    "North America",
    "France",
    "B2B Development",
    "Trade Strategy",
    "Consulting",
  ],

  authors: [
    {
      name: "Jacques Epangue",
    },
  ],

  creator: "Jacques Epangue",

  applicationName: "Jacques Epangue",

  openGraph: {
    title: "Jacques Epangue",
    description:
      "Consulting for Culinary Excellence. Helping French food producers and culinary brands expand successfully into North American markets.",
    url: "https://jacquesepangue.com",
    siteName: "Jacques Epangue",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Jacques Epangue",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jacques Epangue",
    description:
      "Consulting for Culinary Excellence. Strategic market expansion for French food brands entering North America.",
    images: ["/logo512.png"],
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon.png"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    
    other: [
      {
        rel: "icon",
        url: "/logo192.png",
      },
      {
        rel: "icon",
        url: "/logo512.png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
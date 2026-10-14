import WhatsAppButton from "@/components/whatsapp-button";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ridetheatlas.com"),

  title: {
    default: "Ride The Atlas — By Ski. By Bike.",
    template: "%s — Ride The Atlas",
  },

  description:
    "Ski touring and mountain biking adventures across the Moroccan Atlas.",

  applicationName: "Ride The Atlas",

  openGraph: {
    title: "Ride The Atlas — By Ski. By Bike.",
    description:
      "Ski touring and mountain biking adventures across the Moroccan Atlas.",
    url: "https://ridetheatlas.com",
    siteName: "Ride The Atlas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/general/ride-the-atlas-bike-ski-high-atlas.jpeg",
        alt: "Ride The Atlas — mountain biking and ski touring in Morocco",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ride The Atlas — By Ski. By Bike.",
    description:
      "Ski touring and mountain biking adventures across the Moroccan Atlas.",
    images: [
      "/images/general/ride-the-atlas-bike-ski-high-atlas.jpeg",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
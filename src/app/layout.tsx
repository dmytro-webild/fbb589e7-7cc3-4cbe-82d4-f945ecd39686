import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexCart - Trending Gadgets & Viral Products",
  description: "Shop trending gadgets, lifestyle products, and viral items at unbeatable prices. Fast shipping, secure checkout, 100% satisfaction guarantee. Join 500K+ happy customers.",
  keywords: "trending gadgets, viral products, online shopping, Gen Z store, tech accessories",
  metadataBase: new URL("https://nexcart.com"),
  alternates: {
    canonical: "https://nexcart.com",
  },
  openGraph: {
    title: "NexCart - Smart Shopping Starts Here",
    description: "Discover trending gadgets and viral items curated for Gen Z. Fast shipping, secure payment, unbeatable prices.",
    url: "https://nexcart.com",
    siteName: "NexCart",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072174.jpg",
        alt: "NexCart - Trending Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexCart - Trending Gadgets",
    description: "Shop trending gadgets and viral items with fast shipping and secure checkout.",
    images: ["http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072174.jpg"],
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
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
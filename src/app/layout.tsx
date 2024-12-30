import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import ActiveSection from "@/context/activeSection";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/site";
import Script from "next/script";


export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nardos Teshome",
    "Nardos portfolio",
    "UI/UX Designer in Ethiopia",
    "Figma developer in Ethiopia",
    "Website designer",
    "Mobile app designer in Ethiopia",
    "Mobile app and website designer",
  ],
  authors: [
    {
      name: "Nardos Teshome",
      url: siteConfig.url,
    },
  ],
  creator: "Nardos Teshome",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/default-og-image.png`, // Default image
        width: 1200,
        height: 630,
        alt: "Nardos Teshome Portfolio Preview",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Script
        src="https://datafa.st/js/script.js"
        data-website-id="6722a5915dec9a6cf3c88dd1"
        data-domain=""
        strategy="afterInteractive"
        defer
      />
      <body className="bg-gray-50 min-h-screen">
        <Toaster position='top-center'/>
        <ActiveSection>
          <Header />
          {children}
          <Footer />
        </ActiveSection>
      </body>
    </html>
  );
}

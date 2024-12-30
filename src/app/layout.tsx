import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
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
    "Ui/Ux Designer in Ethiopia",
    "figma developer in Ethiopia",
    "website designer",
    "mobile app designer in Ethiopia",
    "mobile app and website designer"
  ],
  authors: [
    {
      name: "Nardos Teshome",
      url: siteConfig.url,
    },
  ],
  creator: "Yabibal Eshetie",
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
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

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

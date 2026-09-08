import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BubbleBackground from "@/components/BubbleBackground";
import PageTransition from "@/components/PageTransition";

const BASE_URL = "https://susmito-portfolio.vercel.app";
const SITE_TITLE = "Susmito — Founder of TAISU";
const SITE_DESCRIPTION =
  "Susmito is the founder of TAISU, building real software solo from Faridpur, Bangladesh — starting with AEON SHIELD, a Pygame space shooter built entirely on an Android phone.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Susmito",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Susmito",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const personAndWebsiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Susmito",
      jobTitle: "Founder & CEO",
      worksFor: {
        "@type": "Organization",
        name: "TAISU",
        url: BASE_URL,
      },
      url: BASE_URL,
      image: `${BASE_URL}/me.jpg`,
      sameAs: ["https://github.com/susmito-d", "https://www.linkedin.com/in/susmitodatta/"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Susmito — Portfolio",
      url: BASE_URL,
      author: { "@id": `${BASE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personAndWebsiteJsonLd) }}
        />
        <ThemeProvider>
          <BubbleBackground />
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative", zIndex: 1 }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

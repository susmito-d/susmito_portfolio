import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BubbleBackground from "@/components/BubbleBackground";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Susmito",
  description: "Founder of TAISU — building real software, solo, from Faridpur, Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}

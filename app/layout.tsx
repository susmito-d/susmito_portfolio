import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Susmito",
  description: "Founder of TAISU — building real software, solo, from Faridpur, Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ minHeight: "60vh" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

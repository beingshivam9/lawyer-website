import WhatsappFloat from "@/components/WhatsappFloat"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

/* FONTS */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

/* META */
export const metadata: Metadata = {
  title: "Lawyer Portfolio",
  description: "Professional Lawyer Website",
};

/* LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      {/* ✅ Added padding bottom so footer + navbar don’t overlap */}
      <body className={`${inter.className} min-h-screen pb-20`}>

        {children}

        {/* ✅ FOOTER CREDIT */}
        <footer className="bg-[#0B1C2C] text-center text-[11px] text-gray-400 py-3">
          © {new Date().getFullYear()}{" "}
          <a href="https://plasma-studios.web.app/" className="text-yellow-400">
  Plasma Studios Pvt Ltd
</a>. All rights reserved.
        </footer>

        {/* ✅ GLOBAL NAVBAR */}
        <BottomNav />
<WhatsappFloat />

      </body>
    </html>
  );
}
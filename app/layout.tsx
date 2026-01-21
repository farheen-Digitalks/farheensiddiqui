import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNavbar from "@/components/SideNav";
import { ThemeProvider } from "next-themes";
import { SectionProvider } from "./components/SectionContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farheen Siddiqui",
  description:
    "Portfolio of Farheen Siddiqui - Full Stack Developer specializing in building robust web applications and backend systems.",
  icons: {
    icon: '/favicon.jpeg', // or "/logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // layout.tsx
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-[rgb(var(--bg))] text-[rgb(var(--text))]"
          >
            {/* style={{ backgroundImage: "url('/images/mycover.jpeg')" }} */}
            
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SectionProvider>
            <SideNavbar />
            <main className="relative z-0 pt-10 pb-16">{children}</main>
          </SectionProvider>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AuthListener from "./components/authlistener";
import {Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Perú",
  description: "Landing Page Oficial de Blue Perú",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
    
  return (
     <html lang="en" className="h-full antialiased">
      <body>
          <Toaster
  richColors
  position="top-right"
/>
          <ClientWrapper>
            
            <AuthListener />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientWrapper>
      </body>
    </html>
  );
}

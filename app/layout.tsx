import type { Metadata } from "next";
import "./styles/globals.css";
import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


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
         
          <ClientWrapper>
            
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./styles/globals.css";
import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "Blue Perú",
  description:
    "Blue Perú: plataforma de colaboración ciudadana para reportes y alertas tempranas. Explora zonas de riesgo y ayuda a proteger tu comunidad.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "96x96" }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
    
  return (
     <html lang="es-PE" className="h-full antialiased">
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

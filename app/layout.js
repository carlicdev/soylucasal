import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
 })

export const metadata = {
  title: "soylucasal",
  description: "Plataforma de Autor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeContextProvider>
          <Navbar/>
            {children}
          <ScrollUp />
          <Footer />
        </ThemeContextProvider>
        </body>
    </html>
  );
}

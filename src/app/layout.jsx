import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar.jsx/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import CartProvider from "@/Provider/CartProvider/CartProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bazar Zone",
  description: "Shopping, Clothing, Shoes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-3 xl:mx-auto bg-[color:var(--bg-primary)] text-[color:var(--text-prmary)] text-xs md:text-sm lg:text-base">
            {children}
          </main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

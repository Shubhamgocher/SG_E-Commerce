import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import CartProvider from "@/provider/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SG-E-Mart",
  description: "Ecommrce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

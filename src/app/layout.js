import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Cart } from "@/components/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diquesi Flowers",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="fixed right-5 z-50 bottom-10   mt-5 ">
        <Cart />
      </div>
        {children }
      </body>
    </html>
  );
}

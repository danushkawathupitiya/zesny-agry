import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zensy Ceylon",
  description: "Zensy Ceylon web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full flex justify-center bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 py-4 shadow-lg mb-8">
          <ul className="flex gap-8 text-white font-bold text-lg">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Our Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

import Link from 'next/link';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JWT use Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <div className="container mx-auto flex max-w-7xl items-center justify-end p-4 md:px-6">
          <div className="items-center space-x-4 md:flex">
            <Link
              className="rounded-md border px-4 py-1.5 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white"
              href="/login"
            >
              登入
            </Link>
          </div>
        </div>
        {/* Main */}
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}

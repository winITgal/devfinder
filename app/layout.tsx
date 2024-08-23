import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devfinder",
  description: "Find developers worldwide on GitHub!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} flex items-center justify-center min-h-[80vh] py-8 bg-[#F6F8FF] dark:bg-[#141D2F] font-mono`}>
        <Providers>
          <main className="w-full max-w-2xl p-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
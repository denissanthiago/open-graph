import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Example OG",
  description: "Generated by create next app",
  metadataBase: new URL("https://uk-communication-warrior-jump.trycloudflare.com"),
  openGraph: {
    title: 'Open graph title',
    description: 'Open graph description'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

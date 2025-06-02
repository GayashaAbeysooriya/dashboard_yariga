import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Yariga-style dashboard",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Script
          src="https://accounts.google.com/gsi/client?hl=en"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}

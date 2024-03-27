// Deafult layout for APP
// Need to update info about title and description for production

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "It's well",
  description: "It's well - Descripción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden ${inter.className}">{children}</body>
    </html>
  );
}

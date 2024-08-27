import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./api/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next & Material UI Data Dashboard",
  description: "Created with Next.js & MUI css-library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

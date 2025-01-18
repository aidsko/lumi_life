import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const adonisSerif = localFont({
  src: [
    {
      path: "./fonts/AdonisRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AdonisBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-adonis-serif",
});

export const metadata: Metadata = {
  title: "Lumi Life Therapy",
  description: "Lumi Life Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${adonisSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}

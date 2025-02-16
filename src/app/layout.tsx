import type { Metadata } from "next";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "adTask",
  description:
    "Boost your business with adTask! Our AI assistant analyzes your needs, crafts personalized marketing strategies, and helps you execute them in real-time for better results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}

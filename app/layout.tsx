import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumivault | Secure AI knowledge storage",
  description:
    "Lumivault turns scattered company knowledge into a secure AI-powered vault with instant, permission-aware answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fbfbfc] text-zinc-950">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

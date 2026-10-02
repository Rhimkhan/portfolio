import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { ChatBot } from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "Rhim Khan | Portfolio",
  description: "Personal portfolio of R him Khan — AI/ML Student & Full Stack Developer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Fragment+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#2563eb] selection:text-white">
        <ThemeProvider>
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}

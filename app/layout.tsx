import type { Metadata, Viewport } from "next";
import { Albert_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { ChatBot } from "@/components/ChatBot";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-albert-sans",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhimkhan.vercel.app"),
  title: "Rhim Khan | AI/ML Engineer & Full Stack Developer",
  description:
    "Personal portfolio of Rhim Khan — AI/ML Engineer and Full Stack Developer specializing in Computer Vision, NLP, and modern web applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Rhim Khan | AI/ML Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Rhim Khan — AI/ML Engineer and Full Stack Developer specializing in Computer Vision, NLP, and modern web applications.",
    url: "https://rhimkhan.vercel.app",
    siteName: "Rhim Khan Portfolio",
    images: [
      {
        url: "/images/hero/reveal-desktop.png",
        width: 1200,
        height: 630,
        alt: "Rhim Khan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhim Khan | AI/ML Engineer & Full Stack Developer",
    description:
      "Personal portfolio of Rhim Khan — AI/ML Engineer and Full Stack Developer specializing in Computer Vision, NLP, and modern web applications.",
    images: ["/images/hero/reveal-desktop.png"],
  },
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body
        className={`${albertSans.variable} ${fragmentMono.variable} antialiased selection:bg-[#2563eb] selection:text-white`}
      >
        <ThemeProvider>
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://nirmalyamandal.me"
      : "http://localhost:3000"
  ),
  // Default metadata that can be overridden by pages
  title: {
    template: "%s | Nirmalya Mandal",
    default: "Nirmalya Mandal - Full-Stack Developer & Researcher",
  },
  description:
    "Nirmalya Mandal is a passionate full-stack developer and researcher specializing in React, Node.js, AI/ML, and DevOps. Explore 50+ innovative projects and 12+ months of professional development experience.",
  keywords: [
    "Nirmalya Mandal",
    "portfolio",
    "full-stack developer",
    "web developer",
    "react developer",
    "nodejs developer",
    "typescript",
    "nextjs",
    "AI/ML",
    "DevOps",
    "cloud computing",
    "software engineer",
    "computer science",
    "web development",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Nirmalya Mandal", url: "https://nirmalyamandal.me" }],
  creator: "Nirmalya Mandal",
  publisher: "Nirmalya Mandal",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NM Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
  openGraph: {
    type: "website",
    siteName: "Nirmalya Mandal Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Nirmalya Mandal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Nirmalya2709",
    creator: "@Nirmalya2709",
    images: ["/android-chrome-512x512.png"],
  },
  // Remove canonical from layout - let pages handle their own canonical URLs
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource Hints - Only for truly critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* PWA Meta Tags */}
        <meta name="application-name" content="NM Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NM Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const getSystemTheme = () =>
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                const savedTheme = localStorage.getItem("theme");
                const theme =
                  savedTheme && ["light", "dark", "system"].includes(savedTheme)
                    ? savedTheme
                    : "system";
                const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

                document.documentElement.classList.add(resolvedTheme);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PerformanceOptimizer />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

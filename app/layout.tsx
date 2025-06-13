import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google" // Import Outfit font
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "./components/navigation"


// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans", // if you want to use it as a CSS variable
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lovio.me'),
  title: {
    default: "Lovio - Log with Love",
    template: "%s | Lovio"
  },
  description:
    "Lovio captures feedings, sleep, and diapers the moment you say them—so you can stay hands-free and heart-full.",
  keywords: ["baby tracking", "parenting app", "voice logging", "baby care", "feeding tracker", "sleep tracker"],
  authors: [{ name: "Lovio Team" }],
  creator: "Lovio",
  publisher: "Lovio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lovio.me",
    title: "Lovio - Log with Love",
    description: "Lovio captures feedings, sleep, and diapers the moment you say them—so you can stay hands-free and heart-full.",
    siteName: "Lovio",
    images: [
      {
        url: "/lovio-icon.png",
        width: 1200,
        height: 630,
        alt: "Lovio - Voice-powered baby tracking app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovio - Log with Love",
    description: "Lovio captures feedings, sleep, and diapers the moment you say them—so you can stay hands-free and heart-full.",
    images: ["/lovio-icon.png"],
    creator: "@lovio",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.className, // Apply Outfit class to body
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

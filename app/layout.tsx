import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google" // Import Outfit font
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"


// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans", // if you want to use it as a CSS variable
})

export const metadata: Metadata = {
  title: "Lovio - Log with Love",
  description:
    "Lovio captures feedings, sleep, and diapers the moment you say them—so you can stay hands-free and heart-full.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

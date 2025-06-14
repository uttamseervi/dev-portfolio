import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Spotlight } from "@/components/ui/spotlight"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uttam Seervi | Developer Portfolio",
  description: "Personal portfolio of Uttam Seervi, Full-stack Developer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Spotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

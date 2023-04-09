import "@/styles/globals.css"
import "@/styles/mdx.css"
import type { AppProps } from "next/app"
import { DM_Mono, Fraunces, IBM_Plex_Mono, Quicksand } from "next/font/google"
import Head from "next/head"
import { clsx } from "clsx"
import { ThemeProvider } from "next-themes"

import { cn } from "@/lib/utils"

const quicksandFont = Quicksand({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--body-font",
  display: "swap",
})

const DMMonoFont = IBM_Plex_Mono({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--mono-font",
  display: "swap",
})

const frauncesFont = Fraunces({
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--heading-font",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cn(
        frauncesFont.variable,
        DMMonoFont.variable,
        quicksandFont.variable,
        quicksandFont.className
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}

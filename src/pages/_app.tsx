import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google"
import { clsx } from "clsx"

const DMSansFont = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--body-font",
  display: "swap",
})

const DMMonoFont = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--mono-font",
  display: "swap",
})

const frauncesFont = Fraunces({
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--heading-font",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  console.log(DMMonoFont)
  return (
    <main
      className={`
        ${DMMonoFont.variable}
        ${frauncesFont.variable}
        ${DMSansFont.variable}`}
    >
      <Component {...pageProps} />
    </main>
  )
}

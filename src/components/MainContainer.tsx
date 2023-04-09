import { PropsWithChildren } from "react"
import Head from "next/head"
import { useTheme } from "next-themes"
import colors from "tailwindcss/colors"

import { site } from "@/lib/constants"
import { ThemeToggle } from "./ThemeToggle"
import { NavBar } from "./ui/NavBar"

export const MainContainer = ({
  children,
  showNav = true,
}: PropsWithChildren<{ showNav?: boolean }>) => {
  const { theme } = useTheme()

  return (
    <main className="relative p-4 sm:container sm:mx-auto lg:max-w-[70em]">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="25x25"
          href={theme !== "dark" ? "/favicon-light.png" : "/favicon-dark.png"}
        />
        <title>roundedcorner • tk</title>
        <meta charSet="utf-8" />
        <meta property="og:image" content={`${site.url}/og.jpg`} />
        <meta
          name="theme-color"
          key="theme-color"
          content={theme === "light" ? colors.zinc[100] : colors.zinc[900]}
        />
        <meta
          name="description"
          // content="interactive blogs, writeups, random thoughts and explorable explanations by vishal tk"
          content="coming soon..."
          key="description"
        />
        <meta property="og:title" content="roundedcorner • tk" key="title" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="roundedcorner • tk" />
        <meta
          name="twitter:description"
          content="coming soon..."
          // content="interactive blogs, writeups, random thoughts and explorable explanations"
        />
        <meta
          name="keywords"
          content="learning, education, tutorial, web development, interactive, visualisation, react, javascript"
        />
        <meta name="author" content="vishal tk" />
        <meta
          name="twitter:creator"
          content="https://twitter.com/tk_vishal_tk"
        />
      </Head>
      {!showNav && <NavBar />}
      {children}
    </main>
  )
}

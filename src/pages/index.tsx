import Head from "next/head"
import Image from "next/image"
import { HomePage } from "@/views/HomePage"
import { useTheme } from "next-themes"

import { Logo } from "@/components/Logo"
import { MainContainer } from "@/components/MainContainer"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <MainContainer>
      <HomePage />
    </MainContainer>
  )
}

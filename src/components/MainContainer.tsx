import { PropsWithChildren } from "react"

import { ThemeToggle } from "./ThemeToggle"
import { NavBar } from "./ui/NavBar"

export const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative p-4 sm:container sm:mx-auto lg:max-w-[70em]">
      <NavBar />
      {children}
    </main>
  )
}

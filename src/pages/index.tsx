import { useRef } from "react"
import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"
import { useSize } from "@chakra-ui/react-use-size"
import { useTheme } from "next-themes"
import colors from "tailwindcss/colors"

import { Logo } from "@/components/Logo"
import { MainContainer } from "@/components/MainContainer"
import { Button } from "@/components/ui/Button"
import { NavBar } from "@/components/ui/NavBar"

const FlowField = dynamic(
  // @ts-ignore
  () => import("@/components/FlowField").then((mod) => mod.FlowField),
  { ssr: false }
)

export default function Home() {
  const flowFieldRef = useRef<HTMLDivElement>(null)
  const flowFieldDimensions = useSize(flowFieldRef)

  const { theme } = useTheme()

  return (
    <>
      <main className="mx-auto w-full max-w-[1024px] p-4">
        <NavBar />
        <section
          className="relative mx-auto my-6 h-44 w-full max-w-[1024px] rounded-2xl bg-transparent md:h-52"
          ref={flowFieldRef}
        >
          {flowFieldDimensions && (
            <>
              <FlowField
                // @ts-ignore
                className="h-full w-full overflow-hidden rounded-2xl"
                width={flowFieldDimensions.width}
                height={flowFieldDimensions.height}
                bgColor={theme === "dark" ? colors.zinc[50] : colors.zinc[900]}
                fgColor={
                  theme === "dark"
                    ? colors.zinc[900] + "33"
                    : colors.zinc[50] + "33"
                }
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
                <Logo theme={theme === "dark" ? "light" : "dark"} />
              </div>
            </>
          )}

          <p className="mt-2 text-right text-base text-zinc-400">
            by vishal tk
          </p>
        </section>
      </main>
    </>
  )
}

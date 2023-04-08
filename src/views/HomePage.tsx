import { useRef } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useSize } from "@chakra-ui/react-use-size"
import { useScroll } from "framer-motion"
import { useTheme } from "next-themes"
import colors from "tailwindcss/colors"

import { socials } from "@/lib/constants"
import { Logo } from "@/components/Logo"

const FlowField = dynamic(
  // @ts-ignore
  () => import("@/components/FlowField").then((mod) => mod.FlowField),
  { ssr: false }
)

export const HomePage = () => {
  const flowFieldRef = useRef<HTMLDivElement>(null)
  const flowFieldDimensions = useSize(flowFieldRef)

  const { setTheme, theme } = useTheme()

  return (
    <>
      <section
        className="relative my-6 h-44 w-full rounded-2xl bg-transparent md:h-52"
        ref={flowFieldRef}
      >
        {flowFieldDimensions && (
          <FlowField
            // @ts-ignore
            className="h-full w-full overflow-hidden rounded-2xl"
            width={flowFieldDimensions.width}
            height={flowFieldDimensions.height}
            bgColor={theme === "dark" ? colors.zinc[100] : colors.zinc[900]}
            fgColor={
              theme === "dark"
                ? colors.zinc[900] + "33"
                : colors.zinc[100] + "33"
            }
          />
        )}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125">
          <Logo theme={theme === "dark" ? "light" : "dark"} />
        </div>
        <p className="mt-2 text-right text-base text-zinc-400">by vishal tk</p>
      </section>
      <section className="mt-44 text-center text-lg font-medium opacity-75">
        <p>coming soon!</p>
      </section>
    </>
  )
}

import { useScroll } from "framer-motion"

import { useStaticLogoPath } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { SmallLogo } from "./SmallLogo"
import { ThemeToggle } from "./ThemeToggle"

export const FloatingNavbar = ({ showIcon }: { showIcon: boolean }) => {
  const staticLogoPath = useStaticLogoPath()

  return (
    <>
      <aside
        className="fixed z-50 mt-2"
        style={{ height: "calc(100vh - 40px)" }}
      >
        <div className="hidden h-full flex-col pl-2 lg:flex">
          <div
            className={cn(
              !showIcon ? "scale-80 -translate-y-2 opacity-0" : "opacity-100",
              "transition-all"
            )}
          >
            <SmallLogo size="sm" />
          </div>
          <div className="m-0 mt-auto">
            <ThemeToggle />
          </div>
        </div>
      </aside>
      <div className="fixed bottom-0 left-0 z-[99999] mx-auto block w-full p-4 lg:hidden">
        <div
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className={cn(
            "relative flex justify-between rounded-lg border border-zinc-300 bg-zinc-300 bg-opacity-50 p-2 backdrop-blur-sm transition-all dark:border-zinc-600 dark:bg-zinc-600 dark:bg-opacity-50",
            !showIcon ? "translate-y-5 opacity-0" : "opacity-100"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={staticLogoPath}
            alt="static rounded corner logo"
            className="h-9 w-9"
          />
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

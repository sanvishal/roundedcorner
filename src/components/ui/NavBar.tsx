import Link from "next/link"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { HiOutlineSparkles } from "react-icons/hi"

import { socials } from "@/lib/constants"
import { SmallLogo } from "../SmallLogo"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "./Button"

export const NavBar = () => {
  return (
    <nav className="flex-between h-16  px-0">
      <div>
        <SmallLogo size="sm" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-2.5">
          <Link href={socials.github} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="sm">
              <FiGithub className="sm-button-icon" />
            </Button>
          </Link>
          <Link href={socials.twitter} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="sm">
              <FiTwitter className="sm-button-icon" />
            </Button>
          </Link>
          <Link href={socials.portfolio} target="_blank">
            <Button variant="ghost" size="sm">
              <HiOutlineSparkles className="sm-button-icon" />
            </Button>
          </Link>
        </div>
        <div className="mx-4 h-5 w-0.5 bg-zinc-500 opacity-20"></div>
        <ThemeToggle />
      </div>
    </nav>
  )
}

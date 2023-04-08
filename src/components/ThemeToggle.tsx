import { useTheme } from "next-themes"
import { FiMoon } from "react-icons/fi"

import { Button, ButtonProps } from "./ui/Button"

export const ThemeToggle = (buttonProps: ButtonProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...buttonProps}
      variant="ghost"
      size="sm"
    >
      <FiMoon className="h-5 w-5 stroke-2 text-lg" />
    </Button>
  )
}

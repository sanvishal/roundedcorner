import { useTheme } from "next-themes"

export const useStaticLogoPath = () => {
  const { theme } = useTheme()

  return theme === "dark" ? "/logo-dark.png" : "/logo-light.png"
}

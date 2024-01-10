import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext"

export interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}

export default useTheme

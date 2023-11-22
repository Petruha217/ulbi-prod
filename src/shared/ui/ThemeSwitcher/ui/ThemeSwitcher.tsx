import { classNames } from "shared/lib/classNames/classNames"
import { useTheme, Theme } from "app/providers/ThemeProvider"
import LightIcon from '../../../assets/icons/theme-light.svg'
import DarkIcon from '../../../assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from "shared/ui/Button"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [])}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  )
}

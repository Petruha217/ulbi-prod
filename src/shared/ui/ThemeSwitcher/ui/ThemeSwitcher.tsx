import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from '../../../assets/icons/theme-light.svg';
import DarkIcon from '../../../assets/icons/theme-dark.svg';
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonTheme } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [])}>
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
    
  );
}
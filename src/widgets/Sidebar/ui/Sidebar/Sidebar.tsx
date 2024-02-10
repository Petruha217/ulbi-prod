import { classNames } from "shared/lib/classNames/classNames"
import cls from './Sidebar.module.scss'
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"
import { Button, ButtonTheme } from "shared/ui/Button"
import { ButtonSize } from "shared/ui/Button/ui/Button"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink"
import { RoutePath } from "shared/config/routeConfig/config"
import MainIcon from "shared/assets/icons/main.svg"
import AboutIcon from "shared/assets/icons/about.svg"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  function onToggle () {
    setCollapsed(prev => !prev)
  }
  return (
    <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [])}>
      <Button data-testid='sidebarToggle'
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L} >
        { collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>Главная</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>О нас</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} short={collapsed} />
      </div>
    </div>
  )
}

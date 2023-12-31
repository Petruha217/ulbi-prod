import { classNames } from "shared/lib/classNames/classNames"
import cls from './Sidebar.module.scss'
import { useState } from "react"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"

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
      <button data-testid='sidebarToggle' onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </div>
  )
}

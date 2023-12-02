/* eslint-disable @typescript-eslint/no-floating-promises */
import { classNames } from "shared/lib/classNames/classNames"
import cls from './LangSwitcher.module.scss'
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button"

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  function changeLanguage () {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button onClick={changeLanguage}
      className={classNames(cls.langSwitcher, {}, [])}
      theme = {ButtonTheme.CLEAR}
    >{t('Язык')}
    </Button>
  )
}

/* eslint-disable @typescript-eslint/no-floating-promises */
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button"

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  function changeLanguage () {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button onClick={changeLanguage}
      className={classNames('', {}, [className])}
      theme = {ButtonTheme.CLEAR}
    >{t(short? 'Короткий язык' : 'Язык')}
    </Button>
  )
}

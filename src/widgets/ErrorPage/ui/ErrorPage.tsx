import { classNames } from "shared/lib/classNames/classNames"
import cls from './ErrorPage.module.scss'
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button"

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation()

  const refreshPage = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.errorPage, {}, [])}>
      {t('Возникла непредвиденная ошибка')}
      <Button className="btn-error" onClick={refreshPage}>{ t('Обновить страницу') }</Button>
    </div>
  )
}

import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/ErrorPage/ui/BugButton'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('Главная')}</div>
      <BugButton/>
    </>
  )
}

export default MainPage

import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>{t('Главная')}</div>
  )
}

export default MainPage;
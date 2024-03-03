import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { BugButton } from 'widgets/ErrorPage/ui/BugButton'

const MainPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const changeValue = (value: string) => {
    setValue(value)
  }
  return (
    <>
      <div>{t('Главная')}</div>
      <BugButton />
      <Input
        value={value}
        onChange={changeValue}/>
    </>
  )
}

export default MainPage

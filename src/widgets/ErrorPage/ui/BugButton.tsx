import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

interface BugButtonProps {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
  const { t } = useTranslation()
  const [errorTest, setErrorTest] = useState(false)
  const testingBug = () => {
    setErrorTest(errorTest => !errorTest)
  }

  useEffect(() => {
    if (errorTest) {
      throw new Error("Fuck")
    }
  }, [errorTest])

  return (
    <Button className={classNames('', {}, [])}
    onClick={testingBug}>
      {t('Тестировать ошибку')}
    </Button>
  )
}

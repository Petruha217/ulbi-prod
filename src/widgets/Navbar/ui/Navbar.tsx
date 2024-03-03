import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from "shared/ui/Button"
import { useState, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { LoginModal } from "features/authByUsername"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}>
        { t("Войти")}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        toggleModal={onCloseModal} />
    </div>
  )
}

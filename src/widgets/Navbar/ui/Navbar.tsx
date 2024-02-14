import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from "shared/ui/Button"
import { Modal } from "shared/ui/Modal/Modal"
import { useState, useCallback } from "react"
import { useTranslation } from "react-i18next"

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}>
        { t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal}
        toggleModal={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, eum!
      </Modal>
    </div>
  )
}

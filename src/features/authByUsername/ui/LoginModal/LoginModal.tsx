import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm"

interface LoginModalProps {
  className?: string
  isOpen: boolean
  toggleModal: () => void
}

export const LoginModal = ({ className, isOpen, toggleModal }: LoginModalProps) => {
  return (
    <Modal className={classNames('', {}, [])}
      isOpen={isOpen}
      toggleModal={toggleModal}>
      <LoginForm />
    </Modal>

  )
}

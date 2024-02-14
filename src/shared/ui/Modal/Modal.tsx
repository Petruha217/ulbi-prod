import { classNames } from "shared/lib/classNames/classNames"
import cls from './Modal.module.scss'
import { ReactNode, useEffect, useState } from "react"
import { Portal } from "../Portal/Portal"

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  toggleModal: () => void
}

export const Modal = ({ className, children, isOpen, toggleModal }: ModalProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closied]: isClosing
  }

  const closeModal = () => {
    setIsClosing(true)
  }

  const onKeydown = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setIsClosing(true)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }
    let timerId: NodeJS.Timeout
    if (isClosing) {
      timerId = setTimeout(() => {
        toggleModal()
        setIsClosing(false)
      }, 300)
    }
    return () => {
      clearTimeout(timerId)
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isClosing, isOpen, toggleModal])

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [])}>
      <div className={cls.overlay} onClick={closeModal}>
        <div className={cls.content} onClick={(e: React.MouseEvent) => { e.stopPropagation() }}>
          {children}
        </div>
      </div>
    </div>
    </Portal>
  )
}

import { classNames } from "shared/lib/classNames/classNames"
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from "react"

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl'
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const modes: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true
  }
  return (
    <button className={classNames(cls.baseButton, modes, [className])} {...otherProps}>
      {children}
    </button>
  )
}

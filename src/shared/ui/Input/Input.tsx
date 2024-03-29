import { classNames } from "shared/lib/classNames/classNames"
import React, { InputHTMLAttributes } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = (props: InputProps) => {
  const { className, value, onChange, type = "text", ...otherProps } = props
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <div className={classNames('', {}, [])}>
      <input
        className={className}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        />
    </div>
  )
}

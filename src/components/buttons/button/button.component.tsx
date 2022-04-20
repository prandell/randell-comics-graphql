import React from 'react'
import './button.styles.scss'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: any
  inverted: boolean
}

const Button = ({
  children,
  inverted,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button-container ${inverted ? 'inverted' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button

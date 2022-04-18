import React from 'react'
import './button.styles.scss'

type ButtonProps = {
  children: any
  inverted: boolean
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({ children, inverted, type }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button-container ${inverted ? 'inverted' : ''}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button

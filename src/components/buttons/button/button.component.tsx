import React from 'react'
import * as Styled from './button.styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: any
  inverted: boolean
}

const getButton = (inverted: boolean) => {
  return inverted ? Styled.Button : Styled.InvertedButton
}

const Button = ({
  children,
  inverted,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const CustomButton = getButton(inverted)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button

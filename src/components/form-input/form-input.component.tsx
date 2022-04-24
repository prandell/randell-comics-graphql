import React, { ChangeEvent } from 'react'
import * as Styled from './form-input.styles'

type FormInputProps = {
  label: string
  required: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
  type: string
}

const FormInput = ({
  label,
  required,
  changeHandler,
  name,
  type,
  value
}: FormInputProps): JSX.Element => {
  return (
    <Styled.FormInputGroup>
      <Styled.FormInput
        type={type}
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
      ></Styled.FormInput>
      <Styled.FormInputLabel shrink={Boolean(value.length)}>
        {label}
      </Styled.FormInputLabel>
    </Styled.FormInputGroup>
  )
}

export default FormInput

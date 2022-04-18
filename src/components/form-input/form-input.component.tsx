import React, { ChangeEvent } from 'react'
import './form-input.styles.scss'

type FormInputProps = {
  label: string
  required: boolean
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

const FormInput = ({
  label,
  required,
  changeHandler,
  name,
  value
}: FormInputProps): JSX.Element => {
  return (
    <div className="form-input-group">
      <input
        className="form-input"
        type="text"
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
      ></input>
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    </div>
  )
}

export default FormInput
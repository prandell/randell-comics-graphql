import { AuthErrorCodes } from 'firebase/auth'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
import Button from '../buttons/button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'

type SignUpFormInputs = {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultFormInputs = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = (): JSX.Element => {
  const [formInputs, setFormInputs] =
    useState<SignUpFormInputs>(defaultFormInputs)
  const { displayName, email, password, confirmPassword } = formInputs

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // validate inputs
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password)
      if (!response) {
        return
      }

      await createUserDocumentFromAuth(response.user, { displayName })
      resetFormInputs()
      // Redirect for successful sign in/create
    } catch (error: any) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Account with that email already exists. Please sign in')
      } else {
        console.log(
          `Error encountered while creating a user. Message: ${error}`
        )
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email address</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          label="Display Name"
          required
          type="text"
          changeHandler={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          changeHandler={handleChange}
          name="email"
          type="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          changeHandler={handleChange}
          name="password"
          type="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          changeHandler={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
        />
        <Button inverted={false} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm

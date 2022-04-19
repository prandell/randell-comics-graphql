import { AuthErrorCodes } from 'firebase/auth'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'
import Button from '../buttons/button/button.component'
import GoogleButton from '../buttons/google-button/google-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'

type SignInFormInputs = {
  email: string
  password: string
}

const defaultFormInputs = {
  email: '',
  password: ''
}

const SignInForm = (): JSX.Element => {
  const [formInputs, setFormInputs] =
    useState<SignInFormInputs>(defaultFormInputs)
  const { email, password } = formInputs

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const signInWithGoogle = async (): Promise<void> => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      if (response) {
        resetFormInputs()
      }
    } catch (error: any) {
      switch (error.code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Password is incorrect. Please try again.')
          break
        case AuthErrorCodes.USER_DELETED:
          alert('No User with this email exists. Please sign up.')
          break
        default:
          console.log(`Error while signing in. Message: ${error}`)
      }
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your preferred method</span>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          label="Email"
          required
          type="email"
          changeHandler={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          changeHandler={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button inverted={false} type="submit">
            Sign In
          </Button>
          <GoogleButton clickHandler={signInWithGoogle} />
        </div>
      </form>
    </div>
  )
}

export default SignInForm

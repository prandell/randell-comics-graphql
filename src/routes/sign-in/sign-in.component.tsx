import React, { useEffect } from 'react'
import GoogleButton from '../../components/buttons/google-button/google-button.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'
import './sign-in.styles.scss'

function SignIn(): JSX.Element {
  const loginGooglePopup = async (): Promise<void> => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }

  return (
    <div className="sign-in-container">
      <h1 style={{ color: 'white' }}>Sign In Page</h1>

      <GoogleButton clickHandler={loginGooglePopup} />
      {/* <button className="google-sign-in" onClick={loginGooglePopup}>
        Sign In with Google
      </button> */}
      <SignUpForm />
    </div>
  )
}

export default SignIn

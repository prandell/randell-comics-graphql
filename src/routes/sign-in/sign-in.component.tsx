import React from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

function SignIn(): JSX.Element {
  const logGoogleUser = async (): Promise<void> => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
  }
  return (
    <div className="sign-in-container">
      <h1 style={{ color: 'white' }}>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  )
}

export default SignIn

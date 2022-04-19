import { User } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener
} from '../utils/firebase/firebase.utils'

export interface IUserContext {
  currentUser: User
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

type UserProviderProps = { children: React.ReactNode }

const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User>({} as User)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user)
        setCurrentUser(user)
      } else {
        setCurrentUser({} as User)
      }
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

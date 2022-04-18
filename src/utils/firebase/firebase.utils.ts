import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
  User
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore'

//Randell Comics Web App Configuration
//apiKey is not a
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyD4zNdZ7tTQdAgNZoogXyh7ggXjTttHS8Y',
  authDomain: 'randell-comics.firebaseapp.com',
  projectId: 'randell-comics',
  storageBucket: 'randell-comics.appspot.com',
  messagingSenderId: '538523634388',
  appId: '1:538523634388:web:28fa4d5c76ce1901a84941'
}

// Initialize Firebase Application
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)

const provider: GoogleAuthProvider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

//Authentication
export const auth: Auth = getAuth()
export const signInWithGooglePopup = async (): Promise<UserCredential> =>
  signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = async (): Promise<never> =>
  signInWithRedirect(auth, provider)

// Database
export const db: Firestore = getFirestore()
//create a user in our database whenever that user uses Google Auth to sign in
export const createUserDocumentFromAuth = async (userAuth: User) => {
  //Get document reference
  const userDocRef = doc(db, 'users', userAuth.uid)
  //Get snapshot of the reference
  const userSnapshot = await getDoc(userDocRef)

  //Create if doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (e) {
      console.log(`Error while creating new user. Message ${e}`)
    }
  }
  return userDocRef
}

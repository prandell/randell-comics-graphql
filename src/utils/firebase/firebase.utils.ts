import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
  DocumentReference,
  DocumentData,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore'
import { RandellComicsUser } from '../../models/user.model'
import { CategoryMap, ComicCategory } from '../../models/category.model'

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

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

//Authentication
export const auth: Auth = getAuth()
export const signInWithGooglePopup = async (): Promise<UserCredential> =>
  signInWithPopup(auth, googleProvider)
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void | UserCredential> => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void | UserCredential> => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutAuthUser = async (): Promise<void> => {
  return await signOut(auth)
}
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)

// Database
export const db: Firestore = getFirestore()
//create a user in our database whenever that user uses Google Auth to sign in
export const createUserDocumentFromAuth = async (
  userAuth: User,
  extra: RandellComicsUser = {}
): Promise<void | DocumentReference<DocumentData>> => {
  if (!userAuth) return
  //Get document reference
  const userDocRef = doc(db, 'users', userAuth.uid)
  //Get snapshot of the reference
  const userSnapshot = await getDoc(userDocRef)

  //Create if doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...extra })
    } catch (e) {
      console.log(`Error while creating new user. Message ${e}`)
    }
  }
  return userDocRef
}
export const addComicCategoriesAndDocuments = async (
  collectionKey: string,
  collections: ComicCategory[]
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  collections.forEach((c: ComicCategory) => {
    const docRef = doc(collectionRef, c.title.toLowerCase())
    batch.set(docRef, c)
  })

  await batch.commit()
  console.log('collections uploaded')
}
export const getComicCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')

  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce(
    (acc: CategoryMap, docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
      const { title, items } = docSnapshot.data() as ComicCategory
      acc[title.toLowerCase()] = { title, items }
      return acc
    },
    {}
  )

  return categoryMap
}

//Storage -- never got this working?
const storage = getStorage()
export const getImageUrl = (imageName: string, domElement: string) => {
  const imageRef = ref(storage, imageName)
  getDownloadURL(imageRef).then((url: string) => {
    // Or inserted into an <img> element
    console.log('got here?')
    const imgs = document.getElementsByClassName('myimg')
    Array.from(imgs).forEach((e: any) => e.setAttribute('src', url))
  })
}

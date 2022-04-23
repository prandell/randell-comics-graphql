import React, { createContext, useEffect, useState } from 'react'
import { CategoryMap } from '../models/product-collection.model'
import { getComicCollectionsAndDocuments } from '../utils/firebase/firebase.utils'

export interface ICategoriesContext {
  categoryMap: CategoryMap
  setCategoriesMap: React.Dispatch<React.SetStateAction<CategoryMap>>
}

export const CategoriesContext = createContext<ICategoriesContext>(
  {} as ICategoriesContext
)

type CategoriesProviderProps = { children: React.ReactNode }

const CategoriesProvider = ({
  children
}: CategoriesProviderProps): JSX.Element => {
  const [categoryMap, setCategoriesMap] = useState<CategoryMap>({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getComicCollectionsAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={{ categoryMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider

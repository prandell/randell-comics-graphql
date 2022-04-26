import React, { createContext, useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { CategoryMap } from '../models/category.model'
import {
  ClothingCategoryMap,
  ClothingCollection
} from '../models/clothing-collection'

export interface ICategoriesContext {
  categoryMap: CategoryMap
  setCategoriesMap: React.Dispatch<React.SetStateAction<CategoryMap>>
}

export const CategoriesContext = createContext<ICategoriesContext>(
  {} as ICategoriesContext
)

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        name
        price
        id
        imageUrl
      }
    }
  }
`

type CategoriesProviderProps = { children: React.ReactNode }

const CategoriesProvider = ({
  children
}: CategoriesProviderProps): JSX.Element => {
  const { data } = useQuery(COLLECTIONS)
  const [categoryMap, setCategoriesMap] = useState<CategoryMap>({})

  useEffect(() => {
    if (data) {
      const { collections } = data
      const collectionsMap = collections.reduce(
        (acc: ClothingCategoryMap, collection: ClothingCollection) => {
          const { title, items, id } = collection
          acc[title.toLowerCase()] = { id, title, items }
          return acc
        },
        {}
      )

      setCategoriesMap(collectionsMap)
    }
  }, [data])

  return (
    <CategoriesContext.Provider value={{ categoryMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider

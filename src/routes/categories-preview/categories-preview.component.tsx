import React, { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext)
  const first = 'new'
  const sortFunction = (x: string, y: string) => {
    return x === first ? -1 : y === first ? 1 : 0
  }
  return (
    <>
      {Object.keys(categoryMap)
        .sort(sortFunction)
        .map((titleKey: string) => {
          const { title } = categoryMap[titleKey]
          return (
            <CategoryPreview key={title} category={categoryMap[titleKey]} />
          )
        })}
    </>
  )
}

export default CategoriesPreview

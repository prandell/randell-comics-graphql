import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import { ComicCategory } from '../../models/product-collection.model'
import { Product } from '../../models/product.model'
import * as Styled from './category.styles'

const Category = () => {
  const { categoryName } = useParams()
  const { categoryMap } = useContext(CategoriesContext)
  const [category, setCategory] = useState<ComicCategory>({} as ComicCategory)

  useEffect(() => {
    if (categoryName && categoryMap[categoryName]) {
      setCategory(categoryMap[categoryName])
    }
  }, [categoryName, categoryMap])

  const { items, title } = category
  return (
    <Styled.CategoryContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.LineBreak />
      <Styled.ProductGrid>
        {items &&
          items.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </Styled.ProductGrid>
    </Styled.CategoryContainer>
  )
}

export default Category

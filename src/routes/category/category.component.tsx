import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/product-card/product-card.component'
import { ComicCategory } from '../../models/category.model'
import { Product } from '../../models/product.model'
import { useQuery, gql } from '@apollo/client'
import * as Styled from './category.styles'

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const SET_CATEGORY = gql`
  mutation ($category: Category!) {
    addCategory(category: $category) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

const Category = () => {
  const { categoryName } = useParams()

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: categoryName }
  })

  // const [ addCategory, { loading, error, data } ] = useMutation(SET_CATEGORY)
  // addCategory({ variables: { category: categoryObject }})

  const [category, setCategory] = useState<ComicCategory>({} as ComicCategory)

  useEffect(() => {
    if (categoryName && data) {
      const {
        getCollectionsByTitle: { title, items }
      } = data
      setCategory({ title, items })
    }
  }, [categoryName, data])

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

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import { ComicCategory } from '../../models/product-collection.model'
import { Product } from '../../models/product.model'
import './category.styles.scss'

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
    <div className="category-container">
      <span className="title">{title}</span>
      <hr className="line-break" />
      <div className="category-product-grid">
        {items &&
          items.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}

export default Category

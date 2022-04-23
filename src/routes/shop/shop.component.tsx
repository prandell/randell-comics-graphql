import React, { Fragment, useContext } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import { Product } from '../../models/product.model'
import './shop.styles.scss'

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoryMap).map((titleKey: string) => {
        const { title, items } = categoryMap[titleKey]
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {items.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default Shop

import React, { Fragment, useContext } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
import { ProductContext } from '../../contexts/product.context'
import { Product } from '../../models/product.model'
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)
  return (
    <div className="products-container">
      {products.map((product: Product) => {
        const { id } = product
        return (
          <Fragment key={id}>
            <ProductCard product={product} />
          </Fragment>
        )
      })}
    </div>
  )
}

export default Shop

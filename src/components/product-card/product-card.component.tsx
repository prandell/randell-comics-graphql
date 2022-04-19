import React from 'react'
import { Product } from '../../models/product.model'
import Button from '../buttons/button/button.component'
import './product-card.styles.scss'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { name, imageUrl, price } = product
  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button type="button" inverted={true}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard

import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { Product } from '../../models/product.model'
import Button from '../buttons/button/button.component'
import './product-card.styles.scss'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { name, imageUrl, price } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
  }
  return (
    <div className="product-card-container">
      <img
        alt={name}
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/image-failed.jpg'
        }}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button onClick={addProductToCart} inverted={true}>
        Add to Cart
      </Button>
    </div>
  )
}

export default ProductCard

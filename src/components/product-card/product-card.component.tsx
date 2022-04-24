import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { Product } from '../../models/product.model'
import Button from '../buttons/button/button.component'
import * as Styled from './product-card.styles'

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
    <Styled.ProductCardContainer>
      <Styled.ProductCardImage
        alt={name}
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/image-failed.jpg'
        }}
      />
      <Styled.Footer>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Price>{`$${price}`}</Styled.Price>
      </Styled.Footer>
      <Button onClick={addProductToCart} inverted={true}>
        Add to Cart
      </Button>
    </Styled.ProductCardContainer>
  )
}

export default ProductCard

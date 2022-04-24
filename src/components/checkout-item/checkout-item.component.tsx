import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import * as Styled from './checkout-item.styles'

type CheckoutItemProps = {
  cartItem: ICartItem
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps): JSX.Element => {
  const { removeItemFromCart, addItemToCart, removeProductFromCart } =
    useContext(CartContext)
  const { product, quantity } = cartItem
  const { name, id, price, imageUrl } = product

  const clearHandler = () => removeProductFromCart(product)
  const incrementHandler = () => addItemToCart(product)
  const decrementHandler = () => removeItemFromCart(product)

  return (
    <Styled.CheckoutItemContainer key={id}>
      <Styled.ImageContainer>
        <Styled.Image alt={name} src={imageUrl}></Styled.Image>
      </Styled.ImageContainer>
      <Styled.CheckoutItemDetails>{name}</Styled.CheckoutItemDetails>
      <Styled.QuantityContainer>
        <Styled.QuantityArrow onClick={decrementHandler}>
          &#10094;
        </Styled.QuantityArrow>
        <Styled.QuantityValue>{quantity}</Styled.QuantityValue>
        <Styled.QuantityArrow onClick={incrementHandler}>
          &#10095;
        </Styled.QuantityArrow>
      </Styled.QuantityContainer>
      <Styled.CheckoutItemDetails>${price}</Styled.CheckoutItemDetails>
      <Styled.RemoveButton onClick={clearHandler}>&#10005;</Styled.RemoveButton>
    </Styled.CheckoutItemContainer>
  )
}

export default CheckoutItem

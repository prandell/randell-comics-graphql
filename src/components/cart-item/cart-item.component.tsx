import React from 'react'
import { ICartItem } from '../../models/cart-item.model'
import './cart-item.styles'
import * as Styled from './cart-item.styles'

type CartItemProps = {
  cartItem: ICartItem
}

const CartItem = ({ cartItem }: CartItemProps): JSX.Element => {
  const { product, quantity } = cartItem
  const { name, price, imageUrl } = product
  return (
    <Styled.CartItemContainer>
      <Styled.CartItemImg alt={name} src={imageUrl} />
      <Styled.CartItemDetails>
        <Styled.CartItemName>{name}</Styled.CartItemName>
        <Styled.CartItemPrice>
          {quantity} x ${price}
        </Styled.CartItemPrice>
      </Styled.CartItemDetails>
    </Styled.CartItemContainer>
  )
}

export default CartItem

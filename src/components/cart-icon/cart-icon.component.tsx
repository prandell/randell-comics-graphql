import React, { MouseEventHandler, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles'
import * as Styled from './cart-icon.styles'

const CartIcon = (): JSX.Element => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext)
  const toggleCartOpen: MouseEventHandler<HTMLDivElement> = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <Styled.CartIconContainer onClick={toggleCartOpen}>
      <Styled.CartIconSvg />
      <Styled.CartCount>{cartCount}</Styled.CartCount>
    </Styled.CartIconContainer>
  )
}

export default CartIcon

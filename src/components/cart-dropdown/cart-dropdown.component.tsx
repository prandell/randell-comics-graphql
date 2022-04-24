import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import Button from '../buttons/button/button.component'
import CartItem from '../cart-item/cart-item.component'
import * as Styled from './cart-dropdown.styles'

const CartDropdown = (): JSX.Element => {
  const { cartItems, setCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    setCartOpen(false)
    navigate('/checkout')
  }
  return (
    <Styled.CartDropdownContainer>
      <Styled.CartItems>
        {cartItems.length ? (
          cartItems.map((item: ICartItem) => (
            <CartItem key={item.product.id} cartItem={item} />
          ))
        ) : (
          <Styled.EmptyMessage>Your cart is empty</Styled.EmptyMessage>
        )}
      </Styled.CartItems>
      <Button onClick={goToCheckoutHandler} type="button" inverted={false}>
        CHECKOUT
      </Button>
    </Styled.CartDropdownContainer>
  )
}

export default CartDropdown

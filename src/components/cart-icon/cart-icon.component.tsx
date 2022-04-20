import React, { MouseEventHandler, useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = (): JSX.Element => {
  const { cartOpen, setCartOpen, cartCount } = useContext(CartContext)
  const toggleCartOpen: MouseEventHandler<HTMLDivElement> = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div onClick={toggleCartOpen} className="cart-icon-container">
      <ShoppingIcon className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon

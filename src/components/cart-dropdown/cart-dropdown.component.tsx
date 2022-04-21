import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import Button from '../buttons/button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CartDropdown = (): JSX.Element => {
  const { cartItems, setCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    setCartOpen(false)
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: ICartItem) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler} type="button" inverted={false}>
        CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown

import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import Button from '../buttons/button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CartDropdown = (): JSX.Element => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: ICartItem) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
      <Button type="button" inverted={false}>
        CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown

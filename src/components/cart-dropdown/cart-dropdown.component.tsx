import React from 'react'
import Button from '../buttons/button/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = (): JSX.Element => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button type="button" inverted={false}>
        CHECKOUT
      </Button>
    </div>
  )
}

export default CartDropdown

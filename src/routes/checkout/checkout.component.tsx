import React, { Fragment, useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-column">
          <span>Product</span>
        </div>
        <div className="header-column">
          <span>Description</span>
        </div>
        <div className="header-column">
          <span>Quantity</span>
        </div>
        <div className="header-column">
          <span>Price</span>
        </div>
        <div className="header-column">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((i: ICartItem) => (
        <CheckoutItem key={i.product.id} cartItem={i} />
      ))}
      <span className="total">{`Total: $${cartTotal}`}</span>
    </div>
  )
}

export default Checkout

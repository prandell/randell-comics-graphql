import React from 'react'
import { ICartItem } from '../../models/cart-item.model'
import './cart-item.styles.scss'

type CartItemProps = {
  cartItem: ICartItem
}

const CartItem = ({ cartItem }: CartItemProps): JSX.Element => {
  const { product, quantity } = cartItem
  const { name, price, imageUrl } = product
  return (
    <div className="cart-item-container">
      <img alt={name} src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem

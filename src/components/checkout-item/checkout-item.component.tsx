import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import './checkout-item.styles.scss'

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
    <div className="checkout-item-container" key={id}>
      <div className="image-container">
        <img alt={name} src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={decrementHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={incrementHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div onClick={clearHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem

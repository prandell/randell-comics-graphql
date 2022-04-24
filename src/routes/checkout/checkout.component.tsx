import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import { ICartItem } from '../../models/cart-item.model'
import * as Styled from './checkout.styles'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <Styled.CheckoutContainer>
      <Styled.CheckoutHeader>
        <Styled.HeaderColumn>
          <span>Product</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Description</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Quantity</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Price</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Remove</span>
        </Styled.HeaderColumn>
      </Styled.CheckoutHeader>
      {cartItems.map((i: ICartItem) => (
        <CheckoutItem key={i.product.id} cartItem={i} />
      ))}
      <Styled.Total>{`Total: $${cartTotal}`}</Styled.Total>
    </Styled.CheckoutContainer>
  )
}

export default Checkout

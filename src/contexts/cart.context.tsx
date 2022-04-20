import React, { createContext, useState } from 'react'
import { ICartItem } from '../models/cart-item.model'
import { Product } from '../models/product.model'

export interface ICartContext {
  cartOpen: boolean
  cartItems: ICartItem[]
  addItemToCart: (productToAdd: Product) => void
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const addCartItem = (cartItems: ICartItem[], productToAdd: Product) => {
  const itemExists = cartItems.some((i) => i.product.id === productToAdd.id)
  if (itemExists) {
    return cartItems.map((i) => {
      if (i.product.id === productToAdd.id) {
        return { ...i, quantity: i.quantity + 1 }
      }
      return i
    })
  }
  return [...cartItems, { product: productToAdd, quantity: 1 }]
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

type CartProviderProps = { children: React.ReactNode }

const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  return (
    <CartContext.Provider
      value={{ cartOpen, setCartOpen, cartItems, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

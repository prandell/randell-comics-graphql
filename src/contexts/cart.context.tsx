import React, { createContext, useEffect, useState } from 'react'
import { ICartItem } from '../models/cart-item.model'
import { Product } from '../models/product.model'

export interface ICartContext {
  cartOpen: boolean
  cartItems: ICartItem[]
  addItemToCart: (product: Product) => void
  removeItemFromCart: (product: Product) => void
  removeProductFromCart: (product: Product) => void
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
  cartCount: number
  cartTotal: number
}

const incrementCartItem = (
  cartItems: ICartItem[],
  product: Product,
  add: boolean
) => {
  const alteration = add ? 1 : -1
  if (itemExists(cartItems, product)) {
    return cartItems
      .map((i: ICartItem) => {
        if (i.product.id === product.id) {
          return { ...i, quantity: i.quantity + alteration }
        }
        return i
      })
      .filter((i) => i.quantity > 0)
  }
  return add
    ? [...cartItems, { product: product, quantity: 1 }]
    : [...cartItems]
}

const clearProduct = (cartItems: ICartItem[], productToClear: Product) => {
  return cartItems.filter((i: ICartItem) => i.product.id !== productToClear.id)
}

const itemExists = (cartItems: ICartItem[], productToFind: Product) =>
  cartItems.some((i) => i.product.id === productToFind.id)

export const CartContext = createContext<ICartContext>({} as ICartContext)

type CartProviderProps = { children: React.ReactNode }

const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [cartCount, setCartCount] = useState<number>(0)
  const [cartTotal, setCartTotal] = useState<number>(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: number, cI: ICartItem) => total + cI.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total: number, cI: ICartItem) => total + cI.quantity * cI.product.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(incrementCartItem(cartItems, productToAdd, true))
  }

  const removeItemFromCart = (productToRemove: Product) => {
    setCartItems(incrementCartItem(cartItems, productToRemove, false))
  }

  const removeProductFromCart = (productToClear: Product) => {
    setCartItems(clearProduct(cartItems, productToClear))
  }
  return (
    <CartContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        cartTotal,
        removeItemFromCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

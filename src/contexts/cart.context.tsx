import React, { createContext, useState } from 'react'

export interface ICartContext {
  cartOpen: boolean
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

type CartProviderProps = { children: React.ReactNode }

const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

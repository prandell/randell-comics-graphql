import React, { createContext, useState } from 'react'
import { Product } from '../models/product.model'
import PRODUCTS from '../shop-data.json'

export interface IProductContext {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
)

type ProductProviderProps = { children: React.ReactNode }

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS)

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider

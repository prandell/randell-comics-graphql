import { Product } from './product.model'
export type CategoryBanner = {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  route: string
}

export type ClothingCollection = {
  id: string
  title: string
  items: Product[]
}

export type ClothingCategoryMap = {
  [key: string]: ClothingCollection
}

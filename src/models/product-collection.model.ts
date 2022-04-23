import { Product } from './product.model'

export type ComicCategory = {
  title: string
  items: Product[]
}

export type CategoryMap = {
  [key: string]: ComicCategory
}

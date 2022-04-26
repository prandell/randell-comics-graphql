import React, { useEffect, useState } from 'react'
import { CategoryBanner } from '../../models/category.model'
import DirectoryItem from '../directory-item/directory-item.component'
import * as Styled from './category-menu.styles'

const CategoryMenu = () => {
  const [categories, setCategories] = useState<CategoryBanner[]>([])
  useEffect(() => {
    setCategories([
      {
        id: 1,
        title: 'Hats',
        subtitle: 'The images are misleading',
        imageUrl: '/category-covers/new-cover.png',
        route: 'shop/hats'
      },
      {
        id: 2,
        title: 'Sneakers',
        subtitle: 'This is using graphQL',
        imageUrl: '/category-covers/spiderman-cover.png',
        route: 'shop/sneakers'
      },
      {
        id: 3,
        title: 'Jackets',
        subtitle: 'But the menu images are still hardcoded',
        imageUrl: '/category-covers/batman-cover.png',
        route: 'shop/jackets'
      },
      {
        id: 4,
        title: 'Mens',
        subtitle: 'Just click on a category',
        imageUrl: '/category-covers/dc-cover.jpeg',
        route: 'shop/mens'
      },
      {
        id: 5,
        title: 'Womens',
        subtitle: "And you'll see graphQL data",
        imageUrl: '/category-covers/marvel-cover.png',
        route: 'shop/womens'
      }
    ])
  }, [])
  return (
    <Styled.CategoriesMenu>
      {categories.map((c: CategoryBanner) => (
        <DirectoryItem key={c.id} category={c} />
      ))}
    </Styled.CategoriesMenu>
  )
}

export default CategoryMenu

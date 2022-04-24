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
        title: 'New',
        subtitle: 'Shop the latest releases',
        imageUrl: '/category-covers/new-cover.png',
        route: 'shop/new'
      },
      {
        id: 2,
        title: 'Spider-Man',
        subtitle: "Everyone's favourite web-slinger",
        imageUrl: '/category-covers/spiderman-cover.png',
        route: 'shop/spider-man'
      },
      {
        id: 3,
        title: 'Batman',
        subtitle: 'The Caped Crusader',
        imageUrl: '/category-covers/batman-cover.png',
        route: 'shop/batman'
      },
      {
        id: 4,
        title: 'DC',
        subtitle: 'Shop all DC Comics',
        imageUrl: '/category-covers/dc-cover.jpeg',
        route: 'shop/dc'
      },
      {
        id: 5,
        title: 'Marvel',
        subtitle: 'Shop all Marvel Comics',
        imageUrl: '/category-covers/marvel-cover.png',
        route: 'shop/marvel'
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

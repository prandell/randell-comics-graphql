import React from 'react'
import { Category } from '../../models/category.model'
import './category-item.styles.scss'

type CategoryItemProps = {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps): JSX.Element => {
  const { title, subtitle, imageUrl } = category
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default CategoryItem

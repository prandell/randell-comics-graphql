import React from 'react'
import { CategoryBanner } from '../../models/category.model'
import './directory-item.styles.scss'

type DirectoryItemProps = {
  category: CategoryBanner
}

const DirectoryItem = ({ category }: DirectoryItemProps): JSX.Element => {
  const { title, subtitle, imageUrl } = category
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default DirectoryItem

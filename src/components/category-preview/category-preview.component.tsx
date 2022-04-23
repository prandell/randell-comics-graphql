import React from 'react'
import { Link } from 'react-router-dom'
import { ComicCategory } from '../../models/product-collection.model'
import { Product } from '../../models/product.model'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

type CategoryPreviewProps = {
  category: ComicCategory
}

const CategoryPreview = ({ category }: CategoryPreviewProps): JSX.Element => {
  const { title, items } = category
  return (
    <div className="category-preview-container">
      <h2 className="title-container">
        <Link to={title.toLowerCase()}>
          <span className="title">{title}</span>
        </Link>
      </h2>
      <hr className="line-break" />
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview

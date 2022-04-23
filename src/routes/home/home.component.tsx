import React from 'react'
import CategoryMenu from '../../components/category-menu/category-menu.component'
import './home.styles.scss'

function Home(): JSX.Element {
  return (
    <div className="main-container">
      <h1 className="shop-title">
        {' '}
        <img
          className="shop-title-logo"
          alt={'Randell Comics Logo'}
          src={'randell-comics-filled.png'}
        />
        <p className="shop-title-text">Randell Comics</p>
      </h1>
      <CategoryMenu />
    </div>
  )
}

export default Home

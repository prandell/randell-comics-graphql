import React from 'react'
import './App.scss'
import CategoryMenu from './components/category-menu/category-menu.component'

function App(): JSX.Element {
  return (
    <div className="main-container">
      <h1 className="shop-title">randell's Comic Shop!</h1>
      <CategoryMenu />
    </div>
  )
}

export default App

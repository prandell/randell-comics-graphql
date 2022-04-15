import React from 'react'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>New</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Spiderman</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Batman</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>DC</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Marvel</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import './App.scss'
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation-bar/navigation-bar.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import { ThemeContext } from './contexts/theme.context'
import Checkout from './routes/checkout/checkout.component'

function App(): JSX.Element {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

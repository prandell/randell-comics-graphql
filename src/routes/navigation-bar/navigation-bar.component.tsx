import React from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation-bar.styles.scss'

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <img
            className="logo-container-logo"
            alt={'Randell Comics Logo'}
            src={'randell-comics-filled.png'}
          />
        </Link>
        <div className="nav-links-container" style={{ color: 'white' }}>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar

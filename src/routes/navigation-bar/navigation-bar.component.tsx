import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { signOutAuthUser } from '../../utils/firebase/firebase.utils'
import {
  NavigationBarContainer,
  NavLinks,
  LogoContainer,
  Logo,
  NavLink
} from './navigation-bar.styles'

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext)
  const { cartOpen } = useContext(CartContext)

  const signOutHandler = async (): Promise<void> => {
    await signOutAuthUser()
  }
  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <Logo
            className="logo-container-logo"
            alt={'Randell Comics Logo'}
            src={'randell-comics-filled.png'}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser.email ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <ThemeToggle />
          <CartIcon />
        </NavLinks>
        {cartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar

import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 12px;
`

export const Logo = styled.img`
  max-width: 50px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  color: var(--primary-colour);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

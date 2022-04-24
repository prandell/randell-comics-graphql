import styled from 'styled-components'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const CartIconSvg = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`

export const CartCount = styled.span`
  position: absolute;
  font-size: 12px;
  color: var(--accent-colour);
  font-weight: bold;
  top: 0px;
  right: 21px;
`

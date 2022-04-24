import styled from 'styled-components'
import Button from '../buttons/button/button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15%;
  min-width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid var(--primary-colour);
  background-color: var(--secondary-colour);
  top: 90px;
  right: 40px;
  z-index: 5;
`

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`

import styled from 'styled-components'
const themeWhite = '#e7dfdd'
export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 42px;
  letter-spacing: 0.5px;
  line-height: 42px;
  border-radius: 2px;
  padding: 0px;
  font-size: 15px;
  background-color: var(--accent-colour);
  color: ${themeWhite};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.2s ease-out;
  &:hover {
    background-color: ${themeWhite};
    color: var(--accent-colour);
    border: 1px solid var(--accent-colour);
  }
`

export const InvertedButton = styled(Button)`
  background-color: ${themeWhite};
  color: var(--accent-colour);
  border: 1px solid var(--accent-colour);

  &:hover {
    background-color: var(--accent-colour);
    color: ${themeWhite};
    border: none;
  }
`

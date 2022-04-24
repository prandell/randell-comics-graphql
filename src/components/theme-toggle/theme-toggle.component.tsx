import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import * as Styled from './theme-toggle.styles'

const ThemeToggle = (): JSX.Element => {
  const { theme, setGlobalTheme } = useContext(ThemeContext)

  const clickHandler = () => {
    theme === 'dark' ? setGlobalTheme('light') : setGlobalTheme('dark')
  }

  return (
    <Styled.ThemeToggle onClick={clickHandler}>
      <Styled.ThemeIcon className="theme-icon" />
    </Styled.ThemeToggle>
  )
}

export default ThemeToggle

import React, { useContext } from 'react'
import { ReactComponent as ThemeIcon } from '../../assets/theme-toggle.svg'
import { ThemeContext } from '../../contexts/theme.context'
import './theme-toggle.styles.scss'

const ThemeToggle = (): JSX.Element => {
  const { theme, setGlobalTheme } = useContext(ThemeContext)

  const clickHandler = () => {
    theme === 'dark' ? setGlobalTheme('light') : setGlobalTheme('dark')
  }

  return (
    <div onClick={clickHandler} className="theme-toggle">
      <ThemeIcon className="theme-icon" />
    </div>
  )
}

export default ThemeToggle

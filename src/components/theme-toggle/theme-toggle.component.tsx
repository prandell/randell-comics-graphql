import React, { useContext } from 'react'
import { ReactComponent as ThemeIcon } from '../../assets/theme-toggle.svg'
import { ThemeContext } from '../../contexts/theme.context'
import './theme-toggle.styles.scss'

const ThemeToggle = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext)

  const clickHandler = () => {
    console.log('hello')
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div onClick={clickHandler} className="theme-toggle">
      <ThemeIcon className="theme-icon" />
    </div>
  )
}

export default ThemeToggle

import React, { createContext, useEffect, useState } from 'react'
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export interface IThemeContext {
  theme: string
  setGlobalTheme: (theme: 'dark' | 'light') => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

type ThemeProviderProps = { children: React.ReactNode }

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<string>('light')

  useEffect(() => {
    defaultDark ? setGlobalTheme('dark') : setGlobalTheme('light')
  }, [])

  const setGlobalTheme = (theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#0e0b16'
    } else {
      document.body.style.backgroundColor = '#e7dfdd'
    }
    setTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{ theme, setGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

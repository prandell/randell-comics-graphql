import React, { createContext, useState } from 'react'
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export interface IThemeContext {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

type ThemeProviderProps = { children: React.ReactNode }

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<string>(defaultDark ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

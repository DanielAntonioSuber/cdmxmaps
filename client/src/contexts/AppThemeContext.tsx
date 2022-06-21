import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction
} from 'react'

import { LightTheme } from '@styles/themes'
import usePersistedState from '@/hooks/usePersistedState'

import { DefaultTheme, ThemeProvider } from 'styled-components'

interface ThemeContextValue {
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
}

export const AppThemeContext = createContext<ThemeContextValue>(null!)

export function AppThemeProvider ({
  children
}: {
  children: ReactNode | ReactElement
}) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', LightTheme)

  return (
    <AppThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}

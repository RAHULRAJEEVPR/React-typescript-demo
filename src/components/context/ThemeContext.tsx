import React,{createContext, ReactNode} from 'react'
import { theme } from './theme'
export const  ThemeContext=createContext(theme)
type ThemeContextProviderProps = {
    children: ReactNode;
  };

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
  return (
<ThemeContext.Provider value={theme}>
    {children}
</ThemeContext.Provider>
  )
}

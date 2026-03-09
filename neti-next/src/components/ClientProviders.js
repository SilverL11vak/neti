/**
 * NETI - Client Providers
 * Client-side context providers for the application
 */

'use client'

import { useState, createContext, useContext, useCallback, useEffect } from 'react'

// Create contexts
const LanguageContext = createContext(null)
const ThemeContext = createContext(null)
const AppContext = createContext(null)

// Language Provider
export function LanguageProvider({ children, initialLang = 'et' }) {
  const [lang, setLang] = useState(initialLang)
  
  const t = useCallback((et, en) => lang === 'et' ? et : en, [lang])
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Theme Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('neti-theme') || 'light'
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])
  
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('neti-theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// App Context Provider
export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  return (
    <AppContext.Provider value={{
      searchQuery,
      setSearchQuery,
      mobileMenuOpen,
      setMobileMenuOpen,
      activeDropdown,
      setActiveDropdown
    }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hooks to use contexts
export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Combined provider
export function CombinedProvider({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppProvider>
          {children}
        </AppProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default {
  LanguageProvider,
  ThemeProvider,
  AppProvider,
  CombinedProvider,
  useLanguageContext,
  useThemeContext,
  useAppContext
}

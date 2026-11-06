import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const salvo = localStorage.getItem('conecta_theme')
    if (salvo === 'light' || salvo === 'dark') {
      return salvo
    }
    return 'dark' // Padrão inicial
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    localStorage.setItem('conecta_theme', theme)
    
    // Atualiza root e body simultaneamente para máxima compatibilidade
    root.setAttribute('data-theme', theme)
    root.setAttribute('data-bs-theme', theme)
    body.setAttribute('data-theme', theme)
    body.setAttribute('data-bs-theme', theme)

    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      body.classList.add('dark')
      body.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      body.classList.remove('dark')
      body.classList.add('light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  // Start as "light" so the first render matches the server-less HTML; the
  // inline script in index.html has already put the real class on <html>,
  // and the effect below syncs React state to it right after mount.
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', next === 'dark')
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* the choice simply won't persist */
      }
      return next
    })
  }

  return { theme, toggleTheme }
}

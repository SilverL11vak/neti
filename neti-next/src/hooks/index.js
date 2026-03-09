/**
 * NETI - Custom React Hooks
 * Reusable hooks for client-side state and effects
 */

'use client'

import { useState, useEffect, useCallback } from 'react'

/**
 * Hook for managing language state
 */
export function useLanguage(initialLang = 'et') {
  const [lang, setLang] = useState(initialLang)
  
  const t = useCallback((et, en) => lang === 'et' ? et : en, [lang])
  
  return { lang, setLang, t }
}

/**
 * Hook for managing theme state
 */
export function useTheme() {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('neti-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])
  
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('neti-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }, [theme])
  
  return { theme, setTheme, toggleTheme }
}

/**
 * Hook for geolocation
 */
export function useLocation() {
  const [location, setLocation] = useState({ city: 'Tallinn', country: 'Eesti' })
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          
          // Estonian coordinates range roughly
          if (lat >= 57.5 && lat <= 59.5 && lon >= 21.5 && lon <= 28.5) {
            setLocation({ city: 'Tallinn', country: 'Eesti' })
          } else if (lat >= 58.3 && lat <= 58.6 && lon >= 26.5 && lon <= 27.5) {
            setLocation({ city: 'Tartu', country: 'Eesti' })
          } else if (lat >= 58.4 && lat <= 58.5 && lon >= 24.5 && lon <= 24.7) {
            setLocation({ city: 'Pärnu', country: 'Eesti' })
          } else if (lat >= 59.3 && lat <= 59.5 && lon >= 24.5 && lon <= 24.8) {
            setLocation({ city: 'Helsinki', country: 'Finland' })
          } else {
            setLocation({ city: 'Tallinn', country: 'Eesti' })
          }
          setLoading(false)
        },
        () => {
          setLoading(false)
        }
      )
    } else {
      setLoading(false)
    }
  }, [])
  
  return { location, loading }
}

/**
 * Hook for weather data (mock for now, can be extended to API)
 */
export function useWeather(location) {
  const [weather, setWeather] = useState({
    temp: 8,
    feelsLike: 6,
    condition: 'Poolpilves',
    conditionEn: 'Partly Cloudy',
    wind: 12,
    humidity: 78,
    uv: 2,
    precipitation: 0,
    visibility: 10
  })
  const [loading, setLoading] = useState(true)
  const [tempUnit, setTempUnit] = useState('C')
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [location])
  
  const convertTemp = useCallback((temp) => {
    if (tempUnit === 'F') {
      return Math.round(temp * 9/5 + 32)
    }
    return temp
  }, [tempUnit])
  
  return { weather, loading, tempUnit, setTempUnit, convertTemp }
}

/**
 * Hook for mobile menu state
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])
  const open = useCallback(() => setIsOpen(true), [])
  
  return { isOpen, toggle, close, open, setIsOpen }
}

/**
 * Hook for dropdown state
 */
export function useDropdown(initialState = null) {
  const [activeDropdown, setActiveDropdown] = useState(initialState)
  
  const toggle = useCallback((dropdown) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown)
  }, [])
  
  const close = useCallback(() => setActiveDropdown(null), [])
  
  return { activeDropdown, toggle, close, setActiveDropdown }
}

/**
 * Hook for search functionality
 */
export function useSearch() {
  const [query, setQuery] = useState('')
  
  const handleSearch = useCallback((e, router) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/otsing?q=${encodeURIComponent(query)}`)
    }
  }, [query])
  
  return { query, setQuery, handleSearch }
}

/**
 * Hook for loading state with simulated delay
 */
export function useLoading(delay = 1500) {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return { isLoading, setIsLoading }
}

/**
 * Hook for carousel/slider
 */
export function useCarousel(totalItems, autoPlayInterval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalItems)
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [totalItems, autoPlayInterval])
  
  const goTo = useCallback((index) => {
    setCurrentIndex(index % totalItems)
  }, [totalItems])
  
  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems)
  }, [totalItems])
  
  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems)
  }, [totalItems])
  
  return { currentIndex, goTo, next, prev }
}

/**
 * Hook for expanded state (accordion, expandable sections)
 */
export function useExpanded(initialState = null) {
  const [expanded, setExpanded] = useState(initialState)
  
  const toggle = useCallback((id) => {
    setExpanded(prev => prev === id ? null : id)
  }, [])
  
  const expand = useCallback((id) => setExpanded(id), [])
  const collapse = useCallback(() => setExpanded(null), [])
  
  return { expanded, toggle, expand, collapse, setExpanded }
}

/**
 * Hook for local storage
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])
  
  return [storedValue, setValue]
}

/**
 * Hook for media query
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])
  
  return matches
}

/**
 * Hook for window scroll position
 */
export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return scrollPosition
}

/**
 * Hook for AOS animations initialization
 */
export function useAOS() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 0,
        startEvent: 'DOMContentLoaded',
      })
    }
    initAOS()
    
    window.addEventListener('load', () => {
      import('aos').then(AOS => AOS.default.refresh())
    })
  }, [])
}

/**
 * Hook for cursor spotlight effect
 */
export function useSpotlight() {
  useEffect(() => {
    const spotlight = document.createElement('div')
    spotlight.className = 'cursor-spotlight'
    document.body.appendChild(spotlight)

    const handleMouseMove = (e) => {
      spotlight.style.left = e.clientX + 'px'
      spotlight.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      spotlight.remove()
    }
  }, [])
}

export default {
  useLanguage,
  useTheme,
  useLocation,
  useWeather,
  useMobileMenu,
  useDropdown,
  useSearch,
  useLoading,
  useCarousel,
  useExpanded,
  useLocalStorage,
  useMediaQuery,
  useScroll,
  useAOS,
  useSpotlight
}

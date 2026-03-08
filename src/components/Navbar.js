'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [lang, setLang] = useState('et')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/kategooria', label: 'Kategooriad' },
    { href: '/otsing', label: 'Otsing' },
    { href: '/ilm', label: 'Ilm' },
    { href: '/horoskoop', label: 'Horoskoop' },
    { href: '/games', label: 'Mängud' },
    { href: '/meist', label: 'Meist' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="logo-text">NETI</span>
          </Link>

          <div className="nav-links">
            <Link href="/kategooria" className="nav-link">Kategooriad</Link>
            <Link href="/otsing" className="nav-link">Otsing</Link>
            <Link href="/ilm" className="nav-link">Ilm</Link>
            <Link href="/horoskoop" className="nav-link">Horoskoop</Link>
            <Link href="/games" className="nav-link">Mängud</Link>
            <Link href="/meist" className="nav-link">Meist</Link>
          </div>

          <div className="nav-controls">
            {/* Dark Mode Toggle */}
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            
            {/* Language Toggle */}
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${lang === 'et' ? 'active' : ''}`}
                onClick={() => setLang('et')}
              >
                ET
              </button>
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link href="/kategooria" onClick={() => setMobileMenuOpen(false)}>Kategooriad</Link>
        <Link href="/otsing" onClick={() => setMobileMenuOpen(false)}>Otsing</Link>
        <Link href="/ilm" onClick={() => setMobileMenuOpen(false)}>Ilm</Link>
        <Link href="/horoskoop" onClick={() => setMobileMenuOpen(false)}>Horoskoop</Link>
        <Link href="/games" onClick={() => setMobileMenuOpen(false)}>Mängud</Link>
        <Link href="/meist" onClick={() => setMobileMenuOpen(false)}>Meist</Link>
      </div>
    </>
  )
}

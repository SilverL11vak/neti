'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [lang, setLang] = useState('et')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  // Organized navigation structure
  const navSections = {
    marketplace: {
      label: 'Kaubaturg',
      icon: 'fa-store',
      items: [
        { href: '/autod', label: 'Autod', icon: 'fa-car' },
        { href: '/kinnisvara', label: 'Kinnisvara', icon: 'fa-home' },
        { href: '/turg', label: 'Osta & Müü', icon: 'fa-shopping-bag' },
      ]
    },
    services: {
      label: 'Teenused',
      icon: 'fa-handshake',
      items: [
        { href: '/too', label: 'Töö', icon: 'fa-briefcase' },
        { href: '/kuulutus', label: 'Kuulutused', icon: 'fa-bullhorn' },
        { href: '/kategooria', label: 'Kategooriad', icon: 'fa-th-large' },
        { href: '/otsing', label: 'Otsing', icon: 'fa-search' },
      ]
    },
    lifestyle: {
      label: 'Elu',
      icon: 'fa-heart',
      items: [
        { href: '/horoskoop', label: 'Horoskoop', icon: 'fa-star' },
        { href: '/ilm', label: 'Ilm', icon: 'fa-cloud-sun' },
        { href: '/games', label: 'Mängud', icon: 'fa-gamepad' },
        { href: '/uudised', label: 'Uudised', icon: 'fa-newspaper' },
      ]
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo" onClick={closeDropdowns}>
            <div className="logo-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="logo-text">NETI</span>
          </Link>

          <div className="nav-links">
            {/* Marketplace Dropdown */}
            <div className="nav-dropdown">
              <button 
                className={`nav-dropdown-trigger ${activeDropdown === 'marketplace' ? 'active' : ''}`}
                onClick={() => toggleDropdown('marketplace')}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 200)}
              >
                <span><i className="fas fa-store"></i> {navSections.marketplace.label}</span>
                <i className={`fas fa-chevron-${activeDropdown === 'marketplace' ? 'up' : 'down'} dropdown-arrow`}></i>
              </button>
              {activeDropdown === 'marketplace' && (
                <div className="nav-dropdown-menu">
                  {navSections.marketplace.items.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-item" onClick={closeDropdowns}>
                      <i className={`fas ${item.icon}`}></i>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="nav-dropdown">
              <button 
                className={`nav-dropdown-trigger ${activeDropdown === 'services' ? 'active' : ''}`}
                onClick={() => toggleDropdown('services')}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 200)}
              >
                <span><i className="fas fa-handshake"></i> {navSections.services.label}</span>
                <i className={`fas fa-chevron-${activeDropdown === 'services' ? 'up' : 'down'} dropdown-arrow`}></i>
              </button>
              {activeDropdown === 'services' && (
                <div className="nav-dropdown-menu">
                  {navSections.services.items.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-item" onClick={closeDropdowns}>
                      <i className={`fas ${item.icon}`}></i>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Lifestyle Dropdown */}
            <div className="nav-dropdown">
              <button 
                className={`nav-dropdown-trigger ${activeDropdown === 'lifestyle' ? 'active' : ''}`}
                onClick={() => toggleDropdown('lifestyle')}
                onBlur={() => setTimeout(() => setActiveDropdown(null), 200)}
              >
                <span><i className="fas fa-heart"></i> {navSections.lifestyle.label}</span>
                <i className={`fas fa-chevron-${activeDropdown === 'lifestyle' ? 'up' : 'down'} dropdown-arrow`}></i>
              </button>
              {activeDropdown === 'lifestyle' && (
                <div className="nav-dropdown-menu">
                  {navSections.lifestyle.items.map((item) => (
                    <Link key={item.href} href={item.href} className="nav-dropdown-item" onClick={closeDropdowns}>
                      <i className={`fas ${item.icon}`}></i>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Meist - Direct Link */}
            <Link href="/meist" className="nav-link">
              <i className="fas fa-info-circle"></i>
              <span>Meist</span>
            </Link>
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

      {/* Mobile Menu - Reorganized */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-section-title">Kaubaturg</div>
        <Link href="/autod" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-car"></i> Autod</Link>
        <Link href="/kinnisvara" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-home"></i> Kinnisvara</Link>
        <Link href="/turg" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-shopping-bag"></i> Osta & Müü</Link>
        
        <div className="mobile-section-title">Teenused</div>
        <Link href="/too" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-briefcase"></i> Töö</Link>
        <Link href="/kuulutus" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-bullhorn"></i> Kuulutused</Link>
        <Link href="/kategooria" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-th-large"></i> Kategooriad</Link>
        <Link href="/otsing" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-search"></i> Otsing</Link>
        
        <div className="mobile-section-title">Elu</div>
        <Link href="/horoskoop" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-star"></i> Horoskoop</Link>
        <Link href="/ilm" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-cloud-sun"></i> Ilm</Link>
        <Link href="/games" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-gamepad"></i> Mängud</Link>
        <Link href="/uudised" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-newspaper"></i> Uudised</Link>
        
        <div className="mobile-section-title">Info</div>
        <Link href="/meist" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-info-circle"></i> Meist</Link>
      </div>
    </>
  )
}

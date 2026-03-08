'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const searchSuggestions = [
  { text: 'Postimees', icon: 'fa-newspaper', category: 'Info ja Meedia' },
  { text: 'Swedbank', icon: 'fa-university', category: 'Äri' },
  { text: 'Tartu Ülikool', icon: 'fa-graduation-cap', category: 'Haridus' },
  { text: 'ERR', icon: 'fa-broadcast-tower', category: 'Info ja Meedia' },
  { text: 'Telia', icon: 'fa-mobile-alt', category: 'Äri' },
  { text: 'SEB', icon: 'fa-university', category: 'Äri' },
  { text: 'Kuldne Börs', icon: 'fa-car', category: 'Äri' },
  { text: 'Omniva', icon: 'fa-shipping-fast', category: 'Äri' },
  { text: 'Riigikogu', icon: 'fa-landmark', category: 'Riik ja Ühiskond' },
  { text: 'Delfi', icon: 'fa-newspaper', category: 'Info ja Meedia' },
]

export default function SearchAutocomplete({ onSearch }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchSuggestions.filter(s => 
        s.text.toLowerCase().includes(query.toLowerCase()) ||
        s.category.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchQuery) => {
    if (onSearch) {
      onSearch(searchQuery)
    } else {
      window.location.href = `/otsing?q=${encodeURIComponent(searchQuery)}`
    }
    setIsOpen(false)
    setQuery('')
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
      <div className="hero-search-box">
        <div className="hero-search-input-wrapper">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Otsi Eesti veebilehti..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length > 0 && setIsOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(query)
              }
            }}
          />
        </div>
        <button 
          className="hero-search-btn"
          onClick={() => handleSearch(query)}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          marginTop: '8px',
          overflow: 'hidden',
          zIndex: 100,
        }}>
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSearch(item.text)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                cursor: 'pointer',
                transition: 'background 0.15s',
                borderBottom: index < suggestions.length - 1 ? '1px solid var(--glass-border)' : 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-light)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <i 
                className={`fas ${item.icon}`}
                style={{ 
                  width: '20px', 
                  color: 'var(--primary)' 
                }}
              ></i>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                  {item.text}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {item.category}
                </div>
              </div>
              <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}></i>
            </div>
          ))}
          
          {/* Search for query option */}
          <div
            onClick={() => handleSearch(query)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 18px',
              cursor: 'pointer',
              background: 'var(--bg-light)',
              borderTop: '1px solid var(--glass-border)',
            }}
          >
            <i className="fas fa-search" style={{ width: '20px', color: 'var(--primary)' }}></i>
            <div style={{ flex: 1, fontWeight: '500', fontSize: '0.95rem' }}>
              Otsi: "{query}"
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

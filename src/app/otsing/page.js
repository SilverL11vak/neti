'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const searchResults = [
  { title: 'Postimees', url: 'https://postimees.ee', desc: 'Eesti suurim uudisteportaal', category: 'Info ja Meedia', icon: 'fa-newspaper' },
  { title: 'Swedbank', url: 'https://swedbank.ee', desc: 'Pangandus ja finantsteenused', category: 'Äri', icon: 'fa-university' },
  { title: 'Tartu Ülikool', url: 'https://ut.ee', desc: 'Eesti juhtiv ülikool', category: 'Haridus', icon: 'fa-graduation-cap' },
  { title: 'ERR', url: 'https://err.ee', desc: 'Eesti Rahvusradio ja -televisioon', category: 'Info ja Meedia', icon: 'fa-broadcast-tower' },
  { title: 'Telia', url: 'https://telia.ee', desc: 'Telekommunikatsioon', category: 'Äri', icon: 'fa-mobile-alt' },
  { title: 'SEB', url: 'https://seb.ee', desc: 'Pank ja finantsteenused', category: 'Äri', icon: 'fa-university' },
  { title: 'Kuldne Börs', url: 'https://kuldnebors.ee', desc: 'Autode ja kinnisvara otsing', category: 'Äri', icon: 'fa-car' },
  { title: 'Omniva', url: 'https://omniva.ee', desc: 'Postiteenused', category: 'Äri', icon: 'fa-shipping-fast' },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState([])
  const [lang, setLang] = useState('et')

  useEffect(() => {
    if (query) {
      const filtered = searchResults.filter(r => 
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.desc.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="logo-text">NETI</span>
          </a>
          <div className="nav-links">
            <a href="/kategooria" className="nav-link">Kategooriad</a>
            <a href="/otsing" className="nav-link">Otsing</a>
            <a href="/meist" className="nav-link">Meist</a>
          </div>
          <div className="nav-controls">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === 'et' ? 'active' : ''}`} onClick={() => setLang('et')}>ET</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ minHeight: '40vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">
              {query ? `"${query}"` : (lang === 'et' ? 'Otsing' : 'Search')}
            </span>
          </h1>
          <p className="hero-subtitle">
            {results.length} {lang === 'et' ? 'tulemust' : 'results'}
          </p>
          
          <form className="hero-search-box" style={{ marginBottom: 0 }}>
            <i className="fas fa-search"></i>
            <input type="text" defaultValue={query} placeholder={lang === 'et' ? 'Otsi...' : 'Search...'} />
            <button type="submit" className="hero-search-btn">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="results-list">
          {results.map((result, i) => (
            <a key={i} href={result.url} target="_blank" className="result-card" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px',
              background: 'white',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '12px',
              transition: 'all var(--transition-base)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--gradient-primary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.25rem',
                flexShrink: 0
              }}>
                <i className={`fas ${result.icon}`}></i>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px' }}>{result.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{result.desc}</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '500' }}>{result.category}</span>
              </div>
              <i className="fas fa-external-link-alt" style={{ color: 'var(--text-muted)' }}></i>
            </a>
          ))}
          
          {results.length === 0 && query && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <i className="fas fa-search" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '16px' }}></i>
              <h3 style={{ marginBottom: '8px' }}>{lang === 'et' ? 'Tulemusi ei leitud' : 'No results found'}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{lang === 'et' ? 'Proovi teist otsisõna' : 'Try a different search term'}</p>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}

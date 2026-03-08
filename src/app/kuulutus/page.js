'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function KuulutusPage() {
  const [lang, setLang] = useState('et')
  const [adData, setAdData] = useState({
    category: '',
    title: '',
    description: '',
    contact: '',
    phone: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    { id: 'autod', name: 'Autod', nameEn: 'Cars' },
    { id: 'kinnisvara', name: 'Kinnisvara', nameEn: 'Real Estate' },
    { id: 'toot', name: 'Töö', nameEn: 'Jobs' },
    { id: 'kaubad', name: 'Kaubad', nameEn: 'Goods' },
    { id: 'teenused', name: 'Teenused', nameEn: 'Services' },
    { id: 'kodu', name: 'Kodu', nameEn: 'Home' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
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
              <Link href="/kuulutus" className="nav-link">Kuulutus</Link>
            </div>
            <div className="nav-controls">
              <div className="lang-toggle">
                <button className={`lang-btn ${lang === 'et' ? 'active' : ''}`} onClick={() => setLang('et')}>ET</button>
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero" style={{ minHeight: '60vh', paddingTop: '120px' }}>
          <div className="hero-content">
            <div style={{ 
              background: 'white', 
              padding: '60px', 
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <i className="fas fa-check" style={{ fontSize: '2rem', color: 'white' }}></i>
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: '#111827' }}>
                {lang === 'et' ? 'Kuulutus edastatud!' : 'Ad Submitted!'}
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: 1.6 }}>
                {lang === 'et' 
                  ? 'Teie kuulutus on edukalt lisatud. Vaatame selle läbi lähitundidel.'
                  : 'Your ad has been successfully submitted. We will review it shortly.'}
              </p>
              <Link href="/" className="hero-search-btn" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <span>{lang === 'et' ? 'Tagasi avalehele' : 'Back to Home'}</span>
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

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
            <Link href="/kuulutus" className="nav-link">Kuulutus</Link>
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
          <div className="hero-badge">
            <i className="fas fa-bullhorn"></i>
            {lang === 'et' ? 'Tasuta kuulutus' : 'Free Ad'}
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">
              {lang === 'et' ? 'Lisa kuulutus' : 'Post an Ad'}
            </span>
          </h1>
          <p className="hero-subtitle">
            {lang === 'et' 
              ? 'Lisa oma kuulutus tasuta ja jõua tuhatesse Eesti kasutajatesse'
              : 'Post your ad for free and reach thousands of Estonian users'}
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ 
            background: 'white', 
            padding: '48px', 
            borderRadius: '24px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
          }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#374151'
              }}>
                {lang === 'et' ? 'Kategooria *' : 'Category *'}
              </label>
              <select 
                required
                value={adData.category}
                onChange={(e) => setAdData({...adData, category: e.target.value})}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              >
                <option value="">{lang === 'et' ? 'Vali kategooria' : 'Select category'}</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {lang === 'et' ? cat.name : cat.nameEn}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#374151'
              }}>
                {lang === 'et' ? 'Pealkiri *' : 'Title *'}
              </label>
              <input 
                type="text"
                required
                value={adData.title}
                onChange={(e) => setAdData({...adData, title: e.target.value})}
                placeholder={lang === 'et' ? 'Näiteks: Müük Ford Focus 2015' : 'Example: Selling Ford Focus 2015'}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#374151'
              }}>
                {lang === 'et' ? 'Kirjeldus *' : 'Description *'}
              </label>
              <textarea 
                required
                value={adData.description}
                onChange={(e) => setAdData({...adData, description: e.target.value})}
                placeholder={lang === 'et' ? 'Kirjuta üksikasjalik kirjeldus...' : 'Write a detailed description...'}
                rows={5}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  color: '#374151'
                }}>
                  {lang === 'et' ? 'Nimi *' : 'Name *'}
                </label>
                <input 
                  type="text"
                  required
                  value={adData.contact}
                  onChange={(e) => setAdData({...adData, contact: e.target.value})}
                  placeholder={lang === 'et' ? 'Sinu nimi' : 'Your name'}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  color: '#374151'
                }}>
                  {lang === 'et' ? 'Telefon' : 'Phone'}
                </label>
                <input 
                  type="tel"
                  value={adData.phone}
                  onChange={(e) => setAdData({...adData, phone: e.target.value})}
                  placeholder="+372 5xxx xxxx"
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#374151'
              }}>
                {lang === 'et' ? 'E-mail *' : 'Email *'}
              </label>
              <input 
                type="email"
                required
                value={adData.email}
                onChange={(e) => setAdData({...adData, email: e.target.value})}
                placeholder="sinu@email.ee"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '18px',
                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {lang === 'et' ? 'Lisa kuulutus' : 'Submit Ad'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - {lang === 'et' ? 'Kõik õigused kaitstud' : 'All rights reserved'}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

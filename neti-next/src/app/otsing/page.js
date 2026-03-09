'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const popularSearches = [
  { title: 'Postimees', url: 'https://postimees.ee', desc: 'Eesti suurim uudisteportaal', category: 'Info ja Meedia', icon: 'fa-newspaper' },
  { title: 'Swedbank', url: 'https://swedbank.ee', desc: 'Pangandus ja finantsteenused', category: 'Äri', icon: 'fa-university' },
  { title: 'Tartu Ülikool', url: 'https://ut.ee', desc: 'Eesti juhtiv ülikool', category: 'Haridus', icon: 'fa-graduation-cap' },
  { title: 'ERR', url: 'https://err.ee', desc: 'Eesti Rahvusradio ja -televisioon', category: 'Info ja Meedia', icon: 'fa-broadcast-tower' },
  { title: 'Telia', url: 'https://telia.ee', desc: 'Telekommunikatsioon', category: 'Äri', icon: 'fa-mobile-alt' },
  { title: 'SEB', url: 'https://seb.ee', desc: 'Pank ja finantsteenused', category: 'Äri', icon: 'fa-university' },
  { title: 'Kuldne Börs', url: 'https://kuldnebors.ee', desc: 'Autode ja kinnisvara otsing', category: 'Äri', icon: 'fa-car' },
  { title: 'Omniva', url: 'https://omniva.ee', desc: 'Postiteenused', category: 'Äri', icon: 'fa-shipping-fast' },
  { title: 'Delfi', url: 'https://delfi.ee', desc: 'Uudised ja meelelahutus', category: 'Info ja Meedia', icon: 'fa-newspaper' },
  { title: 'Apollo', url: 'https://apollo.ee', desc: 'Raamatud ja meelelahutus', category: 'Kultuur', icon: 'fa-book' },
  { title: 'Bolt', url: 'https://bolt.eu', desc: 'Sõiduteenus', category: 'Äri', icon: 'fa-taxi' },
  { title: 'Amazon', url: 'https://amazon.com', desc: 'Online pood', category: 'Kaubandus', icon: 'fa-shopping-cart' },
]

const categories = [
  { name: 'Info ja Meedia', icon: 'fa-newspaper', count: 389 },
  { name: 'Äri ja Reisimine', icon: 'fa-briefcase', count: 567 },
  { name: 'Tehnika ja Ehitus', icon: 'fa-cogs', count: 423 },
  { name: 'Haridus ja Kultuur', icon: 'fa-graduation-cap', count: 198 },
  { name: 'Meelelahutus', icon: 'fa-gamepad', count: 612 },
  { name: 'Tervis ja Sport', icon: 'fa-heartbeat', count: 276 },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState([])
  const [lang, setLang] = useState('et')
  const [activeTab, setActiveTab] = useState(query ? 'results' : 'popular')

  useEffect(() => {
    if (query) {
      const filtered = popularSearches.filter(r => 
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.desc.toLowerCase().includes(query.toLowerCase()) ||
        r.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setActiveTab('results')
    }
  }, [query])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/otsing?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="search-hero">
        <div className="hero-content">
          <h1>
            {query ? `"${query}"` : (lang === 'et' ? 'Otsi Eesti veebilehti' : 'Search Estonian Websites')}
          </h1>
          <p>
            {results.length} {lang === 'et' ? 'tulemust' : 'results'}
          </p>
          
          <form className="search-hero-box" onSubmit={handleSearch}>
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'et' ? 'Otsi veebilehti, teenuseid...' : 'Search websites, services...'} 
            />
            <button type="submit" className="search-hero-btn">
              {lang === 'et' ? 'Otsi' : 'Search'}
            </button>
          </form>
        </div>
      </section>

      {/* Main Content */}
      <main className="search-main">
        <div className="search-container">
          {/* Tabs */}
          <div className="search-tabs">
            <button 
              className={`search-tab ${activeTab === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveTab('popular')}
            >
              <i className="fas fa-fire"></i>
              {lang === 'et' ? 'Populaarsed' : 'Popular'}
            </button>
            <button 
              className={`search-tab ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              <i className="fas fa-th"></i>
              {lang === 'et' ? 'Kategooriad' : 'Categories'}
            </button>
            {query && (
              <button 
                className={`search-tab ${activeTab === 'results' ? 'active' : ''}`}
                onClick={() => setActiveTab('results')}
              >
                <i className="fas fa-list"></i>
                {lang === 'et' ? 'Tulemused' : 'Results'}
              </button>
            )}
          </div>

          {/* Popular Searches */}
          {activeTab === 'popular' && (
            <div className="search-section">
              <h2 className="search-section-title">
                <i className="fas fa-star"></i>
                {lang === 'et' ? 'Kõige populaarsemad' : 'Most Popular'}
              </h2>
              <div className="search-grid">
                {popularSearches.map((result, i) => (
                  <a key={i} href={result.url} target="_blank" className="search-card">
                    <div className="search-card-icon">
                      <i className={`fas ${result.icon}`}></i>
                    </div>
                    <div className="search-card-content">
                      <h3>{result.title}</h3>
                      <p>{result.desc}</p>
                      <span className="search-card-category">{result.category}</span>
                    </div>
                    <div className="search-card-arrow">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {activeTab === 'categories' && (
            <div className="search-section">
              <h2 className="search-section-title">
                <i className="fas fa-th"></i>
                {lang === 'et' ? 'Kategooriad' : 'Categories'}
              </h2>
              <div className="category-grid">
                {categories.map((cat, i) => (
                  <Link key={i} href={`/otsing?q=${cat.name}`} className="category-card-link">
                    <div className="category-card-item">
                      <div className="category-card-icon">
                        <i className={`fas ${cat.icon}`}></i>
                      </div>
                      <h3>{cat.name}</h3>
                      <span>{cat.count} {lang === 'et' ? 'lehte' : 'sites'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {activeTab === 'results' && (
            <div className="search-section">
              {results.length > 0 ? (
                <>
                  <h2 className="search-section-title">
                    <i className="fas fa-search"></i>
                    {lang === 'et' ? 'Otsingutulemused' : 'Search Results'}
                  </h2>
                  <div className="search-grid">
                    {results.map((result, i) => (
                      <a key={i} href={result.url} target="_blank" className="search-card">
                        <div className="search-card-icon">
                          <i className={`fas ${result.icon}`}></i>
                        </div>
                        <div className="search-card-content">
                          <h3>{result.title}</h3>
                          <p>{result.desc}</p>
                          <span className="search-card-category">{result.category}</span>
                        </div>
                        <div className="search-card-arrow">
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              ) : query ? (
                <div className="no-results">
                  <i className="fas fa-search"></i>
                  <h3>{lang === 'et' ? 'Tulemusi ei leitud' : 'No results found'}</h3>
                  <p>{lang === 'et' ? 'Proovi teist otsisõna' : 'Try a different search term'}</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <span>NETI</span>
              </div>
              <p className="footer-desc">
                {lang === 'et'
                  ? 'NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastal.'
                  : 'NETI is Estonia\'s leading web catalog and search system since 1996.'}
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Kategooriad' : 'Categories'}</h4>
                <Link href="/kategooria">Riik ja Ühiskond</Link>
                <Link href="/kategooria">Info ja Meedia</Link>
                <Link href="/kategooria">Äri</Link>
                <Link href="/kategooria">Haridus</Link>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Teenused' : 'Services'}</h4>
                <Link href="/otsing">Otsing</Link>
                <Link href="/kategooria">Kataloog</Link>
                <Link href="/kuulutus">Reklaam</Link>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Ettevõte' : 'Company'}</h4>
                <Link href="/meist">Meist</Link>
                <Link href="/meist">Kontakt</Link>
                <Link href="/meist">Privaatsus</Link>
                <Link href="/meist">Kasutustingimused</Link>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>{lang === 'et' ? 'Uudiskiri' : 'Newsletter'}</h4>
              <p>
                {lang === 'et'
                  ? 'Liitu meie uudiskirjaga ja saa uusimad uudised'
                  : 'Subscribe to our newsletter for the latest updates'}
              </p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 NETI.ee - {lang === 'et' ? 'Kõik õigused kaitstud' : 'All rights reserved'}</p>
            <div className="footer-bottom-links">
              <a href="#">Privaatsus</a>
              <a href="#">Kasutustingimused</a>
            </div>
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

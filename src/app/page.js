'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Featured categories for the home page
const featuredCategories = [
  {
    id: 'info-media',
    title: 'Info ja Meedia',
    titleEn: 'News & Media',
    icon: 'fa-newspaper',
    color: '#3b82f6',
    count: 389
  },
  {
    id: 'business',
    title: 'Äri ja Teenused',
    titleEn: 'Business & Services',
    icon: 'fa-briefcase',
    color: '#10b981',
    count: 567
  },
  {
    id: 'entertainment',
    title: 'Meelelahutus',
    titleEn: 'Entertainment',
    icon: 'fa-gamepad',
    color: '#f59e0b',
    count: 612
  },
  {
    id: 'science-tech',
    title: 'Tehnoloogia',
    titleEn: 'Technology',
    icon: 'fa-microchip',
    color: '#8b5cf6',
    count: 423
  },
  {
    id: 'health',
    title: 'Tervis',
    titleEn: 'Health',
    icon: 'fa-heartbeat',
    color: '#ef4444',
    count: 276
  },
  {
    id: 'education',
    title: 'Haridus',
    titleEn: 'Education',
    icon: 'fa-graduation-cap',
    color: '#06b6d4',
    count: 198
  }
]

// Featured news
const newsItems = [
  {
    id: 1,
    title: 'Tallinnas avati uus moodsate tehnoloogiate keskus',
    titleEn: 'New modern technology center opened in Tallinn',
    description: 'Eesti pealinnas avati täna suurim tehnoloogia- ja innovatsioonikeskus.',
    descriptionEn: 'The capital of Estonia opened the largest technology and innovation center today.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    date: '8. märts 2026',
    category: 'Tehnoloogia'
  },
  {
    id: 2,
    title: 'Eesti ilu- ja tervisemess toimub sel nädalal',
    titleEn: 'Estonian beauty and health fair this week',
    description: 'Nädalavahetusel toimub Tallinnas suur ilu- ja tervisemess.',
    descriptionEn: 'This weekend a major beauty and health fair takes place in Tallinn.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop',
    date: '7. märts 2026',
    category: 'Tervis'
  },
  {
    id: 3,
    title: 'Uuring: Eestlased eelistavad puhkuseks kodumaad',
    titleEn: 'Study: Estonians prefer domestic travel for holidays',
    description: 'Eesti elanikud eelistavad puhkuse veetmist kodumaal.',
    descriptionEn: 'Estonian residents prefer spending their holidays domestically.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    date: '6. märts 2026',
    category: 'Reisimine'
  }
]

// Quick links
const quickLinks = [
  { text: 'Postimees', icon: 'fa-newspaper', url: 'https://postimees.ee' },
  { text: 'Swedbank', icon: 'fa-university', url: 'https://swedbank.ee' },
  { text: 'Tartu Ülikool', icon: 'fa-graduation-cap', url: 'https://ut.ee' },
  { text: 'Telia', icon: 'fa-mobile-alt', url: 'https://telia.ee' },
  { text: 'ERR', icon: 'fa-broadcast-tower', url: 'https://err.ee' },
  { text: 'Bolt', icon: 'fa-taxi', url: 'https://bolt.eu' }
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [lang, setLang] = useState('et')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Initialize AOS animations
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
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/otsing?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">
              <i className="fas fa-globe"></i>
            </div>
            <h1 className="loading-title">NETI</h1>
            <div className="loading-spinner"></div>
            <p className="loading-text">{lang === 'et' ? 'Laadimine...' : 'Loading...'}</p>
          </div>
        </div>
      )}

      {/* Navbar */}
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
            <button 
              className="lang-toggle-btn"
              onClick={() => setLang(lang === 'et' ? 'en' : 'et')}
            >
              {lang === 'et' ? 'EN' : 'ET'}
            </button>
            <div 
              className="hamburger" 
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern Dark Design */}
      <section className="autod-hero" style={{ padding: '140px 24px 80px' }}>
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge" data-aos="fade-down" data-aos-duration="800">
            <span className="badge-dot"></span>
            {lang === 'et' ? 'Eesti juhtvebikataloog alates 1996' : 'Estonia\'s leading web catalog since 1996'}
          </div>

          {/* Title */}
          <h1 className="hero-title" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
            <span className="hero-title-main">{lang === 'et' ? 'Avasta Eesti internet' : 'Discover the Estonian Web'}</span>
            <span className="gradient-text">{lang === 'et' ? 'Ühes kohas' : 'All in One Place'}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" data-aos="fade-down" data-aos-delay="200" data-aos-duration="800">
            {lang === 'et' 
              ? 'Sinu nutikaim sisenemispunkt Eesti internetimaailma'
              : 'Your smartest gateway to Estonian internet'}
          </p>

          {/* Search Box */}
          <div className="hero-search-wrapper" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <form className="hero-search-simple" onSubmit={handleSearch}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder={lang === 'et' ? 'Otsi veebilehti, teenuseid...' : 'Search websites, services...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-submit-btn">
                {lang === 'et' ? 'Otsi' : 'Search'}
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="quick-links-row" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <span className="quick-label">{lang === 'et' ? 'Kirolink:' : 'Quick links:'}</span>
            {quickLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-pill"
              >
                <i className={`fas ${link.icon}`}></i>
                {link.text}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">{lang === 'et' ? 'veebilehte' : 'websites'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">{lang === 'et' ? 'kategooriat' : 'categories'}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1996</span>
              <span className="stat-label">{lang === 'et' ? 'aastast' : 'since'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{lang === 'et' ? 'Kategooriad' : 'Categories'}</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              {lang === 'et' ? 'Sirvi kategooriate järgi' : 'Browse by Category'}
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            {featuredCategories.map((cat, i) => (
              <Link 
                href={`/kategooria`}
                key={cat.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '24px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className={`fas ${cat.icon}`} style={{ fontSize: '1.4rem', color: 'white' }}></i>
                </div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px' }}>
                    {lang === 'et' ? cat.title : cat.titleEn}
                  </h3>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                    {cat.count} {lang === 'et' ? 'lehte' : 'sites'}
                  </span>
                </div>
                <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)' }}></i>
              </Link>
            ))}
          </div>

          {/* View All Categories */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link 
              href="/kategooria"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#3b82f6',
                color: 'white',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              {lang === 'et' ? 'Vaata kõiki kategooriaid' : 'View All Categories'}
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section - Modern Card Design */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{lang === 'et' ? 'Uudised' : 'News'}</span>
            <h2 className="section-title">
              {lang === 'et' ? 'Viimased uudised' : 'Latest News'}
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px' 
          }}>
            {newsItems.map((news, i) => (
              <Link 
                href={`/uudised/${news.id}`}
                key={news.id}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div style={{
                  height: '180px',
                  backgroundImage: `url(${news.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '6px 12px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {news.category}
                  </span>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#64748b',
                    marginBottom: '8px'
                  }}>
                    {news.date}
                  </p>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {lang === 'et' ? news.title : news.titleEn}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.5'
                  }}>
                    {lang === 'et' ? news.description : news.descriptionEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* All News Link */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link 
              href="/uudised/1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#1e293b',
                color: 'white',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
            >
              {lang === 'et' ? 'Vaata kõiki uudiseid' : 'View All News'}
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge" style={{ background: '#10b981' }}>{lang === 'et' ? 'Funktsioonid' : 'Features'}</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              {lang === 'et' ? 'Miks valida NETI?' : 'Why Choose NETI?'}
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px' 
          }}>
            {[
              { icon: 'fa-search', title: 'Kiire otsing', titleEn: 'Fast Search', desc: 'Leia soovitud lehed sekunditega', descEn: 'Find desired sites in seconds', color: '#3b82f6' },
              { icon: 'fa-th-large', title: 'Kategooriad', titleEn: 'Categories', desc: '8 peamist kategooriat', descEn: '8 main categories', color: '#10b981' },
              { icon: 'fa-star', title: 'Hinnatud lehed', titleEn: 'Rated Sites', desc: 'Parimad Eesti veebilehed', descEn: 'Best Estonian websites', color: '#f59e0b' },
              { icon: 'fa-clock', title: 'Uuendatud', titleEn: 'Updated', desc: 'Alati ajakohane info', descEn: 'Always up-to-date info', color: '#8b5cf6' }
            ].map((feature, i) => (
              <div 
                key={i}
                style={{
                  padding: '32px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: feature.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <i className={`fas ${feature.icon}`} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>
                  {lang === 'et' ? feature.title : feature.titleEn}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                  {lang === 'et' ? feature.desc : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
            {lang === 'et' ? 'Alusta otsingut kohe' : 'Start Searching Now'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            {lang === 'et' 
              ? 'Leia parimad Eesti veebilehed ja teenused ühes kohas'
              : 'Find the best Estonian websites and services in one place'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/otsing"
              style={{
                padding: '16px 32px',
                background: 'white',
                color: '#1d4ed8',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              {lang === 'et' ? 'Alusta otsingut' : 'Start Searching'}
            </Link>
            <Link 
              href="/kategooria"
              style={{
                padding: '16px 32px',
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              {lang === 'et' ? 'Vaata kategooriaid' : 'Browse Categories'}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f172a', padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '16px' }}>
            <i className="fas fa-globe" style={{ fontSize: '1.5rem', color: '#3b82f6' }}></i>
            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>NETI</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            {lang === 'et' ? 'Eesti juhtvebikataloog alates 1996' : 'Estonia\'s leading web catalog since 1996'}
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <Link href="/meist" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              {lang === 'et' ? 'Meist' : 'About Us'}
            </Link>
            <Link href="/kategooria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              {lang === 'et' ? 'Kategooriad' : 'Categories'}
            </Link>
            <Link href="/otsing" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              {lang === 'et' ? 'Otsing' : 'Search'}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

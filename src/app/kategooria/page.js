'use client'

import { useState } from 'react'

const categories = [
  {
    id: 'state-society',
    title: 'Riik ja Ühiskond',
    titleEn: 'State and Society',
    icon: 'fa-landmark',
    desc: 'Riigiorganid, kohalik omavalitsus, seadused ja poliitika',
    count: 245,
    subcategories: ['Riigikogu', 'Valitsus', 'Kohalikud omavalitsused', 'Seadused', 'Valimised']
  },
  {
    id: 'info-media',
    title: 'Info ja Meedia',
    titleEn: 'Info and Media',
    icon: 'fa-newspaper',
    desc: 'Uudised, portaalid, ajakirjandus, raadio ja televisioon',
    count: 389,
    subcategories: ['Portaalid', 'Ajakirjandus', 'Raadio', 'Televisioon', 'Ilm']
  },
  {
    id: 'business',
    title: 'Äri',
    titleEn: 'Business',
    icon: 'fa-briefcase',
    desc: 'Firmad, kaubandus, reklaam, tööstus ja põllumajandus',
    count: 567,
    subcategories: ['Firmad', 'Kaubandus', 'Reklaam', 'Tööstus', 'Põllumajandus']
  },
  {
    id: 'science-tech',
    title: 'Teadus ja Tehnika',
    titleEn: 'Science and Technology',
    icon: 'fa-microscope',
    desc: 'Teadus, tehnika, arvutid, internet ja innovatsioon',
    count: 423,
    subcategories: ['Teadus', 'Tehnika', 'Arvutid', 'Internet', 'Startupid']
  },
  {
    id: 'education',
    title: 'Haridus',
    titleEn: 'Education',
    icon: 'fa-graduation-cap',
    desc: 'Kõrgkoolid, koolid, õppematerjalid ja elukestev õpe',
    count: 198,
    subcategories: ['Kõrgkoolid', 'Koolid', 'Õppematerjalid', 'Raamatukogud', 'Keeleõpe']
  },
  {
    id: 'entertainment',
    title: 'Meelelahutus',
    titleEn: 'Entertainment',
    icon: 'fa-music',
    desc: 'Muusika, film, kunst, sport, mängud ja kultuur',
    count: 612,
    subcategories: ['Muusika', 'Film', 'Kunst', 'Sport', 'Mängud', 'Horoskoobid']
  },
  {
    id: 'health',
    title: 'Tervis',
    titleEn: 'Health',
    icon: 'fa-heartbeat',
    desc: 'Meditsiin, ilu, toitumine ja tervislik eluviis',
    count: 276,
    subcategories: ['Meditsiin', 'Ilu', 'Toitumine', 'Fitness', 'Psühholoogia']
  },
  {
    id: 'home-environment',
    title: 'Kodu ja Keskkond',
    titleEn: 'Home and Environment',
    icon: 'fa-home',
    desc: 'Kodu, aed, keskkond, loomad ja pere',
    count: 334,
    subcategories: ['Kodu', 'Aed', 'Keskkond', 'Loomad', 'Reisimine']
  }
]

const categorySites = {
  'info-media': [
    { title: 'Postimees', url: 'https://postimees.ee', desc: 'Eesti suurim uudisteportaal' },
    { title: 'ERR', url: 'https://err.ee', desc: 'Eesti Rahvusradio ja -televisioon' },
    { title: 'Delfi', url: 'https://delfi.ee', desc: 'Uudised ja meelelahutus' },
    { title: 'TV3', url: 'https://tv3.ee', desc: 'Telekanaal' },
    { title: 'Kanal 2', url: 'https://kanal2.ee', desc: 'Telekanaal' },
  ],
  'business': [
    { title: 'Swedbank', url: 'https://swedbank.ee', desc: 'Pank' },
    { title: 'SEB', url: 'https://seb.ee', desc: 'Pank' },
    { title: 'Telia', url: 'https://telia.ee', desc: 'Telekommunikatsioon' },
    { title: 'Kuldne Börs', url: 'https://kuldnebors.ee', desc: 'Autode ja kinnisvara otsing' },
  ],
  'education': [
    { title: 'Tartu Ülikool', url: 'https://ut.ee', desc: 'Ülikool' },
    { title: 'Tallinna Tehnikaülikool', url: 'https://taltech.ee', desc: 'Tehnikaülikool' },
    { title: 'Tallinna Ülikool', url: 'https://tlu.ee', desc: 'Ülikool' },
  ]
}

export default function KategooriaPage() {
  const [lang, setLang] = useState('et')
  const [expandedCat, setExpandedCat] = useState(null)

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
              {lang === 'et' ? 'Kategooriad' : 'Categories'}
            </span>
          </h1>
          <p className="hero-subtitle">
            {lang === 'et' 
              ? 'Sirvi kõiki Eesti veebilehekülgi kategooriate kaupa'
              : 'Browse all Estonian websites by category'}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card" style={{ opacity: 1 }}>
              <div className="category-icon">
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-title-en">{cat.titleEn}</p>
              <p className="category-desc">{cat.desc}</p>
              <span className="category-count">
                <i className="fas fa-link"></i>
                {cat.count} lehte
              </span>
              
              <button 
                onClick={() => setExpandedCat(expandedCat === cat.id ? null : cat.id)}
                style={{
                  marginTop: '16px',
                  padding: '8px 16px',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {lang === 'et' ? 'Vaata lehti' : 'View sites'}
                <i className={`fas ${expandedCat === cat.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>

              {expandedCat === cat.id && categorySites[cat.id] && (
                <div style={{
                  marginTop: '16px',
                  padding: '16px',
                  background: 'var(--bg-light)',
                  borderRadius: '12px'
                }}>
                  {(categorySites[cat.id] || []).map((site, i) => (
                    <a 
                      key={i}
                      href={site.url}
                      target="_blank"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px',
                        background: 'white',
                        borderRadius: '8px',
                        marginBottom: '8px',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: '600' }}>{site.title}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{site.desc}</div>
                      </div>
                      <i className="fas fa-external-link-alt" style={{ color: 'var(--accent)' }}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
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

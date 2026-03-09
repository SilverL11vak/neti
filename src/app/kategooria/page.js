'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import '../autod/globals.css'

const categories = [
  {
    id: 'state-society',
    title: 'Riik ja Ühiskond',
    titleEn: 'State and Society',
    icon: 'fa-landmark',
    desc: 'Riigiorganid, kohalik omavalitsus, seadused ja poliitika',
    count: 245,
    subcategories: [
      { name: 'Riigikogu', count: 45 },
      { name: 'Valitsus', count: 38 },
      { name: 'Kohalikud omavalitsused', count: 78 },
      { name: 'Seadused', count: 52 },
      { name: 'Valimised', count: 32 }
    ]
  },
  {
    id: 'info-media',
    title: 'Info ja Meedia',
    titleEn: 'Info and Media',
    icon: 'fa-newspaper',
    desc: 'Uudised, portaalid, ajakirjandus, raadio ja televisioon',
    count: 389,
    subcategories: [
      { name: 'Portaalid', count: 89 },
      { name: 'Ajakirjandus', count: 67 },
      { name: 'Raadio', count: 45 },
      { name: 'Televisioon', count: 38 },
      { name: 'Ilm', count: 50 }
    ]
  },
  {
    id: 'business',
    title: 'Äri',
    titleEn: 'Business',
    icon: 'fa-briefcase',
    desc: 'Firmad, kaubandus, reklaam, tööstus ja põllumajandus',
    count: 567,
    subcategories: [
      { name: 'Firmad', count: 156 },
      { name: 'Kaubandus', count: 134 },
      { name: 'Reklaam', count: 78 },
      { name: 'Tööstus', count: 112 },
      { name: 'Põllumajandus', count: 87 }
    ]
  },
  {
    id: 'science-tech',
    title: 'Teadus ja Tehnika',
    titleEn: 'Science and Technology',
    icon: 'fa-microscope',
    desc: 'Teadus, tehnika, arvutid, internet ja innovatsioon',
    count: 423,
    subcategories: [
      { name: 'Teadus', count: 67 },
      { name: 'Tehnika', count: 89 },
      { name: 'Arvutid', count: 123 },
      { name: 'Internet', count: 78 },
      { name: 'Startupid', count: 66 }
    ]
  },
  {
    id: 'education',
    title: 'Haridus',
    titleEn: 'Education',
    icon: 'fa-graduation-cap',
    desc: 'Kõrgkoolid, koolid, õppematerjalid ja elukestev õpe',
    count: 198,
    subcategories: [
      { name: 'Kõrgkoolid', count: 34 },
      { name: 'Koolid', count: 67 },
      { name: 'Õppematerjalid', count: 45 },
      { name: 'Raamatukogud', count: 28 },
      { name: 'Keeleõpe', count: 24 }
    ]
  },
  {
    id: 'entertainment',
    title: 'Meelelahutus',
    titleEn: 'Entertainment',
    icon: 'fa-music',
    desc: 'Muusika, film, kunst, sport, mängud ja kultuur',
    count: 612,
    subcategories: [
      { name: 'Muusika', count: 134 },
      { name: 'Film', count: 78 },
      { name: 'Kunst', count: 89 },
      { name: 'Sport', count: 156 },
      { name: 'Mängud', count: 98 },
      { name: 'Horoskoobid', count: 57 }
    ]
  },
  {
    id: 'health',
    title: 'Tervis',
    titleEn: 'Health',
    icon: 'fa-heartbeat',
    desc: 'Meditsiin, ilu, toitumine ja tervislik eluviis',
    count: 276,
    subcategories: [
      { name: 'Meditsiin', count: 89 },
      { name: 'Ilu', count: 67 },
      { name: 'Toitumine', count: 45 },
      { name: 'Fitness', count: 48 },
      { name: 'Psühholoogia', count: 27 }
    ]
  },
  {
    id: 'home-environment',
    title: 'Kodu ja Keskkond',
    titleEn: 'Home and Environment',
    icon: 'fa-home',
    desc: 'Kodu, aed, keskkond, loomad ja pere',
    count: 334,
    subcategories: [
      { name: 'Kodu', count: 78 },
      { name: 'Aed', count: 56 },
      { name: 'Keskkond', count: 45 },
      { name: 'Loomad', count: 67 },
      { name: 'Reisimine', count: 88 }
    ]
  }
]

const categorySites = {
  'state-society': [
    { title: 'Riigikogu', url: 'https://www.riigikogu.ee', desc: 'Eesti Parlamend' },
    { title: 'Valitsus', url: 'https://www.valitsus.ee', desc: 'Eesti Vabariigi Valitsus' },
    { title: 'Kohus', url: 'https://www.kohus.ee', desc: 'Riiklik kohtusüsteem' },
  ],
  'info-media': [
    { title: 'Postimees', url: 'https://www.postimees.ee', desc: 'Eesti suurim uudisteportaal' },
    { title: 'ERR', url: 'https://www.err.ee', desc: 'Eesti Rahvusradio ja -televisioon' },
    { title: 'Delfi', url: 'https://www.delfi.ee', desc: 'Uudised ja meelelahutus' },
    { title: 'TV3', url: 'https://www.tv3.ee', desc: 'Eesti telekanaal' },
  ],
  'business': [
    { title: 'Swedbank', url: 'https://www.swedbank.ee', desc: 'Pank ja finantsteenused' },
    { title: 'SEB', url: 'https://www.seb.ee', desc: 'Pank ja investeerimine' },
    { title: 'Telia', url: 'https://www.telia.ee', desc: 'Telekommunikatsioon' },
  ],
  'science-tech': [
    { title: 'Technologia', url: 'https://www.technologia.ee', desc: 'Tehnoloogiauudised' },
    { title: 'ITuudised', url: 'https://www.ituudised.ee', desc: 'IT-uudised' },
  ],
  'education': [
    { title: 'Tartu Ülikool', url: 'https://www.ut.ee', desc: 'Eesti suurim ülikool' },
    { title: 'TalTech', url: 'https://www.taltech.ee', desc: 'Tallinna Tehnikaülikool' },
  ],
  'entertainment': [
    { title: 'Spotify', url: 'https://www.spotify.com', desc: 'Muusika voogedastus' },
    { title: 'Netflix', url: 'https://www.netflix.com', desc: 'Filmid ja sarjad' },
  ],
  'health': [
    { title: 'Terviseamet', url: 'https://www.terviseamet.ee', desc: 'Tervise ja heaolu' },
    { title: 'Apotheka', url: 'https://www.apotheka.ee', desc: 'Apteegid ja ravimid' },
  ],
  'home-environment': [
    { title: 'Koduaed', url: 'https://www.koduaed.ee', desc: 'Kodu ja aed' },
    { title: 'Loomade rescue', url: 'https://www.loomatargad.ee', desc: 'Loomade kaitsmine' },
  ]
}

export default function KategooriaPage() {
  const [lang, setLang] = useState('et')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Filter categories based on search
  const filteredCategories = categories.filter(cat => {
    const query = searchQuery.toLowerCase()
    return cat.title.toLowerCase().includes(query) ||
           cat.titleEn.toLowerCase().includes(query) ||
           cat.desc.toLowerCase().includes(query) ||
           cat.subcategories.some(sub => sub.name.toLowerCase().includes(query))
  })

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="car-detail-header" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', padding: '100px 16px 60px' }}>
        <div className="container">
          <Link href="/" className="back-link" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '8px' }}>
            {lang === 'et' ? 'Kategooriad' : 'Categories'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
            {lang === 'et' 
              ? 'Sirvi kõiki Eesti veebilehekülgi kategooriate kaupa'
              : 'Browse all Estonian websites by category'}
          </p>
          
          {/* Search Box */}
          <div style={{ marginTop: '24px', maxWidth: '500px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: 'white', 
              borderRadius: '12px',
              padding: '4px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }}>
              <i className="fas fa-search" style={{ padding: '0 16px', color: '#64748b' }}></i>
              <input
                type="text"
                placeholder={lang === 'et' ? 'Otsi kategooriat...' : 'Search categories...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '12px 0',
                  fontSize: '1rem',
                  background: 'transparent'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{
                    padding: '8px 12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b'
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          {searchQuery && (
            <div style={{ marginBottom: '24px', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
              <p style={{ color: '#64748b' }}>
                {lang === 'et' ? 'Leitud tulemused:' : 'Found results:'} <strong>{filteredCategories.length}</strong>
                {searchQuery && <span> - "{searchQuery}"</span>}
              </p>
            </div>
          )}

          {/* Categories Grid */}
          <div className="car-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {(searchQuery ? filteredCategories : categories).map((cat) => (
              <div 
                key={cat.id}
                className="car-info-panel"
                style={{ 
                  padding: '24px', 
                  cursor: 'pointer',
                  border: selectedCategory === cat.id ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                  transition: 'all 0.2s'
                }}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className={`fas ${cat.icon}`} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>
                      {lang === 'et' ? cat.title : cat.titleEn}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#3b82f6', fontWeight: '500' }}>
                      {cat.count} {lang === 'et' ? 'lehte' : 'sites'}
                    </span>
                  </div>
                </div>
                
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>
                  {cat.desc}
                </p>

                {/* Subcategories */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.subcategories.slice(0, 4).map((sub, i) => (
                    <span 
                      key={i}
                      style={{
                        padding: '4px 12px',
                        background: '#f1f5f9',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: '#475569'
                      }}
                    >
                      {sub.name}
                    </span>
                  ))}
                  {cat.subcategories.length > 4 && (
                    <span style={{ padding: '4px 12px', fontSize: '0.8rem', color: '#3b82f6' }}>
                      +{cat.subcategories.length - 4} {lang === 'et' ? ' veel' : ' more'}
                    </span>
                  )}
                </div>

                {selectedCategory === cat.id && categorySites[cat.id] && (
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px', color: '#1e293b' }}>
                      {lang === 'et' ? 'Populaarsed lehed' : 'Popular sites'}
                    </h4>
                    {categorySites[cat.id].map((site, i) => (
                      <a 
                        key={i}
                        href={site.url}
                        target="_blank"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px',
                          background: '#f8fafc',
                          borderRadius: '8px',
                          marginBottom: '8px',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.9rem' }}>{site.title}</div>
                          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{site.desc}</div>
                        </div>
                        <i className="fas fa-external-link-alt" style={{ color: '#3b82f6' }}></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {(searchQuery ? filteredCategories : categories).length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <i className="fas fa-search" style={{ fontSize: '3rem', color: '#cbd5e1', marginBottom: '16px' }}></i>
              <h3 style={{ color: '#1e293b', marginBottom: '8px' }}>
                {lang === 'et' ? 'Kategooriaid ei leitud' : 'No categories found'}
              </h3>
              <p style={{ color: '#64748b' }}>
                {lang === 'et' ? 'Proovi teistsugust otsingusõna' : 'Try a different search term'}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.3s'
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Language Toggle */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        left: '20px', 
        zIndex: 1000,
        display: 'flex',
        gap: '8px'
      }}>
        <button 
          onClick={() => setLang('et')}
          style={{
            padding: '10px 16px',
            background: lang === 'et' ? '#3b82f6' : 'white',
            color: lang === 'et' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          ET
        </button>
        <button 
          onClick={() => setLang('en')}
          style={{
            padding: '10px 16px',
            background: lang === 'en' ? '#3b82f6' : 'white',
            color: lang === 'en' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          EN
        </button>
      </div>
    </>
  )
}

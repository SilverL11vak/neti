'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const categories = [
  { id: 'electronics', name: 'Elektroonika', icon: 'fa-laptop' },
  { id: 'vehicles', name: 'Sõidukid', icon: 'fa-car' },
  { id: 'home', name: 'Kodu', icon: 'fa-home' },
  { id: 'clothing', name: 'Riided', icon: 'fa-tshirt' },
  { id: 'sports', name: 'Sport', icon: 'fa-running' },
  { id: 'toys', name: 'Mänguasjad', icon: 'fa-gamepad' },
  { id: 'garden', name: 'Aed', icon: 'fa-leaf' },
  { id: 'other', name: 'Muu', icon: 'fa-ellipsis-h' },
]

const mockListings = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    category: 'Elektroonika',
    price: 950,
    condition: 'Kasutatud',
    location: 'Tallinn',
    description: 'Heas korras iPhone, ilma kriimudeta. Aku 89%. Komplektis laadija ja karp.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop',
    posted: '2 päeva tagasi',
    badge: 'Uus'
  },
  {
    id: 2,
    title: 'Sony PlayStation 5 + mängud',
    category: 'Elektroonika',
    price: 450,
    condition: 'Kasutatud',
    location: 'Tartu',
    description: 'PS5 koos 3 mänguga. Väga heas korras, kasutatud 6 kuud.',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop',
    posted: '5 päeva tagasi',
    badge: null
  },
  {
    id: 3,
    title: 'Diivan voodiga',
    category: 'Kodu',
    price: 350,
    condition: 'Kasutatud',
    location: 'Pärnu',
    description: 'Hubane diivan voodiga. Hall värv. Väga mugav. Üleandmine kohapeal.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    posted: '1 nädal tagasi',
    badge: null
  },
  {
    id: 4,
    title: 'Täiskomplekt talverehvid',
    category: 'Sõidukid',
    price: 280,
    condition: 'Kasutatud',
    location: 'Narva',
    description: 'Nokian Hakkapeliitta 205/55R16. Külgel veel 4mm. Talveks valmis!',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&h=400&fit=crop',
    posted: '3 päeva tagasi',
    badge: 'Hot'
  },
  {
    id: 5,
    title: 'Jalgratas Trek Marlin 7',
    category: 'Sport',
    price: 520,
    condition: 'Kasutatud',
    location: 'Tallinn',
    description: 'Heas korras jalgratas. Sõitnud paar korda. Komplektis lukk ja helkurid.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=400&fit=crop',
    posted: '4 päeva tagasi',
    badge: null
  },
  {
    id: 6,
    title: 'Kuldlõbu kett 18k',
    category: 'Riided',
    price: 180,
    condition: 'Uus',
    location: 'Viljandi',
    description: 'Uus kuldlõbu kett. 18 karaadi. Pikkus 45cm. Kõik originaalpakendis.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    posted: 'Täna',
    badge: 'Uus'
  },
  {
    id: 7,
    title: 'LEGO Star Wars komplekt',
    category: 'Mänguasjad',
    price: 120,
    condition: 'Kasutatud',
    location: 'Rakvere',
    description: 'LEGO Millennium Falcon 75192. Originaalpakendis, puuduvad osad!',
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=600&h=400&fit=crop',
    posted: '6 päeva tagasi',
    badge: null
  },
  {
    id: 8,
    title: 'Aiakäru + tööriistad',
    category: 'Aed',
    price: 85,
    condition: 'Kasutatud',
    location: 'Kohtla-Järve',
    description: 'Suur aiakäru, labidad,oksad, prügikottide hoidja. Kõik töötab!',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
    posted: '1 nädal tagasi',
    badge: null
  }
]

export default function TurgPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredListings = mockListings.filter(item => {
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedCategory && item.category !== selectedCategory) return false
    return true
  })

  const clearFilters = () => {
    setSelectedCategory('')
    setSearchQuery('')
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="market-header">
        <div className="container">
          <h1>Osta & Müü</h1>
          <p>Osta ja müü kõike üle Eesti</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          {/* Search */}
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Otsi tooteid..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
              <i className="fas fa-sliders-h"></i>
              Kategooriad
              <i className={`fas ${showFilters ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>

            <div className={`filters-panel ${showFilters ? 'active' : ''}`}>
              <div className="filter-group">
                <label>Kategooria</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedCategory === '' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    Kõik
                  </button>
                  {categories.map(cat => (
                    <button 
                      key={cat.id}
                      className={`filter-chip ${selectedCategory === cat.name ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      <i className={`fas ${cat.icon}`}></i> {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className="clear-filters" onClick={clearFilters}>
                <i className="fas fa-times"></i>
                Tühjenda
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <span>{filteredListings.length} kuulutust leitud</span>
          </div>

          {/* Listings Grid */}
          <div className="listings-grid">
            {filteredListings.map(item => (
              <Link href={`/turg/${item.id}`} key={item.id} className="listing-card">
                <div className="listing-image">
                  <img src={item.image} alt={item.title} />
                  {item.badge && (
                    <span className={`listing-badge ${item.badge.toLowerCase()}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="listing-content">
                  <span className="listing-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <div className="listing-price">{item.price} €</div>
                  <div className="listing-meta">
                    <span>{item.condition}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="no-results">
              <i className="fas fa-shopping-bag"></i>
              <h3>Kuulutusi ei leitud</h3>
              <p>Proovi teisi kategooriaid</p>
              <button className="btn-primary" onClick={clearFilters}>
                Tühjenda filtrid
              </button>
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
                NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastal.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Kategooriad</h4>
                <Link href="/kategooria">Riik ja Ühiskond</Link>
                <Link href="/kategooria">Info ja Meedia</Link>
                <Link href="/kategooria">Äri</Link>
              </div>
              <div className="footer-column">
                <h4>Teenused</h4>
                <Link href="/otsing">Otsing</Link>
                <Link href="/autod">Autod</Link>
                <Link href="/kuulutus">Reklaam</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
          </div>
        </div>
      </footer>
    </>
  )
}

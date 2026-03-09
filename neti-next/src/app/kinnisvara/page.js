'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const propertyTypes = [
  { id: 'apartment', name: 'Korter', icon: 'fa-building' },
  { id: 'house', name: 'Maja', icon: 'fa-home' },
  { id: 'villa', name: 'Mõis', icon: 'fa-landmark' },
  { id: 'cottage', name: 'Suvila', icon: 'fa-tree' },
  { id: 'land', name: 'Maatükk', icon: 'fa-map' },
  { id: 'commercial', name: 'Äripind', icon: 'fa-store' },
]

const counties = [
  'Tallinn', 'Tartu', 'Pärnu', 'Narva', 'Kohtla-Järve', 
  'Johvi', 'Viljandi', 'Rakvere', 'Maardu', 'Kuressaare'
]

const mockProperties = [
  {
    id: 1,
    title: 'Modernne 3-toaline korter kesklinnas',
    type: 'Korter',
    address: 'Vabaduse väljak 4, Tallinn',
    price: 185000,
    rooms: 3,
    area: 85,
    floor: '3/5',
    year: 2018,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    location: 'Tallinn, Kesklinn',
    badge: 'Uus'
  },
  {
    id: 2,
    title: 'Päikeseline eramu aeda ja basseiniga',
    type: 'Maja',
    address: 'Männi tee 12, Tartu',
    price: 420000,
    rooms: 5,
    area: 220,
    floor: '2',
    year: 2015,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    location: 'Tartu',
    badge: null
  },
  {
    id: 3,
    title: 'Luksuslik penthouse merevaatega',
    type: 'Korter',
    address: 'Pirita tee 20, Tallinn',
    price: 550000,
    rooms: 4,
    area: 180,
    floor: '10/12',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    location: 'Tallinn, Pirita',
    badge: 'Top'
  },
  {
    id: 4,
    title: 'Hubane puidust suvila järve ääres',
    type: 'Suvela',
    address: 'Järveotsa, Pärnu',
    price: 125000,
    rooms: 3,
    area: 75,
    floor: '1',
    year: 1985,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&h=400&fit=crop',
    location: 'Pärnu',
    badge: null
  },
  {
    id: 5,
    title: 'Äripind kesklinnas - väga hea asukohaga',
    type: 'Äripind',
    address: 'Viru väljak 2, Tallinn',
    price: 380000,
    rooms: 6,
    area: 250,
    floor: '1/3',
    year: 2010,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    location: 'Tallinn, Kesklinn',
    badge: 'Hot'
  },
  {
    id: 6,
    title: 'Suur maatükk ehitusloaga',
    type: 'Maatükk',
    address: 'Kloogari, Harju maakond',
    price: 89000,
    rooms: 0,
    area: 5000,
    floor: '-',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    location: 'Harju maakond',
    badge: null
  },
  {
    id: 7,
    title: '2-toaline korter bussijaama lähedal',
    type: 'Korter',
    address: 'Jaama pst 45, Narva',
    price: 65000,
    rooms: 2,
    area: 48,
    floor: '2/5',
    year: 1975,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    location: 'Narva',
    badge: 'allahindlus'
  },
  {
    id: 8,
    title: 'Ahistatud korter uues majas',
    type: 'Korter',
    address: 'Sõpruse tee 15, Viljandi',
    price: 112000,
    rooms: 2,
    area: 55,
    floor: '4/5',
    year: 2021,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    location: 'Viljandi',
    badge: null
  }
]

export default function KinnisvaraPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedCounty, setSelectedCounty] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = mockProperties.filter(property => {
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !property.address.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedType && property.type !== selectedType) return false
    if (selectedCounty && !property.location.includes(selectedCounty)) return false
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false
    return true
  })

  const clearFilters = () => {
    setSelectedType('')
    setSelectedCounty('')
    setPriceRange([0, 1000000])
    setSearchQuery('')
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="market-header">
        <div className="container">
          <h1>Kinnisvara</h1>
          <p>Leia endale sobiv elu- või äripind</p>
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
              placeholder="Otsi aadressi, linna või piirkonda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
              <i className="fas fa-sliders-h"></i>
              Filtrid
              <i className={`fas ${showFilters ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>

            <div className={`filters-panel ${showFilters ? 'active' : ''}`}>
              <div className="filter-group">
                <label>Kinnisvara tüüp</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedType === '' ? 'active' : ''}`}
                    onClick={() => setSelectedType('')}
                  >
                    Kõik
                  </button>
                  {propertyTypes.map(type => (
                    <button 
                      key={type.id}
                      className={`filter-chip ${selectedType === type.name ? 'active' : ''}`}
                      onClick={() => setSelectedType(type.name)}
                    >
                      <i className={`fas ${type.icon}`}></i> {type.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Piirkond</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedCounty === '' ? 'active' : ''}`}
                    onClick={() => setSelectedCounty('')}
                  >
                    Kõik
                  </button>
                  {counties.map(county => (
                    <button 
                      key={county}
                      className={`filter-chip ${selectedCounty === county ? 'active' : ''}`}
                      onClick={() => setSelectedCounty(county)}
                    >
                      {county}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Hind</label>
                <div className="price-filter">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000000" 
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  />
                  <div className="price-display">
                    <span>0 €</span>
                    <span className="price-value">{priceRange[1].toLocaleString()} €</span>
                  </div>
                </div>
              </div>

              <button className="clear-filters" onClick={clearFilters}>
                <i className="fas fa-times"></i>
                Tühjenda filtrid
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <span>{filteredProperties.length} objekti leitud</span>
          </div>

          {/* Properties Grid */}
          <div className="listings-grid">
            {filteredProperties.map(property => (
              <Link href={`/kinnisvara/${property.id}`} key={property.id} className="listing-card">
                <div className="listing-image">
                  <img src={property.image} alt={property.title} />
                  {property.badge && (
                    <span className={`listing-badge ${property.badge.toLowerCase()}`}>
                      {property.badge}
                    </span>
                  )}
                </div>
                <div className="listing-content">
                  <span className="listing-type">{property.type}</span>
                  <h3>{property.title}</h3>
                  <div className="listing-price">{property.price.toLocaleString()} €</div>
                  <div className="listing-meta">
                    <span><i className="fas fa-vector-square"></i> {property.area} m²</span>
                    <span><i className="fas fa-door-open"></i> {property.rooms} tuba</span>
                    <span><i className="fas fa-building"></i> {property.floor}. korrus</span>
                  </div>
                  <div className="listing-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {property.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="no-results">
              <i className="fas fa-home"></i>
              <h3>Objekte ei leitud</h3>
              <p>Proovi teisi filtrite seadeid</p>
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

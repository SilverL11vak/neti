'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const carBrands = [
  { id: 'toyota', name: 'Toyota', nameEn: 'Toyota', icon: 'fa-landmark' },
  { id: 'volkswagen', name: 'Volkswagen', nameEn: 'Volkswagen', icon: 'fa-bus' },
  { id: 'bmw', name: 'BMW', nameEn: 'BMW', icon: 'fa-car' },
  { id: 'mercedes', name: 'Mercedes-Benz', nameEn: 'Mercedes-Benz', icon: 'fa-star' },
  { id: 'audi', name: 'Audi', nameEn: 'Audi', icon: 'fa-ring' },
  { id: 'volvo', name: 'Volvo', nameEn: 'Volvo', icon: 'fa-shield-alt' },
  { id: 'ford', name: 'Ford', nameEn: 'Ford', icon: 'fa-truck-monster' },
  { id: 'peugeot', name: 'Peugeot', nameEn: 'Peugeot', icon: 'fa-paw' },
]

const carTypes = [
  { id: 'sedan', name: 'Sedan', icon: 'fa-car' },
  { id: 'suv', name: 'SUV', icon: 'fa-truck-monster' },
  { id: 'wagon', name: 'Sõiduk', icon: 'fa-caravan' },
  { id: 'coupe', name: 'Kupee', icon: 'fa-car-side' },
  { id: 'hatchback', name: 'Hatchback', icon: 'fa-car-burst' },
  { id: 'van', name: 'Kaubik', icon: 'fa-truck' },
]

const mockCars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 28900,
    mileage: 45000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: 'Uus'
  },
  {
    id: 2,
    brand: 'BMW',
    model: '3 Series',
    year: 2021,
    price: 35900,
    mileage: 52000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    location: 'Tartu',
    badge: null
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    price: 21900,
    mileage: 68000,
    fuel: 'Diesel',
    transmission: 'Manuaal',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop',
    location: 'Pärnu',
    badge: 'allahindlus'
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    price: 32900,
    mileage: 48000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    location: 'Narva',
    badge: null
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 38900,
    mileage: 38000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: 'Top'
  },
  {
    id: 6,
    brand: 'Volvo',
    model: 'XC60',
    year: 2021,
    price: 36900,
    mileage: 55000,
    fuel: 'Diesel',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: null
  },
  {
    id: 7,
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 45900,
    mileage: 32000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: 'Hot'
  },
  {
    id: 8,
    brand: 'Peugeot',
    model: '3008',
    year: 2020,
    price: 26900,
    mileage: 62000,
    fuel: 'Diesel',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
    location: 'Pärnu',
    badge: null
  }
]

export default function AutodPage() {
  const [lang, setLang] = useState('et')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [yearRange, setYearRange] = useState([2015, 2024])
  const [fuelType, setFuelType] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = mockCars.filter(car => {
    if (searchQuery && !car.brand.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !car.model.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedBrand && car.brand !== selectedBrand) return false
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false
    if (car.year < yearRange[0] || car.year > yearRange[1]) return false
    if (fuelType && car.fuel !== fuelType) return false
    return true
  })

  const clearFilters = () => {
    setSelectedBrand('')
    setSelectedType('')
    setPriceRange([0, 100000])
    setYearRange([2015, 2024])
    setFuelType('')
    setSearchQuery('')
  }

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-badge">
              <i className="fas fa-car"></i>
              {lang === 'et' ? 'Müügis' : 'For Sale'}
            </span>
            <h2 className="section-title">
              {lang === 'et' ? 'Autod müügiks' : 'Cars for Sale'}
            </h2>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
              <i className="fas fa-sliders-h"></i>
              {lang === 'et' ? 'Filtrid' : 'Filters'}
              <i className={`fas ${showFilters ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>

            <div className={`filters-panel ${showFilters ? 'active' : ''}`}>
              <div className="filter-group">
                <label>{lang === 'et' ? 'Mark' : 'Make'}</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedBrand === '' ? 'active' : ''}`}
                    onClick={() => setSelectedBrand('')}
                  >
                    {lang === 'et' ? 'Kõik' : 'All'}
                  </button>
                  {carBrands.map(brand => (
                    <button 
                      key={brand.id}
                      className={`filter-chip ${selectedBrand === brand.name ? 'active' : ''}`}
                      onClick={() => setSelectedBrand(brand.name)}
                    >
                      <i className={`fas ${brand.icon}`}></i> {brand.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>{lang === 'et' ? 'Kütus' : 'Fuel'}</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${fuelType === '' ? 'active' : ''}`}
                    onClick={() => setFuelType('')}
                  >
                    {lang === 'et' ? 'Kõik' : 'All'}
                  </button>
                  <button 
                    className={`filter-chip ${fuelType === 'Bensin' ? 'active' : ''}`}
                    onClick={() => setFuelType('Bensin')}
                  >
                    Bensin
                  </button>
                  <button 
                    className={`filter-chip ${fuelType === 'Diesel' ? 'active' : ''}`}
                    onClick={() => setFuelType('Diesel')}
                  >
                    Diesel
                  </button>
                </div>
              </div>

              <div className="filter-group">
                <label>{lang === 'et' ? 'Hind' : 'Price'}</label>
                <div className="price-filter">
                  <input 
                    type="range" 
                    min="0" 
                    max="100000" 
                    step="1000"
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
                {lang === 'et' ? 'Tühjenda filtrid' : 'Clear filters'}
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <span>{filteredCars.length} {lang === 'et' ? 'autot leitud' : 'cars found'}</span>
          </div>

          {/* Car Grid */}
          <div className="cars-grid">
            {filteredCars.map(car => (
              <Link href={`/autod/${car.id}`} key={car.id} className="car-listing-card">
                <div className="car-image-wrapper">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} />
                  {car.badge && (
                    <span className={`car-badge ${car.badge.toLowerCase()}`}>
                      {car.badge}
                    </span>
                  )}
                </div>
                <div className="car-content">
                  <h3>{car.brand} {car.model}</h3>
                  <div className="car-price">{car.price.toLocaleString()} €</div>
                  <div className="car-meta">
                    <span><i className="fas fa-calendar"></i> {car.year}</span>
                    <span><i className="fas fa-tachometer-alt"></i> {car.mileage.toLocaleString()} km</span>
                    <span><i className="fas fa-gas-pump"></i> {car.fuel}</span>
                  </div>
                  <div className="car-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {car.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="no-results">
              <i className="fas fa-car"></i>
              <h3>{lang === 'et' ? 'Autosid ei leitud' : 'No cars found'}</h3>
              <p>{lang === 'et' ? 'Proovi teisi filtrite seadeid' : 'Try different filter settings'}</p>
              <button className="btn-primary" onClick={clearFilters}>
                {lang === 'et' ? 'Tühjenda filtrid' : 'Clear filters'}
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

/**
 * NETI - Autod Page Client Component
 * Handles all client-side interactivity for the cars page
 */

'use client'

import '@/app/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/app/autod/globals.css'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useLanguage, useLoading, useExpanded } from '@/hooks'
import { carBrands, carTypes, mockCars } from '@/data'

export default function AutodClient() {
  const { lang, setLang, t } = useLanguage('et')
  const { isLoading } = useLoading(1000)
  const { expanded, toggle, setExpanded } = useExpanded(null)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [yearRange, setYearRange] = useState([1990, 2024])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Filter cars
  const filteredCars = mockCars.filter(car => {
    if (selectedBrand && car.brand.toLowerCase() !== selectedBrand) return false
    if (selectedType && car.type && car.type.toLowerCase() !== selectedType) return false
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false
    if (car.year < yearRange[0] || car.year > yearRange[1]) return false
    if (searchQuery && !car.brand.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !car.model.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  // Sort cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.year - a.year
      case 'oldest':
        return a.year - b.year
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'mileage':
        return a.mileage - b.mileage
      default:
        return 0
    }
  })

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-car"></i>
          </div>
          <h1 className="loading-title">NETI</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">{lang === 'et' ? 'Laadimine...' : 'Loading...'}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="listing-hero">
          <div className="container">
            <h1 data-aos="fade-up">{lang === 'et' ? 'Autod' : 'Cars'}</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {lang === 'et' 
                ? 'Osta ja müüa autosid Eestis' 
                : 'Buy and sell cars in Estonia'}
            </p>
            
            <div className="listing-search" data-aos="fade-up" data-aos-delay="200">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder={lang === 'et' ? 'Otsi automarki, mudelit...' : 'Search car brand, model...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters-section">
          <div className="container">
            <div className="filters-grid">
              {/* Brand Filter */}
              <div className="filter-group">
                <button 
                  className={`filter-btn ${selectedBrand ? 'active' : ''}`}
                  onClick={() => toggle('brand')}
                >
                  <i className="fas fa-car"></i>
                  {lang === 'et' ? 'Märk' : 'Brand'}
                  {selectedBrand && <span className="filter-badge">{selectedBrand}</span>}
                  <i className={`fas fa-chevron-${expanded === 'brand' ? 'up' : 'down'}`}></i>
                </button>
                
                {expanded === 'brand' && (
                  <div className="filter-dropdown">
                    <button 
                      className={`filter-option ${!selectedBrand ? 'selected' : ''}`}
                      onClick={() => { setSelectedBrand(null); toggle('brand') }}
                    >
                      {lang === 'et' ? 'Kõik margid' : 'All brands'}
                    </button>
                    {carBrands.map(brand => (
                      <button
                        key={brand.id}
                        className={`filter-option ${selectedBrand === brand.name.toLowerCase() ? 'selected' : ''}`}
                        onClick={() => { setSelectedBrand(brand.name.toLowerCase()); toggle('brand') }}
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Filter */}
              <div className="filter-group">
                <button 
                  className={`filter-btn ${selectedType ? 'active' : ''}`}
                  onClick={() => toggle('type')}
                >
                  <i className="fas fa-car-side"></i>
                  {lang === 'et' ? 'Tüüp' : 'Type'}
                  {selectedType && <span className="filter-badge">{selectedType}</span>}
                  <i className={`fas fa-chevron-${expanded === 'type' ? 'up' : 'down'}`}></i>
                </button>
                
                {expanded === 'type' && (
                  <div className="filter-dropdown">
                    <button 
                      className={`filter-option ${!selectedType ? 'selected' : ''}`}
                      onClick={() => { setSelectedType(null); toggle('type') }}
                    >
                      {lang === 'et' ? 'Kõik tüübid' : 'All types'}
                    </button>
                    {carTypes.map(type => (
                      <button
                        key={type.id}
                        className={`filter-option ${selectedType === type.name.toLowerCase() ? 'selected' : ''}`}
                        onClick={() => { setSelectedType(type.name.toLowerCase()); toggle('type') }}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort */}
              <div className="filter-group">
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">{lang === 'et' ? 'Uuemad eespool' : 'Newest first'}</option>
                  <option value="oldest">{lang === 'et' ? 'Vanemad eespool' : 'Oldest first'}</option>
                  <option value="price-low">{lang === 'et' ? 'Hind: odavamalt' : 'Price: low to high'}</option>
                  <option value="price-high">{lang === 'et' ? 'Hind: kallimalt' : 'Price: high to low'}</option>
                  <option value="mileage">{lang === 'et' ? 'Läbisõit' : 'Mileage'}</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedBrand || selectedType) && (
              <div className="active-filters">
                {selectedBrand && (
                  <button 
                    className="active-filter"
                    onClick={() => setSelectedBrand(null)}
                  >
                    {selectedBrand} <i className="fas fa-times"></i>
                  </button>
                )}
                {selectedType && (
                  <button 
                    className="active-filter"
                    onClick={() => setSelectedType(null)}
                  >
                    {selectedType} <i className="fas fa-times"></i>
                  </button>
                )}
                <button 
                  className="clear-filters"
                  onClick={() => { setSelectedBrand(null); setSelectedType(null) }}
                >
                  {lang === 'et' ? 'Puhasta filtrid' : 'Clear filters'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section">
          <div className="container">
            <div className="results-header">
              <span className="results-count">
                {sortedCars.length} {lang === 'et' ? 'autot' : 'cars'}
              </span>
            </div>

            <div className="cars-grid">
              {sortedCars.map((car, index) => (
                <Link 
                  key={car.id} 
                  href={`/autod/${car.id}`}
                  className="car-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="car-image">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} />
                    {car.badge && (
                      <span className={`car-badge ${car.badge.toLowerCase()}`}>
                        {car.badge}
                      </span>
                    )}
                  </div>
                  <div className="car-content">
                    <div className="car-header">
                      <h3>{car.brand} {car.model}</h3>
                      <span className="car-price">{car.price.toLocaleString()} €</span>
                    </div>
                    <div className="car-details">
                      <span><i className="fas fa-calendar"></i> {car.year}</span>
                      <span><i className="fas fa-tachometer-alt"></i> {car.mileage.toLocaleString()} km</span>
                      <span><i className="fas fa-gas-pump"></i> {car.fuel}</span>
                      <span><i className="fas fa-cog"></i> {car.transmission}</span>
                    </div>
                    <div className="car-location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{car.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {sortedCars.length === 0 && (
              <div className="no-results">
                <i className="fas fa-car"></i>
                <h3>{lang === 'et' ? 'Autosid ei leitud' : 'No cars found'}</h3>
                <p>{lang === 'et' ? 'Proovi muuta otsinguparameetreid' : 'Try changing your search parameters'}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 1996 - 2026 NETI. {lang === 'et' ? 'Kõik õigused kaitstud.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

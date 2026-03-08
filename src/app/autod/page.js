'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const carBrands = [
  { id: 'toyota', name: 'Toyota', nameEn: 'Toyota' },
  { id: 'volkswagen', name: 'Volkswagen', nameEn: 'Volkswagen' },
  { id: 'bmw', name: 'BMW', nameEn: 'BMW' },
  { id: 'mercedes', name: 'Mercedes-Benz', nameEn: 'Mercedes-Benz' },
  { id: 'audi', name: 'Audi', nameEn: 'Audi' },
  { id: 'volvo', name: 'Volvo', nameEn: 'Volvo' },
  { id: 'ford', name: 'Ford', nameEn: 'Ford' },
  { id: 'peugeot', name: 'Peugeot', nameEn: 'Peugeot' },
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
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    location: 'Tallinn',
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
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    location: 'Tartu',
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
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop',
    location: 'Pärnu',
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
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    location: 'Tallinn',
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
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    location: 'Narva',
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
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
    location: 'Tallinn',
  },
]

export default function AutodPage() {
  const [lang, setLang] = useState('et')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, 100)
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const filteredCars = mockCars.filter(car => {
    if (searchQuery && !car.brand.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !car.model.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedBrand && car.brand !== selectedBrand) return false
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false
    return true
  })

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="auto-hero">
        <div className="hero-content">
          <h1>{lang === 'et' ? 'Autod müügiks' : 'Cars for Sale'}</h1>
          <p>{lang === 'et' 
            ? 'Leia endale sobiv auto tuhatelt müügikuulutustest'
            : 'Find your perfect car from thousands of listings'}</p>
          
          <div className="auto-search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder={lang === 'et' ? 'Otsi marki, mudelit...' : 'Search make, model...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="auto-main">
        <div className="auto-container">
          {/* Filters Sidebar */}
          <aside className="auto-filters">
            <div className="filter-section">
              <h3>{lang === 'et' ? 'Mark' : 'Make'}</h3>
              <div className="filter-options">
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
                    {lang === 'et' ? brand.name : brand.nameEn}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>{lang === 'et' ? 'Kere' : 'Body Type'}</h3>
              <div className="filter-options">
                <button 
                  className={`filter-chip ${selectedType === '' ? 'active' : ''}`}
                  onClick={() => setSelectedType('')}
                >
                  {lang === 'et' ? 'Kõik' : 'All'}
                </button>
                {carTypes.map(type => (
                  <button 
                    key={type.id}
                    className={`filter-chip ${selectedType === type.id ? 'active' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <i className={`fas ${type.icon}`}></i> {type.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>{lang === 'et' ? 'Hind' : 'Price'}</h3>
              <div className="price-range">
                <input 
                  type="range" 
                  min="0" 
                  max="100000" 
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                />
                <div className="price-labels">
                  <span>0 €</span>
                  <span>{priceRange[1].toLocaleString()} €</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Car Listings */}
          <div className="auto-listings">
            <div className="listings-header">
              <span>{filteredCars.length} {lang === 'et' ? 'autot' : 'cars'}</span>
              <select className="sort-select">
                <option>{lang === 'et' ? 'Uusimad' : 'Newest'}</option>
                <option>{lang === 'et' ? 'Odavamad' : 'Cheapest'}</option>
                <option>{lang === 'et' ? 'Kallimad' : 'Most expensive'}</option>
              </select>
            </div>

            <div className="car-grid">
              {filteredCars.map(car => (
                <div key={car.id} className="car-card">
                  <div className="car-image">
                    <img src={car.image} alt={`${car.brand} ${car.model}`} />
                    <span className="car-location">
                      <i className="fas fa-map-marker-alt"></i> {car.location}
                    </span>
                  </div>
                  <div className="car-details">
                    <h3>{car.brand} {car.model}</h3>
                    <div className="car-specs">
                      <span><i className="fas fa-calendar"></i> {car.year}</span>
                      <span><i className="fas fa-tachometer-alt"></i> {car.mileage.toLocaleString()} km</span>
                      <span><i className="fas fa-gas-pump"></i> {car.fuel}</span>
                      <span><i className="fas fa-cog"></i> {car.transmission}</span>
                    </div>
                    <div className="car-price">
                      {car.price.toLocaleString()} €
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  ? 'NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastast.'
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

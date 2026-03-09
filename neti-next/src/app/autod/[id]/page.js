'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import '../globals.css'

const carDatabase = {
  1: {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 28900,
    mileage: 45000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    color: 'Hõbe',
    engine: '2.5L',
    power: '203 hj',
    doors: 4,
    seats: 5,
    vin: 'JTDB11HK80J012345',
    description: 'Väga heas korras Toyota Camry, hoitud nagu uus. Kõik hooldused tehtud ajaliselt. Auto on läbinud põhjaliku ülevaatuse ja on tehniliselt laitmatus korras. Sisust on nahk, istmed on elektrilised ja soojad. Infoekraan, navisüsteem, tagurduskaamera, parkimisensorid. Auto on import Saksamaalt, läbisood kõikvõimalikud kontrollid.',
    features: ['Nahkpolster', 'Elektrilised istmed', 'Soojad istmed', 'Infoekraan', 'Navigatsioon', 'Tagurduskaamera', 'Parkimisensorid', 'Kiirusepidur', 'Lane assist', 'Kliimaseade', 'Päiksekardinad'],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Kesklinn',
    seller: 'Auto Müük OÜ',
    phone: '+372 555 1234',
    email: 'info@automüük.ee',
    posted: '2 päeva tagasi'
  },
  2: {
    id: 2,
    brand: 'BMW',
    model: '3 Series',
    year: 2021,
    price: 35900,
    mileage: 52000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    color: 'Must',
    engine: '3.0L',
    power: '374 hj',
    doors: 4,
    seats: 5,
    vin: 'WBAJD72010J123456',
    description: 'Võimas BMW 340i M Sport pakett. Auto on väga heas korras, täpselt hooldatud. M Sport pakett annab sportliku välimuse ja sõidunaudingu.',
    features: ['M Sport pakett', 'Nahkpolster', 'Sportistmed', 'HUD', 'Navigatsioon', 'Tagurduskaamera', 'Harmon Kardon'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557281776-7c32596abc59?w=800&h=600&fit=crop'
    ],
    location: 'Tartu, Kesklinn',
    seller: 'Premium Auto OÜ',
    phone: '+372 555 5678',
    email: 'päringu@premiumauto.ee',
    posted: '5 päeva tagasi'
  },
  3: {
    id: 3,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    price: 21900,
    mileage: 68000,
    fuel: 'Diesel',
    transmission: 'Manuaal',
    color: 'Valge',
    engine: '2.0L',
    power: '150 hj',
    doors: 5,
    seats: 5,
    vin: 'WVWZZZAUZLP123456',
    description: 'Ökonoomne ja usaldusväärne Volkswagen Golf TDI. Väga heas korras, hooldusraamat täidetud.',
    features: ['Nahkpolster', 'Navigatsioon', 'Tagurduskaamera', 'Parkimisensorid', 'Automaatne kliimaseade'],
    images: [
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&h=600&fit=crop'
    ],
    location: 'Pärnu, Kesklinn',
    seller: 'Pärnu Auto OÜ',
    phone: '+372 555 9012',
    email: 'info@parnuauto.ee',
    posted: '1 nädal tagasi'
  },
  4: {
    id: 4,
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    price: 32900,
    mileage: 48000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    color: 'Hall',
    engine: '2.0L',
    power: '190 hj',
    doors: 4,
    seats: 5,
    vin: 'WAUZZZF48MA123456',
    description: 'Elegantne ja sportlik Audi A4 Premium Plus varustuses. Auto on imelisess korras.',
    features: ['Quattro', 'Virtual Cockpit', 'Matrix LED', 'Nahkpolster', 'Navigatsioon', 'Tagurduskaamera'],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    location: 'Narva, Kesklinn',
    seller: 'Narva Auto OÜ',
    phone: '+372 555 3456',
    email: 'info@narvaauto.ee',
    posted: '3 päeva tagasi'
  },
  5: {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 38900,
    mileage: 38000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    color: 'Sinine',
    engine: '2.0L',
    power: '204 hj',
    doors: 4,
    seats: 5,
    vin: 'WDD2050041J123456',
    description: 'Luksuslik Mercedes-Benz C 300 d äriklassi autona. Auto on erakordses korras, hoitud nagu prints.',
    features: ['AMG Line', 'Nahkpolster', 'Elektrilised istmed', 'Panoraamkatus', 'MBUX', 'Navigatsioon'],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Mustamäe',
    seller: 'Mercedes Expert OÜ',
    phone: '+372 555 7890',
    email: 'info@mercedesexpert.ee',
    posted: 'Täna'
  },
  6: {
    id: 6,
    brand: 'Volvo',
    model: 'XC60',
    year: 2021,
    price: 36900,
    mileage: 55000,
    fuel: 'Diesel',
    transmission: 'Automaat',
    color: 'Must',
    engine: '2.0L',
    power: '235 hj',
    doors: 5,
    seats: 5,
    vin: 'YV1CZ7900H1234567',
    description: 'Turvaline ja stiilne Volvo XC60 Inscription. Auto on varustatud kõige uuema turvatehnoloogiaga.',
    features: ['Pilot Assist', 'City Safety', 'BLIS', 'Nahkpolster', 'Panoraamkatus', 'Navigatsioon'],
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Kristiine',
    seller: 'Volvo Tallinn OÜ',
    phone: '+372 555 2345',
    email: 'info@volvotallinn.ee',
    posted: '4 päeva tagasi'
  }
}

export default function CarDetailPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const car = carDatabase[id]
  const [selectedImage, setSelectedImage] = useState(0)
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!car) {
    return (
      <>
        <Navbar />
        <div className="section">
          <div className="container">
            <div className="not-found-card">
              <i className="fas fa-car"></i>
              <h2>Auto ei leitud</h2>
              <p>Kahjuks seda autot enam müügis ei ole.</p>
              <Link href="/autod" className="btn-primary">
                <i className="fas fa-arrow-left"></i>
                Tagasi autodesse
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowContactModal(false)
      setFormSubmitted(false)
      setContactForm({ name: '', email: '', phone: '', message: '' })
    }, 2000)
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="car-detail-header">
        <div className="container">
          <Link href="/autod" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi autodesse
          </Link>
          <div className="car-title-row">
            <h1>{car.brand} {car.model}</h1>
            <span className="car-year">{car.year}</span>
          </div>
          <div className="car-price-location">
            <span className="car-price">{car.price.toLocaleString()} €</span>
            <span className="car-location">
              <i className="fas fa-map-marker-alt"></i>
              {car.location}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="car-detail-grid">
            {/* Left Column - Images */}
            <div className="car-images">
              <div className="main-image">
                <img src={car.images[selectedImage]} alt={`${car.brand} ${car.model}`} />
              </div>
              <div className="image-thumbs">
                {car.images.map((img, i) => (
                  <button 
                    key={i} 
                    className={`image-thumb ${selectedImage === i ? 'active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={img} alt={`View ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="car-info-panel">
              {/* Quick Stats */}
              <div className="stats-grid">
                <div className="stat-item">
                  <i className="fas fa-tachometer-alt"></i>
                  <span className="stat-value">{car.mileage.toLocaleString()} km</span>
                  <span className="stat-label">Läbisõit</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-gas-pump"></i>
                  <span className="stat-value">{car.fuel}</span>
                  <span className="stat-label">Kütus</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-cog"></i>
                  <span className="stat-value">{car.transmission}</span>
                  <span className="stat-label">Käigukast</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-palette"></i>
                  <span className="stat-value">{car.color}</span>
                  <span className="stat-label">Värv</span>
                </div>
              </div>

              {/* Contact Card */}
              <div className="contact-card">
                <button className="contact-btn primary" onClick={() => setShowContactModal(true)}>
                  <i className="fas fa-envelope"></i>
                  Võta ühendust
                </button>
                <a href={`tel:${car.phone}`} className="contact-btn">
                  <i className="fas fa-phone"></i>
                  {car.phone}
                </a>
              </div>

              {/* Seller Info */}
              <div className="seller-card">
                <h3>Müüja</h3>
                <p className="seller-name"><i className="fas fa-building"></i> {car.seller}</p>
                <p><i className="fas fa-clock"></i> {car.posted}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="detail-section">
            <h2><i className="fas fa-align-left"></i> Kirjeldus</h2>
            <p className="description-text">{car.description}</p>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2><i className="fas fa-list-check"></i> Varustus</h2>
            <div className="features-grid">
              {car.features.map((feature, i) => (
                <span key={i} className="feature-item">
                  <i className="fas fa-check"></i>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="detail-section">
            <h2><i className="fas fa-clipboard-list"></i> Tehnilised andmed</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-name">Mark</span>
                <span className="spec-val">{car.brand}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Mudel</span>
                <span className="spec-val">{car.model}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Aasta</span>
                <span className="spec-val">{car.year}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Läbisõit</span>
                <span className="spec-val">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Kütus</span>
                <span className="spec-val">{car.fuel}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Käigukast</span>
                <span className="spec-val">{car.transmission}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Värv</span>
                <span className="spec-val">{car.color}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Mootor</span>
                <span className="spec-val">{car.engine}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Võimsus</span>
                <span className="spec-val">{car.power}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Uste arv</span>
                <span className="spec-val">{car.doors}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">Istekohti</span>
                <span className="spec-val">{car.seats}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">VIN</span>
                <span className="spec-val">{car.vin}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>
              <i className="fas fa-times"></i>
            </button>
            
            <h2>Võta ühendust müüjaga</h2>
            <p className="car-ref">{car.brand} {car.model}, {car.year}</p>
            
            {formSubmitted ? (
              <div className="success-state">
                <i className="fas fa-check-circle"></i>
                <h3>Sõnum saadetud!</h3>
                <p>Müüja võtab teiega peagi ühendust.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <input 
                  type="text" 
                  placeholder="Sinu nimi *"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Sinu email *"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Sinu telefon"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                />
                <textarea 
                  placeholder="Sinu sõnum *"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  rows={4}
                ></textarea>
                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i> Saada sõnum
                </button>
              </form>
            )}
          </div>
        </div>
      )}

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

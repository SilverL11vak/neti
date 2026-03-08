'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'

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
    description: 'Võimas BMW 340i M Sport pakett. Auto on väga heas korras, täpselt hooldatud. M Sport pakett annab sportliku välimuse ja sõidunaudingu. Hüdrovedrud tagavad mugava sõidu. Kõik uued rehvid. Auto ei ole olnud õnnetuses.',
    features: ['M Sport pakett', 'Nahkpolster', 'Sportistmed', 'Elektrilised istmed', 'Soojad istmed', 'HUD', 'Navigatsioon', 'Tagurduskaamera', 'Harmon Kardon', 'Kliimaseade', 'Päiksekardinad', 'Elektriline tagaluuk'],
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
    description: 'Ökonoomne ja usaldusväärne Volkswagen Golf TDI. Väga heas korras, hooldusraamat täidetud. Sobib ideaalselt neile, kes otsivad ökonoomset ja praktilist autot. Auto on varustatud kõigega, mida vaja - navi, parkimiskaamera, automaatne kliimaseade.',
    features: ['Nahkpolster', 'Navigatsioon', 'Tagurduskaamera', 'Parkimisensorid', 'Automaatne kliimaseade', 'Bluetooth', 'USB', 'Android Auto', 'Apple CarPlay'],
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
    description: 'Elegantne ja sportlik Audi A4 Premium Plus varustuses. Auto on imelisess korras, täielik hooldusajalugu. Quattro nelikvedu tagab suurepärase juhatavuse igal ilmastikul. Virtual cockpit, Matrix LED esituled.',
    features: ['Quattro', 'Virtual Cockpit', 'Matrix LED', 'Nahkpolster', 'Elektrilised istmed', 'Soojad istmed', 'Navigatsioon', 'Tagurduskaamera', 'Bang & Olufsen', 'Kliimaseade', 'Päiksekardinad'],
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
    description: 'Luksuslik Mercedes-Benz C 300 d äriklassi autona. Auto on erakordses korras, hoitud nagu prints. AMG line välimus, suurepärane sõidukogemus. Kõik teenused tehtud Mercedes-Benz esinduses.',
    features: ['AMG Line', 'Nahkpolster', 'Elektrilised istmed', 'Soojad istmed', 'Panoraamkatus', 'MBUX', 'Navigatsioon', 'Tagurduskaamera', '360° kaamera', 'Burmester', 'Kliimaseade'],
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
    description: 'Turvaline ja stiilne Volvo XC60 Inscription. Auto on varustatud kõige uuema turvatehnoloogiaga - Pilot Assist, City Safety, BLIS. Väga heas korras, täielik hooldusajalugu.',
    features: ['Pilot Assist', 'City Safety', 'BLIS', 'Nahkpolster', 'Elektrilised istmed', 'Soojad istmed', 'Panoraamkatus', 'Sensus', 'Navigatsioon', 'Tagurduskaamera', 'Kliimaseade', 'Elektriline tagaluuk'],
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
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!car) {
    return (
      <>
        <Navbar />
        <div className="car-not-found">
          <h1>Auto ei leitud</h1>
          <p>Kahjuks seda autot enam müügis ei ole.</p>
          <Link href="/autod" className="back-link">← Tagasi autodesse</Link>
        </div>
      </>
    )
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="car-breadcrumb">
        <div className="container">
          <Link href="/autod">Autod</Link>
          <span>/</span>
          <span>{car.brand} {car.model}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="car-detail-main">
        <div className="container">
          <div className="car-detail-grid">
            {/* Left Column - Images */}
            <div className="car-images-section">
              <div className="car-main-image">
                <img src={car.images[selectedImage]} alt={`${car.brand} ${car.model}`} />
                <span className="car-badge">{car.posted}</span>
              </div>
              <div className="car-thumbnails">
                {car.images.map((img, i) => (
                  <button 
                    key={i} 
                    className={`thumbnail ${selectedImage === i ? 'active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={img} alt={`View ${i + 1}`} />
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="car-description-card">
                <h3>Kirjeldus</h3>
                <p>{car.description}</p>
                
                <h4>Varustus</h4>
                <div className="car-features-grid">
                  {car.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      <i className="fas fa-check"></i>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="car-specs-card">
                <h3>Tehnilised andmed</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Mark</span>
                    <span className="spec-value">{car.brand}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mudel</span>
                    <span className="spec-value">{car.model}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Aasta</span>
                    <span className="spec-value">{car.year}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Läbisõit</span>
                    <span className="spec-value">{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Kütus</span>
                    <span className="spec-value">{car.fuel}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Käigukast</span>
                    <span className="spec-value">{car.transmission}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Värv</span>
                    <span className="spec-value">{car.color}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mootor</span>
                    <span className="spec-value">{car.engine}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Võimsus</span>
                    <span className="spec-value">{car.power}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Uste arv</span>
                    <span className="spec-value">{car.doors}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Istekohti</span>
                    <span className="spec-value">{car.seats}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">VIN</span>
                    <span className="spec-value">{car.vin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info & Contact */}
            <div className="car-info-section">
              <div className="car-title-card">
                <h1>{car.brand} {car.model}</h1>
                <div className="car-price">{car.price.toLocaleString()} €</div>
                <div className="car-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {car.location}
                </div>
              </div>

              {/* Contact Form */}
              <div className="car-contact-card">
                <h3><i className="fas fa-envelope"></i> Võta ühendust</h3>
                
                {formSubmitted ? (
                  <div className="form-success">
                    <i className="fas fa-check-circle"></i>
                    <h4>Täname huvi eest!</h4>
                    <p>Võtame teiega peagi ühendust.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit}>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Sinu nimi *"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        placeholder="Sinu email *"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="tel" 
                        placeholder="Sinu telefon"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <textarea 
                        placeholder="Sinu sõnum *"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        required
                        rows={4}
                      ></textarea>
                    </div>
                    <button type="submit" className="contact-submit-btn">
                      <i className="fas fa-paper-plane"></i> Saada sõnum
                    </button>
                  </form>
                )}

                <div className="seller-info">
                  <h4>Müüja info</h4>
                  <p><strong>{car.seller}</strong></p>
                  <p><i className="fas fa-phone"></i> {car.phone}</p>
                  <p><i className="fas fa-envelope"></i> {car.email}</p>
                </div>
              </div>

              {/* Map */}
              <div className="car-map-card">
                <h3><i className="fas fa-map-marker-alt"></i> Asukoht</h3>
                <div className="map-placeholder">
                  <i className="fas fa-map"></i>
                  <p>{car.location}</p>
                  <span>Kaart laadimisel...</span>
                </div>
              </div>
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

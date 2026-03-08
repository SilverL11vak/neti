'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import '../globals.css'

const propertyDatabase = {
  1: {
    id: 1,
    title: 'Modernne 3-toaline korter kesklinnas',
    type: 'Korter',
    address: 'Vabaduse väljak 4, Tallinn',
    price: 185000,
    rooms: 3,
    area: 85,
    floor: '3/5',
    year: 2018,
    description: 'Väga heas korras modernne korter kesklinnas. Korter on läbi põhjalikult renoveeritud 2020. aastal. Köök on avatud elutuppa, täis integreeritud köögitehnika. Magamistoad on mahukad, garderoob. Vannituba ja WC on eraldi. Kõik aknad on vahetatud, põrandad on laminaat. Maja on korteriühistu, korras. Hoov on piiratud, autoparkimine tasuta.',
    features: ['Renoveeritud', 'Vannituba ja WC eraldi', 'Garderoob', 'Rõdu', 'Keskküte', 'Panipaik', 'Kelder'],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Kesklinn',
    seller: 'Kinnisvara OÜ',
    phone: '+372 555 1234',
    posted: '2 päeva tagasi'
  },
  2: {
    id: 2,
    title: 'Päikeseline eramu aeda ja basseiniga',
    type: 'Maja',
    address: 'Männi tee 12, Tartu',
    price: 420000,
    rooms: 5,
    area: 220,
    floor: '2',
    year: 2015,
    description: 'Väga heas korras eramu Tartu äärelinnas. Maja on ehitatud kvaliteetsetest materjalidest, tugev vundament, soojustatud välisseinad. Küttekeskus gaasiga, lisaks kamin. Aed on hoolitsetud, lehtmetsapuud. Olemas välibassein grillimiskohaga. Garaaž kahele autole.',
    features: ['Garaaž', 'Bassein', 'Aed', 'Kamin', 'Gaasküte', 'Turvauks', 'Kahe auto koht'],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    location: 'Tartu',
    seller: 'Tartu Kinnisvara AS',
    phone: '+372 555 5678',
    posted: '5 päeva tagasi'
  },
  3: {
    id: 3,
    title: 'Luksuslik penthouse merevaatega',
    type: 'Korter',
    address: 'Pirita tee 20, Tallinn',
    price: 550000,
    rooms: 4,
    area: 180,
    floor: '10/12',
    year: 2020,
    description: 'Eksklusiivne penthouse Tallinna kõige nõutumal alal - Pirita. Korter asub 10. korrusel, avaneb hingemattev vaade merele ja linnale. Korter on väga kõrge viimistlusega - itaalia mööbel, marmorpõrandad, kõrgepinge klaasid. Samuti on olemas privaatne katuseterrass. Majas on 24/7 valvur ja koncierge teenus.',
    features: ['Katuseterrass', 'Merevaade', 'Concierge', '24/7 Valve', 'Itaalia mööbel', 'Marmorpõrandad', 'Külaliste WC'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Pirita',
    seller: 'Premium Kinnisvara',
    phone: '+372 555 9012',
    posted: 'Täna'
  },
  4: {
    id: 4,
    title: 'Hubane puidust suvila järve ääres',
    type: 'Suvela',
    address: 'Järveotsa, Pärnu',
    price: 125000,
    rooms: 3,
    area: 75,
    floor: '1',
    year: 1985,
    description: 'Hubane puhkemaja Pärnu lähedal, otse järve kaldal. Maja on ehitatud puidust, säilitades autentsuse. Ehitatud 1985. aastal, kuid hästi hoitud. Olemas puukuur, grillimiskoht. Hea koht pere puhkamiseks või nädalalõpu veetmiseks. Aiaga piiratud territoorium.',
    features: ['Järve ääres', 'Grillimiskoht', 'Puukuur', 'Aed', 'Lapsedele ohutu'],
    images: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&h=600&fit=crop'
    ],
    location: 'Pärnu',
    seller: 'Pärnu Puhkemajad',
    phone: '+372 555 3456',
    posted: '1 nädal tagasi'
  },
  5: {
    id: 5,
    title: 'Äripind kesklinnas - väga hea asukohaga',
    type: 'Äripind',
    address: 'Viru väljak 2, Tallinn',
    price: 380000,
    rooms: 6,
    area: 250,
    floor: '1/3',
    year: 2010,
    description: 'Väga hea asukohaga äripind otse Viru keskuse kõrval. Sobib suurepäraselt büroo, kaupluse või teeninduseks. Ruumid on avatud planeeringuga, võimalik jagada. Hea valgustus, kõik kommunikatsioonid olemas. Hoone on 2010. aastal ehitatud, väga heas korras.',
    features: ['Hea asukoht', 'Avatud planeering', 'Kõik kommunikatsioonid', 'Parkimine', 'Lift'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop'
    ],
    location: 'Tallinn, Kesklinn',
    seller: 'Ärikinnisvara OÜ',
    phone: '+372 555 7890',
    posted: '3 päeva tagasi'
  },
  6: {
    id: 6,
    title: 'Suur maatükk ehitusloaga',
    type: 'Maatükk',
    address: 'Kloogari, Harju maakond',
    price: 89000,
    rooms: 0,
    area: 5000,
    floor: '-',
    year: 2023,
    description: 'Suur 5000 m2 maatükk Harju maakonnas, olemas kehtiv ehitusluba elamu ehitamiseks. Maa on tasane, heas asukohas - 20 km Tallinnast, lähedal asuvad poed ja kool. Teed on heas korras, külg on elektrilevist. Sobib suurele perele või investeeringuks.',
    features: ['Ehitusluba', 'Elekter', 'Teed', 'Hea asukoht', '5000 m2'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    ],
    location: 'Harju maakond',
    seller: 'Maatükk OÜ',
    phone: '+372 555 2345',
    posted: '4 päeva tagasi'
  },
  7: {
    id: 7,
    title: '2-toaline korter bussijaama lähedal',
    type: 'Korter',
    address: 'Jaama pst 45, Narva',
    price: 65000,
    rooms: 2,
    area: 48,
    floor: '2/5',
    year: 1975,
    description: 'Ökonoomne 2-toaline korter Narva bussijaama lähedal. Korter on heas korras, läbi värskelt remonditud. Mööbel jääb sisse. Transport väga hea - bussijaam 5 min jalutuskäiku. Kõik vajalik käe-jala juures - poed, koolid, lasteaed.',
    features: ['Renoveeritud', 'Mööbel sees', 'Hea transport', 'Bussijaam lähedal'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    location: 'Narva',
    seller: 'Narva Kinnisvara',
    phone: '+372 555 6789',
    posted: '6 päeva tagasi'
  },
  8: {
    id: 8,
    title: 'Uus korter uues majas',
    type: 'Korter',
    address: 'Sõpruse tee 15, Viljandi',
    price: 112000,
    rooms: 2,
    area: 55,
    floor: '4/5',
    year: 2021,
    description: 'Väga heas korras uus korter Viljandi uues majas. Korter on ehitatud 2021. aastal, kõik on veel garantii all. Planeering on mõistlik - avatud köök-elutuba, eraldi magamistuba. Rõdu päikse poole. Maja on energiatõhus (A klass). Külg on soojustatud.',
    features: ['Uus ehitis', 'Rõdu', 'A klass energiatõhusus', 'Garantii', 'Parkimiskoht'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    location: 'Viljandi',
    seller: 'Viljandi Uus Maja',
    phone: '+372 555 1234',
    posted: '1 nädal tagasi'
  }
}

export default function PropertyDetailPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const property = propertyDatabase[id]
  const [selectedImage, setSelectedImage] = useState(0)
  const [showContactModal, setShowContactModal] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="section">
          <div className="container">
            <div className="no-results">
              <i className="fas fa-home"></i>
              <h2>Kinnisvara ei leitud</h2>
              <p>Kahjuks seda objekti enam müügis ei ole.</p>
              <Link href="/kinnisvara" className="btn-primary">
                <i className="fas fa-arrow-left"></i>
                Tagasi kinnisvarasse
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

      {/* Detail Header */}
      <div className="detail-header">
        <div className="container">
          <Link href="/kinnisvara" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi kinnisvarasse
          </Link>
          <h1>{property.title}</h1>
          <p className="detail-address">{property.address}</p>
          <span className="detail-price">{property.price.toLocaleString()} €</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="detail-grid">
            {/* Images */}
            <div className="detail-images">
              <div className="main-image">
                <img src={property.images[selectedImage]} alt={property.title} />
              </div>
              <div className="image-thumbs">
                {property.images.map((img, i) => (
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

            {/* Panel */}
            <div className="detail-panel">
              <div className="detail-stats">
                <div className="detail-stat">
                  <i className="fas fa-vector-square"></i>
                  <span className="stat-value">{property.area} m²</span>
                  <span className="stat-label">Pind</span>
                </div>
                <div className="detail-stat">
                  <i className="fas fa-door-open"></i>
                  <span className="stat-value">{property.rooms}</span>
                  <span className="stat-label">Tubade arv</span>
                </div>
                <div className="detail-stat">
                  <i className="fas fa-building"></i>
                  <span className="stat-value">{property.floor}</span>
                  <span className="stat-label">Korrus</span>
                </div>
                <div className="detail-stat">
                  <i className="fas fa-calendar"></i>
                  <span className="stat-value">{property.year}</span>
                  <span className="stat-label">Ehitusaasta</span>
                </div>
              </div>

              <button className="btn-primary" onClick={() => setShowContactModal(true)}>
                <i className="fas fa-envelope"></i>
                Võta ühendust
              </button>

              <a href={`tel:${property.phone}`} className="btn-primary" style={{ background: '#64748b' }}>
                <i className="fas fa-phone"></i>
                {property.phone}
              </a>

              <div className="detail-section" style={{ marginBottom: 0 }}>
                <p style={{ margin: 0 }}><i className="fas fa-building" style={{ marginRight: 8 }}></i> {property.seller}</p>
                <p style={{ margin: '8px 0 0' }}><i className="fas fa-clock" style={{ marginRight: 8 }}></i> {property.posted}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="detail-section">
            <h2><i className="fas fa-align-left"></i> Kirjeldus</h2>
            <p>{property.description}</p>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2><i className="fas fa-list-check"></i> Varustus</h2>
            <div className="detail-features">
              {property.features.map((feature, i) => (
                <span key={i} className="detail-feature">
                  <i className="fas fa-check"></i>
                  {feature}
                </span>
              ))}
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
            <p>{property.title}</p>
            
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
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
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

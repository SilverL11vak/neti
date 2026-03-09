'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function MeistPage() {
  const [lang, setLang] = useState('et')

  return (
    <>
      <Navbar />

      <section className="hero" style={{ minHeight: '50vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">
              {lang === 'et' ? 'Meist' : 'About Us'}
            </span>
          </h1>
          <p className="hero-subtitle">
            {lang === 'et' 
              ? 'NETI on Eesti vanim ja usaldusväärsem veebikataloog'
              : 'NETI is Estonia\'s oldest and most trusted web catalog'}
          </p>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '20px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            marginBottom: '24px'
          }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
              {lang === 'et' ? 'Meie lugu' : 'Our Story'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              {lang === 'et' 
                ? 'NETI asutati 1996. aastal ja on sellest saadik olnud Eesti interneti lahutamatu osa. Meie missioon on pakkuda kasutajatele lihtsat ja kiiret viisi leida parimad Eesti veebilehed.'
                : 'NETI was founded in 1996 and has been an integral part of the Estonian internet ever since. Our mission is to provide users with a simple and fast way to find the best Estonian websites.'}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)' }}>1996</div>
              <div style={{ color: 'var(--text-secondary)' }}>{lang === 'et' ? 'Asutatud' : 'Founded'}</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)' }}>10K+</div>
              <div style={{ color: 'var(--text-secondary)' }}>{lang === 'et' ? 'Veebilehte' : 'Websites'}</div>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)' }}>1M+</div>
              <div style={{ color: 'var(--text-secondary)' }}>{lang === 'et' ? 'Kasutajat' : 'Users'}</div>
            </div>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '20px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
          }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
              {lang === 'et' ? 'Kontakt' : 'Contact'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
              {lang === 'et' 
                ? 'Küsimuste või ettepanekute korral võtke meiega ühendust:'
                : 'If you have questions or suggestions, contact us:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:info@neti.ee" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--accent)' }}></i>
                info@neti.ee
              </a>
              <a href="tel:+3721234567" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="fas fa-phone" style={{ color: 'var(--accent)' }}></i>
                +372 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  ? 'NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastal.'
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const weatherData = {
  current: {
    temp: 8,
    condition: 'Poolpilvine',
    icon: 'fa-cloud-sun',
    wind: 12,
    humidity: 78,
    pressure: 1023
  },
  forecast: [
    { day: 'E', high: 6, low: 2, icon: 'fa-cloud', name: 'Esmaspäev' },
    { day: 'T', high: 4, low: 1, icon: 'fa-cloud-rain', name: 'Teisipäev' },
    { day: 'K', high: 9, low: 3, icon: 'fa-sun', name: 'Kolmapäev' },
    { day: 'N', high: 7, low: 2, icon: 'fa-cloud', name: 'Neljapäev' },
    { day: 'R', high: 5, low: 1, icon: 'fa-snowflake', name: 'Reede' }
  ],
  cities: [
    { name: 'Tallinn', temp: 8, condition: 'Poolpilvine' },
    { name: 'Tartu', temp: 6, condition: 'Pilvine' },
    { name: 'Pärnu', temp: 9, condition: 'Selge' },
    { name: 'Narva', temp: 5, condition: 'Pilvine' },
    { name: 'Kohtla-Järve', temp: 4, condition: 'Vihm' }
  ]
}

export default function IlmPage() {
  const [lang, setLang] = useState('et')

  return (
    <>
      <Navbar />

      <section className="hero" style={{ minHeight: '30vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">
              {lang === 'et' ? 'Ilm Eestis' : 'Weather in Estonia'}
            </span>
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Main Weather Card */}
          <div className="widget" style={{ gridColumn: 'span 2' }}>
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="widget-info">
                <h3>Tallinn</h3>
                <span className="widget-location">{lang === 'et' ? 'Praegu' : 'Now'}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '5rem', fontWeight: '700', lineHeight: 1 }}>{weatherData.current.temp}°</span>
                <span style={{ fontSize: '1.5rem', marginTop: '12px', color: 'var(--text-secondary)' }}>C</span>
                <i className={`fas ${weatherData.current.condition}`} style={{ fontSize: '4rem', marginLeft: '20px', color: 'var(--primary)' }}></i>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-wind" style={{ color: 'var(--primary)', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{weatherData.current.wind} km/h</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{lang === 'et' ? 'Tuul' : 'Wind'}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-tint" style={{ color: 'var(--primary)', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{weatherData.current.humidity}%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{lang === 'et' ? 'Niiskus' : 'Humidity'}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-gauge-high" style={{ color: 'var(--primary)', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{weatherData.current.pressure} hPa</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{lang === 'et' ? 'Õhurõhk' : 'Pressure'}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-cloud" style={{ color: 'var(--primary)', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{weatherData.current.condition}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{lang === 'et' ? 'Olek' : 'Condition'}</div>
              </div>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="widget">
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="widget-info">
                <h3>{lang === 'et' ? '5 päeva prognoos' : '5-Day Forecast'}</h3>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {weatherData.forecast.map((day, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'var(--bg-light)',
                  borderRadius: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontWeight: '600', width: '24px' }}>{day.day}</span>
                    <i className={`fas ${day.icon}`} style={{ color: 'var(--primary)' }}></i>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{day.name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontWeight: '600' }}>{day.high}°</span>
                    <span style={{ color: 'var(--text-muted)' }}>{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div className="widget">
            <div className="widget-header">
              <div className="widget-icon">
                <i className="fas fa-city"></i>
              </div>
              <div className="widget-info">
                <h3>{lang === 'et' ? 'Linnad' : 'Cities'}</h3>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {weatherData.cities.map((city, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'var(--bg-light)',
                  borderRadius: '10px'
                }}>
                  <span style={{ fontWeight: '500' }}>{city.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{city.temp}°C</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{city.condition}</span>
                  </div>
                </div>
              ))}
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

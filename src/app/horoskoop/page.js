'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const horoscopeData = [
  { sign: 'aries', name: 'Jäärapäev', symbol: '♈', dates: '21.03 - 19.04', reading: 'Täna on hea päev uute alguste jaoks. Sinu ambitsioon viib sind edasi!', love: '❤️❤️❤️', work: '💼💼💼', mood: '😊' },
  { sign: 'taurus', name: 'Sõnn', symbol: '♉', dates: '20.04 - 20.05', reading: 'Finantsasjad on täna soodsad. Ära kiirusta otsustega.', love: '❤️❤️', work: '💼💼💼💼', mood: '😐' },
  { sign: 'gemini', name: 'Kaksikud', symbol: '♊', dates: '21.05 - 20.06', reading: 'Suhtlus avab uusi võimalusi. Kohtud huvitavate inimestega.', love: '❤️❤️❤️❤️', work: '💼💼', mood: '😄' },
  { sign: 'cancer', name: 'Vähk', symbol: '♋', dates: '21.06 - 22.07', reading: 'Pere ja kodu pakuvad täna rõõmu. Veisa aega lähedastega.', love: '❤️❤️❤️❤️❤️', work: '💼💼💼', mood: '🥰' },
  { sign: 'leo', name: 'Lõvi', symbol: '♌', dates: '23.07 - 22.08', reading: 'Sinu loovus on tipptasemel. Näita oma talente maailmale!', love: '❤️❤️❤️', work: '💼💼💼💼💼', mood: '😎' },
  { sign: 'virgo', name: 'Neitsi', symbol: '♍', dates: '23.08 - 22.09', reading: 'Tähelepanu detailidele toob edu. Sinu analüütiline mõtlemine tasub ära.', love: '❤️❤️', work: '💼💼💼💼', mood: '🤔' },
  { sign: 'libra', name: 'Kaalud', symbol: '♎', dates: '23.09 - 22.10', reading: 'Tasakaal on täna su võti. Leiad harmoonia suhetes.', love: '❤️❤️❤️❤️', work: '💼💼💼', mood: '😌' },
  { sign: 'scorpio', name: 'Skorpion', symbol: '♏', dates: '23.10 - 21.11', reading: 'Sinu intuitsioon on eriti terav. Usalda oma sisetunnet!', love: '❤️❤️❤️', work: '💼💼💼💼', mood: '😏' },
  { sign: 'sagittarius', name: 'Amburi', symbol: '♐', dates: '22.11 - 21.12', reading: 'Seiklused ootavad! Reisimine toob uusi kogemusi.', love: '❤️❤️', work: '💼💼', mood: '🤩' },
  { sign: 'capricorn', name: 'Kaljukits', symbol: '♑', dates: '22.12 - 19.01', reading: 'Karjäär edeneb hästi. Sinu vis töö tasub ära!', love: '❤️❤️❤️', work: '💼💼💼💼💼', mood: '💪' },
  { sign: 'aquarius', name: 'Veevalaja', symbol: '♒', dates: '20.01 - 18.02', reading: 'Innovatsioon on sinu küljes. Lea uusi lahendusi!', love: '❤️❤️❤️❤️', work: '💼💼💼', mood: '🧠' },
  { sign: 'pisces', name: 'Kalad', symbol: '♓', dates: '19.02 - 20.03', reading: 'Kunst ja loovus on esikohal. Anna endale lubadusi!', love: '❤️❤️❤️❤️❤️', work: '💼💼', mood: '🎨' }
]

export default function HoroskoopPage() {
  const [lang, setLang] = useState('et')
  const [selectedSign, setSelectedSign] = useState(horoscopeData[0])

  return (
    <>
      <Navbar />

      <section className="hero" style={{ minHeight: '30vh', paddingTop: '120px' }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">
              {lang === 'et' ? 'Horoskoop täna' : 'Horoscope Today'}
            </span>
          </h1>
          <p className="hero-subtitle">
            {lang === 'et' ? '8. märts 2026' : 'March 8, 2026'}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        {/* Zodiac Selection */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {horoscopeData.map((sign) => (
            <button
              key={sign.sign}
              onClick={() => setSelectedSign(sign)}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: selectedSign.sign === sign ? 'none' : '1px solid var(--glass-border)',
                background: selectedSign.sign === sign ? 'var(--primary)' : 'white',
                color: selectedSign.sign === sign ? 'white' : 'var(--text-primary)',
                fontSize: '1.4rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: selectedSign.sign === sign ? '0 4px 12px rgba(29, 78, 216, 0.3)' : 'none'
              }}
            >
              {sign.symbol}
            </button>
          ))}
        </div>

        {/* Selected Sign Details */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="widget" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '16px' }}>{selectedSign.symbol}</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--primary)' }}>{selectedSign.name}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{selectedSign.dates}</p>
            
            <div style={{ 
              padding: '24px', 
              background: 'var(--bg-light)', 
              borderRadius: '12px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                {lang === 'et' ? 'Päev horoskoop:' : 'Daily Horoscope:'}
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                {selectedSign.reading}
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{selectedSign.mood}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {lang === 'et' ? 'Tuju' : 'Mood'}
                </div>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{selectedSign.love}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {lang === 'et' ? 'Armastus' : 'Love'}
                </div>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{selectedSign.work}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {lang === 'et' ? 'Töö' : 'Work'}
                </div>
              </div>
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

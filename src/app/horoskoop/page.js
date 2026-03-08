'use client'

import { useState } from 'react'

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
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="logo-text">NETI</span>
          </a>
          <div className="nav-links">
            <a href="/kategooria" className="nav-link">Kategooriad</a>
            <a href="/otsing" className="nav-link">Otsing</a>
            <a href="/ilm" className="nav-link">Ilm</a>
            <a href="/horoskoop" className="nav-link">Horoskoop</a>
            <a href="/meist" className="nav-link">Meist</a>
          </div>
          <div className="nav-controls">
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === 'et' ? 'active' : ''}`} onClick={() => setLang('et')}>ET</button>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
        </div>
      </nav>

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
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
          </div>
        </div>
      </footer>
    </>
  )
}

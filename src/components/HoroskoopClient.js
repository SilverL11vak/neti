/**
 * NETI - Horoskoop Page Client Component
 * Handles all client-side interactivity for the horoscope page
 */

'use client'

import { useState } from ' the horoscope pagereact'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { useLanguage, useLoading } from '@/hooks'
import { zodiacSigns, horoscopeData } from '@/data'

export default function HoroskoopClient() {
  const { lang, setLang, t } = useLanguage('et')
  const { isLoading } = useLoading(1000)
  const [selectedSign, setSelectedSign] = useState(0)
  const [activeTab, setActiveTab] = useState('daily')

  const currentSign = zodiacSigns[selectedSign]
  const currentHoroscope = horoscopeData[currentSign?.id] || {}

  const tabs = [
    { id: 'daily', label: { et: 'Päev', en: 'Day' } },
    { id: 'weekly', label: { et: 'Nädal', en: 'Week' } },
    { id: 'monthly', label: { et: 'Kuu', en: 'Month' } },
    { id: 'love', label: { et: 'Armastus', en: 'Love' } },
    { id: 'work', label: { et: 'Töö', en: 'Work' } },
    { id: 'health', label: { et: 'Tervis', en: 'Health' } },
  ]

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-star"></i>
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
        <section className="horoscope-hero">
          <div className="container">
            <h1 data-aos="fade-up">
              <i className="fas fa-star"></i>
              {lang === 'et' ? 'Horoskoop' : 'Horoscope'}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {lang === 'et' 
                ? 'Sinu päev, nädal ja kuu tähtkujud' 
                : 'Your daily, weekly and monthly horoscope'}
            </p>
          </div>
        </section>

        {/* Zodiac Signs Grid */}
        <section className="zodiac-section">
          <div className="container">
            <div className="zodiac-grid">
              {zodiacSigns.map((sign, index) => (
                <button 
                  key={sign.id}
                  className={`zodiac-card ${selectedSign === index ? 'active' : ''}`}
                  onClick={() => setSelectedSign(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <span className="zodiac-symbol">{sign.symbol}</span>
                  <span className="zodiac-name">{lang === 'et' ? sign.name : sign.nameEn}</span>
                  <span className="zodiac-dates">{sign.date}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Horoscope */}
        {currentSign && (
          <section className="horoscope-detail-section">
            <div className="container">
              <div className="horoscope-detail" data-aos="fade-up">
                <div className="horoscope-header">
                  <span className="horoscope-symbol-large">{currentSign.symbol}</span>
                  <h2>{lang === 'et' ? currentSign.name : currentSign.nameEn}</h2>
                  <span className="horoscope-dates">{currentSign.date}</span>
                </div>

                {/* Tabs */}
                <div className="horoscope-tabs">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`horoscope-tab ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {lang === 'et' ? tab.label.et : tab.label.en}
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="horoscope-content" data-aos="fade-up">
                  {activeTab === 'daily' && (
                    <p>{currentHoroscope.daily || 'Andmed puuduvad'}</p>
                  )}
                  {activeTab === 'weekly' && (
                    <p>{currentHoroscope.weekly || 'Andmed puuduvad'}</p>
                  )}
                  {activeTab === 'monthly' && (
                    <p>{currentHoroscope.monthly || 'Andmed puuduvad'}</p>
                  )}
                  {activeTab === 'love' && (
                    <p>{currentHoroscope.love || 'Andmed puuduvad'}</p>
                  )}
                  {activeTab === 'work' && (
                    <p>{currentHoroscope.work || 'Andmed puuduvad'}</p>
                  )}
                  {activeTab === 'health' && (
                    <p>{currentHoroscope.health || 'Andmed puuduvad'}</p>
                  )}
                </div>

                {/* Lucky Info */}
                <div className="horoscope-lucky" data-aos="fade-up">
                  <div className="lucky-item">
                    <span className="lucky-label">{lang === 'et' ? 'Õnne numbrid' : 'Lucky numbers'}</span>
                    <span className="lucky-value">
                      {currentHoroscope.luckyNumbers?.join(', ') || '-'}
                    </span>
                  </div>
                  <div className="lucky-item">
                    <span className="lucky-label">{lang === 'et' ? 'Õnne värv' : 'Lucky color'}</span>
                    <span className="lucky-value">{currentHoroscope.luckyColor || '-'}</span>
                  </div>
                  <div className="lucky-item">
                    <span className="lucky-label">{lang === 'et' ? 'Sobib' : 'Compatible with'}</span>
                    <span className="lucky-value">{currentHoroscope.compatible || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Element Section */}
        <section className="elements-section">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Eleemendid' : 'Elements'}</h2>
            <div className="elements-grid">
              <div className="element-card fire" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-fire"></i>
                <h3>{lang === 'et' ? 'Tuli' : 'Fire'}</h3>
                <p>{lang === 'et' ? 'Jäärapäev, Lõvi, Amburi' : 'Aries, Leo, Sagittarius'}</p>
              </div>
              <div className="element-card earth" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-mountain"></i>
                <h3>{lang === 'et' ? 'Maa' : 'Earth'}</h3>
                <p>{lang === 'et' ? 'Sõnn, Neitsi, Kaljukits' : 'Taurus, Virgo, Capricorn'}</p>
              </div>
              <div className="element-card air" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-wind"></i>
                <h3>{lang === 'et' ? 'Õhk' : 'Air'}</h3>
                <p>{lang === 'et' ? 'Kaksikud, Kaalud, Veevalaja' : 'Gemini, Libra, Aquarius'}</p>
              </div>
              <div className="element-card water" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-water"></i>
                <h3>{lang === 'et' ? 'Vesi' : 'Water'}</h3>
                <p>{lang === 'et' ? 'Vähk, Skorpion, Kalad' : 'Cancer, Scorpio, Pisces'}</p>
              </div>
            </div>
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

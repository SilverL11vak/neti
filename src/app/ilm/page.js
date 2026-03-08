'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import '../autod/globals.css'

// Weather data
const weatherData = {
  current: {
    temp: 8,
    tempFeels: 5,
    condition: 'Poolpilvine',
    conditionEn: 'Partly Cloudy',
    icon: 'fa-cloud-sun',
    wind: 12,
    windDir: 'NE',
    humidity: 78,
    pressure: 1023,
    visibility: 10,
    uv: 2,
    sunrise: '07:15',
    sunset: '18:42'
  },
  hourly: [
    { time: '09:00', temp: 6, icon: 'fa-cloud' },
    { time: '10:00', temp: 7, icon: 'fa-cloud-sun' },
    { time: '11:00', temp: 8, icon: 'fa-sun' },
    { time: '12:00', temp: 9, icon: 'fa-sun' },
    { time: '13:00', temp: 9, icon: 'fa-cloud-sun' },
    { time: '14:00', temp: 8, icon: 'fa-cloud' },
    { time: '15:00', temp: 7, icon: 'fa-cloud-rain' },
    { time: '16:00', temp: 6, icon: 'fa-cloud' }
  ],
  forecast: [
    { day: 'E', high: 6, low: 2, icon: 'fa-cloud', name: 'Esmaspäev', nameEn: 'Monday' },
    { day: 'T', high: 4, low: 1, icon: 'fa-cloud-rain', name: 'Teisipäev', nameEn: 'Tuesday' },
    { day: 'K', high: 9, low: 3, icon: 'fa-sun', name: 'Kolmapäev', nameEn: 'Wednesday' },
    { day: 'N', high: 7, low: 2, icon: 'fa-cloud', name: 'Neljapäev', nameEn: 'Thursday' },
    { day: 'R', high: 5, low: 1, icon: 'fa-snowflake', name: 'Reede', nameEn: 'Friday' },
    { day: 'L', high: 6, low: 2, icon: 'fa-cloud-sun', name: 'Laupäev', nameEn: 'Saturday' },
    { day: 'P', high: 8, low: 3, icon: 'fa-sun', name: 'Pühapäev', nameEn: 'Sunday' }
  ],
  cities: [
    { name: 'Tallinn', temp: 8, condition: 'Poolpilvine', lat: '59.43', lon: '24.74' },
    { name: 'Tartu', temp: 6, condition: 'Pilvine', lat: '58.38', lon: '26.72' },
    { name: 'Pärnu', temp: 9, condition: 'Selge', lat: '58.39', lon: '24.54' },
    { name: 'Narva', temp: 5, condition: 'Pilvine', lat: '59.38', lon: '28.19' },
    { name: 'Kohtla-Järve', temp: 4, condition: 'Vihm', lat: '59.40', lon: '27.27' },
    { name: 'Viljandi', temp: 7, condition: 'Poolpilvine', lat: '58.36', lon: '25.60' },
    { name: 'Rakvere', temp: 6, condition: 'Pilvine', lat: '59.38', lon: '26.84' },
    { name: 'Kuressaare', temp: 9, condition: 'Selge', lat: '58.25', lon: '22.48' }
  ]
}

export default function IlmPage() {
  const [lang, setLang] = useState('et')
  const [selectedCity, setSelectedCity] = useState('Tallinn')

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="car-detail-header" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="container">
          <Link href="/" className="back-link" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          <div className="car-title-row">
            <h1 style={{ color: 'white' }}>
              {lang === 'et' ? 'Ilm Eestis' : 'Weather in Estonia'}
            </h1>
            <span className="car-year" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
              <i className="fas fa-map-marker-alt"></i> {selectedCity}
            </span>
          </div>
          <div className="car-price-location">
            <span className="car-price" style={{ color: 'white', fontSize: '3rem' }}>
              {weatherData.current.temp}°C
            </span>
            <span className="car-location" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <i className="fas fa-calendar-alt"></i>
              8. märts 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="car-detail-grid">
            {/* Left Column - Hourly Forecast */}
            <div className="car-images">
              <div className="main-image" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
                <div style={{ textAlign: 'center' }}>
                  <i className={`fas ${weatherData.current.icon}`} style={{ fontSize: '8rem', color: '#3b82f6', marginBottom: '20px' }}></i>
                  <p style={{ fontSize: '1.5rem', color: '#1e293b', fontWeight: '600' }}>
                    {lang === 'et' ? weatherData.current.condition : weatherData.current.conditionEn}
                  </p>
                  <p style={{ color: '#64748b' }}>
                    {lang === 'et' ? 'Tundub nagu' : 'Feels like'} {weatherData.current.tempFeels}°C
                  </p>
                </div>
              </div>
              <div className="image-thumbs">
                {weatherData.hourly.map((hour, i) => (
                  <button 
                    key={i} 
                    className="image-thumb"
                    style={{ padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
                  >
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{hour.time}</span>
                    <i className={`fas ${hour.icon}`} style={{ fontSize: '1.5rem', color: '#3b82f6' }}></i>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{hour.temp}°</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Info Panel */}
            <div className="car-info-panel">
              {/* Quick Stats */}
              <div className="stats-grid">
                <div className="stat-item">
                  <i className="fas fa-wind"></i>
                  <span className="stat-value">{weatherData.current.wind} km/h {weatherData.current.windDir}</span>
                  <span className="stat-label">{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-tint"></i>
                  <span className="stat-value">{weatherData.current.humidity}%</span>
                  <span className="stat-label">{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-gauge-high"></i>
                  <span className="stat-value">{weatherData.current.pressure} hPa</span>
                  <span className="stat-label">{lang === 'et' ? 'Rõhk' : 'Pressure'}</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-eye"></i>
                  <span className="stat-value">{weatherData.current.visibility} km</span>
                  <span className="stat-label">{lang === 'et' ? 'Nähtavus' : 'Visibility'}</span>
                </div>
              </div>

              {/* City Selector */}
              <div className="contact-card" style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>
                  <i className="fas fa-city"></i> {lang === 'et' ? 'Vali linn' : 'Select City'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {weatherData.cities.map((city, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedCity(city.name)}
                      style={{ 
                        padding: '12px 16px', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        background: selectedCity === city.name ? '#3b82f6' : 'white',
                        color: selectedCity === city.name ? 'white' : '#1e293b',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <span>{city.name}</span>
                      <span>{city.temp}° - {city.condition}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sun Times */}
              <div className="seller-card">
                <h3>{lang === 'et' ? 'Päikseaeg' : 'Sun Times'}</h3>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <i className="fas fa-sun" style={{ color: '#f59e0b' }}></i>
                  <span>{lang === 'et' ? 'Päiksetõus' : 'Sunrise'}:</span>
                  <strong>{weatherData.current.sunrise}</strong>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-moon" style={{ color: '#6366f1' }}></i>
                  <span>{lang === 'et' ? 'Päikseloojang' : 'Sunset'}:</span>
                  <strong>{weatherData.current.sunset}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast */}
          <div className="detail-section">
            <h2><i className="fas fa-calendar-alt"></i> {lang === 'et' ? '7 päeva prognoos' : '7-Day Forecast'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px', marginTop: '20px' }}>
              {weatherData.forecast.map((day, i) => (
                <div 
                  key={i}
                  style={{ 
                    padding: '20px', 
                    background: '#f8fafc', 
                    borderRadius: '12px', 
                    textAlign: 'center',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '10px' }}>
                    {lang === 'et' ? day.name : day.nameEn}
                  </p>
                  <i className={`fas ${day.icon}`} style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '10px' }}></i>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{day.high}°</span>
                    <span style={{ color: '#64748b' }}>/</span>
                    <span style={{ color: '#64748b' }}>{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Details */}
          <div className="detail-section">
            <h2><i className="fas fa-info-circle"></i> {lang === 'et' ? 'Ilma üksikasjad' : 'Weather Details'}</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                <span className="spec-val">{weatherData.current.wind} km/h {weatherData.current.windDir}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                <span className="spec-val">{weatherData.current.humidity}%</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Õhurõhk' : 'Pressure'}</span>
                <span className="spec-val">{weatherData.current.pressure} hPa</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Nähtavus' : 'Visibility'}</span>
                <span className="spec-val">{weatherData.current.visibility} km</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'UV-index' : 'UV Index'}</span>
                <span className="spec-val">{weatherData.current.uv}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Päiksetõus' : 'Sunrise'}</span>
                <span className="spec-val">{weatherData.current.sunrise}</span>
              </div>
              <div className="spec-row">
                <span className="spec-name">{lang === 'et' ? 'Päikseloojang' : 'Sunset'}</span>
                <span className="spec-val">{weatherData.current.sunset}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Language Toggle */}
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setLang('et')}
          style={{
            padding: '10px 20px',
            background: lang === 'et' ? '#3b82f6' : 'white',
            color: lang === 'et' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          ET
        </button>
        <button 
          onClick={() => setLang('en')}
          style={{
            padding: '10px 20px',
            background: lang === 'en' ? '#3b82f6' : 'white',
            color: lang === 'en' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          EN
        </button>
      </div>
    </>
  )
}

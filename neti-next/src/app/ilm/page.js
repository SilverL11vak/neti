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
      <div className="car-detail-header" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', padding: '100px 16px 40px', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <Link href="/" className="back-link" style={{ color: '#64748b', marginBottom: '16px' }}>
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          <div className="car-title-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
            <h1 style={{ color: '#1e293b', fontSize: '1.75rem' }}>
              {lang === 'et' ? 'Ilm Eestis' : 'Weather in Estonia'}
            </h1>
            <span className="car-year" style={{ background: '#e2e8f0', color: '#475569', fontSize: '0.9rem' }}>
              <i className="fas fa-map-marker-alt"></i> {selectedCity}
            </span>
          </div>
          <div className="car-price-location" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <span className="car-price" style={{ color: '#1e293b', fontSize: '2.5rem' }}>
              {weatherData.current.temp}°C
            </span>
            <span className="car-location" style={{ color: '#64748b', fontSize: '0.9rem' }}>
              <i className="fas fa-calendar-alt"></i>
              8. märts 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section" style={{ padding: '24px 16px' }}>
        <div className="container">
          {/* Grid - stacked on mobile */}
          <div className="car-detail-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Left Column - Hourly Forecast */}
            <div className="car-images" style={{ width: '100%' }}>
              <div className="main-image" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', borderRadius: '16px', marginBottom: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <i className={`fas ${weatherData.current.icon}`} style={{ fontSize: '5rem', color: '#3b82f6', marginBottom: '16px' }}></i>
                  <p style={{ fontSize: '1.25rem', color: '#1e293b', fontWeight: '600', marginBottom: '8px' }}>
                    {lang === 'et' ? weatherData.current.condition : weatherData.current.conditionEn}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    {lang === 'et' ? 'Tundub nagu' : 'Feels like'} {weatherData.current.tempFeels}°C
                  </p>
                </div>
              </div>
              {/* Horizontal scroll for hourly on mobile */}
              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', WebkitOverflowScrolling: 'touch' }}>
                {weatherData.hourly.map((hour, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      minWidth: '80px', 
                      padding: '16px 12px', 
                      background: '#f8fafc', 
                      borderRadius: '12px',
                      textAlign: 'center',
                      border: '1px solid #e2e8f0',
                      flexShrink: 0
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', marginBottom: '8px' }}>{hour.time}</span>
                    <i className={`fas ${hour.icon}`} style={{ fontSize: '1.25rem', color: '#3b82f6', display: 'block', marginBottom: '8px' }}></i>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{hour.temp}°</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info Panel */}
            <div className="car-info-panel" style={{ width: '100%' }}>
              {/* Quick Stats - 2x2 grid on mobile */}
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '24px' }}>
                <div className="stat-item" style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                  <i className="fas fa-wind" style={{ color: '#3b82f6', marginBottom: '8px' }}></i>
                  <span className="stat-value" style={{ display: 'block', fontWeight: '600', color: '#1e293b' }}>{weatherData.current.wind} km/h</span>
                  <span className="stat-label" style={{ fontSize: '0.8rem', color: '#64748b' }}>{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                </div>
                <div className="stat-item" style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                  <i className="fas fa-tint" style={{ color: '#3b82f6', marginBottom: '8px' }}></i>
                  <span className="stat-value" style={{ display: 'block', fontWeight: '600', color: '#1e293b' }}>{weatherData.current.humidity}%</span>
                  <span className="stat-label" style={{ fontSize: '0.8rem', color: '#64748b' }}>{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                </div>
                <div className="stat-item" style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                  <i className="fas fa-gauge-high" style={{ color: '#3b82f6', marginBottom: '8px' }}></i>
                  <span className="stat-value" style={{ display: 'block', fontWeight: '600', color: '#1e293b' }}>{weatherData.current.pressure}</span>
                  <span className="stat-label" style={{ fontSize: '0.8rem', color: '#64748b' }}>hPa</span>
                </div>
                <div className="stat-item" style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                  <i className="fas fa-eye" style={{ color: '#3b82f6', marginBottom: '8px' }}></i>
                  <span className="stat-value" style={{ display: 'block', fontWeight: '600', color: '#1e293b' }}>{weatherData.current.visibility} km</span>
                  <span className="stat-label" style={{ fontSize: '0.8rem', color: '#64748b' }}>{lang === 'et' ? 'Nähtavus' : 'Visibility'}</span>
                </div>
              </div>

              {/* City Selector */}
              <div style={{ padding: '20px', background: 'white', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginBottom: '16px', color: '#1e293b', fontSize: '1rem' }}>
                  <i className="fas fa-city" style={{ marginRight: '8px', color: '#3b82f6' }}></i> 
                  {lang === 'et' ? 'Vali linn' : 'Select City'}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {weatherData.cities.map((city, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedCity(city.name)}
                      style={{ 
                        padding: '12px', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '8px',
                        background: selectedCity === city.name ? '#3b82f6' : 'white',
                        color: selectedCity === city.name ? 'white' : '#1e293b',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sun Times */}
              <div style={{ padding: '20px', background: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginBottom: '16px', color: '#1e293b', fontSize: '1rem' }}>
                  <i className="fas fa-sun" style={{ marginRight: '8px', color: '#f59e0b' }}></i>
                  {lang === 'et' ? 'Päikseaeg' : 'Sun Times'}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-sun" style={{ fontSize: '1.5rem', color: '#f59e0b', marginBottom: '8px', display: 'block' }}></i>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>{lang === 'et' ? 'Päiksetõus' : 'Sunrise'}</p>
                    <strong style={{ color: '#1e293b' }}>{weatherData.current.sunrise}</strong>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-moon" style={{ fontSize: '1.5rem', color: '#6366f1', marginBottom: '8px', display: 'block' }}></i>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>{lang === 'et' ? 'Päikseloojang' : 'Sunset'}</p>
                    <strong style={{ color: '#1e293b' }}>{weatherData.current.sunset}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Day Forecast - horizontal scroll on mobile */}
          <div className="detail-section" style={{ marginTop: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#1e293b' }}>
              <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: '#3b82f6' }}></i> 
              {lang === 'et' ? '7 päeva prognoos' : '7-Day Forecast'}
            </h2>
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', WebkitOverflowScrolling: 'touch' }}>
              {weatherData.forecast.map((day, i) => (
                <div 
                  key={i}
                  style={{ 
                    minWidth: '90px', 
                    padding: '16px 12px', 
                    background: '#f8fafc', 
                    borderRadius: '12px', 
                    textAlign: 'center',
                    border: '1px solid #e2e8f0',
                    flexShrink: 0
                  }}
                >
                  <p style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.85rem', marginBottom: '8px' }}>
                    {day.day}
                  </p>
                  <i className={`fas ${day.icon}`} style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '8px', display: 'block' }}></i>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{day.high}°</span>
                    <span style={{ color: '#64748b' }}>/</span>
                    <span style={{ color: '#64748b' }}>{day.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Details */}
          <div className="detail-section" style={{ marginTop: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#1e293b' }}>
              <i className="fas fa-info-circle" style={{ marginRight: '8px', color: '#3b82f6' }}></i> 
              {lang === 'et' ? 'Ilma üksikasjad' : 'Weather Details'}
            </h2>
            <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              {[
                { label: lang === 'et' ? 'Tuul' : 'Wind', value: `${weatherData.current.wind} km/h ${weatherData.current.windDir}` },
                { label: lang === 'et' ? 'Niiskus' : 'Humidity', value: `${weatherData.current.humidity}%` },
                { label: lang === 'et' ? 'Õhurõhk' : 'Pressure', value: `${weatherData.current.pressure} hPa` },
                { label: lang === 'et' ? 'Nähtavus' : 'Visibility', value: `${weatherData.current.visibility} km` },
                { label: lang === 'et' ? 'UV-index' : 'UV Index', value: weatherData.current.uv },
                { label: lang === 'et' ? 'Päiksetõus' : 'Sunrise', value: weatherData.current.sunrise },
                { label: lang === 'et' ? 'Päikseloojang' : 'Sunset', value: weatherData.current.sunset }
              ].map((item, i) => (
                <div 
                  key={i}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '14px 16px', 
                    borderBottom: i < 6 ? '1px solid #e2e8f0' : 'none'
                  }}
                >
                  <span style={{ color: '#64748b' }}>{item.label}</span>
                  <span style={{ fontWeight: '600', color: '#1e293b' }}>{item.value}</span>
                </div>
              ))}
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
        gap: '8px'
      }}>
        <button 
          onClick={() => setLang('et')}
          style={{
            padding: '10px 16px',
            background: lang === 'et' ? '#3b82f6' : 'white',
            color: lang === 'et' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          ET
        </button>
        <button 
          onClick={() => setLang('en')}
          style={{
            padding: '10px 16px',
            background: lang === 'en' ? '#3b82f6' : 'white',
            color: lang === 'en' ? 'white' : '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          EN
        </button>
      </div>
    </>
  )
}

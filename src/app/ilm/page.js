'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

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
      <div className="weather-detail-header">
        <div className="container">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          
          <div className="weather-meta">
            <span className="weather-location-badge">
              <i className="fas fa-map-marker-alt"></i>
              {selectedCity}
            </span>
            <span className="weather-date">
              <i className="fas fa-calendar-alt"></i>
              8. märts 2026
            </span>
          </div>
          
          <h1 className="weather-title">
            {lang === 'et' ? 'Ilm Eestis' : 'Weather in Estonia'}
          </h1>
          
          <div className="weather-main-temp">
            <div className="temp-display">
              <i className={`fas ${weatherData.current.icon}`}></i>
              <span className="temp-value">{weatherData.current.temp}°</span>
              <span className="temp-unit">C</span>
            </div>
            <div className="temp-details">
              <p className="condition">{lang === 'et' ? weatherData.current.condition : weatherData.current.conditionEn}</p>
              <p className="feels-like">{lang === 'et' ? 'Tundub nagu' : 'Feels like'} {weatherData.current.tempFeels}°</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="weather-detail-grid">
            {/* Main Weather Content */}
            <div className="weather-main-content">
              
              {/* Hourly Forecast */}
              <div className="weather-card">
                <div className="card-header">
                  <h3><i className="fas fa-clock"></i> {lang === 'et' ? 'Tunni kaupa' : 'Hourly Forecast'}</h3>
                </div>
                <div className="hourly-scroll">
                  {weatherData.hourly.map((hour, i) => (
                    <div key={i} className="hourly-item">
                      <span className="hour-time">{hour.time}</span>
                      <i className={`fas ${hour.icon}`}></i>
                      <span className="hour-temp">{hour.temp}°</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7-Day Forecast */}
              <div className="weather-card">
                <div className="card-header">
                  <h3><i className="fas fa-calendar-alt"></i> {lang === 'et' ? '7 päeva prognoos' : '7-Day Forecast'}</h3>
                </div>
                <div className="forecast-list">
                  {weatherData.forecast.map((day, i) => (
                    <div key={i} className="forecast-item">
                      <span className="forecast-day">{lang === 'et' ? day.name : day.nameEn}</span>
                      <i className={`fas ${day.icon}`}></i>
                      <div className="forecast-temps">
                        <span className="temp-high">{day.high}°</span>
                        <span className="temp-low">{day.low}°</span>
                      </div>
                      <div className="forecast-bar">
                        <div className="forecast-bar-fill" style={{ width: `${((day.high - day.low) / 15) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Details */}
              <div className="weather-card">
                <div className="card-header">
                  <h3><i className="fas fa-info-circle"></i> {lang === 'et' ? 'Ilma üksikasjad' : 'Weather Details'}</h3>
                </div>
                <div className="details-grid">
                  <div className="detail-item">
                    <i className="fas fa-wind"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.wind} km/h {weatherData.current.windDir}</span>
                      <span className="detail-label">{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-tint"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.humidity}%</span>
                      <span className="detail-label">{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-gauge-high"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.pressure} hPa</span>
                      <span className="detail-label">{lang === 'et' ? 'Õhurõhk' : 'Pressure'}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-eye"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.visibility} km</span>
                      <span className="detail-label">{lang === 'et' ? 'Nähtavus' : 'Visibility'}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-sun"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.uv}</span>
                      <span className="detail-label">{lang === 'et' ? 'UV-index' : 'UV Index'}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-sun"></i>
                    <div className="detail-info">
                      <span className="detail-value">{weatherData.current.sunrise}</span>
                      <span className="detail-label">{lang === 'et' ? 'Päiksetõus' : 'Sunrise'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sun Times */}
              <div className="weather-card sun-times">
                <div className="sun-card">
                  <div className="sun-icon sunrise">
                    <i className="fas fa-sun"></i>
                  </div>
                  <div className="sun-info">
                    <span className="sun-label">{lang === 'et' ? 'Päiksetõus' : 'Sunrise'}</span>
                    <span className="sun-value">{weatherData.current.sunrise}</span>
                  </div>
                </div>
                <div className="sun-card">
                  <div className="sun-icon sunset">
                    <i className="fas fa-moon"></i>
                  </div>
                  <div className="sun-info">
                    <span className="sun-label">{lang === 'et' ? 'Päikseloojang' : 'Sunset'}</span>
                    <span className="sun-value">{weatherData.current.sunset}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="weather-sidebar">
              {/* City Selector */}
              <div className="sidebar-widget">
                <h4><i className="fas fa-city"></i> {lang === 'et' ? 'Vali linn' : 'Select City'}</h4>
                <div className="city-list">
                  {weatherData.cities.map((city, i) => (
                    <button 
                      key={i} 
                      className={`city-item ${selectedCity === city.name ? 'active' : ''}`}
                      onClick={() => setSelectedCity(city.name)}
                    >
                      <span className="city-name">{city.name}</span>
                      <span className="city-temp">{city.temp}°</span>
                      <span className="city-condition">{city.condition}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Weather Widget */}
              <div className="sidebar-widget weather-widget-blue">
                <div className="widget-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h4>{lang === 'et' ? 'Ilmatooted' : 'Weather Alerts'}</h4>
                <p>{lang === 'et' ? 'Hetkel pole ilmatooted' : 'No weather alerts at this time'}</p>
              </div>
              
              {/* Quick Stats */}
              <div className="sidebar-widget">
                <h4>{lang === 'et' ? 'Kiirinfo' : 'Quick Info'}</h4>
                <div className="quick-stats">
                  <div className="quick-stat">
                    <i className="fas fa-thermometer-half"></i>
                    <span>8°C / -2°C</span>
                    <span className="stat-label">{lang === 'et' ? 'Min/Max' : 'Min/Max'}</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-tint"></i>
                    <span>78%</span>
                    <span className="stat-label">{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-wind"></i>
                    <span>12 km/h</span>
                    <span className="stat-label">{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <style jsx>{`
        .weather-detail-header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 80px 24px 60px;
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        
        .back-link:hover {
          color: white;
        }
        
        .weather-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .weather-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .weather-date {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .weather-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 24px 0;
        }
        
        .weather-main-temp {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        .temp-display {
          display: flex;
          align-items: flex-start;
        }
        
        .temp-display i {
          font-size: 4rem;
          margin-right: 12px;
        }
        
        .temp-value {
          font-size: 5rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .temp-unit {
          font-size: 2rem;
          margin-top: 8px;
          opacity: 0.8;
        }
        
        .temp-details .condition {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 4px 0;
        }
        
        .temp-details .feels-like {
          font-size: 1rem;
          opacity: 0.8;
          margin: 0;
        }
        
        .section {
          padding: 60px 24px;
          background: #f8fafc;
        }
        
        .weather-detail-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
        }
        
        .weather-main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .weather-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        
        .card-header {
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .card-header h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          color: #1e293b;
          margin: 0;
        }
        
        .card-header h3 i {
          color: #3b82f6;
        }
        
        /* Hourly Scroll */
        .hourly-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
        }
        
        .hourly-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 70px;
          padding: 16px 12px;
          background: #f8fafc;
          border-radius: 12px;
        }
        
        .hour-time {
          font-size: 0.85rem;
          color: #64748b;
        }
        
        .hourly-item i {
          font-size: 1.5rem;
          color: #3b82f6;
        }
        
        .hour-temp {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        /* Forecast List */
        .forecast-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .forecast-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 16px;
          background: #f8fafc;
          border-radius: 10px;
        }
        
        .forecast-day {
          width: 100px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .forecast-item i {
          font-size: 1.25rem;
          color: #3b82f6;
          width: 32px;
          text-align: center;
        }
        
        .forecast-temps {
          display: flex;
          gap: 8px;
          width: 80px;
        }
        
        .temp-high {
          font-weight: 600;
          color: #1e293b;
        }
        
        .temp-low {
          color: #94a3b8;
        }
        
        .forecast-bar {
          flex: 1;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .forecast-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 3px;
        }
        
        /* Details Grid */
        .details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
        }
        
        .detail-item i {
          font-size: 1.5rem;
          color: #3b82f6;
          width: 32px;
        }
        
        .detail-info {
          display: flex;
          flex-direction: column;
        }
        
        .detail-value {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        .detail-label {
          font-size: 0.8rem;
          color: #64748b;
        }
        
        /* Sun Times */
        .sun-times {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        
        .sun-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
        }
        
        .sun-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        
        .sun-icon.sunrise {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: white;
        }
        
        .sun-icon.sunset {
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: white;
        }
        
        .sun-info {
          display: flex;
          flex-direction: column;
        }
        
        .sun-label {
          font-size: 0.85rem;
          color: #64748b;
        }
        
        .sun-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        /* Sidebar */
        .weather-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        
        .sidebar-widget h4 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          color: #1e293b;
          margin: 0 0 16px 0;
        }
        
        .sidebar-widget h4 i {
          color: #3b82f6;
        }
        
        .city-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .city-item {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 8px;
          align-items: center;
          padding: 12px;
          background: #f8fafc;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }
        
        .city-item:hover {
          background: #f1f5f9;
        }
        
        .city-item.active {
          background: #eff6ff;
          border-color: #3b82f6;
        }
        
        .city-name {
          font-weight: 500;
          color: #1e293b;
        }
        
        .city-temp {
          font-weight: 600;
          color: #3b82f6;
        }
        
        .city-condition {
          font-size: 0.8rem;
          color: #64748b;
        }
        
        .weather-widget-blue {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          text-align: center;
        }
        
        .weather-widget-blue h4 {
          color: white;
        }
        
        .weather-widget-blue h4 i {
          color: white;
        }
        
        .weather-widget-blue p {
          opacity: 0.9;
          margin: 0;
        }
        
        .weather-widget-blue .widget-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        
        .weather-widget-blue .widget-icon i {
          font-size: 1.5rem;
          color: white;
        }
        
        .quick-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .quick-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 10px;
        }
        
        .quick-stat i {
          color: #3b82f6;
          width: 24px;
        }
        
        .quick-stat span:first-of-type {
          font-weight: 600;
          color: #1e293b;
        }
        
        .quick-stat .stat-label {
          margin-left: auto;
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 400;
        }
        
        @media (max-width: 1024px) {
          .weather-detail-grid {
            grid-template-columns: 1fr;
          }
          
          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .weather-title {
            font-size: 1.5rem;
          }
          
          .temp-value {
            font-size: 3.5rem;
          }
          
          .temp-display i {
            font-size: 2.5rem;
          }
          
          .details-grid {
            grid-template-columns: 1fr;
          }
          
          .sun-times {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

/**
 * NETI - Home Page Client Component
 * Handles all client-side interactivity for the home page
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { useLanguage, useTheme, useLoading, useCarousel, useExpanded, useAOS, useSpotlight } from '@/hooks'
import { siteData, defaultWeather } from '@/data'

export default function HomeClient() {
  const router = useRouter()
  const { lang, setLang, t } = useLanguage('et')
  const { theme, toggleTheme } = useTheme()
  const { isLoading } = useLoading(1500)
  const { currentIndex: currentNews, next: nextNews } = useCarousel(siteData.newsItems.length, 5000)
  const { expanded: expandedCategory, toggle: toggleCategory } = useExpanded(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedZodiac, setSelectedZodiac] = useState(0)
  const [currentNewsCarousel, setCurrentNewsCarousel] = useState(0)
  const [newsToShow, setNewsToShow] = useState(3)
  const [weatherExpanded, setWeatherExpanded] = useState(false)
  const [tempUnit, setTempUnit] = useState('C')
  const [weatherLocation, setWeatherLocation] = useState({ city: 'Tallinn', country: 'Eesti' })
  const [weatherData, setWeatherData] = useState(defaultWeather)

  // Initialize AOS animations
  useAOS()

  // Initialize spotlight effect
  useSpotlight()

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          
          if (lat >= 57.5 && lat <= 59.5 && lon >= 21.5 && lon <= 28.5) {
            setWeatherLocation({ city: 'Tallinn', country: 'Eesti' })
          } else if (lat >= 58.3 && lat <= 58.6 && lon >= 26.5 && lon <= 27.5) {
            setWeatherLocation({ city: 'Tartu', country: 'Eesti' })
          } else if (lat >= 58.4 && lat <= 58.5 && lon >= 24.5 && lon <= 24.7) {
            setWeatherLocation({ city: 'Pärnu', country: 'Eesti' })
          } else if (lat >= 59.3 && lat <= 59.5 && lon >= 24.5 && lon <= 24.8) {
            setWeatherLocation({ city: 'Helsinki', country: 'Finland' })
          }
        },
        () => {}
      )
    }
  }, [])

  // Convert temperature
  const getDisplayTemp = (temp) => tempUnit === 'F' ? Math.round(temp * 9/5 + 32) : temp
  const getDisplayFeelsLike = (temp) => tempUnit === 'F' ? Math.round(temp * 9/5 + 32) : temp

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/otsing?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  // Get localized data
  const categories = siteData.categories
  const newsItems = siteData.newsItems
  const zodiacSigns = siteData.zodiacSigns
  const quickLinks = siteData.quickLinks

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-globe"></i>
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
        <section className="hero-light" style={{ paddingTop: '100px' }} data-aos="fade-in">
          <div className="container">
            <div className="hero-light-content">
              <div className="hero-light-header">
                <span className="hero-light-badge">
                  <i className="fas fa-globe-americas"></i>
                  {lang === 'et' ? 'Eesti juhtvebikataloog alates 1996' : 'Estonia\'s leading web catalog since 1996'}
                </span>
              </div>

              <h1 className="hero-light-title">
                <span className="hero-light-main">{lang === 'et' ? 'Avasta Eesti internet' : 'Discover the Estonian Web'}</span>
                <span className="hero-light-gradient">{lang === 'et' ? 'Ühes kohas' : 'All in One Place'}</span>
              </h1>

              <p className="hero-light-subtitle">
                {lang === 'et' 
                  ? 'Sinu nutikaim sisenemispunkt Eesti internetimaailma. Leia parimad veebilehed, teenused ja ettevõtted kiiresti ja lihtsalt.'
                  : 'Your smartest gateway to Estonian internet. Find the best websites, services, and businesses quickly and easily.'}
              </p>

              <div className="hero-light-search" data-aos="fade-down" data-aos-delay="300" data-aos-duration="800">
                <form className="search-light-form" onSubmit={handleSearch}>
                  <i className="fas fa-search search-light-icon"></i>
                  <input
                    type="text"
                    placeholder={lang === 'et' ? 'Otsi veebilehti, teenuseid, ettevõtteid...' : 'Search websites, services, businesses...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-light-input"
                  />
                  <button type="submit" className="search-light-btn">
                    {lang === 'et' ? 'Otsi' : 'Search'}
                  </button>
                </form>
              </div>

              <div className="hero-light-quicklinks">
                <span className="quick-links-label">
                  {lang === 'et' ? 'Populaarsed:' : 'Popular:'}
                </span>
              </div>

              {/* Animated Logos Ticker */}
              <div className="hero-ticker-container">
                <div className="logos-ticker">
                  <div className="logos-track">
                    {[...Array(2)].map((_, loopIndex) => (
                      <div key={loopIndex} className="logos-inner">
                        <Link href="/otsing?q=Swedbank" className="logo-text-item"><span>Swedbank</span></Link>
                        <Link href="/otsing?q=SEB" className="logo-text-item"><span>SEB</span></Link>
                        <Link href="/otsing?q=Telia" className="logo-text-item"><span>Telia</span></Link>
                        <Link href="/otsing?q=Postimees" className="logo-text-item"><span>Postimees</span></Link>
                        <Link href="/otsing?q=Bolt" className="logo-text-item"><span>Bolt</span></Link>
                        <Link href="/otsing?q=Apollo" className="logo-text-item"><span>Apollo</span></Link>
                        <Link href="/otsing?q=K+K" className="logo-text-item"><span>K+Kaubad</span></Link>
                        <Link href="/otsing?q=COOP" className="logo-text-item"><span>COOP</span></Link>
                        <Link href="/otsing?q=Swedbank" className="logo-text-item"><span>Swedbank</span></Link>
                        <Link href="/otsing?q=SEB" className="logo-text-item"><span>SEB</span></Link>
                        <Link href="/otsing?q=Telia" className="logo-text-item"><span>Telia</span></Link>
                        <Link href="/otsing?q=Postimees" className="logo-text-item"><span>Postimees</span></Link>
                        <Link href="/otsing?q=Bolt" className="logo-text-item"><span>Bolt</span></Link>
                        <Link href="/otsing?q=Apollo" className="logo-text-item"><span>Apollo</span></Link>
                        <Link href="/otsing?q=K+K" className="logo-text-item"><span>K+Kaubad</span></Link>
                        <Link href="/otsing?q=COOP" className="logo-text-item"><span>COOP</span></Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-light-stats">
                <div className="stat-light">
                  <span className="stat-number-light">10,000+</span>
                  <span className="stat-label-light">{lang === 'et' ? 'veebilehte' : 'websites'}</span>
                </div>
                <div className="stat-divider-light"></div>
                <div className="stat-light">
                  <span className="stat-number-light">8</span>
                  <span className="stat-label-light">{lang === 'et' ? 'kategooriat' : 'categories'}</span>
                </div>
                <div className="stat-divider-light"></div>
                <div className="stat-light">
                  <span className="stat-number-light">1996</span>
                  <span className="stat-label-light">{lang === 'et' ? 'aastast' : 'since'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Section */}
        <section className="section" style={{ padding: '20px 0', background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <div className="weather-widget-card" onClick={() => setWeatherExpanded(!weatherExpanded)}>
              <div className="weather-widget-header">
                <div className="weather-widget-title">
                  <i className="fas fa-cloud-sun"></i>
                  <span>{lang === 'et' ? 'Ilm' : 'Weather'}</span>
                </div>
                <div className="weather-widget-actions">
                  <button 
                    className="weather-unit-toggle"
                    onClick={(e) => { e.stopPropagation(); setTempUnit(tempUnit === 'C' ? 'F' : 'C') }}
                  >
                    °{tempUnit}
                  </button>
                  <div className="weather-widget-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{weatherLocation.city}, {lang === 'et' ? weatherLocation.country : (weatherLocation.country === 'Eesti' ? 'Estonia' : weatherLocation.country)}</span>
                  </div>
                </div>
              </div>
              
              <div className="weather-widget-body">
                <div className="weather-widget-main">
                  <div className="weather-widget-temp">
                    <span className="temp-number">{getDisplayTemp(weatherData.temp)}</span>
                    <span className="temp-unit">°{tempUnit}</span>
                  </div>
                  <div className="weather-widget-details">
                    <span className="weather-condition">{lang === 'et' ? weatherData.condition : weatherData.conditionEn}</span>
                    <span className="weather-feels">{lang === 'et' ? 'Tunnetav: ' : 'Feels like: '}{getDisplayFeelsLike(weatherData.feelsLike)}°{tempUnit}</span>
                  </div>
                </div>
              </div>
              
              <div className="weather-widget-footer">
                <div className="weather-quick-stats">
                  <div className="quick-stat">
                    <i className="fas fa-wind"></i>
                    <span>{weatherData.wind} km/h</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-tint"></i>
                    <span>{weatherData.humidity}%</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-sun"></i>
                    <span>UV {weatherData.uv}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section" style={{ padding: '60px 0' }} data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Kategooriad' : 'Categories'}</h2>
            <p className="section-subtitle">{lang === 'et' ? 'Vali kategooria ja avasta parimad veebilehed' : 'Choose a category and discover the best websites'}</p>
            
            <div className="categories-grid">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className={`category-card ${expandedCategory === category.id ? 'expanded' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={categories.indexOf(category) * 100}
                >
                  <div className="category-header" onClick={() => toggleCategory(category.id)}>
                    <div className="category-icon">
                      <i className={`fas ${category.icon}`}></i>
                    </div>
                    <div className="category-info">
                      <h3>{lang === 'et' ? category.title : category.titleEn}</h3>
                      <p>{category.desc}</p>
                      <span className="category-count">{category.count} {lang === 'et' ? 'veebilehte' : 'websites'}</span>
                    </div>
                    <i className={`fas fa-chevron-${expandedCategory === category.id ? 'up' : 'down'} category-arrow`}></i>
                  </div>
                  
                  {expandedCategory === category.id && (
                    <div className="category-subcategories">
                      {category.subcategories.map((sub, index) => (
                        <Link key={index} href={`/otsing?q=${encodeURIComponent(sub)}`} className="subcategory-tag">
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="section" style={{ padding: '40px 0', background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Kiirlingid' : 'Quick Links'}</h2>
            <div className="quick-links-grid">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={`/otsing?q=${encodeURIComponent(link.text)}`} 
                  className="quick-link-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <i className={`fas ${link.icon}`}></i>
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* News Carousel Section */}
        <section className="section" data-aos="fade-up" data-aos-delay="400">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Uudised' : 'News'}</h2>
            
            <div className="news-carousel">
              <div className="news-carousel-track">
                {newsItems.map((news, index) => (
                  <div 
                    key={news.id} 
                    className={`news-carousel-item ${index === currentNewsCarousel ? 'active' : ''}`}
                    style={{ display: index === currentNewsCarousel ? 'block' : 'none' }}
                  >
                    <div className="news-carousel-image">
                      <img src={news.image} alt={lang === 'et' ? news.title : news.titleEn} />
                      <span className="news-carousel-category">{news.category}</span>
                    </div>
                    <div className="news-carousel-content">
                      <h3>{lang === 'et' ? news.title : news.titleEn}</h3>
                      <p>{lang === 'et' ? news.description : news.descriptionEn}</p>
                      <span className="news-carousel-date">{news.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="news-carousel-controls">
                <button 
                  className="news-carousel-btn prev"
                  onClick={() => setCurrentNewsCarousel((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="news-carousel-dots">
                  {newsItems.map((_, index) => (
                    <button 
                      key={index}
                      className={`news-carousel-dot ${index === currentNewsCarousel ? 'active' : ''}`}
                      onClick={() => setCurrentNewsCarousel(index)}
                    ></button>
                  ))}
                </div>
                <button 
                  className="news-carousel-btn next"
                  onClick={() => setCurrentNewsCarousel((prev) => (prev + 1) % newsItems.length)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Zodiac Section */}
        <section className="section" style={{ padding: '60px 0', background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="500">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Horoskoop' : 'Horoscope'}</h2>
            <p className="section-subtitle">{lang === 'et' ? 'Päeva horoskoop' : 'Daily Horoscope'}</p>
            
            <div className="zodiac-grid">
              {zodiacSigns.map((sign, index) => (
                <button 
                  key={sign.id}
                  className={`zodiac-card ${selectedZodiac === index ? 'selected' : ''}`}
                  onClick={() => setSelectedZodiac(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <span className="zodiac-symbol">{sign.symbol}</span>
                  <span className="zodiac-name">{lang === 'et' ? sign.name : sign.nameEn}</span>
                  <span className="zodiac-dates">{sign.date}</span>
                </button>
              ))}
            </div>
            
            <div className="zodiac-reading" data-aos="fade-up">
              <h3>{lang === 'et' ? zodiacSigns[selectedZodiac].name : zodiacSigns[selectedZodiac].nameEn}</h3>
              <p>{lang === 'et' ? zodiacSigns[selectedZodiac].horoscope.et : zodiacSigns[selectedZodiac].horoscope.en}</p>
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section className="section" data-aos="fade-up" data-aos-delay="600">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Kaubaturg' : 'Marketplace'}</h2>
            
            <div className="marketplace-grid">
              <Link href="/autod" className="marketplace-card" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-car"></i>
                <h3>{lang === 'et' ? 'Autod' : 'Cars'}</h3>
                <p>{lang === 'et' ? 'Osta ja müü autosid' : 'Buy and sell cars'}</p>
              </Link>
              
              <Link href="/kinnisvara" className="marketplace-card" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-home"></i>
                <h3>{lang === 'et' ? 'Kinnisvara' : 'Real Estate'}</h3>
                <p>{lang === 'et' ? 'Korterid, majad, maad' : 'Apartments, houses, land'}</p>
              </Link>
              
              <Link href="/turg" className="marketplace-card" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-shopping-bag"></i>
                <h3>{lang === 'et' ? 'Osta & Müü' : 'Buy & Sell'}</h3>
                <p>{lang === 'et' ? 'Kõik muu enampakkumisel' : 'Everything else for sale'}</p>
              </Link>
              
              <Link href="/too" className="marketplace-card" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-briefcase"></i>
                <h3>{lang === 'et' ? 'Töö' : 'Jobs'}</h3>
                <p>{lang === 'et' ? 'Tööpakkumised' : 'Job openings'}</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section" style={{ padding: '60px 0', background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="700">
          <div className="container">
            <h2 className="section-title">{lang === 'et' ? 'Teenused' : 'Services'}</h2>
            
            <div className="services-grid">
              <Link href="/horoskoop" className="service-card" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-star"></i>
                <span>{lang === 'et' ? 'Horoskoop' : 'Horoscope'}</span>
              </Link>
              
              <Link href="/ilm" className="service-card" data-aos="fade-up" data-aos-delay="150">
                <i className="fas fa-cloud-sun"></i>
                <span>{lang === 'et' ? 'Ilm' : 'Weather'}</span>
              </Link>
              
              <Link href="/games" className="service-card" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-gamepad"></i>
                <span>{lang === 'et' ? 'Mängud' : 'Games'}</span>
              </Link>
              
              <Link href="/uudised" className="service-card" data-aos="fade-up" data-aos-delay="250">
                <i className="fas fa-newspaper"></i>
                <span>{lang === 'et' ? 'Uudised' : 'News'}</span>
              </Link>
              
              <Link href="/kuulutus" className="service-card" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-bullhorn"></i>
                <span>{lang === 'et' ? 'Kuulutused' : 'Advertisements'}</span>
              </Link>
              
              <Link href="/kategooria" className="service-card" data-aos="fade-up" data-aos-delay="350">
                <i className="fas fa-th-large"></i>
                <span>{lang === 'et' ? 'Kategooriad' : 'Categories'}</span>
              </Link>
              
              <Link href="/otsing" className="service-card" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-search"></i>
                <span>{lang === 'et' ? 'Otsing' : 'Search'}</span>
              </Link>
              
              <Link href="/meist" className="service-card" data-aos="fade-up" data-aos-delay="450">
                <i className="fas fa-info-circle"></i>
                <span>{lang === 'et' ? 'Meist' : 'About Us'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section newsletter-section" data-aos="fade-up" data-aos-delay="800">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <h2>{lang === 'et' ? 'Liitu uudiskirjaga' : 'Subscribe to Newsletter'}</h2>
                <p>{lang === 'et' ? 'Saad uusimad uudised ja pakkumised otse postkasti' : 'Get the latest news and offers directly to your inbox'}</p>
              </div>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={lang === 'et' ? 'Sinu e-mail' : 'Your email'} />
                <button type="submit">{lang === 'et' ? 'Liitu' : 'Subscribe'}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-globe"></i>
                <span>NETI</span>
              </div>
              <p>{lang === 'et' ? 'Eesti juhtvebikataloog alates 1996' : 'Estonia\'s leading web catalog since 1996'}</p>
            </div>
            
            <div className="footer-links">
              <h4>{lang === 'et' ? 'Kategooriad' : 'Categories'}</h4>
              <Link href="/kategooria">{lang === 'et' ? 'Kõik kategooriad' : 'All Categories'}</Link>
              <Link href="/autod">{lang === 'et' ? 'Autod' : 'Cars'}</Link>
              <Link href="/kinnisvara">{lang === 'et' ? 'Kinnisvara' : 'Real Estate'}</Link>
              <Link href="/turg">{lang === 'et' ? 'Turg' : 'Marketplace'}</Link>
            </div>
            
            <div className="footer-links">
              <h4>{lang === 'et' ? 'Teenused' : 'Services'}</h4>
              <Link href="/otsing">{lang === 'et' ? 'Otsing' : 'Search'}</Link>
              <Link href="/horoskoop">{lang === 'et' ? 'Horoskoop' : 'Horoscope'}</Link>
              <Link href="/ilm">{lang === 'et' ? 'Ilm' : 'Weather'}</Link>
              <Link href="/games">{lang === 'et' ? 'Mängud' : 'Games'}</Link>
            </div>
            
            <div className="footer-links">
              <h4>{lang === 'et' ? 'Ettevõte' : 'Company'}</h4>
              <Link href="/meist">{lang === 'et' ? 'Meist' : 'About Us'}</Link>
              <Link href="/kuulutus">{lang === 'et' ? 'Kuulutused' : 'Advertisements'}</Link>
              <a href="mailto:info@neti.ee">info@neti.ee</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 1996 - 2026 NETI. {lang === 'et' ? 'Kõik õigused kaitstud.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

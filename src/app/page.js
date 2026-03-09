'use client'

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'

// Category data with subcategories from neti.ee
const categories = [
  {
    id: 'state-society',
    title: 'Riik ja Ühiskond',
    titleEn: 'State and Society',
    icon: 'fa-landmark',
    desc: 'Riigiorganid, kohalik omavalitsus, seadused ja poliitika',
    count: 245,
    subcategories: ['Riigikogu', 'Valitsus', 'Ministeeriumid', 'Ametid', 'Riigiõigus', 'Riigikaitse', 'Esindused', 'MTÜ', 'Regioonid', 'Vallad', 'Linnad', 'Erakonnad', 'Usk', 'SotsAbi', 'Laps', 'Eraisikud']
  },
  {
    id: 'info-media',
    title: 'Info ja Meedia',
    titleEn: 'Info and Media',
    icon: 'fa-newspaper',
    desc: 'Uudised, portaalid, ajakirjandus, raadio ja televisioon',
    count: 389,
    subcategories: ['Portaalid', 'Ajalehed', 'Ajakirjad', 'Televisioon', 'Raadiod', 'Foorumid', 'Kuulutused', 'Üritused', 'Ilm', 'Kaardid', 'Sõiduplaanid', 'Valuutakursid', 'Sõnastikud', 'Kalkulaatorid', 'Kataloogid']
  },
  {
    id: 'business',
    title: 'Äri ja Reisimine',
    titleEn: 'Business and Travel',
    icon: 'fa-briefcase',
    desc: 'Pangad, kindlustus, töövahendus, transport ja turism',
    count: 567,
    subcategories: ['Pangad', 'Laenud', 'Kindlustus', 'Töövahendus', 'Ärikoolitus', 'Keeleõpe', 'Tõlketeenused', 'Raamatud', 'Õigusabi', 'Raamatupidamine', 'Kontorikaubad', 'Post', 'Transport', 'Turism']
  },
  {
    id: 'science-tech',
    title: 'Tehnika ja Ehitus',
    titleEn: 'Technology and Construction',
    icon: 'fa-cogs',
    desc: 'Kinnisvara, ehitus, autod ja tehnika',
    count: 423,
    subcategories: ['Kinnisvara', 'Ehitus', 'Tööriistad', 'Ehitusmaterjalid', 'Metall', 'Puit', 'Sanitaartehnika', 'Energia', 'Arvutid', 'Internet', 'Side', 'Mobiilid', 'Autod', 'Rent', 'Hooldus', 'Varuosad', 'Kütus', 'Autokoolid']
  },
  {
    id: 'education',
    title: 'Haridus ja Kultuur',
    titleEn: 'Education and Culture',
    icon: 'fa-graduation-cap',
    desc: 'Koolid, ülikoolid, kultuur ja teadus',
    count: 198,
    subcategories: ['Haridus', 'Algkoolid', 'Põhikoolid', 'Keskkoolid', 'Kõrgkoolid', 'Kutseõppeasutused', 'Eriharidus', 'Õppematerjalid', 'Teadus', 'Ajalugu', 'Kirjandus', 'Rahvamajad', 'Raamatukogud', 'Muuseumid', 'Teater', 'Kunst', 'Kunstnikud', 'Fotograafid']
  },
  {
    id: 'entertainment',
    title: 'Meelelahutus ja Hobid',
    titleEn: 'Entertainment and Hobbies',
    icon: 'fa-gamepad',
    desc: 'Mängud, film, muusika ja kultuur',
    count: 612,
    subcategories: ['Mängud', 'E-kaart', 'Tutvus', 'Jututoad', 'Huviklubid', 'Koduloomad', 'Veterinaaria', 'Loto', 'Film', 'Muusika', 'Inimene', 'Horoskoobid', 'Mood', 'Tants', 'Toitlustus', 'Ööklubid', 'Täiskasvanutele']
  },
  {
    id: 'health',
    title: 'Tervis ja Sport',
    titleEn: 'Health and Sports',
    icon: 'fa-heartbeat',
    desc: 'Meditsiin, ilu, toitumine ja sport',
    count: 276,
    subcategories: ['Meditsiin', 'Arstid', 'Hambaarstid', 'Haiglad', 'Apteegid', 'Meditsiinivahendid', 'Psühholoogia', 'Tervishoid', 'Vanurid', 'Puuded', 'Iluteenindus', 'Parfüümeeria', 'Spa', 'Sport', 'Spordikaubad']
  },
  {
    id: 'home-environment',
    title: 'Kodu ja Keskkond',
    titleEn: 'Home and Environment',
    icon: 'fa-home',
    desc: 'Kodu, aed, keskkond, loomad ja pere',
    count: 334,
    subcategories: ['Kodutehnika', 'Mööbel', 'Kodutekstiil', 'Rõivad', 'Ehted-Lilled', 'Lastekaubad', 'Fototeenused', 'Turvalisus', 'Puhastus', 'Keskkond', 'Põllundus', 'Aiandus', 'Toidukaubad', 'Kauplused']
  }
]

const quickLinks = [
  { text: 'Postimees', icon: 'fa-newspaper' },
  { text: 'Swedbank', icon: 'fa-university' },
  { text: 'Tartu Ülikool', icon: 'fa-graduation-cap' },
  { text: 'Kuldne Börs', icon: 'fa-car' },
  { text: 'Telia', icon: 'fa-mobile-alt' },
  { text: 'SEB', icon: 'fa-building-columns' },
  { text: 'Apollo', icon: 'fa-book' },
  { text: 'Bolt', icon: 'fa-taxi' }
]

// News data for the carousel
const newsItems = [
  {
    id: 1,
    title: 'Tallinnas avati uus moodsate tehnoloogiate keskus',
    titleEn: 'New modern technology center opened in Tallinn',
    description: 'Eesti pealinnas avati täna suurim tehnoloogia- ja innovatsioonikeskus, kus startup-id ja tehnoloogiaettevõtted saavad arendada uusi lahendusi.',
    descriptionEn: 'The capital of Estonia opened the largest technology and innovation center today, where startups and technology companies can develop new solutions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    date: '8. märts 2026',
    category: 'Tehnoloogia'
  },
  {
    id: 2,
    title: 'Eesti ilu- ja tervisemess toimub sel nädalal',
    titleEn: 'Estonian beauty and health fair this week',
    description: 'Nädalavahetusel toimub Tallinnas suur ilu- ja tervisemess, kus osalevad tuntud brändid ja eksperdid jagavad nõuandeid tervisliku eluviisi kohta.',
    descriptionEn: 'This weekend a major beauty and health fair takes place in Tallinn, where well-known brands and experts will share advice on healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop',
    date: '7. märts 2026',
    category: 'Tervis'
  },
  {
    id: 3,
    title: 'Uuring: Eestlased eelistavad puhkuseks kodumaad',
    titleEn: 'Study: Estonians prefer domestic travel for holidays',
    description: 'Uuringu kohaselt eelistavad Eesti elanikud puhkuse veetmist kodumaal, eelkõige Saaremaal ja Pärnumaal, kus pakutakse matka- ja SPA-võimalusi.',
    descriptionEn: 'According to a study, Estonian residents prefer spending their holidays domestically, especially in Saaremaa and Pärnu county, which offer hiking and SPA opportunities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    date: '6. märts 2026',
    category: 'Reisimine'
  },
  {
    id: 4,
    title: 'Eesti ekonomi kasvas eelmisel aastal 3%',
    titleEn: 'Estonian economy grew 3% last year',
    description: 'Statistikaameti andmetel kasvas Eesti SKP eelmisel aastal 3%, mis ületab Euroopa Liidu keskmist.',
    descriptionEn: 'According to Statistics Estonia, Estonia\'s GDP grew by 3% last year, which exceeds the European Union average.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop',
    date: '5. märts 2026',
    category: 'Majandus'
  },
  {
    id: 5,
    title: 'Uus elektriauto laeb 80% 15 minutiga',
    titleEn: 'New electric car charges 80% in 15 minutes',
    description: 'Eesti startup arendas välja uue kiirlaadimise tehnoloogia, mis võimaldab elektriautodel laadida kuni 80% vaid 15 minutiga.',
    descriptionEn: 'An Estonian startup developed new fast charging technology that allows electric cars to charge up to 80% in just 15 minutes.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop',
    date: '4. märts 2026',
    category: 'Tehnoloogia'
  },
  {
    id: 6,
    title: 'Tallinna raamatukogu avas uue digitaalse teenuse',
    titleEn: 'Tallinn Library launches new digital service',
    description: 'Tallinna Keskraamatukogu pakub nüüd võimalust laenutada e-raamatuid ja audioraamatuid otse nutiseadmesse.',
    descriptionEn: 'Tallinn Central Library now offers the ability to borrow e-books and audiobooks directly to your smart device.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
    date: '3. märts 2026',
    category: 'Kultuur'
  }
]

// Zodiac data with horoscopes
const zodiacSigns = [
  { id: 'aries', symbol: '♈', name: 'Jäärapäev', nameEn: 'Aries', date: '21.03 - 19.04', horoscope: { et: 'Täna on hea päev uute alguste jaoks. Sinu ambitsioon viib sind edasi!', en: 'Today is a good day for new beginnings. Your ambition will drive you forward!' }},
  { id: 'taurus', symbol: '♉', name: 'Sõnn', nameEn: 'Taurus', date: '20.04 - 20.05', horoscope: { et: 'Rahaasjad on täna soodsad. Võid saada ootamatut tulu.', en: 'Financial matters are favorable today. You may receive unexpected income.' }},
  { id: 'gemini', symbol: '♊', name: 'Kaksikud', nameEn: 'Gemini', date: '21.05 - 20.06', horoscope: { et: 'Suhted on täna esikohal. Hea aeg kohtumisteks.', en: 'Relationships are in focus today. A good time for meetings.' }},
  { id: 'cancer', symbol: '♋', name: 'Vähk', nameEn: 'Cancer', date: '21.06 - 22.07', horoscope: { et: 'Kodu ja pere on täna tähtsad. Hea aeg kodusisustamiseks.', en: 'Home and family are important today. Good time for home improvements.' }},
  { id: 'leo', symbol: '♌', name: 'Lõvi', nameEn: 'Leo', date: '23.07 - 22.08', horoscope: { et: 'Sinu karisma viib sind täna edasi. Tähtis päev!', en: 'Your charisma drives you forward today. An important day!' }},
  { id: 'virgo', symbol: '♍', name: 'Neitsi', nameEn: 'Virgo', date: '23.08 - 22.09', horoscope: { et: 'Täna on hea päev tervisele keskendumiseks.', en: 'Today is a good day to focus on health.' }},
  { id: 'libra', symbol: '♎', name: 'Kaalud', nameEn: 'Libra', date: '23.09 - 22.10', horoscope: { et: 'Balanss on võtmesõna. Leia harmoonia.', en: 'Balance is the keyword. Find harmony.' }},
  { id: 'scorpio', symbol: '♏', name: 'Skorpion', nameEn: 'Scorpio', date: '23.10 - 21.11', horoscope: { et: 'Salajased asjad tulevad ilmsiks. Ära karda tõde.', en: 'Secret things come to light. Do not be afraid of the truth.' }},
  { id: 'sagittarius', symbol: '♐', name: 'Amburi', nameEn: 'Sagittarius', date: '22.11 - 21.12', horoscope: { et: 'Seiklus kutsub! Hea aeg reisimiseks.', en: 'Adventure calls! Good time for traveling.' }},
  { id: 'capricorn', symbol: '♑', name: 'Kaljukits', nameEn: 'Capricorn', date: '22.12 - 19.01', horoscope: { et: 'Karjääri edendamine on täna fookuses.', en: 'Career advancement is in focus today.' }},
  { id: 'aquarius', symbol: '♒', name: 'Veevalaja', nameEn: 'Aquarius', date: '20.01 - 18.02', horoscope: { et: 'Loovus lendab täna kõrgustesse. Kasuta seda!', en: 'Creativity soars today. Use it!' }},
  { id: 'pisces', symbol: '♓', name: 'Kalad', nameEn: 'Pisces', date: '19.02 - 20.03', horoscope: { et: 'Intuitsioon on tugev. Kuula sisetunnet.', en: 'Intuition is strong. Listen to your gut.' }}
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [lang, setLang] = useState('et')
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [selectedZodiac, setSelectedZodiac] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentNews, setCurrentNews] = useState(0)
  const [newsToShow, setNewsToShow] = useState(3)
  const [weatherExpanded, setWeatherExpanded] = useState(false)
  const [tempUnit, setTempUnit] = useState('C') // C or F
  const [weatherLocation, setWeatherLocation] = useState({ city: 'Tallinn', country: 'Eesti' })
  const [weatherData, setWeatherData] = useState({ temp: 8, feelsLike: 6, condition: 'Poolpilves', conditionEn: 'Partly Cloudy', wind: 12, humidity: 78, uv: 2, precipitation: 0, visibility: 10 })
  const router = useRouter()

  // Get user location on mount
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
          } else {
            setWeatherLocation({ city: 'Tallinn', country: 'Eesti' })
          }
        },
        (error) => {
          console.log('Location access denied, using default')
        }
      )
    }
  }, [])

  // Convert temperature based on unit
  const getDisplayTemp = (temp) => {
    if (tempUnit === 'F') {
      return Math.round(temp * 9/5 + 32)
    }
    return temp
  }

  const getDisplayFeelsLike = (temp) => {
    if (tempUnit === 'F') {
      return Math.round(temp * 9/5 + 32)
    }
    return temp
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('neti-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('neti-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/otsing?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  // Initialize AOS animations
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 0,
        startEvent: 'DOMContentLoaded',
      })
    }
    initAOS()
    
    window.addEventListener('load', () => {
      const refreshAOS = async () => {
        const AOS = (await import('aos')).default
        AOS.refresh()
      }
      refreshAOS()
    })
  }, [])

  // Mouse spotlight effect
  useEffect(() => {
    const spotlight = document.createElement('div')
    spotlight.className = 'cursor-spotlight'
    document.body.appendChild(spotlight)

    const handleMouseMove = (e) => {
      spotlight.style.left = e.clientX + 'px'
      spotlight.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      spotlight.remove()
    }
  }, [])

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
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
      )}

      {/* Navbar - Using shared component */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - Light Theme (News/Games Style) */}
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

              {/* Animated Logos Ticker - Moved under Populaarsed */}
              <div className="hero-ticker-container">
                <div className="logos-ticker">
                  <div className="logos-track">
                    {[...Array(2)].map((_, loopIndex) => (
                      <div key={loopIndex} className="logos-inner">
                        <Link href="/otsing?q=Swedbank" className="logo-text-item">
                          <span>Swedbank</span>
                        </Link>
                        <Link href="/otsing?q=SEB" className="logo-text-item">
                          <span>SEB</span>
                        </Link>
                        <Link href="/otsing?q=Telia" className="logo-text-item">
                          <span>Telia</span>
                        </Link>
                        <Link href="/otsing?q=Postimees" className="logo-text-item">
                          <span>Postimees</span>
                        </Link>
                        <Link href="/otsing?q=Bolt" className="logo-text-item">
                          <span>Bolt</span>
                        </Link>
                        <Link href="/otsing?q=Apollo" className="logo-text-item">
                          <span>Apollo</span>
                        </Link>
                        <Link href="/otsing?q=K+K" className="logo-text-item">
                          <span>K+Kaubad</span>
                        </Link>
                        <Link href="/otsing?q=COOP" className="logo-text-item">
                          <span>COOP</span>
                        </Link>
                        <Link href="/otsing?q=Swedbank" className="logo-text-item">
                          <span>Swedbank</span>
                        </Link>
                        <Link href="/otsing?q=SEB" className="logo-text-item">
                          <span>SEB</span>
                        </Link>
                        <Link href="/otsing?q=Telia" className="logo-text-item">
                          <span>Telia</span>
                        </Link>
                        <Link href="/otsing?q=Postimees" className="logo-text-item">
                          <span>Postimees</span>
                        </Link>
                        <Link href="/otsing?q=Bolt" className="logo-text-item">
                          <span>Bolt</span>
                        </Link>
                        <Link href="/otsing?q=Apollo" className="logo-text-item">
                          <span>Apollo</span>
                        </Link>
                        <Link href="/otsing?q=K+K" className="logo-text-item">
                          <span>K+Kaubad</span>
                        </Link>
                        <Link href="/otsing?q=COOP" className="logo-text-item">
                          <span>COOP</span>
                        </Link>
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

        {/* Weather Section - Widget Style with Location & Unit Toggle */}
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
        <section className="section" data-aos="fade-up" data-aos-delay="200">
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
        <section className="section" style={{ background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="300">
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
                    className={`news-carousel-item ${index === currentNews ? 'active' : ''}`}
                    style={{ display: index === currentNews ? 'block' : 'none' }}
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
                  onClick={() => setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="news-carousel-dots">
                  {newsItems.map((_, index) => (
                    <button 
                      key={index}
                      className={`news-carousel-dot ${index === currentNews ? 'active' : ''}`}
                      onClick={() => setCurrentNews(index)}
                    ></button>
                  ))}
                </div>
                <button 
                  className="news-carousel-btn next"
                  onClick={() => setCurrentNews((prev) => (prev + 1) % newsItems.length)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Zodiac Section */}
        <section className="section" style={{ background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="500">
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
        <section className="section" style={{ background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="700">
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

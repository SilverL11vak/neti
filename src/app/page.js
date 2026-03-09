'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  const [selectedZodiac, setSelectedZodiac] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentNews, setCurrentNews] = useState(0)
  const [newsToShow, setNewsToShow] = useState(3)
  const [weatherExpanded, setWeatherExpanded] = useState(false)
  const router = useRouter()

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
    // Dynamically import AOS to avoid SSR issues
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
    
    // Refresh AOS on load to ensure animations work
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

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <i className="fas fa-globe"></i>
            </div>
            <span className="logo-text">NETI</span>
          </Link>

          <div className="nav-links">
            <Link href="/kategooria" className="nav-link">Kategooriad</Link>
            <Link href="/otsing" className="nav-link">Otsing</Link>
            <Link href="/ilm" className="nav-link">Ilm</Link>
            <Link href="/horoskoop" className="nav-link">Horoskoop</Link>
            <Link href="/games" className="nav-link">Mängud</Link>
            <Link href="/meist" className="nav-link">Meist</Link>
          </div>

          <div className="nav-controls">
            <div 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-lang-toggle">
          <button 
            className={`lang-btn ${lang === 'et' ? 'active' : ''}`}
            onClick={() => setLang('et')}
          >
            ET
          </button>
          <button 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
        <Link href="/kategooria" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Kategooriad</Link>
        <Link href="/otsing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Otsing</Link>
        <Link href="/ilm" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Ilm</Link>
        <Link href="/horoskoop" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Horoskoop</Link>
        <Link href="/games" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Mängud</Link>
        <Link href="/meist" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Meist</Link>
      </div>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - Light Theme (News/Games Style) */}
        <section className="hero-light" data-aos="fade-in">
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
                <div className="quick-links-tags">
                  {quickLinks.map((link, i) => (
                    <Link key={i} href={`/otsing?q=${link.text}`} className="quick-link-tag">
                      <i className={`fas ${link.icon}`}></i>
                      <span>{link.text}</span>
                    </Link>
                  ))}
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

        {/* Animated Logos Section - Floating Style */}
        <section className="logos-ticker-floating" data-aos="fade-up">
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
        </section>

        {/* Weather Section - Widget Style */}
        <section className="section" style={{ padding: '20px 0', background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <div className="weather-widget-card" onClick={() => setWeatherExpanded(!weatherExpanded)}>
              <div className="weather-widget-header">
                <div className="weather-widget-title">
                  <i className="fas fa-cloud-sun"></i>
                  <span>{lang === 'et' ? 'Ilm' : 'Weather'}</span>
                </div>
                <div className="weather-widget-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Tallinn, {lang === 'et' ? 'Eesti' : 'Estonia'}</span>
                </div>
              </div>
              
              <div className="weather-widget-body">
                <div className="weather-widget-main">
                  <div className="weather-widget-temp">
                    <span className="temp-number">+8</span>
                    <span className="temp-unit">°C</span>
                  </div>
                  <div className="weather-widget-details">
                    <span className="weather-condition">{lang === 'et' ? 'Poolpilves' : 'Partly Cloudy'}</span>
                    <span className="weather-feels">{lang === 'et' ? 'Tunnetav: +6°' : 'Feels like: +6°'}</span>
                  </div>
                </div>
              </div>
              
              <div className="weather-widget-footer">
                <div className="weather-quick-stats">
                  <div className="quick-stat">
                    <i className="fas fa-wind"></i>
                    <span>12 km/h</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-tint"></i>
                    <span>78%</span>
                  </div>
                  <div className="quick-stat">
                    <i className="fas fa-sun"></i>
                    <span>UV 2</span>
                  </div>
                </div>
                <button className="weather-expand-toggle">
                  <span>{weatherExpanded ? (lang === 'et' ? 'Vähem' : 'Less') : (lang === 'et' ? 'Rohkem' : 'More')}</span>
                  <i className={`fas fa-chevron-${weatherExpanded ? 'up' : 'down'}`}></i>
                </button>
              </div>
            </div>
            
            {/* Expandable Weather Details */}
            <div className={`weather-details-expandable ${weatherExpanded ? 'expanded' : ''}`}>
              <div className="weather-details-grid">
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-wind"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'Tuul' : 'Wind'}</span>
                    <span className="detail-value">12 km/h NW</span>
                  </div>
                </div>
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-tint"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'Niiskus' : 'Humidity'}</span>
                    <span className="detail-value">78%</span>
                  </div>
                </div>
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-sun"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'UV-index' : 'UV Index'}</span>
                    <span className="detail-value">2</span>
                  </div>
                </div>
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-temperature-low"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'Tunnetav' : 'Feels like'}</span>
                    <span className="detail-value">+6°</span>
                  </div>
                </div>
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-cloud-rain"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'Sademed' : 'Precipitation'}</span>
                    <span className="detail-value">0%</span>
                  </div>
                </div>
                <div className="weather-detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">{lang === 'et' ? 'Nähtavus' : 'Visibility'}</span>
                    <span className="detail-value">10 km</span>
                  </div>
                </div>
              </div>
              <Link href="/ilm" className="weather-full-forecast-link">
                <span>{lang === 'et' ? 'Vaata täpsemat ilma' : 'View full forecast'}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Classifieds - moved before Categories */}
        <section className="classifieds-section-clean" data-aos="fade-up" data-aos-delay="100">
          <div className="section-header">
            <span className="section-badge">
              {lang === 'et' ? 'Reklaam' : 'Sponsored'}
            </span>
            <h2 className="section-title">
              {lang === 'et' ? 'Kuulutused' : 'Classifieds'}
            </h2>
          </div>
          
          <div className="classifieds-clean-grid">
            <Link href="/autod" className="classified-clean-card">
              <div className="classified-clean-icon">
                <i className="fas fa-car"></i>
              </div>
              <div className="classified-clean-content">
                <h4>{lang === 'et' ? 'Autod' : 'Cars'}</h4>
                <p>{lang === 'et' ? 'Leia oma järgmine sõiduk' : 'Find your next vehicle'}</p>
                <span className="classified-clean-count">2,450 {lang === 'et' ? 'kuulutust' : 'listings'}</span>
              </div>
              <div className="classified-clean-arrow">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            
            <Link href="/otsing?q=kinnisvara" className="classified-clean-card">
              <div className="classified-clean-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className="classified-clean-content">
                <h4>{lang === 'et' ? 'Kinnisvara' : 'Real Estate'}</h4>
                <p>{lang === 'et' ? 'Majad ja korterid' : 'Homes and apartments'}</p>
                <span className="classified-clean-count">1,820 {lang === 'et' ? 'kuulutust' : 'listings'}</span>
              </div>
              <div className="classified-clean-arrow">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            
            <Link href="/otsing?q=töö" className="classified-clean-card">
              <div className="classified-clean-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="classified-clean-content">
                <h4>{lang === 'et' ? 'Töö' : 'Jobs'}</h4>
                <p>{lang === 'et' ? 'Karjäärivõimalused' : 'Career opportunities'}</p>
                <span className="classified-clean-count">890 {lang === 'et' ? 'kuulutust' : 'listings'}</span>
              </div>
              <div className="classified-clean-arrow">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
            
            <Link href="/otsing?q=ost-müük" className="classified-clean-card">
              <div className="classified-clean-icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="classified-clean-content">
                <h4>{lang === 'et' ? 'Ost & Müük' : 'Buy & Sell'}</h4>
                <p>{lang === 'et' ? 'Ostu ja müügi kuulutused' : 'Buy and sell items'}</p>
                <span className="classified-clean-count">5,200 {lang === 'et' ? 'kuulutust' : 'listings'}</span>
              </div>
              <div className="classified-clean-arrow">
                <i className="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
          
          <div className="classifieds-clean-cta">
            <div className="cta-clean-info">
              <i className="fas fa-bullhorn"></i>
              <div>
                <h4>{lang === 'et' ? 'Soovid siin reklaamida?' : 'Want to advertise here?'}</h4>
                <p>{lang === 'et' ? 'Lisa oma kuulutus tasuta ja jõua tuhatesse kasutajatesse' : 'Post your ad for free and reach thousands of users'}</p>
              </div>
            </div>
            <Link href="/kuulutus" className="cta-clean-button">
              <span>{lang === 'et' ? 'Lisa kuulutus tasuta' : 'Add free ad'}</span>
              <i className="fas fa-plus"></i>
            </Link>
          </div>
        </section>



        {/* Horoscope Section */}
        <section className="section" data-aos="fade-up" data-aos-delay="300">
          <div className="section-header">
            <span className="section-badge">{lang === 'et' ? 'Horoskoop' : 'Horoscope'}</span>
            <h2 className="section-title">{lang === 'et' ? 'Päeva horoskoop' : 'Daily Horoscope'}</h2>
          </div>
           
          <div className="horoscope-list-layout">
            <div className="horoscope-signs-list">
              {zodiacSigns.map((sign, index) => (
                <button 
                  key={sign.id} 
                  className={`horoscope-sign-row ${selectedZodiac === index ? 'active' : ''}`}
                  onClick={() => setSelectedZodiac(index)}
                >
                  <span className="sign-row-symbol">{sign.symbol}</span>
                  <span className="sign-row-name">{lang === 'et' ? sign.name : sign.nameEn}</span>
                  <span className="sign-row-date">{sign.date}</span>
                  <i className="fas fa-chevron-right sign-row-arrow"></i>
                </button>
              ))}
            </div>
            
            <div className="horoscope-display-panel">
              <div className="display-panel-header">
                <div className="display-symbol-large">{zodiacSigns[selectedZodiac].symbol}</div>
                <div className="display-sign-info">
                  <h3>{lang === 'et' ? zodiacSigns[selectedZodiac].name : zodiacSigns[selectedZodiac].nameEn}</h3>
                  <span>{zodiacSigns[selectedZodiac].date}</span>
                </div>
              </div>
              
              <div className="display-reading">
                <p>{lang === 'et' ? zodiacSigns[selectedZodiac].horoscope.et : zodiacSigns[selectedZodiac].horoscope.en}</p>
              </div>
              
              <div className="display-luck">
                <div className="luck-block">
                  <span className="luck-block-label">{lang === 'et' ? 'Õnne number' : 'Lucky number'}</span>
                  <span className="luck-block-value">{(selectedZodiac + 1) * 7}</span>
                </div>
                <div className="luck-block">
                  <span className="luck-block-label">{lang === 'et' ? 'Õnne värv' : 'Lucky color'}</span>
                  <span className="luck-block-color" style={{background: ['#ef4444', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899', '#6366f1', '#84cc16', '#f43f5e', '#06b6d4'][selectedZodiac]}}></span>
                </div>
                <div className="luck-block">
                  <span className="luck-block-label">{lang === 'et' ? 'Täht' : 'Star'}</span>
                  <span className="luck-block-star">★</span>
                </div>
              </div>
              
              <Link href="/horoskoop" className="display-cta">
                <span>{lang === 'et' ? 'Vaata täielikku horoskoopi' : 'View full horoscope'}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="games-section-enhanced" data-aos="fade-up" data-aos-delay="400">
          <div className="section-header">
            <span className="section-badge">{lang === 'et' ? 'Mängud' : 'Games'}</span>
            <h2 className="section-title">{lang === 'et' ? 'Meelelahutus' : 'Entertainment'}</h2>
          </div>
          
          <div className="games-showcase">
            <Link href="/games" className="game-showcase-card main-game">
              <div className="game-bg-icon"><i className="fas fa-chess-knight"></i></div>
              <div className="game-overlay">
                <h3>{lang === 'et' ? 'Kabe' : 'Checkers'}</h3>
                <p>{lang === 'et' ? 'Mängi tasuta online' : 'Play free online'}</p>
                <span className="play-btn">{lang === 'et' ? 'Alusta mängu' : 'Start Game'} <i className="fas fa-play"></i></span>
              </div>
            </Link>
            
            <div className="games-side-grid">
              <Link href="/games" className="game-side-card">
                <div className="game-side-icon"><i className="fas fa-puzzle-piece"></i></div>
                <div className="game-side-info">
                  <h4>{lang === 'et' ? 'Mälumäng' : 'Memory'}</h4>
                  <span className="game-play-link">{lang === 'et' ? 'Mängi nüüd' : 'Play now'} →</span>
                </div>
              </Link>
              
              <Link href="/games" className="game-side-card">
                <div className="game-side-icon"><i className="fas fa-brain"></i></div>
                <div className="game-side-info">
                  <h4>Quiz</h4>
                  <span className="game-play-link">{lang === 'et' ? 'Mängi nüüd' : 'Play now'} →</span>
                </div>
              </Link>
              
              <Link href="/games" className="game-side-card">
                <div className="game-side-icon"><i className="fas fa-dice"></i></div>
                <div className="game-side-info">
                  <h4>{lang === 'et' ? 'Täringumäng' : 'Dice'}</h4>
                  <span className="game-play-link">{lang === 'et' ? 'Mängi nüüd' : 'Play now'} →</span>
                </div>
              </Link>
              
              <Link href="/games" className="game-side-card">
                <div className="game-side-icon"><i className="fas fa-crosshairs"></i></div>
                <div className="game-side-info">
                  <h4>{lang === 'et' ? 'Märklaud' : 'Target'}</h4>
                  <span className="game-play-link">{lang === 'et' ? 'Mängi nüüd' : 'Play now'} →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-carousel-section" data-aos="fade-up" data-aos-delay="500">
          <div className="section-header">
            <span className="section-badge">{lang === 'et' ? 'Uudised' : 'News'}</span>
            <h2 className="section-title">{lang === 'et' ? 'Viimased uudised' : 'Latest News'}</h2>
          </div>

          <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px', maxWidth: '1200px', margin: '0 auto 24px' }}>
            {newsItems.slice(0, newsToShow).map((news) => (
              <Link href={`/uudised/${news.id}`} key={news.id} className="news-carousel-slide" style={{ display: 'block' }}>
                <div className="news-card-image">
                  <img src={news.image} alt={lang === 'et' ? news.title : news.titleEn} />
                  <div className="news-card-category">{news.category}</div>
                </div>
                <div className="news-card-content">
                  <span className="news-card-date">{news.date}</span>
                  <h3 className="news-card-title">{lang === 'et' ? news.title : news.titleEn}</h3>
                  <p className="news-card-desc">{lang === 'et' ? news.description : news.descriptionEn}</p>
                  <span className="news-card-readmore">
                    {lang === 'et' ? 'Loe edasi' : 'Read more'} <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {newsToShow < newsItems.length && (
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button 
                onClick={() => setNewsToShow(newsItems.length)}
                style={{
                  padding: '14px 32px',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                {lang === 'et' ? 'Näita veel' : 'Show more'}
              </button>
            </div>
          )}
        </section>

        {/* Categories - Moved to bottom */}
        <section className="section" style={{ background: '#f8fafc' }} data-aos="fade-up" data-aos-delay="100">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-badge">{lang === 'et' ? 'Kategooriad' : 'Categories'}</span>
              <h2 className="section-title">{lang === 'et' ? 'Browse by Category' : 'Browse by Category'}</h2>
            </div>
            
            <div className="categories-compact-grid">
              {categories.map((cat) => (
                <Link key={cat.id} href={`/kategooria`} className="category-compact-card">
                  <div className="category-compact-icon">
                    <i className={`fas ${cat.icon}`}></i>
                  </div>
                  <div className="category-compact-info">
                    <h4>{cat.title}</h4>
                    <p>{cat.count} {lang === 'et' ? 'lehte' : 'sites'}</p>
                  </div>
                  <i className="fas fa-chevron-right category-compact-arrow"></i>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <style jsx global>{`
        .logos-ticker {
          overflow: hidden;
          position: relative;
        }
        
        .logos-track {
          display: flex;
          width: fit-content;
        }
        
        .logos-inner {
          display: flex;
          gap: 40px;
          padding-right: 40px;
          animation: logoScroll 30s linear infinite;
        }
        
        .logos-track:hover .logos-inner {
          animation-play-state: paused;
        }
        
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: #f8fafc;
          border-radius: 30px;
          text-decoration: none;
          color: #1e293b;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        
        .logo-item:hover {
          background: #1d4ed8;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
        }
        
        .logo-item i {
          font-size: 1.1rem;
          color: #1d4ed8;
        }
        
        .logo-item:hover i {
          color: white;
        }
      `}</style>

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
                  ? 'NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastast.'
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
                <a href="#">Riik ja Ühiskond</a>
                <a href="#">Info ja Meedia</a>
                <a href="#">Äri</a>
                <a href="#">Haridus</a>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Teenused' : 'Services'}</h4>
                <a href="#">Otsing</a>
                <a href="#">Kataloog</a>
                <a href="#">Reklaam</a>
                <a href="#">API</a>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Ettevõte' : 'Company'}</h4>
                <a href="#">Meist</a>
                <a href="#">Kontakt</a>
                <a href="#">Privaatsus</a>
                <a href="#">Kasutustingimused</a>
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
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
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

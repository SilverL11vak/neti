'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const jobTypes = [
  { id: 'full', name: 'Täistöö', icon: 'fa-clock' },
  { id: 'part', name: 'Osaline töö', icon: 'fa-hourglass-half' },
  { id: 'intern', name: 'Praktika', icon: 'fa-graduation-cap' },
  { id: 'remote', name: 'Kaugtöö', icon: 'fa-home' },
]

const categories = [
  'IT ja programmeerimine', 'Müük ja teenindus', 'Ehitus ja tööstus', 
  'Tervishoid', 'Haridus', 'Finants ja raamatupidamine', 'Logistika', 'Tootmine'
]

const mockJobs = [
  {
    id: 1,
    title: 'JavaScript arendaja',
    company: 'Tech Estonia OÜ',
    type: 'Täistöö',
    category: 'IT ja programmeerimine',
    salary: '2500-4000 €/kuu',
    location: 'Tallinn',
    description: 'Otsime kogenud JavaScript arendajat meie Tallinna kontorisse. Pakume konkurentsivõimelist palka, paindlikku tööaega jaasa moodsad töövahendid.',
    requirements: ['3+ aastat kogemust', 'React/Vue oskus', 'Inglise keel B2'],
    posted: '2 päeva tagasi',
    badge: 'Uus'
  },
  {
    id: 2,
    title: 'Müügiesindaja',
    company: 'Müük Plus OÜ',
    type: 'Täistöö',
    category: 'Müük ja teenindus',
    salary: '1500 + preemiad',
    location: 'Tartu',
    description: 'Kas sa oled sündinud müüja? Otsime endale meeskonda motivatsiooniküünlat müügiesindust, kes tahab areneda ja teenida head palka.',
    requirements: ['Suhtlemisoskus', 'Eesti ja vene keel', 'B-kategooria'],
    posted: '5 päeva tagasi',
    badge: null
  },
  {
    id: 3,
    title: 'Ehitusmaterjalide müük',
    company: 'Ehituse ABC',
    type: 'Täistöö',
    category: 'Ehitus ja tööstus',
    salary: '1800-2500 €/kuu',
    location: 'Pärnu',
    description: 'Püsiv töö stabiilses ettevõttes. Töö ehitusmaterjalide kaupluses, klientide nõustamine.',
    requirements: ['Keskharidus', 'Füüsiline töövõime', 'Kohusetundlikkus'],
    posted: '1 nädal tagasi',
    badge: null
  },
  {
    id: 4,
    title: 'Klienditoe spetsialist',
    company: 'Call Center Pro',
    type: 'Osaline töö',
    category: 'Müük ja teenindus',
    salary: '800-1200 €/kuu',
    location: 'Tallinn',
    description: 'Paindlik töö klienditoes. Hommikud või õhtud - vali ise!',
    requirements: ['Arvuti kasutamise oskus', 'Hea diktsioon', 'Kontoritöö kogemus'],
    posted: '3 päeva tagasi',
    badge: 'Hot'
  },
  {
    id: 5,
    title: 'Meditsiiniõde',
    company: 'Tervisekeskus',
    type: 'Täistöö',
    category: 'Tervishoid',
    salary: '2200-2800 €/kuu',
    location: 'Tallinn',
    description: 'Otsime kogenud meditsiiniõde meie tervisekeskusesse. Töö vähesega patsientidega.',
    requirements: ['Meditsiiniline haridus', 'Registreerimine', 'Kogemus'],
    posted: 'Täna',
    badge: 'Uus'
  },
  {
    id: 6,
    title: 'Raamatupidaja',
    company: 'Finants OÜ',
    type: 'Täistöö',
    category: 'Finants ja raamatupidamine',
    salary: '2000-2600 €/kuu',
    location: 'Tartu',
    description: 'Otsime raamatupidajat täiskoormusega. Pakume stabiilset töökohta jaasa professionaalset meeskonda.',
    requirements: ['Raamatupidamise kogemus', 'Kõrgharidus soovitav', 'Excel oskus'],
    posted: '4 päeva tagasi',
    badge: null
  },
  {
    id: 7,
    title: 'Logistik',
    company: 'Transpoort OÜ',
    type: 'Täistöö',
    category: 'Logistika',
    salary: '1600-2000 €/kuu',
    location: 'Narva',
    description: 'Töö laos. Kaupade vastuvõtt, komplekteerimine, väljastamine.',
    requirements: ['Füüsiline töövõime', 'B-kategooria', 'Kohusetundlikkus'],
    posted: '6 päeva tagasi',
    badge: null
  },
  {
    id: 8,
    title: 'Tootmistööline',
    company: 'Tootmine AS',
    type: 'Täistöö',
    category: 'Tootmine',
    salary: '1400-1800 €/kuu',
    location: 'Viljandi',
    description: 'Töö tootmises. Lihtne ja kiireesti omandatav. Pakume väljaõpet.',
    requirements: ['Füüsiline töövõime', 'Täpsus', 'Valmidus õppida'],
    posted: '1 nädal tagasi',
    badge: null
  }
]

export default function TooPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = mockJobs.filter(job => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.company.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedType && job.type !== selectedType) return false
    if (selectedCategory && job.category !== selectedCategory) return false
    return true
  })

  const clearFilters = () => {
    setSelectedType('')
    setSelectedCategory('')
    setSearchQuery('')
  }

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="market-header">
        <div className="container">
          <h1>Tööpakkumised</h1>
          <p>Leia endale sobiv töökoht üle Eesti</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          {/* Search */}
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Otsi ametinimetust või ettevõtet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
              <i className="fas fa-sliders-h"></i>
              Filtrid
              <i className={`fas ${showFilters ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>

            <div className={`filters-panel ${showFilters ? 'active' : ''}`}>
              <div className="filter-group">
                <label>Töö tüüp</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedType === '' ? 'active' : ''}`}
                    onClick={() => setSelectedType('')}
                  >
                    Kõik
                  </button>
                  {jobTypes.map(type => (
                    <button 
                      key={type.id}
                      className={`filter-chip ${selectedType === type.name ? 'active' : ''}`}
                      onClick={() => setSelectedType(type.name)}
                    >
                      <i className={`fas ${type.icon}`}></i> {type.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Kategooria</label>
                <div className="filter-chips">
                  <button 
                    className={`filter-chip ${selectedCategory === '' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    Kõik
                  </button>
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button className="clear-filters" onClick={clearFilters}>
                <i className="fas fa-times"></i>
                Tühjenda filtrid
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <span>{filteredJobs.length} tööpakkumist leitud</span>
          </div>

          {/* Jobs List */}
          <div className="jobs-list">
            {filteredJobs.map(job => (
              <Link href={`/too/${job.id}`} key={job.id} className="job-card">
                <div className="job-content">
                  <div className="job-header">
                    <span className="job-type">{job.type}</span>
                    {job.badge && (
                      <span className={`job-badge ${job.badge.toLowerCase()}`}>
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <h3>{job.title}</h3>
                  <p className="job-company"><i className="fas fa-building"></i> {job.company}</p>
                  <div className="job-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                    <span><i className="fas fa-money-bill-wave"></i> {job.salary}</span>
                  </div>
                  <p className="job-category">{job.category}</p>
                </div>
                <div className="job-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Link>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="no-results">
              <i className="fas fa-briefcase"></i>
              <h3>Tööpakkumisi ei leitud</h3>
              <p>Proovi teisi filtrite seadeid</p>
              <button className="btn-primary" onClick={clearFilters}>
                Tühjenda filtrid
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
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
                NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastal.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Kategooriad</h4>
                <Link href="/kategooria">Riik ja Ühiskond</Link>
                <Link href="/kategooria">Info ja Meedia</Link>
                <Link href="/kategooria">Äri</Link>
              </div>
              <div className="footer-column">
                <h4>Teenused</h4>
                <Link href="/otsing">Otsing</Link>
                <Link href="/autod">Autod</Link>
                <Link href="/kuulutus">Reklaam</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
          </div>
        </div>
      </footer>
    </>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import '../globals.css'

// Full job data (same as in /too/page.js)
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
    badge: 'Uus',
    contact: 'info@techestonia.ee',
    benefits: ['Paindlik tööaeg', 'Remote töö võimalus', 'Tervisepaket', 'Koolitused', 'Motivatsiooniküünlat']
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
    badge: null,
    contact: 'karjäär@müükplus.ee',
    benefits: ['Konkurentsivõimeline palk', 'Preemiad', 'Autokasutuse võimalus', 'Koolitused']
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
    badge: null,
    contact: 'info@ehituseabc.ee',
    benefits: ['Stabiilne töö', 'Tööriided', 'Tervisepaket']
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
    badge: 'Hot',
    contact: 'karjäär@callcenterpro.ee',
    benefits: ['Paindlik graafik', 'Koolitused', 'Kohv ja tee']
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
    badge: 'Uus',
    contact: 'info@tervisekeskus.ee',
    benefits: ['Konkurentsivõimeline palk', 'Tervisepaket', 'Nädalavahetuse vabad', 'Koolitused']
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
    badge: null,
    contact: 'karjäär@finants.ee',
    benefits: ['Stabiilne töökoht', 'Koolitused', 'Tervisepaket']
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
    badge: null,
    contact: 'info@transpoort.ee',
    benefits: ['Stabiilne töö', 'Tööriided', 'Lõuna']
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
    badge: null,
    contact: 'karjäär@tootmine.ee',
    benefits: ['Väljaõpe', 'Tööriided', 'Lõuna']
  }
]

export default function JobDetailPage() {
  const params = useParams()
  const [isApplied, setIsApplied] = useState(false)
  
  const jobId = parseInt(params.id)
  const job = mockJobs.find(j => j.id === jobId)
  
  // Get related jobs (same category, excluding current)
  const relatedJobs = mockJobs
    .filter(j => j.category === job?.category && j.id !== jobId)
    .slice(0, 3)
  
  if (!job) {
    return (
      <>
        <Navbar />
        <div className="not-found-section">
          <div className="not-found-card">
            <i className="fas fa-briefcase"></i>
            <h2>Tööpakkumist ei leitud</h2>
            <p>Kahjuks seda tööpakkumist enam ei leidu.</p>
            <Link href="/too" className="btn-primary">
              <i className="fas fa-arrow-left"></i>
              Tagasi tööde lehele
            </Link>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="job-detail-header">
        <div className="container">
          <Link href="/too" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          
          <div className="job-header-meta">
            <div className="job-type-badge">{job.type}</div>
            {job.badge && (
              <span className={`job-badge ${job.badge.toLowerCase()}`}>
                {job.badge}
              </span>
            )}
            <span className="job-category-badge">{job.category}</span>
          </div>
          
          <h1 className="job-title">{job.title}</h1>
          
          <div className="job-company-row">
            <div className="job-company-info">
              <div className="company-avatar">
                <i className="fas fa-building"></i>
              </div>
              <div className="company-details">
                <span className="company-name">{job.company}</span>
                <span className="job-posted">
                  <i className="fas fa-clock"></i>
                  {job.posted}
                </span>
              </div>
            </div>
            <div className="job-share">
              <button className="share-btn"><i className="fab fa-facebook-f"></i></button>
              <button className="share-btn"><i className="fab fa-twitter"></i></button>
              <button className="share-btn"><i className="fab fa-linkedin-in"></i></button>
              <button className="share-btn"><i className="fas fa-link"></i></button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="job-detail-grid">
            {/* Main Job Content */}
            <div className="job-main-content">
              {/* Key Info Cards */}
              <div className="job-info-cards">
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Asukoht</span>
                    <span className="info-card-value">{job.location}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Palk</span>
                    <span className="info-card-value">{job.salary}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Töö tüüp</span>
                    <span className="info-card-value">{job.type}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <i className="fas fa-tag"></i>
                  </div>
                  <div className="info-card-content">
                    <span className="info-card-label">Kategooria</span>
                    <span className="info-card-value">{job.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="job-section">
                <h2 className="section-title">Töö kirjeldus</h2>
                <p className="job-description">{job.description}</p>
              </div>
              
              {/* Requirements */}
              <div className="job-section">
                <h2 className="section-title">Nõuded</h2>
                <ul className="requirements-list">
                  {job.requirements.map((req, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              {job.benefits && (
                <div className="job-section">
                  <h2 className="section-title">Pakume</h2>
                  <ul className="benefits-list">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="fas fa-star"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Contact */}
              <div className="job-section">
                <h2 className="section-title">Kontakt</h2>
                <div className="contact-info">
                  <i className="fas fa-envelope"></i>
                  <span>{job.contact}</span>
                </div>
              </div>
              
              {/* Apply Button */}
              <div className="apply-section">
                {isApplied ? (
                  <div className="applied-message">
                    <i className="fas fa-check-circle"></i>
                    <span>Oled sellele tööpakkumisele kandideerinud!</span>
                  </div>
                ) : (
                  <button className="apply-btn" onClick={() => setIsApplied(true)}>
                    <i className="fas fa-paper-plane"></i>
                    Kandideeri kohe
                  </button>
                )}
              </div>
              
              {/* Tags */}
              <div className="job-tags">
                <span className="tag-label">Märksõnad:</span>
                <span className="tag">{job.category}</span>
                <span className="tag">{job.type}</span>
                <span className="tag">{job.location}</span>
                <span className="tag">{job.company}</span>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="job-sidebar">
              {/* Apply Widget */}
              <div className="sidebar-widget apply-widget">
                <div className="widget-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h4>Kandideeri</h4>
                <p>Saada oma CV või võta ühendust</p>
                <div className="widget-price">
                  <span className="price-amount">Liitu meiega</span>
                </div>
                {isApplied ? (
                  <button className="widget-btn applied">
                    <i className="fas fa-check"></i>
                    Kandideeritud
                  </button>
                ) : (
                  <button className="widget-btn" onClick={() => setIsApplied(true)}>
                    Kandideeri kohe
                  </button>
                )}
              </div>
              
              {/* Related Jobs */}
              {relatedJobs.length > 0 && (
                <div className="sidebar-widget">
                  <h4>Samast kategooriast</h4>
                  <div className="related-jobs-list">
                    {relatedJobs.map(relatedJob => (
                      <Link href={`/too/${relatedJob.id}`} key={relatedJob.id} className="related-job-item">
                        <div className="related-job-content">
                          <span className="related-job-title">{relatedJob.title}</span>
                          <span className="related-job-company">{relatedJob.company}</span>
                          <div className="related-job-meta">
                            <span><i className="fas fa-map-marker-alt"></i> {relatedJob.location}</span>
                            <span><i className="fas fa-money-bill-wave"></i> {relatedJob.salary}</span>
                          </div>
                        </div>
                        <div className="related-job-arrow">
                          <i className="fas fa-chevron-right"></i>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Job Categories */}
              <div className="sidebar-widget">
                <h4>Töö kategooriad</h4>
                <div className="category-list">
                  <a href="/too" className="category-item">
                    <span>IT ja programmeerimine</span>
                    <span className="count">24</span>
                  </a>
                  <a href="/too" className="category-item">
                    <span>Müük ja teenindus</span>
                    <span className="count">18</span>
                  </a>
                  <a href="/too" className="category-item">
                    <span>Ehitus ja tööstus</span>
                    <span className="count">15</span>
                  </a>
                  <a href="/too" className="category-item">
                    <span>Tervishoid</span>
                    <span className="count">12</span>
                  </a>
                  <a href="/too" className="category-item">
                    <span>Finants ja raamatupidamine</span>
                    <span className="count">9</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style jsx>{`
        .not-found-section {
          padding: 120px 24px;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .not-found-card {
          text-align: center;
          max-width: 400px;
        }
        
        .not-found-card i {
          font-size: 4rem;
          color: #cbd5e1;
          margin-bottom: 24px;
        }
        
        .not-found-card h2 {
          font-size: 1.75rem;
          color: #1e293b;
          margin-bottom: 12px;
        }
        
        .not-found-card p {
          color: #64748b;
          margin-bottom: 24px;
        }
        
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #1d4ed8;
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          transition: background 0.2s;
        }
        
        .btn-primary:hover {
          background: #1e40af;
        }
        
        .job-detail-header {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 80px 24px 40px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        
        .back-link:hover {
          color: #1d4ed8;
        }
        
        .job-header-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        
        .job-type-badge {
          display: inline-block;
          padding: 6px 14px;
          background: #1d4ed8;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 20px;
        }
        
        .job-badge {
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .job-badge.uus {
          background: #1d4ed8;
          color: white;
        }
        
        .job-badge.hot {
          background: #ef4444;
          color: white;
        }
        
        .job-category-badge {
          display: inline-block;
          padding: 6px 14px;
          background: #e2e8f0;
          color: #64748b;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 20px;
        }
        
        .job-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin: 0 0 24px 0;
        }
        
        .job-company-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .job-company-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .company-avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }
        
        .company-details {
          display: flex;
          flex-direction: column;
        }
        
        .company-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 1.1rem;
        }
        
        .job-posted {
          font-size: 0.85rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .job-share {
          display: flex;
          gap: 8px;
        }
        
        .share-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .share-btn:hover {
          background: #1d4ed8;
          color: white;
          border-color: #1d4ed8;
        }
        
        .section {
          padding: 60px 24px;
          background: white;
        }
        
        .job-detail-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
        }
        
        .job-info-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .info-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .info-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }
        
        .info-card-content {
          display: flex;
          flex-direction: column;
        }
        
        .info-card-label {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 600;
        }
        
        .info-card-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        .job-section {
          margin-bottom: 32px;
        }
        
        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }
        
        .job-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
        }
        
        .requirements-list, .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .requirements-list li, .benefits-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 1rem;
          color: #475569;
        }
        
        .requirements-list li:last-child, .benefits-list li:last-child {
          border-bottom: none;
        }
        
        .requirements-list li i {
          color: #22c55e;
          font-size: 1.1rem;
        }
        
        .benefits-list li i {
          color: #f59e0b;
          font-size: 1.1rem;
        }
        
        .contact-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
          color: #1d4ed8;
          font-weight: 500;
        }
        
        .apply-section {
          margin-bottom: 32px;
        }
        
        .apply-btn {
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(29, 78, 216, 0.3);
        }
        
        .applied-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 32px;
          background: #dcfce7;
          border: 1px solid #86efac;
          border-radius: 16px;
          color: #16a34a;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .applied-message i {
          font-size: 1.5rem;
        }
        
        .job-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag-label {
          font-weight: 600;
          color: #64748b;
          margin-right: 8px;
        }
        
        .tag {
          padding: 6px 14px;
          background: #f1f5f9;
          border-radius: 20px;
          font-size: 0.85rem;
          color: #64748b;
        }
        
        /* Sidebar */
        .job-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .sidebar-widget {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
        }
        
        .sidebar-widget h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }
        
        .apply-widget {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          border: none;
          text-align: center;
          color: white;
        }
        
        .apply-widget .widget-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 1.5rem;
        }
        
        .apply-widget h4 {
          color: white;
          font-size: 1.25rem;
        }
        
        .apply-widget p {
          opacity: 0.9;
          margin-bottom: 16px;
        }
        
        .widget-price {
          margin-bottom: 20px;
        }
        
        .price-amount {
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .widget-btn {
          width: 100%;
          padding: 14px 24px;
          background: white;
          color: #1d4ed8;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .widget-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .widget-btn.applied {
          background: #22c55e;
          color: white;
        }
        
        .widget-btn.applied:hover {
          transform: none;
          box-shadow: none;
        }
        
        .related-jobs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .related-job-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .related-job-item:hover {
          background: #f1f5f9;
        }
        
        .related-job-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .related-job-title {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.95rem;
        }
        
        .related-job-company {
          font-size: 0.85rem;
          color: #64748b;
        }
        
        .related-job-meta {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }
        
        .related-job-meta span {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: #94a3b8;
        }
        
        .related-job-arrow {
          color: #cbd5e1;
        }
        
        .related-job-item:hover .related-job-arrow {
          color: #1d4ed8;
        }
        
        .category-list {
          display: flex;
          flex-direction: column;
        }
        
        .category-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          text-decoration: none;
          color: #475569;
          transition: color 0.2s;
        }
        
        .category-item:last-child {
          border-bottom: none;
        }
        
        .category-item:hover {
          color: #1d4ed8;
        }
        
        .category-item .count {
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .job-detail-grid {
            grid-template-columns: 1fr;
          }
          
          .job-sidebar {
            order: -1;
          }
        }
        
        @media (max-width: 768px) {
          .job-title {
            font-size: 1.75rem;
          }
          
          .job-info-cards {
            grid-template-columns: 1fr;
          }
          
          .job-company-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  )
}

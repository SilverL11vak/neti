'use client'

import { useState } from 'react'

const gamesData = [
  {
    id: 'crossword',
    name: 'Ristsõna',
    nameEn: 'Crossword',
    icon: 'fa-th',
    description: 'Täida päevane ristsõna',
    descriptionEn: 'Fill in the daily crossword',
    difficulty: 'Keskmine',
    difficultyEn: 'Medium'
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    nameEn: 'Sudoku',
    icon: 'fa-th-large',
    description: 'Lahenda numberruudud',
    descriptionEn: 'Solve the number grid',
    difficulty: 'Raske',
    difficultyEn: 'Hard'
  },
  {
    id: 'quiz',
    name: 'Quiz',
    nameEn: 'Quiz',
    icon: 'fa-question-circle',
    description: 'Testi oma teadmisi',
    descriptionEn: 'Test your knowledge',
    difficulty: 'Kerge',
    difficultyEn: 'Easy'
  },
  {
    id: 'wordsearch',
    name: 'Sõnade otsing',
    nameEn: 'Word Search',
    icon: 'fa-search',
    description: 'Leia ära peidetud sõnad',
    descriptionEn: 'Find hidden words',
    difficulty: 'Kerge',
    difficultyEn: 'Easy'
  },
  {
    id: 'memory',
    name: 'Mälu',
    nameEn: 'Memory',
    icon: 'fa-brain',
    description: 'Leia sobivad kaardipaarid',
    descriptionEn: 'Find matching card pairs',
    difficulty: 'Keskmine',
    difficultyEn: 'Medium'
  },
  {
    id: 'tictactoe',
    name: 'Ruudud',
    nameEn: 'Tic Tac Toe',
    icon: 'fa-times-circle',
    description: 'Mängi sõbra vastu',
    descriptionEn: 'Play against a friend',
    difficulty: 'Kerge',
    difficultyEn: 'Easy'
  }
]

export default function GamesPage() {
  const [lang, setLang] = useState('et')

  const getDifficultyColor = (diff) => {
    if (diff === 'Kerge' || diff === 'Easy') return '#10b981'
    if (diff === 'Keskmine' || diff === 'Medium') return '#f59e0b'
    return '#ef4444'
  }

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
            <a href="/games" className="nav-link">Mängud</a>
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
              {lang === 'et' ? 'Mängud' : 'Games'}
            </span>
          </h1>
          <p className="hero-subtitle">
            {lang === 'et' ? 'Mängi ja lõbutse!' : 'Play and have fun!'}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {gamesData.map((game) => (
            <div 
              key={game.id}
              className="widget"
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  flexShrink: 0
                }}>
                  <i className={`fas ${game.icon}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '4px' }}>
                    {lang === 'et' ? game.name : game.nameEn}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                    {lang === 'et' ? game.description : game.descriptionEn}
                  </p>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    background: getDifficultyColor(lang === 'et' ? game.difficulty : game.difficultyEn) + '20',
                    color: getDifficultyColor(lang === 'et' ? game.difficulty : game.difficultyEn),
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {lang === 'et' ? game.difficulty : game.difficultyEn}
                  </span>
                </div>
              </div>
              <button style={{
                width: '100%',
                padding: '12px',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                {lang === 'et' ? 'Mängi kohe' : 'Play now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="widget" style={{ 
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
          color: 'white',
          textAlign: 'center',
          padding: '40px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏆</div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
            {lang === 'et' ? 'Päevane väljakutse' : 'Daily Challenge'}
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
            {lang === 'et' 
              ? 'Lahenda täna ristsõna ja võid võita auhindu!' 
              : 'Solve today\'s crossword and win prizes!'}
          </p>
          <button style={{
            padding: '14px 32px',
            background: 'white',
            color: '#1d4ed8',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer'
          }}>
            {lang === 'et' ? 'Alusta mängu' : 'Start game'}
          </button>
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

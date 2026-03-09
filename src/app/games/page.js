'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const gamesData = [
  {
    id: 'crossword',
    name: 'Ristsõna',
    nameEn: 'Crossword',
    icon: 'fa-th',
    description: 'Täida päevane ristsõna',
    descriptionEn: 'Fill in the daily crossword',
    difficulty: 'Keskmine',
    difficultyEn: 'Medium',
    cover: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?w=600&h=400&fit=crop',
    rating: 4.5,
    plays: '12.5K'
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    nameEn: 'Sudoku',
    icon: 'fa-th-large',
    description: 'Lahenda numberruudud',
    descriptionEn: 'Solve the number grid',
    difficulty: 'Raske',
    difficultyEn: 'Hard',
    cover: 'https://images.unsplash.com/photo-1632569851254-eb58f444c0d0?w=600&h=400&fit=crop',
    rating: 4.8,
    plays: '8.2K'
  },
  {
    id: 'quiz',
    name: 'Quiz',
    nameEn: 'Quiz',
    icon: 'fa-question-circle',
    description: 'Testi oma teadmisi',
    descriptionEn: 'Test your knowledge',
    difficulty: 'Kerge',
    difficultyEn: 'Easy',
    cover: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
    rating: 4.3,
    plays: '25K'
  },
  {
    id: 'wordsearch',
    name: 'Sõnade otsing',
    nameEn: 'Word Search',
    icon: 'fa-search',
    description: 'Leia ära peidetud sõnad',
    descriptionEn: 'Find hidden words',
    difficulty: 'Kerge',
    difficultyEn: 'Easy',
    cover: 'https://images.unsplash.com/photo-1632152852627-2a44302f8f4b?w=600&h=400&fit=crop',
    rating: 4.2,
    plays: '15K'
  },
  {
    id: 'memory',
    name: 'Mälu',
    nameEn: 'Memory',
    icon: 'fa-brain',
    description: 'Leia sobivad kaardipaarid',
    descriptionEn: 'Find matching card pairs',
    difficulty: 'Keskmine',
    difficultyEn: 'Medium',
    cover: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
    rating: 4.6,
    plays: '9.8K'
  },
  {
    id: 'tictactoe',
    name: 'Ruudud',
    nameEn: 'Tic Tac Toe',
    icon: 'fa-times-circle',
    description: 'Mängi sõbra vastu',
    descriptionEn: 'Play against a friend',
    difficulty: 'Kerge',
    difficultyEn: 'Easy',
    cover: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&h=400&fit=crop',
    rating: 4.0,
    plays: '30K'
  }
]

const featuredGame = {
  id: 'daily-challenge',
  name: 'Päevane Väljakutse',
  nameEn: 'Daily Challenge',
  description: 'Lahenda iga päev uus ristsõna ja võid auhindu!',
  descriptionEn: 'Solve a new crossword every day and win prizes!',
  cover: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&h=500&fit=crop',
  badge: 'VIP',
  endsIn: '23:59:59'
}

export default function GamesPage() {
  const [lang, setLang] = useState('et')
  const [activeFilter, setActiveFilter] = useState('all')

  const getDifficultyColor = (diff) => {
    if (diff === 'Kerge' || diff === 'Easy') return '#10b981'
    if (diff === 'Keskmine' || diff === 'Medium') return '#f59e0b'
    return '#ef4444'
  }

  const filteredGames = activeFilter === 'all' 
    ? gamesData 
    : gamesData.filter(game => {
        const diff = lang === 'et' ? game.difficulty : game.difficultyEn
        if (activeFilter === 'easy') return diff === 'Kerge' || diff === 'Easy'
        if (activeFilter === 'medium') return diff === 'Keskmine' || diff === 'Medium'
        if (activeFilter === 'hard') return diff === 'Raske' || diff === 'Hard'
        return true
      })

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="games-header">
        <div className="container">
          <div className="games-header-content">
            <h1 className="games-title">
              <i className="fas fa-gamepad"></i>
              {lang === 'et' ? 'Mängud' : 'Games'}
            </h1>
            <p className="games-subtitle">
              {lang === 'et' ? 'Mängi ja lõbutse meie tasuta mängudega!' : 'Play and have fun with our free games!'}
            </p>
            
            {/* Filter Tabs */}
            <div className="games-filters">
              <button 
                className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <i className="fas fa-th"></i>
                {lang === 'et' ? 'Kõik' : 'All'}
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'easy' ? 'active' : ''}`}
                onClick={() => setActiveFilter('easy')}
              >
                <i className="fas fa-smile"></i>
                {lang === 'et' ? 'Kerge' : 'Easy'}
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'medium' ? 'active' : ''}`}
                onClick={() => setActiveFilter('medium')}
              >
                <i className="fas fa-meh"></i>
                {lang === 'et' ? 'Keskmine' : 'Medium'}
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'hard' ? 'active' : ''}`}
                onClick={() => setActiveFilter('hard')}
              >
                <i className="fas fa-fire"></i>
                {lang === 'et' ? 'Raske' : 'Hard'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Game Banner */}
      <section className="games-featured">
        <div className="container">
          <div className="featured-game-card">
            <div className="featured-game-image">
              <img src={featuredGame.cover} alt={featuredGame.name} />
              <div className="featured-game-overlay">
                <span className="featured-badge">{featuredGame.badge}</span>
              </div>
            </div>
            <div className="featured-game-content">
              <h2>{lang === 'et' ? featuredGame.name : featuredGame.nameEn}</h2>
              <p>{lang === 'et' ? featuredGame.description : featuredGame.descriptionEn}</p>
              <div className="featured-game-meta">
                <div className="countdown">
                  <i className="fas fa-clock"></i>
                  <span>Lõpuni: {featuredGame.endsIn}</span>
                </div>
              </div>
              <button className="btn-play-now">
                <i className="fas fa-play"></i>
                {lang === 'et' ? 'Mängi kohe' : 'Play now'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="games-section">
        <div className="container">
          <div className="games-grid">
            {filteredGames.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-card-image">
                  <img src={game.cover} alt={lang === 'et' ? game.name : game.nameEn} />
                  <div className="game-card-overlay">
                    <button className="play-button">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                  <span 
                    className="difficulty-badge"
                    style={{ background: getDifficultyColor(lang === 'et' ? game.difficulty : game.difficultyEn) }}
                  >
                    {lang === 'et' ? game.difficulty : game.difficultyEn}
                  </span>
                </div>
                <div className="game-card-content">
                  <h3>{lang === 'et' ? game.name : game.nameEn}</h3>
                  <p>{lang === 'et' ? game.description : game.descriptionEn}</p>
                  <div className="game-card-meta">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <span>{game.rating}</span>
                    </div>
                    <div className="plays">
                      <i className="fas fa-users"></i>
                      <span>{game.plays}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Newsletter CTA */}
      <section className="games-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-icon">
              <i className="fas fa-bell"></i>
            </div>
            <div className="cta-content">
              <h3>{lang === 'et' ? 'Uued mängud otse postkasti' : 'New games to your inbox'}</h3>
              <p>{lang === 'et' ? 'Liitu ja saa teada esimesena uutest mängudest' : 'Subscribe to be the first to know about new games'}</p>
            </div>
            <div className="cta-form">
              <input type="email" placeholder="Sinu email" />
              <button>{lang === 'et' ? 'Liitu' : 'Subscribe'}</button>
            </div>
          </div>
        </div>
      </section>

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
                  ? 'NETI on Eesti juhtiv veebikataloog ja otsingusüsteem alates 1996. aastal.'
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
                <Link href="/kategooria">Riik ja Ühiskond</Link>
                <Link href="/kategooria">Info ja Meedia</Link>
                <Link href="/kategooria">Äri</Link>
                <Link href="/kategooria">Haridus</Link>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Teenused' : 'Services'}</h4>
                <Link href="/otsing">Otsing</Link>
                <Link href="/kategooria">Kataloog</Link>
                <Link href="/kuulutus">Reklaam</Link>
              </div>
              <div className="footer-column">
                <h4>{lang === 'et' ? 'Ettevõte' : 'Company'}</h4>
                <Link href="/meist">Meist</Link>
                <Link href="/meist">Kontakt</Link>
                <Link href="/meist">Privaatsus</Link>
                <Link href="/meist">Kasutustingimused</Link>
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
            <p>© 2026 NETI.ee - {lang === 'et' ? 'Kõik õigused kaitstud' : 'All rights reserved'}</p>
            <div className="footer-bottom-links">
              <a href="#">Privaatsus</a>
              <a href="#">Kasutustingimused</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .games-header {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          padding: 120px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .games-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .games-header-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .games-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .games-title i {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .games-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 32px;
        }

        .games-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-tab:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        }

        .games-featured {
          padding: 40px 0;
          background: #0f0f23;
        }

        .featured-game-card {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .featured-game-image {
          position: relative;
          height: 350px;
        }

        .featured-game-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-game-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .featured-badge {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .featured-game-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-game-content h2 {
          font-size: 2rem;
          color: white;
          margin-bottom: 12px;
        }

        .featured-game-content p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .featured-game-meta {
          margin-bottom: 24px;
        }

        .countdown {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 10px 20px;
          border-radius: 30px;
          color: #f59e0b;
          font-weight: 600;
        }

        .btn-play-now {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          align-self: flex-start;
        }

        .btn-play-now:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        }

        .games-section {
          padding: 60px 0;
          background: #0f0f23;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .game-card {
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .game-card-image {
          position: relative;
          height: 200px;
        }

        .game-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .game-card:hover .game-card-image img {
          transform: scale(1.1);
        }

        .game-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .game-card:hover .game-card-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.8);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .game-card:hover .play-button {
          transform: scale(1);
        }

        .difficulty-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 6px 12px;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .game-card-content {
          padding: 20px;
        }

        .game-card-content h3 {
          font-size: 1.3rem;
          color: white;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .game-card-content p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .game-card-meta {
          display: flex;
          gap: 20px;
        }

        .rating, .plays {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
        }

        .rating i {
          color: #f59e0b;
        }

        .games-cta {
          padding: 60px 0;
          background: #0f0f23;
        }

        .cta-card {
          background: linear-gradient(135deg, #1e3a8a, #1e40af);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          flex-shrink: 0;
        }

        .cta-content {
          flex: 1;
        }

        .cta-content h3 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 8px;
        }

        .cta-content p {
          color: rgba(255, 255, 255, 0.8);
        }

        .cta-form {
          display: flex;
          gap: 12px;
        }

        .cta-form input {
          padding: 14px 20px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          width: 250px;
          background: rgba(255, 255, 255, 0.9);
        }

        .cta-form button {
          padding: 14px 28px;
          background: white;
          color: #1e40af;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .games-title {
            font-size: 2rem;
          }
          
          .featured-game-card {
            grid-template-columns: 1fr;
          }
          
          .featured-game-image {
            height: 200px;
          }
          
          .featured-game-content {
            padding: 24px;
          }
          
          .cta-card {
            flex-direction: column;
            text-align: center;
          }
          
          .cta-form {
            flex-direction: column;
            width: 100%;
          }
          
          .cta-form input {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

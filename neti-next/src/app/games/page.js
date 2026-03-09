'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import '../kinnisvara/globals.css'

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
    plays: '12.5K',
    category: 'Puzzle',
    stats: { rooms: 3, area: 85, floor: '2/5' }
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
    plays: '8.2K',
    category: 'Puzzle',
    stats: { rooms: 4, area: 100, floor: '3/5' }
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
    plays: '25K',
    category: 'Trivia',
    stats: { rooms: 2, area: 60, floor: '1/3' }
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
    plays: '15K',
    category: 'Puzzle',
    stats: { rooms: 3, area: 75, floor: '4/5' }
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
    plays: '9.8K',
    category: 'Memory',
    stats: { rooms: 2, area: 55, floor: '2/4' }
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
    plays: '30K',
    category: 'Strategy',
    stats: { rooms: 1, area: 30, floor: '1/1' }
  }
]

const categories = [
  { id: 'all', name: 'Kõik', nameEn: 'All', icon: 'fa-th' },
  { id: 'puzzle', name: 'Puzzle', nameEn: 'Puzzle', icon: 'fa-puzzle-piece' },
  { id: 'trivia', name: 'Trivia', nameEn: 'Trivia', icon: 'fa-question' },
  { id: 'memory', name: 'Mälu', nameEn: 'Memory', icon: 'fa-brain' },
  { id: 'strategy', name: 'Strateegia', nameEn: 'Strategy', icon: 'fa-chess' }
]

export default function GamesPage() {
  const [lang, setLang] = useState('et')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedGame, setSelectedGame] = useState(null)

  const getDifficultyColor = (diff) => {
    if (diff === 'Kerge' || diff === 'Easy') return '#10b981'
    if (diff === 'Keskmine' || diff === 'Medium') return '#f59e0b'
    return '#ef4444'
  }

  const filteredGames = activeCategory === 'all' 
    ? gamesData 
    : gamesData.filter(game => game.category.toLowerCase() === activeCategory)

  const handleGameClick = (game) => {
    setSelectedGame(game)
  }

  const closeModal = () => {
    setSelectedGame(null)
  }

  return (
    <>
      <Navbar />

      {/* Detail Header - Real Estate Style */}
      <div className="detail-header">
        <div className="container">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          
          <h1>
            <i className="fas fa-dice" style={{ marginRight: '12px', color: '#1d4ed8' }}></i>
            {lang === 'et' ? ' Tasuta Mängud' : 'Free Games'}
          </h1>
          
          <p className="detail-address">
            <i className="fas fa-gamepad" style={{ marginRight: '8px' }}></i>
            {gamesData.length} {lang === 'et' ? 'mängu saadaval' : 'games available'}
          </p>
          
          <span className="detail-price" style={{ color: '#1d4ed8' }}>
            <i className="fas fa-star" style={{ marginRight: '8px' }}></i>
            {lang === 'et' ? 'Mängi kohe - Tasuta' : 'Play now - Free'}
          </span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="section" style={{ paddingBottom: '20px', background: '#f8fafc' }}>
        <div className="container">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`fas ${cat.icon}`}></i>
                {lang === 'et' ? cat.name : cat.nameEn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="section">
        <div className="container">
          <div className="detail-grid">
            {/* Games Grid - Main Content */}
            <div className="detail-content">
              <div className="games-list">
                {filteredGames.map((game, index) => (
                  <article 
                    key={game.id} 
                    className="game-listing-card"
                    onClick={() => handleGameClick(game)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="game-listing-image">
                      <img src={game.cover} alt={lang === 'et' ? game.name : game.nameEn} />
                      <span 
                        className="game-badge"
                        style={{ background: getDifficultyColor(lang === 'et' ? game.difficulty : game.difficultyEn) }}
                      >
                        {lang === 'et' ? game.difficulty : game.difficultyEn}
                      </span>
                    </div>
                    <div className="game-listing-info">
                      <h3>{lang === 'et' ? game.name : game.nameEn}</h3>
                      <p className="game-desc">{lang === 'et' ? game.description : game.descriptionEn}</p>
                      
                      <div className="game-stats">
                        <div className="game-stat">
                          <i className="fas fa-star"></i>
                          <span>{game.rating}</span>
                        </div>
                        <div className="game-stat">
                          <i className="fas fa-users"></i>
                          <span>{game.plays}</span>
                        </div>
                        <div className="game-stat">
                          <i className="fas fa-layer-group"></i>
                          <span>{game.category}</span>
                        </div>
                      </div>
                      
                      <button className="btn-primary">
                        <i className="fas fa-play"></i>
                        {lang === 'et' ? 'Mängi' : 'Play'}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="detail-panel">
              {/* Featured Game Widget */}
              <div className="panel-widget featured-panel">
                <div className="widget-badge">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>{lang === 'et' ? 'Päevane Väljakutse' : 'Daily Challenge'}</h3>
                <p>{lang === 'et' ? 'Lahenda iga päev uus ristsõna ja võida auhindu!' : 'Solve a new crossword every day and win prizes!'}</p>
                
                <div className="countdown-timer">
                  <i className="fas fa-clock"></i>
                  <span>23:59:59</span>
                </div>
                
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fas fa-play"></i>
                  {lang === 'et' ? 'Mängi kohe' : 'Play now'}
                </button>
              </div>

              {/* Top Players Widget */}
              <div className="panel-widget">
                <h3>
                  <i className="fas fa-crown" style={{ color: '#f59e0b', marginRight: '8px' }}></i>
                  {lang === 'et' ? 'Edetabel' : 'Leaderboard'}
                </h3>
                <div className="leaderboard">
                  <div className="leaderboard-item">
                    <span className="rank gold">1</span>
                    <div className="player-details">
                      <span className="player-name">Mängija123</span>
                      <span className="player-score">2,450 punkti</span>
                    </div>
                  </div>
                  <div className="leaderboard-item">
                    <span className="rank silver">2</span>
                    <div className="player-details">
                      <span className="player-name">KergeMäng</span>
                      <span className="player-score">2,320 punkti</span>
                    </div>
                  </div>
                  <div className="leaderboard-item">
                    <span className="rank bronze">3</span>
                    <div className="player-details">
                      <span className="player-name">SudokuPro</span>
                      <span className="player-score">2,180 punkti</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="panel-widget">
                <h3>
                  <i className="fas fa-folder" style={{ marginRight: '8px' }}></i>
                  {lang === 'et' ? 'Kategooriad' : 'Categories'}
                </h3>
                <div className="categories-grid">
                  {categories.slice(1).map(cat => (
                    <button
                      key={cat.id}
                      className={`category-chip ${activeCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <i className={`fas ${cat.icon}`}></i>
                      {lang === 'et' ? cat.name : cat.nameEn}
                      <span className="chip-count">
                        {gamesData.filter(g => g.category.toLowerCase() === cat.id).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Game Modal */}
      {selectedGame && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content game-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-game-image">
              <img src={selectedGame.cover} alt={lang === 'et' ? selectedGame.name : selectedGame.nameEn} />
              <span 
                className="modal-badge"
                style={{ background: getDifficultyColor(lang === 'et' ? selectedGame.difficulty : selectedGame.difficultyEn) }}
              >
                {lang === 'et' ? selectedGame.difficulty : selectedGame.difficultyEn}
              </span>
            </div>
            
            <div className="modal-game-info">
              <h2>{lang === 'et' ? selectedGame.name : selectedGame.nameEn}</h2>
              <p>{lang === 'et' ? selectedGame.description : selectedGame.descriptionEn}</p>
              
              <div className="detail-stats">
                <div className="detail-stat">
                  <i className="fas fa-star"></i>
                  <span className="stat-value">{selectedGame.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="detail-stat">
                  <i className="fas fa-users"></i>
                  <span className="stat-value">{selectedGame.plays}</span>
                  <span className="stat-label">{lang === 'et' ? 'Mänginud' : 'Played'}</span>
                </div>
                <div className="detail-stat">
                  <i className="fas fa-layer-group"></i>
                  <span className="stat-value">{selectedGame.category}</span>
                  <span className="stat-label">{lang === 'et' ? 'Kategooria' : 'Category'}</span>
                </div>
              </div>
              
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
                <i className="fas fa-play"></i>
                {lang === 'et' ? 'Alusta mängu' : 'Start game'}
              </button>
            </div>
          </div>
        </div>
      )}

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
        /* Category Tabs */
        .category-tabs {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding: 16px 0;
        }

        .category-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 30px;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .category-tab:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .category-tab.active {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }

        /* Games List */
        .games-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .game-listing-card {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .game-listing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(29, 78, 216, 0.12);
          border-color: #3b82f6;
        }

        .game-listing-image {
          position: relative;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
        }

        .game-listing-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .game-listing-card:hover .game-listing-image img {
          transform: scale(1.08);
        }

        .game-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 12px;
          border-radius: 20px;
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .game-listing-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .game-listing-info h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .game-desc {
          color: #64748b;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .game-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
        }

        .game-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 0.9rem;
        }

        .game-stat i {
          color: #1d4ed8;
        }

        .game-stat:first-child i {
          color: #f59e0b;
        }

        .game-listing-info .btn-primary {
          align-self: flex-start;
        }

        /* Panel Widgets */
        .panel-widget {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
        }

        .panel-widget h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .featured-panel {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          border: none;
        }

        .featured-panel h3 {
          color: white;
        }

        .featured-panel p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
        }

        .widget-badge {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 16px;
        }

        .countdown-timer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px;
          border-radius: 10px;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 16px;
        }

        /* Leaderboard */
        .leaderboard {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 10px;
        }

        .rank {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .rank.gold {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: white;
        }

        .rank.silver {
          background: linear-gradient(135deg, #94a3b8, #cbd5e1);
          color: white;
        }

        .rank.bronze {
          background: linear-gradient(135deg, #d97706, #f59e0b);
          color: white;
        }

        .player-details {
          display: flex;
          flex-direction: column;
        }

        .player-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.95rem;
        }

        .player-score {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Categories Grid */
        .categories-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          color: #1e293b;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-chip:hover {
          background: #e2e8f0;
          transform: translateX(4px);
        }

        .category-chip.active {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }

        .chip-count {
          margin-left: auto;
          background: rgba(0, 0, 0, 0.1);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        /* Game Modal */
        .game-modal {
          max-width: 600px;
          padding: 0;
          overflow: hidden;
        }

        .modal-game-image {
          position: relative;
          height: 250px;
        }

        .modal-game-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 6px 16px;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .modal-game-info {
          padding: 24px;
        }

        .modal-game-info h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .modal-game-info p {
          color: #64748b;
          margin-bottom: 20px;
        }

        @media (max-width: 900px) {
          .game-listing-card {
            grid-template-columns: 1fr;
          }
          
          .game-listing-image {
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .detail-header h1 {
            font-size: 1.5rem;
          }
          
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

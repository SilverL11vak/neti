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
    plays: '12.5K',
    category: 'Puzzle'
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
    category: 'Puzzle'
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
    category: 'Trivia'
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
    category: 'Puzzle'
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
    category: 'Memory'
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
    category: 'Strategy'
  }
]

const categories = [
  { id: 'all', name: 'Kõik', nameEn: 'All' },
  { id: 'puzzle', name: 'Puzzle', nameEn: 'Puzzle' },
  { id: 'trivia', name: 'Trivia', nameEn: 'Trivia' },
  { id: 'memory', name: 'Mälu', nameEn: 'Memory' },
  { id: 'strategy', name: 'Strateegia', nameEn: 'Strategy' }
]

export default function GamesPage() {
  const [lang, setLang] = useState('et')
  const [activeCategory, setActiveCategory] = useState('all')

  const getDifficultyColor = (diff) => {
    if (diff === 'Kerge' || diff === 'Easy') return '#10b981'
    if (diff === 'Keskmine' || diff === 'Medium') return '#f59e0b'
    return '#ef4444'
  }

  const filteredGames = activeCategory === 'all' 
    ? gamesData 
    : gamesData.filter(game => game.category.toLowerCase() === activeCategory)

  return (
    <>
      <Navbar />

      {/* Page Header - Following news detail page style */}
      <div className="news-detail-header">
        <div className="container">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          
          <div className="news-meta">
            <span className="news-category-badge">
              <i className="fas fa-gamepad"></i>
              {lang === 'et' ? 'Mängud' : 'Games'}
            </span>
            <span className="news-date">
              <i className="fas fa-calendar-alt"></i>
              8. märts 2026
            </span>
          </div>
          
          <h1 className="news-title">
            <i className="fas fa-dice" style={{ marginRight: '12px', color: '#1d4ed8' }}></i>
            {lang === 'et' ? ' Tasuta Mängud' : 'Free Games'}
          </h1>
          
          <div className="news-author-row">
            <div className="news-author">
              <div className="author-avatar">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="author-info">
                <span className="author-name">NETI Mängud</span>
                <span className="read-time">
                  <i className="fas fa-clock"></i>
                  {gamesData.length} {lang === 'et' ? 'mängu' : 'games'}
                </span>
              </div>
            </div>
            <div className="news-share">
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
          <div className="games-layout">
            {/* Games Grid - Main Content */}
            <div className="games-main">
              {/* Category Filters */}
              <div className="category-filters">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {lang === 'et' ? cat.name : cat.nameEn}
                  </button>
                ))}
              </div>

              {/* Games Grid */}
              <div className="games-grid">
                {filteredGames.map((game, index) => (
                  <article key={game.id} className="game-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="game-card-image">
                      <img src={game.cover} alt={lang === 'et' ? game.name : game.nameEn} />
                      <span 
                        className="game-difficulty-badge"
                        style={{ background: getDifficultyColor(lang === 'et' ? game.difficulty : game.difficultyEn) }}
                      >
                        {lang === 'et' ? game.difficulty : game.difficultyEn}
                      </span>
                    </div>
                    <div className="game-card-content">
                      <h3>{lang === 'et' ? game.name : game.nameEn}</h3>
                      <p>{lang === 'et' ? game.description : game.descriptionEn}</p>
                      <div className="game-card-footer">
                        <div className="game-rating">
                          <i className="fas fa-star"></i>
                          <span>{game.rating}</span>
                        </div>
                        <div className="game-plays">
                          <i className="fas fa-users"></i>
                          <span>{game.plays}</span>
                        </div>
                        <button className="play-btn">
                          {lang === 'et' ? 'Mängi' : 'Play'}
                          <i className="fas fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="games-sidebar">
              {/* Featured Game Widget */}
              <div className="sidebar-widget featured-widget">
                <div className="widget-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4>{lang === 'et' ? 'Päevane Väljakutse' : 'Daily Challenge'}</h4>
                <p>{lang === 'et' ? 'Lahenda iga päev uus ristsõna!' : 'Solve a new crossword every day!'}</p>
                <div className="countdown-box">
                  <i className="fas fa-clock"></i>
                  <span>23:59:59</span>
                </div>
                <button className="widget-btn primary">
                  {lang === 'et' ? 'Mängi kohe' : 'Play now'}
                </button>
              </div>

              {/* Top Players Widget */}
              <div className="sidebar-widget">
                <h4><i className="fas fa-crown" style={{ color: '#f59e0b', marginRight: '8px' }}></i>
                  {lang === 'et' ? 'Edetabel' : 'Leaderboard'}</h4>
                <div className="leaderboard-list">
                  <div className="leaderboard-item">
                    <span className="rank gold">1</span>
                    <div className="player-info">
                      <span className="player-name">Mängija123</span>
                      <span className="player-score">2,450 punkti</span>
                    </div>
                  </div>
                  <div className="leaderboard-item">
                    <span className="rank silver">2</span>
                    <div className="player-info">
                      <span className="player-name">KergeMäng</span>
                      <span className="player-score">2,320 punkti</span>
                    </div>
                  </div>
                  <div className="leaderboard-item">
                    <span className="rank bronze">3</span>
                    <div className="player-info">
                      <span className="player-name">SudokuPro</span>
                      <span className="player-score">2,180 punkti</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget">
                <h4><i className="fas fa-folder" style={{ marginRight: '8px' }}></i>
                  {lang === 'et' ? 'Kategooriad' : 'Categories'}</h4>
                <div className="category-list">
                  {categories.slice(1).map(cat => (
                    <a 
                      key={cat.id} 
                      href="#" 
                      className="category-item"
                      onClick={(e) => { e.preventDefault(); setActiveCategory(cat.id); }}
                    >
                      <span>{lang === 'et' ? cat.name : cat.nameEn}</span>
                      <span className="count">
                        {gamesData.filter(g => g.category.toLowerCase() === cat.id).length}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

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
        .category-filters {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .category-filter-btn {
          padding: 10px 20px;
          border: 1px solid #e2e8f0;
          background: white;
          border-radius: 30px;
          color: #64748b;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .category-filter-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .category-filter-btn.active {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
        }

        .games-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .game-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(29, 78, 216, 0.15);
          border-color: #3b82f6;
        }

        .game-card-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .game-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .game-card:hover .game-card-image img {
          transform: scale(1.08);
        }

        .game-difficulty-badge {
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

        .game-card-content {
          padding: 20px;
        }

        .game-card-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .game-card-content p {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .game-card-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .game-rating, .game-plays {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #64748b;
          font-size: 0.85rem;
        }

        .game-rating i {
          color: #f59e0b;
        }

        .play-btn {
          margin-left: auto;
          padding: 8px 16px;
          background: #1d4ed8;
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.3s ease;
        }

        .play-btn:hover {
          background: #1e40af;
          transform: translateX(4px);
        }

        .play-btn i {
          font-size: 0.7rem;
        }

        /* Sidebar Styles - Following news detail page */
        .games-sidebar {
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
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
        }

        .featured-widget {
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          border: none;
        }

        .featured-widget h4 {
          color: white;
        }

        .featured-widget p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
        }

        .featured-widget .widget-icon {
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

        .countdown-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 10px 16px;
          border-radius: 10px;
          color: white;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .widget-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .widget-btn.primary {
          background: white;
          color: #1d4ed8;
          border: none;
        }

        .widget-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }

        /* Leaderboard */
        .leaderboard-list {
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

        .player-info {
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

        /* Category List */
        .category-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8fafc;
          border-radius: 10px;
          text-decoration: none;
          color: #1e293b;
          transition: all 0.3s ease;
        }

        .category-item:hover {
          background: #e2e8f0;
          transform: translateX(4px);
        }

        .category-item .count {
          background: #1d4ed8;
          color: white;
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .games-layout {
            grid-template-columns: 1fr;
          }
          
          .games-sidebar {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .news-title {
            font-size: 1.75rem !important;
          }
          
          .games-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

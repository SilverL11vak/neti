'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import '../kinnisvara/globals.css'

export default function MailboxPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  // Mock emails
  const [emails] = useState([
    {
      id: 1,
      from: 'info@neti.ee',
      subject: 'Tere tulemast NETI mailboxi!',
      preview: 'Oled edukalt loonud oma NETI postkasti...',
      date: 'Täna',
      read: false,
      starred: true
    },
    {
      id: 2,
      from: 'pakkumised@kaubaturg.ee',
      subject: 'Uued pakkumised teie huvidest',
      preview: 'Oleme leidnud mõned uued pakkumised...',
      date: 'Eile',
      read: true,
      starred: false
    },
    {
      id: 3,
      from: 'uudised@neti.ee',
      subject: 'NETI uudiskiri - Märts 2026',
      preview: 'Siin on selle kuu kokkuvõte...',
      date: '3 päeva tagasi',
      read: true,
      starred: false
    },
    {
      id: 4,
      from: 'support@neti.ee',
      subject: 'Teie konto on kinnitatud',
      preview: 'Teie konto on nüüd täielikult aktiivne...',
      date: '1 nädal tagasi',
      read: true,
      starred: false
    }
  ])
  
  const handleLogin = (e) => {
    e.preventDefault()
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true)
    }
  }
  
  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        
        {/* Page Header */}
        <div className="detail-header">
          <div className="container">
            <Link href="/" className="back-link">
              <i className="fas fa-arrow-left"></i>
              Tagasi
            </Link>
            <h1>Minu Postkast</h1>
            <p className="detail-address">Logi sisse, et vaadata oma sõnumeid</p>
          </div>
        </div>

        {/* Login Form */}
        <main className="section">
          <div className="container">
            <div className="login-card">
              <div className="login-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h2>Logi sisse</h2>
              <p>Sisesta oma NETI konto andmed</p>
              
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <label>E-posti aadress</label>
                  <input 
                    type="email" 
                    placeholder="sinu@email.ee"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Parool</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-sign-in-alt"></i>
                  Logi sisse
                </button>
              </form>
              
              <div className="login-footer">
                <a href="#">Unustasid parooli?</a>
                <span>•</span>
                <a href="#">Loo uus konto</a>
              </div>
            </div>
          </div>
        </main>

        <style jsx>{`
          .login-card {
            max-width: 400px;
            margin: 0 auto;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
          }
          
          .login-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            font-size: 2rem;
            color: white;
          }
          
          .login-card h2 {
            font-size: 1.5rem;
            color: #1e293b;
            margin-bottom: 8px;
          }
          
          .login-card p {
            color: #64748b;
            margin-bottom: 32px;
          }
          
          .login-form {
            text-align: left;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-group label {
            display: block;
            font-size: 0.9rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 8px;
          }
          
          .form-group input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            font-size: 1rem;
            color: #1e293b;
            outline: none;
            transition: border-color 0.2s;
            box-sizing: border-box;
          }
          
          .form-group input:focus {
            border-color: #3b82f6;
          }
          
          .login-form .btn-primary {
            width: 100%;
            justify-content: center;
            margin-top: 8px;
          }
          
          .login-footer {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            justify-content: center;
            gap: 12px;
          }
          
          .login-footer a {
            color: #1d4ed8;
            font-size: 0.9rem;
            text-decoration: none;
          }
          
          .login-footer a:hover {
            text-decoration: underline;
          }
          
          .login-footer span {
            color: #cbd5e1;
          }
        `}</style>
      </>
    )
  }
  
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="detail-header">
        <div className="container">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          <h1>Minu Postkast</h1>
          <p className="detail-address">Sinu NETI isiklik postkast</p>
        </div>
      </div>

      {/* Email List */}
      <main className="section">
        <div className="container">
          <div className="mailbox-container">
            {/* Sidebar */}
            <div className="mailbox-sidebar">
              <button className="compose-btn">
                <i className="fas fa-pen"></i>
                Uus sõnum
              </button>
              
              <div className="folder-list">
                <a href="#" className="folder-item active">
                  <i className="fas fa-inbox"></i>
                  <span>Saabunud</span>
                  <span className="count">4</span>
                </a>
                <a href="#" className="folder-item">
                  <i className="fas fa-star"></i>
                  <span>Tähitatud</span>
                </a>
                <a href="#" className="folder-item">
                  <i className="fas fa-paper-plane"></i>
                  <span>Saadetud</span>
                </a>
                <a href="#" className="folder-item">
                  <i className="fas fa-trash"></i>
                  <span>Prügikast</span>
                </a>
              </div>
              
              <div className="user-info">
                <div className="user-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="user-details">
                  <span className="user-name">Kasutaja</span>
                  <span className="user-email">{loginEmail}</span>
                </div>
                <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            </div>
            
            {/* Email List */}
            <div className="email-list">
              <div className="email-list-header">
                <h3>Saabunud</h3>
              </div>
              
              {emails.map(email => (
                <div key={email.id} className={`email-item ${email.read ? 'read' : 'unread'}`}>
                  <div className="email-star">
                    <i className={`fas fa-star ${email.starred ? 'starred' : ''}`}></i>
                  </div>
                  <div className="email-from">{email.from}</div>
                  <div className="email-subject">{email.subject}</div>
                  <div className="email-preview">{email.preview}</div>
                  <div className="email-date">{email.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .mailbox-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
        }
        
        .mailbox-sidebar {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          height: fit-content;
        }
        
        .compose-btn {
          width: 100%;
          padding: 14px 20px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
          transition: all 0.2s;
        }
        
        .compose-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3);
        }
        
        .folder-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .folder-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          color: #64748b;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .folder-item:hover {
          background: #f1f5f9;
          color: #1e293b;
        }
        
        .folder-item.active {
          background: #eff6ff;
          color: #1d4ed8;
        }
        
        .folder-item i {
          width: 20px;
        }
        
        .folder-item .count {
          margin-left: auto;
          background: #1d4ed8;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .user-info {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }
        
        .user-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .user-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.9rem;
        }
        
        .user-email {
          font-size: 0.75rem;
          color: #64748b;
        }
        
        .logout-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: #f1f5f9;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .logout-btn:hover {
          background: #ef4444;
          color: white;
        }
        
        .email-list {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
        }
        
        .email-list-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .email-list-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }
        
        .email-item {
          display: grid;
          grid-template-columns: 40px 180px 1fr 1fr 100px;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .email-item:hover {
          background: #f8fafc;
        }
        
        .email-item.unread {
          background: #eff6ff;
        }
        
        .email-item.unread:hover {
          background: #dbeafe;
        }
        
        .email-star {
          color: #cbd5e1;
        }
        
        .email-star .starred {
          color: #f59e0b;
        }
        
        .email-from {
          font-weight: 500;
          color: #1e293b;
        }
        
        .email-item.unread .email-from {
          font-weight: 700;
        }
        
        .email-subject {
          color: #1e293b;
          font-weight: 500;
        }
        
        .email-preview {
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .email-date {
          color: #94a3b8;
          font-size: 0.85rem;
          text-align: right;
        }
        
        @media (max-width: 768px) {
          .mailbox-container {
            grid-template-columns: 1fr;
          }
          
          .email-item {
            grid-template-columns: 40px 1fr 80px;
          }
          
          .email-subject, .email-preview {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

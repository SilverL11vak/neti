'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'

// Full news articles data
const newsArticles = {
  1: {
    title: 'Tallinnas avati uus moodsate tehnoloogiate keskus',
    titleEn: 'New modern technology center opened in Tallinn',
    description: 'Eesti pealinnas avati täna suurim tehnoloogia- ja innovatsioonikeskus, kus startup-id ja tehnoloogiaettevotted saavad arendada uusi lahendusi.',
    descriptionEn: 'The capital of Estonia opened the largest technology and innovation center today, where startups and technology companies can develop new solutions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    date: '8. marts 2026',
    category: 'Tehnoloogia',
    author: 'NETI Toimetus',
    readTime: '5 min',
    content: 'Täna avati Tallinnas pidulikult uus moodsate tehnoloogiate keskus, mis on Eesti suurim sellelaadne rajatis. Keskusesse on investeeritud üle 50 miljoni euro ja see pakub töökohti ligikaudu 2000 inimesele.\n\nUus keskus asub Tallinna kesklinnas ja hõlmab endas mitmeid erinevaid tehnoloogiavaldkondi, sealhulgas kunstliku intellekti, robootika ja fintechi startupe. Keskuse eesmärk on luua ökosüsteem, kus idufirmad saaksid areneda ja kasvada koostöös suurettevotetega.\n\nSee on suur samm Eesti tehnoloogiasektorile, ütles keskuse direktor. Me tahame luua koha, kus innovatsioon saab õitseda ja kus noored ettevõtjad saavad oma ideid ellu viia.\n\nKeskus pakub lisaks tööruumidele ka nõustamisteenuseid, mentorprogramme ja ligipääsu riskikapitalile. Esimeste rentnikena on keskusesse asunud juba 30 ettevõtet, kuid ruume on veel vabadele ideedele.\n\nEesti Vabariigi president avas keskuse pidulikult ja rõhutas, et innovatsioon on Eesti tuleviku võti. Me peame jätkama investeerimist tehnoloogiasse ja haridusse, et säilitada oma konkurentsivõimet maailmas, ütles president.\n\nKeskus on avatud kõigile ettevõtjatele ja startuppidele, kes soovivad arendada uusi tehnoloogilisi lahendusi. Kandideerimine ruumidele on juba alanud ja esimeste ettevõtete sissesekkumine on planeeritud järgmistesse kuudesse.',
    contentEn: 'Today, a grand opening ceremony was held in Tallinn for a new modern technology center, which is the largest such facility in Estonia. Over 50 million euros have been invested in the center, which will provide jobs for approximately 2,000 people.\n\nThe new center is located in central Tallinn and encompasses several different technology sectors, including artificial intelligence, robotics, and fintech startups. The goal is to create an ecosystem where startups can develop and grow in cooperation with major companies.\n\nThis is a big step for Estonia technology sector, said the center director. We want to create a place where innovation can thrive and where young entrepreneurs can bring their ideas to life.\n\nIn addition to office spaces, the center offers consulting services, mentor programs, and access to venture capital. The first tenants have already moved in, but there are still spaces available for new ideas.\n\nThe President of Estonia opened the center ceremonially and emphasized that innovation is the key to Estonia future. We must continue investing in technology and education to maintain our competitiveness in the world, said the president.\n\nThe center is open to all entrepreneurs and startups who want to develop new technological solutions. Applications for spaces have already begun, and the first companies are scheduled to move in next month.'
  },
  2: {
    title: 'Eesti ilu- ja tervisemess toimub sel nadalal',
    titleEn: 'Estonian beauty and health fair this week',
    description: 'Nädalavahetusel toimub Tallinnas suur ilu- ja tervisemess, kus osalevad tuntud brandid ja eksperdid jagavad nõuandeid tervisliku eluviisi kohta.',
    descriptionEn: 'This weekend a major beauty and health fair takes place in Tallinn, where well-known brands and experts will share advice on healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=600&fit=crop',
    date: '7. marts 2026',
    category: 'Tervis',
    author: 'NETI Toimetus',
    readTime: '3 min',
    content: 'Sel nädalavahetusel toimub Tallinnas XXII Eesti ilu- ja tervisemess, mis on aasta suurim sündmus selles valdkonnas. Messi korraldajad ootavad üle 20 000 külastaja.\n\nMessil esitlevad oma tooteid ja teenuseid üle 150 ettevõtte, sh tuntud ilu- ja tervisebrandid. Külastajad saavad osaleda tasuta töötubades ja kuulata ekspertide ettekandeid.\n\nSee on suurepärane võimalus tutvuda uusimate trendidega ilu- ja tervisemaailmas, ütles korraldaja. Oleme seekord keskendunud eriti jätkusuutlikele ja looduslikele toodetele.\n\nMessi programm sisaldab ka mitmeid võistlusi, sh modellivõistlust ja ilukonkurssi. Lisaks toimub galaõhtu, kus autasustatakse aasta parimaid ilutooteid ja teenuseid.\n\nEksperdid rõhutavad, et tervislik eluviis on muutunud üha olulisemaks ja inimesed otsivad pidevalt uusi viise, kuidas oma heaolu parandada. Mess pakub selleks suurepärase võimaluse.',
    contentEn: 'This weekend, the XXII Estonian Beauty and Health Fair takes place in Tallinn, which is the biggest annual event in this field. The organizers expect over 20,000 visitors.\n\nMore than 150 companies will present their products and services at the fair, including well-known beauty and health brands. Visitors can participate in free workshops and listen to expert presentations.\n\nThis is a great opportunity to learn about the latest trends in the beauty and health world, said the organizer. This year, we have focused particularly on sustainable and natural products.\n\nThe fair program also includes several competitions, including a modeling contest and a beauty pageant. Additionally, a gala evening will take place where the best beauty products and services of the year will be awarded.\n\nExperts emphasize that a healthy lifestyle has become increasingly important, and people are constantly looking for new ways to improve their well-being. The fair provides an excellent opportunity for this.'
  },
  3: {
    title: 'Uuring: Eestlased eelistavad puhkuseks kodumaad',
    titleEn: 'Study: Estonians prefer domestic travel for holidays',
    description: 'Uuringu kohaselt eelistavad Eesti elanikud puhkuse veetmist kodumaal, eelkõige Saaremaal ja Parnumaal, kus pakutakse matka- ja SPA-voimalusi.',
    descriptionEn: 'According to a study, Estonian residents prefer spending their holidays domestically, especially in Saaremaa and Parnu county, which offer hiking and SPA opportunities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    date: '6. marts 2026',
    category: 'Reisimine',
    author: 'NETI Toimetus',
    readTime: '4 min',
    content: 'Hiljuti avaldatud uuring näitab, et Eesti elanikud eelistavad puhkuse veetmist kodumaal. Küsitluse kohaselt on viimase aasta jooksul 78% eestlastest puhkanud Eestis.\n\nKõige populaarsemad sihtkohad on Saaremaa, Parnu ja Lõuna-Eesti. Saaremaad külastatakse eelkõige looduse ja rahu tõttu, Parnut aga SPA ja hea teeninduse eest.\n\nSee on positiivne trend, kommenteeris Eesti Turismi juht. Kodumaine turism on jätkusuutlik ja toetab kohalikku majandust.\n\nUuringust selgus ka, et eestlased otsivad puhkusel eelkõige loodust ja aktiivset tegevust. Matkamine, jalgrattasõit ja veesport on kõige populaarsemad tegevused.\n\nHuvitav on see, et noored eelistavad siiski välismaist puhkust, eelkõige soojade maade reise. Üle 40-aastased aga eelistavad kodumaad.',
    contentEn: 'A recently published study shows that Estonian residents prefer spending their holidays domestically. According to the survey, 78% of Estonians have vacationed in Estonia over the past year.\n\nThe most popular destinations are Saaremaa, Parnu, and Southern Estonia. Saaremaa is visited primarily for its nature and tranquility, while Parnu is known for its SPA and good service.\n\nThis is a positive trend, commented the head of Estonian Tourism. Domestic tourism is sustainable and supports the local economy.\n\nThe study also revealed that Estonians look for nature and active activities on vacation. Hiking, cycling, and water sports are the most popular activities.\n\nInterestingly, young people still prefer foreign travel, especially trips to warm countries. Those over 40 prefer domestic destinations.'
  }
}

export default function NewsDetailPage() {
  const params = useParams()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  
  const newsId = parseInt(params.id)
  const article = newsArticles[newsId]
  
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="not-found-section">
          <div className="not-found-card">
            <i className="fas fa-newspaper"></i>
            <h2>Artiklit ei leitud</h2>
            <p>Kahjuks seda uudist enam ei leidu.</p>
            <Link href="/" className="btn-primary">
              <i className="fas fa-arrow-left"></i>
              Tagasi avalehele
            </Link>
          </div>
        </div>
      </>
    )
  }
  
  const content = article.content || article.contentEn
  
  // Split content in half for the blur effect
  const contentParts = content.split('\n\n')
  const midpoint = Math.ceil(contentParts.length / 2)
  const visibleContent = contentParts.slice(0, midpoint)
  const blurredContent = contentParts.slice(midpoint)
  
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="news-detail-header">
        <div className="container">
          <Link href="/" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          
          <div className="news-meta">
            <span className="news-category-badge">{article.category}</span>
            <span className="news-date">
              <i className="fas fa-calendar-alt"></i>
              {article.date}
            </span>
          </div>
          
          <h1 className="news-title">{article.title}</h1>
          
          <div className="news-author-row">
            <div className="news-author">
              <div className="author-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="author-info">
                <span className="author-name">{article.author}</span>
                <span className="read-time">
                  <i className="fas fa-clock"></i>
                  {article.readTime} lugemiseks
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
          <div className="news-detail-grid">
            {/* Main Article Content */}
            <div className="news-main-content">
              {/* Featured Image */}
              <div className="featured-image">
                <img src={article.image} alt={article.title} />
              </div>
              
              {/* Introduction */}
              <div className="article-intro">
                <p>{article.description}</p>
              </div>
              
              {/* Visible Content */}
              {visibleContent.map((part, index) => (
                <p key={index} className="article-paragraph">{part}</p>
              ))}
              
              {/* Blurred Content */}
              {!isSubscribed && (
                <div className="locked-content">
                  {blurredContent.map((part, index) => (
                    <p key={index} className="article-paragraph blurred">{part}</p>
                  ))}
                  
                  {/* Subscribe Overlay */}
                  <div className="subscribe-overlay">
                    <div className="blur-gradient"></div>
                    <div className="subscribe-card">
                      <div className="subscribe-icon">
                        <i className="fas fa-lock"></i>
                      </div>
                      <h3>Loe lugu edasi</h3>
                      <p>Tellige NETI Premium ja saate juurdepääsu kõikidele uudistele ja artiklitele</p>
                      
                      <div className="subscribe-price-tag">
                        <span className="price">€2.99</span>
                        <span className="period">/kuu</span>
                      </div>
                      
                      <button className="subscribe-btn" onClick={() => setIsSubscribed(true)}>
                        Tellima kohe
                        <i className="fas fa-arrow-right"></i>
                      </button>
                      
                      <span className="trial-text">14-päevane tasuta prooviperiood</span>
                    </div>
                  </div>
                </div>
              )}
              
              {isSubscribed && (
                <div className="unlocked-content">
                  {blurredContent.map((part, index) => (
                    <p key={index} className="article-paragraph">{part}</p>
                  ))}
                </div>
              )}
              
              {/* Tags */}
              <div className="article-tags">
                <span className="tag-label">Sildid:</span>
                <span className="tag">Tehnoloogia</span>
                <span className="tag">Eesti</span>
                <span className="tag">Tallinn</span>
                <span className="tag">Innovatsioon</span>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="news-sidebar">
              {/* Subscribe Widget */}
              <div className="sidebar-widget subscribe-widget">
                <div className="widget-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h4>NETI Premium</h4>
                <p>Saate juurdepääsu kõikidele eksklusiivsetele artiklitele</p>
                <div className="widget-price">
                  <span className="price-amount">€2.99</span>
                  <span className="price-period">/kuu</span>
                </div>
                <button className="widget-btn">Proovi tasuta</button>
              </div>
              
              {/* Related News */}
              <div className="sidebar-widget">
                <h4>Veel uudiseid</h4>
                <div className="related-list">
                  {Object.entries(newsArticles)
                    .filter(([id]) => parseInt(id) !== newsId)
                    .slice(0, 3)
                    .map(([id, item]) => (
                      <Link href={`/uudised/${id}`} key={id} className="related-item">
                        <div className="related-thumb">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="related-info">
                          <span className="related-cat">{item.category}</span>
                          <h5>{item.title}</h5>
                          <span className="related-date">{item.date}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="sidebar-widget">
                <h4>Kategooriad</h4>
                <div className="category-list">
                  <a href="#" className="category-item">
                    <span>Tehnoloogia</span>
                    <span className="count">24</span>
                  </a>
                  <a href="#" className="category-item">
                    <span>Tervis</span>
                    <span className="count">18</span>
                  </a>
                  <a href="#" className="category-item">
                    <span>Reisimine</span>
                    <span className="count">15</span>
                  </a>
                  <a href="#" className="category-item">
                    <span>Äri</span>
                    <span className="count">12</span>
                  </a>
                  <a href="#" className="category-item">
                    <span>Kultuur</span>
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
        
        .news-detail-header {
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
        
        .news-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .news-category-badge {
          display: inline-block;
          padding: 6px 14px;
          background: #1d4ed8;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 20px;
          text-transform: uppercase;
        }
        
        .news-date {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .news-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin: 0 0 24px 0;
        }
        
        .news-author-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .news-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .author-info {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-weight: 600;
          color: #1e293b;
        }
        
        .read-time {
          font-size: 0.85rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .news-share {
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
        
        .news-detail-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
        }
        
        .featured-image {
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 32px;
        }
        
        .featured-image img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .article-intro {
          font-size: 1.25rem;
          font-weight: 500;
          color: #1e293b;
          line-height: 1.7;
          padding-bottom: 24px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 24px;
        }
        
        .article-paragraph {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 24px;
        }
        
        .blurred {
          filter: blur(6px);
          user-select: none;
          pointer-events: none;
        }
        
        .locked-content {
          position: relative;
        }
        
        .subscribe-overlay {
          margin-top: 32px;
        }
        
        .blur-gradient {
          position: absolute;
          top: -100px;
          left: 0;
          right: 0;
          height: 150px;
          background: linear-gradient(to bottom, transparent, white);
          pointer-events: none;
        }
        
        .subscribe-card {
          background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          color: white;
        }
        
        .subscribe-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .subscribe-icon i {
          font-size: 1.75rem;
        }
        
        .subscribe-card h3 {
          font-size: 1.5rem;
          margin: 0 0 12px 0;
        }
        
        .subscribe-card p {
          opacity: 0.9;
          margin-bottom: 24px;
        }
        
        .subscribe-price-tag {
          margin-bottom: 24px;
        }
        
        .price {
          font-size: 2.5rem;
          font-weight: 700;
        }
        
        .period {
          font-size: 1rem;
          opacity: 0.8;
        }
        
        .subscribe-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          background: white;
          color: #1d4ed8;
          border: none;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        .trial-text {
          display: block;
          margin-top: 16px;
          font-size: 0.85rem;
          opacity: 0.7;
        }
        
        .unlocked-content {
          margin-top: 32px;
        }
        
        .article-tags {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
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
          padding: 6px 12px;
          background: #f1f5f9;
          color: #64748b;
          border-radius: 20px;
          font-size: 0.85rem;
        }
        
        /* Sidebar */
        .news-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e2e8f0;
        }
        
        .sidebar-widget h4 {
          font-size: 1.1rem;
          color: #1e293b;
          margin: 0 0 20px 0;
          padding-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .subscribe-widget {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: none;
          text-align: center;
        }
        
        .widget-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        
        .widget-icon i {
          font-size: 1.5rem;
          color: white;
        }
        
        .subscribe-widget h4 {
          border: none;
          padding: 0;
          margin-bottom: 8px;
        }
        
        .subscribe-widget p {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }
        
        .widget-price {
          margin-bottom: 16px;
        }
        
        .widget-price .price-amount {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1d4ed8;
        }
        
        .widget-price .price-period {
          color: #64748b;
        }
        
        .widget-btn {
          width: 100%;
          padding: 14px;
          background: #1d4ed8;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .widget-btn:hover {
          background: #1e40af;
        }
        
        .related-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .related-item {
          display: flex;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.2s;
        }
        
        .related-item:hover {
          transform: translateX(4px);
        }
        
        .related-thumb {
          width: 80px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .related-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .related-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .related-cat {
          font-size: 0.7rem;
          color: #1d4ed8;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        
        .related-info h5 {
          font-size: 0.9rem;
          color: #1e293b;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }
        
        .related-date {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        
        .category-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .category-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          text-decoration: none;
          color: #475569;
          transition: background 0.2s;
        }
        
        .category-item:hover {
          background: #f1f5f9;
        }
        
        .category-item .count {
          color: #94a3b8;
          font-size: 0.85rem;
        }
        
        @media (max-width: 1024px) {
          .news-detail-grid {
            grid-template-columns: 1fr;
          }
          
          .news-sidebar {
            order: -1;
            flex-direction: row;
            flex-wrap: wrap;
          }
          
          .sidebar-widget {
            flex: 1 1 calc(50% - 12px);
            min-width: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .news-title {
            font-size: 1.75rem;
          }
          
          .news-author-row {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .sidebar-widget {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  )
}

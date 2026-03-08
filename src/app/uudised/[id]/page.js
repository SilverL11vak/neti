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
    content: 'Hiljuti avaldatud uuring näitab, et Eesti elanikud eelistavad puhkuse veetmist kodumaal. Küsitluse kohaselt on viimase aasta jooksul 78% eestlastest puhkanud Eestis.\n\nKõige populaarsemad sihtkohad on Saaremaa, Parnu ja Lõuna-Eesti. Saaremaad külastatakse eelkõige looduse ja rahu tõttu, Parnut aga SPA ja hea teeninduse eest.\n\nSee on positiivne trend, kommenteeris Eesti Turismi juht. Kodumaine turism on jätkusuutlik ja toetab kohalikku majandust.\n\nUuringust selgus ka, et eestlased otsivad puhkusel eelkõige loodust ja aktiivset tegevust. Matkamine, jalgrattasõit ja veesport on kõige populaarsemad tegevused.\n\nHuvitav on see, et noored eelistavad siiski välismaist puhkust, eelkõige soojade maade reise. Üle 40-aastased aga eelistavad kodumaad.',
    contentEn: 'A recently published study shows that Estonian residents prefer spending their holidays domestically. According to the survey, 78% of Estonians have vacationed in Estonia over the past year.\n\nThe most popular destinations are Saaremaa, Parnu, and Southern Estonia. Saaremaa is visited primarily for its nature and tranquility, while Parnu is known for its SPA and good service.\n\nThis is a positive trend, commented the head of Estonian Tourism. Domestic tourism is sustainable and supports the local economy.\n\nThe study also revealed that Estonians look for nature and active activities on vacation. Hiking, cycling, and water sports are the most popular activities.\n\nInterestingly, young people still prefer foreign travel, especially trips to warm countries. Those over 40 prefer domestic destinations.'
  }
}

export default function NewsDetailPage() {
  const params = useParams()
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const newsId = parseInt(params.id)
  const article = newsArticles[newsId]
  
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="news-detail-not-found">
          <h1>Artiklit ei leitud</h1>
          <Link href="/" className="back-link">Tagasi avalehele</Link>
        </div>
        <style jsx>{`
          .news-detail-not-found {
            padding: 120px 24px;
            text-align: center;
          }
          .back-link {
            color: #1d4ed8;
            text-decoration: underline;
          }
        `}</style>
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
      
      {/* News Hero */}
      <section className="news-hero">
        <div className="news-hero-image">
          <img src={article.image} alt={article.title} />
          <div className="news-hero-overlay"></div>
        </div>
        <div className="news-hero-content">
          <Link href="/" className="news-back-link">
            <i className="fas fa-arrow-left"></i>
            Tagasi
          </Link>
          <span className="news-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="news-date">{article.date}</p>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="news-article">
        <div className="article-container">
          <p className="article-intro">{article.description}</p>
          
          {/* Visible content */}
          {visibleContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
          
          {/* Blurred content */}
          {!isSubscribed && (
            <div className="blurred-content">
              {blurredContent.map((part, index) => (
                <p key={index}>{part}</p>
              ))}
              
              {/* Subscribe CTA */}
              <div className="subscribe-cta">
                <div className="blur-overlay"></div>
                <div className="subscribe-box">
                  <i className="fas fa-lock"></i>
                  <h3>Loe lugu edasi</h3>
                  <p>Tellige NETI Premium ja saate juurdepääsu kõikidele uudistele ja artiklitele</p>
                  <div className="subscribe-price">
                    <span className="price-amount">€2.99</span>
                    <span className="price-period">/kuu</span>
                  </div>
                  <button className="subscribe-btn" onClick={() => setIsSubscribed(true)}>
                    Tellima kohe
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <p className="subscribe-trial">14-päevane tasuta prooviperiood</p>
                </div>
              </div>
            </div>
          )}
          
          {isSubscribed && (
            <div className="unlocked-content">
              {blurredContent.map((part, index) => (
                <p key={index}>{part}</p>
              ))}
            </div>
          )}
          
          {/* Share buttons */}
          <div className="share-section">
            <span>Jaga seda artiklit:</span>
            <div className="share-buttons">
              <button className="share-btn facebook"><i className="fab fa-facebook-f"></i></button>
              <button className="share-btn twitter"><i className="fab fa-twitter"></i></button>
              <button className="share-btn linkedin"><i className="fab fa-linkedin-in"></i></button>
              <button className="share-btn copy"><i className="fas fa-link"></i></button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related News */}
      <section className="related-news">
        <div className="related-container">
          <h2>Veel uudiseid</h2>
          <div className="related-grid">
            {Object.entries(newsArticles)
              .filter(([id]) => parseInt(id) !== newsId)
              .slice(0, 2)
              .map(([id, item]) => (
                <Link href={`/uudised/${id}`} key={id} className="related-card">
                  <div className="related-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="related-content">
                    <span className="related-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>© 2026 NETI.ee - Kõik õigused kaitstud</p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .news-hero {
          position: relative;
          height: 450px;
          display: flex;
          align-items: flex-end;
          color: white;
        }
        
        .news-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }
        
        .news-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .news-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%);
        }
        
        .news-hero-content {
          position: relative;
          z-index: 1;
          padding: 60px 24px;
          max-width: 800px;
        }
        
        .news-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          margin-bottom: 20px;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        
        .news-back-link:hover {
          opacity: 1;
        }
        
        .news-category {
          display: inline-block;
          padding: 6px 14px;
          background: #1d4ed8;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        
        .news-hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.2;
        }
        
        .news-date {
          font-size: 1rem;
          opacity: 0.8;
          margin: 0;
        }
        
        .news-article {
          padding: 60px 24px;
          background: white;
        }
        
        .article-container {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .article-intro {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #1e293b;
          font-weight: 500;
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .news-article p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 24px;
        }
        
        .blurred-content {
          position: relative;
        }
        
        .blurred-content p {
          filter: blur(8px);
          user-select: none;
          pointer-events: none;
        }
        
        .subscribe-cta {
          position: relative;
          margin: 40px 0;
        }
        
        .blur-overlay {
          position: absolute;
          top: -100px;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to bottom, transparent, white);
          pointer-events: none;
        }
        
        .subscribe-box {
          background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          color: white;
        }
        
        .subscribe-box i {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }
        
        .subscribe-box h3 {
          font-size: 1.75rem;
          margin: 0 0 12px 0;
        }
        
        .subscribe-box p {
          opacity: 0.9;
          margin-bottom: 24px;
          color: white;
        }
        
        .subscribe-price {
          margin-bottom: 24px;
        }
        
        .price-amount {
          font-size: 2.5rem;
          font-weight: 700;
        }
        
        .price-period {
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
        
        .subscribe-trial {
          font-size: 0.85rem;
          opacity: 0.7;
          margin-top: 16px;
        }
        
        .unlocked-content {
          margin-top: 40px;
        }
        
        .share-section {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .share-section span {
          font-weight: 600;
          color: #64748b;
        }
        
        .share-buttons {
          display: flex;
          gap: 12px;
        }
        
        .share-btn {
          width: 44px;
          height: 44px;
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
        
        .related-news {
          padding: 60px 24px;
          background: #f8fafc;
        }
        
        .related-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .related-container h2 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 32px;
        }
        
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .related-card {
          display: block;
          text-decoration: none;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        
        .related-image {
          height: 180px;
        }
        
        .related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .related-content {
          padding: 20px;
        }
        
        .related-category {
          display: inline-block;
          padding: 4px 10px;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 12px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        .related-content h3 {
          font-size: 1.1rem;
          color: #1e293b;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        
        .related-content p {
          font-size: 0.85rem;
          color: #64748b;
          margin: 0;
        }
        
        .footer {
          background: #1e293b;
          padding: 20px 0;
          color: white;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .footer-bottom {
          text-align: center;
        }
        
        .footer-bottom p {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .news-hero {
            height: 350px;
          }
          
          .news-hero-content h1 {
            font-size: 1.75rem;
          }
          
          .related-grid {
            grid-template-columns: 1fr;
          }
          
          .subscribe-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  )
}

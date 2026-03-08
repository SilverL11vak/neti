'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

const zodiacSigns = [
  { id: 'aries', name: 'Jäärapäev', symbol: '♈', dates: '21.03 - 19.04', element: 'Tuli', quality: 'Juht' },
  { id: 'taurus', name: 'Sõnn', symbol: '♉', dates: '20.04 - 20.05', element: 'Maa', quality: 'Stabiilne' },
  { id: 'gemini', name: 'Kaksikud', symbol: '♊', dates: '21.05 - 20.06', element: 'Õhk', quality: 'Muutlik' },
  { id: 'cancer', name: 'Vähk', symbol: '♋', dates: '21.06 - 22.07', element: 'Vesi', quality: 'Tundlik' },
  { id: 'leo', name: 'Lõvi', symbol: '♌', dates: '23.07 - 22.08', element: 'Tuli', quality: 'Loominguline' },
  { id: 'virgo', name: 'Neitsi', symbol: '♍', dates: '23.08 - 22.09', element: 'Maa', quality: 'Analüütiline' },
  { id: 'libra', name: 'Kaalud', symbol: '♎', dates: '23.09 - 22.10', element: 'Õhk', quality: 'Harmooniline' },
  { id: 'scorpio', name: 'Skorpion', symbol: '♏', dates: '23.10 - 21.11', element: 'Vesi', quality: 'Kirglik' },
  { id: 'sagittarius', name: 'Amburi', symbol: '♐', dates: '22.11 - 21.12', element: 'Tuli', quality: 'Seikluslik' },
  { id: 'capricorn', name: 'Kaljukits', symbol: '♑', dates: '22.12 - 19.01', element: 'Maa', quality: 'Ambitsioonikas' },
  { id: 'aquarius', name: 'Veevalaja', symbol: '♒', dates: '20.01 - 18.02', element: 'Õhk', quality: 'Innovatiivne' },
  { id: 'pisces', name: 'Kalad', symbol: '♓', dates: '19.02 - 20.03', element: 'Vesi', quality: 'Intuitiivne' }
]

const horoscopeData = {
  aries: {
    daily: 'Täna on hea päev uute alguste jaoks. Sinu ambitsioon viib sind edasi! Ära karda võtta riske - see võib tuua sulle suuri võite. Võid saada üllatava kutse või pakkumise.',
    weekly: 'See nädal toob sulle uusi võimalusi karjääris. Suhted on esikohal, veed aega lähedastega. reedel võib saada hea uudise.',
    monthly: 'Märts on sinu jaoks muutuste kuu. Uued algused ootavad sind nii tööl kui isiklikus elus. Päikeseenergia annab sulle jõudu.',
    love: 'Singlid: Sa võid kohtuda kellegi erilisega täna. Paarid: Tehke koos midagi erilist - reis või uus kogemus tugevdab sidet.',
    work: 'Karjäär edeneb hästi. Sinu jõupingutused märgatakse ja premeeritakse. Uus projekt võib tuua karjääri tõuke.',
    health: 'Energiat on piisavalt, kuid pööra tähelepanu unekvaliteedile. Joog piisavalt vett ja liigu värskes õhus.',
    luckyNumbers: [7, 14, 21, 28, 35],
    luckyColor: 'Punane',
    compatible: 'Lõvi, Sõnn'
  },
  taurus: {
    daily: 'Finantsasjad on täna soodsad. Ära kiirusta otsustega, tee läbimõeldud valikuid. Su püsivus tasub ära hiljem.',
    weekly: 'Nädal toob sulle stabiilsust ja turvatunnet. Keskendu oma eelarvele ja planeeri tulevikku. Kodu võib nõuda tähelepanu.',
    monthly: 'Aprill on sinu jaoks hea kuu uute investeeringute jaoks. Armastus ja raha käivad käsikäes.',
    love: 'Singlid: Armastus võib tulla ootamatult - ole avatud uutele inimestele. Paarid: Tehke koos midagi praktilist - remont või aiatöö tugevdab sidet.',
    work: 'Tööl on aeg võtta asja rahulikumalt. Sinu järjekindlus tasub ära. Võid saada tõusu või preemia.',
    health: 'Hea aeg alustada uue trennirežiimiga. Pööra tähelepanu seljale ja pikaajalisele istumisele.',
    luckyNumbers: [6, 15, 24, 33, 42],
    luckyColor: 'Roheline',
    compatible: 'Neitsi, Kaljukits'
  },
  gemini: {
    daily: 'Suhtlus avab uusi võimalusi. Kohtud huvitavate inimestega, uudne mõte võib viia suure eduni.',
    weekly: 'See nädal on suhtluse jaoks väga soodne. Kirjuta, helista inimestele, kellega pole ammu rääkinud. Lühireis võib tuua üllatusi.',
    monthly: 'Märts toob sulle palju võimalusi õppimiseks ja arenguks. Ära karda proovida midagi uut.',
    love: 'Singlid: Sa oled täna eriti sümpaatne ja ligitõmbav. Kasuta seda ära! Paarid: Rääkige avatult oma tunnetest.',
    work: 'Loomingulised ideed toovad sulle edu. Ära hoia ideid endale - jaga neid meeskonnas.',
    health: 'Vaimne energia on kõrge, kuid pööra tähelepanu närvidele. Meditatsioon või jooga aitab.',
    luckyNumbers: [5, 14, 23, 32, 41],
    luckyColor: 'Kollane',
    compatible: 'Kaalud, Veevalaja'
  },
  cancer: {
    daily: 'Pere ja kodu pakuvad täna rõõmu. Veisa aega lähedastega, tee midagi meeldivat kodus.',
    weekly: 'Emotsionaalne nädal - pööra tähelepanu oma tunnetele ja vajadustele. Lähedased toetavad sind alati.',
    monthly: 'Kodu ja pere on sel kuul esikohal. Võib tulla suur elumuutus seoses elukohaga.',
    love: 'Singlid: Emotsionaalne avatus toob sulle armastust. Paarid: Tehke koos midagi romantilist - õhtusöök või kinna.',
    work: 'Tööl võib tekkida konflikt - püüa seda lahendada rahulikult. Sinu empaatiavõime on sinu tugevus.',
    health: 'Pööra tähelepanu dieedile ja seedimisele. Joog rohkelt vett ja väldi rasket toitu.',
    luckyNumbers: [2, 11, 20, 29, 38],
    luckyColor: 'Hõbe',
    compatible: 'Skorpion, Kalad'
  },
  leo: {
    daily: 'Sinu loovus on tipptasemel. Näita oma talente maailmale ja ära karda olla eriline!',
    weekly: 'Nädal toob sulle palju tähelepanu ja tunnustust. Sinu sära paistab silma igal pool.',
    monthly: 'Märts on sinu jaoks hiilgav kuu. Kõik, mida sa puudutad, muutub kuldseks!',
    love: 'Singlid: Sa oled täna eriti võluv. Ära karda kellegi järele helistada! Paarid: Tehke koos midagi erilist ja pidulikku.',
    work: 'Karjäär edeneb laineliselt. Sinu liderlikud oskused toovad sulle edu. Uus võimalus võib tulla ootamatult.',
    health: 'Energia on kõrge! Hea aeg uute spordialade proovimiseks. Pööra tähelepanu südamele.',
    luckyNumbers: [1, 10, 19, 28, 37],
    luckyColor: 'Kuldne',
    compatible: 'Jäärapäev, Amburi'
  },
  virgo: {
    daily: 'Tähelepanu detailidele toob edu. Sinu analüütiline mõtlemine tasub ära igas olukorras.',
    weekly: 'See nädal on hea planeerimiseks ja koristamiseks. Tee nimekiri asjadest, mida teha tahad.',
    monthly: 'Tervis ja heaolu on sel kuul esikohal. Pööra tähelepanu enesele.',
    love: 'Singlid: Sa võid leida kellegi, kes jagab sinu väärtusi. Paarid: Tehke koos midagi tervislikku.',
    work: 'Tööl on aeg keskenduda detailsele tööle. Sinu täpsus on hindamatu. Võid saada preemia.',
    health: 'Hea aeg alustada tervislikuma eluviisiga. Tee väikseid muutusi, mis annavad suuri tulemusi.',
    luckyNumbers: [5, 14, 23, 32, 41],
    luckyColor: 'Roheline',
    compatible: 'Sõnn, Kaljukits'
  },
  libra: {
    daily: 'Tasakaal on täna su võti. Leiad harmoonia suhetes ja sisemise rahu.',
    weekly: 'Nädal toob sulle palju sotsiaalseid võimalusi. Kohtud uute inimestega, lood uusi sidemeid.',
    monthly: 'Märts on suurepärane kuu suhete jaoks. Võid leida eluõnne või tugevdada olemasolevat sidet.',
    love: 'Singlid: Armastus on õhus! Pööra tähelepanu inimestele, kellega kohtud. Paarid: Tehke kompromisse ja leidke tasakaal.',
    work: 'Tööl on hea aeg teha koostööd. Sinu diplomaatilised oskused on hindamatuks.',
    health: 'Pööra tähelepanu vaimsele tervisele. Leiad tasakaalu meditatsiooni ja joogaga.',
    luckyNumbers: [6, 15, 24, 33, 42],
    luckyColor: 'Roosa',
    compatible: 'Kaksikud, Veevalaja'
  },
  scorpio: {
    daily: 'Sinu intuitsioon on eriti terav täna. Usalda oma sisetunnet ja järgi seda!',
    weekly: 'Nädal toob sulle sügavaid elamusi. Pööra tähelepanu oma sisemaailmale ja tegele enda tervisega.',
    monthly: 'Muutused on selles kuus paratamatud. Ole valmis ja vasta neile leidlikult.',
    love: 'Singlid: Sul on eriline külgetõmme kellegagi. Paarid: Tehke koos midagi põnevat, et tugevdada sidet.',
    work: 'Sinu ambitsioon ja jõud viivad sind edasi. Ära lase kellelgi endale ette jääda.',
    health: 'Pööra tähelepanu vaimsele tervisele. Vabane asjadest, mis sind enam ei teeni.',
    luckyNumbers: [8, 17, 26, 35, 44],
    luckyColor: 'Must',
    compatible: 'Vähk, Kalad'
  },
  sagittarius: {
    daily: 'Seiklused ootavad! Reisimine toob sulle uusi kogemusi ja laiendab silmaringi.',
    weekly: 'Nädal on täis põnevust ja uusi võimalusi. Ära karda võtta riske ja proovida midagi uut.',
    monthly: 'Märts toob sulle võimaluse reisida ja õppida. Ava oma meel uutele ideedele.',
    love: 'Singlid: Sa oled täna eriti seiklushimuline - võid kohtuda kellegi erilisega reisil. Paarid: Tehke koos seiklus!',
    work: 'Karjääris võib tulla suur muutus. Sinu optimism ja energia mõjutavad teisi positiivselt.',
    health: 'Liikumine on sinu jaoks eriti tähtis. Tee seda, mida armastad - tulemus tuleb ise.',
    luckyNumbers: [3, 12, 21, 30, 39],
    luckyColor: 'Lilla',
    compatible: 'Jäärapäev, Lõvi'
  },
  capricorn: {
    daily: 'Karjäär edeneb hästi. Sinu vis töö tasub ära - varsti võid näha tulemusi!',
    weekly: 'See nädal on hea pikaajaliste plaanide tegemiseks. Sinu ambitsioon viib sind edasi.',
    monthly: 'Kõik sinu kõvad tööd hakkavad tasuma. Vali järgmine suur samm targalt.',
    love: 'Singlid: Armastus võib tulla ootamatult, kuid pööra tähelepanu sõpradele. Paarid: Tehke koos midagi praktilist.',
    work: 'Tööl on suur edu oodata. Sinu visadus ja distsipliin toovad sulle kõrgema ametikoha.',
    health: 'Pööra tähelepanu应力ele ja vaimsele tervisele. Võta aega puhkamiseks.',
    luckyNumbers: [8, 17, 26, 35, 44],
    luckyColor: 'Hall',
    compatible: 'Sõnn, Neitsi'
  },
  aquarius: {
    daily: 'Innovatsioon on sinu küljes. Leiad uusi lahendusi vanadele probleemidele!',
    weekly: 'Nädal toob sulle erilisi võimalusi. Pööra tähelepanu oma originaalsetele ideedele.',
    monthly: 'Märts on sinu jaoks muutuste kuu. Uued ideed ja tehnoloogia mängivad suures rollis.',
    love: 'Singlid: Sa oled täna eriti huvitav - pane endusse hea mulje. Paarid: Tehke koos midagi uuenduslikku.',
    work: 'Sinu loomingulisus ja tehniline taip toovad sulle edu. Ära karda erineda teistest.',
    health: 'Pööra tähelepanu oma vaimsele tervisele. Leia aega sõpradega suhtlemiseks.',
    luckyNumbers: [4, 13, 22, 31, 40],
    luckyColor: 'Sinine',
    compatible: 'Kaksikud, Kaalud'
  },
  pisces: {
    daily: 'Kunst ja loovus on täna esikohal. Anna endale lubadusi ja unista suurelt!',
    weekly: 'Nädal toob sulle palju emotsionaalseid kogemusi. Pööra tähelepanu oma intuitsioonile.',
    monthly: 'Märts on sinu jaoks vaimse kasvu kuu. Usk endasse ja oma võimetesse!',
    love: 'Singlid: Romantika on õhus - ole avatud uutele võimalustele. Paarid: Tehke koos midagi loomingulist.',
    work: 'Sinu kunstiline Anne ja empaatia toovad sulle edu. Ära lase kriitikal end heidutada.',
    health: 'Pööra tähelepanu unele ja puhkusele. Meditatsioon ja jooga aitavad sul tasakaalu leida.',
    luckyNumbers: [3, 12, 21, 30, 39],
    luckyColor: 'Türkiis',
    compatible: 'Vähk, Skorpion'
  }
}

export default function HoroskoopPage() {
  const [selectedSign, setSelectedSign] = useState(zodiacSigns[0])
  const [period, setPeriod] = useState('daily')
  const [showAll, setShowAll] = useState(false)

  const signData = horoscopeData[selectedSign.id]

  const today = new Date()
  const dateStr = today.toLocaleDateString('et-EE', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="horo-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            {dateStr}
          </span>
          <h1 className="hero-title">
            <span className="gradient-text">Horoskoop</span>
          </h1>
          <p className="hero-subtitle">Sinu isiklikud astroloogilised juhendid</p>
        </div>
      </section>

      {/* Period Tabs */}
      <div className="period-tabs">
        <button 
          className={`period-tab ${period === 'daily' ? 'active' : ''}`}
          onClick={() => setPeriod('daily')}
        >
          <i className="fas fa-sun"></i>
          Täna
        </button>
        <button 
          className={`period-tab ${period === 'weekly' ? 'active' : ''}`}
          onClick={() => setPeriod('weekly')}
        >
          <i className="fas fa-calendar-week"></i>
          Nädal
        </button>
        <button 
          className={`period-tab ${period === 'monthly' ? 'active' : ''}`}
          onClick={() => setPeriod('monthly')}
        >
          <i className="fas fa-calendar-alt"></i>
          Kuu
        </button>
      </div>

      {/* Zodiac Selection */}
      <section className="section">
        <div className="container">
          <div className="zodiac-grid">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.id}
                className={`zodiac-btn ${selectedSign.id === sign.id ? 'active' : ''}`}
                onClick={() => setSelectedSign(sign)}
              >
                <span className="zodiac-symbol">{sign.symbol}</span>
                <span className="zodiac-name">{sign.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Sign Reading */}
          <div className="reading-card">
            <div className="reading-header">
              <span className="reading-symbol">{selectedSign.symbol}</span>
              <div className="reading-title">
                <h2>{selectedSign.name}</h2>
                <p>{selectedSign.dates}</p>
              </div>
              <div className="reading-tags">
                <span className="tag">{selectedSign.element}</span>
                <span className="tag">{selectedSign.quality}</span>
              </div>
            </div>

            <div className="reading-content">
              <h3>
                {period === 'daily' ? 'Päeva horoskoop' : period === 'weekly' ? 'Nädala horoskoop' : 'Kuu horoskoop'}
              </h3>
              <p className="reading-text">
                {period === 'daily' ? signData.daily : period === 'weekly' ? signData.weekly : signData.monthly}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="stats-row">
              <div className="stat-box">
                <i className="fas fa-heart"></i>
                <span className="stat-label">Armastus</span>
                <span className="stat-value">{signData.love.split(':')[0]}</span>
              </div>
              <div className="stat-box">
                <i className="fas fa-briefcase"></i>
                <span className="stat-label">Töö</span>
                <span className="stat-value">{signData.work.split(':')[0]}</span>
              </div>
              <div className="stat-box">
                <i className="fas fa-heartbeat"></i>
                <span className="stat-label">Tervis</span>
                <span className="stat-value">{signData.health.split(':')[0]}</span>
              </div>
            </div>

            {/* Lucky Info */}
            <div className="lucky-section">
              <h3><i className="fas fa-star"></i> Õnne numbrid ja värv</h3>
              <div className="lucky-grid">
                <div className="lucky-item">
                  <span className="lucky-label">Õnne numbrid</span>
                  <div className="lucky-numbers">
                    {signData.luckyNumbers.map((num, i) => (
                      <span key={i} className="lucky-num">{num}</span>
                    ))}
                  </div>
                </div>
                <div className="lucky-item">
                  <span className="lucky-label">Õnne värv</span>
                  <span className="lucky-color">{signData.luckyColor}</span>
                </div>
                <div className="lucky-item">
                  <span className="lucky-label">Sobiv märk</span>
                  <span className="lucky-signs">{signData.compatible}</span>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Näita vähem' : 'Vaata kõiki'}
              <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>

            {/* Expanded Content */}
            {showAll && (
              <div className="expanded-content">
                <div className="detail-section">
                  <h3><i className="fas fa-heart"></i> Armastus</h3>
                  <p>{signData.love}</p>
                </div>
                <div className="detail-section">
                  <h3><i className="fas fa-briefcase"></i> Karjäär</h3>
                  <p>{signData.work}</p>
                </div>
                <div className="detail-section">
                  <h3><i className="fas fa-heartbeat"></i> Tervis</h3>
                  <p>{signData.health}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

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

/**
 * NETI - Shared Data Layer
 * Centralized static data for the entire application
 * This data is used across multiple pages and is cached for performance
 */

// Categories data from neti.ee
export const categories = [
  {
    id: 'state-society',
    title: 'Riik ja Ühiskond',
    titleEn: 'State and Society',
    icon: 'fa-landmark',
    desc: 'Riigiorganid, kohalik omavalitsus, seadused ja poliitika',
    count: 245,
    subcategories: ['Riigikogu', 'Valitsus', 'Ministeeriumid', 'Ametid', 'Riigiõigus', 'Riigikaitse', 'Esindused', 'MTÜ', 'Regioonid', 'Vallad', 'Linnad', 'Erakonnad', 'Usk', 'SotsAbi', 'Laps', 'Eraisikud']
  },
  {
    id: 'info-media',
    title: 'Info ja Meedia',
    titleEn: 'Info and Media',
    icon: 'fa-newspaper',
    desc: 'Uudised, portaalid, ajakirjandus, raadio ja televisioon',
    count: 389,
    subcategories: ['Portaalid', 'Ajalehed', 'Ajakirjad', 'Televisioon', 'Raadiod', 'Foorumid', 'Kuulutused', 'Üritused', 'Ilm', 'Kaardid', 'Sõiduplaanid', 'Valuutakursid', 'Sõnastikud', 'Kalkulaatorid', 'Kataloogid']
  },
  {
    id: 'business',
    title: 'Äri ja Reisimine',
    titleEn: 'Business and Travel',
    icon: 'fa-briefcase',
    desc: 'Pangad, kindlustus, töövahendus, transport ja turism',
    count: 567,
    subcategories: ['Pangad', 'Laenud', 'Kindlustus', 'Töövahendus', 'Ärikoolitus', 'Keeleõpe', 'Tõlketeenused', 'Raamatud', 'Õigusabi', 'Raamatupidamine', 'Kontorikaubad', 'Post', 'Transport', 'Turism']
  },
  {
    id: 'science-tech',
    title: 'Tehnika ja Ehitus',
    titleEn: 'Technology and Construction',
    icon: 'fa-cogs',
    desc: 'Kinnisvara, ehitus, autod ja tehnika',
    count: 423,
    subcategories: ['Kinnisvara', 'Ehitus', 'Tööriistad', 'Ehitusmaterjalid', 'Metall', 'Puit', 'Sanitaartehnika', 'Energia', 'Arvutid', 'Internet', 'Side', 'Mobiilid', 'Autod', 'Rent', 'Hooldus', 'Varuosad', 'Kütus', 'Autokoolid']
  },
  {
    id: 'education',
    title: 'Haridus ja Kultuur',
    titleEn: 'Education and Culture',
    icon: 'fa-graduation-cap',
    desc: 'Koolid, ülikoolid, kultuur ja teadus',
    count: 198,
    subcategories: ['Haridus', 'Algkoolid', 'Põhikoolid', 'Keskkoolid', 'Kõrgkoolid', 'Kutseõppeasutused', 'Eriharidus', 'Õppematerjalid', 'Teadus', 'Ajalugu', 'Kirjandus', 'Rahvamajad', 'Raamatukogud', 'Muuseumid', 'Teater', 'Kunst', 'Kunstnikud', 'Fotograafid']
  },
  {
    id: 'entertainment',
    title: 'Meelelahutus ja Hobid',
    titleEn: 'Entertainment and Hobbies',
    icon: 'fa-gamepad',
    desc: 'Mängud, film, muusika ja kultuur',
    count: 612,
    subcategories: ['Mängud', 'E-kaart', 'Tutvus', 'Jututoad', 'Huviklubid', 'Koduloomad', 'Veterinaaria', 'Loto', 'Film', 'Muusika', 'Inimene', 'Horoskoobid', 'Mood', 'Tants', 'Toitlustus', 'Ööklubid', 'Täiskasvanutele']
  },
  {
    id: 'health',
    title: 'Tervis ja Sport',
    titleEn: 'Health and Sports',
    icon: 'fa-heartbeat',
    desc: 'Meditsiin, ilu, toitumine ja sport',
    count: 276,
    subcategories: ['Meditsiin', 'Arstid', 'Hambaarstid', 'Haiglad', 'Apteegid', 'Meditsiinivahendid', 'Psühholoogia', 'Tervishoid', 'Vanurid', 'Puuded', 'Iluteenindus', 'Parfüümeeria', 'Spa', 'Sport', 'Spordikaubad']
  },
  {
    id: 'home-environment',
    title: 'Kodu ja Keskkond',
    titleEn: 'Home and Environment',
    icon: 'fa-home',
    desc: 'Kodu, aed, keskkond, loomad ja pere',
    count: 334,
    subcategories: ['Kodutehnika', 'Mööbel', 'Kodutekstiil', 'Rõivad', 'Ehted-Lilled', 'Lastekaubad', 'Fototeenused', 'Turvalisus', 'Puhastus', 'Keskkond', 'Põllundus', 'Aiandus', 'Toidukaubad', 'Kauplused']
  }
]

// Quick links for the homepage
export const quickLinks = [
  { text: 'Postimees', icon: 'fa-newspaper' },
  { text: 'Swedbank', icon: 'fa-university' },
  { text: 'Tartu Ülikool', icon: 'fa-graduation-cap' },
  { text: 'Kuldne Börs', icon: 'fa-car' },
  { text: 'Telia', icon: 'fa-mobile-alt' },
  { text: 'SEB', icon: 'fa-building-columns' },
  { text: 'Apollo', icon: 'fa-book' },
  { text: 'Bolt', icon: 'fa-taxi' }
]

// News items for carousel
export const newsItems = [
  {
    id: 1,
    title: 'Tallinnas avati uus moodsate tehnoloogiate keskus',
    titleEn: 'New modern technology center opened in Tallinn',
    description: 'Eesti pealinnas avati täna suurim tehnoloogia- ja innovatsioonikeskus, kus startup-id ja tehnoloogiaettevõtted saavad arendada uusi lahendusi.',
    descriptionEn: 'The capital of Estonia opened the largest technology and innovation center today, where startups and technology companies can develop new solutions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop',
    date: '8. märts 2026',
    category: 'Tehnoloogia'
  },
  {
    id: 2,
    title: 'Eesti ilu- ja tervisemess toimub sel nädalal',
    titleEn: 'Estonian beauty and health fair this week',
    description: 'Nädalavahetusel toimub Tallinnas suur ilu- ja tervisemess, kus osalevad tuntud brändid ja eksperdid jagavad nõuandeid tervisliku eluviisi kohta.',
    descriptionEn: 'This weekend a major beauty and health fair takes place in Tallinn, where well-known brands and experts will share advice on healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop',
    date: '7. märts 2026',
    category: 'Tervis'
  },
  {
    id: 3,
    title: 'Uuring: Eestlased eelistavad puhkuseks kodumaad',
    titleEn: 'Study: Estonians prefer domestic travel for holidays',
    description: 'Uuringu kohaselt eelistavad Eesti elanikud puhkuse veetmist kodumaal, eelkõige Saaremaal ja Pärnumaal, kus pakutakse matka- ja SPA-võimalusi.',
    descriptionEn: 'According to a study, Estonian residents prefer spending their holidays domestically, especially in Saaremaa and Pärnu county, which offer hiking and SPA opportunities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    date: '6. märts 2026',
    category: 'Reisimine'
  },
  {
    id: 4,
    title: 'Eesti ekonomi kasvas eelmisel aastal 3%',
    titleEn: 'Estonian economy grew 3% last year',
    description: 'Statistikaameti andmetel kasvas Eesti SKP eelmisel aastal 3%, mis ületab Euroopa Liidu keskmist.',
    descriptionEn: 'According to Statistics Estonia, Estonia\'s GDP grew by 3% last year, which exceeds the European Union average.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop',
    date: '5. märts 2026',
    category: 'Majandus'
  },
  {
    id: 5,
    title: 'Uus elektriauto laeb 80% 15 minutiga',
    titleEn: 'New electric car charges 80% in 15 minutes',
    description: 'Eesti startup arendas välja uue kiirlaadimise tehnoloogia, mis võimaldab elektriautodel laadida kuni 80% vaid 15 minutiga.',
    descriptionEn: 'An Estonian startup developed new fast charging technology that allows electric cars to charge up to 80% in just 15 minutes.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop',
    date: '4. märts 2026',
    category: 'Tehnoloogia'
  },
  {
    id: 6,
    title: 'Tallinna raamatukogu avas uue digitaalse teenuse',
    titleEn: 'Tallinn Library launches new digital service',
    description: 'Tallinna Keskraamatukogu pakub nüüd võimalust laenutada e-raamatuid ja audioraamatuid otse nutiseadmesse.',
    descriptionEn: 'Tallinn Central Library now offers the ability to borrow e-books and audiobooks directly to your smart device.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop',
    date: '3. märts 2026',
    category: 'Kultuur'
  }
]

// Zodiac signs data
export const zodiacSigns = [
  { id: 'aries', symbol: '♈', name: 'Jäärapäev', nameEn: 'Aries', date: '21.03 - 19.04', horoscope: { et: 'Täna on hea päev uute alguste jaoks. Sinu ambitsioon viib sind edasi!', en: 'Today is a good day for new beginnings. Your ambition will drive you forward!' }},
  { id: 'taurus', symbol: '♉', name: 'Sõnn', nameEn: 'Taurus', date: '20.04 - 20.05', horoscope: { et: 'Rahaasjad on täna soodsad. Võid saada ootamatut tulu.', en: 'Financial matters are favorable today. You may receive unexpected income.' }},
  { id: 'gemini', symbol: '♊', name: 'Kaksikud', nameEn: 'Gemini', date: '21.05 - 20.06', horoscope: { et: 'Suhted on täna esikohal. Hea aeg kohtumisteks.', en: 'Relationships are in focus today. A good time for meetings.' }},
  { id: 'cancer', symbol: '♋', name: 'Vähk', nameEn: 'Cancer', date: '21.06 - 22.07', horoscope: { et: 'Kodu ja pere on täna tähtsad. Hea aeg kodusisustamiseks.', en: 'Home and family are important today. Good time for home improvements.' }},
  { id: 'leo', symbol: '♌', name: 'Lõvi', nameEn: 'Leo', date: '23.07 - 22.08', horoscope: { et: 'Sinu karisma viib sind täna edasi. Tähtis päev!', en: 'Your charisma drives you forward today. An important day!' }},
  { id: 'virgo', symbol: '♍', name: 'Neitsi', nameEn: 'Virgo', date: '23.08 - 22.09', horoscope: { et: 'Täna on hea päev tervisele keskendumiseks.', en: 'Today is a good day to focus on health.' }},
  { id: 'libra', symbol: '♎', name: 'Kaalud', nameEn: 'Libra', date: '23.09 - 22.10', horoscope: { et: 'Balanss on võtmesõna. Leia harmoonia.', en: 'Balance is the keyword. Find harmony.' }},
  { id: 'scorpio', symbol: '♏', name: 'Skorpion', nameEn: 'Scorpio', date: '23.10 - 21.11', horoscope: { et: 'Salajased asjad tulevad ilmsiks. Ära karda tõde.', en: 'Secret things come to light. Do not be afraid of the truth.' }},
  { id: 'sagittarius', symbol: '♐', name: 'Amburi', nameEn: 'Sagittarius', date: '22.11 - 21.12', horoscope: { et: 'Seiklus kutsub! Hea aeg reisimiseks.', en: 'Adventure calls! Good time for traveling.' }},
  { id: 'capricorn', symbol: '♑', name: 'Kaljukits', nameEn: 'Capricorn', date: '22.12 - 19.01', horoscope: { et: 'Karjääri edendamine on täna fookuses.', en: 'Career advancement is in focus today.' }},
  { id: 'aquarius', symbol: '♒', name: 'Veevalaja', nameEn: 'Aquarius', date: '20.01 - 18.02', horoscope: { et: 'Loovus lendab täna kõrgustesse. Kasuta seda!', en: 'Creativity soars today. Use it!' }},
  { id: 'pisces', symbol: '♓', name: 'Kalad', nameEn: 'Pisces', date: '19.02 - 20.03', horoscope: { et: 'Intuitsioon on tugev. Kuula sisetunnet.', en: 'Intuition is strong. Listen to your gut.' }}
]

// Car brands for autod page
export const carBrands = [
  { id: 'toyota', name: 'Toyota', nameEn: 'Toyota', icon: 'fa-landmark' },
  { id: 'volkswagen', name: 'Volkswagen', nameEn: 'Volkswagen', icon: 'fa-bus' },
  { id: 'bmw', name: 'BMW', nameEn: 'BMW', icon: 'fa-car' },
  { id: 'mercedes', name: 'Mercedes-Benz', nameEn: 'Mercedes-Benz', icon: 'fa-star' },
  { id: 'audi', name: 'Audi', nameEn: 'Audi', icon: 'fa-ring' },
  { id: 'volvo', name: 'Volvo', nameEn: 'Volvo', icon: 'fa-shield-alt' },
  { id: 'ford', name: 'Ford', nameEn: 'Ford', icon: 'fa-truck-monster' },
  { id: 'peugeot', name: 'Peugeot', nameEn: 'Peugeot', icon: 'fa-paw' },
]

// Car types
export const carTypes = [
  { id: 'sedan', name: 'Sedan', icon: 'fa-car' },
  { id: 'suv', name: 'SUV', icon: 'fa-truck-monster' },
  { id: 'wagon', name: 'Sõiduk', icon: 'fa-caravan' },
  { id: 'coupe', name: 'Kupee', icon: 'fa-car-side' },
  { id: 'hatchback', name: 'Hatchback', icon: 'fa-car-burst' },
  { id: 'van', name: 'Kaubik', icon: 'fa-truck' },
]

// Mock car data
export const mockCars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 28900,
    mileage: 45000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: 'Uus'
  },
  {
    id: 2,
    brand: 'BMW',
    model: '3 Series',
    year: 2021,
    price: 35900,
    mileage: 52000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    location: 'Tartu',
    badge: null
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    price: 21900,
    mileage: 68000,
    fuel: 'Diesel',
    transmission: 'Manuaal',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop',
    location: 'Pärnu',
    badge: 'allahindlus'
  },
  {
    id: 4,
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    price: 32900,
    mileage: 48000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    location: 'Narva',
    badge: null
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 38900,
    mileage: 38000,
    fuel: 'Bensin',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: 'Top'
  },
  {
    id: 6,
    brand: 'Volvo',
    model: 'XC60',
    year: 2021,
    price: 36900,
    mileage: 55000,
    fuel: 'Diesel',
    transmission: 'Automaat',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
    location: 'Tallinn',
    badge: null
  }
]

// Property types
export const propertyTypes = [
  { id: 'apartment', name: 'Korter', icon: 'fa-building' },
  { id: 'house', name: 'Maja', icon: 'fa-home' },
  { id: 'villa', name: 'Mõis', icon: 'fa-landmark' },
  { id: 'cottage', name: 'Suvila', icon: 'fa-tree' },
  { id: 'land', name: 'Maatükk', icon: 'fa-map' },
  { id: 'commercial', name: 'Äripind', icon: 'fa-store' },
]

// Counties
export const counties = [
  'Tallinn', 'Tartu', 'Pärnu', 'Narva', 'Kohtla-Järve', 
  'Johvi', 'Viljandi', 'Rakvere', 'Maardu', 'Kuressaare'
]

// Mock property data
export const mockProperties = [
  {
    id: 1,
    title: 'Modernne 3-toaline korter kesklinnas',
    type: 'Korter',
    address: 'Vabaduse väljak 4, Tallinn',
    price: 185000,
    rooms: 3,
    area: 85,
    floor: '3/5',
    year: 2018,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    location: 'Tallinn, Kesklinn',
    badge: 'Uus'
  },
  {
    id: 2,
    title: 'Päikeseline eramu aeda ja basseiniga',
    type: 'Maja',
    address: 'Männi tee 12, Tartu',
    price: 420000,
    rooms: 5,
    area: 220,
    floor: '2',
    year: 2015,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    location: 'Tartu',
    badge: null
  },
  {
    id: 3,
    title: 'Luksuslik penthouse merevaatega',
    type: 'Korter',
    address: 'Pirita tee 20, Tallinn',
    price: 550000,
    rooms: 4,
    area: 180,
    floor: '10/12',
    year: 2020,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    location: 'Tallinn, Pirita',
    badge: 'Top'
  },
  {
    id: 4,
    title: 'Hubane puidust suvila järve ääres',
    type: 'Suvela',
    address: 'Järveotsa, Pärnu',
    price: 125000,
    rooms: 3,
    area: 75,
    floor: '1',
    year: 1985,
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&h=400&fit=crop',
    location: 'Pärnu',
    badge: null
  },
  {
    id: 5,
    title: 'Äripind kesklinnas - väga hea asukohaga',
    type: 'Äripind',
    address: 'Viru väljak 2, Tallinn',
    price: 380000,
    rooms: 6,
    area: 250,
    floor: '1/3',
    year: 2010,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    location: 'Tallinn, Kesklinn',
    badge: 'Hot'
  },
  {
    id: 6,
    title: 'Suur maatükk ehitusloaga',
    type: 'Maatükk',
    address: 'Kloogari, Harju maakond',
    price: 89000,
    rooms: 0,
    area: 5000,
    floor: '-',
    year: null,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    location: 'Harju maakond',
    badge: null
  }
]

// Horoscope detailed data
export const horoscopeData = {
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
    daily: 'Sinu intensiivsus on sinu tugevus. Pööra energia iseendasse ja saavutad palju.',
    weekly: 'See nädal toob sulle sügavaid avastusi. Uuri oma sisimaid soove ja julge minna neile järele.',
    monthly: 'November on sinu transformatsiooni kuu. Lase minevikul minna ja võta vastu uus algus.',
    love: 'Singlid: Süüvimine toob sulle syvemaid yhendusi. Paarid: Yhine reis või seiklus tugevdab sidet.',
    work: 'Sinu ambitsioon viib sind edasi. Ära lase kõrvalistel häältel sind peatada.',
    health: 'Pööra tähelepanu oma emotsionaalsele tervisele. Leia tasakaal sise- ja välismaailma vahel.',
    luckyNumbers: [8, 17, 26, 35, 44],
    luckyColor: 'Must',
    compatible: 'Vähk, Kalad'
  },
  sagittarius: {
    daily: 'Seiklus kutsub! Täna on hea päev uute horisontide avastamiseks.',
    weekly: 'Nädal toob sulle põnevaid võimalusi. Ole valmis uuteks kogemusteks ja kohtumisteks.',
    monthly: 'Märts on sinu jaoks vabaduse kuu. Reisi, õpi, avasta - piire pole!',
    love: 'Singlid: Sa võid kohtuda kellegi erilisega reisil. Paarid: Tehke koos midagi seikluslikku.',
    work: 'Sinu optimism ja energia on nakkavad. Sinu jõud on sinu positiivsus.',
    health: 'Liikumine on sinu ravim. Tee midagi aktiivset iga päev.',
    luckyNumbers: [3, 12, 21, 30, 39],
    luckyColor: 'Lilla',
    compatible: 'Lõvi, Jäärapäev'
  },
  capricorn: {
    daily: 'Sinu visadus tasub ära. Püsi oma tee ja sa näed tulemusi.',
    weekly: 'Nädal toob sulle võimalusi edasiliikumiseks. Sinu töö maksab ära!',
    monthly: 'jaanuar on sinu kuu. Pane alus uutele saavutustele.',
    love: 'Singlid: Fokus oma karjäärile ja armastus tuleb ise. Paarid: Tehke koos pikaajalisi plaane.',
    work: 'Karjäär on esikohal. Sinu ambitsioon viib sind tippu.',
    health: 'Pööra tähelepanu stressile. Leia aega puhkuseks.',
    luckyNumbers: [4, 13, 22, 31, 40],
    luckyColor: 'Hall',
    compatible: 'Neitsi, Sõnn'
  },
  aquarius: {
    daily: 'Sinu unikaalsus on sinu kingitus maailmale. Ole iseennast!',
    weekly: 'Nädal toob sulle uusi ideid ja sõpru. Ole avatud uutele mõtetele.',
    monthly: 'Veebruar on sinu kuu. Uued algused ja uued ideed ootavad.',
    love: 'Singlid: Otsi kedagi, kes sind tõeliselt mõistab. Paarid: Tehke koos midagi loovat.',
    work: 'Sinu loovus ja innovatsioon on sinu tugevus. Ära karda erineda.',
    health: 'Pööra tähelepanu vaimsele tervisele. Sosiaalsus on sinu jaoks oluline.',
    luckyNumbers: [2, 11, 20, 29, 38],
    luckyColor: 'Helesinine',
    compatible: 'Kaksikud, Kaljukits'
  },
  pisces: {
    daily: 'Sinu intuitsioon on tugev. Kuula oma sisist häält!',
    weekly: 'Nädal toob sulle emotsionaalseid kogemusi. Pööra tähelepanu oma tunnetele.',
    monthly: 'Märts on sinu kuu. Püsi kursis oma vajadustega.',
    love: 'Singlid: Romantika on õhus. Paarid: Tehke koos midagi romantilist.',
    work: 'Sinu empaatia ja loovus on sinu tugevus. Kasuta neid.',
    health: 'Pööra tähelepanu oma vaimsele tervisele. Meditatsioon aitab.',
    luckyNumbers: [3, 12, 21, 30, 39],
    luckyColor: 'Türkiis',
    compatible: 'Vähk, Skorpion'
  }
}

// News articles for uudised page
export const newsArticles = {
  1: {
    title: 'Tallinnas avati uus moodsate tehnoloogiate keskus',
    titleEn: 'New modern technology center opened in Tallinn',
    description: 'Eesti pealinnas avati täna suurim tehnoloogia- ja innovatsioonikeskus, kus startup-id ja tehnoloogiaettevõtted saavad arendada uusi lahendusi.',
    descriptionEn: 'The capital of Estonia opened the largest technology and innovation center today, where startups and technology companies can develop new solutions.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    date: '8. märts 2026',
    category: 'Tehnoloogia',
    author: 'NETI Toimetus',
    readTime: '5 min',
    content: 'Täna avati Tallinnas pidulikult uus moodsate tehnoloogiate keskus, mis on Eesti suurim sellelaadne rajatis. Keskusesse on investeeritud üle 50 miljoni euro ja see pakub töökohti ligikaudu 2000 inimesele.\n\nUus keskus asub Tallinna kesklinnas ja hõlmab endas mitmeid erinevaid tehnoloogiavaldkondi, sealhulgas kunstliku intellekti, robootika ja fintechi startupe. Keskuse eesmärk on luua ökosüsteem, kus idufirmad saaksid areneda ja kasvada koostöös suurettevõtetega.\n\nSee on suur samm Eesti tehnoloogiasektorile, ütles keskuse direktor. Me tahame luua koha, kus innovatsioon saab õitseda ja kus noored ettevõtjad saavad oma ideid ellu viia.\n\nKeskus pakub lisaks tööruumidele ka nõustamisteenuseid, mentorprogramme ja ligipääsu riskikapitalile. Esimeste rentnikena on keskusesse asunud juba 30 ettevõtet, kuid ruume on veel vabadele ideedele.\n\nEesti Vabariigi president avas keskuse pidulikult ja rõhutas, et innovatsioon on Eesti tuleviku võti. Me peame jätkama investeerimist tehnoloogiasse ja haridusse, et säilitada oma konkurentsivõimet maailmas, ütles president.\n\nKeskus on avatud kõigile ettevõtjatele ja startuppidele, kes soovivad arendada uusi tehnoloogilisi lahendusi. Kandideerimine ruumidele on juba alanud ja esimeste ettevõtete sissesekkumine on planeeritud järgmistesse kuudesse.',
    contentEn: 'Today, a grand opening ceremony was held in Tallinn for a new modern technology center, which is the largest such facility in Estonia. Over 50 million euros have been invested in the center, which will provide jobs for approximately 2,000 people.\n\nThe new center is located in central Tallinn and encompasses several different technology sectors, including artificial intelligence, robotics, and fintech startups. The goal is to create an ecosystem where startups can develop and grow in cooperation with major companies.\n\nThis is a big step for Estonia technology sector, said the center director. We want to create a place where innovation can thrive and where young entrepreneurs can bring their ideas to life.\n\nIn addition to office spaces, the center offers consulting services, mentor programs, and access to venture capital. The first tenants have already moved in, but there are still spaces available for new ideas.\n\nThe President of Estonia opened the center ceremonially and emphasized that innovation is the key to Estonia future. We must continue investing in technology and education to maintain our competitiveness in the world, said the president.\n\nThe center is open to all entrepreneurs and startups who want to develop new technological solutions. Applications for spaces have already begun, and the first companies are scheduled to move in next month.'
  },
  2: {
    title: 'Eesti ilu- ja tervisemess toimub sel nädalal',
    titleEn: 'Estonian beauty and health fair this week',
    description: 'Nädalavahetusel toimub Tallinnas suur ilu- ja tervisemess, kus osalevad tuntud brändid ja eksperdid jagavad nõuandeid tervisliku eluviisi kohta.',
    descriptionEn: 'This weekend a major beauty and health fair takes place in Tallinn, where well-known brands and experts will share advice on healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=600&fit=crop',
    date: '7. märts 2026',
    category: 'Tervis',
    author: 'NETI Toimetus',
    readTime: '3 min',
    content: 'Sel nädalavahetusel toimub Tallinnas XXII Eesti ilu- ja tervisemess, mis on aasta suurim sündmus selles valdkonnas. Messi korraldajad ootavad üle 20 000 külastaja.\n\nMessil esitlevad oma tooteid ja teenuseid üle 150 ettevõtte, sh tuntud ilu- ja tervisebrandid. Külastajad saavad osaleda tasuta töötubades ja kuulata ekspertide ettekandeid.\n\nSee on suurepärane võimalus tutvuda uusimate trendidega ilu- ja tervisemaailmas, ütles korraldaja. Oleme seekord keskendunud eriti jätkusuutlikele ja looduslikele toodetele.\n\nMessi programm sisaldab ka mitmeid võistlusi, sh modellivõistlust ja ilukonkurssi. Lisaks toimub galaõhtu, kus autasustatakse aasta parimaid ilutooteid ja teenuseid.\n\nEksperdid rõhutavad, et tervislik eluviis on muutunud üha olulisemaks ja inimesed otsivad pidevalt uusi viise, kuidas oma heaolu parandada. Mess pakub selleks suurepärase võimaluse.',
    contentEn: 'This weekend, the XXII Estonian Beauty and Health Fair takes place in Tallinn, which is the biggest annual event in this field. The organizers expect over 20,000 visitors.\n\nMore than 150 companies will present their products and services at the fair, including well-known beauty and health brands. Visitors can participate in free workshops and listen to expert presentations.\n\nThis is a great opportunity to learn about the latest trends in the beauty and health world, said the organizer. This year, we have focused particularly on sustainable and natural products.\n\nThe fair program also includes several competitions, including a modeling contest and a beauty pageant. Additionally, a gala evening will take place where the best beauty products and services of the year will be awarded.\n\nExperts emphasize that a healthy lifestyle has become increasingly important, and people are constantly looking for new ways to improve their well-being. The fair provides an excellent opportunity for this.'
  },
  3: {
    title: 'Uuring: Eestlased eelistavad puhkuseks kodumaad',
    titleEn: 'Study: Estonians prefer domestic travel for holidays',
    description: 'Uuringu kohaselt eelistavad Eesti elanikud puhkuse veetmist kodumaal, eelkõige Saaremaal ja Pärnumaal, kus pakutakse matka- ja SPA-võimalusi.',
    descriptionEn: 'According to a study, Estonian residents prefer spending their holidays domestically, especially in Saaremaa and Pärnu county, which offer hiking and SPA opportunities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    date: '6. märts 2026',
    category: 'Reisimine',
    author: 'NETI Toimetus',
    readTime: '4 min',
    content: 'Hiljuti avaldatud uuring näitab, et Eesti elanikud eelistavad puhkuse veetmist kodumaal. Küsitluse kohaselt on viimase aasta jooksul 78% eestlastest puhkanud Eestis.\n\nKõige populaarsemad sihtkohad on Saaremaa, Pärnu ja Lõuna-Eesti. Saaremaad külastatakse eelkõige looduse ja rahu tõttu, Pärnut aga SPA ja hea teeninduse eest.\n\nSee on positiivne trend, kommenteeris Eesti Turismi juht. Kodumaine turism on jätkusuutlik ja toetab kohalikku majandust.\n\nUuringust selgus ka, et eestlased otsivad puhkusel eelkõige loodust ja aktiivset tegevust. Matkamine, jalgrattasõit ja veesport on kõige populaarsemad tegevused.\n\nHuvitav on see, et noored eelistavad siiski välismaist puhkust, eelkõige soojade maade reise. Üle 40-aastased aga eelistavad kodumaad.',
    contentEn: 'A recently published study shows that Estonian residents prefer spending their holidays domestically. According to the survey, 78% of Estonians have vacationed in Estonia over the past year.\n\nThe most popular destinations are Saaremaa, Pärnu, and Southern Estonia. Saaremaa is visited primarily for its nature and tranquility, while Pärnu is known for its SPA and good service.\n\nThis is a positive trend, commented the head of Estonian Tourism. Domestic tourism is sustainable and supports the local economy.\n\nThe study also revealed that Estonians look for nature and active activities on vacation. Hiking, cycling, and water sports are the most popular activities.\n\nInterestingly, young people still prefer foreign travel, especially trips to warm countries. Those over 40 prefer domestic destinations.'
  }
}

// Default weather data
export const defaultWeather = {
  temp: 8,
  feelsLike: 6,
  condition: 'Poolpilves',
  conditionEn: 'Partly Cloudy',
  wind: 12,
  humidity: 78,
  uv: 2,
  precipitation: 0,
  visibility: 10
}

// Export all data as a single object for convenience
export const siteData = {
  categories,
  quickLinks,
  newsItems,
  zodiacSigns,
  carBrands,
  carTypes,
  mockCars,
  propertyTypes,
  counties,
  mockProperties,
  horoscopeData,
  newsArticles,
  defaultWeather
}

export default siteData

/**
 * NETI.EE - Modern Estonian Web Catalog
 * Interactive JavaScript Functionality
 */

// =====================================================
// Category Data
// =====================================================
const categoriesData = [
    {
        id: 'state-society',
        title: 'Riik ja Ühiskond',
        titleEn: 'State and Society',
        icon: 'fa-landmark',
        desc: 'Riigiorganid, kohalik omavalitsus, seadused ja poliitika',
        descEn: 'Government bodies, local government, laws and politics',
        count: 245,
        subcategories: ['Riigikogu', 'Valitsus', 'Kohalikud omavalitsused', 'Seadused', 'Valimised']
    },
    {
        id: 'info-media',
        title: 'Info ja Meedia',
        titleEn: 'Info and Media',
        icon: 'fa-newspaper',
        desc: 'Uudised, portaalid, ajakirjandus, raadio ja televisioon',
        descEn: 'News, portals, journalism, radio and television',
        count: 389,
        subcategories: ['Portaalid', 'Ajakirjandus', 'Raadio', 'Televisioon', 'Ilm']
    },
    {
        id: 'business',
        title: 'Äri',
        titleEn: 'Business',
        icon: 'fa-briefcase',
        desc: 'Firmad, kaubandus, reklaam, tööstus ja põllumajandus',
        descEn: 'Companies, commerce, advertising, industry and agriculture',
        count: 567,
        subcategories: ['Firmad', 'Kaubandus', 'Reklaam', 'Tööstus', 'Põllumajandus']
    },
    {
        id: 'science-tech',
        title: 'Teadus ja Tehnika',
        titleEn: 'Science and Technology',
        icon: 'fa-microscope',
        desc: 'Teadus, tehnika, arvutid, internet ja innovatsioon',
        descEn: 'Science, technology, computers, internet and innovation',
        count: 423,
        subcategories: ['Teadus', 'Tehnika', 'Arvutid', 'Internet', 'Startupid']
    },
    {
        id: 'education',
        title: 'Haridus',
        titleEn: 'Education',
        icon: 'fa-graduation-cap',
        desc: 'Kõrgkoolid, koolid, õppematerjalid ja elukestev õpe',
        descEn: 'Universities, schools, study materials and lifelong learning',
        count: 198,
        subcategories: ['Kõrgkoolid', 'Koolid', 'Õppematerjalid', 'Raamatukogud', 'Keeleõpe']
    },
    {
        id: 'entertainment',
        title: 'Meelelahutus',
        titleEn: 'Entertainment',
        icon: 'fa-music',
        desc: 'Muusika, film, kunst, sport, mängud ja kultuur',
        descEn: 'Music, film, art, sports, games and culture',
        count: 612,
        subcategories: ['Muusika', 'Film', 'Kunst', 'Sport', 'Mängud', 'Horoskoobid']
    },
    {
        id: 'health',
        title: 'Tervis',
        titleEn: 'Health',
        icon: 'fa-heartbeat',
        desc: 'Meditsiin, ilu, toitumine ja tervislik eluviis',
        descEn: 'Medicine, beauty, nutrition and healthy lifestyle',
        count: 276,
        subcategories: ['Meditsiin', 'Ilu', 'Toitumine', 'Fitness', 'Psühholoogia']
    },
    {
        id: 'home-environment',
        title: 'Kodu ja Keskkond',
        titleEn: 'Home and Environment',
        icon: 'fa-home',
        desc: 'Kodu, aed, keskkond, loomad ja pere',
        descEn: 'Home, garden, environment, animals and family',
        count: 334,
        subcategories: ['Kodu', 'Aed', 'Keskkond', 'Loomad', 'Reisimine']
    }
];

// =====================================================
// Horoscope Data
// =====================================================
const horoscopeData = {
    aries: {
        name: 'Jäärapäev',
        nameEn: 'Aries',
        reading: 'Täna on hea päev uute alguste jaoks. Sinu ambitsioon viib sind edasi!',
        readingEn: 'Today is a good day for new beginnings. Your ambition will drive you forward!'
    },
    taurus: {
        name: 'Sõnn',
        nameEn: 'Taurus',
        reading: 'Finantsasjad on täna soodsad. Ära kiirusta otsustega.',
        readingEn: 'Financial matters are favorable today. Don\'t rush into decisions.'
    },
    gemini: {
        name: 'Kaksikud',
        nameEn: 'Gemini',
        reading: 'Suhtlus avab uusi võimalusi. Kohtud huvitavate inimestega.',
        readingEn: 'Communication opens new opportunities. You\'ll meet interesting people.'
    },
    cancer: {
        name: 'Vähk',
        nameEn: 'Cancer',
        reading: 'Pere ja kodu pakuvad täna rõõmu. Veisa aega lähedastega.',
        readingEn: 'Family and home bring joy today. Spend time with loved ones.'
    },
    leo: {
        name: 'Lõvi',
        nameEn: 'Leo',
        reading: 'Sinu loovus on tipptasemel. Näita oma talente maailmale!',
        readingEn: 'Your creativity is at its peak. Show your talents to the world!'
    },
    virgo: {
        name: 'Neitsi',
        nameEn: 'Virgo',
        reading: 'Tähelepanu detailidele toob edu. Sinu analüütiline mõtlemine tasub ära.',
        readingEn: 'Attention to detail brings success. Your analytical thinking pays off.'
    }
};

// =====================================================
// Search Suggestions
// =====================================================
const searchSuggestions = [
    { text: 'Riigikogu', icon: 'fa-landmark', category: 'Riik ja Ühiskond' },
    { text: 'Postimees', icon: 'fa-newspaper', category: 'Info ja Meedia' },
    { text: 'Swedbank', icon: 'fa-university', category: 'Äri' },
    { text: 'Tartu Ülikool', icon: 'fa-graduation-cap', category: 'Haridus' },
    { text: 'Tallinn', icon: 'fa-map-marker-alt', category: 'Info ja Meedia' },
    { text: 'Kultuur', icon: 'fa-theater-masks', category: 'Meelelahutus' },
    { text: 'Tervis', icon: 'fa-heartbeat', category: 'Tervis' },
    { text: 'Kinnisvara', icon: 'fa-home', category: 'Äri' },
    { text: 'Ilm', icon: 'fa-cloud-sun', category: 'Info ja Meedia' },
    { text: 'Autod', icon: 'fa-car', category: 'Äri' }
];

// =====================================================
// DOM Elements
// =====================================================
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const mainSearch = document.getElementById('mainSearch');
const heroSearch = document.getElementById('heroSearch');
const searchDropdown = document.getElementById('searchDropdown');
const categoriesGrid = document.getElementById('categoriesGrid');
const langBtns = document.querySelectorAll('.lang-btn');
const newsletterForm = document.getElementById('newsletterForm');

// Current state
let currentLang = 'et';
let currentZodiac = 'aries';

// =====================================================
// Initialization
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCategories();
    initSearch();
    initLanguageToggle();
    initMobileMenu();
    initScrollEffects();
    initHoroscope();
    initNewsletter();
});

// =====================================================
// Theme Management
// =====================================================
function initTheme() {
    const savedTheme = localStorage.getItem('neti-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('neti-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    const iconMobile = themeToggleMobile ? themeToggleMobile.querySelector('i') : null;
    
    if (theme === 'dark') {
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        if (iconMobile) {
            iconMobile.classList.remove('fa-moon');
            iconMobile.classList.add('fa-sun');
        }
    } else {
        if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        if (iconMobile) {
            iconMobile.classList.remove('fa-sun');
            iconMobile.classList.add('fa-moon');
        }
    }
}

// Theme toggle event listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', () => {
        toggleTheme();
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
}

// =====================================================
// Categories Initialization
// =====================================================
function initCategories() {
    if (!categoriesGrid) return;
    
    categoriesData.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="category-icon">
                <i class="fas ${cat.icon}"></i>
            </div>
            <h3 class="category-title">${cat.title}</h3>
            <p class="category-title-en">${cat.titleEn}</p>
            <p class="category-desc">${cat.desc}</p>
            <div class="category-count">
                <i class="fas fa-link"></i>
                ${cat.count} lehte
            </div>
            <div class="category-expand">
                <i class="fas fa-arrow-right"></i>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = 'kategooria.html';
        });
        
        categoriesGrid.appendChild(card);
    });
}

// =====================================================
// Search Functionality
// =====================================================
function performSearch(query) {
    window.location.href = `otsing.html?q=${encodeURIComponent(query)}`;
}

function initSearch() {
    const searchInputs = [mainSearch, heroSearch];
    
    searchInputs.forEach(input => {
        if (!input) return;
        
        // Handle Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim().length > 0) {
                performSearch(input.value.trim());
            }
        });
        
        // Handle input
        input.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase().trim();
            if (value.length > 0) {
                showSuggestions(value);
            } else {
                hideSuggestions();
            }
        });
        
        // Handle focus
        input.addEventListener('focus', () => {
            if (input.value.trim().length > 0) {
                showSuggestions(input.value.toLowerCase().trim());
            }
        });
        
        // Handle blur
        input.addEventListener('blur', () => {
            setTimeout(hideSuggestions, 200);
        });
    });
    
    // Search button handlers
    const searchButtons = document.querySelectorAll('.hero-search-btn');
    searchButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input && input.value.trim().length > 0) {
                performSearch(input.value.trim());
            }
        });
    });
}

function showSuggestions(query) {
    if (!searchDropdown) return;
    
    const suggestions = searchSuggestions.filter(s => 
        s.text.toLowerCase().includes(query) || 
        s.category.toLowerCase().includes(query)
    );
    
    if (suggestions.length === 0) {
        searchDropdown.innerHTML = `
            <div class="search-suggestion">
                <i class="fas fa-search"></i>
                <span>Otsi: "${query}"</span>
            </div>
        `;
    } else {
        searchDropdown.innerHTML = suggestions.map(s => `
            <div class="search-suggestion">
                <i class="fas ${s.icon}"></i>
                <div>
                    <strong>${s.text}</strong>
                    <small style="color: var(--text-muted);">${s.category}</small>
                </div>
            </div>
        `).join('');
    }
    
    searchDropdown.classList.add('active');
}

function hideSuggestions() {
    if (searchDropdown) {
        searchDropdown.classList.remove('active');
    }
}

// Make performSearch available globally
window.performSearch = performSearch;

// =====================================================
// Language Toggle
// =====================================================
function initLanguageToggle() {
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update elements with translations
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        const text = el.getAttribute(`data-lang-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
    
    // Update placeholders
    const heroSearchInput = document.getElementById('heroSearch');
    if (heroSearchInput) {
        const placeholder = heroSearchInput.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) {
            heroSearchInput.placeholder = placeholder;
        }
    }
    
    if (mainSearch) {
        if (lang === 'et') mainSearch.placeholder = 'Otsi Eesti veebilehti...';
        else if (lang === 'en') mainSearch.placeholder = 'Search Estonian websites...';
        else if (lang === 'ru') mainSearch.placeholder = 'Поиск эстонских сайтов...';
    }
    
    updateCategoryLanguage();
    updateHoroscopeText();
}

function updateCategoryLanguage() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        const cat = categoriesData[index];
        if (!cat) return;
        
        const title = card.querySelector('.category-title');
        const titleEn = card.querySelector('.category-title-en');
        const desc = card.querySelector('.category-desc');
        
        if (currentLang === 'et') {
            if (title) title.textContent = cat.title;
            if (titleEn) titleEn.textContent = cat.titleEn;
            if (desc) desc.textContent = cat.desc;
        } else {
            if (title) title.textContent = cat.titleEn;
            if (titleEn) titleEn.textContent = cat.title;
            if (desc) desc.textContent = cat.descEn;
        }
    });
}

function updateHoroscopeText() {
    const zodiac = horoscopeData[currentZodiac];
    const textEl = document.getElementById('horoscopeText');
    
    if (textEl && zodiac) {
        textEl.textContent = currentLang === 'et' ? zodiac.reading : zodiac.readingEn;
    }
}

// =====================================================
// Mobile Menu
// =====================================================
function initMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// =====================================================
// Scroll Effects
// =====================================================
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (navbar) {
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.category-card, .widget, .ad-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// =====================================================
// Horoscope Carousel
// =====================================================
function initHoroscope() {
    const zodiacCards = document.querySelectorAll('.zodiac-card');
    
    zodiacCards.forEach(card => {
        card.addEventListener('click', () => {
            const zodiac = card.dataset.zodiac;
            
            zodiacCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentZodiac = zodiac;
            updateHoroscopeText();
        });
    });
}

// =====================================================
// Newsletter Form
// =====================================================
function initNewsletter() {
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input').value;
        const button = newsletterForm.querySelector('button');
        const originalIcon = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.background = 'var(--accent-alt)';
        
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.background = '';
            newsletterForm.querySelector('input').value = '';
            console.log('Newsletter subscribed:', email);
        }, 2000);
    });
}

# NETI.EE REDESIGN SPECIFICATION

## Project Overview
- **Project Name**: NETI.EE - Modern Estonian Web Catalog
- **Type**: Award-winning web directory and search system
- **Core Functionality**: Estonian internet catalog with intelligent search, category navigation, and dynamic widgets
- **Target Users**: Estonian users seeking local web resources

---

## UI/UX SPECIFICATION

### Layout Structure
- **Header**: Fixed navigation bar (64px height) with logo, search bar, language toggle, dark mode switch
- **Hero Section**: Full viewport height with animated gradient background and search CTA
- **Categories Section**: 3-column responsive grid with interactive cards
- **Featured Widgets Section**: Horizontal scrollable cards for weather, horoscopes, games
- **Ads Section**: Modern card-based sponsored content
- **Footer**: Multi-column layout with sitemap, social links, newsletter

### Responsive Breakpoints
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (3-4 columns)

### Visual Design

#### Color Palette
- **Primary**: #001F3F (Deep Navy)
- **Primary Light**: #003366
- **Accent**: #00BFFF (Electric Cyan)
- **Accent Alt**: #00FF94 (Neon Mint)
- **Gradient Start**: #667eea
- **Gradient End**: #764ba2
- **Background Light**: #F0F4F8
- **Background Dark**: #0a0a0f
- **Card Light**: #ffffff
- **Card Dark**: #1a1a2e
- **Text Primary**: #1a1a2e
- **Text Secondary**: #6b7280
- **Text Light**: #e5e7eb

#### Typography
- **Headings**: "Clash Display" (Variable, bold, modern)
- **Body**: "Satoshi" (Clean, readable)
- **Accent/Numbers**: "Space Mono" (Tech feel)
- **Font Sizes**:
  - H1: 4rem (64px)
  - H2: 2.5rem (40px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

#### Spacing System
- Base unit: 8px
- Sections: 80px vertical padding
- Cards: 24px padding
- Grid gap: 24px

#### Visual Effects
- **Glassmorphism**: backdrop-filter: blur(20px) on cards
- **Neumorphism**: Subtle shadows for depth
- **Gradients**: Purple-to-blue aurora effect on hero
- **Animations**:
  - Fade-in on scroll (intersection observer)
  - Hover scale (1.02) with transition
  - Card flip for category details
  - Floating particles in hero background
  - Smooth accordion expand

### Components

#### 1. Navigation Bar
- Logo: "NETI" in Clash Display with gradient text
- Search bar: Rounded, with autocomplete dropdown
- Language toggle: ET/EN/RU flags
- Dark mode toggle: Sun/Moon icons
- Mobile: Hamburger menu with slide-in drawer

#### 2. Hero Section
- Animated gradient mesh background
- Large headline: "Avasta Eesti Veebi"
- Subheadline: "Sinu nutikaim sisenemispunkt Eesti internetimaailma"
- Search bar with voice search icon
- Floating category quick-access pills

#### 3. Category Cards
- Icon (custom SVG or Heroicons)
- Title in Estonian + English tooltip
- Brief description
- Sub-category count badge
- Hover: Glow effect + scale

#### 4. Weather Widget
- Current temperature with animated icon
- Location: Tallinn
- Wind speed, humidity
- 3-day mini forecast
- Glass card design

#### 5. Horoscope Widget
- Carousel of 12 zodiac signs
- Daily reading preview
- "Loe rohkem" CTA
- Swipeable on mobile

#### 6. Games Widget
- Daily crossword, Sudoku, Quiz
- Card preview with difficulty
- "Mängi kohe" button

#### 7. Ads Section (soov.ee)
- Sponsored cards with "Reklaam" badge
- Categories: Autod, Kinnisvara, Töö
- Modern banner design

#### 8. Footer
- Logo repeat
- Category quick links
- Social icons (X, Facebook, Instagram)
- Newsletter signup form
- Copyright + Privacy links

---

## FUNCTIONALITY SPECIFICATION

### Core Features
1. **Intelligent Search**: Autocomplete with category suggestions
2. **Category Navigation**: Expandable cards with sub-categories
3. **Dark/Light Mode**: Toggle with system preference detection
4. **Language Switch**: ET/EN/RU with content translation
5. **Weather Display**: Simulated real-time weather data
6. **Horoscope Carousel**: Swipeable zodiac readings
7. **Responsive Design**: Mobile-first approach

### User Interactions
- Search: Type to see autocomplete suggestions
- Categories: Click to expand/collapse sub-categories
- Dark mode: Click toggle to switch themes
- Language: Click flag to change language
- Widgets: Scroll/swipe through content
- Mobile menu: Tap hamburger to open/close

### Data Handling
- Category data: Static JSON structure
- Weather: Simulated with placeholder values
- Horoscopes: Static array of readings
- Search: Client-side filtering simulation

---

## ACCEPTANCE CRITERIA

### Visual Checkpoints
- [ ] Hero gradient animates smoothly
- [ ] Category cards have hover glow effect
- [ ] Dark mode switches all elements correctly
- [ ] Mobile menu slides in from right
- [ ] Weather widget displays all data points
- [ ] Horoscope carousel is swipeable

### Functional Checkpoints
- [ ] Search autocomplete shows suggestions on typing
- [ ] Category expansion animates smoothly
- [ ] Dark/light mode persists on reload (localStorage)
- [ ] Language toggle changes visible text
- [ ] All external links work (placeholders ok)
- [ ] Page loads under 3 seconds

### Accessibility
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus states visible

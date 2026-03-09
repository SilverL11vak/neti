/**
 * NETI - Home Page (Server Component)
 * This is a Server Component that handles data fetching on the server
 * The client-side interactivity is handled by the HomeClient component
 */

import { Suspense } from 'react'
import HomeClient from '@/components/HomeClient'
import { getCategories, getQuickLinks, getNewsItems, getZodiacSigns } from '@/lib/data'

// Force dynamic rendering for real-time content
export const dynamic = 'force-dynamic'

// Revalidate every 5 minutes
export const revalidate = 300

// SEO Metadata
export const metadata = {
  title: 'NETI - Eesti Interneti Kataloog ja Otsingusüsteem',
  description: 'Avasta parimad Eesti veebilehed ühes kohas. NETI on Eesti juhtvebikataloog alates 1996. aastast.',
  keywords: 'Eesti, internet, kataloog, otsing, veebilehed, NETI',
  openGraph: {
    title: 'NETI - Eesti Interneti Kataloog',
    description: 'Avasta parimad Eesti veebilehed ühes kohas',
    type: 'website',
    locale: 'et_EE',
    siteName: 'NETI',
  },
}

export default function HomePage() {
  // Server-side data fetching (these are cached automatically)
  const categories = getCategories()
  const quickLinks = getQuickLinks()
  const newsItems = getNewsItems()
  const zodiacSigns = getZodiacSigns()

  return (
    <Suspense fallback={
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-globe"></i>
          </div>
          <h1 className="loading-title">NETI</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">Laadimine...</p>
        </div>
      </div>
    }>
      {/* Client component handles all interactivity */}
      <HomeClient />
    </Suspense>
  )
}

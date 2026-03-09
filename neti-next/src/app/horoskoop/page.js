/**
 * NETI - Horoskoop Page (Server Component)
 * Server-side data fetching with client interactivity
 */

import { Suspense } from 'react'
import HoroskoopClient from '@/components/HoroskoopClient'
import { getZodiacSigns, getHoroscopeData } from '@/lib/data'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

// Revalidate every hour
export const revalidate = 3600

// SEO Metadata
export const metadata = {
  title: 'Horoskoop - NETI',
  description: 'Päevane, nädalane ja kuine horoskoop kõikidele tähtkujudele.',
}

export default function HoroskoopPage() {
  // Server-side data fetching (cached)
  const zodiacSigns = getZodiacSigns()
  const horoscopeData = getHoroscopeData()

  return (
    <Suspense fallback={
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-star"></i>
          </div>
          <h1 className="loading-title">NETI</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">Laadimine...</p>
        </div>
      </div>
    }>
      <HoroskoopClient />
    </Suspense>
  )
}

/**
 * NETI - Autod Page (Server Component)
 * Server-side data fetching with client interactivity
 */

import { Suspense } from 'react'
import AutodClient from '@/components/AutodClient'
import { getCarBrands, getCarTypes, getMockCars } from '@/lib/data'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

// Revalidate every minute
export const revalidate = 60

// SEO Metadata
export const metadata = {
  title: 'Autod - NETI',
  description: 'Osta ja müü autosid Eestis. Suurim valik kasutatud ja uhi autosid.',
}

export default function AutodPage() {
  // Server-side data fetching (cached)
  const carBrands = getCarBrands()
  const carTypes = getCarTypes()
  const mockCars = getMockCars()

  return (
    <Suspense fallback={
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <i className="fas fa-car"></i>
          </div>
          <h1 className="loading-title">NETI</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">Laadimine...</p>
        </div>
      </div>
    }>
      <AutodClient />
    </Suspense>
  )
}

/**
 * NETI - Data Fetching Utilities
 * Server-side data fetching with caching
 */

import { cache } from 'react'
import { siteData } from '@/data'

/**
 * Get categories - cached for revalidation
 */
export const getCategories = cache(() => {
  return siteData.categories
})

/**
 * Get quick links - cached for revalidation
 */
export const getQuickLinks = cache(() => {
  return siteData.quickLinks
})

/**
 * Get news items - cached for revalidation
 */
export const getNewsItems = cache(() => {
  return siteData.newsItems
})

/**
 * Get news article by ID - cached for revalidation
 */
export const getNewsArticle = cache((id) => {
  return siteData.newsArticles[id] || null
})

/**
 * Get zodiac signs - cached for revalidation
 */
export const getZodiacSigns = cache(() => {
  return siteData.zodiacSigns
})

/**
 * Get horoscope data - cached for revalidation
 */
export const getHoroscopeData = cache(() => {
  return siteData.horoscopeData
})

/**
 * Get horoscope for specific sign - cached for revalidation
 */
export const getHoroscopeBySign = cache((signId) => {
  return siteData.horoscopeData[signId] || null
})

/**
 * Get car brands - cached for revalidation
 */
export const getCarBrands = cache(() => {
  return siteData.carBrands
})

/**
 * Get car types - cached for revalidation
 */
export const getCarTypes = cache(() => {
  return siteData.carTypes
})

/**
 * Get mock cars - cached for revalidation
 */
export const getMockCars = cache(() => {
  return siteData.mockCars
})

/**
 * Get car by ID - cached for revalidation
 */
export const getCarById = cache((id) => {
  return siteData.mockCars.find(car => car.id === id) || null
})

/**
 * Get property types - cached for revalidation
 */
export const getPropertyTypes = cache(() => {
  return siteData.propertyTypes
})

/**
 * Get counties - cached for revalidation
 */
export const getCounties = cache(() => {
  return siteData.counties
})

/**
 * Get mock properties - cached for revalidation
 */
export const getMockProperties = cache(() => {
  return siteData.mockProperties
})

/**
 * Get property by ID - cached for revalidation
 */
export const getPropertyById = cache((id) => {
  return siteData.mockProperties.find(property => property.id === id) || null
})

/**
 * Get all site data - cached for revalidation
 */
export const getAllSiteData = cache(() => {
  return siteData
})

/**
 * Search functionality
 */
export const searchData = cache((query) => {
  if (!query || typeof query !== 'string') {
    return { categories: [], cars: [], properties: [], news: [] }
  }
  
  const lowerQuery = query.toLowerCase()
  
  // Search categories
  const categories = siteData.categories.filter(cat => 
    cat.title.toLowerCase().includes(lowerQuery) ||
    cat.desc.toLowerCase().includes(lowerQuery) ||
    cat.subcategories.some(sub => sub.toLowerCase().includes(lowerQuery))
  )
  
  // Search cars
  const cars = siteData.mockCars.filter(car =>
    car.brand.toLowerCase().includes(lowerQuery) ||
    car.model.toLowerCase().includes(lowerQuery) ||
    car.location.toLowerCase().includes(lowerQuery)
  )
  
  // Search properties
  const properties = siteData.mockProperties.filter(prop =>
    prop.title.toLowerCase().includes(lowerQuery) ||
    prop.address.toLowerCase().includes(lowerQuery) ||
    prop.location.toLowerCase().includes(lowerQuery)
  )
  
  // Search news
  const news = siteData.newsArticles ? Object.values(siteData.newsArticles).filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description.toLowerCase().includes(lowerQuery)
  ) : []
  
  return { categories, cars, properties, news }
})

// Export revalidation times (in seconds)
export const revalidateConfig = {
  categories: 3600, // 1 hour
  news: 300, // 5 minutes
  cars: 60, // 1 minute
  properties: 60, // 1 minute
  horoscope: 3600, // 1 hour
  default: 300 // 5 minutes
}

export default {
  getCategories,
  getQuickLinks,
  getNewsItems,
  getNewsArticle,
  getZodiacSigns,
  getHoroscopeData,
  getHoroscopeBySign,
  getCarBrands,
  getCarTypes,
  getMockCars,
  getCarById,
  getPropertyTypes,
  getCounties,
  getMockProperties,
  getPropertyById,
  getAllSiteData,
  searchData,
  revalidateConfig
}

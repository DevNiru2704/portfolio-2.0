// Analytics configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 
  (process.env.NODE_ENV === 'production' ? 'G-YOUR-PRODUCTION-ID' : '');

// Only enable analytics in production
export const ANALYTICS_ENABLED = process.env.NODE_ENV === 'production' && GA_MEASUREMENT_ID;
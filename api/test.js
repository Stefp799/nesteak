// Simple test endpoint to check if Vercel functions work
export default async function handler(req, res) {
  try {
    // Test basic function
    console.log('Test endpoint called')

    // Test environment variables
    const hasPublishableKey = !!process.env.VITE_STRIPE_PUBLISHABLE_KEY
    const hasSecretKey = !!process.env.STRIPE_SECRET_KEY
    const appMode = process.env.VITE_APP_MODE

    res.status(200).json({
      success: true,
      message: 'Vercel function is working',
      environment: {
        has_publishable_key: hasPublishableKey,
        has_secret_key: hasSecretKey,
        app_mode: appMode,
        publishable_key_preview: process.env.VITE_STRIPE_PUBLISHABLE_KEY?.substring(0, 10) + '...',
        secret_key_preview: process.env.STRIPE_SECRET_KEY?.substring(0, 10) + '...'
      }
    })
  } catch (error) {
    console.error('Test endpoint error:', error)
    res.status(500).json({
      error: 'Function failed',
      message: error.message
    })
  }
}
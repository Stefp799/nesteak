export default function handler(req, res) {
  try {
    const hasPublishableKey = !!process.env.VITE_STRIPE_PUBLISHABLE_KEY
    const hasSecretKey = !!process.env.STRIPE_SECRET_KEY

    res.status(200).json({
      success: true,
      message: 'Vercel function is working',
      has_publishable_key: hasPublishableKey,
      has_secret_key: hasSecretKey,
      node_version: process.version
    })
  } catch (error) {
    res.status(500).json({
      error: 'Function failed',
      message: error.message
    })
  }
}